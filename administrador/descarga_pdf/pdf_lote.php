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
		$this -> Cell( 180, 20 , "BD: siglagranja / Lote   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(23, 25, 25, 10);$mipdf->SetAutoPageBreak(true,25);
$lotidcodigo = array("CODIGO");
$lotsuelo = array("SUELO");
$lotextension = array("EXTENSION");
$coordenadas = array("LATITUD","LONGITUD");
$mipdf -> addPage('A5' , 'letter',20,39);

for ($i = 0; $i < count( $lotidcodigo ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 11);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 30, 10 , $lotidcodigo[ $i ] , 1 , 0 , 'C' , true );
}
for ($i = 0; $i < count( $lotsuelo ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 11);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 70, 10 , $lotsuelo[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $lotextension ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 11);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 30, 10 , $lotextension[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $coordenadas ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 11);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> Cell ( 50, 10 , $coordenadas[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);

$res=pg_query($con, "SELECT * FROM lote ORDER BY lotidcodigo ASC");
			while($reg=pg_fetch_array($res))
			{
				$lotsuelo= utf8_decode($reg [2]);
				$res1=pg_query($con, "SELECT * FROM suelo WHERE sueid='$lotsuelo' ");
				while($reg1=pg_fetch_array($res1))
				{
					$sueftextura=utf8_decode($reg1[3]);
				}
				$lotunimedlot= utf8_decode($reg [4]);
				$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$lotunimedlot' ");
				while($reg1=pg_fetch_array($res1))
				{
					$umerepreset=utf8_decode($reg1[1]);
				}
				$lotidcodigo=utf8_decode($reg[1]);
				$lotextension=$reg[3];
				$lotlatitud=$reg[5];
				$lotorientlat=$reg[6];
				$lotlongitud=$reg[7];
				$lotorientlon=$reg[8];

	$mipdf -> SetFont( 'Arial' , 'B' , 10);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> Cell( 30, 10 , $lotidcodigo, 1, 0, 'L' , true );
	$mipdf -> Cell( 70, 10 , $sueftextura, 1, 0, 'L' , true );
	$mipdf -> Cell( 19, 10 , $lotextension, 1, 0, 'R' , true );
	$mipdf -> Cell( 11, 10 , $umerepreset, 1, 0, 'L' , true );
	$mipdf -> Cell( 25, 10 , $lotlatitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 25, 10 , $lotorientlat, 1, 0, 'L' , true );
	$mipdf -> Cell( 25, 10 , $lotlongitud, 1, 0, 'R' , true );
	$mipdf -> Cell( 25, 10 , $lotorientlon, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}   
$mipdf -> Output('Pdf_Lote.pdf','I');?>


