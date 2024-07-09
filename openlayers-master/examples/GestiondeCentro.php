<!DOCTYPE html>
<html>
  <head>
  <?php include '../.././visitante/include/header.php';?>
   <!--esta etiqueta me facilita el idioma español -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--me varia las escalas de la Pagina -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!--Compatibilidad con los Dispositivos Móviles apple -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <title>
      Gestion de Centro
    </title>
  <!-- Llamo Todas Las Librerias para que mi Mapping se visualice Correctamente  -->
  <!--Aquí llamo La librería de Openlayers que me carga el Mapa Base del mundo -->
    <script src="../lib/OpenLayers.js"></script>
  <!--Aquí llamo una Librería que desarrollé para Configurar los Popups que salen al dar click en el marcador -->
    <script src="../lib/FeaturePopups.js"></script>
  <!--Aquí llamo una Librería que desarrollé para  Traer la Consulta en un Popup a Través de Funciones          Javascript -->
  <script type="text/javascript" src="Consultas/Js/PopupConsulta.js"></script>
  <!--Esta librería es Opcional por si queremos Cargar los estilos Propios de Open layers al Mapa Base -->
    <link rel="stylesheet" href="../theme/default/style.css" type="text/css">
  <!--En Esta Librería llamo todos los Estilos Desarrollados Para la interfaz gráfica del Aplicativo "SIGLaGranja Como Por ejemplo La ubicación del Banner,  Menú, Cuerpo y Pie de Página" -->
    <link rel="stylesheet" href="css/style1.4.css" type="text/css">
  <!--En Esta Librería llamo todos Los Estilos que va a poseer El Popup cuando se abra -->
    <link rel="stylesheet" type="text/css" href="Consultas/Css/StyleConsultaGestiondeCentro.css">
  <!--Aquí llamo Los Estilos propios del Visor -->
    <style type="text/css">
    .smallmap
    {
      width: 1000px;
      height: 500px;

    }

    </style>
        <script>
    //Este Método me Permite Utilizar una Seguridad cuando el Usuario Navegue en el Applicativo
    OpenLayers.ProxyHost = "proxy.cgi?url=";
    //Declaramos Dos Variables
    var map;


    //--Funcion Para Cargar El Mapa Con todos Sus Atributos
    function load() {
        //---Colocar el Mapa en el html bajo la etiqueta "MAPDIV"--//
        map = new OpenLayers.Map("mapdiv");

        //---Agregar el mapa de Open Street Map que es el Encargado de dibujar el mapa---//
        map.addLayer(new OpenLayers.Layer.OSM());

        //---Proyectamos el mapa Con las Coordenadas Mas utilizadas "WGS84"---//
        epsg4326 =  new OpenLayers.Projection("EPSG:4326");

        //---Mediante la Clase getProjectionObject le decimos que los marcadores y atributos del mapa se regiran bajo la proyeccion WGS84---//
        projectTo = map.getProjectionObject(); //The map projection (Spherical Mercator)
        map.setCenter(new OpenLayers.LonLat(-74.929449, 4.167448).transform(epsg4326, projectTo), 16);




        //---Creamos una variable que nos permita utilizar estilos para los marcadores por defecto---//


        //---Cargarmos Las Capas   en kml---//

        var La_Granja = new OpenLayers.Layer.Vector("Centro Agropecuario La Granja", {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: "kml/KmlAgricolas/lagranja.kml",
                format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 2
            
                })
            })

        });
        map.addLayers([La_Granja]);


        var PolAdminAM = new OpenLayers.Layer.Vector("Mapa Administrativo", {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
              url: "kml/KmlGestiondeCentro/ZonasComunes.kml",
                format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 2
                })
            })
                
        });

        map.addLayers([PolAdminAM]);

        var PolAdminCo = new OpenLayers.Layer.Vector("Construcciones", {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: "kml/",
                format: new OpenLayers.Format.KML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            })

        });



         var PolAdminPo = new OpenLayers.Layer.Vector("Postes", {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: "kml/kmlPostes/PostesGestion.kml",
                format: new OpenLayers.Format.KML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            })

        });
        map.addLayers([PolAdminPo]);

         
          var PoligonoCa= new OpenLayers.Layer.Vector("Canales", {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: "kml/kmlCanales/CanalZonasComunes.kml",
                format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 2
                })
            })

        });
           var PoligonoCr= new OpenLayers.Layer.Vector("Carreteables", {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: "kml/kmlCarreteables/CarreteableZonasComunes.kml",
                format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 2
                })
            })

        });
           map.addLayers([PolAdminCo, PoligonoCa, PoligonoCr]);

        <?php

        include 'Consultas/Agricola/conexion.php';
        $area="GESTION DE CENTRO";
      
       
       $unidad=pg_query($con,"SELECT  unidad.uniarea, unidad.uninombre, unidad.uniid, unidad.kml FROM unidad 
        inner join area on area.areid = unidad.uniarea
        WHERE  arenombre = '$area' ");





$gestiondecentro = pg_query($con, "SELECT  construccion.conidcodigo, construccion.connombre,  construccion.conunidad , construccion.kml FROM construccion
inner join unidad on unidad.uniid = construccion.conunidad
inner join area on area.areid = unidad.uniarea
WHERE arenombre IN ( 'GESTION', 'GESTION DE CENTRO') AND connombre  IN ('ALOJAMIENTO', 'AUDITORIO', 'AUTOGEOEVALUACION', 'BIBLIOTECA', 'BIENESTAR APRENDIZ', 'BLOQUE ADMINISTRATIVO','CAMERINO',
         'CAPILLA', 'COCINA-CASINO', 'COMEDOR', 'LABORATORIO DE FLORA Y FAUNA', 'LABORATORIO DE SUELOS', 'LABORATOTIO DE BIOTECNOLOGIA Y NANOTECNOLOGIA', 'OFICINA ENLACE RACK', 'OFICINA PSICOORIENTACION',
         'SALA DE INSTRUCTORES', 'SALA DE JUNTAS', 'SALON ESMERALDA', 'SEGURIDAD Y SALUD EN EL TRABAJO')");


$ambientes = pg_query($con, "SELECT  construccion.conidcodigo, construccion.connombre,  construccion.conunidad , construccion.kml FROM construccion
                inner join unidad on unidad.uniid = construccion.conunidad
                inner join area on area.areid = unidad.uniarea
                WHERE arenombre IN ( 'GESTION', 'GESTION DE CENTRO') AND connombre  IN ('AMBIENTE A1', 'AMBIENTE A2', 'AMBIENTE A3', 'AMBIENTE A4', 'AMBIENTE B1', 'AMBIENTE B2', 'AMBIENTE C1',
                'AMBIENTE AGRONICA Y MECATRONICA','AMBIENTE AUTOAGRONOMO','AMBIENTE D1', 'AMBIENTE D2', 'AMBIENTE E1', 'AMBIENTE E2', 'AMBIENTE E3', 'AMBIENTE E4', 'AMBIENTE GUADUA-GM','AMBIENTE H1',
                'AMBIENTE H2', 'AMBIENTE H3', 'AMBIENTE H4', 'AMBIENTE J1', 'AMBIENTE J2', 'AMBIENTE L1', 'AMBIENTE L2', 'AMBIENTE L3', 'AMBIENTE N1', 'AMBIENTE N2', 'AMBIENTE N3', 'AMBIENTE N4', 'AMBIENTE N5',
                'AT 1', 'AT 2', 'AT 3', 'AT 4', 'AT 5', 'AT 6')");

$gestion = pg_query($con, "SELECT  construccion.conidcodigo, construccion.connombre,  construccion.conunidad , construccion.kml FROM construccion
inner join unidad on unidad.uniid = construccion.conunidad
inner join area on area.areid = unidad.uniarea
WHERE arenombre IN ( 'GESTION', 'GESTION DE CENTRO') AND connombre  IN ('MERCA SENA', 'OFICINA SENA EMPRESA')");
                


        $cont = pg_num_rows($unidad);
        if ($cont <= 0) {
            echo "
            alert('No se han encontrado Algunos Puntos');
            console.log('posible error en la consulta de este archivo en la variable consulta');
            ";

        }


        while ($reg4 = pg_fetch_array($gestion)) {
          echo "
                      var ".str_replace(array('-' , ' ' ), "", $reg4[1])." = new OpenLayers.Layer.Vector('$reg4[1]', {
                      strategies: [new OpenLayers.Strategy.Fixed()],
                      protocol: new OpenLayers.Protocol.HTTP({
                          url: 'kml/KmlGestiondeCentro/$reg4[3]',
                          format: new OpenLayers.Format.KML({
                              extractStyles: true,
                              extractAttributes: true,
                              maxDepth: 2
                          })
                      })
  
                      });
  
                    ".str_replace(array('-' , ' ' ), "", $reg4[1]).".setVisibility(false);".                 
                    
                    "var group = [".str_replace(array('-' , ' ' ), "", $reg4[1])."];
                    for (var i=0; i < group.length; i++) { group[i].group = 'GESTION'; }
                    map.addLayers([".str_replace(array('-' , ' ' ), "", $reg4[1])."]);
                    ".str_replace(array('-' , ' ' ), "", $reg4[1]).".setVisibility(false);".
                    "";
      }

        
       
            
           

            

          while ($reg3 = pg_fetch_array($gestiondecentro)) {
            echo "
                        var ".str_replace(array('-' , ' ' ), "", $reg3[1])." = new OpenLayers.Layer.Vector('$reg3[1]', {
                        strategies: [new OpenLayers.Strategy.Fixed()],
                        protocol: new OpenLayers.Protocol.HTTP({
                            url: 'kml/KmlGestiondeCentro/$reg3[3]',
                            format: new OpenLayers.Format.KML({
                                extractStyles: true,
                                extractAttributes: true,
                                maxDepth: 2
                            })
                        })
    
                        });
    
                      ".str_replace(array('-' , ' ' ), "", $reg3[1]).".setVisibility(false);".                 
                      
                      "var group = [".str_replace(array('-' , ' ' ), "", $reg3[1])."];
                      for (var i=0; i < group.length; i++) { group[i].group = 'GESTION DE CENTRO'; }
                      map.addLayers([".str_replace(array('-' , ' ' ), "", $reg3[1])."]);
                      ".str_replace(array('-' , ' ' ), "", $reg3[1]).".setVisibility(false);".
                      "";
        }
      
       
      while ($reg = pg_fetch_array($ambientes)) {
        
        
            
            
        echo "
    
           var " . str_replace(array('-' , ' ' ), "", $reg[1]) . " = new OpenLayers.Layer.Vector('$reg[1]', {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: 'kml/KmlGestiondeCentro/$reg[3]',
                format: new OpenLayers.Format.KML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            })
    
            });
    
            ".str_replace(array('-' , ' ' ), "", $reg[1]).".setVisibility(false);".
    
            "var group = [".str_replace(array('-' , ' ' ), "", $reg[1])."];
            for (var i=0; i < group.length; i++) { group[i].group = 'AMBIENTES'; }
            map.addLayers([".str_replace(array('-' , ' ' ), "", $reg[1])."]);
            ".str_replace(array('-' , ' ' ), "", $reg[1]).".setVisibility(false);".
            "";
        
        }

       
            
            ?>
        
        var fpControl = new OpenLayers.Control.FeaturePopups({
            selectionBox: true,
            layers: [

             
              <?php
         $gestion = pg_query($con, "SELECT  construccion.conidcodigo, construccion.connombre,  construccion.conunidad , construccion.kml FROM construccion
         inner join unidad on unidad.uniid = construccion.conunidad
         inner join area on area.areid = unidad.uniarea
         WHERE arenombre IN ( 'GESTION', 'GESTION DE CENTRO') AND connombre  IN ('MERCA SENA', 'OFICINA SENA EMPRESA')");
         
          while ($reg4 = pg_fetch_array($gestion)) { 
            
          ?>

          [   
        
        <?php echo str_replace(array('-' , ' ' ), '', $reg4[1]);?> , {templates: {
            single: "<table border='0'><tr><td width='200px'><center><h5><?php echo $reg4[1] ;?></h5></td></tr><tr><td width='200px'><img src='img/logo.ico' class='LotesCultivos'></td></tr><tr><td><center><input type='submit' value='Ver m&aacute;s informaci&oacute;n' onclick='Gestion(`<?php echo $reg4[1] ;?>`)'></center></td></tr></table>",


        }}
           ],
    <?php
        }
        
    ?>



    

<?php
         $gestiondecentro = pg_query($con, "SELECT  construccion.conidcodigo, construccion.connombre,  construccion.conunidad , construccion.kml FROM construccion
         inner join unidad on unidad.uniid = construccion.conunidad
         inner join area on area.areid = unidad.uniarea
         WHERE arenombre IN ( 'GESTION', 'GESTION DE CENTRO') AND connombre  IN ('ALOJAMIENTO', 'AUDITORIO', 'AUTOGEOEVALUACION', 'BIBLIOTECA', 'BIENESTAR APRENDIZ', 'BLOQUE ADMINISTRATIVO','CAMERINO',
         'CAPILLA', 'COCINA-CASINO', 'COMEDOR', 'LABORATORIO DE FLORA Y FAUNA', 'LABORATORIO DE SUELOS', 'LABORATOTIO DE BIOTECNOLOGIA Y NANOTECNOLOGIA', 'MERCA SENA', 'OFICINA ENLACE RACK', 'OFICINA PSICOORIENTACION', 'OFICINA SENA EMPRESA',
         'SALA DE INSTRUCTORES', 'SALA DE JUNTAS', 'SALON ESMERALDA', 'SEGURIDAD Y SALUD EN EL TRABAJO')");
         
          while ($reg3 = pg_fetch_array($gestiondecentro)) { 
            
          ?>

          [   
        
        <?php echo str_replace(array('-' , ' ' ), '', $reg3[1]);?> , {templates: {
            single: "<table border='0'><tr><td width='200px'><center><h5><?php echo $reg3[1] ;?></h5></td></tr><tr><td width='200px'><img src='img/logo.ico' class='LotesCultivos'></td></tr><tr><td><center><input type='submit' value='Ver m&aacute;s informaci&oacute;n' onclick='Gestion(`<?php echo $reg3[1] ;?>`)'></center></td></tr></table>",


        }}
           ],
    <?php
        }
        
    ?>




<?php
                $ambientes = pg_query($con, "SELECT  construccion.conidcodigo, construccion.connombre,  construccion.conunidad , construccion.kml FROM construccion
                inner join unidad on unidad.uniid = construccion.conunidad
                inner join area on area.areid = unidad.uniarea
                WHERE arenombre IN ( 'GESTION', 'GESTION DE CENTRO') AND connombre  IN ('AMBIENTE A1', 'AMBIENTE A2', 'AMBIENTE A3', 'AMBIENTE A4', 'AMBIENTE B1', 'AMBIENTE B2', 'AMBIENTE C1',
                'AMBIENTE AGRONICA Y MECATRONICA','AMBIENTE AUTOAGRONOMO','AMBIENTE D1', 'AMBIENTE D2', 'AMBIENTE E1', 'AMBIENTE E2', 'AMBIENTE E3', 'AMBIENTE E4', 'AMBIENTE GUADUA-GM','AMBIENTE H1',
                'AMBIENTE H2', 'AMBIENTE H3', 'AMBIENTE H4', 'AMBIENTE J1', 'AMBIENTE J2', 'AMBIENTE L1', 'AMBIENTE L2', 'AMBIENTE L3', 'AMBIENTE N1', 'AMBIENTE N2', 'AMBIENTE N3', 'AMBIENTE N4', 'AMBIENTE N5',
                'AT 1', 'AT 2', 'AT 3', 'AT 4', 'AT 5', 'AT 6')");
                

                while ($reg = pg_fetch_array($ambientes)) { 
              ?>

          [   
        
        <?php echo str_replace(array('-' , ' ' ), '', $reg[1]);?> , {templates: {
            single: "<table border='0'><tr><td width='200px'><center><h5><?php echo $reg[1] ;?></h5></td></tr><tr><td width='200px'><img src='img/logo.ico' class='LotesCultivos'></td></tr><tr><td><center><input type='submit' value='Ver m&aacute;s informaci&oacute;n' onclick='Gestion(`<?php echo $reg[1] ;?>`)'></center></td></tr></table>",


        }}
           ],
    <?php
        }
        
    ?>



            ]

        });
               
 map.addControl(fpControl);
map.addControl(new OpenLayers.Control.LayerSwitcherGroups());
map.addControl(new OpenLayers.Control.MousePosition());
map.addControl(new OpenLayers.Control.ScaleLine());
map.addControl(new OpenLayers.Control.OverviewMap());

      }
    </script>


    <body onload="load()">
       <!-- Descripcion para el contenedor principal, campo de trabajo-->
    <div id="section">
    
      <!-- Descripcion para el Banner-->
        <div id="banner">
            <?php include '../include/banner.php';  ?>
        </div>
        <!-- Descripcion para el Menu-->
        <div id="nav">
           <?php include '../include/menu.php'; ?>
        </div>
        <!-- Descripcion para el cuerpo de la pagina-->
        <div class="flotante">
  <UL>
   <ul>
       <button class="INICIO">
        <li> <a href="LaGranja.php" class="menu" ><font color="black">Centro Agropecuario La Granja</a></li>
    </button>
</ul>
<ul>
  <button class="AGRICOLA">
    <li> <a href="Agricola2.php" class="menu" ><font color="black">Agricola</a></li>
</button>
</ul>
<ul>
  <button class="AGROINDUSTRIA">
    <li> <a href="Agroindustria.php"  class="menu" ><font color="black">Agroindustria</a></li>
</button>
</ul>
<ul>
  <button class="MECANIZACION">
     <li><a href="Mecanizacion.php" class="menu" ><font color="black">Mecanizacion</a></li> 
 </button>
</ul>
<ul>
    <button class="PECUARIA">
      <li> <a href="Pecuaria2.php" class="menu" ><font color="black">Pecuaria</a></li> 
  </button>
</ul>
<ul>
    <button class="AMBIENTAL">
      <li> <a href="Ambiental.php" class="menu" ><font color="black">Ambiental</a></li> 
  </button>
</ul>
<ul>
    <button class="GESTION">
      <li> <a href="GestiondeCentro.php" class="menu" ><font color="black">Gestion/Gestion de Centro</a></li> 
  </button>
</ul>
<ul>
    <button class="ZONASCOMUNES">
      <li> <a href="Zonas_Comunes2.php" class="menu" ><font color="black">Zonas Comunes</a></li> 
  </button>
</ul>
</UL>
</div>
 <div id="mapdiv" class="smallmap" style="position: relative;" onload="load()"></div>
 
       
    
     
        <!-- Descripcion para el pie de pagina-->
        <div id="foot">
         <?php include '../include/piepagina.php' ?>
        </div>      
    </div>        
  </body>
</html>
   