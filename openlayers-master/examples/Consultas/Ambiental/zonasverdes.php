<?php
$nombre=$_REQUEST['name']

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
            <img src="../../img/banner2.png" alt="we_are_champions " style="width: 100%;height: 100%" />
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
                        <th colspan="0" class="celdatd"><b>AREA:</b></th>
                        <td class="celdatd" colspan="0"><center><?php echo "$reg0"; ?></center></td>
                    </tr>

                    <tr>
                        <th colspan="0" class="celdatdazul"><b>UNIDAD:</b></th>
                         <td class="celdatdazul" colspan="0"><center><?php echo "$reg1"; ?></center></td>
                     </tr>

                     <tr>
                        <th colspan="0" class="celdatd"><b>EXTENSION:</b></th>
                        <td class="celdatd" colspan="0"><center><?php echo "$reg2"; ?></center></td>
                    </tr>

                    <tr>
                        <th colspan="0" class="celdatdazul"><b>U/M:</b></th>
                        <td class="celdatdazul" colspan="0"><center><?php echo "$nombre1"; ?></center></td>
                    </tr>    

                    <tr>
                        <th colspan="0" class="celdatd"><b>RESPONSABLE:</b></th>
                        <td class="celdatd" colspan="0"><center><?php echo "$reg4"; ?></center></td>
                    </tr>

                    <tr>
                        <th colspan="0" class="celdatd"><b>LATITUD:</b></th>
                        <td class="celdatd" colspan="0"><center><?php echo "$reg5"; ?></center></td>
                    </tr>

                    <tr>
                        <th colspan="0" class="celdatdazul"><b>HEMISFERIO:</b></th>
                        <td class="celdatdazul" colspan="0"><center><?php echo "$reg6"; ?></center></td>
                    </tr>

                    <tr>
                        <th colspan="0" class="celdatd"><b>LONGITUD:</b></th>
                        <td class="celdatd" colspan="0"><center><?php echo "$reg7"; ?></center></td>
                    </tr>

                    <tr>
                         <th colspan="0" class="celdatdazul"><b>HEMISFERIO:</b></th>
                        <td class="celdatdazul" colspan="0"><center><?php echo "$reg8"; ?></center></td>
                    </tr>

                    <tr>
                          <th colspan='0' class="celdatd"> <b>TIPO DE RIEGO:</b></th>
                          <td colspan="0" class="celdatd"><center>
                    <?php
                                include 'conexion.php';
                                $tip_riego=
                                    pg_query($con, "SELECT DISTINCT
                                                                                  
zonaverde.zvetipriego
FROM zonaverde
                  
                  INNER JOIN unidad ON unidad.uniid = zonaverde.zveunidad
                   WHERE unidad.uninombre='$nombre'" );

                                    while ($resultado= pg_fetch_array($tip_riego))
                                            {
                                                for($i=0;$i< 1 ;$i++) 
                                                    {
                                                        echo'<div  class="celdatd">'. $resultado[$i].'<BR>'.'</div>';
                                                    }
                                            }
                                       
                    ?>
                        </td>
                    </center>
                </td>
            </tr>

            <tr>
                         
                          <th colspan="0" class="celdatdazul"><b>DESCRIPCION:</b></th>
                        <td class="celdatdazul" colspan="0"><center><?php echo "$reg9"; ?></center></td>
                    </tr>



                    <td colspan="3" class="tabla0"><CENTER><B>VEGETAL</B></CENTER>
                        </td>


                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="vegetal" name="vegetal" onchange="showVegetal()">
                                <option disabled selected value="SeleccioneV">Seleccione Vegetal</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $mostrarVegetal=pg_query($con,
                                  "SELECT 
                                   vegnomcomun 
                                    FROM zonaverde_vegetal 
                                   INNER JOIN zonaverde ON zonaverde.zveid=zonaverde_vegetal.zovzonaverde 
                                   INNER JOIN unidad ON unidad.uniid=zonaverde.zveunidad
                                    INNER JOIN vegetal ON vegetal.vegid=zonaverde_vegetal.zovvegetal
                                     WHERE unidad.uninombre = '$nombre'" );

                                  while ($hola14=pg_fetch_array($mostrarVegetal)) {
                                    echo '<option value="'.$hola14[0].'">'.$hola14[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtVegetal"><b>Su informaci&oacuten sobre vegetales en las zonas verdes se listar&aacute aqui...</b></div>

                              

                            
                         
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

 <!-- ------------------------------------------------------------------------------------------- -->
<script src="../../js/jquery-1.12.0.min.js"></script>

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
function showVegetal() {
 var valor_vegetal=document.getElementById("vegetal").value;
 
 if(valor_vegetal=="SeleccioneV"){

 } else{
    
     $("#txtVegetal").load("getvegetal.php",{valor_vegetal:valor_vegetal})
    
    }

}
</script>
