<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta http-equiv="&aacute; &eacute; &iacute; &oacute; &uacute; &ntilde;" content="text	/html; charset=ISO-8859-1" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="keywords" content="Fringila Responsive web template, Bootstrap Web 	Templates, Flat Web Templates, Andriod Compatible web 
template, Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<link rel="icon" type="image/png" href="img/logo.ico"/>
<link href="css/estilo.css" rel="stylesheet" type="text/css" media="all">
<title>SIGLaGranja</title>
<link rel="stylesheet" href="JS/validationEngine.jquery.css" type="text/css"/>
<script src="JS/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="JS/jquery.validationEngine-es.js" type="text/javascript" charset="utf-8"></script>
<script src="JS/jquery.validationEngine.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" src="JS/main.js"></script>
<script type="text/javascript" src="warning/jquery-1.3.2.js"></script>
<script src="JS/jquery.js"></script>
<script language="javascript" type="text/javascript">
	function Solo_Numerico(variable)
	{
		Numer=parseInt(variable);
		if (isNaN(Numer))
		{
			return "";
		}
		return Numer;
	}
	function ValNumero(Control)
	{
		Control.value=Solo_Numerico(Control.value);
	}
	function validar_texto(e) 
	{
		tecla = (document.all) ? e.keyCode : e.which;
		if (tecla==8) return true; 
		patron =/\D/;
		tecla_final = String.fromCharCode(tecla);
		return patron.test(tecla_final);
	} 
</script>
<script type="text/javascript">
    function permite(elEvento, permitidos) 
    {
  var numeros = "0123456789";
  var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var numeros_caracteres = numeros + caracteres;
  var teclas_especiales = [37];
  switch(permitidos) 
  {
    case 'num':
      permitidos = numeros;
      break;
    case 'car':
      permitidos = caracteres;
      break;
    case 'num_car':
      permitidos = numeros_caracteres;
      break;
  }
 
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;
  var caracter = String.fromCharCode(codigoCaracter); 
  var tecla_especial = false;
  for(var i in teclas_especiales) 
  {
    if(codigoCaracter == teclas_especiales[i]) 
    {
      tecla_especial = true;
      break;
    }
  }
 
  return permitidos.indexOf(caracter) != -1 || tecla_especial;
}
</script>
 <script type="text/javascript">
function fnc() 
{
	document.getElementById('table-scroll').onscroll = function() 
	{
	document.getElementById('fixedY').style.top = document.getElementById('table-scroll').scrollTop + 'px';
	document.getElementById('fixedX').style.left = document.getElementById('table-scroll').scrollLeft + 'px';
	};
}
window.onload = fnc;
</script>
<script>
    jQuery(document).ready(function()
    {
    	jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight",	 
    	autoPositionUpdate : true});
    	jQuery("#formID2").validationEngine('attach', {promptPosition : "bottomLeft",
    	autoPositionUpdate : true});
    	jQuery("#formID3").validationEngine('attach', {promptPosition : "bottomRight",	 
    	autoPositionUpdate : true});
    	jQuery("#formID4").validationEngine('attach', {promptPosition : "topLeft"});
    	jQuery("#formID5").validationEngine('attach', {promptPosition : "topLeft"});
    });
</script>
<script type="text/javascript">
function revisar(elemento) 
	{
	    if (elemento.value=="")
	    {
	        elemento.className='error';
	    }
	    else 
	    {
	        elemento.className='inp-form';
	    }
	}
function SelectVacio(select) 
    {
      	if (select.value=="")
      	{
      	  select.className='errors';
      	  return false;
	  	}
	  	else 
	  	{
      		select.className='select-form';
	  	}
    }
function revisarfecha(elemento) 
	{
    	if (elemento.value=="")
    	{
    	    elemento.className='error';
    	}
    	else 
    	{
    	    elemento.className='select-form';
    	}
	}
</script>
<script src="JS/jquery.js"></script>
<script type="text/javascript">
	$(document).ready(function()
	{
	    $("#boton").click(function()
	    {
	        $("#grilla").slideToggle("slow");
	    });
	});
</script>
<script type="text/javascript"> 
  espacios=function(input)
    {
      if (input.value==' ')
	  {
	    input.value=input.value.replace(' ','');
	  }
      else
      {
        input.value=input.value.replace('  ',' ');
      }
    }
</script>
<script type="text/javascript">
  	function solonumeros()
  	{
  		if (event.keyCode < 48 || event.keyCode > 57)
		{
			event.returnValue = false;
		};
  	}
</script><script src="JS/jquery-1.8.2.min.js"></script>
</head>