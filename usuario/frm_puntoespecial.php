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
            error_reporting(E_ALL^E_NOTICE);
            if ($_REQUEST['condicion']==1)
            {
              include 'conexion.php';  
              $res=pg_query($con, "SELECT * FROM puntoespecial WHERE pesnombre='$_REQUEST[conspesnombre]'");       
              while ($reg=pg_fetch_array($res))
              {
                $arreglo['puntoespecial']=array('pesid'=>$reg[0]);
                $pesid= utf8_decode($reg [0]);
                $pesunidad= utf8_decode($reg [1]);
                $pesnombre= $reg [2];
                $pestippunto= utf8_decode($reg [3]);
                $peslatitud= utf8_decode($reg [4]);
                $pesorientlat= utf8_decode($reg [5]);
                $peslongitud= utf8_decode($reg [6]);
                $pesorientlog= utf8_decode($reg [7]);
                $pesdescripci= $reg [8];
                $pesfecha= utf8_decode($reg [9]);
              }
            }
          ?>
          <tr>
            <td colspan="6"><br>
              <?php
                if (isset($arreglo))
                {
                  echo "<p class='tit-form'><b>ACTUALIZAR PUNTO ESPECIAL<b><br><p><br>";
                }
                else
                {
                   echo "<p class='tit-form'><b>REGISTRAR PUNTO ESPECIAL<b><br><p><br>";
                }
              ?>              
            </td>
          </tr>
              <?php
                if (isset($arreglo)) 
                {
                  echo " <tr id='consultarr'>
                          <td>CONSULTAR:</td>
                          <td colspan='3'> 
                           <input type='text'  name='conspesnombre' id='conspesnombre' class='inp-form' placeholder='EJ:ENFERMERIA' onkeypress='return validar_texto(event);' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'> 
                           <input type='hidden' name='condicion' value='1'>
                           <input type='image' src='img/Consultar.png' width='4%' onclick='replace(this.form.name)' title='consultar'>
                          </td>
                         </tr>";
                }
                else
                {
                  echo " <tr id='consultar'>
                          <td>CONSULTAR:</td>
                          <td colspan='3'> 
                           <input type='text'  name='conspesnombre' id='conspesnombre' class='inp-form'  placeholder='EJ:ENFERMERIA' onkeypress='return validar_texto(event);' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
                           <input type='hidden' name='condicion' value='1'>
                           <input type='image' src='img/Consultar.png' width='4%'  onclick='replace(this.form.name)' title='consultar'>
                          </td>
                         </tr>";
                }
              ?>
      </form>
              <?php 
               if (isset($arreglo))
               {
                 echo "<form name='formulario' action='actualizar/act_puntoespecial.php' onsubmit='return ValidarFormPuntoEspecial();'>";
               }
               else
               {
                 echo "<form name='formulario' action='registrar/reg_puntoespecial.php' onsubmit='return ValidarFormPuntoEspecial();'>";
               }
              ?>
          	<tr>
            	<td>
              	<input type="hidden" value="<?php if (isset($pesid)) {echo "$pesid";} ?>" name="pesid">
            	</td>
          	</tr>
			<tr>
	            <td>NOMBRE:</td>
				<td>
					<input type="text" name="pesnombre" id="pesnombre" class="inp-form" value="<?php if (isset($pesnombre)) {echo "$pesnombre";} ?>" placeholder="EJ: CAFETERIA" onkeypress="return validar_texto(event);" onkeyup="this.value=this.value.toUpperCase()" onkeydown="espacios(this)" onblur="revisar(this)" required/>
				</td>
				<?php
                if (isset($id)) 
                {
                    echo "<td id='Info' colspan='3'></td>";
                }
                else
                {
                    echo "<td id='Info' colspan='3'></td>";
                }
              ?>
			</tr>
			<tr>	
				<td>UNIDAD:</td>
	            <td>
	              <select name="pesunidad" id="pesunidad" class="select-form" onblur="SelectVacio(this)" required/>
	                <?php
	                  if (isset($arreglo))
	                  {
	                    $res1=pg_query($con, "SELECT * FROM unidad WHERE uniid='$pesunidad' ");
	                    while($reg1=pg_fetch_array($res1))
	                    {
	                      $NomUnidad=$reg1[2];
	                      echo "<option value='$pesunidad' selected>$NomUnidad</option>";
	                    }
	                  }
	                  else
	                  {
	                    echo "<option selected disabled></option>";
	                  }
	                  include 'conexion.php';
	                  $res=pg_query($con, "SELECT * FROM unidad order by uninombre ASC");
	                  while ($reg=pg_fetch_array($res))
	                  {
	                    $uniid=$reg[0];
	                    $uninombre=$reg[2];
	                    echo "<option value='$uniid'>$uninombre</option>";
	                  }
	                ?>
	              </select>
	            </td>
				<td>TIPO PUNTO:</td>
				<td colspan="2">
					<select name="pestippunto" id="pestippunto" class="select-form" onblur="SelectVacio(this)" required/>
                	<?php
                      if (isset($arreglo) && $pestippunto == 'BIENESTAR APRENDIZ') 
                      {
                        echo "<option value='BIENESTAR APRENDIZ' selected>BIENESTAR APRENDIZ</option>";
                        echo "<option value='BLOQUE ADMINISTRATIVO'>BLOQUE ADMINISTRATIVO</option>";
                        echo "<option value='ZONA DEPORTIVA'>ZONA DEPORTIVA</option>";
                        echo "<option value='ZONA INFORMATIVA'>ZONA INFORMATIVA</option>";
                        echo"<option value='ZONA WI-FI'>ZONA WI-FI</option>";
                      }
                      elseif (isset($arreglo) && $pestippunto == 'BLOQUE ADMINISTRATIVO') 
                      {
                        echo "<option value='BLOQUE ADMINISTRATIVO' selected>BLOQUE ADMINISTRATIVO</option>";
                        echo "<option value='BIENESTAR APRENDIZ'>BIENESTAR APRENDIZ</option>";
                        echo "<option value='ZONA DEPORTIVA'>ZONA DEPORTIVA</option>";
                        echo "<option value='ZONA INFORMATIVA'>ZONA INFORMATIVA</option>";
                        echo"<option value='ZONA WI-FI'>ZONA WI-FI</option>";
                      }
                      elseif (isset($arreglo) && $pestippunto == 'ZONA DEPORTIVA') 
                      {
                        echo "<option value='ZONA DEPORTIVA' selected>ZONA DEPORTIVA</option>";
                        echo "<option value='BIENESTAR APRENDIZ'>BIENESTAR APRENDIZ</option>";
                        echo "<option value='BLOQUE ADMINISTRATIVO'>BLOQUE ADMINISTRATIVO</option>";
                        echo "<option value='ZONA INFORMATIVA'>ZONA INFORMATIVA</option>";
                        echo"<option value='ZONA WI-FI'>ZONA WI-FI</option>";
                      }
                      elseif (isset($arreglo) && $pestippunto == 'ZONA INFORMATIVA') 
                      {
                        echo "<option value='ZONA INFORMATIVA' selected>ZONA INFORMATIVA</option>";
                        echo "<option value='BIENESTAR APRENDIZ'>BIENESTAR APRENDIZ</option>";
                        echo "<option value='BLOQUE ADMINISTRATIVO'>BLOQUE ADMINISTRATIVO</option>";
                        echo "<option value='ZONA DEPORTIVA'>ZONA DEPORTIVA</option>";
                        echo"<option value='ZONA WI-FI'>ZONA WI-FI</option>";
                      }
                      elseif (isset($arreglo) && $pestippunto == 'ZONA WI-FI')
                      {
                        echo "<option value='ZONA WI-FI' selected>ZONA WI-FI</option>";
                        echo "<option value='BIENESTAR APRENDIZ'>BIENESTAR APRENDIZ</option>";
                        echo "<option value='BLOQUE ADMINISTRATIVO'>BLOQUE ADMINISTRATIVO</option>";
                        echo "<option value='ZONA DEPORTIVA'>ZONA DEPORTIVA</option>";
                        echo"<option value='ZONA INFORMATIVA'>ZONA INFORMATIVA</option>";
                      }
                      else
                      {
                        echo "<option selected disabled></option>";
                        echo"<option value='BIENESTAR APRENDIZ'>BIENESTAR APRENDIZ</option>";
                        echo"<option value='BLOQUE ADMINISTRATIVO'>BLOQUE ADMINISTRATIVO</option>";
                        echo"<option value='ZONA DEPORTIVA'>ZONA DEPORTIVA</option>";
                        echo"<option value='ZONA INFORMATIVA'>ZONA INFORMATIVA</option>";
                        echo"<option value='ZONA WI-FI'>ZONA WI-FI</option>";
                      }
                    ?>
                	</select>
				</td>
			</tr>
			<tr>
            <td>DESCRIPCION:</td>
            	<td colspan="4">
              		<textarea type="text" name="pesdescripci" id="pesdescripci" class="des-form" placeholder="ESCRIBA LAS CARACTERISTICAS DEL PUNTO ESPECIAL" onblur="revisard(this)" onkeyup="this.value=this.value.toUpperCase()" onkeypress="espacios(this)" required/><?php if (isset($pesdescripci)) {echo "$pesdescripci";} ?></textarea>
	            </td>
          	</tr>
			<tr>
            <td colspan="3"></td>
            <td>LATITUD:</td>
            <td>
              <input type="text" name="coorlatitud" id="coorlatitud" class="inp-coor" value="<?php if (isset($peslatitud)) {echo "$peslatitud";} ?>" placeholder="EJ:123456.78" maxlength="10" onkeypress="return Coorla(event);" onkeyup='Orilatitud(this);' onblur="revisarc(this)" required/>
              <input type="text" name="orilatitud" id= "orilatitud" class="inp-ent" value="<?php if (isset($pesorientlat)) {echo "$pesorientlat";} ?>" placeholder=" N / S" onblur="revisarn(this)"  readonly="readonly">
            </td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td>LONGITUD:</td>
            <td>
              <input type="text" name="coorlongitud" id="coorlongitud" class="inp-coor" value="<?php if (isset($peslongitud)) {echo "$peslongitud";} ?>" maxlength="10" placeholder="EJ:-123456.78" onkeypress="return Coorlo(event);" onkeyup='Orilongitud(this);' onblur="revisarc(this)" required/>
              <input type="text" name="orilongitud" id="orilongitud" class="inp-ent" value="<?php if (isset($pesorientlog)) {echo "$pesorientlog";} ?>" placeholder=" E / O" Onblur="revisarn(this)" readonly="readonly">
            </td> 
          </tr>      
          <tr>
            <td colspan="5" align="center"><br>
              <?php 
                if (isset($arreglo))
                {
                  echo "<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)'' title='Actualizar Registro'>
                        <a href='frm_puntoespecial.php'>
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

              <a href="descarga_pdf/pdf_puntoespecial.php" target="_blank">
                <img src="img/pdf.png" title="Exportar PDF" class="img-form">
              </a>
              <a href="descarga_excel/exc_puntoespecial.php" target="_blank">
                <img src="img/Excel.png" title="Exportar Excel" class="img-form">
              </a>        
            </td>         
          </tr>
     </table>          
    </form>
    </div>
      <div id="grilla">
        <?php include 'grillas/gri_puntoespecial/gri_puntoespecial.php'; ?>
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