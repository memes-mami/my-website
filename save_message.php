<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $password = $_POST['password'];

    // Check if the password matches
    if ($password == "pass") { // Replace "your_password" with your actual password
        // Append data to a file named messages.txt
        $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";
        file_put_contents("messages.txt", $data, FILE_APPEND);
        echo "Thank you for your message, $name!"; // Response to send back to JavaScript
    } else {
        echo "Invalid password. Please try again."; // Response to send back to JavaScript
    }
} else {
    // If the request method is not POST, return an error message
    echo "Error: Invalid request method";
}
?>
