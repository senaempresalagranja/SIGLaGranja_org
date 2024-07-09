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
							$res=pg_query($con, "SELECT * FROM especieacuatica WHERE eacnomcomun='$_REQUEST[conseacnomcomun]'");
							while ($reg=pg_fetch_array($res)) 
							{
								$arreglo['especie']=array('eacid'=>$reg[0]);
								$eacid=utf8_decode($reg[0]);
								$eacunidad= utf8_decode($reg[1]);
								$eactipespeci= utf8_decode($reg[2]);
								$eacnomcomun= utf8_decode($reg[3]);
								$eacnomcienti= utf8_decode($reg[4]);
							}
						}
						?>
						<tr>
							<td colspan="5"><br>
								<?php
								if (isset($arreglo)) 
								{
									echo "<p class='tit-form'><b>ACTUALIZAR ESPECIE ACUATICA<b><br><p><br>";
								}
								else
								{
									echo "<p class='tit-form'><b>REGISTRAR ESPECIE ACUATICA<b><br><p><br>";
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
                           <input type='text'  name='conseacnomcomun' id='conseacnomcomun' class='inp-form' placeholder='EJ:TILAPIA ROJA' onkeypress='return validar_texto(event);' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'> 
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
                           <input type='text'  name='conseacnomcomun' id='conseacnomcomun' class='inp-form'  placeholder='EJ:TILAPIA ROJA' onkeypress='return validar_texto(event);' onkeyup='this.value=this.value.toUpperCase()' onkeydown='espacios(this)'>
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
				echo "<form name='formulario' action='actualizar/act_especieacuatica.php' onsubmit='return ValidarFormEspAcuatica();'>";
			} 
			else
			{
				echo "<form name='formulario' action='registrar/reg_especieacuatica.php' onsubmit='return ValidarFormEspAcuatica();'>";
			}
			?>
			<tr>
				<td>
					<br><input type="hidden" value="<?php if (isset($eacid)) {echo "$eacid";} ?>" name="eacid" id="eacid">
				</td>
			</tr>
			<td width="180px">UNIDAD:</td>
				<td width="110px">
					<select name="eacunidad" id="eacunidad" class="select-form" onblur="SelectVacio(this)" required/>
                <?php
                  include 'conexion.php';
                  if (isset($arreglo)) 
                  {
                    $res1=pg_query($con, "SELECT * FROM unidad WHERE uniid='$eacunidad' ");
                    while ($row=pg_fetch_array($res1))
                    {
                      $nomUnidad=utf8_decode($row[2]);
                    } 
                    echo "<option value='$eacunidad' selected>$nomUnidad</option>";
                  }
                  else
                  {
                    echo "<option selected disabled></option>";
                  }                    
                   $Cons_Area=pg_query($con, "SELECT * from area where arenombre= 'PECUARIA'");
					while ($Reg_Area=pg_fetch_array($Cons_Area)) 
					{
						$Cod_AreaPec=$Reg_Area[0];
					}
                  	$res=pg_query($con, "SELECT * FROM unidad where uniarea = '$Cod_AreaPec' and uninombre = 'ACUICULTURA'");
                  while($reg=pg_fetch_array($res))
                  {
                    $CodUnidad=$reg[0];
                    $NomUnidad= $reg[2];
                    echo "<option value='$CodUnidad'>$NomUnidad</option>";
                  }
                ?>
              </select>							
			</td>
			<td width="15px"></td>
			<td>TIPO ESPECIE:</td>
			<td>
				<select name="eactipespeci"  class="select-form" onblur="SelectVacio(this)" required/>
              <?php 
                if (isset($arreglo) && $eactipespeci == 'ACUICOLAS') 
                {
                  echo "<option value='ACUICOLAS' selected>ACUICOLAS</option>";
                  echo "<option value='APICOLAS'>APICOLAS</option>";
                }
                else
                {
                  echo "<option selected disabled></option>";
                  echo "<option value='ACUICOLAS'>ACUICOLAS</option>";
                }
              ?>
            </select>	
			</td>
		</tr>  
		<tr>
			<td>NOMBRE COMUN:</td>
			<td>
			 	<input type="text" name="eacnomcomun" id="eacnomcomun" class="inp-form" value="<?php if (isset($eacnomcomun)) {echo "$eacnomcomun";} ?>" placeholder="EJ: TILAPIA ROJA" onkeypress="return validar_texto(event);" onkeyup="this.value=this.value.toUpperCase()" onkeydown="espacios(this)" onblur="revisar(this)" required/>
			</td> 
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
      	</tr>
      	<tr>
			<td>NOMBRE CIENTIFICO:</td>
			<td>
				<input type="text" name="eacnomcienti" id="eacnomcienti" class="inp-form" value="<?php if (isset($eacnomcienti)) {echo "$eacnomcienti";} ?>" placeholder="EJ: OREOCHROMIS MOSSAMBICUS" onkeypress="return validar_texto(event);" onkeyup="this.value=this.value.toUpperCase()" onkeydown="espacios(this)" onblur="revisar(this)" required/>
			</td>	
				<?php
		        if (isset($arreglo)) 
		        {
		        	echo "<td id='Info1' colspan='3'></td>";
		        }
		        else
		        {
		          echo "<td id='Info1' colspan='3'></td>";
		        }
		      ?>
		</tr>
		<tr>
		<td colspan="5">
		<center><br>
			<?php
			if (isset($arreglo)) 
			{
				echo "<input type='image' src='img/Guardar.png' class='img-form' onclick='replace(this.form.name)'' title='Actualizar Registro'>
                        <a href='frm_especieacuatica.php'>
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
              <a href="descarga_pdf/pdf_especieacuatica.php" target="_blank">
                <img src="img/pdf.png" title="Exportar PDF" class="img-form">
              </a>
              <a href="descarga_excel/exc_especieacuatica.php" target="_blank">
                <img src="img/Excel.png" title="Exportar Excel" class="img-form">
              </a>        
            </td>         
          </tr>
       </center>
     </table>          
    </form>
	</div>
		<div id="grilla">
			<?php include 'grillas/gri_especieacuatica/gri_especieacuatica.php'; ?>
		</div>
		<div id="foot">
			<?php include 'include/piepagina.php' ?>
		</div>
		<div class="fin">
			Sena la granja.
		</div>
	</div>
</body>
</html>