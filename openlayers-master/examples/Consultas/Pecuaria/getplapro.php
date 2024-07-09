<?php
$plagaP=$_POST['valor_plagaproduccion'];
include 'conexion.php';

$pg8="SELECT planomcomun, planomcienti, plaorigen, platipagecau, platratamien, pesdescripci FROM plaga_especie
INNER JOIN plaga ON plaga.plaid= plaga_especie.pesplaga
INNER JOIN especie ON especie.espid = plaga_especie.pesespecie
INNER JOIN unidad ON unidad.uniid= especie.espunidad 
WHERE plaga.planomcomun ='$plagaP'";



$result8 = pg_query($con, $pg8);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row8 = pg_fetch_array($result8)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>NOMBRE COMUN: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row8['planomcomun'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>NOMBRE CIENTIFICO: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row8['planomcienti'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>ORIGEN: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row8['plaorigen'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>AGENTE CAUSAL: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row8['platipagecau'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>TRATAMIENTO: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row8['platratamien'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>ANOMALIA: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row8['pesdescripci'] . "</td>";
            echo "</tr>";
            
            
            
            
         }

         echo "</table>";
        pg_close($con);
?>