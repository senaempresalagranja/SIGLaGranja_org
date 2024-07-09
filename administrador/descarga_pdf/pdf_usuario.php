<?php
//llamado a la pagina del formato pdf//
include "pdf/pdf.php";
//Definir la conexion a la base de dato//
include "../conexion.php";
	class  MiPDF extends FPDF 
	{
	
		public function Header()
		{
			$this -> Image("../img/logo.jpg" , 25 , 25 , 20 , 20);
			$this -> SetFont ( 'arial' , 'B' , 16 );
			$this -> Cell( 180, 20 , "Base Datos.SIGLaGranja / Tabla.Usuario", 0 , 0 , 'C' );
			$this -> Cell( 0, 20 , " Fecha: ".date("d/m/Y",time()-25200),  0, 0 ,'R');
			$this -> Ln( 30 );
		}
		public function Footer()
    	{
		    $this->SetY(-15); 
		    $this->AliasNbPages();
			$this->SetFont('arial','I',12); 
			$this->SetTextColor(0);
			$this->Cell(0,10,'Pagina '.$this->PageNo().' de {nb}',0,0,'C');
	     }
	 }
	$mipdf = new MiPDF('P','mm','A4');
	$mipdf->SetMargins(25, 25, 25, 10);
	$mipdf->SetAutoPageBreak(true,25);
	$cabeceraid= array("CODIGO");
	$cabeceraE= array("CORREO ELECTRONICO");
	$cabecera = array("NOMBRE","APELLIDOS");
	$cabeceraT = array("ROL","USUARIO","CONTRASENA");
	$mipdf -> addPage('A5' , 'legal',10,39);
	for ($s = 0; $s < count( $cabeceraid) ; $s++)
		{
			$mipdf -> SetFont( 'arial' , 'B' , 11);
			$mipdf -> SetTextColor(255,255,255);
			$mipdf -> SetFillColor(0, 0 ,255);
			$mipdf -> Cell ( 20, 10 , $cabeceraid[ $s ] , 1 , 0 , 'C' , true );
		}
	for ($q = 0; $q < count( $cabecera) ; $q++)
		{
			$mipdf -> SetFont( 'arial' , 'B' , 11);
			$mipdf -> SetTextColor(255,255,255);
			$mipdf -> SetFillColor(0, 0 ,255);
			$mipdf -> Cell ( 45, 10 , $cabecera[ $q ] , 1 , 0 , 'C' , true );
		}
	for ($r = 0; $r < count( $cabeceraE) ; $r++)
		{
			$mipdf -> SetFont( 'arial' , 'B' , 11);
			$mipdf -> SetTextColor(255,255,255);
			$mipdf -> SetFillColor(0, 0 ,255);
			$mipdf -> Cell ( 70, 10 , $cabeceraE[ $r ] , 1 , 0 , 'C' , true );
		}
	for ($i = 0; $i < count( $cabeceraT) ; $i++)
		{
			$mipdf -> SetFont( 'arial' , 'B' , 11);
			$mipdf -> SetTextColor(255,255,255);
			$mipdf -> SetFillColor(0,0,255);
			$mipdf -> Cell ( 40, 10 , $cabeceraT[ $i ] , 1 , 0 , 'C' , true );
		}
	$mipdf -> Ln( 8);
	$res=pg_query($con, "SELECT * FROM usuario");
//se crea el siclo whilewhile($reg=pg_fetch_array($res))
		{
$id= utf8_decode($reg [0]);
			$nombre= utf8_decode($reg [1]);
			$apellidos= utf8_decode($reg [2]);
			$correo= utf8_decode($reg [4]);
			$rol= utf8_decode($reg [8]);
			$usuario= utf8_decode($reg [6]);
			$contraseña= utf8_decode('113h186o092l953a835');

			$mipdf -> SetFont( 'arial' , 'B' , 10);
			$mipdf -> SetTextColor(0,0,0);
			$mipdf -> SetFillColor(255,255,255);
			$mipdf -> Cell( 20, 6 , $id , 1, 0, 'I' , true );
		    $mipdf -> SetFillColor(255,255,255);
			$mipdf -> Cell( 45, 6 , $nombre , 1, 0, 'I' , true );
			$mipdf -> SetFillColor(255,255,255);
			$mipdf -> Cell( 45, 6 , $apellidos , 1, 0, 'I' , true );
			$mipdf -> SetFillColor(255,255,255);
			$mipdf -> Cell( 70, 6 , $correo , 1, 0, 'I' , true );
			$mipdf -> SetFillColor(255,255,255);
			$mipdf -> Cell( 40, 6 , $rol , 1, 0, 'I' , true );
			$mipdf -> SetFillColor(255,255,255);
			$mipdf -> Cell( 40, 6 , $usuario, 1, 0, 'C' , true );
			$mipdf -> SetFillColor(255,255,255);
			$mipdf -> Cell( 40, 6 , $contraseña, 1, 0, 'I' , true );	
			$mipdf -> Ln( 6);
		}

	$mipdf -> Output();
?>