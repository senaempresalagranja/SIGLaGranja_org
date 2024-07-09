<?php
$redLogica=$_POST['valor_redlogica'];
include 'conexion.php';

$pg3="SELECT rlozonawifi,
rlocantacces,
rloredalambr,
rlocantanale,
umerepreset,
rlocantrj,
rlocantfibop,
rlocategoutp,
rlotopologia,
rlodistribuc,
rlorack,
rlocantswitc,
rlocantregle,
rlocantups FROM redlogica INNER JOIN unidad_medida ON unidad_medida.umeid=redlogica.rlounimedcca INNER JOIN construccion ON construccion.conid= redlogica.rloconstrucc 
WHERE construccion.connombre ='$redLogica' limit 1";



$result3 = pg_query($con, $pg3);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row3 = pg_fetch_array($result3)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>ZONA WIFI: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row3['rlozonawifi'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>ACCESS POINT: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row3['rlocantacces'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>RED ALAMBRICA: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row3['rloredalambr'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>LONGITUD CANALETAS: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row3['rlocantanale'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>U/M: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row3['umerepreset'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>RJ-45: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row3['rlocantrj'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>FIBRA OPTICA: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row3['rlocantfibop'] . "</td>";
            echo "</tr>";
            echo "<th colspan='2' class='celdatdazul'>CABLE UTP: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row3['rlocategoutp'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>TOPOLOGIA: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row3['rlotopologia'] . "</td>";
            echo "</tr>";
            echo "<th colspan='2' class='celdatdazul'>DISTRIBUCION: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row3['rlodistribuc'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>RACK: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row3['rlorack'] . "</td>";
            echo "</tr>";
            echo "<th colspan='2' class='celdatdazul'>SWITCH: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row3['rlocantswitc'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>REGLETAS: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row3['rlocantregle'] . "</td>";
            echo "</tr>";
            echo "<th colspan='2' class='celdatdazul'>UPS: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row3['rlocantups'] . "</td>";
            echo "</tr>";
            
         }

         echo "</table>";
        pg_close($con);
?>