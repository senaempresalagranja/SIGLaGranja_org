<?php

$vegetal=$_POST['valor_vegetal'];
 include 'conexion.php';

 $pg13="SELECT uninombre,
    vegnomcomun,
    vegnomcienti,
    vegorigen,
    veglugorigen,
    vegclima,
    vegtipo,
    vegdescripci
      FROM zonaverde_vegetal
      INNER JOIN zonaverde ON zonaverde.zveid=zonaverde_vegetal.zovzonaverde
       INNER JOIN unidad ON unidad.uniid=zonaverde.zveunidad 
       INNER JOIN vegetal ON vegetal.vegid=zonaverde_vegetal.zovvegetal 
       WHERE vegetal.vegnomcomun = '$vegetal' LIMIT 1";


            $result13 = pg_query($con, $pg13);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row13 = pg_fetch_array($result13)) {

            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>NOMBRE COMUN: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['vegnomcomun'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>NOMBRE CIENTIFICO: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['vegnomcienti'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>ORIGEN: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['vegorigen'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>LUGAR DE ORIGEN: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['veglugorigen'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>CLIMA: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['vegclima'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>TIPO: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['vegtipo'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>DESCRIPCION: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['vegdescripci'] . "</td>";
            echo "</tr>";
           
            

        }

        echo "</table>";
        pg_close($con);


?>