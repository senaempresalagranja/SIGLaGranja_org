<!-- 
  Proyecto: Sistema de Informacion Georeferenciado del Centro Agropecuario "La Granja". 
  Nombre del proyecto:  SIGLaGranja. 
  Desarrolladores: Tecnologo en Análisis y Desarrollo de Sistemas de Información "ADSI". 
  Numero de Ficha: 798585. 
  Descripcion del Proyecto: Software que permita la Georeferenciación de Centro Agropecuario "La Granja" SENA Espinal - Tolima. 
  -->
<?php
session_start();
if (isset($_SESSION['USUARIO ADMIN'])){}
else
{
  echo "<script type='text/javascript'>alert('Parece que su Sesion ha finalizado, por favor Inicie Sesion');location='../visitante/index.php?Acceso Denegado'</script>";
}
?>

<!DOCTYPE html>
<html lang="es">
<?php include 'include/header.php'; ?>
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
        <table width="100%" class="table">
            <?php 
              error_reporting(E_ALL ^ E_NOTICE);
              if($_REQUEST['condicion']==1)
              {
                include 'conexion.php';
               
                $res=pg_query($con, "SELECT * FROM enfermedad_especie WHERE eeskidcodigo='$_REQUEST[conenfesp]'");
                while ($reg=pg_fetch_array($res))
                {
                  $arreglo['enfermedad_especie']= array('eesid' =>$reg[0]);
                  $eesid=$reg[0];
                  $eeskidcodigo=$reg[1];
                  $eesenfermeda=$reg[2];                 
                  $eesespecie=$reg[3];
                  $eesdescripci=$reg[4];
                }
              }
            ?>
          <tr>
            <td colspan="4"><br>
              <?php
              if (isset($arreglo))
              {
                echo "<p class='tit-form'><b>ACTUALIZAR ENFERMEDAD ESPECIE<b><br><p><br>";
              }
              else
              {
                echo "<p class='tit-form'><b>REGISTRAR  ENFERMEDAD ESPECIE<b><br><p><br>";
              }
              ?>
            </td>
          </tr>         
              <?php
                if (isset($arreglo))
                {
                  echo "<tr id='consultarr'>
                          <td>CONSULTAR:</td>
                          <td colspan='4'>
                            <input type='text' name='conenfesp' id='conenfesp' class='inp-form' placeholder='EJ: 1 (CODIGO)' maxlength='4' onkeypress='return ValNumero(this)' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
                            <input type='hidden' name='condicion' value='1'>
                            <input type='image' src='img/Consultar.png' width='3%' onclick='replace(this.form.name)' title='consultar'>
                          </td>
                        </tr>";
                }
                else
                {
                  echo "<tr id='consultar'>
                          <td>CONSULTAR:</td>
                          <td colspan='4'>
                            <input type='text' name='conenfesp' id='conenfesp' class='inp-form' placeholder='EJ: 1 (CODIGO)' maxlength='4' onkeypress='return ValNumero(this)' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
                            <input type='hidden' name='condicion' value='1'>
                            <input type='image' src='img/Consultar.png' width='3%' onclick='replace(this.form.name)' title='consultar'>
                          </td>
                        </tr>";
                }
              ?>
        </form>
          
          <?php 
            if (isset($arreglo)) 
            {
              echo "<form name='formulario' action='actualizar/act_enfermedadespecie.php' onsubmit='return ValidarFormEnferEspec();'>";
            }
            else
            {
              echo "<form name='formulario' action='registrar/reg_enfermedadespecie.php' onsubmit='return ValidarFormEnferEspec();'>";
            }
          ?>
        <tr>
          <td>
            <input type="hidden" value="<?php if (isset($eesid)) {echo"$eesid";}?>" name="eesid" id="eesid">
          </td>
        </tr>
        <tr>
          <td>ENFERMEDAD:</td>
          <td>
            <select name="eesenfermeda" id="eesenfermeda" class="select-form" onblur="SelectVacio(this)" required/>
              <?php
                if (isset($arreglo)) 
                {
                  $res3=pg_query($con, "SELECT * FROM enfermedad WHERE enfid='$eesenfermeda'");
                  while ($row3=pg_fetch_array($res3)) 
                  {
                    $NomEnf=$row3[1];
                    echo "<option value='$eesenfermeda' selected>$NomEnf</option>";
                  }
                }
                else
                {
                  echo "<option selected disabled></option>";
                }
                include 'conexion.php';
                $res1=pg_query($con, "SELECT * FROM enfermedad order by enfnomcomun ASC");
                while ($row1=pg_fetch_array($res1))
                {
                  $CodEnf=$row1[0];
                  $NomEnf=$row1[1];
                  echo "<option value='$CodEnf'>$NomEnf</option>";
                }
              ?>
            </select>
          </td>
          <td>ESPECIE:</td>
          <td>
            <select name="eesespecie" id="eesespecie" class="select-form" onblur="SelectVacio(this)" required/>
              <?php
                if (isset($arreglo)) 
                {
                  $res3=pg_query($con, "SELECT * FROM especie WHERE espid='$eesespecie'");
                  while ($row3=pg_fetch_array($res3)) 
                  {
                    $NomEsp=$row3[3];
                    echo "<option value='$eesespecie' selected>$NomEsp</option>";
                  }
                }
                else
                {
                  echo "<option selected disabled></option>";
                }
                include 'conexion.php';
                $res1=pg_query($con, "SELECT * FROM especie order by espnomcomun ASC");
                while ($row1=pg_fetch_array($res1))
                {
                  $CodEsp=$row1[0];
                  $NomEsp=$row1[3];
                  echo "<option value='$CodEsp'>$NomEsp</option>";
                }
              ?>
            </select>
          </td>
        </tr>
        <tr>
          <td>DESCRIPCION:</td>
          <td colspan="4">
            <textarea type="text" name="eesdescripci" id="eesdescripci" class="des-form" placeholder="ESCRIBA LAS CARACTERISTICAS LA ENFERMEDAD Y LA ESPECIE" onblur="revisard(this)" onkeyup="this.value=this.value.toUpperCase()" onkeypress="espacios(this)" required/><?php if (isset($eesdescripci)) {echo "$eesdescripci ";} ?></textarea>
          </td>
        </tr> 
          <tr>
            <td colspan="5"><br>
            <center>
              <?php 
                if (isset($arreglo)) 
                  {
                    echo "<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)' title='Actualizar Registro'>
                    <a href='frm_enfermedadespecie.php'>
                    <img src='img/Nuevo.png' class='img-form' title='Nuevo Registro'>
                    </a>";
                  }
                else
                  {
                    echo "<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)'' title='Guardar Registro'>";
                  }
              ?>
              <img src="img/Consultar.png" class="img-form" title="Consultar" id="botonconsulta">
              <img src="img/Grilla.png" class="img-form" title="Ver Grilla" id="boton">
              <a href="descarga_pdf/pdf_enfermedadespecie.php" target="_blank">
                <img src="img/Pdf.png" class="img-form" title="ExportarPDF">
              </a> 
              <a href="descarga_excel/exc_enfermedadespecie.php" target="_blank">
                <img src="img/Excel.png" class="img-form" title="ExportarExcel">
              </a>
              </center>
            </td>
          </tr>
        </table>         
      </form>
        </div>
        <div id="grilla">
          <?php include 'grillas/gri_enfermedadespecie/gri_enfermedadespecie.php'; ?>      
        </div>
        <div id="foot">
        <?php include 'include/piepagina.php' ?>
        </div>
        <div class="fin">
          Sena la granja
        </div>
      </div>
    </body>
  </html>