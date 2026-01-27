<?php
include "db.php";

if (isset($_POST['email'])) {

    $email = $_POST['email'];

    // prevent duplicate emails
    $check = "SELECT * FROM subscribers WHERE email='$email'";
    $result = mysqli_query($conn, $check);

    if (mysqli_num_rows($result) > 0) {
        echo "You already subscribed!";
    } else {

        $query = "INSERT INTO subscribers(email) VALUES('$email')";
        mysqli_query($conn, $query);

        echo "Thanks for subscribing ❤️";
    }
}
?>
