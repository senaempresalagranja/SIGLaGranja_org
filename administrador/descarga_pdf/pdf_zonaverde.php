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
		$this -> Cell( 180, 20 , "BD: siglagranja / Zona Verde   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(24, 25, 25 , 15);
$mipdf->SetAutoPageBreak(true,25);
$zveidcodigo = array("CODIGO");
$zveunidad = array("UNIDAD");
$zveextension = array("EXTENSION");
$zvetipriego = array("TIPO RIEGO");
$coordenadas = array("LATITUD","LONGITUD");
$mipdf -> addPage('A5' , 'letter',20,39);
for ($i = 0; $i < count( $zveidcodigo ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 35, 10 , $zveidcodigo[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $zveunidad ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 50, 10 , $zveunidad[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $zveextension ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 25, 10 , $zveextension[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $zvetipriego ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 30, 10 , $zvetipriego[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $coordenadas ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 46, 10 , $coordenadas[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
$res=pg_query($con, "SELECT * FROM zonaverde ORDER BY zveidcodigo ASC");
			while($reg=pg_fetch_array($res))
			{
				$unidad=$reg[2];
  				$con2=pg_query($con, "SELECT * FROM unidad WHERE uniid='$unidad' ");
  				while($reg1=pg_fetch_array($con2))
  				{
  				  $NomUnidad=utf8_decode($reg1[2]);
  				}

  				$unidadmedida= utf8_decode($reg [5]);
  				$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$unidadmedida' ");
  				while($reg1=pg_fetch_array($res1))
  				{
  				  $nombre= utf8_decode($reg1[1]);
  				}

				$zveidcodigo=utf8_decode($reg[1]);
				$zvetipriego=utf8_decode($reg[3]);
				$zveextension=utf8_decode($reg[4]);
				$zvelatitud=utf8_decode($reg[6]);
				$zveorientlat=utf8_decode($reg[7]);
				$zvelongitud=utf8_decode($reg[8]);
				$zveorientlon=utf8_decode($reg[9]);
	
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);
	$mipdf -> Cell( 35, 10 , $zveidcodigo, 1, 0, 'C' , true );
	$mipdf -> Cell( 50, 10 , $NomUnidad, 1, 0, 'L' , true );	
	$mipdf -> Cell( 12.5, 10 , $zveextension, 1, 0, 'R' , true );
	$mipdf -> Cell( 12.5, 10 , $nombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 30, 10 , $zvetipriego, 1, 0, 'L' , true );
	$mipdf -> Cell( 25, 10 , $zvelatitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 21, 10 , $zveorientlat, 1, 0, 'L' , true );
	$mipdf -> Cell( 25, 10 , $zvelongitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 21, 10 , $zveorientlon, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_ZonaVerde.pdf','I');
?>


