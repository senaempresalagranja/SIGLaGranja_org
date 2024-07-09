<?php 
require_once('conexion.php');
$con=pg_connect("host=localhost user=postgres password='siglagranja' dbname=siglagranja  port=5432");
pg_query ("SET NAMES 'utf8'");

$listado=  pg_query($con,"SELECT * from unidad_cultivo");
?>

<script type="text/javascript" language="javascript" src="grillas/gri_lotecultivo/js/jsListadoLoteCultivo.js"></script>
<table cellpadding="0" cellspacing="0" border="0" class="display" id="Tabla_Listar_LoteCultivo">
  <thead>
    <tr>
      <th>CODIGO</th>
      <th>CULTIVO</th>
      <th>UNIDAD</th>
      <th>CANAL</th>
      <th>PLAGA/ENFERMEDAD</th>
      <th>FECHA SIEMBRA</th>
      <th>FECHA COSECHA</th>
      <th>PRODUCCION ESTIMADA</th>
      <th>UND-MEDIDA</th>
      <th>PRODUCCION REAL</th>
      <th>UND-MEDIDA</th>
      <th>COSTO PRODUCCION ESTIMADA</th>
      <th>UND-MEDIDA</th>
      <th>COSTO PRODUCCION REAL</th>
      <th>UND-MEDIDA</th>
      <th>RESPONSABLE</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </tfoot>
  <tbody>
    <?php
    
    $res=pg_query($con, "SELECT * FROM unidad_cultivo ORDER BY lcuid ASC");
    while($reg=pg_fetch_array($res))
    {
     $codigo=$reg[0];

      $cultivo=$reg[1];
      $con1=pg_query($con, "SELECT * FROM cultivo WHERE culid='$cultivo' ");
      while($reg1=pg_fetch_array($con1))
      {
        $NomComun=$reg1[2];
      }

      $unidad=$reg[2];
      $con2=pg_query($con, "SELECT * FROM unidad WHERE uniid='$unidad' ");
      while($reg1=pg_fetch_array($con2))
      {
        $NomUnidad=$reg1[2];
      }

      $fechasiembra=$reg[3];
      $fechacosecha=$reg[4];
      $prodestimada=$reg[5];

      $undmedida=$reg[6];
      $con3=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$undmedida' ");
      while($reg1=pg_fetch_array($con3))
      {
        $NomUniMed=utf8_decode($reg1[1]);
      }

      $prodreal=$reg[7];

      $undmedida1=$reg[8];
      $con4=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$undmedida1' ");
      while($reg1=pg_fetch_array($con4))
      {
        $NomUniMed1=utf8_decode($reg1[1]);
      }

      $cosproestimada=$reg[9];

      $undmedida2=$reg[10];
      $con5=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$undmedida2' ");
      while($reg1=pg_fetch_array($con5))
      {
        $NomUniMed2=utf8_decode($reg1[1]);
      }

      $cosproreal=$reg[11];

      $undmedida3=$reg[12];
      $con6=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid='$undmedida3' ");
      while($reg1=pg_fetch_array($con6))
      {
        $NomUniMed3=utf8_decode($reg1[1]);
      }

      $responsable=$reg[13];        
      $fecha=$reg[14];

      $canal=$reg[15];
      $con7=pg_query($con, "SELECT * FROM canal WHERE canid='$canal' ");
      while($reg1=pg_fetch_array($con7))
      {
        $NomCanal=utf8_decode($reg1[2]);
      }

      $plagaenfermedad=$reg[16];
      $con8=pg_query($con, "SELECT * FROM plagaenfermedad WHERE penid='$plagaenfermedad' ");
      while($reg1=pg_fetch_array($con8))
      {
        $NomComunPlaEnf=utf8_decode($reg1[2]);
      }
      echo '<tr>';
      echo '<td>'.mb_convert_encoding($codigo, "UTF-8").'</td>';
 
      echo '<td>'.mb_convert_encoding($NomComun, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($NomUnidad, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($NomCanal, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($NomComunPlaEnf, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($fechasiembra, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($fechacosecha, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($prodestimada, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($NomUniMed, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($prodreal, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($NomUniMed1, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($cosproestimada, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($NomUniMed2, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($cosproreal, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($NomUniMed3, "UTF-8").'</td>';
      echo '<td>'.mb_convert_encoding($responsable, "UTF-8").'</td>';           
      echo '</tr>';                     
    }
    ?>
    <tbody>
    </table>
