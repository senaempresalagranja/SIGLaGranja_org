<!-- 
  Proyecto: Sistema de Informacion Georeferenciado del Centro Agropecuario "La Granja". 
  Nombre del proyecto:  SIGLaGranja. 
  Desarrolladores: Tecnologo en Análisis y Desarrollo de Sistemas de Información "ADSI". 
  Numero de Ficha: 798585. 
  Descripcion del Proyecto: Software que permita la Georeferenciación de Centro Agropecuario "La Granja" SENA Espinal - Tolima. 
  Año de Desarrollo: 2014-2015.-->
<!-- Descripcion de la pagina en formato de HTML5. 
-->
<?php
error_reporting(E_ALL^E_NOTICE);
session_start();
if (isset($_SESSION['ADMINISTRADOR'])){}
else
{
  echo "<script type='text/javascript'>alert('Parece que su Sesion ha finalizado, por favor Inicie Sesion');location='../visitante/index.php?Acceso Denegado'</script>";
}
$_SESSION['CodUnidad']=$_REQUEST['ConsUnidades'];
$_SESSION['CodArea']=$_REQUEST['ConsAreas'];
$_SESSION['NombreComunPla']=$_REQUEST['NomComPlaga'];
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
function habilitaPlaga(form)
{ 
  document.getElementById("Plaga3").disabled=true;
  document.getElementById("Plaga3").style.background = "#EDE9E9";

  document.getElementById("Plaga2").disabled=false;
  document.getElementById("Plaga2").style.background = "#FFF";

  document.getElementById("Plaga1").disabled=false;
  document.getElementById("Plaga1").style.background = "#FFF";
}
function deshabilitaPlaga(form)
{ 
  document.getElementById("Plaga2").disabled=true;
  document.getElementById("Plaga2").style.background = "#EDE9E9";

  document.getElementById("Plaga1").disabled=true;
  document.getElementById("Plaga1").style.background = "#EDE9E9";

  document.getElementById("Plaga3").disabled=false;
  document.getElementById("Plaga3").style.background = "#FFF";
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
            <br><p class='tit-form'><b>CONSULTAR PLAGA</b></p><br>
          </td>
        </tr>
        <tr>
          <center>
          <td colspan="2">
            <input type='radio' name='Poste' id='Poste' onclick='habilitaPlaga(this.form)'> <em>CRITERIO DE BÚSQUEDA POR FILTRO</em></input>        
          </td>
          <td colspan="2">
            <input type='radio' name='Poste' id='Poste' onclick='deshabilitaPlaga(this.form)'> <em>CRITERIO DE BÚSQUEDA POR NOMBRE COMÚN</em></input>
          </td>
          </center>
        </tr>
        <tr height="20px"></tr>

   <form action="con_plaga.php" name="ConArea">
        <tr>        
          <td>AREA:</td>
          <td>
            <input type="hidden" name="CodigoOculto" value="1">                    
            <select name="ConsAreas" id="Plaga1" class="select-form" onchange="submit();">
                <?php
                  include 'conexion.php';

                  $Areas=$_REQUEST['ConsAreas'];
                  $Unidades=$_REQUEST['ConsUnidades'];

                  if ($Areas) 
                  {
                    if ($Areas == "All") 
                    {                      
                      echo "<option selected disabled>TODAS</option>";
                      $ConBDArea2= pg_query($con, "SELECT * from area where areidcodigo <> '$Areas'");
                      while ($RegistrosAreas=pg_fetch_array($ConBDArea2)) 
                      {
                        $IdArea=$RegistrosAreas[0];
                        $NomArea=$RegistrosAreas[2]; 
                        echo "<option value='$IdArea'>$NomArea</option>";
                      }
                    }
                    else
                    {
                      $ConBDArea= pg_query($con, "SELECT * from area where areid = '$Areas'");
                      while ($RegistrosAreas=pg_fetch_array($ConBDArea)) 
                      {
                        $NomArea=$RegistrosAreas[2];
                        echo "<option selected disabled>$NomArea</option>";
                      }
                      echo "<option value='All'>TODAS</option>";
                      $ConBDArea2= pg_query($con, "SELECT * from area where areid <> '$Areas'");
                      while ($RegistrosAreas=pg_fetch_array($ConBDArea2)) 
                      {
                        $IdArea=$RegistrosAreas[0];
                        $NomArea=$RegistrosAreas[2];
                        echo "<option value='$IdArea'>$NomArea</option>";
                      }
                    }                    
                  }
                  else
                  {
                    if ($Unidades) 
                    {
                      $CodUniArea=$_SESSION['uniarea'];
                      if ($Unidades == "All") 
                      {
                        $ConBDArea= pg_query($con, "SELECT * from area where areid = '$CodUniArea'");
                        while ($RegistrosAreas=pg_fetch_array($ConBDArea)) 
                        {
                          $NomArea=$RegistrosAreas[2];
                          echo "<option selected disabled>$NomArea</option>";
                        }
                        echo "<option value='All'>TODAS</option>";
                        $ConBDArea2= pg_query($con, "SELECT * from area where areid <> '$CodUniArea'");
                        while ($RegistrosAreas=pg_fetch_array($ConBDArea2)) 
                        {
                          $IdArea=$RegistrosAreas[0];
                          $NomArea=$RegistrosAreas[2];
                          echo "<option value='$IdArea'>$NomArea</option>";
                        }                        
                      }
                      elseif ($Unidades <> "All") 
                      {
                        $ConBDUnidad=pg_query($con, "SELECT * from unidad where uniid = '$Unidades'");
                        while ($RegistrosUnidades=pg_fetch_array($ConBDUnidad)) 
                        {
                          $CodArea=$RegistrosUnidades[1];
                          $CodUnidad=$RegistrosUnidades[0];
                        }
                        $ConBDArea= pg_query($con, "SELECT * from area where areid = '$CodArea'");
                        while ($RegistrosAreas=pg_fetch_array($ConBDArea)) 
                        {
                          $NomArea=$RegistrosAreas[2];
                          echo "<option selected disabled>$NomArea</option>";
                        }
                          echo "<option value='All'>TODAS</option>";
                        $ConBDArea= pg_query($con, "SELECT * from area where areid <> '$CodArea'");
                        while ($RegistrosAreas=pg_fetch_array($ConBDArea)) 
                        {
                          $IdArea=$RegistrosAreas[0];
                          $NomArea=$RegistrosAreas[2];
                          echo "<option value='$IdArea'>$NomArea</option>";
                        }
                      }
                    }
                  else
                  {
                    echo "<option selected disabled>SELECCIONE</option>
                          <option value='All'>TODAS</option>";
                    $ConBDArea= pg_query($con, "SELECT * from area");
                    while ($RegistrosAreas=pg_fetch_array($ConBDArea)) 
                    {
                      $IdArea=$RegistrosAreas[1];
                      $NomArea=$RegistrosAreas[2];
                      echo "<option value='$IdArea'>$NomArea</option>";
                    }
                  }
                }
              ?>
            </select>
          </td>
        </form>
        <form action="con_plaga.php" name="ConNomComunPlaga">
          <td>NOMBRE COMUN:</td>
          <td>
            <input type="hidden" name="CodigoOculto" value="2">
            <input type="text" name="NomComPlaga" id="Plaga3" class="inp-form" value='<?php $NomComunPlaga=$_REQUEST["NomComPlaga"]; if (isset($NomComunPlaga)) {echo "$NomComunPlaga"; } ?>' placeholder="EJ: NUCHE" onkeypress="return validar_texto(event);" onkeyup="this.value=this.value.toUpperCase()" onkeydown="espacios(this)" onchange="submit();">    
          </td>      
       </form>   
      <tr>
      <form action="con_plaga.php" name="ConUnidad">
        <td>UNIDAD:</td>
        <td>
          <input type="hidden" name="CodigoOculto" value="3">
          <select name="ConsUnidades" id="Plaga2" class="select-form" onchange="submit();">
            <?php 
            error_reporting(E_ALL ^ E_NOTICE);
            include 'conexion.php';
            $Areas=$_REQUEST['ConsAreas'];
            $Unidades=$_REQUEST['ConsUnidades'];

            if ($Areas) 
            {
              if ($Areas == "All")  
              {

              }
              else
              {
                echo "<option selected disabled>SELECCIONE</option>";
                echo "<option value='All'>TODAS</option>";
                $ConsultaUnidad= pg_query($con, "SELECT * from unidad where uniarea = '$Areas'");
                while ($RegUnid=pg_fetch_array($ConsultaUnidad)) 
                {
                  $IdUnidad=$RegUnid[0];
                  $NomUnidad=$RegUnid[2];
                  echo "<option value='$IdUnidad'>$NomUnidad</option>";
                }
                  $_SESSION['area']=($Areas);
                }
              }
            else
            {
              if ($Unidades) 
              {
                $_SESSION['uniarea']=$_SESSION['area'];
                $Area=($_SESSION['uniarea']);
                if ($Unidades == "All")
                {
                  echo "<option selected disabled>TODAS</option>";
                  $ConBDUnidad= pg_query($con, "SELECT * from unidad where uniarea = '$Area'");
                  while ($RegistrosUnidades=pg_fetch_array($ConBDUnidad)) 
                  {
                    $IdUnidad=$RegistrosUnidades[0];
                    $NomUnidad=$RegistrosUnidades[2];
                    echo "<option value='$IdUnidad'>$NomUnidad</option>";
                  }
                }
                else
                {
                  $CodUniArea=$_SESSION[uniarea];
                  $ConBDUnidad= pg_query($con, "SELECT * from unidad where uniid = '$Unidades'");
                  while ($RegistrosUnidades=pg_fetch_array($ConBDUnidad)) 
                  {
                    $NomUnidad=$RegistrosUnidades[2];
                    echo "<option selected disabled>$NomUnidad</option>";
                  }
                  echo "<option value='All'>TODAS</option>";
                  $ConBDUnidad2= pg_query($con, "SELECT * from unidad where uniid <> '$Unidades' AND uniarea = '$CodUniArea'");
                  while ($RegistrosUnidades2=pg_fetch_array($ConBDUnidad2)) 
                  {
                    $IdUnidad2=$RegistrosUnidades2[0];
                    $NomUnidad2=$RegistrosUnidades2[2];
                    echo "<option value='$IdUnidad2'>$NomUnidad2</option>";
                  }
                  $_SESSION['unidad']=($Unidades);
                }
              }                
            }
            ?>            
          </select>
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
    $NomComunPlaga=$_REQUEST["NomComPlaga"];
    $Tip_Hidden=$_REQUEST['CodigoOculto'];
    $Areas=$_REQUEST["ConsAreas"];
    $Unidades=$_REQUEST["ConsUnidades"];
    
      if ($Tip_Hidden == 1) 
      {
        if ($Areas == "All") 
        {
          $consulta = pg_query($con,"  SELECT 
                    area.arenombre,
                    unidad.uninombre,
                    plaga.plaidcodigo,
                    plaga.planomcomun,
                    plaga.planomcienti,
                    plaga.plaorigen,
                    plaga.plalugarorig,
                    plaga.platipagecau,
                    plaga.platratamien, 
                    especie.esptipespeci,
                    especie.espnomcomun,
                    especie.espnomcienti                
                  FROM plaga_especie
                    INNER JOIN especie ON especie.espid = plaga_especie.pesespecie
                    INNER JOIN plaga ON plaga.plaid = plaga_especie.pesplaga
                    INNER JOIN unidad ON unidad.uniid = especie.espunidad
                    INNER JOIN area ON area.areid = unidad.uniarea");
                  echo <<<EOT
                    <div class="GrillaConsulta">
                      <table>
                        <thead>
                          <tr>
                            <th>AREA</th>
                            <th>UNIDAD</th>
                            <th>CODIGO</th>
                            <th>NOMBRE COMUN</th> 
                            <th>NOMBRE CIENTIFICO</th>  
                            <th>ORIGEN</th>
                            <th>LUGAR ORIGEN</th>  
                            <th>AGENTE CAUSAL</th>
                            <th>TRATAMIENTO</th>
                            <th>TIPO ESPECIE</th>  
                            <th>NOMBRE COMUN</th>  
                            <th>NOMBRE CIENTIFICO</th>
                          </tr>
                        </thead>
                        <tbody>
                                  
EOT;
            $Num_Fila=0;
            while ($reg= pg_fetch_array($consulta)) 
                      {                    
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
                        echo "<td>$reg[0]</td>";
                        echo "<td>$reg[1]</td>";
                        echo "<td>$reg[2]</td>";
                        echo "<td>$reg[3]</td>";
                        echo "<td>$reg[4]</td>";
                        echo "<td>$reg[5]</td>";
                        echo "<td>$reg[6]</td>";
                        echo "<td>$reg[7]</td>";
                        echo "<td>$reg[8]</td>";
                        echo "<td>$reg[9]</td>";
                        echo "<td>$reg[10]</td>";
                        echo "<td>$reg[11]</td>";
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
              <a href="descarga_consulta/plaga/exc_PlagaArea.php" target="_blank">
                <img src="img/Excel.png" title="Exportar Excel" class="img-form">
              </a>
            </center>
            </td>
          </tr>';
        }
      }
      elseif ($Tip_Hidden == 2) 
      {
        $consulta= pg_query($con,"  SELECT 
                    area.arenombre,
                    unidad.uninombre,
                    plaga.plaidcodigo,
                    plaga.planomcomun,
                    plaga.planomcienti,
                    plaga.plaorigen,
                    plaga.plalugarorig,
                    plaga.platipagecau,
                    plaga.platratamien, 
                    especie.esptipespeci,
                    especie.espnomcomun,
                    especie.espnomcienti                
                  FROM plaga_especie
                    INNER JOIN especie ON especie.espid = plaga_especie.pesespecie
                    INNER JOIN plaga ON plaga.plaid = plaga_especie.pesplaga
                    INNER JOIN unidad ON unidad.uniid = especie.espunidad
                    INNER JOIN area ON area.areid = unidad.uniarea WHERE planomcomun LIKE '%$NomComunPlaga%' order by planomcomun asc");
        echo <<<EOT
                    <div class="GrillaConsulta">
                      <table>
                        <thead>
                          <tr>
                            <th>NOMBRE COMUN</th>
                            <th>AREA</th>
                            <th>UNIDAD</th>
                            <th>CODIGO</th>                             
                            <th>NOMBRE CIENTIFICO</th>  
                            <th>ORIGEN</th>
                            <th>LUGAR ORIGEN</th>  
                            <th>AGENTE CAUSAL</th>
                            <th>TRATAMIENTO</th>
                            <th>TIPO ESPECIE</th>  
                            <th>NOMBRE COMUN</th>  
                            <th>NOMBRE CIENTIFICO</th>
                          </tr>
                        </thead>
                        <tbody>
                                  
EOT;
            $Num_Fila=0;
            while ($reg= pg_fetch_array($consulta)) 
                      {                    
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
                        echo "<td>$reg[3]</td>";
                        echo "<td>$reg[0]</td>";
                        echo "<td>$reg[1]</td>";
                        echo "<td>$reg[2]</td>";                        
                        echo "<td>$reg[4]</td>";
                        echo "<td>$reg[5]</td>";
                        echo "<td>$reg[6]</td>";
                        echo "<td>$reg[7]</td>";
                        echo "<td>$reg[8]</td>";
                        echo "<td>$reg[9]</td>";
                        echo "<td>$reg[10]</td>";
                        echo "<td>$reg[11]</td>";
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
              <a href="descarga_consulta/plaga/exc_PlagaCodigo.php" target="_blank">
                <img src="img/Excel.png" title="Exportar Excel" class="img-form">
              </a>
            </center>
            </td>
          </tr>';
      }
                elseif ($Tip_Hidden == 3) 
                {                  
                  if ($Unidades == "All") 
                  {
                    $CodUniArea=$_SESSION['uniarea'];
                    $consulta = pg_query($con,"  SELECT 
                    area.arenombre,
                    unidad.uninombre,
                    plaga.plaidcodigo,
                    plaga.planomcomun,
                    plaga.planomcienti,
                    plaga.plaorigen,
                    plaga.plalugarorig,
                    plaga.platipagecau,
                    plaga.platratamien, 
                    especie.esptipespeci,
                    especie.espnomcomun,
                    especie.espnomcienti                
                  FROM plaga_especie
                    INNER JOIN especie ON especie.espid = plaga_especie.pesespecie
                    INNER JOIN plaga ON plaga.plaid = plaga_especie.pesplaga
                    INNER JOIN unidad ON unidad.uniid = especie.espunidad
                    INNER JOIN area ON area.areid = unidad.uniarea WHERE uniarea='$CodUniArea' order by uninombre asc");
                  echo <<<EOT
                    <div class="GrillaConsulta">
                      <table>
                        <thead>
                          <tr>
                            <th>UNIDAD</th>
                            <th>AREA</th>                            
                            <th>CODIGO</th>
                            <th>NOMBRE COMUN</th> 
                            <th>NOMBRE CIENTIFICO</th>  
                            <th>ORIGEN</th>
                            <th>LUGAR ORIGEN</th>  
                            <th>AGENTE CAUSAL</th>
                            <th>TRATAMIENTO</th>
                            <th>TIPO ESPECIE</th>  
                            <th>NOMBRE COMUN</th>  
                            <th>NOMBRE CIENTIFICO</th>
                          </tr>
                        </thead>
                        <tbody>
                                  
EOT;
            $Num_Fila=0;
            while ($reg= pg_fetch_array($consulta)) 
                      {                    
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
                        echo "<td>$reg[1]</td>";
                        echo "<td>$reg[0]</td>";
                        echo "<td>$reg[2]</td>";
                        echo "<td>$reg[3]</td>";
                        echo "<td>$reg[4]</td>";
                        echo "<td>$reg[5]</td>";
                        echo "<td>$reg[6]</td>";
                        echo "<td>$reg[7]</td>";
                        echo "<td>$reg[8]</td>";
                        echo "<td>$reg[9]</td>";
                        echo "<td>$reg[10]</td>";
                        echo "<td>$reg[11]</td>";
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
              <a href="descarga_consulta/plaga/exc_PlagaUnidades.php" target="_blank">
                <img src="img/Excel.png" title="Exportar Excel" class="img-form">
              </a>
            </center>
            </td>
          </tr>';
        }
      else 
      {
        $CodUniArea=$_SESSION['uniarea'];
                    $consulta = pg_query("SELECT 
                    area.arenombre,
                    unidad.uninombre,
                    plaga.plaidcodigo,
                    plaga.planomcomun,
                    plaga.planomcienti,
                    plaga.plaorigen,
                    plaga.plalugarorig,
                    plaga.platipagecau,
                    plaga.platratamien, 
                    especie.esptipespeci,
                    especie.espnomcomun,
                    especie.espnomcienti                
                  FROM plaga_especie
                    INNER JOIN especie ON especie.espid = plaga_especie.pesespecie
                    INNER JOIN plaga ON plaga.plaid = plaga_especie.pesplaga
                    INNER JOIN unidad ON unidad.uniid = especie.espunidad
                    INNER JOIN area ON area.areid = unidad.uniarea WHERE espunidad='$Unidades' order by uninombre asc");
                  echo <<<EOT
                    <div class="GrillaConsulta">
                      <table>
                        <thead>
                          <tr>
                            <th>UNIDAD</th>
                            <th>AREA</th>                            
                            <th>CODIGO</th>
                            <th>NOMBRE COMUN</th> 
                            <th>NOMBRE CIENTIFICO</th>  
                            <th>ORIGEN</th>
                            <th>LUGAR ORIGEN</th>  
                            <th>AGENTE CAUSAL</th>
                            <th>TRATAMIENTO</th>
                            <th>TIPO ESPECIE</th>  
                            <th>NOMBRE COMUN</th>  
                            <th>NOMBRE CIENTIFICO</th>
                          </tr>
                        </thead>
                        <tbody>                                  
EOT;
            $Num_Fila=0;
            while ($reg= pg_fetch_array($consulta)) 
                      {                    
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
                        echo "<td>$reg[1]</td>";
                        echo "<td>$reg[0]</td>";
                        echo "<td>$reg[2]</td>";
                        echo "<td>$reg[3]</td>";
                        echo "<td>$reg[4]</td>";
                        echo "<td>$reg[5]</td>";
                        echo "<td>$reg[6]</td>";
                        echo "<td>$reg[7]</td>";
                        echo "<td>$reg[8]</td>";
                        echo "<td>$reg[9]</td>";
                        echo "<td>$reg[10]</td>";
                        echo "<td>$reg[11]</td>";
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
              <a href="descarga_consulta/plaga/exc_PlagaUnidad.php" target="_blank">
                <img src="img/Excel.png" title="Exportar Excel" class="img-form">
              </a>
            </center>
            </td>
          </tr>';
        }
      }
?>
</center>
<div id="foot">
 <?php
 include 'include/piepagina.php'
 ?>
</div>
<div class="fin">
 Sena la granja
</div>
</div>
</body>
</html>