<?php
$redSanitaria=$_POST['valor_redsanitaria'];
include 'conexion.php';

$pg4="SELECT rsannumbater,
rsanumducha,
rsanumlavama,
sannumgrifos,
sannumsifon FROM redsanitaria INNER JOIN construccion ON construccion.conid= redsanitaria.rsaconstrucc 
WHERE construccion.connombre ='$redSanitaria'";



$result4 = pg_query($con, $pg4);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row4 = pg_fetch_array($result4)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>BATERIAS SANITARIAS: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row4['rsannumbater'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>DUCHAS: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row4['rsanumducha'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>LAVA MANOS: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row4['rsanumlavama'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>GRIFOS: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row4['sannumgrifos'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>SIFONES: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row4['sannumsifon'] . "</td>";
            echo "</tr>";
            
            
         }

         echo "</table>";
        pg_close($con);
?>