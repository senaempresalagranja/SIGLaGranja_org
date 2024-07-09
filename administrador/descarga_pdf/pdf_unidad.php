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
		$this -> Cell( 180, 20 , "BD: siglagranja / Unidad   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(20, 25, 25 , 15); 
$mipdf->SetAutoPageBreak(true,25);
$cabecera = array("AREA");
$cabecera1 = array("NOMBRE");
$cabecera4 = array("EXTENSION");
$cabecera2 = array("RESPONSABLE");
$cabecera3 = array("LATITUD","LONGITUD");
$mipdf -> addPage('A5' , 'Letter',20,39);
for ($i = 0; $i < count( $cabecera ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 30, 10 , $cabecera[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $cabecera1 ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 35, 10 , $cabecera1[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $cabecera4 ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 22, 10 , $cabecera4[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $cabecera2 ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 75, 10 , $cabecera2[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $cabecera3 ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 36, 10 , $cabecera3[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
$res=pg_query($con, "SELECT * FROM unidad ORDER BY uniarea ASC");
			while($reg=pg_fetch_array($res))
			{
				$uniarea= $reg [1];
				$res1=pg_query($con, "SELECT * FROM area WHERE areid='$uniarea' ");
				while($reg1=pg_fetch_array($res1))
				{
					$nombre=$reg1[2];
				}

				$uniunimedida= $reg [4];
				$res2=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$uniunimedida' ");
				while($reg2=pg_fetch_array($res2))
				{
					$nombre1= utf8_decode($reg2[1]);
				}

				$uninombre= utf8_decode($reg[2]);
				$uniextension= $reg[3];
				$uniresponsab= utf8_decode($reg[5]);
				$unilatitud= $reg[6];
				$uniorientlat= $reg[7];
				$unilongitud= $reg[8];
				$uniorientlon= $reg[9];
				$unidescripci= $reg[10];
				$unifecha= $reg[11];

	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> Cell( 30, 10 , $nombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 35, 10 , $uninombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 11, 10 , $uniextension, 1, 0, 'R' , true );
	$mipdf -> Cell( 11, 10 , $nombre1, 1, 0, 'L' , true );
	$mipdf -> Cell( 75, 10 , $uniresponsab , 1, 0, 'L' , true );
	$mipdf -> Cell( 21, 10 , $unilatitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 15, 10 , $uniorientlat, 1, 0, 'L' , true );
	$mipdf -> Cell( 21, 10 , $unilongitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 15, 10 , $uniorientlon, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_Unidad.pdf','I');
?>


