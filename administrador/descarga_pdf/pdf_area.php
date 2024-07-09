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
		$this -> Cell( 180, 20 , "BD: siglagranja / Area   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(5, 25, 25 , 15);
$mipdf->SetAutoPageBreak(true,25);
$cabecera = array("CODIGO");
$cabecera1 = array("NOMBRE","EXTENSION");
$cabecera2 = array("RESPONSABLE");
$cabecera3 = array("LATITUD","LONGITUD");
$mipdf -> addPage('A5' , 'Letter',20,39);
for ($i = 0; $i < count( $cabecera ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 11);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 25, 10 , $cabecera[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $cabecera1 ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 11);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 35, 10 , $cabecera1[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $cabecera2 ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 11);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 75, 10 , $cabecera2[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $cabecera3 ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 11);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 50, 10 , $cabecera3[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);

$res=pg_query($con, "SELECT * FROM area ORDER BY areidcodigo ASC");
while($reg=pg_fetch_array($res))
{
	$uniid= utf8_decode($reg [4]);
	$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$uniid' ");
	while($reg1=pg_fetch_array($res1))
	{
		$nombre=utf8_decode($reg1[1]);
	}

	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$areidcodigo = utf8_decode($reg [1]);	
	$arenombre= utf8_decode($reg [2]);
	$areextension= utf8_decode($reg [3]);	
	$arecoordinad= utf8_decode($reg [5]);
	$arelatitud= utf8_decode($reg [6]);
	$areorientlat= utf8_decode($reg [7]);
	$arelongitud= utf8_decode($reg [8]);
	$areorientlon= utf8_decode($reg [9]);
	
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> Cell( 25, 10 , $areidcodigo, 1, 0, 'C' , true );
	$mipdf -> Cell( 35, 10 , $arenombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 23, 10 , $areextension, 1, 0, 'R' , true );
	$mipdf -> Cell( 12, 10 , $nombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 75, 10 , $arecoordinad , 1, 0, 'L' , true );
	$mipdf -> Cell( 30, 10 , $arelatitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 20, 10 , $areorientlat, 1, 0, 'L' , true );
	$mipdf -> Cell( 30, 10 , $arelongitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 20, 10 , $areorientlon, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_Area.pdf','I');?>


