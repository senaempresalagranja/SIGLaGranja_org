
<?php

$nombre=$_REQUEST['name']

?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8"/>
        
        <title>CULTIVO <?php echo $nombre;?></title>
        <style type="text/css">
        
        #titulo
        {
            font-family: Cambria;
            text-align: center;
        }
        .imagen{
            width: 32px;
            text-align: center;
        }
        tr{
            font-size: 12px;

           
        }
       
        .whilefor{
            font-weight: normal;
            background-color: #F2F2F2;
        }
        .whilefor1{
            font-weight: normal;
            background-color:#E0E6F8;
            
        }
        .celdatd{
            background-color: #F2F2F2;
            border-style: solid 10px;
        }
        .celdatdazul{
            background-color:#E0E6F8; 
        }
        .tabla0{
            background-color:#2E64FE;
            color:white;  

        }
        </style>   
<script src="../../js/jquery-1.12.0.min.js"></script>
         <script>
function showUser() {
 var valor_plaga=document.getElementById("users").value;
 
 if(valor_plaga=="Seleccione"){

 } else{
    
     $("#txtHint").load("getuser.php",{valor_plaga:valor_plaga})
    
    }

}
</script>

    </head>
    <body>
        <header>
    
    
                   <div style="height: 90px">
                <img src="../../img/banner2.png" alt="we_are_champions " style="width: 100%;max-height: 100%" />                
            </div> 
               

        </header>

        

           <?php

