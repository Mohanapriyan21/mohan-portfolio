<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up the recipient email address
    $to = "youremail@gmail.com"; // Change this to your email address

    // Set up the email subject
    $subject = "New message from your website";

    // Construct the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Send the email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully.";
    } else {
        echo "Message delivery failed.";
    }
} else {
    // If the request method is not POST, return an error
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
