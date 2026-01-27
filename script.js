const API = "https://portfolio-backend-2-tzsc.onrender.com";

/* =============================
   DEVICE ID (ONCE)
============================= */
let deviceId = localStorage.getItem("device_id");
if (!deviceId) {
  deviceId = crypto.randomUUID();
  localStorage.setItem("device_id", deviceId);
}

/* =============================
   LOAD LIKES (STABLE)
============================= */
async function loadAllLikes() {
  const counters = document.querySelectorAll(".wishlist-counter");

  for (const counter of counters) {
    const postId = counter.dataset.id;
    const countEl = counter.querySelector("span");
    const icon = counter.querySelector("i");

    try {
      // COUNT
      const countRes = await fetch(`${API}/api/count/${postId}`);
      const countData = await countRes.json();
      countEl.innerText = countData.count || 0;

      // DEVICE LIKE
      const likedRes = await fetch(
        `${API}/api/liked/${postId}/${deviceId}`
      );
      const likedData = await likedRes.json();

      if (likedData.liked) {
        icon.classList.add("liked");
        icon.classList.replace("ri-heart-3-line", "ri-heart-3-fill");
      } else {
        icon.classList.remove("liked");
        icon.classList.replace("ri-heart-3-fill", "ri-heart-3-line");
      }

    } catch (err) {
      console.log("Backend waking up...");
    }
  }
}

/* =============================
   CLICK HANDLER
============================= */
document.addEventListener("click", e => {
  const counter = e.target.closest(".wishlist-counter");
  if (!counter) return;

  const postId = counter.dataset.id;
  const icon = counter.querySelector("i");
  const countEl = counter.querySelector("span");

  let count = Number(countEl.innerText) || 0;
  const liked = icon.classList.contains("liked");

  // ❤️ animation
  icon.classList.add("animate");
  setTimeout(() => icon.classList.remove("animate"), 250);

  if (liked) {
    // UNLIKE
    icon.classList.remove("liked");
    icon.classList.replace("ri-heart-3-fill", "ri-heart-3-line");
    countEl.innerText = Math.max(0, count - 1);

    fetch(`${API}/api/unlike`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_id: postId,
        device_id: deviceId
      })
    });

  } else {
    // LIKE
    icon.classList.add("liked");
    icon.classList.replace("ri-heart-3-line", "ri-heart-3-fill");
    countEl.innerText = count + 1;

    fetch(`${API}/api/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_id: postId,
        device_id: deviceId
      })
    });
  }
});

/* =============================
   CONTACT FORM SAFE
============================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async e => {
    e.preventDefault();

    const form = e.target;
    const statusBox = document.getElementById("form-status");
    const button = form.querySelector("button");

    button.innerText = "Sending...";
    button.disabled = true;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.querySelector("textarea").value
    };

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.success) {
        form.reset();
        statusBox.style.display = "block";
        setTimeout(() => {
          statusBox.style.display = "none";
        }, 4000);
      } else {
        alert("❌ Failed to send email");
      }

    } catch {
      alert("❌ Server not responding");
    }

    button.innerText = "Submit now";
    button.disabled = false;
  });
}

/* =============================
   INITIAL LOAD
============================= */
document.addEventListener("DOMContentLoaded", loadAllLikes);
