<!-- 
  Proyecto: Sistema de Informacion Georeferenciado del Centro Agropecuario "La Granja". 
  Nombre del proyecto:  SIGLaGranja. 
  Desarrolladores: Tecnologo en Análisis y Desarrollo de Sistemas de Información "ADSI". 
  Numero de Ficha: 798585. 
  Descripcion del Proyecto: Software que permita la Georeferenciación de Centro Agropecuario "La Granja" SENA Espinal - Tolima. 
  Año de Desarrollo: 2014-2015.-->
<?php
error_reporting(E_ALL^E_NOTICE);
session_start();
if (isset($_SESSION['ADMINISTRADOR'])){}
else
{
  echo "<script type='text/javascript'>alert('Parece que su Sesion ha finalizado, por favor Inicie Sesion');location='../visitante/index.php?Acceso Denegado'</script>";
}
$_SESSION['CodUnidad']=$_REQUEST['ConsUnidades'];
$_SESSION['CodArea']=$_REQUEST['ConUnidades'];
$_SESSION['NombreComunEnf']=$_REQUEST['ConCodLote'];
?>

<!DOCTYPE html>
<html lang="es">
<?php  include 'include/header.php'; ?>
<style type="text/css">
.GrillaConsulta table {   border-collapse: collapse; 
  text-align: left;   width: 50%; } 
.GrillaConsulta{
  font: normal 12px/150% Arial, Helvetica, sans-serif; 
  background: #fff; 
  overflow: scroll;   margin-left: 15px; 
  margin-right: 15px;   -webkit-border-radius: 11px; 
  -moz-border-radius: 11px;   border-radius: 11px; }
