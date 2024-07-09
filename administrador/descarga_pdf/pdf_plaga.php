<?php
//llamado a la pagina del formato pdf
include "pdf/pdf.php";
//Definir la conexion a la base de dato
include "../conexion.php";

//crea la clase a descargar definir el formato a pdf

class  MiPDF extends FPDF 
{
    function CellFit($w, $h=0, $txt='', $border=0, $ln=0, $align='', $fill=false, $link='', $scale=false, $force=true)
    {
        //Get string width
        $str_width=$this->GetStringWidth($txt);
 
        //Calculate ratio to fit cell
        if($w==0)
            $w = $this->w-$this->rMargin-$this->x;
        $ratio = ($w-$this->cMargin*2)/$str_width;
 
        $fit = ($ratio < 1 || ($ratio > 1 && $force));
        if ($fit)
        {
            if ($scale)
            {
                //Calculate horizontal scaling
                $horiz_scale=$ratio*100.0;
                //Set horizontal scaling
                $this->_out(sprintf('BT %.2F Tz ET',$horiz_scale));
            }
            else
            {
                //Calculate character spacing in points
                $char_space=($w-$this->cMargin*2-$str_width)/max($this->MBGetStringLength($txt)-1,1)*$this->k;
                //Set character spacing
                $this->_out(sprintf('BT %.2F Tc ET',$char_space));
            }
            //Override user alignment (since text will fill up cell)
            $align='';
        }
 
        //Pass on to Cell method
        $this->Cell($w,$h,$txt,$border,$ln,$align,$fill,$link);
 
        //Reset character spacing/horizontal scaling
        if ($fit)
            $this->_out('BT '.($scale ? '100 Tz' : '0 Tc').' ET');
    }
 
    function CellFitSpace($w, $h=0, $txt='', $border=0, $ln=0, $align='', $fill=false, $link='')
    {
        $this->CellFit($w,$h,$txt,$border,$ln,$align,$fill,$link,false,false);
    }
 
    //Patch to also work with CJK double-byte text
    function MBGetStringLength($s)
    {
        if($this->CurrentFont['type']=='Type0')
        {
            $len = 0;
            $nbbytes = strlen($s);
            for ($i = 0; $i < $nbbytes; $i++)
            {
                if (ord($s[$i])<128)
                    $len++;
                else
                {
                    $len++;
                    $i++;
                }
            }
            return $len;
        }
        else
            return strlen($s);
    }
	public function Header()
	{

		$this -> Image("../img/logo.jpg" , 25 , 25 , 20 , 20);
		$this -> SetFont ( 'Arial' , 'B' , 16 );			
		$this -> Cell( 180, 20 , "BD: siglagranja / Plaga   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(25, 25, 25 , 15); 
$mipdf->SetAutoPageBreak(true,25);
$plaidcodigo = array("CODIGO");
$planomcomun = array("NOM-COMUN");
$planomcienti = array("NOM-CIENTIFICO");
$plaorigen = array("ORIGEN");
$plalugarorig = array("LUGAR ORIGEN");
$platipagecau = array("AGE-CAUSAL");
$platratamien = array("TRATAMIENTO");
$mipdf -> addPage('A5' , 'letter',20,39);
for ($i = 0; $i < count( $plaidcodigo ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 20, 10 , $plaidcodigo[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $planomcomun ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 30, 10 , $planomcomun[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $planomcienti ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 35, 10 , $planomcienti[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $plaorigen ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 25, 10 , $plaorigen[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $plalugarorig ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 30, 10 , $plalugarorig[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $platipagecau ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 30, 10 , $platipagecau[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $platratamien ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 60, 10 , $platratamien[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);

$res=pg_query($con, "SELECT * FROM plaga ORDER BY plaidcodigo ASC");
			while($reg=pg_fetch_array($res))
			{
				$plaidcodigo= utf8_decode($reg[1]);
                $planomcomun= utf8_decode($reg[2]);
				$planomcienti=$reg[3];
				$plaorigen=$reg[4];
				$plalugarorig=$reg[5];
				$platipagecau= utf8_decode($reg[6]);
				$platratamien=$reg[7];
	
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 20, 20 , $plaidcodigo, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 30, 20 , $planomcomun, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 35, 20 , $planomcienti, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 25, 20 , $plaorigen , 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 30, 20 , $plalugarorig, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 30, 20 , $platipagecau, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 60, 20 , $platratamien, 1, 0, 'L' , true );
	$mipdf -> Ln( 20);	
}   
$mipdf -> Output('Pdf_Plaga.pdf','I');
?>


