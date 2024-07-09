<?php
 $obtenga=$_POST['valor_construccion'];
 include 'conexion.php';


 $pg="SELECT connombre,
 conextension,
 
 umerepreset,
 contipambien,
 contipconstr,
 conestado,
 contipcubiert,
 contippiso,
 contipmuro,
 confecconstr,
 confecremode,
 conlatitud,
 conorientlat,
 conlongitud,
 conorientlon
  FROM construccion INNER JOIN unidad ON unidad.uniid= construccion.conunidad  inner join unidad_medida ON unidad_medida.umeid=construccion.conunimedcon
 WHERE construccion.connombre='$obtenga'";

        $result = pg_query($con, $pg);

        echo "
 			<table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
 			";

 				while ($row = pg_fetch_array($result)) {
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>NOMBRE CONSTRUCCION: </th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['connombre'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>EXTENSION: </th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['conextension'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>U/M: </th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['umerepreset'] . " </td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>TIPO AMBIENTE: </th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['contipambien'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>TIPO CONSTRUCCION: </th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['contipconstr'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>ESTADO CONSTRUCCION: </th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['conestado'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>TIPO DE CUBIERTA: </th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['contipcubiert'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>TIPO DE PISO: </th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['contippiso'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>TIPO DE MURO: </th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['contipmuro'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>FECHA CONSTRUCCION: </th>";
 					echo "<td class='celdatdazul' colspan='2'>" . $row['confecconstr'] . "</td>";					
                     echo "</tr>";
                     echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>FECHA REMODELACION: </th>";
 					echo "<td class='celdatdazul' colspan='2'>" . $row['confecremode'] . "</td>";					
                     echo "</tr>";
                     echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>LATITUD: </th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['conlatitud'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>ORIENTACION: </th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['conorientlat'] . "</td>";
                     echo "</tr>";
                     echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>LONGITUD: </th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['conlongitud'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>ORIENTACION: </th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['conorientlon'] . "</td>";
                     echo "</tr>";
                     
					 

 				}

 				echo "</table>";
 				pg_close($con);


?>