<?php
//llamado a la pagina del formato pdf
include "pdf/pdf.php";
//Definir la conexion a la base de dato
include "../conexion.php";
//crea la clase a descargar definir el formato a pdf

class  MiPDF extends FPDF 
{
public function Header()
	{

		$this -> Image("../img/logo.jpg" , 25 , 25 , 20 , 20);
		$this -> SetFont ( 'Arial' , 'B' , 16 );			
		$this -> Cell( 180, 20 , "BD: siglagranja / Especie   ", 0 , 0 , 'C' );						
		$this -> Cell( 0, 20 , "   Fecha: ".date("d/m/Y",time()-25200), 0 , 0 ,'R');
		$this -> Ln( 30 );			
	}
	public function Footer()
	{
		$this->SetY(-15);
		$this->AliasNbPages();
		$this->SetFont('Arial','I',10);
		$this->SetTextColor(0);
	$this->Cell(0,10,'Pagina '.$this->PageNo().' de {nb}',0,0,'C'); 
	}	
}
$mipdf = new MiPDF('P','mm','A4');
$mipdf->SetMargins(15, 25, 25 , 15);
$mipdf->SetAutoPageBreak(true,25);
$espid = array("CODIGO");
$espunidad = array("UNIDAD");
$esptipespeci = array("TIPO ESPECIE");
$espnomcomun = array("NOMBRE COMUN");
$espnomcienti = array("NOMBRE CIENTIFICO");
$mipdf -> addPage('A5' , 'letter',20,39);
for ($i = 0; $i < count( $espid ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 25, 10 , $espid[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $espunidad ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 40, 10 , $espunidad[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $esptipespeci ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 45, 10 , $esptipespeci[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $espnomcomun ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 70, 10 , $espnomcomun[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $espnomcienti ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 70, 10 , $espnomcienti[ $i ] , 1 , 0 , 'C' , true );
}
$mipdf -> Ln( 10);

$res=pg_query($con, "SELECT * FROM especie ORDER BY esptipespeci ASC");
			while($reg=pg_fetch_array($res))
			{
				$uniid= utf8_decode($reg [1]);
				$res1=pg_query($con, "SELECT * FROM unidad WHERE uniid='$uniid'");
				while($reg1=pg_fetch_array($res1))
				{
					$nomunidad=utf8_decode($reg1[2]);
				}

	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$espid = utf8_decode($reg [0]);
	$esptipespeci= utf8_decode($reg [2]);	
	$espnomcomun= utf8_decode($reg [3]);
	$espnomcienti= utf8_decode($reg [4]);
	
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> Cell( 25, 10 , $espid, 1, 0, 'C' , true );
	$mipdf -> Cell( 40, 10 , $nomunidad, 1, 0, 'L' , true );
	$mipdf -> Cell( 45, 10 , $esptipespeci, 1, 0, 'L' , true );	
	$mipdf -> Cell( 70, 10 , $espnomcomun , 1, 0, 'L' , true );		
	$mipdf -> Cell( 70, 10 , $espnomcienti, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_Especie.pdf','I');
?>


