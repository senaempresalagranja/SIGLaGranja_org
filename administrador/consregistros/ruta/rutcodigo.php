<?php
sleep(1);
include 'conexion.php';
if($_REQUEST)
{
	$codigo=$_REQUEST['rutidcodigo'];
	$query="SELECT * FROM ruta where rutidcodigo='".strtoupper($codigo)."'";
	$results=pg_query($query)or die('ok');

	if ($codigo == "") 
	{
		echo '<div id="Error"><input type="hidden" value="0" id="VercodRuta">No Valido</div>';
	}
	elseif ($codigo == " ")
	{
		echo '<div id="Error"><input type="hidden" value="0" id="VercodRuta">No Valido</div>';
	}
	else
	{
		if(pg_num_rows(@$results) > 0) 
		{
			echo '<div id="Error"><input type="hidden" value="0" id="VercodRuta">Ya Existe</div>';
		}
		else
		{
			echo '<div id="Success"><input type="hidden" value="1" id="VercodRuta">Disponible</div>';
		}
	}
}
?>
