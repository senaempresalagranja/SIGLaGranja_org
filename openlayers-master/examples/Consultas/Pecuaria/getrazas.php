<?php
$raza=$_POST['valor_raza'];
include 'conexion.php';

$pg7="SELECT razorigen, razlugorigen, razproposito, razproducion, umerepreset, razcarfenoti, eradescripci FROM especie_raza INNER JOIN raza ON raza.razid = especie_raza.eraraza
INNER JOIN especie ON especie.espid = especie_raza.eraespecie
INNER JOIN unidad ON unidad.uniid = especie.espunidad
INNER JOIN area ON area.areid= unidad.uniarea
INNER JOIN unidad_medida ON unidad_medida.umeid=raza.razunimedpro  WHERE raza.raznombre ='$raza'";



$result7 = pg_query($con, $pg7);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row7 = pg_fetch_array($result7)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>ORIGEN: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row7['razorigen'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>LUGAR ORIGEN: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row7['razlugorigen'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>PROPOSITO: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row7['razproposito'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>PRODUCCION: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row7['razproducion'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>U/M: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row7['umerepreset'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>FENOTIPO: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row7['razcarfenoti'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>DESCRIPCION: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row7['eradescripci'] . "</td>";
            echo "</tr>";
            
            
            
         }

         echo "</table>";
        pg_close($con);
?>