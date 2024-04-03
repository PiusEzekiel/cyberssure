<?php
$name = $_POST['name'];
$visitor_email =$_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'wizard@cyberssure.com';

$email_subject = 'New Incident Submitted on CyberSSure';

$email_body = "User Name: $name.\n".
            "User Email: $visitor_email.\n".
            "Subject: $subject.\n".
            "Message: $message.\n";

$to = 'e.pius1@alustudent.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");
?>

