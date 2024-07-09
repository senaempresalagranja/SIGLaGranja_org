
<?php
$obtenga = $_POST['valor_plaga'];
include 'conexion.php';


$pg= "SELECT   
	 plagaenfermedad.pentipagecau,
       plagaenfermedad.pentipmanejo,
       plagaenfermedad.pentipzaffru,
       plagaenfermedad.pentipzaftal,
       plagaenfermedad.pennomcienti,
       plagaenfermedad.pentipzafflo,
       plagaenfermedad.pentipzafrai,
       plagaenfermedad.pentipzafhoj,
       plagaenfermedad.pentipdano,
       plagaenfermedad.pennomcomun,
       plagaenferme_cultivo.pcudescripci 
        FROM plagaenferme_cultivo
		INNER JOIN cultivo ON cultivo.culid=plagaenferme_cultivo.pcucultivo 
		INNER JOIN plagaenfermedad on plagaenfermedad.penid=plagaenferme_cultivo.pcuplagaenfe 
		WHERE plagaenfermedad.pennomcomun= '$obtenga' limit 1";

 $result = pg_query($con, $pg);

 echo "
 			<table border='0' style= 'border-radius:10px; border-style: double; padding: 4px'>
 			";

 				while ($row = pg_fetch_array($result)) {
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>NOMBRE DAÑO</th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['pennomcomun'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>TIPO DE DAÑO</th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['pentipdano'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>NOMBRE CIENTIFICO</th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['pennomcienti'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'> TIPO DE AGENTE CAUSAL</th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['pentipagecau'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>Tipo Manejo</th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['pentipmanejo'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>Zona Afectada Fruta</th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['pentipzaffru'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>Zona Afectada Tallo</th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['pentipzaftal'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>Zona Afectada Flor</th>";
					 echo "<td class='celdatdazul' colspan='2'>" . $row['pentipzafflo'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatd'>Zona Afectada Raiz</th>";
					 echo "<td class='celdatd' colspan='2'>" . $row['pentipzafrai'] . "</td>";
					 echo "</tr>";
					 echo "<tr>";
					 echo "<th colspan='2' class='celdatdazul'>Zona Afectada Hoja</th>";
 					echo "<td class='celdatdazul' colspan='2'>" . $row['pentipzafhoj'] . "</td>";
 					
 					echo "</tr>";

 				}

 				echo "</table>";
 				pg_close($con);

 			

?>

</div>