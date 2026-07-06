<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';
$email = $data['email'] ?? '';
$location = $data['location'] ?? '';
$license = $data['hasLicense'] ?? '';

$ourphone = "8788846646"; //Add Clasycarz Number here

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->SMTPKeepAlive = true;

    $mail->SMTPAuth = true;
    // $mail->SMTPDebug = 2;
    // $mail->Debugoutput = 'html';


    $mail->Host = $_ENV['MAIL_HOST'];

    $mail->Username = $_ENV['MAIL_USERNAME'];

    $mail->Password = $_ENV['MAIL_PASSWORD'];

    $mail->SMTPSecure = $_ENV['MAIL_ENCRYPTION'];

    $mail->Port = $_ENV['MAIL_PORT'];

    $mail->setFrom('contact@clasycarz.com', 'Clasy Carz Driver Recruitment');

    //$mail->setFrom('noreply@clasycarz.com', 'Clasy Carz Driver Recruitment');

    $mail->addAddress('atishsanas1@gmail.com'); // Nileshdhamalend18@gmail.com

    $mail->addReplyTo(
    $email,
    $name
);

    $mail->isHTML(true);
    $mail->CharSet = "UTF-8";
    $mail->Encoding = "base64";

$mail->Subject = 'New Clasy Carz Driver Application';

  $logo = "http://localhost/clasycarzweb/logo.png";
//$logo = "https://clasycarz.com/clasycarzweb/logo.png";

$mail->Body = ' <!DOCTYPE html> <html> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>New Driver Application</title> </head> <body style=" margin:0; padding:0; background:#f5f7fa; font-family:Arial,sans-serif; "> <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 10px;"> <tr> <td align="center"> <table width="620" cellpadding="0" cellspacing="0" style=" background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 15px 40px rgba(0,0,0,0.08); "> <!-- HEADER --> <tr> <td style=" background:linear-gradient(135deg,#1f2937,#111827); padding:40px 30px; text-align:center; "> <img src="'.$logo.'" alt="Logo" style=" width:90px; height:auto; margin-bottom:18px; "> <h1 style=" margin:0; color:#ffffff; font-size:30px; font-weight:700; "> New Driver Application </h1> <p style=" margin-top:12px; color:rgba(255,255,255,0.85); font-size:15px; "> A new application has been submitted from the Clasy Carz website. </p> </td> </tr> <!-- BODY --> <tr> <td style="padding:35px;"> <table width="100%" cellpadding="0" cellspacing="0"> <!-- NAME --> <tr> <td style=" background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:18px; "> <p style=" margin:0; font-size:13px; color:#6b7280; text-transform:uppercase; letter-spacing:1px; "> Applicant Name </p> <h2 style=" margin:8px 0 0; font-size:22px; color:#111827; "> '.$name.' </h2> </td> </tr> <tr><td height="16"></td></tr> <!-- PHONE --> <tr> <td style=" background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:18px; "> <p style=" margin:0; font-size:13px; color:#6b7280; text-transform:uppercase; "> Mobile Number </p> <h2 style=" margin:8px 0 0; font-size:22px; color:#111827; "> '.$phone.' </h2> </td> </tr> <tr><td height="16"></td></tr> <!-- EMAIL --> <tr> <td style=" background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:18px; "> <p style=" margin:0; font-size:13px; color:#6b7280; text-transform:uppercase; "> Email Address </p> <h2 style=" margin:8px 0 0; font-size:20px; color:#111827; "> '.$email.' </h2> </td> </tr> <tr><td height="16"></td></tr> <!-- LOCATION --> <tr> <td style=" background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:18px; "> <p style=" margin:0; font-size:13px; color:#6b7280; text-transform:uppercase; "> Preferred Location </p> <h2 style=" margin:8px 0 0; font-size:22px; color:#111827; "> '.$location.' </h2> </td> </tr> <tr><td height="16"></td></tr> <!-- LICENSE --> <tr> <td style=" background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; padding:18px; "> <p style=" margin:0; font-size:13px; color:#6b7280; text-transform:uppercase; "> Driving License </p> <h2 style=" margin:8px 0 0; font-size:22px; color:#111827; "> '.($license === "yes" ? "Yes" : "No").' </h2> </td> </tr> </table> <!-- ACTION BUTTONS --> <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:30px;"> <tr> <td align="center"> <table cellpadding="0" cellspacing="0"> <tr> <td style="padding-right:10px;"> <a href="tel:'.$ourphone.'" style=" background:#111827; color:#ffffff; text-decoration:none; padding:14px 24px; border-radius:10px; display:inline-block; font-weight:600; "> ☏ Call Applicant </a> </td> <td> <a href="https://wa.me/91'.$ourphone.'" style=" background:#25D366; color:#ffffff; text-decoration:none; padding:14px 24px; border-radius:10px; display:inline-block; font-weight:600; "> 💬 WhatsApp </a> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- FOOTER --> <tr> <td style=" background:#f8fafc; padding:25px; text-align:center; "> <p style=" margin:0; color:#6b7280; font-size:13px; "> © '.date("Y").' Clasy Carz <br> Driver Recruitment Portal </p> </td> </tr> </table> </td> </tr> </table> </body> </html> ';

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Email sent"
    ]);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "message" => $mail->ErrorInfo
    ]);
}
?>