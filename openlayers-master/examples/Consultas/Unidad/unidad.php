
<?php
$nombre=$_REQUEST['name'];

?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8"/>
        <title><?php echo $nombre;?></title>
        <link rel="stylesheet" type="text/css" href="../css/Consulta.css">
    <body>
    <header>
        <div style="height: 90px">
            <img src="../../img/banner2.png" alt="we_are_champions " style="width: 100%;max-height: 100%" />
        </div> 
    </header>
  <?php
    include 'conexion.php';

            $consulta=pg_query($con,"SELECT 
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
                  inner join area on area.areid = unidad.uniarea
                   WHERE unidad.uninombre='$nombre'");
                           
            while ($Reg_Construcc= pg_fetch_array($consulta)) 
                {

           
                    $reg0=$Reg_Construcc[0];
                    $reg1=$Reg_Construcc[1];
                    $reg2=$Reg_Construcc[2];
                    $reg3=$Reg_Construcc[3];
                    $reg4=$Reg_Construcc[4];
                    $reg5=$Reg_Construcc[5];
                    $reg6=$Reg_Construcc[6];
                    $reg7=$Reg_Construcc[7];
                    $reg8=$Reg_Construcc[8];
                    $reg9=$Reg_Construcc[9];
                    $res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid=$reg3");
                                        while($registro_constr=pg_fetch_array($res1))
                                            {
                                                $nombre1=($registro_constr[1]);
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
                             <div ><center><b>FICHA TECNICA: <?php echo $nombre;?></b></center></div><br>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>AREA:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg0"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatdazul"><b>UNIDAD:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg1"; ?></td>
                    </tr>
                        <td colspan="0" class="celdatd"><b>EXTENSION:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg2"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatdazul"><b>U/M:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$nombre1"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>RESPONSABLE:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg4"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>LATITUD:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg5"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatdazul"><b>HEMISFERIO:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg6"; ?></td>
                    </tr>
                     <tr>
                        <td colspan="0" class="celdatd"><b>LONGITUD:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg7"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatdazul"><b>HEMISFERIO:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg8"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatdazul"><b>DESCRIPCION:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg9"; ?></td>
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

                                  
                              <div id="txtRedlo"><b>Su informaci&oacuten sobre Redes L&oacutegicas se listar&aacute aqui...</b></div>

                              

                            
                         
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

                                  
                              <div id="txtRedsa"><b>Su informaci&oacuten sobre Redes Sanitarias se listar&aacute aqui...</b></div>

                              

                            
                         
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
                    <a href="../descarga_excel/PistaTractores_exc.php" target="_blank">
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