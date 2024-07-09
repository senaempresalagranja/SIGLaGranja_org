<?php
session_start();
if (isset($_SESSION['ADMINISTRADOR'])) 
{
	include 'conexion.php';
	$unidad=$_REQUEST["lcuunidad"];
	$cultivo=$_REQUEST["lcucultivo"];
	$comp=("$unidad$cultivo");
	date_default_timezone_set("America/Bogota");
	$fecha=date("d-m-Y / H:i:s",time());

	$regComp=pg_num_rows( pg_query("SELECT * FROM unidad_cultivo WHERE lcuunidad = '$unidad' AND lcucultivo = '$cultivo'"));
	if ($regComp > 0)
	{
		echo "<script type='text/javascript'>alert('El Registro Ya Existe, no puede asignar el mismo CULTIVO a la misma unidad');location='../frm_lotecultivo.php'</script>";
	}
	else
	{
		pg_query ("INSERT INTO unidad_cultivo (
		
		lcucultivo,
		lcuunidad,	
		lcufechsiemb,
		lcufechcosec,
		lcuproduesti,
		lcuunimedest,
		lcuprodureal,
		lcuunimedrea,
		lcuunimedies,
		lcucosproest,
		lcucosprorea,
		lcuunimedire,
		lcuresponsab,
		lcufecha,
		lcucanal,
		lcuplagenfer )
	        VALUES (
	        
	        '$_REQUEST[lcucultivo]',
	        '$_REQUEST[lcuunidad]',
	        '$_REQUEST[lcufechsiemb]',
	        '$_REQUEST[lcufechcosec]',
	        '$_REQUEST[lcuproduesti]',
	        '$_REQUEST[lcuunimedest]',        	
	    	'$_REQUEST[lcuprodureal]',
	    	'$_REQUEST[lcuunimedrea]',
	    	'$_REQUEST[lcuunimedies]',
	    	'$_REQUEST[lcucosproest]',
	    	'$_REQUEST[lcucosprorea]',
	    	'$_REQUEST[lcuunimedire]',
	    	'$_REQUEST[lcuresponsab]',
	    	'$fecha',
	    	'$_REQUEST[lcucanal]',
	    	'$_REQUEST[lcuplagenfer]')")
	        or die ("Problemas en el  insert" .pg_last_error());
			echo "<script type='text/javascript'>alert('Registro Guardado');location='../frm_lotecultivo.php'</script>";
			$usuario=($_SESSION['ADMINISTRADOR']);
			$actividad="REGISTRAR LOTECULTIVO";
			pg_query("INSERT INTO regact_lotcultivo (raclcuusua,raclcuacti,raclculote,raclcucult,raclcuunid,raclcufesi,raclcufeco,raclcupest,raclcuunie,raclcuprea,raclcuunir,raclcucosr,raclcuuncr,raclcucose,raclcuunce,raclcuresp,raclcucana,raclcupenf,raclcufecha) VALUES (
				'$usuario',
				'$actividad',
				
		        '$_REQUEST[lcucultivo]',
		        '$_REQUEST[lcuunidad]',
		        '$_REQUEST[lcufechsiemb]',
		        '$_REQUEST[lcufechcosec]',
		        '$_REQUEST[lcuproduesti]',
		        '$_REQUEST[lcuunimedest]',        	
		    	'$_REQUEST[lcuprodureal]',
		    	'$_REQUEST[lcuunimedrea]',
		    	'$_REQUEST[lcucosprorea]',
		    	'$_REQUEST[lcuunimedire]',
		    	'$_REQUEST[lcucosproest]',
		    	'$_REQUEST[lcuunimedies]',	    	
		    	'$_REQUEST[lcuresponsab]',
		    	'$_REQUEST[lcucanal]',
		    	'$_REQUEST[lcuplagenfer]',
				'$fecha')") 
			or die(pg_result_error());
			pg_query("INSERT INTO registro_actividad (racusuario,racactividad,racfecha) VALUES (
				'$usuario',
				'$actividad',
				'$fecha')") 
			or die(pg_result_error());
	}
}
else
{
  echo "<script type='text/javascript'>alert('Parece que su Sesion ha finalizado, por favor Inicie Sesion');location='../../visitante/index.php?Acceso Denegado'</script>";
}
 ?>
