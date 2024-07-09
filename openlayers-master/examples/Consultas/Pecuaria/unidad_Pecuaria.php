<?php
$nombre=$_REQUEST['name']

?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8"/>
        <title><?php echo $nombre;?></title>

        <style type="text/css">
        
            #titulo
                {
                    font-family: Cambria;
                    text-align: center;
                }
            .imagen
                {
                    width: 32px;
                    text-align: center;
                }
            tr
                {
                    font-size: 12px;  
                }

       
            .whilefor
                {
                    font-weight: normal;
                    background-color: #F2F2F2;
                }
            .whilefor1
                {
                    font-weight: normal;
                    background-color:#E0E6F8;
                }
            .celdatd
                {
                    background-color: #F2F2F2;
                    border-style: solid 10px;
                }
            .celdatdazul
                {
                    background-color:#E0E6F8; 
                }
            .tabla0
                {
                    background-color:#2E64FE;
                    color:white;  

                }
        </style>   
    </head>
    <body>
        <header>
    
    
                <div style="height: 90px">
                    <img src="../../img/banner2.png" alt="we_are_champions " style="width: 100%;max-height: 100%" />                
                </div>                
        </header>
<?php
    include 'Conexion.php';
    $Consulta = pg_query
                        ($con,
                                "SELECT
                                    area.arenombre,
                                    unidad.uninombre,
                                    unidad.uniextension,
                                    unidad.uniunimedida,
                                    unidad.uniresponsab,
                                    unidad.unilatitud,
                                    unidad.uniorientlat,
                                    unidad.unilongitud,
                                    unidad.uniorientlon,
                                    unidad.unidescripci
                                FROM unidad
                                INNER JOIN area ON area.areid= unidad.uniarea
                                WHERE unidad.uninombre = '$nombre'"
                        );

                                while ($Reg_LotCul= pg_fetch_array($Consulta)) 
                                    {
                                        $reg0=$Reg_LotCul[0];
                                        $reg1=$Reg_LotCul[1];
                                        $reg2=$Reg_LotCul[2];   
                                        $reg3=$Reg_LotCul[3];
                                        $reg4=$Reg_LotCul[4];
                                        $reg5=$Reg_LotCul[5]; 
                                        $reg6=$Reg_LotCul[6]; 
                                        $reg7=$Reg_LotCul[7]; 
                                        $reg8=$Reg_LotCul[8]; 
                                        $reg9=$Reg_LotCul[9];
                                        $res3=pg_query($con,
                                                             "SELECT * FROM unidad_medida WHERE umeid='$reg3'"
                                                      );

                                while ($Registro_Unidad=pg_fetch_array($res3))
                                    {        
                                        $Unidad_Medida=($Registro_Unidad[1]);
                                    }
                    }

