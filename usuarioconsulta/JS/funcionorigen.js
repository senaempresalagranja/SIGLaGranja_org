function obtiene_http_request()
{
var req = false;
try
  {
    req = new XMLHttpRequest(); /* p.e. Firefox */
  }
catch(err1)
  {
  try
    {
     req = new ActiveXObject("Msxml2.XMLHTTP");
  /* algunas versiones IE */
    }
  catch(err2)
    {
    try
      {
       req = new ActiveXObject("Microsoft.XMLHTTP");
  /* algunas versiones IE */
      }
      catch(err3)
        {
         req = false;
        }
    }
  }
return req;
}
var miPeticion = obtiene_http_request();
//***************************************************************************************
function from(id,ide,url){
		var mi_aleatorio=parseInt(Math.random()*99999999);//para que no guarde la p�gina en el cach�...
		var vinculo=url+"?id="+id+"&rand="+mi_aleatorio;
		//alert(vinculo);
		miPeticion.open("GET",vinculo,true);//ponemos true para que la petici�n sea asincr�nica
		miPeticion.onreadystatechange=miPeticion.onreadystatechange=function(){
               if (miPeticion.readyState==4)
               {
				   //alert(miPeticion.readyState);
                       if (miPeticion.status==200)
                       {
                                //alert(miPeticion.status);
                               //var http=miPeticion.responseXML;
                               var http=miPeticion.responseText;
                               document.getElementById(ide).innerHTML= http;

                       }
               }/*else
               {
			document.getElementById(ide).innerHTML="<img src='ima/loading.gif' title='cargando...' />";

                }*/
       }
       miPeticion.send(null);

}
//************************************************************************************************
function limpiar()
{
	document.form.reset();
	
}

addEvent(window,'load',inicializarEventos,false);

function inicializarEventos()
{
  var select1=document.getElementById('origen');
  addEvent(select1,'change',mostrarlugarorigen,false);
}

var conexion1;
function mostrarlugarorigen(e) 
{
  var codigo=document.getElementById('origen').value;
  if (codigo!=0)
  {
    conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open('GET','include/desplegableorigen.php?cod='+codigo, true);
    conexion1.send(null);
  }
  else
  {
    var select2=document.getElementById('lugarorigen');
    select2.options.length=0;
  }
}

function procesarEventos()
{
  if(conexion1.readyState == 4)
  {
    var d=document.getElementById('espera');
    d.innerHTML = '';
    var xml = conexion1.responseXML;
    var pals=xml.getElementsByTagName('lugarorigen');
    var select2=document.getElementById('lugarorigen');
    select2.options.length=0;
    for(f=0;f<pals.length;f++)
    {
      var op=document.createElement('option');
      var texto=document.createTextNode(pals[f].firstChild.nodeValue);
      op.appendChild(texto);
      select2.appendChild(op);
    } 
  } 
  else 
  {
    var d=document.getElementById('espera');
    d.innerHTML = '<img src="../cargando.gif">';
  }
}


//***************************************
//Funciones comunes a todos los problemas
//***************************************
function addEvent(elemento,nomevento,funcion,captura)
{
  if (elemento.attachEvent)
  {
    elemento.attachEvent('on'+nomevento,funcion);
    return true;
  }
  else  
    if (elemento.addEventListener)
    {
      elemento.addEventListener(nomevento,funcion,captura);
      return true;
    }
    else
      return false;
}

function crearXMLHttpRequest() 
{
  var xmlHttp=null;
  if (window.ActiveXObject) 
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  else 
    if (window.XMLHttpRequest) 
      xmlHttp = new XMLHttpRequest();
  return xmlHttp;
}