.GrillaConsulta table td, .GrillaConsulta table th 
{   padding: 4px 7px;}
.GrillaConsulta table thead th {  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #006699), color-stop(1, #00557F) );  color:#FFFFFF; 
  font-size: 12px;  font-weight: bold;
  border-left: 1px solid #fff;} 
.GrillaConsulta table thead th:first-child 
{   border: none; 
}.GrillaConsulta table tbody td { 
  color: #00557F;   border-left: 2px solid #E1EEF4;
  font-size: 12px;  font-weight: normal; 
}
.GrillaConsulta table tbody td:first-child { 
  border-left: groove;
}.GrillaConsulta table tbody tr:last-child td 
{   border-bottom: groove;
}
</style>

<script type="text/javascript">
function habilitaCultivo(form)
{ 
  document.getElementById("Cultivo3").disabled=true;
  document.getElementById("Cultivo3").style.background = "#EDE9E9";

  document.getElementById("Cultivo2").disabled=false;
  document.getElementById("Cultivo2").style.background = "#FFF";

  document.getElementById("Cultivo1").disabled=false;
  document.getElementById("Cultivo1").style.background = "#FFF";
}
function deshabilitaCultivo(form)
{ 
  document.getElementById("Cultivo2").disabled=true;
  document.getElementById("Cultivo2").style.background = "#EDE9E9";

  document.getElementById("Cultivo1").disabled=true;
  document.getElementById("Cultivo1").style.background = "#EDE9E9";

  document.getElementById("Cultivo3").disabled=false;
  document.getElementById("Cultivo3").style.background = "#FFF";
}

</script>
  <body>
    <div id="section">
       <div id="banner">
        <?php include 'include/banner.php'; ?>
      </div>
      <div id="nav">
        <?php include 'include/menu.php'; ?>
      </div>
      <div>    
    <table class="table">
        <tr>
          <td colspan="4">
            <br><p class='tit-form'><b>CONSULTAR CULTIVO</b></p><br>
          </td>
        </tr>
        <tr>
          <center>
          <td colspan="2">
            <input type='radio' name='Cultivo' id='Cultivo' onclick='habilitaCultivo(this.form)'> <em>CRITERIO DE BÚSQUEDA POR FILTRO</em></input>        
          </td>
          <td colspan="2">
            <input type='radio' name='Cultivo' id='Cultivo' onclick='deshabilitaCultivo(this.form)'> <em>CRITERIO DE BÚSQUEDA POR LOTE</em></input>
          </td>
          </center>
        </tr>
        <tr height="20px"></tr>

        <form action="con_cultivo.php" name="ConUnidad">
        <tr>        
          <td>UNIDAD:</td>
          <td>
            <input type="hidden" name="CodigoOculto" value="1">                    
            <select name="ConUnidades" id="Cultivo1" class="select-form" onchange="submit();">
                <?php
                  include 'conexion.php';

                  $ConsuUnidades=$_REQUEST['ConUnidades'];
                  $Cultivos=$_REQUEST['ConsCultivos'];

                  if ($ConsuUnidades) 
                  {
                    if ($ConsuUnidades == "All") 
                    {                      
                      echo "<option selected disabled>TODAS</option>";
                      $ConBDUnidad= pg_query($con, "SELECT * from unidad INNER JOIN area ON area.areid = unidad.uniarea where arenombre = 'AGRICOLA' AND uninombre <> '$ConsuUnidades' order by uninombre asc");
                      while ($RegUnidades=pg_fetch_array($ConBDUnidad)) 
                      {
                        $IdConUnidad=$RegUnidades[0];
                        $NomConUnidad=$RegUnidades[2]; 
                        echo "<option value='$IdConUnidad'>$NomConUnidad</option>";}
                    }
                    else
                    {
                      $ConBDUnidad1= pg_query($con, "SELECT * from unidad where uniid = '$ConsuUnidades'");
                      while ($RegistrosConUnidades=pg_fetch_array($ConBDUnidad1)) 
                      {
                        $NomConUnidad=$RegistrosConUnidades[2];
                        echo "<option selected disabled>$NomConUnidad</option>";
                      }
                      echo "<option value='All'>TODAS</option>";
                      $ConBDUnidad2= pg_query($con, "SELECT * from unidad INNER JOIN area ON area.areid = unidad.uniarea where arenombre = 'AGRICOLA' AND uniid <> '$ConsuUnidades' order by uninombre asc");
                      while ($RegistrosConUnidades=pg_fetch_array($ConBDUnidad2)) 
                      {
                        $IdConUnidad=$RegistrosConUnidades[0];
                        $NomConUnidad=$RegistrosConUnidades[2];
                        echo "<option value='$IdConUnidad'>$NomConUnidad</option>";
                      }
                    }                    
                  }
                  else
                  {
                    if ($Cultivos) 
                    {
                      $CodCulUnidad=$_SESSION['cultunidad'];
                      if ($Cultivos == "All") 
                      {
                        $ConBDUnidad1= pg_query($con, "SELECT * from unidad where uniid = '$CodCulUnidad'");
                        while ($RegConUnidades=pg_fetch_array($ConBDUnidad1)) 
                        {
                          $NomConUnidad=$RegConUnidades[2];
                          echo "<option selected disabled>$NomConUnidad</option>";}
                        echo "<option value='All'>TODAS</option>";
                        $ConBDUnidad2= pg_query($con, "SELECT * from unidad INNER JOIN area ON area.areid = unidad.uniarea where arenombre = 'AGRICOLA' AND uniid <> '$CodCulUnidad' order by uninombre asc");
                        while ($RegConUnidades=pg_fetch_array($ConBDUnidad2)) 
                        {
                          $IdConUnidad=$RegConUnidades[0];
                          $NomConUnidad=$RegConUnidades[2];
                          echo "<option value='$IdConUnidad'>$NomConUnidad</option>";
                        }                        
                      }
                      elseif ($Cultivos <> "All") 
                      {
                        $ConBDUnidad=pg_query($con, "SELECT * from unidad_cultivo where lcucultivo = '$Cultivos'");
                        while ($RegistrosUnidades=pg_fetch_array($ConBDUnidad)) 
                        {
                          $CodUnidad=$RegistrosUnidades[3];
                          $CodCult=$RegistrosUnidades[2];
                        }
                        $ConBDUnidad1= pg_query($con, "SELECT * from unidad where uniid = '$CodUnidad'");
                        while ($RegistrosConUnidades=pg_fetch_array($ConBDUnidad1)) 
                        {
                          $NomConUnidad=$RegistrosConUnidades[2];
                          echo "<option selected disabled>$NomConUnidad</option>";
                        }
                          echo "<option value='All'>TODAS</option>";
                        $ConBDUnidad1= pg_query($con, "SELECT * from unidad INNER JOIN area ON area.areid = unidad.uniarea where arenombre = 'AGRICOLA' AND uniid <> '$CodUnidad'  order by uninombre asc");
                        while ($RegistrosConUnidades=pg_fetch_array($ConBDUnidad1)) 
                        {
                          $IdConUnidad=$RegistrosConUnidades[0];
                          $NomConUnidad=$RegistrosConUnidades[2];
                          echo "<option value='$IdConUnidad'>$NomConUnidad</option>";
                        }
                      }
                    }
                  else
                  {
                    echo "<option selected disabled>SELECCIONE</option>
                          <option value='All'>TODAS</option>";
                    $ConBDUnidad1= pg_query($con, "SELECT * from unidad INNER JOIN area ON area.areid = unidad.uniarea where arenombre = 'AGRICOLA' order by uninombre asc");
                    while ($RegistrosConUnidades=pg_fetch_array($ConBDUnidad1)) 
                    {
                      $IdConUnidad=$RegistrosConUnidades[0];
                      $NomConUnidad=$RegistrosConUnidades[2];
                      echo "<option value='$IdConUnidad'>$NomConUnidad</option>";
                    }
                  }
                }
              ?>
            </select>
          </td>
        </form>
        <form action="con_cultivo.php" name="ConCodLote">
          
          
      <tr>
      <form action="con_cultivo.php" name="ConCultivo">
        <td>CULTIVO:</td>
        <td>
          <input type="hidden" name="CodigoOculto" value="3">
          <select name="ConsCultivos" id="Cultivo2" class="select-form" onchange="submit();">
            <?php 
            error_reporting(E_ALL ^ E_NOTICE);
            include 'conexion.php';
            $ConsuUnidades=$_REQUEST['ConUnidades'];
            $Cultivos=$_REQUEST['ConsCultivos'];

            if ($ConsuUnidades) 
            {
              if ($ConsuUnidades == "All")  
              {

              }
              else
              {
                echo "<option selected disabled>SELECCIONE</option>";
                echo "<option value='All'>TODAS</option>";
                $ConsultaUnidad= pg_query($con, "SELECT * from unidad_cultivo where lcuunidad = '$ConsuUnidades'");
                while ($RegUnid=pg_fetch_array($ConsultaUnidad)) 
                {
                  $IdLot_Cult=$RegUnid[2];
                  
                  $NomCult=$RegUnid[2];
                  $BD= pg_query($con, "SELECT * from cultivo where culid = '$NomCult'");
                    while ($Reg=pg_fetch_array($BD)) 
                    {
                      $NombreCult=$Reg[2];
                    }
                  echo "<option value='$IdLot_Cult'>$NombreCult</option>";
                }
                  $_SESSION['unidad']=($ConsuUnidades);
              }
            }
            else
            {
              if ($Cultivos) 
              {
                $_SESSION['cultunidad']=$_SESSION['unidad'];
                $Unidad=($_SESSION['cultunidad']);

                if ($Cultivos == "All")
                {
                  echo "<option selected disabled>TODAS</option>";
                  $ConBDLotCul= pg_query($con, "SELECT * from unidad_cultivo where lcuunidad = '$Unidad'");
                  while ($RegistrosUnidades=pg_fetch_array($ConBDLotCul)) 
                  {
                    $IdCult=$RegistrosUnidades[2];

                    $NomCult=$RegistrosUnidades[2];
                    $Connomcult= pg_query($con, "SELECT * from cultivo where culid = '$NomCult'");
                    while ($Reg=pg_fetch_array($Connomcult)) 
                    {
                      $NombreCult=$Reg[2];
                    }
                    echo "<option value='$IdCult'>$NombreCult</option>";
                  }
                }
                else
                {
                  $Unidad=$_SESSION['cultunidad'];
                  $ConBDCultivo= pg_query($con, "SELECT * from unidad_cultivo where lcucultivo = '$Cultivos' and lcuunidad = '$Unidad'");
                  while ($RegistrosUnidades=pg_fetch_array($ConBDCultivo)) 
                  {
                    $NomCult=$RegistrosUnidades[2];
                    $ConNomcult1= pg_query($con, "SELECT * from cultivo where culid = '$NomCult'");
                    while ($Reg=pg_fetch_array($ConNomcult1)) 
                    {
                      $NombreCultivo1=$Reg[2];
                    }
                    echo "<option selected disabled>$NombreCultivo1</option>";
                  }
                  echo "<option value='All'>TODAS</option>";
                  $ConBDUnidad2= pg_query($con, "SELECT * from unidad_cultivo where lcucultivo <> '$Cultivos' AND lcuunidad = '$Unidad'");
                  while ($RegistrosUnidades2=pg_fetch_array($ConBDUnidad2)) 
                  {
                    $IdCultivo=$RegistrosUnidades2[2];
                    $Connomcult1= pg_query($con, "SELECT * from cultivo where culid = '$IdCultivo'");
                    while ($Reg=pg_fetch_array($Connomcult1)) 
                    {
                      $NombreCultivo=$Reg[2];
                    }
                    echo "<option value='$IdCultivo'>$NombreCultivo</option>";
                  }
                  $_SESSION['unidad']=($Cultivos);
                }
              }                
            }
            ?>            
          </select>
          <?php echo "$Unidad"; ?>
        </td>
      </form>      
      </tr>
    </table> 
  </div>
  <br><br>
  <div>  
    <?php
      error_reporting(E_ALL ^ E_NOTICE);
      include 'conexion.php';      
     
      $Tip_Hidden=$_REQUEST['CodigoOculto'];
      $ConsuUnidades=$_REQUEST["ConUnidades"];
      $Cultivos=$_REQUEST["ConsUnidades"];
    
      if ($Tip_Hidden == 1) 
      {
        if ($ConsuUnidades == "All") 
        {
          $consulta=pg_query($con,"SELECT 
       area.arenombre,
       unidad.uninombre,
       cultivo.culextension,
       cultivo.culunimedida,
       cultivo.cullatitud,
       cultivo.culorientlat,
       cultivo.cullongitud,
       cultivo.culorientlon,
       cultivo.culnomcomun,
       cultivo.culnomcienti,
       cultivo.culorigen,
       cultivo.cullugarorig,
       cultivo.culclimafavo,
       cultivo.culdistsiemb,
       cultivo.culunimedsie,
       cultivo.culvidautil,
       cultivo.cultiempvida,
       unidad_cultivo.lcufechsiemb,
       unidad_cultivo.lcufechcosec,
       unidad_cultivo.lcuproduesti,
       unidad_cultivo.lcuunimedest,
       unidad_cultivo.lcuprodureal,
       unidad_cultivo.lcuunimedrea,
       unidad_cultivo.lcuresponsab,
       plagaenfermedad.pentipdano,
       plagaenfermedad.pennomcomun,
       plagaenfermedad.pennomcienti,
       plagaenfermedad.pentipagecau,
       plagaenfermedad.pentipmanejo,
       plagaenfermedad.pentipzaffru,
       plagaenfermedad.pentipzaftal,
       plagaenfermedad.pentipzafflo,
       plagaenfermedad.pentipzafrai,
       plagaenfermedad.pentipzafhoj,
       canal.cannombre,
       suelo.suefhumedad,
       suelo.sueftextura,
       suelo.sueqph,
       suelo.suefporocida,
       suelo.suefconsiste,
       suelo.suefcolorter,
       suelo.suefcondelet,
       suelo.sueqnitrogen,
       suelo.sueqfosforo,
       suelo.sueqpotacio,
       suelo.sueqelemmeno,
       suelo.sueqeleminte,
       suelo.suebmateorga,
       suelo.suebactimicr,
       suelo.suebmasmicro
       FROM unidad_cultivo
                  inner join unidad on unidad.uniid = unidad_cultivo.lcuunidad
                  inner join cultivo on cultivo.culid = unidad_cultivo.lcucultivo     
                  inner join area on area.areid = unidad.uniarea
             
                  inner join plagaenfermedad on plagaenfermedad.penid = unidad_cultivo.lcuplagenfer
                  inner join canal on canal.canid = unidad_cultivo.lcucanal
                  inner join suelo on suelo.sueid = lote.lotsuelo");
          $con_canales= pg_query($con, "SELECT DISTINCT canal.cannombre
                        FROM unidad_cultivo                        
                        INNER JOIN canal ON canal.canid= unidad_cultivo.lcucanal
                        INNER JOIN cultivo ON cultivo.culid = unidad_cultivo.lcucultivo" );
                        while ($resultado= pg_fetch_array($con_canales))
                            {

                                for($i=0;$i<count($con_canales);$i++)   
                                    {
                                        $datoCanal=$resultado[$i];
                                    }
                            }
          $con_lotes= pg_query($con, "SELECT DISTINCT lote.lotidcodigo
                        FROM unidad_cultivo 
                        
                        INNER JOIN cultivo ON cultivo.culid = unidad_cultivo.lcucultivo" );
                        while ($resultado_l= pg_fetch_array($con_lotes))
                            {

                                for($i=0;$i<count($con_lotes);$i++) 
                                {
                                    $datoLote=$resultado_l[$i];
                                }
                            }
          echo <<<EOT
                    <div class="GrillaConsulta">
                      <table>
                        <thead>
                          <tr>
                            <th>AREA</th>
                             <th>UNIDAD</th>
                             <th>UBICACION</th>
                             <th colspan="2">LATITUD</th>
                             <th colspan="2">LONGITUD</th>
                             <th>NOMBRE COMUN</th> 
                             <th>NOMBRE CIENTIFICO</th>
                             <th colspan="2">EXTENSION CULTIVO</th>
                             <th>ORIGEN</th>
                             <th>LUGAR ORIGEN</th>  
                             <th>CLIMA FAVORABLE</th>  
                             <th colspan="2">DISTANCIA SIEMBRA</th>
                             <th colspan="2">VIDA UTIL</th>
                             <th>FECHA SIEMBRA</th>
                             <th>FECHA COSECHA</th>
                             <th colspan="2">PRODUCCION ESTIMADA</th>
                             <th colspan="2">PRODUCCION REAL</th>
                             <th>RESPONSABLE</th>
                             <th>CANALES</th>
                             <th>LOTES QUE LO CULTIVAN</th>
                             <th>TIPO DAÑO</th>
                             <th>NOMBRE DAÑO</th>
                             <th>NOMBRE CIENTIFICO</th>
                             <th>TIPO AGENTE CAUSAL</th>
                             <th>TIPO MANEJO</th>
                             <th colspan="5">ZONA AFECTADA (FRUTA,TALLO,FLOR,RAIZ,HOJA)</th>
                             <th>CANAL</th>
                             <th>HUMEDAD</th>
                             <th>TEXTURA</th>
                             <th>PH</th>
                             <th>POROSIDAD</th>
                             <th>CONSISTENCIA</th>
                             <th>COLOR TERMICO</th>
                             <th>CONDUCTIVIDAD ELECTRICA</th>
                             <th>NITROGENO</th>
                             <th>FOSFORO</th>
                             <th>POTACIO</th>
                             <th>ELEMENTOS MENORES</th>
                             <th>ELEMENTOS INTERCAMBIO</th>
                             <th>MATERIA ORGANICA</th>
                             <th>ACTIVIDAD MICROBIANA</th>
                             <th>MASA MICROBIANA</th>
                          </tr>
                        </thead>
                        <tbody>
                                  
EOT;
            $Num_Fila=0;
            while ($reg= pg_fetch_array($consulta)) 
                      { 
                     
                      $umd=$reg[4];
                        $con1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid=$umd");
                        while ($reg1=pg_fetch_array($con1)) 
                        {
                          $nom2=$reg1[1];
                        }

                      $umd1=$reg[15];
                        $con1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid=$umd1");
                        while ($reg1=pg_fetch_array($con1)) 
                        {
                          $nom3=$reg1[1];
                        }

                      $umd2=$reg[21];
                        $con1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid=$umd2");
                        while ($reg1=pg_fetch_array($con1)) 
                        {
                          $nom4=$reg1[1];
                        }

                      $umd3=$reg[23];
                        $con1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid=$umd3");
                        while ($reg1=pg_fetch_array($con1)) 
                        {
                          $nom5=$reg1[1];
                        }

                        echo "<tr ";
                        if ($Num_Fila%2==0) 
                        {
                          echo "bgcolor=#A8D4E1";
                          echo ">";
                        }
                        else
                        {
                          echo "bgcolor=#FAFAFA";
                          echo ">";
                        }
                        echo "<td>$reg[0]</td>";//Area
                        echo "<td>$reg[1]</td>";//Unidad
                    
                        echo "<td>$reg[5]</td>";//Latitud
                        echo "<td>$reg[6]</td>";//orientacion
                        echo "<td>$reg[7]</td>";//Longitud
                        echo "<td>$reg[8]</td>";//orientacion
                        echo "<td>$reg[9]</td>";//Nom Comun
                        echo "<td>$reg[10]</td>";//Nom Cientif
                        echo "<td>$reg[2]</td>";//Extensión #
                        echo "<td>$nom2</td>";//UM
                        echo "<td>$reg[11]</td>";//ORIGEN
                        echo "<td>$reg[12]</td>";//LUGAR ORIGEN
                        echo "<td>$reg[13]</td>";//CLIMA
                        echo "<td>$reg[14]</td>";//DISTANCIA SIEMB
                        echo "<td>$nom3</td>";//UM
                        echo "<td>$reg[16]</td>";//VIDA UTIL
                        echo "<td>$reg[17]</td>";//TIEMPO
                        echo "<td>$reg[18]</td>";//FECHA SIEMB
                        echo "<td>$reg[19]</td>";//FECHA COSE
                        echo "<td>$reg[20]</td>";//PROD-ESTI
                        echo "<td>$nom4</td>";//UM
                        echo "<td>$reg[22]</td>";//PROD-REAL
                        echo "<td>$nom5</td>";//UM
                        echo "<td>$reg[24]</td>";//RESPONSABLE
                        echo "<td>$datoCanal</td>";//Canales
                      
                        echo "<td>$reg[25]</td>";//Tipo daño
                        echo "<td>$reg[26]</td>";//Nombre com
                        echo "<td>$reg[27]</td>";//Nombre cient
                        echo "<td>$reg[28]</td>";//Tip age causal
                        echo "<td>$reg[29]</td>";//Tipo manejo
                        echo "<td>$reg[30]</td>";//fruta
                        echo "<td>$reg[31]</td>";//tallo
                        echo "<td>$reg[32]</td>";//flor
                        echo "<td>$reg[33]</td>";//raiz
                        echo "<td>$reg[34]</td>";//hoja
                        echo "<td>$reg[35]</td>";//Canal
                        echo "<td>$reg[36]</td>";//Humedad
                        echo "<td>$reg[37]</td>";//Textura
                        echo "<td>$reg[38]</td>";//ph
                        echo "<td>$reg[39]</td>";//porosidad
                        echo "<td>$reg[40]</td>";//consistencia
                        echo "<td>$reg[41]</td>";//color termico
                        echo "<td>$reg[42]</td>";//conductividad Electrica
                        echo "<td>$reg[43]</td>";//Nitrogeno
                        echo "<td>$reg[44]</td>";//fosforo
                        echo "<td>$reg[45]</td>";//potasio
                        echo "<td>$reg[46]</td>";//elementos menores
                        echo "<td>$reg[47]</td>";//elemetos intercambio
                        echo "<td>$reg[48]</td>";//materia organica
                        echo "<td>$reg[49]</td>";//actvidad microbiana
                        echo "<td>$reg[50]</td>";//masa microbiana
                        echo "</tr>";
                        $Num_Fila++;                    
                      }
                          echo "</tbody>";
                          echo "</table>";
                          echo "</div>";
        echo '
          <tr>
            <td colspan="16" class="td-iconos">
            <center>                        
              <a href="descarga_consulta/cultivo/exc_CultivoUnidades.php" target="_blank">
                <img src="img/Excel.png" title="Exportar Excel" class="img-form">
              </a>
            </center>
            </td>
          </tr>';
        }
      }
    ?>
</div>
<div id="foot">
 <?php
 include 'include/piepagina.php'
 ?>
</div>
<div class="fin">
  Sena la granja.
  Jhayron Alexander Carreño Malagón.
</div>
</div>
</body>
</html>