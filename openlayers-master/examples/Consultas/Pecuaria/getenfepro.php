<?php
$enfermedadP=$_POST['valor_enfermedadproduccion'];
include 'conexion.php';

$pg9="SELECT enfnomcinti,
enftipagecau,
enfmorvimort,
enftratamien, 
eesdescripci FROM enfermedad_especie  
INNER JOIN enfermedad ON enfermedad.enfid = enfermedad_especie.eesenfermeda
INNER JOIN especie ON especie.espid = enfermedad_especie.eesespecie
INNER JOIN unidad ON unidad.uniid= especie.espunidad 
WHERE enfermedad.enfnomcomun ='$enfermedadP' LIMIT 1";



$result9 = pg_query($con, $pg9);

           

        echo "
                <table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
                ";

         while ($row9 = pg_fetch_array($result9)) {

           
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>NOMBRE CIENTIFICO: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row9['enfnomcinti'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>AGENTE CAUSAL: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row9['enftipagecau'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>MORTALIDAD: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row9['enfmorvimort'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatdazul'>TRATAMIENTO: </th>";
            echo "<td class='celdatdazul' colspan='2'>" . $row9['enftratamien'] . "</td>";
            echo "</tr>";
            echo "<tr>";
            echo "<th colspan='2' class='celdatd'>DESCRIPCION: </th>";
            echo "<td class='celdatd' colspan='2'>" . $row9['eesdescripci'] . "</td>";
            echo "</tr>";
            
            
            
            
            
         }

         echo "</table>";
        pg_close($con);
?>