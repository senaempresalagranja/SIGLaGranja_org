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
          <table width="100%" class="table" border="0">
          <?php
            error_reporting(E_ALL ^ E_NOTICE);
            if($_REQUEST['condicion']==1)
            {
              include 'conexion.php';

              $res=pg_query($con, "SELECT * FROM usuario WHERE usuusuario='$_REQUEST[conusuusuario]'");
              while($reg=pg_fetch_array($res))
              {
                $arreglo['usuario']=array('usuid'=>$reg[0]);
                $usuid= utf8_decode($reg [0]);
                $usunombre=utf8_decode($reg [1]);
                $usuapellidos=utf8_decode($reg[2]);
                $ususexo=utf8_decode($reg[3]);
                $usuemail=utf8_decode($reg[4]);
                $usutelefono=utf8_decode($reg[5]);                                    
                $usuusuario=utf8_decode($reg[6]);
                $usupassword=utf8_decode($reg[7]);
                $usurol=utf8_decode($reg[8]);
                $usufecha=utf8_decode($reg[9]);
              }
            }
          ?>
            <tr>
              <td colspan="4">
                <?php
                                 
                    echo "<p class='tit-form'><b>ACTUALIZAR USUARIO<b><br><br><p>";
                 
                ?>
              </td>
            </tr>
                    	
					
				</table>
			</form>
		</div>		
		<div id="grilla">
		    <?php
		        include 'grillas/usuario/gri_usuario.php';
		    ?>
		</div>
		<div id="foot">
			<?php
				include 'include/piepagina.php';
			?>
		</div>
		<div class="fin">
			Luis Fernando Chamorro Rodríguez.
		</div>
	</div>
	</body>
</html>