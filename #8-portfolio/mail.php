<?php

$frm_name  = "Youname";
$recepient = "aweasom1@gmail.com";
$sitename  = "Учебный: Armata Financical Group";
$subject   = "Новая заявка с сайта";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

$message = "
Имя: $name <br>
Email: $email <br>
Сообщение: $message
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
 
if(isset($_POST["submit"])) {
    exit('<meta http-equiv="refresh" content="0; url=index.html" />');
}
 
//?php 

// if(isset($_POST['submit'])){
//     $to = "aweasom1@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
//     $from = $_POST['email']; // this is the sender's Email address
//     $first_name = $_POST['name'];
//     $subject = "Форма отправки сообщений с сайта";
//     $subject2 = "Copy of your form submission";
//     $message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['message'];
//     $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

//     $headers = "From:" . $from;
//     $headers2 = "From:" . $to;
	
//     mail($to,$subject,$message,$headers);
 //   // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
 //    echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
	// echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";

//}


// <!--Переадресация на главную страницу сайта, через 3 секунды-->
// <!-- <script language="JavaScript" type="text/javascript">
// function changeurl(){eval(self.location="https://frontend-serhii.com");}
// window.setTimeout("changeurl();",3000);
// </script> -->