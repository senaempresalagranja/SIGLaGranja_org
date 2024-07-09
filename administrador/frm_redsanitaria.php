<!-- 
  Proyecto: Sistema de Informacion Georeferenciado del Centro Agropecuario "La Granja". 
  Nombre del proyecto:  SIGLaGranja. 
  Desarrolladores: Tecnologo en Análisis y Desarrollo de Sistemas de Información "ADSI". 
  Numero de Ficha: 798585. 
  Descripcion del Proyecto: Software que permita la Georeferenciación de Centro Agropecuario "La Granja" SENA Espinal - Tolima. 
  Año de Desarrollo: 2014-2015.-->
<!-- Descripcion de la pagina en formato de HTML5. a
-->
<?php
session_start();
if (isset($_SESSION['ADMINISTRADOR'])){}
else
{
  echo "<script type='text/javascript'>alert('Parece que su Sesion ha finalizado, por favor Inicie Sesion');location='../visitante/index.php?Acceso Denegado'</script>";
}
?>

<!DOCTYPE html>
<html lang="es">
<?php  include 'include/header.php'; ?>
  <body>
    <div id="section">
      <div id="banner">
        <?php include 'include/banner.php'; ?>
      </div>
      <div id="nav">
        <?php include 'include/menu.php'; ?>
      </div>
    <div id="form">
      <form name="form1" id="formulario">
        <table whidt="100%" class="table">
        <?php
          error_reporting(E_ALL ^ E_NOTICE);
          if($_REQUEST['condicion']==1)
          {
            include 'conexion.php';
            $res=pg_query($con, "SELECT * FROM redsanitaria WHERE rsaid='$_REQUEST[conrsaid]'");
            while($reg=pg_fetch_array($res))
            {
              $arreglo['redsanitaria']=array('rsaid'=>$reg[0]);
              $rsaid=utf8_decode($reg [0]);
              $rsaconstrucc=utf8_decode($reg [1]);
              $rsannumbater=utf8_decode($reg [2]);
              $rsanumducha=utf8_decode($reg [3]);
              $rsanumlavama=utf8_decode($reg [4]);
              $sannumgrifos=utf8_decode($reg [5]);
              $sannumsifon=utf8_decode($reg [6]);
              $sanfecha=utf8_decode($reg [7]);
            }
          }
        ?>
        <tr>
            <td colspan="6"><br>
              <?php
                if (isset($arreglo))
                {
                  echo "<p class='tit-form'><b>ACTUALIZAR RED SANITARIA<b><br><p><br>";
                }
                else
                {
                   echo "<p class='tit-form'><b>REGISTRAR RED SANITARIA<b><br><p><br>";
                }
              ?>              
            </td>
          </tr>
              <?php
                  if (isset($arreglo))
                  {
                    echo "<tr id='consultarr'>
                            <td>CONSULTAR:</td>
                            <td colspan='3'>
                              <input type='text' name='conrsaid' id='conrsaid' class='inp-form' placeholder='EJ: 1 (CODIGO)' maxlength='3' onkeypress='return ValNumero(this)' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
                              <input type='hidden' name='condicion' value='1'>
                              <input type='image' src='img/Consultar.png' width='4%' onclick='replace(this.form.name)' title='consultar'>
                            </td>
                          </tr>";
                  }
                  else
                  {
                    echo "<tr id='consultar'>
                            <td>CONSULTAR:</td>
                            <td colspan='3'>
                              <input type='text' name='conrsaid' id='conrsaid' class='inp-form' placeholder='EJ: 1 (CODIGO)' maxlength='3' onkeypress='return ValNumero(this)' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
                              <input type='hidden' name='condicion' value='1'>
                              <input type='image' src='img/Consultar.png' width='4%' onclick='replace(this.form.name)' title='consultar'>
                            </td>
                          </tr>";
                  }
                ?>
      </form>
              <?php 
               if (isset($arreglo))
               {
                 echo "<form name='formulario' action='actualizar/act_redsanitaria.php' onsubmit='return ValidarFormRedSani();'>";
               }
               else
               {
                 echo "<form name='formulario' action='registrar/reg_redsanitaria.php' onsubmit='return ValidarFormRedSani();'>";
               }
              ?>
          <tr>
            <td>
              <input type="hidden" value="<?php if (isset($rsaid)) {echo "$rsaid";} ?>" name="rsaid" id="rsaid">
            </td>
          </tr>
          <tr>
            <td>CONSTRUCCION:</td>
            <td width="10px">
              <select name="rsaconstrucc" id="rsaconstrucc" class="select-form" onblur="SelectVacio(this)" required/>
                <?php
                  if (isset($arreglo))
                  {
                    $res1=pg_query($con, "SELECT * FROM construccion WHERE conid='$rsaconstrucc' ");
                    while($reg1=pg_fetch_array($res1))
                    {
                      $Nomconstruccion=$reg1[3];
                      echo "<option value='$rsaconstrucc' selected>$Nomconstruccion</option>";
                    }
                  }
                  else
                  {
                    echo "<option selected disabled></option>";
                  }
                  include 'conexion.php';
                  $res=pg_query($con, "SELECT * FROM construccion order by connombre ASC");
                  while ($reg=pg_fetch_array($res))
                  {
                    $conidcodigo=$reg[0];
                    $connombre=$reg[3];
                    echo "<option value='$conidcodigo'>$connombre</option>";
                  }
                ?>
              </select>
              <?php
                if (isset($arreglo)) 
                {
                  echo "<td id='Info' colspan='3'></td>";
                }
                else
                {
                  echo "<td id='Info' colspan='3'></td>";
                }
              ?>
            </td>
          </tr>
          <tr>
            <td>N° BATERIAS SANITARIAS:</td>
            <td> 
              <input type="text" name="rsannumbater" id="rsannumbater" maxlength="2" value="<?php if (isset($rsannumbater)) {echo "$rsannumbater";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
            </td>
            <td>N° DUCHAS:</td>
            <td> 
              <input type="text" name="rsanumducha" id="rsanumducha" maxlength="2" value="<?php if (isset($rsanumducha)) {echo "$rsanumducha";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
            </td>
          </tr>
          <tr>
            <td>N° LAVAMANOS:</td>
            <td> 
              <input type="text" name="rsanumlavama" id="rsanumlavama" maxlength="2" value="<?php if (isset($rsanumlavama)) {echo "$rsanumlavama";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
            </td>
            <td>N° GRIFOS:</td>
            <td> 
              <input type="text" name="sannumgrifos" id="sannumgrifos" maxlength="2" value="<?php if (isset($sannumgrifos)) {echo "$sannumgrifos";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
            </td>
          </tr>
          <tr>
            <td>N° SIFONES:</td>
            <td> 
              <input type="text" name="sannumsifon" id="sannumsifon" maxlength="2" value="<?php if (isset($sannumsifon)) {echo "$sannumsifon";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
            </td>
          </tr>
      <tr>
        <td colspan="6"><br>
              <center>
                <?php
                if (isset($arreglo)) 
                {
                  echo "<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)'' title='Actualizar Registro'>
                        <a href='frm_redsanitaria.php'>
                          <img src='img/Nuevo.png' class='img-form' title'Nuevo Registro'>
                        </a>";
                }
                else
                {
                  echo "<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)'' title='Guardar Registro'>";
                }
                ?>        
                <img src="img/Consultar.png" class="img-form" title="Consultar" id="botonconsulta">        
                <img src="img/Grilla.png" class="img-form" title="Ver Grilla" id="boton">         
                <a href="descarga_pdf/pdf_redsanitaria.php" target="_blank">
                  <img src="img/pdf.png" title="Exportar PDF" class="img-form">
                </a>           
                <a href="descarga_excel/exc_redsanitaria.php" target="_blank">
                  <img src="img/Excel.png" title="Exportar Excel" class="img-form">
                </a>              
            </td>
              </center>
          </tr>
        </table>
        </form>
      </div>
      <div id="grilla">
        <?php include 'grillas/gri_redsanitaria/gri_redsanitaria.php';?>
      </div>
      <div id="foot">
        <?php include 'include/piepagina.php';?>
      </div>
      <div class="fin">Luis Fernando Chamorro Rodriguez</div>
    </div>
  </body>
</html>