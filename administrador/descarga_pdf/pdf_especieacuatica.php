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
		$this -> Cell( 180, 20 , "BD: siglagranja / Especie Acuatica   ", 0 , 0 , 'C' );						
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
$eacid = array("CODIGO");
$eacunidad = array("UNIDAD");
$eactipespeci = array("TIPO ESPECIE");
$eacnomcomun = array("NOMBRE COMUN");
$eacnomcienti = array("NOMBRE CIENTIFICO");
$mipdf -> addPage('A5' , 'letter',20,39);
for ($i = 0; $i < count( $eacid ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 25, 10 , $eacid[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $eacunidad ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 40, 10 , $eacunidad[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $eactipespeci ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 45, 10 , $eactipespeci[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $eacnomcomun ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 70, 10 , $eacnomcomun[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $eacnomcienti ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 70, 10 , $eacnomcienti[ $i ] , 1 , 0 , 'C' , true );
}
$mipdf -> Ln( 10);

$res=pg_query($con, "SELECT * FROM especieacuatica ORDER BY eacid ASC");
			while($reg=pg_fetch_array($res))
			{
				$uniid= utf8_decode($reg [1]);
				$res1=pg_query($con, "SELECT * FROM unidad WHERE uniid='$uniid'");
				while($reg1=pg_fetch_array($res1))
				{
					$nomunidad=utf8_decode($reg1[2]);
				}

	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$eacid = utf8_decode($reg [0]);
	$eactipespeci= utf8_decode($reg [2]);	
	$eacnomcomun= utf8_decode($reg [3]);
	$eacnomcienti= utf8_decode($reg [4]);
	
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> Cell( 25, 10 , $eacid, 1, 0, 'C' , true );
	$mipdf -> Cell( 40, 10 , $nomunidad, 1, 0, 'L' , true );
	$mipdf -> Cell( 45, 10 , $eactipespeci, 1, 0, 'L' , true );	
	$mipdf -> Cell( 70, 10 , $eacnomcomun , 1, 0, 'L' , true );		
	$mipdf -> Cell( 70, 10 , $eacnomcienti, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_Especieacuatica.pdf','I');
?>


