<?php

include "pdf/pdf.php";
include "../conexion.php";


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
		$this -> Cell( 250, 20 , "BD: siglagranja / ZonaVerde - Vegetal   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(4, 25, 25, 7); 
$mipdf->SetAutoPageBreak(true,25);
$zovkidcodigo = array("CODIGO");
$zovzonaverde = array("ZONA VERDE");
$zovvegetal = array("VEGETAL");
$zovdescripci = array("DESCRIPCION");
$mipdf -> addPage('A5' , 'legal',20,39);

for ($i = 0; $i < count( $zovkidcodigo ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 20, 10 , $zovkidcodigo[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $zovzonaverde ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 40, 10 , $zovzonaverde[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $zovvegetal ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 40, 10 , $zovvegetal[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $zovdescripci ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 9);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 247, 10 , $zovdescripci[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);

$res=pg_query($con, "SELECT * FROM zonaverde_vegetal ORDER BY zovkidcodigo ASC");
			while($reg=pg_fetch_array($res))
			{
				$ZonaVerde= utf8_decode($reg [2]);
				$res1=pg_query($con, "SELECT * FROM zonaverde WHERE zveid='$ZonaVerde' ");
				while($reg1=pg_fetch_array($res1))
				{
					$zveidcodigo=utf8_decode($reg1[1]);
				}
				$vegetal= utf8_decode($reg [3]);
				$res1=pg_query($con, "SELECT * FROM vegetal WHERE vegid='$vegetal' ");
				while($reg1=pg_fetch_array($res1))
				{
					$nomcomun1=utf8_decode($reg1[1]);
				}
				$codigo=$reg[1];
				$descripcion= utf8_decode($reg[4]);
	
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> Cell( 20, 10 , $codigo, 1, 0, 'C' , true );
	$mipdf -> Cell( 40, 10 , $zveidcodigo, 1, 0, 'L' , true );
	$mipdf -> Cell( 40, 10 , $nomcomun1, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 247, 10 , $descripcion, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_ZonaverdeVegetal.pdf','I');
?>


