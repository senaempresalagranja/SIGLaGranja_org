<?php
include "pdf/pdf.php";
include "../conexion.php";

class  MiPDF extends FPDF 
{
	public function Header()
	{

		$this -> Image("../img/logo.jpg" , 25 , 25 , 20 , 20);
		$this -> SetFont ( 'Arial' , 'B' , 16 );			
		$this -> Cell( 180, 20 , "BD: siglagranja / Programa Formacion   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(12, 25, 25 , 15); 
$mipdf->SetAutoPageBreak(true,25);
$pfoid = array("CODIGO");
$pfoarea = array("AREA");
$pfonombre = array("NOMBRE");
$pfotipformac = array("TIPO FORMACION");
$pfotieelecti = array("ETAPA LECTIVA");
$pfotieproduc = array("ETAPA PRODUCTIVA");
$mipdf -> addPage('A5' , 'letter',20,39);
for ($i = 0; $i < count( $pfoid ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 17, 10 , $pfoid[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $pfoarea ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 50, 10 , $pfoarea[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $pfonombre ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 77, 10 , $pfonombre[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $pfotipformac ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 40, 10 , $pfotipformac[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $pfotieelecti ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 35, 10 , $pfotieelecti[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $pfotieproduc ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 35, 10 , $pfotieproduc[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);

$res=pg_query($con, "SELECT * FROM programaformacion ORDER BY pfoarea ASC");
			while($reg=pg_fetch_array($res))
			{
				$Area= utf8_decode($reg [1]);
  				$res1=pg_query($con, "SELECT * FROM area WHERE areid='$Area' ");
  				while($reg1=pg_fetch_array($res1))
  				{
  				  $nombre=$reg1[2];
  				}
  				$UniMed1= $reg [5];
  				$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$UniMed1' ");
  				while($reg1=pg_fetch_array($res1))
  				{
  				  $nombre1=utf8_decode($reg1[2]);
  				}
  				$UniMed2= $reg [7];
  				$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$UniMed2' ");
  				while($reg1=pg_fetch_array($res1))
  				{
  				  $nombre2=utf8_decode($reg1[2]);
  				}

				$pfoid=$reg[0];
				$pfonombre=$reg[2];
				$pfotipformac=$reg[3];
				$pfotieelecti=$reg[4];
				$pfotieproduc=$reg[6];
				$pfodescripci=$reg[8];
	
	
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> Cell( 17, 10 , $pfoid, 1, 0, 'C' , true );
	$mipdf -> Cell( 50, 10 , $nombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 77, 10 , $pfonombre, 1, 0, 'L' , true );
	$mipdf -> Cell( 40, 10 , $pfotipformac, 1, 0, 'L' , true );
	$mipdf -> Cell( 17.5, 10 , $pfotieelecti, 1, 0, 'R' , true );
	$mipdf -> Cell( 17.5, 10 , $nombre1, 1, 0, 'L' , true );
	$mipdf -> Cell( 17.5, 10 , $pfotieproduc, 1, 0, 'R' , true );
	$mipdf -> Cell( 17.5, 10 , $nombre2, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_ProgramaFormacion.pdf','I');
?>


