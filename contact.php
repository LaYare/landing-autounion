<?php

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$address = $_POST['address'];
	$city = $_POST['city'];
	$brand = $_POST['brand'];
	
	$body = "Nuevo mensaje de $name. \n".
		"Teléfono: $phone. Email: $email\n".
		"Dirección: $address. Ciudad $city\n".
		"Marca: $brand";


	$headers = "From: contacto@autounion.com \r \n";

	mail("klira@mellow.cc","Contacto Autounión", $body, $headers);
	header('Location: index.html');
?>