
$(document).ready(function()
{
	verlistado()
    //CARGAMOS EL ARCHIVO QUE NOS LISTA LOS REGISTROS, CUANDO EL DOCUMENTO ESTA LISTO


})
function verlistado()
{ //FUNCION PARA MOSTRAR EL LISTADO EN EL INDEX POR JQUERY
	var randomnumber=Math.random()*11;
	$.post("grillas/gri_lote/libs/lote.php", 
	{
		randomnumber:randomnumber
	}, function(data)
	{
		$("#contenido").html(data);
	});
}