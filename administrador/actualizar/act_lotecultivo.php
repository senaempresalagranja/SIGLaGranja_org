<?php
session_start();
include 'conexion.php';
$unidad=$_REQUEST["lcuunidad"];
$cultivo=$_REQUEST["lcucultivo"];
$comp=("$unidad$cultivo");
date_default_timezone_set("America/Bogota");
$fecha=date("d-m-Y / H:i:s",time());

$regComp=pg_num_rows( pg_query("SELECT * FROM unidad_cultivo WHERE lcuunidad = '$unidad' AND lcucultivo = '$cultivo'"));
if ($regComp > 0)
{
	echo "<script type='text/javascript'>alert('El Registro Ya Existe, no puede asignar el mismo CULTIVO a la misma UNIDAD');location='../frm_lotecultivo.php'</script>";
}
else
{
	pg_query($con ,"UPDATE unidad_cultivo SET 
	 
	lcucultivo='$_REQUEST[lcucultivo]',
	lcuunidad='$_REQUEST[lcuunidad]',		
	lcufechsiemb='$_REQUEST[lcufechsiemb]',
	lcufechcosec='$_REQUEST[lcufechcosec]', 
	lcuproduesti='$_REQUEST[lcuproduesti]',	
	lcuunimedest='$_REQUEST[lcuunimedest]', 
	lcuprodureal='$_REQUEST[lcuprodureal]', 
	lcuunimedrea='$_REQUEST[lcuunimedrea]',	
	lcucosproest='$_REQUEST[lcucosproest]',
	lcuunimedies='$_REQUEST[lcuunimedies]',
	lcucosprorea='$_REQUEST[lcucosprorea]',
	lcuunimedire='$_REQUEST[lcuunimedire]',
	lcuresponsab='$_REQUEST[lcuresponsab]', 
	lcucanal='$_REQUEST[lcucanal]',
	lcuplagenfer='$_REQUEST[lcuplagenfer]', 
	lcufecha='$fecha' WHERE lcuid='$_REQUEST[lcuid]'");
	echo "<script type='text/javascript'>alert('Registro Actualizado');location='../frm_lotecultivo.php'</script>";
	$usuario=($_SESSION['ADMINISTRADOR']);
			$actividad="ACTUALIZAR LOTECULTIVO";
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
}
?>
