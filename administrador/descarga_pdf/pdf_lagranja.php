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
		$this->SetTextColor(0);			
		$this -> Cell( 180, 20 , "BD: siglagranja / La Granja   ", 0 , 0 , 'C' );						
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
$mipdf->SetMargins(45, 25, 25 , 15);
$mipdf->SetAutoPageBreak(true,25);
$lagnit = array("CODIGO (NIT)");
$mipdf -> addPage('A5' , 'letter',20,39);
for ($i = 0; $i < count( $lagnit ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 180, 10 , $lagnit[ $i ] , 1 , 0 , 'C' , true );
}
$mipdf -> Ln( 10);

	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja ORDER BY lagnit ASC");
			while($reg=pg_fetch_array($res))
			{
				$lagnit=utf8_decode($reg[1]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 180, 10 , $lagnit, 1, 0, 'C' , true );
	
	$mipdf -> Ln( 10);	
}
$lagnombre = array("NOMBRE");
for ($i = 0; $i < count( $lagnombre ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagnombre[ $i ] , 1 , 0 , 'C' , true );
}
$lagdireccio = array("DIRECCION");
for ($i = 0; $i < count( $lagdireccio ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagdireccio[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagnombre=utf8_decode($reg[2]);
				$lagdireccio=utf8_decode($reg[3]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 90, 10 , $lagnombre, 1, 0, 'L' , true );
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 90, 10 , $lagdireccio, 1, 0, 'L' , true );
	
	$mipdf -> Ln( 10);	
}
$lagdepartam = array("DEPARTAMENTO");
$lagmunicipi = array("MUNICIPIO");
for ($i = 0; $i < count( $lagdepartam ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagdepartam[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $lagmunicipi ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagmunicipi[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagdepartam=utf8_decode($reg[4]);
				$lagmunicipi=utf8_decode($reg[5]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 90, 10 , $lagdepartam, 1, 0, 'L' , true );
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 90, 10 , $lagmunicipi, 1, 0, 'L' , true );
	
	$mipdf -> Ln( 10);	
}
$lagvereda = array("VEREDA");
for ($i = 0; $i < count( $lagvereda ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 180, 10 , $lagvereda[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagvereda=utf8_decode($reg[6]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 180, 10 , $lagvereda, 1, 0, 'L' , true );
	
	$mipdf -> Ln( 10);	
}
$separador = array("");
for ($i = 0; $i < count( $separador ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 0, 0 ,0);
	$mipdf -> SetFillColor(  255 , 255 ,255);
	$mipdf -> MultiCell ( 180, 10 , $separador[ $i ] , 0 , 0 , 'C' , true );	
}
$lagcodprenu = array("PREDIAL NUEVO");
$lagcodprean = array("PREDIAL ANTERIOR");
for ($i = 0; $i < count( $lagcodprenu ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagcodprenu[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $lagcodprean ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagcodprean[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagcodprenu=utf8_decode($reg[7]);
				$lagcodprean=utf8_decode($reg[8]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 90, 10 , $lagcodprenu, 1, 0, 'R' , true );
	$mipdf -> CellFitSpace( 90, 10 , $lagcodprean, 1, 0, 'R' , true );

	
	$mipdf -> Ln( 10);	
}
$lagmatriinm = array("MATRICULA INMOBILIARIA");
$lagactiecon = array("ACTIVIDAD ECONOMICA");
for ($i = 0; $i < count( $lagmatriinm ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagmatriinm[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $lagactiecon ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagactiecon[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagmatriinm=utf8_decode($reg[9]);
				$lagactiecon=utf8_decode($reg[10]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 90, 10 , $lagmatriinm, 1, 0, 'L' , true );
	$mipdf -> CellFitSpace( 90, 10 , $lagactiecon, 1, 0, 'L' , true );

	
	$mipdf -> Ln( 10);	
}
$lagfecfunda = array("FECHA FUNDACION");
$lagareaterr = array("AREA TERRENO");
for ($i = 0; $i < count( $lagfecfunda ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagfecfunda[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $lagareaterr ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagareaterr[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagunimedat= utf8_decode($reg [13]);
				$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$lagunimedat' ");
				while($reg1=pg_fetch_array($res1))
				{
					$nomunidad1=utf8_decode($reg1[1]);
				}
				$lagfecfunda=utf8_decode($reg[11]);
				$lagactiecon=utf8_decode($reg[12]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 90, 10 , $lagfecfunda, 1, 0, 'R' , true );
	$mipdf -> CellFitSpace( 45, 10 , $lagactiecon, 1, 0, 'R' , true );
	$mipdf -> CellFitSpace( 45, 10 , $nomunidad1, 1, 0, 'C' , true );	
	$mipdf -> Ln( 10);	
}
$lagareconst = array("AREA CONSTRUIDA");
$lagcanconst = array("CANTIDAD CONSTRUCCIONES");
for ($i = 0; $i < count( $lagareconst ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagareconst[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $lagcanconst ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagcanconst[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagunimedac= utf8_decode($reg [15]);
				$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$lagunimedac' ");
				while($reg1=pg_fetch_array($res1))
				{
					$nomunidad2=utf8_decode($reg1[1]);
				}
				$lagareconst=utf8_decode($reg[14]);
				$lagcanconst=utf8_decode($reg[16]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 45, 10 , $lagareconst, 1, 0, 'R' , true );
	$mipdf -> CellFitSpace( 45, 10 , $nomunidad2, 1, 0, 'C' , true );
	$mipdf -> CellFitSpace( 90, 10 , $lagcanconst, 1, 0, 'R' , true );
	$mipdf -> Ln( 10);	
}
$lagaltitud = array("ALTITUD NIVEL MAR");
$lagplancha = array("NUMERO PLANCHA");
for ($i = 0; $i < count( $lagaltitud ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagaltitud[ $i ] , 1 , 0 , 'C' , true );	
}
for ($i = 0; $i < count( $lagplancha ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $lagplancha[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagunimedam= utf8_decode($reg [18]);
				$res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$lagunimedam' ");
				while($reg1=pg_fetch_array($res1))
				{
					$nomunidad3=utf8_decode($reg1[1]);
				}
				$lagaltitud=utf8_decode($reg[17]);
				$lagplancha=utf8_decode($reg[19]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 45, 10 , $lagaltitud, 1, 0, 'R' , true );
	$mipdf -> CellFitSpace( 45, 10 , $nomunidad3, 1, 0, 'C' , true );
	$mipdf -> CellFitSpace( 90, 10 , $lagplancha, 1, 0, 'R' , true );
	$mipdf -> Ln( 10);	
}
$lagescala = array("ESCALA");
for ($i = 0; $i < count( $lagescala ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 180, 10 , $lagescala[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$lagescala=utf8_decode($reg[20]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 180, 10 , $lagescala, 1, 0, 'L' , true );
	$mipdf -> Ln( 10);	
}
$separador1 = array("");
for ($i = 0; $i < count( $separador1 ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 0, 0 ,0);
	$mipdf -> SetFillColor(  255 , 255 ,255);
	$mipdf -> MultiCell ( 180, 10 , $separador1[ $i ] , 0 , 0 , 'C' , true );	
}
$coordenadas = array("LATITUD","LONGITUD");
for ($i = 0; $i < count( $coordenadas ) ; $i++)
{
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor( 255, 255 ,255);
	$mipdf -> SetFillColor(  0 , 0 ,255);
	$mipdf -> CellFitSpace ( 90, 10 , $coordenadas[ $i ] , 1 , 0 , 'C' , true );	
}
$mipdf -> Ln( 10);
	$mipdf -> SetFont( 'Arial' , 'B' , 7);
	$res=pg_query($con, "SELECT * FROM lagranja");
			while($reg=pg_fetch_array($res))
			{
				$laglatitud=utf8_decode($reg[21]);
				$lagorientlat=utf8_decode($reg[22]);
				$laglongitud=utf8_decode($reg[23]);
				$lagorientlon=utf8_decode($reg[24]);
				
	$mipdf -> SetFont( 'Arial' , 'B' , 8);
	$mipdf -> SetTextColor(0,0,0);
	$mipdf -> SetFillColor( 255,255,255);		
	$mipdf -> CellFitSpace( 45, 10 , $laglatitud, 1, 0, 'R' , true );
	$mipdf -> CellFitSpace( 45, 10 , $lagorientlat, 1, 0, 'C' , true );
	$mipdf -> CellFitSpace( 45, 10 , $laglongitud, 1, 0, 'R' , true );
	$mipdf -> CellFitSpace( 45, 10 , $lagorientlon, 1, 0, 'C' , true );
	$mipdf -> Ln( 10);	
}
  
$mipdf -> Output('Pdf_LaGranja.pdf','I');
?>


