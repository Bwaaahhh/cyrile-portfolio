<?php
$recipient = 'cy.etievant@gmail.com';
$subject = 'new message\n';
$headers = "From: \n";
$message = '$params->message\n';
mail($recipient, 'mon sujet', 'coucou');

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);
        $email = $params->email;
        $name = $params->name;
        $message = '$params->message\n';

        $recipient = 'cy.etievant@gmail.com\n';
        $subject = 'new message\n';
        $headers = "From: toto@toto.com\n";
        if(mail($recipient, $subject, $message, $headers)){
            echo'totooo';
        }
    //    mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
