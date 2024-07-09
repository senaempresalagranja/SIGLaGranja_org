<?php
/* conexion con postgres */ 
	$con=pg_connect("host=localhost user=postgres password='siglagranja' dbname=siglagranja  port=5432");
	//error_reporting(E_ALL ^ E_WARNING);
	error_reporting(0);

?>