include 'conexion.php';

            $consulta=pg_query($con,"SELECT  area.arenombre,
       unidad.uninombre,   
       cultivo.culextension,
       cultivo.culunimedida,
       cultivo.cullatitud,
       cultivo.culorientlat,
       cultivo.cullongitud,
       cultivo.culorientlon,
       cultivo.culnomcomun,
       cultivo.culnomcienti,
       cultivo.culorigen,
       cultivo.cullugarorig,
       cultivo.culclimafavo,
       cultivo.culdistsiemb,
       cultivo.culvidautil,
       cultivo.cultiempvida,
       cultivo.culunimedsie,
       unidad_cultivo.lcufechsiemb,
       unidad_cultivo.lcufechcosec,
       unidad_cultivo.lcuproduesti,
       unidad_cultivo.lcuunimedest,
       unidad_cultivo.lcuprodureal,
       unidad_cultivo.lcuunimedrea,
       unidad_cultivo.lcuresponsab,
       unidad_cultivo.lcusuelo,
       plagaenfermedad.pentipdano,
       plagaenfermedad.pennomcomun,
       plagaenfermedad.pennomcienti,
       plagaenfermedad.pentipagecau,
       plagaenfermedad.pentipmanejo,
       plagaenfermedad.pentipzaffru,
       plagaenfermedad.pentipzaftal,
       plagaenfermedad.pentipzafflo,
       plagaenfermedad.pentipzafrai,
       plagaenfermedad.pentipzafhoj,
       canal.cannombre,
       suelo.suefhumedad,
                suelo.sueftextura,
                suelo.sueqph,
                suelo.suefporocida,
                suelo.suefconsiste,
                suelo.suefcolorter,
                suelo.suefcondelet,
                suelo.sueqnitrogen,
                suelo.sueqfosforo,
                suelo.sueqpotacio,
                suelo.sueqelemmeno,
                suelo.sueqeleminte,
                suelo.suebmateorga,
                suelo.suebactimicr,
                suelo.suebmasmicro
       
       FROM unidad_cultivo
                  inner join unidad on unidad.uniid = unidad_cultivo.lcuunidad
                  inner join cultivo on cultivo.culid = unidad_cultivo.lcucultivo     
                  inner join area on area.areid = unidad.uniarea
                  inner join plagaenfermedad on plagaenfermedad.penid = unidad_cultivo.lcuplagenfer
                  inner join canal on canal.canid = unidad_cultivo.lcucanal
                  inner join suelo on suelo.sueid = unidad.unisuelo
                   WHERE cultivo.culnomcomun='$nombre'");
                   // $cont=pg_num_rows($consulta); 
                  
              
                    
                while ($Reg_LotCul= pg_fetch_array($consulta)) 
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
                    $reg10=$Reg_LotCul[10]; 
                    $reg11=$Reg_LotCul[11];
                    $reg12=$Reg_LotCul[12];
                    $reg13=$Reg_LotCul[13];
                    $reg14=$Reg_LotCul[14];   
                    $reg15=$Reg_LotCul[15];
                    $reg16=$Reg_LotCul[16];
                    $reg17=$Reg_LotCul[17]; 
                    $reg18=$Reg_LotCul[18]; 
                    $reg19=$Reg_LotCul[19]; 
                    $reg20=$Reg_LotCul[20]; 
                    $reg21=$Reg_LotCul[21]; 
                    $reg22=$Reg_LotCul[22];
                    $reg23=$Reg_LotCul[23];
                    $reg24=$Reg_LotCul[24];
                    $reg25=$Reg_LotCul[25];   
                    $reg26=$Reg_LotCul[26];
                    $reg27=$Reg_LotCul[27];
                    $reg28=$Reg_LotCul[28]; 
                    $reg29=$Reg_LotCul[29]; 
                    $reg30=$Reg_LotCul[30]; 
                    $reg31=$Reg_LotCul[31]; 
                    $reg32=$Reg_LotCul[32]; 
                    $reg33=$Reg_LotCul[33]; 
                    $reg34=$Reg_LotCul[34];
                    $reg35=$Reg_LotCul[35];
                    $reg36=$Reg_LotCul[36];
                    $reg37=$Reg_LotCul[37];   
                    $reg38=$Reg_LotCul[38];
                    $reg39=$Reg_LotCul[39];
                    $reg40=$Reg_LotCul[40]; 
                    $reg41=$Reg_LotCul[41]; 
                    $reg42=$Reg_LotCul[42]; 
                    $reg43=$Reg_LotCul[43]; 
                    $reg44=$Reg_LotCul[44]; 
                    $reg45=$Reg_LotCul[45];
                    $reg46=$Reg_LotCul[46]; 
                    $reg47=$Reg_LotCul[47]; 
                    $reg48=$Reg_LotCul[48]; 
                    $reg49=$Reg_LotCul[49];
                    $reg50=$Reg_LotCul[50];
                      
                    $culunimedcul=($reg3);
                    $culunimedest=($reg20);
                    $culunimedrea=($reg22);
                    $culunimeddis=($reg16);
               
                $res3=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid=$culunimedcul ");
                 while($registro_cul=pg_fetch_array($res3))
                {
        
                     $unimedcultivo=($registro_cul[1]);
                 }
                 $res1=pg_query($con, "SELECT * FROM unidad_medida WHERE umeid=$culunimedest ");
                 while($registro_pcestimada=pg_fetch_array($res1))
                {
        
                     $unimedestimada=($registro_pcestimada[1]);
                 }
                $res2=pg_query($con,"SELECT * FROM unidad_medida WHERE umeid=$culunimedrea ");
                 while($registro_pcreal=pg_fetch_array($res2))
                {
        
                     $unimedreal=($registro_pcreal[1]);
                 }
                 $res4=pg_query($con,"SELECT * FROM unidad_medida WHERE umeid=$culunimeddis ");
                 while($registro_distanciasiembra=pg_fetch_array($res4))
                {
        
                     $unimeddistanciasiembra=($registro_distanciasiembra[1]);
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
                             <div ><center><b>FICHA TECNICA: CULTIVO  <?php echo $nombre;?></b></center></div><br>
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
                     
                    
                            <tr>
                        <td class="celdatdazul"><b>EXTENSION:</b></td>

                        <td class="celdatdazul"><?php echo "$reg2"; ?></td>
                        <td class="celdatdazul"><?php echo "<B>$unimedcultivo</B>"; ?></td>
                    </tr>
                    <tr>
                        <td colspan='0' class="celdatd"><b>LATITUD:</b></td>
                        <td class="celdatd"><?php echo "$reg4"; ?></td>
                        <td class="celdatd">
                            <?php

                            $norte="NORTE";
                            $sur="SUR";
                            

                            if ($reg5==$norte)
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
                    <tr>
                        <td class="celdatdazul"><b>LONGITUD:</b></td>
                        <td class="celdatdazul"><?php echo "$reg6"; ?></td>

                        <td class="celdatdazul">
                            <?php

                            $norte1="NORTE";
                            $sur1="SUR";
                            

                            if ($reg7==$norte1)
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

                    <tr>
                        <td colspan="0" class="celdatd"><b>NOMBRE CIENTÍFICO:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg9"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>ORIGEN:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg10"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b> LUGAR ORIGEN:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg11"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul" ><b>CLIMA FAVORABLE:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg12"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>DISTANCIA SIEMBRA:</b></td>

                        <td class="celdatd"><?php echo "$reg13"; ?></td>
                        <td class="celdatd"><?php echo "<B>$unimeddistanciasiembra</B>"; ?></td>
                       
                    </tr>
                     <tr>
                        <td class="celdatdazul"><b>VIDA UTIL:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg14"; ?></td>
                    </tr>
                     <tr>
                        <td colspan="0" class="celdatd"><b>TIEMPO VIDA:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg15"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>FECHA SIEMBRA:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg17"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>FECHA COSECHA:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg18"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>PRODUCCIÓN ESTIMADA:</b></td>
                        <td class="celdatdazul"><?php echo "$reg19"; ?></td>
                         <td class="celdatdazul"><?php echo "<B> $unimedestimada</B>"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>PRODUCCIÓN REAL:</b></td>
                        <td class="celdatd"><?php echo "$reg21"; ?></td>
                         <td class="celdatd"><?php echo "<B>$unimedreal</B>"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>RESPONSABLE:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg23"; ?></td>
                    </tr>
                     <tr class="td2">
                        <td colspan='0' class="celdatd"><b>CANALES:</b></td>
                  
                        <td colspan="2"><?php
                        include 'conexion.php';
                       
                      

                        $con_canales= pg_query($con, "SELECT DISTINCT canal.cannombre
                        FROM unidad_cultivo                        
                        INNER JOIN canal ON canal.canid= unidad_cultivo.lcucanal
                        INNER JOIN cultivo ON cultivo.culid = unidad_cultivo.lcucultivo  WHERE cultivo.culnomcomun='$nombre'" );
                        while ($resultado= pg_fetch_array($con_canales))
                            {

                                for($i=0;$i<1;$i++)   
                                    {
                                        echo'<div class="whilefor" class="celdatd">'. $resultado[$i].'<BR>'.'</div>';
                                    }
                            }?></td>
                        </tr>
                    <tr class="hola">
                        <td class="celdatdazul"><b>LOTES QUE CULTIVAN <?php echo $nombre; ?>:</b></td><!---HAGO DE CUENTA QUE ES EL REGISTRO 02 -->
                   
                
                        <td colspan="2"><?php
                        include 'conexion.php';
                        

                        $con_lotes= pg_query($con, "SELECT DISTINCT unidad.uninombre
                        FROM unidad_cultivo 
                        INNER JOIN unidad ON unidad.uniid= unidad_cultivo.lcuunidad  
                        INNER JOIN cultivo ON cultivo.culid = unidad_cultivo.lcucultivo  WHERE cultivo.culnomcomun='$nombre'" );
                        while ($resultado_l= pg_fetch_array($con_lotes))
                            {

                                for($i=0;$i<1;$i++) 
                                    {
                                        echo '<div class="whilefor1">'.$resultado_l[$i].'<br>'.'</div>';
                                    }
                            }?></td>
                            </tr>
                   
                   <!-- ------------------------------------------------------------------------- -->
                                       
                        <td colspan="3" class="tabla0"><CENTER><B>PLAGA/ENFERMEDAD</B></CENTER>
                        </td>
                        <tr>
                          <td colspan="100%">
                         
                            <form >
                              <select class="form-control" id="users" name="users" onchange="showUser()">
                                <option disabled selected value="Seleccione">Selecciona plaga/enfermedad</option>
                                
                                
                                  <?php
                                  
                                                                                      
                                  $muestra=pg_query($con,
                                  "SELECT plagaenfermedad.pennomcomun
                                   FROM plagaenferme_cultivo 
                                   INNER JOIN cultivo ON cultivo.culid = plagaenferme_cultivo.pcucultivo 
                                   INNER JOIN plagaenfermedad on plagaenfermedad.penid=plagaenferme_cultivo.pcuplagaenfe  
                                   WHERE cultivo.culnomcomun='$nombre'" );

                                  while ($hola=pg_fetch_array($muestra)) {
                                    echo '<option value="'.$hola[0].'">'.$hola[0].'</option>';
                                   
                                  }

                                ?>
                                    
                              </select>
                            </form>
                            <br>

                                  
                              <div id="txtHint"><b>Su informaci&oacuten se listar&aacute aqui...</b></div>

                              

                            
                         
                        </td>
                    </tr>
                     <td colspan="3" class="tabla0"><CENTER><B>PLAGA/ENFERMEDAD</B></CENTER>
                        </td>
                        <tr>
                        <td colspan="0" class="celdatd"><b>TIPO DE DAÑO:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg25"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>NOMBRE DAÑO:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg26"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>NOMBRE CIENTÍFICO:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg27"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>TIPO AGENTE CAUSAL:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg28"; ?></td>
                    </tr>
                     <tr>
                        <td colspan="0" class="celdatd"><b>TIPO MANEJO:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg29"; ?></td>
                    </tr>
                     <tr>
                        <td class="celdatdazul"><b>ZONA AFECTADA FRUTA:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg30"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>ZONA AFECTADA TALLO:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg31"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>ZONA AFECTADA FLOR:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg32"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>ZONA AFECTADA RAIZ:</b></td>

                        <td class="celdatd" colspan="2"><?php echo "$reg33"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>ZONA AFECTADA HOJA:</b></td>

                        <td class="celdatdazul" colspan="2"><?php echo "$reg34"; ?></td>
                    </tr>  

                   <!--  ----------------------------------------------------------------------  -->
                    <tr>
                        <td colspan="3" class="tabla0"><CENTER><B>SUELO</B></CENTER>
                        </td>

                    </tr>
                     
                        <tr class="td2">
                        <td colspan="0" class="celdatd" ><b>HUMEDAD:</b></td>
                        <td class="celdatd" colspan="2"><?php echo "$reg36"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>TEXTURA:</b></td>
                        <td class="celdatdazul" colspan="2"><?php echo "$reg37"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0" class="celdatd"><b>PH:</b></td>
                        <td class="celdatd" colspan="2"><?php echo "$reg38"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>POROSIDAD:</b></td>
                        <td class="celdatdazul" colspan="2"><?php echo "$reg39"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatd"><b>CONSISTENCIA:</b></td>
                        <td class="celdatd" colspan="2"><?php echo "$reg40"; ?></td>
                    </tr>
                     <tr>
                        <td class="celdatdazul"><b>COLOR TERMICO:</b></td>
                        <td class="celdatdazul" colspan="2"><?php echo "$reg41"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatd"><b>CONDENSACION:</b></td>
                        <td class="celdatd" colspan="2"><?php echo "$reg42"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>NITROGENO:</b></td>
                        <td class="celdatdazul" colspan="2"><?php echo "$reg43"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatd"><b>FOSFORO:</b></td>
                        <td class="celdatd" colspan="2"><?php echo "$reg44"; ?></td>
                    </tr>
                    <tr>
                        <td colspan="0"class="celdatdazul"><b>POTACIO:</b></td>
                        <td class="celdatdazul" colspan="2"><?php echo "$reg45"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatd"><b>ELEMENTOS MENORES:</b></td>
                        <td class="celdatd" colspan="2"><?php echo "$reg46"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>ELEMENTOS MENORES TERMICOS:</b></td>
                        <td class="celdatdazul" colspan="2"><?php echo "$reg47"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatd"><b>MATERIA ORGANICA:</b></td>
                        <td class="celdatd" colspan="2"><?php echo "$reg48"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatdazul"><b>BACTERIAS MICROBIOLÓGICAS:</b></td>
                        <td class="celdatdazul" colspan="2"><?php echo "$reg49"; ?></td>
                    </tr>
                    <tr>
                        <td class="celdatd"><b>SUEBMASMICRO:</b></td>
                        <td class="celdatd" colspan="2"><?php echo "$reg50"; ?></td>
                    </tr>
                    <!-- <tr>
                     <td class="celdatdazul" colspan="4">
                       <center>
                    <a href="../descarga_excel/Cultivo_exc.php?name=<?php //echo $nombre;?>" target="_blank">
                            <img src="../img/Excel.png" title="Exportar Excel" class="imagen">
                    </a> 
                       </center>     
                        </td>
                    </tr> -->

                   