?>
        <section>
        <article>
            <center>
                <table border='0' width="2%" style="border: solid #000;    border-radius: 10px;
                border-style: double; padding: 4px; width: 500px">
                    <tr>
                        <td colspan="4" class="tabla0">
                             <div >
                                <center>
                                    <b>
                                        FICHA TECNICA: UNIDAD <?php echo $nombre;?>
                                    </b>
                                </center>
                            </div>
                            <br>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd">
                            <b>
                                AREA:
                            </b>
                        </td>

                        <td class="celdatd" colspan="2">
                            <?php 
                                echo "$reg0"; 
                            ?>
                        </td>                      
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatdazul">
                            <b>
                                UNIDAD:
                            </b>
                        </td>
                        <td class="celdatdazul" colspan="2">
                            <?php
                                 echo "$reg1"; 
                            ?>
                        </td>
                    </tr>
                    <tr>
                        <td class="celdatdazul">
                            <b>
                                EXTENSION:
                            </b>
                        </td>
                        <td class="celdatdazul">
                            <?php
                                 echo "$reg2"; ?>
                        </td>
                        <td class="celdatdazul">
                            <?php
                                 echo "$Unidad_Medida"; 
                            ?>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd">
                            <b>
                                RESPONSABLE:
                            </b>
                        </td>
                        <td class="celdatd" colspan="2">
                            <?php
                                echo "$reg4"; 
                             ?>
                        </td>
                    </tr>
                    <tr>
                        <td colspan='0' class="celdatd">
                            <b>
                                LATITUD:
                            </b>
                        </td>
                        <td class="celdatd">
                            <?php 
                                echo "$reg5"; 
                            ?>
                        </td>
                        <td class="celdatd">
                            <?php

                                $norte="NORTE";
                                $sur="SUR";

                                if ($reg6==$norte)
                                    {
                                        echo"<B>N°</B>";
                                    }
                                 else 
                                    {
                                        echo"<B>S°</B>";
                                     }
                            //3133480382joha-jhoa Gavi

                            ?>
                        </td>
                    </tr>
                    <tr>
                        <td class="celdatdazul">
                            <b>
                                LONGITUD:
                            </b>
                        </td>
                        <td class="celdatdazul">
                            <?php
                                 echo "$reg7"; 
                            ?>
                        </td>

                        <td class="celdatdazul">
                            <?php

                                $norte1="NORTE";
                                $sur1="SUR";                            

                                if ($reg8==$norte1)
                                    {
                                        echo"<B>N°</B>";
                                    }
                                else 
                                    {
                                        echo"<B>S°</B>";
                                    }

                            ?>
                        </td>
                    </tr>
                     <tr class="td2">
                        <td colspan='0' class="celdatd">
                            <b>CANALES:
                            </b>
                        </td>                  
                        <td colspan="2" class="celdatd">
                    <?php
                                include 'conexion.php';
                                $con_canales= 
                                    pg_query($con,
                                                    "SELECT DISTINCT
                                                                    canal.cannombre,
                                                                    unidad.uninombre
                                                    FROM unidad_canal                       
                                                    INNER JOIN canal ON canal.canid= unidad_canal.cuncanal
                                                    INNER JOIN unidad ON unidad.uniid= unidad_canal.cununidad
                                                    WHERE unidad.uninombre='$nombre'" );
                                    while ($resultado= pg_fetch_array($con_canales))
                                        {

                                            for($i=0;$i<count($con_canales);$i++) 
                                                {
                                                    echo'<div class="whilefor" class="celdatdazul">'. $resultado[$i].'<BR>'.'</div>';
                                                }
                                        }
                    ?>
                        </td>
                    </tr>
                    <td colspan="3" class="tabla0"><CENTER><B>CONSTRUCCIONES</B></CENTER>
                        </td>

                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="construccion" name="construccion" onchange="showUser()">
                                <option disabled selected value="Seleccione">Selecciona Construcci&oacuten</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarCons=pg_query($con,
                                  "SELECT DISTINCT
                                  construccion.connombre,
                                  unidad.uninombre
                  FROM construccion                       
                  INNER JOIN unidad ON unidad.uniid= construccion.conunidad
                  WHERE unidad.uninombre='$nombre'" );

                                  while ($hola=pg_fetch_array($mostrarCons)) {
                                    echo '<option value="'.$hola[0].'">'.$hola[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtHint"><b>Su informaci&oacuten sobre construcciones se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>

                    <td colspan="3" class="tabla0"><CENTER><B>ESPECIES</B></CENTER>
                        </td>


                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="especie" name="especie" onchange="showEspecie()">
                                <option disabled selected value="SeleccioneE">Seleccionar Especies</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarEspecie=pg_query($con,
                                  "SELECT DISTINCT
                                  especie.espnomcomun,
                                  unidad.uninombre
                  FROM especie                      
                  INNER JOIN unidad ON unidad.uniid= especie.espunidad 
                  WHERE unidad.uninombre='$nombre'" );

                                  while ($hola6=pg_fetch_array($mostrarEspecie)) {
                                    echo '<option value="'.$hola6[0].'">'.$hola6[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtEspecie"><b>Su informaci&oacuten sobre especies se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                    


                    <td colspan="3" class="tabla0"><CENTER><B>RAZAS</B></CENTER>
                        </td>

                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="raza" name="raza" onchange="showRaza()">
                                <option disabled selected value="SeleccioneRa">Seleccionar Raza</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarRaza=pg_query($con,
                                  "SELECT DISTINCT   
                                  raza.raznombre,
                                  unidad.uninombre
                  FROM especie_raza 
                  INNER JOIN raza ON raza.razid = especie_raza.eraraza
                  INNER JOIN especie ON especie.espid = especie_raza.eraespecie
                  INNER JOIN unidad ON unidad.uniid = especie.espunidad
                  INNER JOIN area ON area.areid= unidad.uniarea 
                  WHERE unidad.uninombre='$nombre'" );

                                  while ($hola7=pg_fetch_array($mostrarRaza)) {
                                    echo '<option value="'.$hola7[0].'">'.$hola7[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtRaza"><b>Su informaci&oacuten sobre razas se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                    

                    <td colspan="3" class="tabla0"><CENTER><B>PLAGAS EN LA PRODUCCI&OacuteN</B></CENTER>
                        </td>

                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="plagap" name="plagap" onchange="showPlagaP()">
                                <option disabled selected value="SeleccionePP">Seleccionar Plaga en la Producci&oacuten</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarPlagaP=pg_query($con,
                                  "SELECT DISTINCT
                                  plaga.planomcomun, 
                                  unidad.uninombre
          FROM plaga_especie 
          INNER JOIN plaga ON plaga.plaid= plaga_especie.pesplaga
          INNER JOIN especie ON especie.espid = plaga_especie.pesespecie
          INNER JOIN unidad ON unidad.uniid= especie.espunidad
          WHERE unidad.uninombre='$nombre'" );

                                  while ($hola8=pg_fetch_array($mostrarPlagaP)) {
                                    echo '<option value="'.$hola8[0].'">'.$hola8[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtPlagaP"><b>Su informaci&oacuten sobre plagas en la producci&oacuten se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                    

                    <td colspan="3" class="tabla0"><CENTER><B>ENFERMEDADES EN LA PRODUCCI&OacuteN</B></CENTER>
                        </td>

                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="enfermedadp" name="enfermedadp" onchange="showEnfermedadP()">
                                <option disabled selected value="SeleccioneEP">Seleccionar Enfermedades en la Producci&oacuten</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarEnfermedadP=pg_query($con,
                                  "SELECT DISTINCT
                                  enfermedad.enfnomcomun, 
                                  unidad.uninombre
      FROM enfermedad_especie
      INNER JOIN enfermedad ON enfermedad.enfid = enfermedad_especie.eesenfermeda
      INNER JOIN especie ON especie.espid = enfermedad_especie.eesespecie
      INNER JOIN unidad ON unidad.uniid= especie.espunidad
      WHERE unidad.uninombre='$nombre'" );

                                  while ($hola9=pg_fetch_array($mostrarEnfermedadP)) {
                                    echo '<option value="'.$hola9[0].'">'.$hola9[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtEnfermedadP"><b>Su informaci&oacuten sobre enfermedades en la producci&oacuten se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                    

                        <td colspan="3" class="tabla0"><CENTER><B>POSTES</B></CENTER>
                        </td>


                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="poste" name="poste" onchange="showPoste()">
                                <option disabled selected value="SeleccioneP">Selecciona Poste</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarPoste=pg_query($con,
                                  "SELECT DISTINCT
                                  poste.posidcodigo, 
                                  unidad.uninombre
              FROM poste                         
              INNER JOIN unidad ON unidad.uniid= poste.posunidad
              WHERE unidad.uninombre='$nombre'" );

                                  while ($hola1=pg_fetch_array($mostrarPoste)) {
                                    echo '<option value="'.$hola1[0].'">'.$hola1[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtPoste"><b>Su informaci&oacuten sobre postes se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                    <td colspan="3" class="tabla0"><CENTER><B>REDES ELECTRICAS</B></CENTER>
                        </td>



                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="redElectrica" name="redElectrica" onchange="showRedel()">
                                <option disabled selected value="SeleccioneRE">Selecciona Red Electrica</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarRedel=pg_query($con,
                                  "SELECT DISTINCT
                                                                        construccion.connombre, 
                                                                        unidad.uninombre
                                                FROM redelectrica
                                                INNER JOIN construccion ON construccion.conid= redelectrica.eleconstrucc
                                                INNER JOIN unidad ON unidad.uniid= construccion.conunidad
                                                WHERE unidad.uninombre='$nombre'" );

                                  while ($hola2=pg_fetch_array($mostrarRedel)) {
                                    echo '<option value="'.$hola2[0].'">'.$hola2[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtRedel"><b>Su informaci&oacuten sobre Redes El&eacutectricas se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>

                    <td colspan="3" class="tabla0"><CENTER><B>REDES GAS</B></CENTER>
                        </td>

                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="redgas" name="redgas" onchange="showRedG()">
                                <option disabled selected value="SeleccioneRG">Selecciona Red Gas</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarRedG=pg_query($con,
                                  "SELECT DISTINCT 
                                  construccion.connombre, 
                                  unidad.uninombre
          FROM redgas
          INNER JOIN construccion ON construccion.conid= redgas.rgaconstrucc 
          INNER JOIN unidad ON unidad.uniid= construccion.conunidad
          WHERE unidad.uninombre='$nombre'" );

                                  while ($hola10=pg_fetch_array($mostrarRedG)) {
                                    echo '<option value="'.$hola10[0].'">'.$hola10[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtRedG"><b>Su informaci&oacuten sobre red de gas se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                    
                    <td colspan="3" class="tabla0"><CENTER><B>REDES LOGICAS</B></CENTER>
                        </td>


                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="redLogica" name="redLogica" onchange="showRedlo()">
                                <option disabled selected value="SeleccioneRL">Selecciona Red Logica</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarRedlo=pg_query($con,
                                  "SELECT DISTINCT 
                                  construccion.connombre, 
                                  unidad.uninombre
          FROM redlogica
          INNER JOIN construccion ON construccion.conid= redlogica.rloconstrucc 
          INNER JOIN unidad ON unidad.uniid= construccion.conunidad
          WHERE unidad.uninombre='$nombre'" );

                                  while ($hola3=pg_fetch_array($mostrarRedlo)) {
                                    echo '<option value="'.$hola3[0].'">'.$hola3[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtRedlo"><b>Su informaci&oacuten sobre redes l&oacutegicas se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>

                    
                    


                    <td colspan="3" class="tabla0"><CENTER><B>REDES SANITARIAS</B></CENTER>
                        </td>



                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="redSanitaria" name="redSanitaria" onchange="showRedsa()">
                                <option disabled selected value="SeleccioneRS">Selecciona Red Sanitaria</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarRedsa=pg_query($con,
                                  "SELECT DISTINCT 
                                  construccion.connombre, 
                                  unidad.uninombre
          FROM redsanitaria
          INNER JOIN construccion ON construccion.conid= redsanitaria.rsaconstrucc 
          INNER JOIN unidad ON unidad.uniid= construccion.conunidad
          WHERE unidad.uninombre='$nombre'" );

                                  while ($hola4=pg_fetch_array($mostrarRedsa)) {
                                    echo '<option value="'.$hola4[0].'">'.$hola4[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtRedsa"><b>Su informaci&oacuten sobre redes sanitarias se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                    <td colspan="3" class="tabla0"><CENTER><B>RUTAS</B></CENTER>
                        </td>


                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="ruta" name="ruta" onchange="showRuta()">
                                <option disabled selected value="Seleccioneruta">Selecciona Ruta</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarRuta=pg_query($con,
                                  "SELECT DISTINCT 
                                  ruta.rutnombre, 
                                  unidad.uninombre
              FROM ruta_unidad
              INNER JOIN ruta ON ruta.rutid= ruta_unidad.runruta
              INNER JOIN unidad ON unidad.uniid= ruta_unidad.rununidad
              WHERE unidad.uninombre='$nombre'" );

                                  while ($hola5=pg_fetch_array($mostrarRuta)) {
                                    echo '<option value="'.$hola5[0].'">'.$hola5[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtRuta"><b>Su informaci&oacuten sobre Rutas se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                        <!-- <tr>
                    <td class="celdatdazul" colspan="4">
                       <center>
                    <a href="../descarga_excel/Unidad_Pecuaria.php?name= <?php //echo $nombre;?>" target="_blank">
                            <img src="../img/Excel.png" title="Exportar Excel" class="imagen">
                    </a> 
                       </center>     
                        </td>
                    </tr> -->
                        

<!-- ------------------------------------------------------------------------------------------- -->
<script src="../../js/jquery-1.12.0.min.js"></script>
         <script>
function showUser() {
 var valor_construccion=document.getElementById("construccion").value;
 
 if(valor_construccion=="Seleccione"){

 } else{
    
     $("#txtHint").load("getconstruccion.php",{valor_construccion:valor_construccion})
    
    }

}
</script>

<script>
function showEspecie() {
 var valor_especie=document.getElementById("especie").value;
 
 if(valor_especie=="SeleccioneE"){

 } else{
    
     $("#txtEspecie").load("getespecies.php",{valor_especie:valor_especie})
    
    }

}
</script>

<script>
function showRaza() {
 var valor_raza=document.getElementById("raza").value;
 
 if(valor_raza=="SeleccioneRa"){

 } else{
    
     $("#txtRaza").load("getrazas.php",{valor_raza:valor_raza})
    
    }

}
</script>

<script>
function showPlagaP() {
 var valor_plagaproduccion=document.getElementById("plagap").value;
 
 if(valor_plagaproduccion=="SeleccionePP"){

 } else{
    
     $("#txtPlagaP").load("getplapro.php",{valor_plagaproduccion:valor_plagaproduccion})
    
    }

}
</script>

<script>
function showEnfermedadP() {
 var valor_enfermedadproduccion=document.getElementById("enfermedadp").value;
 
 if(valor_enfermedadproduccion=="SeleccioneEP"){

 } else{
    
     $("#txtEnfermedadP").load("getenfepro.php",{valor_enfermedadproduccion:valor_enfermedadproduccion})
    
    }

}
</script>

<script>
function showPoste() {
 var valor_poste=document.getElementById("poste").value;
 
 if(valor_poste=="SeleccioneP"){

 } else{
    
     $("#txtPoste").load("getposte.php",{valor_poste:valor_poste})
    
    }

}
</script>

<script>
function showRedel() {
 var valor_redelectrica=document.getElementById("redElectrica").value;
 
 if(valor_redelectrica=="SeleccioneRE"){

 } else{
    
     $("#txtRedel").load("getredel.php",{valor_redelectrica:valor_redelectrica})
    
    }

}
</script>

<script>
function showRedG() {
 var valor_redgas=document.getElementById("redgas").value;
 
 if(valor_redgas=="SeleccioneRG"){

 } else{
    
     $("#txtRedG").load("getredgas.php",{valor_redgas:valor_redgas})
    
    }

}
</script>

<script>
function showRedlo() {
 var valor_redlogica=document.getElementById("redLogica").value;
 
 if(valor_redlogica=="SeleccioneRL"){

 } else{
    
     $("#txtRedlo").load("getredlo.php",{valor_redlogica:valor_redlogica})
    
    }

}
</script>

<script>
function showRedsa() {
 var valor_redsanitaria=document.getElementById("redSanitaria").value;
 
 if(valor_redsanitaria=="SeleccioneRS"){

 } else{
    
     $("#txtRedsa").load("getredsa.php",{valor_redsanitaria:valor_redsanitaria})
    
    }

}
</script>

<script>
function showRuta() {
 var valor_ruta=document.getElementById("ruta").value;
 
 if(valor_ruta=="Seleccioneruta"){

 } else{
    
     $("#txtRuta").load("getrutas.php",{valor_ruta:valor_ruta})
    
    }

}
</script>

