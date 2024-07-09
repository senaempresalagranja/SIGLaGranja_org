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
if (isset($_SESSION['USUARIO CONSULTA'])){}
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
      <table whidt="100%" class="table">
          <tr>
            <td colspan="6"><br>
              <p class='tit-form'><b>HISTORICO (LOTES-CULTIVOS)<b><br><p><br>             
            </td>
          </tr>      
          <tr>
            <td align="center"><br>
              <img src="img/Grilla.png" class="img-form" title="Ver Grilla" id="boton">
            </td>         
          </tr>
     </table>          
    </form>
    </div>
      <div id="grilla">
        <?php include 'grillas/gri_historico/gri_historico.php'; ?>
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