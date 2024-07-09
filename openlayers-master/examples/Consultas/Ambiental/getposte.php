<?php

$posteC=$_POST['valor_poste'];
 include 'conexion.php';

 $pg13="SELECT postipmateri,
 posestado,
 posaltura,
 umerepreset,
 postiptensio,
 posalumbrado,
 posestalumbr,
 postransform,
 posesttransf,
 poslatitud,
 posorientlat,
 poslongitud,
 posorientlon,
  posidcodigo 
  FROM poste
   INNER JOIN unidad ON unidad.uniid= poste.posunidad
    inner join unidad_medida ON unidad_medida.umeid=poste.posunimedi WHERE posidcodigo ='$posteC'";


            $result13 = pg_query($con, $pg13);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row13 = pg_fetch_array($result13)) {

            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>POSTE: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['posidcodigo'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>TIPO MATERIAL: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['postipmateri'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>ESTADO: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['posestado'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>ALTURA: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['posaltura'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>U/M: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['umerepreset'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>TIPO TENSION: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['postiptensio'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>ILUMINACION: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['posalumbrado'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>ESTADO ILUMINACION: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['posestalumbr'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>TRANSFORMADOR: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['postransform'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>ESTADO TRANSFORMADOR: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['posesttransf'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>LATITUD: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['poslatitud'] . "</td>";					
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>ORIENTACION: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['posorientlat'] . "</td>";					
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>LONGITUD: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row13['poslongitud'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>ORIENTACION: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row13['posorientlon'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            

        }

        echo "</table>";
        pg_close($con);


?>