<?php

$name = htmlspecialchars($_POST['name']);
$visitor_email = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

$mailheader = "From:".$name."<."$visitor_email".>\r\n";

$recipient = "e.pius1@alustudent.com";


mail($recipient, $subject, $message, $mailheader) or die("Out of service!")

echo 'message sent successfully'
?>