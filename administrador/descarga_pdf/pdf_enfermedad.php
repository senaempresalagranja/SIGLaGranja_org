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
		$this -> Cell( 180, 20 , "BD: siglagranja / Enfermedad   ", 0 , 0 , 'C' );						
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
$enfid = array("CODIGO");
$enfnomcomun = array("NOM-COMUN");
$enfnomcinti = array("NOM-CIENTIFICO");
$enftipagecau = array("AGE-CAUSAL");
$enfmorvimort = array("MORTALIDAD");
$enfsintomas = array("SINTOMAS");
$enftratamien = array("TRATAMIENTO");
$mipdf -> addPage('A5' , 'legal',20,39);
for ($i = 0; $i < count( $enfid ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 17, 10 , $enfid[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $enfnomcomun ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 30, 10 , $enfnomcomun[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $enfnomcinti ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 35, 10 , $enfnomcinti[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $enftipagecau ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 23, 10 , $enftipagecau[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $enfmorvimort ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 25, 10 , $enfmorvimort[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $enfsintomas ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 90, 10 , $enfsintomas[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $enftratamien ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 90, 10 , $enftratamien[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
$res=pg_query($con, "SELECT * FROM enfermedad ORDER BY enfid ASC");
			while($reg=pg_fetch_array($res))
			{

	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$enfid = utf8_decode($reg [0]);	
	$enfnomcomun= utf8_decode($reg [1]);
	$enfnomcinti= utf8_decode($reg [2]);	
	$enftipagecau= utf8_decode($reg [3]);
	$enfmorvimort= utf8_decode($reg [4]);
	$enfsintomas= utf8_decode($reg [5]);
	$enftratamien= utf8_decode($reg [6]);
	
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 17, 20 , $enfid, 1, 0, 'C' , true );
	$mipdf -> CellFitSpace( 30, 20 , $enfnomcomun, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 35, 20 , $enfnomcinti, 1, 0, 'L' , true );	
	$mipdf -> CellFitSpace( 23, 20 , $enftipagecau , 1, 0, 'L' , true );		
	$mipdf -> CellFitSpace( 25, 20 , $enfmorvimort, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 90, 20 , $enfsintomas, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 90, 20 , $enftratamien, 1, 0, 'L' , true );
	$mipdf -> Ln( 20);	
}   
$mipdf -> Output('Pdf_Enfermedad.pdf','I');
?>


