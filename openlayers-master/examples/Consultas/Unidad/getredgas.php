<?php
$redGas=$_POST['valor_redgas'];
include 'conexion.php';

$pg11="SELECT rgatipmateri,
rganumvalvul,
rganumconexi,
rganumcontad,
rganumsoport FROM redgas INNER JOIN construccion ON construccion.conid= redgas.rgaconstrucc 
INNER JOIN unidad ON unidad.uniid= construccion.conunidad WHERE construccion.connombre = '$redGas'";



$result11 = pg_query($con, $pg11);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row11 = pg_fetch_array($result11)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>TIPO MATERIAL: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row11['rgatipmateri'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>CONEXIONES: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row11['rganumvalvul'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>CONTADORES: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row11['rganumconexi'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>VALVULAS: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row11['rganumcontad'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>SOPORTES: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row11['rganumsoport'] . "</td>";
            echo "</tr>";
            
            
         }

         echo "</table>";
        pg_close($con);
?>