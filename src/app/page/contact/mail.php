<?php
switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $params = json_decode(file_get_contents('php://input'), true );
        $nom = $params["nom"];
        $prenom = $params["prenom"];
        $telephone = $params["telephone"];
        $mail = $params["email"];
        $messagee = $params["message"];

        $message =  'Tu as recu un message de '.$prenom.''.$nom.' qui te dis '.$messagee.'. Tu peux le joindre au '.$telephone.' ou alors ici '.$mail.'';

        $recipient = 'cy.etievant@gmail.com';
        $subject = 'Tu as un message depuis ton appli!';
        $headers = "From: hello@hello";

        mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
