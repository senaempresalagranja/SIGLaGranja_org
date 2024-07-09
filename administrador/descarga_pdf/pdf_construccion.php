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
		$this -> Cell( 180, 20 , "BD: siglagranja / Construccion   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(22, 25, 25 , 15);
$mipdf->SetAutoPageBreak(true,25);
$conidcodigo = array("CODIGO");
$conunidad = array("UNIDAD");
$connombre = array("NOMBRE");
$conextension = array("EXTENSION");
$contipambien = array("T.AMBIENTE");
$contipconstr = array("T.CONSTRUCCION");
$conestado = array("ESTADO");
$contipcubiert = array("T.CUBIERTA");
$contippiso = array("T.PISO");
$contipmuro = array("T.MURO");
$confecconstr = array("F.CONSTRUCCION");
$confecremode = array("F.REMODELACION");
$coordenadas = array("LATITUD","LONGITUD");
$mipdf -> addPage('A5' , 'legal',20,39);
for ($i = 0; $i < count( $conidcodigo ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 17, 10 , $conidcodigo[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $conunidad ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 22, 10 , $conunidad[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $connombre ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 38, 10 , $connombre[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $conextension ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 20, 10 , $conextension[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $contipambien ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 28, 10 , $contipambien[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $contipconstr ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 28, 10 , $contipconstr[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $conestado ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 15, 10 , $conestado[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $contipcubiert ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 24, 10 , $contipcubiert[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $contippiso ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 17, 10 , $contippiso[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $contipmuro ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 19, 10 , $contipmuro[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $confecconstr ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 5);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 19, 10 , $confecconstr[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $confecremode ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 5);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 19, 10 , $confecremode[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $coordenadas ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 22, 10 , $coordenadas[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
$res=pg_query($con, "SELECT * FROM construccion ORDER BY conidcodigo ASC");
			while($reg=pg_fetch_array($res))
			{
				$unidadmedida= $reg [5];
  				$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$unidadmedida' ");
  				while($reg1=pg_fetch_array($res1))
  				{
  				  $nombre= utf8_decode($reg1[1]);
  				}
			
  				$unidad=$reg[2];
  				$con2=pg_query($con, "SELECT * FROM unidad WHERE uniid='$unidad' ");
  				while($reg1=pg_fetch_array($con2))
  				{
  				  $NomUnidad=$reg1[2];
  				}

	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$conidcodigo = $reg [1];
	$connombre= $reg [3];	
	$conextension= $reg [4];
	$contipambien= $reg [6];
	$contipconstr= $reg [7];
	$conestado= $reg [8];
	$contipcubiert= $reg [9];
	$contippiso= $reg [10];
	$contipmuro= $reg [11];
	$confecconstr= $reg [12];
	$confecremode= $reg [13];
	$conlatitud= $reg [14];
	$conorientlat= $reg [15];
	$conlongitud= $reg [16];
	$conorientlon= $reg [17];
	
	$mipdf -> SetFont( 'Arial' , 'B' , 6);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> Cell( 17, 10 , $conidcodigo, 1, 0, 'L' , true );
	$mipdf -> Cell( 22, 10 , $NomUnidad, 1, 0, 'L' , true );
	$mipdf -> Cell( 38, 10 , $connombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 10, 10 , $conextension, 1, 0, 'R' , true );
	$mipdf -> Cell( 10, 10 , $nombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 28, 10 , $contipambien, 1, 0, 'L' , true );
	$mipdf -> Cell( 28, 10 , $contipconstr, 1, 0, 'L' , true );
	$mipdf -> Cell( 15, 10 , $conestado, 1, 0, 'L' , true );
	$mipdf -> Cell( 24, 10 , $contipcubiert, 1, 0, 'L' , true );
	$mipdf -> Cell( 17, 10 , $contippiso, 1, 0, 'L' , true );
	$mipdf -> Cell( 19, 10 , $contipmuro, 1, 0, 'L' , true );
	$mipdf -> Cell( 19, 10 , $confecconstr, 1, 0, 'R' , true );
	$mipdf -> Cell( 19, 10 , $confecremode, 1, 0, 'R' , true );
	$mipdf -> Cell( 13, 10 , $conlatitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 9, 10 , $conorientlat, 1, 0, 'L' , true );
	$mipdf -> Cell( 13, 10 , $conlongitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 9, 10 , $conorientlon, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_Construccion.pdf','I');
?>


