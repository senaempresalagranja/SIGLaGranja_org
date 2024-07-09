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
            $res=pg_query($con, "SELECT * FROM redelectrica WHERE eleid='$_REQUEST[coneleid]'");
            while($reg=pg_fetch_array($res))
            {
              $arreglo['redelectrica']=array('eleid'=>$reg[0]);
              $eleid=utf8_decode($reg [0]);
              $eleconstrucc=utf8_decode($reg [1]);
              $elenumlampar=utf8_decode($reg [2]);
              $elenumtomaco=utf8_decode($reg [3]);
              $elenuminterr=utf8_decode($reg [4]);
              $eletipventil=utf8_decode($reg [5]);
              $elecantidad=utf8_decode($reg [6]);
              $tomar=utf8_decode($reg [8]);
              $tomanr=utf8_decode($reg [9]);

            }
          }
        ?>
        <tr>
            <td colspan="6"><br>
              <?php
                if (isset($arreglo))
                {
                  echo "<p class='tit-form'><b>ACTUALIZAR RED ELECTRICA<b><br><p><br>";
                }
                else
                {
                   echo "<p class='tit-form'><b>REGISTRAR RED ELECTRICA<b><br><p><br>";
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
                              <input type='text' name='coneleid' id='coneleid' class='inp-form' placeholder='EJ: 1 (CODIGO)' maxlength='3' onkeypress='return ValNumero(this)' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
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
                              <input type='text' name='coneleid' id='coneleid' class='inp-form' placeholder='EJ: 1 (CODIGO)' maxlength='3' onkeypress='return ValNumero(this)' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
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
                 echo "<form name='formulario' action='actualizar/act_redelectrica.php' onsubmit='return ValidarFormRedElectrica();'>";
               }
               else
               {
                 echo "<form name='formulario' action='registrar/reg_redelectrica.php' onsubmit='return ValidarFormRedElectrica();'>";
               }
              ?>
          <tr>
            <td>
              <input type="hidden" value="<?php if (isset($eleid)) {echo "$eleid";} ?>" name="eleid" id="eleid">
            </td>
          </tr>
         </tr>
      <tr>
        <td>CONSTRUCCION:</td>
        <td>
          <select name="eleconstrucc" id="eleconstrucc" class="select-form" onblur="SelectVacio(this)" required/>
                <?php
                  if (isset($arreglo))
                  {
                    $res1=pg_query($con, "SELECT * FROM construccion WHERE conid='$eleconstrucc' ");
                    while($reg1=pg_fetch_array($res1))
                    {
                      $Nomconstruccion=$reg1[3];
                      echo "<option value='$eleconstrucc' selected>$Nomconstruccion</option>";
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
       
          </td>
          <td width="10px"></td>
          <td>N° TOMA TRIFASICO:</td>
          <td>
          
              <input type="text" name="elenumtomaco" id="elenumtomaco" maxlength="2" value="<?php if (isset($elenumtomaco)) {echo "$elenumtomaco";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
          </td>
         
      </tr>

          <td>N° LAMPARAS:</td>
          <td> 
              <input type="text" name="elenumlampar" id="elenumlampar" maxlength="2" value="<?php if (isset($elenumlampar)) {echo "$elenumlampar";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
          </td>
          <td></td>
          <td>N° TOMA REGULAR:</td>
          <td> 
              <input type="text" name="tomar" id="tomar" maxlength="2" value="<?php if (isset($tomar)) {echo "$tomar";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
          </td>
        </tr>
        <tr>
          <td>N° INTERRUPTORES:</td>
          <td> 
              <input type="text" name="elenuminterr" id="elenuminterr" maxlength="2" value="<?php if (isset($elenuminterr)) {echo "$elenuminterr";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
          </td>
          <td></td>
          <td>N° TOMA NO REGULAR:</td>
          <td> 
              <input type="text" name="tomanr" id="tomanr" maxlength="2" value="<?php if (isset($tomanr)) {echo "$tomanr";} ?>" class="inp-ent" placeholder="EJ: 18" onkeypress="return permite(event,'num')" onblur="revisarn(this)" required/>
          </td>


      </tr>
      <tr>
        <td>TIPO VENTILACION:</td> 
        <td>
            <select name="eletipventil" id="eletipventil" class="select-form"  onchange="habilitarCantVentilacion(this.value);" onblur="SelectVacio(this)" required/>
              <?php 
                if (isset($arreglo) && $eletipventil == 'AIRE ACONDICIONADO') 
                {
                  echo "<option value='AIRE ACONDICIONADO' selected>AIRE ACONDICIONADO</option>";
                  echo "<option value='VENTILADORES'>VENTILADORES</option>";
                  echo "<option value='N/A'>NO APLICA</option>";
                }
                elseif (isset($arreglo) && $eletipventil == 'VENTILADORES') 
                {
                  echo "<option value='VENTILADORES' selected>VENTILADORES</option>";
                  echo "<option value='AIRE ACONDICIONADO'>AIRE ACONDICIONADO</option>";
                  echo "<option value='N/A'>NO APLICA</option>";
                }
                elseif (isset($arreglo) && $eletipventil == 'N/A') 
                {
                echo "<option value='N/A' selected>NO APLICA</option>";
                  echo "<option value='AIRE ACONDICIONADO'>AIRE ACONDICIONADO</option>";
                  echo "<option value='VENTILADORES'>VENTILADORES</option>";
                }
                else
                {
                  echo "<option selected disabled></option>";
                  echo "<option value='AIRE ACONDICIONADO'>AIRE ACONDICIONADO</option>";
                  echo "<option value='VENTILADORES'>VENTILADORES</option>";
                  echo "<option value='N/A'>NO APLICA</option>";
                }
              ?>             
            </select>
          </td>
          <td width="40px"></td>
          <td>CANTIDAD VENTILACION:</td>
          <td>
            <input type="hidden" name="elecantidad1" value="0">
            <?php 
              if (isset($arreglo)) 
              {
                echo "<input type='text' name='elecantidad' id='elecantidad' maxlength='2' value='$elecantidad' class='inp-ent' placeholder='EJ: 18' onkeypress=\"return permite(event,'num')\" onblur='revisarn(this)' required/>";
              }
              else
              {
                echo "<input type='text' style='background-color: #EDE9E9' name='elecantidad' id='elecantidad' maxlength='2' value='$elecantidad' class='inp-ent' placeholder='EJ: 18' onkeypress=\"return permite(event,'num')\" onblur='revisarn(this)' disabled required/>";
              }

             ?>            
          </td>
          
      </tr>
      <tr>
       <td colspan="6"><br>
              <center>
                <?php
                if (isset($arreglo)) 
                {
                  echo "<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)'' title='Actualizar Registro'>
                        <a href='frm_redelectrica.php'>
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
                <a href="descarga_pdf/pdf_redelectrica.php" target="_blank">
                  <img src="img/pdf.png" title="Exportar PDF" class="img-form">
                </a>           
                <a href="descarga_excel/exc_redelectrica.php" target="_blank">
                  <img src="img/Excel.png" title="Exportar Excel" class="img-form">
                </a>              
            </td>
              </center>
          </tr>
        </table>
        </form>
      </div>
      <div id="grilla">
        <?php include 'grillas/gri_redelectrica/gri_redelectrica.php';?>
      </div>
      <div id="foot">
        <?php include 'include/piepagina.php';?>
      </div>
      <div class="fin">Luis Fernando Chamorro Rodriguez</div>
    </div>
  </body>
</html>
