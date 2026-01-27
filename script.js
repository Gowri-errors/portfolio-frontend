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
   LOAD LIKES (FAST)
============================= */
async function loadAllLikes() {
  try {
    const res = await fetch(`${API}/api/counts`);
    const counts = await res.json();

    const map = {};
    counts.forEach(row => {
      map[row.post_id] = row.count;
    });

    document.querySelectorAll(".wishlist-counter").forEach(counter => {
      const postId = counter.dataset.id;
      const countEl = counter.querySelector("span");
      const icon = counter.querySelector("i");

      countEl.innerText = map[postId] || 0;

      if (icon.classList.contains("liked")) {
        icon.classList.replace("ri-heart-3-line", "ri-heart-3-fill");
      }
    });

  } catch {
    console.log("Backend waking up...");
  }
}


/* =============================
   CLICK HANDLER (INSTANT)
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

  // ===== INSTANT UI UPDATE =====
  if (liked) {
    icon.classList.remove("liked");
    icon.classList.replace("ri-heart-3-fill", "ri-heart-3-line");
    countEl.innerText = Math.max(0, count - 1);

    // Background DB update (non-blocking)
    fetch(`${API}/api/unlike`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_id: postId, device_id: deviceId })
    });
  } else {
    icon.classList.add("liked");
    icon.classList.replace("ri-heart-3-line", "ri-heart-3-fill");
    countEl.innerText = count + 1;

    fetch(`${API}/api/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_id: postId, device_id: deviceId })
    });
  }
});
 