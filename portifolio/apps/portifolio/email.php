<?php     
$data = json_decode(file_get_contents('php://input'), true);

$to_email = 'giovanni.saraoaraki@gmail.com';
$subject = $data['form']['username'] . " - Enviou um email do site : ".$data['form']['subject'] ;
$message = $data['form']['message'];
$headers = 'From: '.$data['form']['email'];
mail($to_email,$subject,$message,$headers);
?>