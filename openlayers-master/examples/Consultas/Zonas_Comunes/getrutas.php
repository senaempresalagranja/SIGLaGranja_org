
<?php
$ruta=$_POST['valor_ruta'];
include 'conexion.php';

$pg5="SELECT rutnombre,
rundistancia,
umerepreset,
runtierecorr,
umerepreset,
runtipruta FROM  ruta_unidad INNER JOIN unidad ON unidad.uniid=ruta_unidad.rununidad INNER JOIN ruta ON ruta.rutid=ruta_unidad.runruta INNER JOIN unidad_medida ON unidad_medida.umeid=ruta_unidad.rununimeddis 
WHERE ruta.rutnombre ='$ruta' LIMIT 1 ";



$result5 = pg_query($con, $pg5);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row5 = pg_fetch_array($result5)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>RUTA: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row5['rutnombre'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>DISTANCIA: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row5['rundistancia'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>U/M: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row5['umerepreset'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>TIEMPO RECORRIDON (MINUTOS): </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row5['runtierecorr'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>TIPO RUTA: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row5['runtipruta'] . "</td>";
            echo "</tr>";
            
            
         }

         echo "</table>";
        pg_close($con);
?>