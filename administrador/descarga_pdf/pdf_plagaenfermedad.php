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
		$this -> Cell( 280, 20 , "BD: siglagranja / PlagaEnfermedad (Vegetal)   ", 0 , 0 , 'C' );						
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
$penid = array("CODIGO");
$pentipdano = array(utf8_decode("TIP. DAÑO"));
$pentipagecau = array("AGE. CAUSAL");
$pennomcomun = array("NOMBRE COMUN");
$pennomcienti = array("NOMBRE CIENTIFICO");
$pentipmanejo = array("TIP. MANEJO");
$zonafectada = array("ZONA AFECTADA (FRUTA, TALLO, FLOR, RAIZ, HOJA)");
$mipdf -> addPage('A5' , 'legal',20,39);
for ($i = 0; $i < count( $penid ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 15, 10 , $penid[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $pentipdano ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 25, 10 , $pentipdano[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $pentipagecau ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 28, 10 , $pentipagecau[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $pennomcomun ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 65, 10 , $pennomcomun[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $pennomcienti ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 65, 10 , $pennomcienti[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $pentipmanejo ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 23, 10 , $pentipmanejo[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $zonafectada ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 105, 10 , $zonafectada[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
$res=pg_query($con, "SELECT * FROM plagaenfermedad ORDER BY penid ASC");
			while($reg=pg_fetch_array($res))
			{
				$penid= utf8_decode($reg[0]);
				$pentipdano= utf8_decode($reg[1]);
                $pennomcomun= utf8_decode($reg[2]);
				$pennomcienti=$reg[3];
				$pentipagecau=$reg[4];
				$pentipmanejo=$reg[5];
				$pentipzaffru= utf8_decode($reg[6]);
				$pentipzaftal= utf8_decode($reg[7]);
				$pentipzafflo= utf8_decode($reg[8]);
				$pentipzafrai= utf8_decode($reg[9]);
				$pentipzafhoj= utf8_decode($reg[10]);
	
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 15, 20 , $penid, 1, 0, 'C' , true );
	$mipdf -> CellFitSpace( 25, 20 , $pentipdano, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 28, 20 , $pentipagecau, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 65, 20 , $pennomcomun , 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 65, 20 , $pennomcienti, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 23, 20 , $pentipmanejo, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 21, 20 , $pentipzaffru, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 21, 20 , $pentipzaftal, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 21, 20 , $pentipzafflo, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 21, 20 , $pentipzafrai, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 21, 20 , $pentipzafhoj, 1, 0, 'L' , true );
	$mipdf -> Ln( 20);	
}   
$mipdf -> Output('Pdf_PlagaEnfermedad.pdf','I');
?>


