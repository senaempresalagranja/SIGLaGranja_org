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
  <?php include 'include/header.php';?>
    <body>
     <div id="section">
        <div id="banner">
          <?php include 'include/banner.php';?>
        </div>
         <div id="nav">
          <?php include 'include/menu.php';?>
        </div>
        <div id="form">
          <form name="form1" id="formulario">
            <table width="100%" class="table">
                
              <?php
                error_reporting(E_ALL ^ E_NOTICE);
                if ($_REQUEST['condicion']==1)
                
                 
                {
                  include 'conexion.php';
                  $res=pg_query($con,"SELECT * FROM unidad_cultivo WHERE lcuid='$_REQUEST[lcuid]'");
                  while ($reg=pg_fetch_array($res))
                  {
                    $arreglo['unidad_cultivo']=array('lcuid'=>$reg[0]);
                    $lcuid=utf8_decode($reg[0]);
                    $lculote=utf8_decode($reg[1]);
                    $lcucultivo=utf8_decode($reg[2]);
                    $lcuunidad=utf8_decode($reg[3]);
                    $lcufechsiemb=utf8_decode($reg[4]);
                    $lcufechcosec=utf8_decode($reg[5]);
                    $lcuproduesti=utf8_decode($reg[6]);
                    $lcuunimedest=utf8_decode($reg[7]);
                    $lcuprodureal=utf8_decode($reg[8]);
                    $lcuunimedrea=utf8_decode($reg[9]);
                    $lcucosproest=utf8_decode($reg[10]);
                    $lcuunimedies=utf8_decode($reg[11]);
                    $lcucosprorea=utf8_decode($reg[12]);
                    $lcuunimedire=utf8_decode($reg[13]);
                    $lcuresponsab=utf8_decode($reg[14]);
                    $lcucanal=utf8_decode($reg[16]);
                    $lcuplagenfer=utf8_decode($reg[17]);
                  }
                }
              ?>
              <tr>
                <td colspan="6"><br>
                  <?php
                    if (isset($arreglo))
                    {
                      echo "<p class='tit-form'><b>ACTUALIZAR LOTE CULTIVO<b><br><p><br>";
                    }
                    else
                    {
                      echo "<p class='tit-form'><b>REGISTRAR LOTE CULTIVO<b><br><p><br>";
                    }
                  ?>
                </td>
              </tr>
              <?php
                if (isset($arreglo))
                {
                  echo "<tr id='consultarr'>
                          <td width='22%'>CONSULTAR:</td>
                          <td width='28%' colspan='3'>
                            <input type='text' name='lcuid' id='lcuid' class='inp-form' placeholder='EJ: 1 (CODIGO)' maxlength='4' onkeypress='return ValNumero(this)' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
                            <input type='hidden' name='condicion' value='1'>
                            <input type='image' src='img/Consultar.png' width='4%' onclick='replace(this.form.name)' title='consultar'>
                          </td>
                        </tr>";
                }
                else
                {
                  echo "<tr id='consultar'>
                            <td width='22%'>CONSULTAR:</td>
                            <td width='28%' colspan='3'>
                              <input type='text' name='lcuid' id='lcuid' class='inp-form' placeholder='EJ: 1 (CODIGO)' maxlength='4' onkeypress='return ValNumero(this)' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
                              <input type='hidden' name='condicion' value='1'>
                              <input type='image' src='img/Consultar.png' width='4%' onclick='replace(this.form.name)'>
                            </td>
                          </tr>";
                }
              ?>
          </form>
              <?php
                if (isset($arreglo)) 
                {
                  echo "<form name='formulario' action='actualizar/act_lotecultivo.php' onsubmit='return ValidarFormLoteCultivo();'>";
                } 
                else
                {
                  echo "<form name='formulario' action='registrar/reg_lotecultivo.php' onsubmit='return ValidarFormLoteCultivo();'>";
                }
              ?>
              <tr>
                <td>
                  <input type="hidden" value="<?php if(isset($lcuid)){echo "$lcuid";}?>" name="lcuid" id="lcuid"/>
                </td>
              </tr>
              <tr>
                <td>LOTE:</td>
                <td colspan="2">
                  <select name="lculote" id="lculote" class="select-form" onblur="SelectVacio(this)" required/>
                    <?php
                      if (isset($arreglo)) 
                      {
                       $res1=pg_query($con, "SELECT * FROM lote WHERE lotid='$lculote'");
                        while ($row1=pg_fetch_array($res1)) 
                        {
                          $CodLot=$row1[1];
                          echo "<option value='$lculote' selected>$CodLot</option>";
                        }
                      }
                      else
                      {
                        echo "<option selected disabled></option>";
                      }
                      include 'conexion.php';
                      $res=pg_query($con, "SELECT * FROM lote order by lotidcodigo ASC");
                      while ($row=pg_fetch_array($res))
                      {
                        $CodLoteId=$row[0];
                        $CodLote=$row[1];
                        echo "<option value='$CodLoteId'>$CodLote</option>";
                      }
                    ?>
                  </select>
                </td>
                <td>CULTIVO:</td>
                <td colspan="2">
                  <select name="lcucultivo" id="lcucultivo" class="select-form" onblur="SelectVacio(this)" required/>
                    <?php
                      if (isset($arreglo)) 
                      {
                        $res3=pg_query($con, "SELECT * FROM cultivo WHERE culid='$lcucultivo'");
                        while ($row3=pg_fetch_array($res3)) 
                        {
                          $NomCultivo=$row3[2];
                          echo "<option value='$lcucultivo' selected>$NomCultivo</option>";
                        }
                      }
                      else
                      {
                        echo "<option selected disabled></option>";
                      }
                      include 'conexion.php';
                      $res1=pg_query($con, "SELECT * FROM cultivo order by culnomcomun ASC");
                      while ($row1=pg_fetch_array($res1))
                      {
                        $CodCultivo=$row1[0];
                        $NomComun=$row1[2];
                        echo "<option value='$CodCultivo'>$NomComun</option>";
                      }
                    ?>
                  </select> 
                </td>
              <tr>
                <td>UNIDAD:</td>
                <td colspan="2">
                  <select  name="lcuunidad" id="lcuunidad" class="select-form" onblur="SelectVacio(this)" required/>
                    <?php
                      if (isset($arreglo))
                      {
                        $res1=pg_query($con, "SELECT * FROM unidad WHERE uniid='$lcuunidad'");
                        while ($row=pg_fetch_array($res1))
                        {
                          $NomUnidad=utf8_decode($row[2]);
                        } 
                        echo "<option value='$lcuunidad' selected>$NomUnidad</option>";
                      }
                      else
                      {
                        echo "<option selected disabled></option>";
                      }
                      
                      $consulta=pg_query($con, "SELECT * FROM area WHERE arenombre='AGRICOLA'");
                      while ($registros=pg_fetch_array($consulta)) 
                      {
                        $CodArea=$registros[1];
                      }
                      
                      $res=pg_query($con, "SELECT * FROM unidad where uniarea ='$CodArea' order by uninombre ASC");
                      while($reg=pg_fetch_array($res))
                      {
                        $uniid=$reg[0];
                        $uninombre= $reg[2];
                        echo "<option value='$uniid'>$uninombre</option>";
                      }
                    ?>
                  </select>
                </td>
              </tr>
              <tr>
                <td>CANAL:</td>
                <td colspan="2">
                  <select name="lcucanal" id="lcucanal" class="select-form" onblur="SelectVacio(this)" required/>
                    <?php
                      if (isset($arreglo)) 
                      {
                        $res3=pg_query($con, "SELECT * FROM canal WHERE canid='$lcucanal'");
                        while ($row3=pg_fetch_array($res3)) 
                        {
                          $NomCanal=$row3[2];
                          echo "<option value='$lcucanal' selected>$NomCanal</option>";
                        }
                      }
                      else
                      {
                        echo "<option selected disabled></option>";
                      }
                      include 'conexion.php';
                      $res1=pg_query($con, "SELECT * FROM canal order by cannombre ASC");
                      while ($row1=pg_fetch_array($res1))
                      {
                        $CodCanal=$row1[0];
                        $NomCanal=$row1[2];
                        echo "<option value='$CodCanal'>$NomCanal</option>";
                      }
                    ?>
                  </select> 
                </td>
                <td>PLAGA/ENFERMEDAD:</td>
                <td>
                  <select name="lcuplagenfer" id="lcuplagenfer" class="select-form" onblur="SelectVacio(this)" required/>
                    <?php
                      if (isset($arreglo)) 
                      {
                        $res3=pg_query($con, "SELECT * FROM plagaenfermedad WHERE penid='$lcuplagenfer'");
                        while ($row3=pg_fetch_array($res3)) 
                        {
                          $NomPlaEnf=$row3[2];
                          echo "<option value='$lcuplagenfer' selected>$NomPlaEnf</option>";
                        }
                      }
                      else
                      {
                        echo "<option selected disabled></option>";
                      }
                      include 'conexion.php';
                      $res1=pg_query($con, "SELECT * FROM plagaenfermedad order by pennomcomun ASC");
                      while ($row1=pg_fetch_array($res1))
                      {
                        $CodPlaEnf=$row1[0];
                        $NomPlaEnf=$row1[2];
                        echo "<option value='$CodPlaEnf'>$NomPlaEnf</option>";
                      }
                    ?>
                  </select> 
                </td>
              </tr>
              <tr> 
                <td>FECHA SIEMBRA:</td>
                <td colspan="2">
                  <input type="date" name="lcufechsiemb" id="lcufechsiemb" class="inp-form" value="<?php if (isset($lcufechsiemb)) { echo "$lcufechsiemb";} ?>" onblur="revisarfecha(this)" required/>
                </td>
            
                 <td>FECHA COSECHA:</td>
                <td>
                  <input type="date" name="lcufechcosec" id="lcufechcosec" class="inp-form" value="<?php if (isset($lcufechcosec)) { echo "$lcufechcosec";} ?>" onblur="revisarfecha(this)" required/>
                </td>
              </tr>
              <tr>
                <td>PRODUCCION ESTIMADA:</td>
              <td colspan="2">
                <input type="text"  name="lcuproduesti" id="lcuproduesti" class="inp-ent" maxlength="4" value="<?php if (isset($lcuproduesti)) { echo "$lcuproduesti";} ?>" placeholder="EJ: 1.50" onkeypress="return ProdEstLoteCultivo(event);" onblur="revisarn(this)" required/>

                <select name="lcuunimedest" id="lcuunimedest" class="uni-form" onblur="SelectVaciouni(this)" required/>
                  <?php
                    if (isset($lcuunimedest))
                    {
                      $res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$lcuunimedest' ");
                      while ($row=pg_fetch_array($res1))
                      {
                        $repunimed=utf8_decode($row[1]);
                      } 
                      echo "<option value='$lcuunimedest' selected>$repunimed</option>"; }
                    else
                    {
                      echo "<option selected disabled></option>";
                    }
                      $res=pg_query($con, "SELECT * FROM unidad_medida where umetipunimed = 'MASA' ORDER BY umerepreset ASC");
                      while($reg=pg_fetch_array($res))
                      {
                        $umeid=$reg[0];
                        $umenombre= $reg[1];
                        echo "<option value='$umeid'>$umenombre</option>";
                      }
                  ?>
                </select>
              </td>
              <td>PRODUCCION REAL:</td>
              <td colspan="2">
                <input type="text"  name="lcuprodureal" id="lcuprodureal" class="inp-ent" maxlength="4" value="<?php if (isset($lcuprodureal)) { echo "$lcuprodureal";} ?>" placeholder="EJ: 1.50" onkeypress="return ProdRealLoteCultivo(event);" onblur="revisarn(this)" required/>
                <select  name="lcuunimedrea" id="lcuunimedrea" class="uni-form" onblur="SelectVaciouni(this)" required/>
                  <?php
                    if (isset($lcuunimedrea))
                    {
                      $res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$lcuunimedrea' ");
                      while ($row=pg_fetch_array($res1))
                      {
                        $repunimed=utf8_decode($row[1]);
                      } 
                      echo "<option value='$lcuunimedrea' selected>$repunimed</option>";}
                    else
                    {
                      echo "<option selected disabled></option>";
                    }
                     $res=pg_query($con, "SELECT * FROM unidad_medida where umetipunimed = 'MASA' ORDER BY umerepreset ASC");
                    while($reg=pg_fetch_array($res))
                    {
                      $umeid=$reg[0];
                      $umenombre= $reg[1];
                      echo "<option value='$umeid'>$umenombre</option>";
                    }
                  ?>
                </select>
              </td>
            </tr>
            <tr> 
              <td>COSTO PRODUCCION ESTIMADA:</td>
              <td colspan="2">
                <input type="text" name="lcucosproest" id="lcucosproest" class="inp-ent" maxlength="12" value="<?php if (isset($lcucosproest)) { echo "$lcucosproest";} ?>" placeholder="EJ: 100000000.50" onkeypress="return CosProdEstLoteCultivo(event);" onblur="revisarn(this)" required/>

                <select  name="lcuunimedies" id="lcuunimedies" class="uni-form" onblur="SelectVaciouni(this)" required/>
                  <?php
                    if (isset($lcuunimedies))
                    {
                      $res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$lcuunimedies' ");
                      while ($row=pg_fetch_array($res1))
                      {
                        $repunimed=utf8_decode($row[1]);
                      } 
                      echo "<option value='$lcuunimedies' selected>$repunimed</option>";
                    }
                    else
                    {
                      echo "<option selected disabled></option>";
                    }
                    $res=pg_query($con, "SELECT * FROM unidad_medida where umetipunimed = 'MONEDA'");
                    while($reg=pg_fetch_array($res))
                    {
                      $umeid=$reg[0];
                      $umenombre= $reg[1];
                      echo "<option value='$umeid'>$umenombre</option>";
                    }
                  ?>
                </select>
              </td>
              <td>COSTO PRODUCCION REAL:</td>
              <td colspan="2">
                <input type='text'  name='lcucosprorea' id='lcucosprorea' class="inp-ent" maxlength="12" value="<?php if (isset($lcucosprorea)) { echo "$lcucosprorea";} ?>" placeholder="EJ: 100000000.50" onkeypress="return CosProdRealLoteCultivo(event);" onblur="revisarn(this)" required/>

                <select  name="lcuunimedire" id="lcuunimedire" class="uni-form" onblur="SelectVaciouni(this)" required/>
                  <?php
                    if (isset($lcuunimedire))
                    {
                      $res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$lcuunimedire' ");
                      while ($row=pg_fetch_array($res1))
                      {
                        $repunimed=utf8_decode($row[1]);
                      } 
                      echo "<option value='$lcuunimedire' selected>$repunimed</option>";
                    }
                    else
                    {
                      echo "<option selected disabled></option>";
                    }
                      
                      $res=pg_query($con, "SELECT * FROM unidad_medida where umetipunimed = 'MONEDA'");
                      while($reg=pg_fetch_array($res))
                      {
                        $umeid=$reg[0];
                        $umenombre= $reg[1];
                        echo "<option value='$umeid'>$umenombre</option>";
                      }
                  ?>
                </select>
              </td>
            </tr>
            <tr>
              <td>RESPONSABLE:</td>
              <td>
                <input type="text" name="lcuresponsab" id="lcuresponsab" class="inp-form" value="<?php if (isset($lcuresponsab)) {echo "$lcuresponsab";}?>" placeholder="EJ: FERNANDO" onkeypress="return validar_texto(event);" onkeyup="this.value=this.value.toUpperCase()" onkeydown="espacios(this)" onblur="revisar(this)" required/>
              </td>
            </tr>
            <tr>
              <td colspan="6" align="center"><br>
                <?php 
                  if (isset($arreglo)) 
                  {
                    echo"<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)'' title='Actualizar Registro'>
                         <a href='frm_lotecultivo.php'><img src='img/nuevo.png' class='img-form' title='Nuevo Registro'>
                         <a/>";
                  }
                  else
                  {
                    echo "<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)'' title='Guardar Registro'>";
                  }
                ?>
                <img src="img/Consultar.png" class="img-form" title="Consultar" id="botonconsulta">
                <img src="img/Grilla.png" class="img-form" title="Ver Grilla" id="boton">
                <a href="descarga_pdf/pdf_lotecultivo.php" target="_blank">
                  <img src="img/pdf.png" title="Exportar PDF" class="img-form">
                </a>
                <a href="descarga_excel/exc_lotecultivo.php" target="_blank">
                  <img src="img/Excel.png" title="Exportar Excel" class="img-form">
                </a>
              </td>
            </tr>
          </table>
        </form>
        </div>
          <div id="grilla">
            <?php include 'grillas/gri_lotecultivo/gri_lotecultivo.php'; ?>
          </div>
          <div id="foot">
            <?php include 'include/piepagina.php'; ?>
          </div>
          <div class="fin">
            Sena la granja
          </div>
        </div>
      </body>
    </html>
        