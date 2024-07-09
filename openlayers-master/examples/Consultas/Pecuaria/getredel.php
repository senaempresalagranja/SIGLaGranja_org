<?php
$redElectrica=$_POST['valor_redelectrica'];
include 'conexion.php';

$pg2="SELECT 
elenumlampar,
elenumtomaco,
elenuminterr,
eletipventil,
elecantidad,
tomar,
tomanr FROM redelectrica  INNER JOIN construccion ON construccion.conid= redelectrica.eleconstrucc INNER JOIN unidad ON unidad.uniid= construccion.conunidad
WHERE construccion.connombre ='$redElectrica'";



$result2 = pg_query($con, $pg2);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row2 = pg_fetch_array($result2)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>CANTIDAD LAMPARAS: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row2['elenumlampar'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>CANTIDAD TOMA CORRIENTES: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row2['elenumtomaco'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>CANTIDAD INTERRUPTORES: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row2['elenuminterr'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>TIPO VENTILADOR: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row2['eletipventil'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>CANTIDAD VENTILADORES: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row2['elecantidad'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>TOMA REGULADA: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row2['tomar'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>TOMA NO REGULADA: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row2['tomanr'] . "</td>";
            echo "</tr>";
         }

         echo "</table>";
        pg_close($con);
?>