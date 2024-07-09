<?php
$especie=$_POST['valor_especie'];
include 'conexion.php';

$pg6="SELECT esptipespeci,
 espnomcienti FROM especie INNER JOIN unidad ON unidad.uniid= especie.espunidad WHERE especie.espnomcomun ='$especie'";



$result6 = pg_query($con, $pg6);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row6 = pg_fetch_array($result6)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>TIPO DE ESPECIE: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row6['esptipespeci'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>NOMBRE CIENTIFICO: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row6['espnomcienti'] . "</td>";
            echo "</tr>";
            
            
            
         }

         echo "</table>";
        pg_close($con);
?>