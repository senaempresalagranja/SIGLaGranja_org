/*
  Marke (~Line) //#3581 :
  var inlineStyleNode=(this.extractStyles==true)?this.getElementsByTagNameNS(featureNode,"*","Style")[0]:null;
                      ---------------------------                                                       -----
  KML Inlinestyle nicht verwenden, wenn extractStyles==false!

  OpenLayers.js -- OpenLayers Map Viewer Library

  Copyright 2005-2008 MetaCarta, Inc., released under the Clear BSD license.
  Please see http://svn.openlayers.org/trunk/openlayers/license.txt
  for the full text of the license.

  Includes compressed code under the following licenses:

  (For uncompressed versions of the code used please see the
  OpenLayers SVN repository: <http://openlayers.org/>)

*/

/* Contains portions of Prototype.js:
 *
 * Prototype JavaScript framework, version 1.4.0
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
 *--------------------------------------------------------------------------*/

/**
*
*  Contains portions of Rico <http://openrico.org/>
*
*  Copyright 2005 Sabre Airline Solutions
*
*  Licensed under the Apache License, Version 2.0 (the "License"); you
*  may not use this file except in compliance with the License. You
*  may obtain a copy of the License at
*
*         http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
*  implied. See the License for the specific language governing
*  permissions and limitations under the License.
*
**/

var OpenLayers={singleFile:true};(function(){var singleFile=(typeof OpenLayers=="object"&&OpenLayers.singleFile);window.OpenLayers={_scriptName:(!singleFile)?"lib/OpenLayers.js":"OpenLayers.js",_getScriptLocation:function(){var scriptLocation="";var scriptName=OpenLayers._scriptName;var scripts=document.getElementsByTagName('script');for(var i=0;i<scripts.length;i++){var src=scripts[i].getAttribute('src');if(src){var index=src.lastIndexOf(scriptName);var pathLength=src.lastIndexOf('?');if(pathLength<0){pathLength=src.length;}
if((index>-1)&&(index+scriptName.length==pathLength)){scriptLocation=src.slice(0,pathLength-scriptName.length);break;}}}
return scriptLocation;}};if(!singleFile){var jsfiles=new Array("OpenLayers/Util.js","OpenLayers/BaseTypes.js","OpenLayers/BaseTypes/Class.js","OpenLayers/BaseTypes/Bounds.js","OpenLayers/BaseTypes/Element.js","OpenLayers/BaseTypes/LonLat.js","OpenLayers/BaseTypes/Pixel.js","OpenLayers/BaseTypes/Size.js","OpenLayers/Console.js","OpenLayers/Tween.js","Rico/Corner.js","Rico/Color.js","OpenLayers/Ajax.js","OpenLayers/Events.js","OpenLayers/Projection.js","OpenLayers/Map.js","OpenLayers/Layer.js","OpenLayers/Icon.js","OpenLayers/Marker.js","OpenLayers/Marker/Box.js","OpenLayers/Popup.js","OpenLayers/Tile.js","OpenLayers/Tile/Image.js","OpenLayers/Tile/WFS.js","OpenLayers/Layer/Image.js","OpenLayers/Layer/SphericalMercator.js","OpenLayers/Layer/EventPane.js","OpenLayers/Layer/FixedZoomLevels.js","OpenLayers/Layer/Google.js","OpenLayers/Layer/VirtualEarth.js","OpenLayers/Layer/Yahoo.js","OpenLayers/Layer/HTTPRequest.js","OpenLayers/Layer/Grid.js","OpenLayers/Layer/MapGuide.js","OpenLayers/Layer/MapServer.js","OpenLayers/Layer/MapServer/Untiled.js","OpenLayers/Layer/KaMap.js","OpenLayers/Layer/MultiMap.js","OpenLayers/Layer/Markers.js","OpenLayers/Layer/Text.js","OpenLayers/Layer/WorldWind.js","OpenLayers/Layer/WMS.js","OpenLayers/Layer/WMS/Untiled.js","OpenLayers/Layer/GeoRSS.js","OpenLayers/Layer/Boxes.js","OpenLayers/Layer/TMS.js","OpenLayers/Layer/TileCache.js","OpenLayers/Popup/Anchored.js","OpenLayers/Popup/AnchoredBubble.js","OpenLayers/Popup/Framed.js","OpenLayers/Popup/FramedCloud.js","OpenLayers/Feature.js","OpenLayers/Feature/Vector.js","OpenLayers/Feature/WFS.js","OpenLayers/Handler.js","OpenLayers/Handler/Click.js","OpenLayers/Handler/Hover.js","OpenLayers/Handler/Point.js","OpenLayers/Handler/Path.js","OpenLayers/Handler/Polygon.js","OpenLayers/Handler/Feature.js","OpenLayers/Handler/Drag.js","OpenLayers/Handler/RegularPolygon.js","OpenLayers/Handler/Box.js","OpenLayers/Handler/MouseWheel.js","OpenLayers/Handler/Keyboard.js","OpenLayers/Control.js","OpenLayers/Control/Attribution.js","OpenLayers/Control/Button.js","OpenLayers/Control/ZoomBox.js","OpenLayers/Control/ZoomToMaxExtent.js","OpenLayers/Control/DragPan.js","OpenLayers/Control/Navigation.js","OpenLayers/Control/MouseDefaults.js","OpenLayers/Control/MousePosition.js","OpenLayers/Control/OverviewMap.js","OpenLayers/Control/KeyboardDefaults.js","OpenLayers/Control/PanZoom.js","OpenLayers/Control/PanZoomBar.js","OpenLayers/Control/ArgParser.js","OpenLayers/Control/Permalink.js","OpenLayers/Control/Scale.js","OpenLayers/Control/ScaleLine.js","OpenLayers/Control/LayerSwitcher.js","OpenLayers/Control/DrawFeature.js","OpenLayers/Control/DragFeature.js","OpenLayers/Control/ModifyFeature.js","OpenLayers/Control/Panel.js","OpenLayers/Control/SelectFeature.js","OpenLayers/Control/NavigationHistory.js","OpenLayers/Geometry.js","OpenLayers/Geometry/Rectangle.js","OpenLayers/Geometry/Collection.js","OpenLayers/Geometry/Point.js","OpenLayers/Geometry/MultiPoint.js","OpenLayers/Geometry/Curve.js","OpenLayers/Geometry/LineString.js","OpenLayers/Geometry/LinearRing.js","OpenLayers/Geometry/Polygon.js","OpenLayers/Geometry/MultiLineString.js","OpenLayers/Geometry/MultiPolygon.js","OpenLayers/Geometry/Surface.js","OpenLayers/Renderer.js","OpenLayers/Renderer/Elements.js","OpenLayers/Renderer/SVG.js","OpenLayers/Renderer/VML.js","OpenLayers/Layer/Vector.js","OpenLayers/Layer/PointTrack.js","OpenLayers/Layer/GML.js","OpenLayers/Style.js","OpenLayers/StyleMap.js","OpenLayers/Rule.js","OpenLayers/Filter.js","OpenLayers/Filter/FeatureId.js","OpenLayers/Filter/Logical.js","OpenLayers/Filter/Comparison.js","OpenLayers/Format.js","OpenLayers/Format/XML.js","OpenLayers/Format/GML.js","OpenLayers/Format/KML.js","OpenLayers/Format/GeoRSS.js","OpenLayers/Format/WFS.js","OpenLayers/Format/WKT.js","OpenLayers/Format/OSM.js","OpenLayers/Format/SLD.js","OpenLayers/Format/SLD/v1.js","OpenLayers/Format/SLD/v1_0_0.js","OpenLayers/Format/Text.js","OpenLayers/Format/JSON.js","OpenLayers/Format/GeoJSON.js","OpenLayers/Format/WMC.js","OpenLayers/Format/WMC/v1.js","OpenLayers/Format/WMC/v1_0_0.js","OpenLayers/Format/WMC/v1_1_0.js","OpenLayers/Layer/WFS.js","OpenLayers/Control/MouseToolbar.js","OpenLayers/Control/NavToolbar.js","OpenLayers/Control/EditingToolbar.js","OpenLayers/Lang.js","OpenLayers/Lang/en.js");var agent=navigator.userAgent;var docWrite=(agent.match("MSIE")||agent.match("Safari"));if(docWrite){var allScriptTags=new Array(jsfiles.length);}
var host=OpenLayers._getScriptLocation()+"lib/";for(var i=0;i<jsfiles.length;i++){if(docWrite){allScriptTags[i]="<script src='"+host+jsfiles[i]+"'></script>";}else{var s=document.createElement("script");s.src=host+jsfiles[i];var h=document.getElementsByTagName("head").length?document.getElementsByTagName("head")[0]:document.body;h.appendChild(s);}}
if(docWrite){document.write(allScriptTags.join(""));}}})();OpenLayers.VERSION_NUMBER="$Revision: 6819 $";OpenLayers.String={startsWith:function(str,sub){return(str.indexOf(sub)==0);},contains:function(str,sub){return(str.indexOf(sub)!=-1);},trim:function(str){return str.replace(/^\s*(.*?)\s*$/,"$1");},camelize:function(str){var oStringList=str.split('-');var camelizedString=oStringList[0];for(var i=1;i<oStringList.length;i++){var s=oStringList[i];camelizedString+=s.charAt(0).toUpperCase()+s.substring(1);}
return camelizedString;},format:function(template,context,args){if(!context){context=window;}
var tokens=template.split("${");var item,last,replacement;for(var i=1;i<tokens.length;i++){item=tokens[i];last=item.indexOf("}");if(last>0){replacement=context[item.substring(0,last)];if(typeof replacement=="function"){replacement=args?replacement.apply(null,args):replacement();}
tokens[i]=replacement+item.substring(++last);}else{tokens[i]="${"+item;}}
return tokens.join("");}};if(!String.prototype.startsWith){String.prototype.startsWith=function(sStart){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.startsWith'}));return OpenLayers.String.startsWith(this,sStart);};}
if(!String.prototype.contains){String.prototype.contains=function(str){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.contains'}));return OpenLayers.String.contains(this,str);};}
if(!String.prototype.trim){String.prototype.trim=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.trim'}));return OpenLayers.String.trim(this);};}
if(!String.prototype.camelize){String.prototype.camelize=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.camelize'}));return OpenLayers.String.camelize(this);};}
OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(num,sig){var fig=0;if(sig>0){fig=parseFloat(num.toPrecision(sig));}
return fig;},format:function(num,dec,tsep,dsep){dec=(typeof dec!="undefined")?dec:0;tsep=(typeof tsep!="undefined")?tsep:OpenLayers.Number.thousandsSeparator;dsep=(typeof dsep!="undefined")?dsep:OpenLayers.Number.decimalSeparator;if(dec!=null){num=parseFloat(num.toFixed(dec));}
var parts=num.toString().split(".");if(parts.length==1&&dec==null){dec=0;}
var integer=parts[0];if(tsep){var thousands=/(-?[0-9]+)([0-9]{3})/;while(thousands.test(integer)){integer=integer.replace(thousands,"$1"+tsep+"$2");}}
var str;if(dec==0){str=integer;}else{var rem=parts.length>1?parts[1]:"0";if(dec!=null){rem=rem+new Array(dec-rem.length+1).join("0");}
str=integer+dsep+rem;}
return str;}};if(!Number.prototype.limitSigDigs){Number.prototype.limitSigDigs=function(sig){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.limitSigDigs'}));return OpenLayers.Number.limitSigDigs(this,sig);};}
OpenLayers.Function={bind:function(func,object){var args=Array.prototype.slice.apply(arguments,[2]);return function(){var newArgs=args.concat(Array.prototype.slice.apply(arguments,[0]));return func.apply(object,newArgs);};},bindAsEventListener:function(func,object){return function(event){return func.call(object,event||window.event);};}};if(!Function.prototype.bind){Function.prototype.bind=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.bind'}));Array.prototype.unshift.apply(arguments,[this]);return OpenLayers.Function.bind.apply(null,arguments);};}
if(!Function.prototype.bindAsEventListener){Function.prototype.bindAsEventListener=function(object){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.bindAsEventListener'}));return OpenLayers.Function.bindAsEventListener(this,object);};}
OpenLayers.Array={filter:function(array,callback,caller){var selected=[];if(Array.prototype.filter){selected=array.filter(callback,caller);}else{var len=array.length;if(typeof callback!="function"){throw new TypeError();}
for(var i=0;i<len;i++){if(i in array){var val=array[i];if(callback.call(caller,val,i,array)){selected.push(val);}}}}
return selected;}};OpenLayers.Class=function(){var Class=function(){if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){this.initialize.apply(this,arguments);}};var extended={};var parent;for(var i=0;i<arguments.length;++i){if(typeof arguments[i]=="function"){parent=arguments[i].prototype;}else{parent=arguments[i];}
OpenLayers.Util.extend(extended,parent);}
Class.prototype=extended;return Class;};OpenLayers.Class.isPrototype=function(){};OpenLayers.Class.create=function(){return function(){if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){this.initialize.apply(this,arguments);}};};OpenLayers.Class.inherit=function(){var superClass=arguments[0];var proto=new superClass(OpenLayers.Class.isPrototype);for(var i=1;i<arguments.length;i++){if(typeof arguments[i]=="function"){var mixin=arguments[i];arguments[i]=new mixin(OpenLayers.Class.isPrototype);}
OpenLayers.Util.extend(proto,arguments[i]);}
return proto;};OpenLayers.Util={};OpenLayers.Util.getElement=function(){var elements=[];for(var i=0;i<arguments.length;i++){var element=arguments[i];if(typeof element=='string'){element=document.getElementById(element);}
if(arguments.length==1){return element;}
elements.push(element);}
return elements;};if($==null){var $=OpenLayers.Util.getElement;}
OpenLayers.Util.extend=function(destination,source){if(destination&&source){for(var property in source){var value=source[property];if(value!==undefined){destination[property]=value;}}
var sourceIsEvt=typeof window.Event=="function"&&source instanceof window.Event;if(!sourceIsEvt&&source.hasOwnProperty&&source.hasOwnProperty('toString')){destination.toString=source.toString;}}
return destination;};OpenLayers.Util.removeItem=function(array,item){for(var i=array.length-1;i>=0;i--){if(array[i]==item){array.splice(i,1);}}
return array;};OpenLayers.Util.clearArray=function(array){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'array = []'}));array.length=0;};OpenLayers.Util.indexOf=function(array,obj){for(var i=0;i<array.length;i++){if(array[i]==obj){return i;}}
return-1;};OpenLayers.Util.modifyDOMElement=function(element,id,px,sz,position,border,overflow,opacity){if(id){element.id=id;}
if(px){element.style.left=px.x+"px";element.style.top=px.y+"px";}
if(sz){element.style.width=sz.w+"px";element.style.height=sz.h+"px";}
if(position){element.style.position=position;}
if(border){element.style.border=border;}
if(overflow){element.style.overflow=overflow;}
if(parseFloat(opacity)>=0.0&&parseFloat(opacity)<1.0){element.style.filter='alpha(opacity='+(opacity*100)+')';element.style.opacity=opacity;}else if(parseFloat(opacity)==1.0){element.style.filter='';element.style.opacity='';}};OpenLayers.Util.createDiv=function(id,px,sz,imgURL,position,border,overflow,opacity){var dom=document.createElement('div');if(imgURL){dom.style.backgroundImage='url('+imgURL+')';}
if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="absolute";}
OpenLayers.Util.modifyDOMElement(dom,id,px,sz,position,border,overflow,opacity);return dom;};OpenLayers.Util.createImage=function(id,px,sz,imgURL,position,border,opacity,delayDisplay){var image=document.createElement("img");if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="relative";}
OpenLayers.Util.modifyDOMElement(image,id,px,sz,position,border,null,opacity);if(delayDisplay){image.style.display="none";OpenLayers.Event.observe(image,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,image));OpenLayers.Event.observe(image,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,image));}
image.style.alt=id;image.galleryImg="no";if(imgURL){image.src=imgURL;}
return image;};OpenLayers.Util.setOpacity=function(element,opacity){OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);};OpenLayers.Util.onImageLoad=function(){if(!this.viewRequestID||(this.map&&this.viewRequestID==this.map.viewRequestID)){this.style.backgroundColor=null;this.style.display="";}};OpenLayers.Util.onImageLoadErrorColor="pink";OpenLayers.IMAGE_RELOAD_ATTEMPTS=0;OpenLayers.Util.onImageLoadError=function(){this._attempts=(this._attempts)?(this._attempts+1):1;if(this._attempts<=OpenLayers.IMAGE_RELOAD_ATTEMPTS){this.src=this.src;}else{this.style.backgroundColor=OpenLayers.Util.onImageLoadErrorColor;}
this.style.display="";};OpenLayers.Util.alphaHack=function(){var arVersion=navigator.appVersion.split("MSIE");var version=parseFloat(arVersion[1]);var filter=false;try{filter=!!(document.body.filters);}catch(e){}
return(filter&&(version>=5.5)&&(version<7));};OpenLayers.Util.modifyAlphaImageDiv=function(div,id,px,sz,imgURL,position,border,sizing,opacity){OpenLayers.Util.modifyDOMElement(div,id,px,sz,null,null,null,opacity);var img=div.childNodes[0];if(imgURL){img.src=imgURL;}
OpenLayers.Util.modifyDOMElement(img,div.id+"_innerImage",null,sz,"relative",border);if(OpenLayers.Util.alphaHack()){div.style.display="inline-block";if(sizing==null){sizing="scale";}
div.style.filter="progid:DXImageTransform.Microsoft"+".AlphaImageLoader(src='"+img.src+"', "+"sizingMethod='"+sizing+"')";if(parseFloat(div.style.opacity)>=0.0&&parseFloat(div.style.opacity)<1.0){div.style.filter+=" alpha(opacity="+div.style.opacity*100+")";}
img.style.filter="alpha(opacity=0)";}};OpenLayers.Util.createAlphaImageDiv=function(id,px,sz,imgURL,position,border,sizing,opacity,delayDisplay){var div=OpenLayers.Util.createDiv();var img=OpenLayers.Util.createImage(null,null,null,null,null,null,null,false);div.appendChild(img);if(delayDisplay){img.style.display="none";OpenLayers.Event.observe(img,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,div));OpenLayers.Event.observe(img,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,div));}
OpenLayers.Util.modifyAlphaImageDiv(div,id,px,sz,imgURL,position,border,sizing,opacity);return div;};OpenLayers.Util.upperCaseObject=function(object){var uObject={};for(var key in object){uObject[key.toUpperCase()]=object[key];}
return uObject;};OpenLayers.Util.applyDefaults=function(to,from){var fromIsEvt=typeof window.Event=="function"&&from instanceof window.Event;for(var key in from){if(to[key]===undefined||(!fromIsEvt&&from.hasOwnProperty&&from.hasOwnProperty(key)&&!to.hasOwnProperty(key))){to[key]=from[key];}}
if(!fromIsEvt&&from.hasOwnProperty&&from.hasOwnProperty('toString')&&!to.hasOwnProperty('toString')){to.toString=from.toString;}
return to;};OpenLayers.Util.getParameterString=function(params){var paramsArray=[];for(var key in params){var value=params[key];if((value!=null)&&(typeof value!='function')){var encodedValue;if(typeof value=='object'&&value.constructor==Array){var encodedItemArray=[];for(var itemIndex=0;itemIndex<value.length;itemIndex++){encodedItemArray.push(encodeURIComponent(value[itemIndex]));}
encodedValue=encodedItemArray.join(",");}
else{encodedValue=encodeURIComponent(value);}
paramsArray.push(encodeURIComponent(key)+"="+encodedValue);}}
return paramsArray.join("&");};OpenLayers.ImgPath='';OpenLayers.Util.getImagesLocation=function(){return OpenLayers.ImgPath||(OpenLayers._getScriptLocation()+"img/");};OpenLayers.Util.Try=function(){var returnValue=null;for(var i=0;i<arguments.length;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;};OpenLayers.Util.getNodes=function(p,tagName){var nodes=OpenLayers.Util.Try(function(){return OpenLayers.Util._getNodes(p.documentElement.childNodes,tagName);},function(){return OpenLayers.Util._getNodes(p.childNodes,tagName);});return nodes;};OpenLayers.Util._getNodes=function(nodes,tagName){var retArray=[];for(var i=0;i<nodes.length;i++){if(nodes[i].nodeName==tagName){retArray.push(nodes[i]);}}
return retArray;};OpenLayers.Util.getTagText=function(parent,item,index){var result=OpenLayers.Util.getNodes(parent,item);if(result&&(result.length>0))
{if(!index){index=0;}
if(result[index].childNodes.length>1){return result.childNodes[1].nodeValue;}
else if(result[index].childNodes.length==1){return result[index].firstChild.nodeValue;}}else{return"";}};OpenLayers.Util.getXmlNodeValue=function(node){var val=null;OpenLayers.Util.Try(function(){val=node.text;if(!val){val=node.textContent;}
if(!val){val=node.firstChild.nodeValue;}},function(){val=node.textContent;});return val;};OpenLayers.Util.mouseLeft=function(evt,div){var target=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;while(target!=div&&target!=null){target=target.parentNode;}
return(target!=div);};OpenLayers.Util.rad=function(x){return x*Math.PI/180;};OpenLayers.Util.distVincenty=function(p1,p2){var a=6378137,b=6356752.3142,f=1/298.257223563;var L=OpenLayers.Util.rad(p2.lon-p1.lon);var U1=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p1.lat)));var U2=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p2.lat)));var sinU1=Math.sin(U1),cosU1=Math.cos(U1);var sinU2=Math.sin(U2),cosU2=Math.cos(U2);var lambda=L,lambdaP=2*Math.PI;var iterLimit=20;while(Math.abs(lambda-lambdaP)>1e-12&&--iterLimit>0){var sinLambda=Math.sin(lambda),cosLambda=Math.cos(lambda);var sinSigma=Math.sqrt((cosU2*sinLambda)*(cosU2*sinLambda)+
(cosU1*sinU2-sinU1*cosU2*cosLambda)*(cosU1*sinU2-sinU1*cosU2*cosLambda));if(sinSigma==0){return 0;}
var cosSigma=sinU1*sinU2+cosU1*cosU2*cosLambda;var sigma=Math.atan2(sinSigma,cosSigma);var alpha=Math.asin(cosU1*cosU2*sinLambda/sinSigma);var cosSqAlpha=Math.cos(alpha)*Math.cos(alpha);var cos2SigmaM=cosSigma-2*sinU1*sinU2/cosSqAlpha;var C=f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));lambdaP=lambda;lambda=L+(1-C)*f*Math.sin(alpha)*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));}
if(iterLimit==0){return NaN;}
var uSq=cosSqAlpha*(a*a-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));var s=b*A*(sigma-deltaSigma);var d=s.toFixed(3)/1000;return d;};OpenLayers.Util.getParameters=function(url){url=url||window.location.href;var paramsString="";if(OpenLayers.String.contains(url,'?')){var start=url.indexOf('?')+1;var end=OpenLayers.String.contains(url,"#")?url.indexOf('#'):url.length;paramsString=url.substring(start,end);}
var parameters={};var pairs=paramsString.split(/[&;]/);for(var i=0;i<pairs.length;++i){var keyValue=pairs[i].split('=');if(keyValue[0]){var key=decodeURIComponent(keyValue[0]);var value=keyValue[1]||'';value=value.split(",");for(var j=0;j<value.length;j++){value[j]=decodeURIComponent(value[j]);}
if(value.length==1){value=value[0];}
parameters[key]=value;}}
return parameters;};OpenLayers.Util.getArgs=function(url){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Util.getParameters'}));return OpenLayers.Util.getParameters(url);};OpenLayers.Util.lastSeqID=0;OpenLayers.Util.createUniqueID=function(prefix){if(prefix==null){prefix="id_";}
OpenLayers.Util.lastSeqID+=1;return prefix+OpenLayers.Util.lastSeqID;};OpenLayers.INCHES_PER_UNIT={'inches':1.0,'ft':12.0,'mi':63360.0,'m':39.3701,'km':39370.1,'dd':4374754,'yd':36};OpenLayers.INCHES_PER_UNIT["in"]=OpenLayers.INCHES_PER_UNIT.inches;OpenLayers.INCHES_PER_UNIT["degrees"]=OpenLayers.INCHES_PER_UNIT.dd;OpenLayers.INCHES_PER_UNIT["nmi"]=1852*OpenLayers.INCHES_PER_UNIT.m;OpenLayers.DOTS_PER_INCH=72;OpenLayers.Util.normalizeScale=function(scale){var normScale=(scale>1.0)?(1.0/scale):scale;return normScale;};OpenLayers.Util.getResolutionFromScale=function(scale,units){if(units==null){units="degrees";}
var normScale=OpenLayers.Util.normalizeScale(scale);var resolution=1/(normScale*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH);return resolution;};OpenLayers.Util.getScaleFromResolution=function(resolution,units){if(units==null){units="degrees";}
var scale=resolution*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH;return scale;};OpenLayers.Util.safeStopPropagation=function(evt){OpenLayers.Event.stop(evt,true);};OpenLayers.Util.pagePosition=function(forElement){var valueT=0,valueL=0;var element=forElement;var child=forElement;while(element){if(element==document.body){if(child&&child.style&&OpenLayers.Element.getStyle(child,'position')=='absolute'){break;}}
valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;child=element;try{element=element.offsetParent;}catch(e){OpenLayers.Console.error(OpenLayers.i18n("pagePositionFailed",{'elemId':element.id}));break;}}
element=forElement;while(element){valueT-=element.scrollTop||0;valueL-=element.scrollLeft||0;element=element.parentNode;}
return[valueL,valueT];};OpenLayers.Util.isEquivalentUrl=function(url1,url2,options){options=options||{};OpenLayers.Util.applyDefaults(options,{ignoreCase:true,ignorePort80:true,ignoreHash:true});var urlObj1=OpenLayers.Util.createUrlObject(url1,options);var urlObj2=OpenLayers.Util.createUrlObject(url2,options);for(var key in urlObj1){if(options.test){alert(key+"\n1:"+urlObj1[key]+"\n2:"+urlObj2[key]);}
var val1=urlObj1[key];var val2=urlObj2[key];switch(key){case"args":break;case"host":case"port":case"protocol":if((val1=="")||(val2=="")){break;}
default:if((key!="args")&&(urlObj1[key]!=urlObj2[key])){return false;}
break;}}
for(var key in urlObj1.args){if(urlObj1.args[key]!=urlObj2.args[key]){return false;}
delete urlObj2.args[key];}
for(var key in urlObj2.args){return false;}
return true;};OpenLayers.Util.createUrlObject=function(url,options){options=options||{};var urlObject={};if(options.ignoreCase){url=url.toLowerCase();}
var a=document.createElement('a');a.href=url;urlObject.host=a.host;var port=a.port;if(port.length<=0){var newHostLength=urlObject.host.length-(port.length);urlObject.host=urlObject.host.substring(0,newHostLength);}
urlObject.protocol=a.protocol;urlObject.port=((port=="80")&&(options.ignorePort80))?"":port;urlObject.hash=(options.ignoreHash)?"":a.hash;var queryString=a.search;if(!queryString){var qMark=url.indexOf("?");queryString=(qMark!=-1)?url.substr(qMark):"";}
urlObject.args=OpenLayers.Util.getParameters(queryString);if(((urlObject.protocol=="file:")&&(url.indexOf("file:")!=-1))||((urlObject.protocol!="file:")&&(urlObject.host!=""))){urlObject.pathname=a.pathname;var qIndex=urlObject.pathname.indexOf("?");if(qIndex!=-1){urlObject.pathname=urlObject.pathname.substring(0,qIndex);}}else{var relStr=OpenLayers.Util.removeTail(url);var backs=0;do{var index=relStr.indexOf("../");if(index==0){backs++;relStr=relStr.substr(3);}else if(index>=0){var prevChunk=relStr.substr(0,index-1);var slash=prevChunk.indexOf("/");prevChunk=(slash!=-1)?prevChunk.substr(0,slash+1):"";var postChunk=relStr.substr(index+3);relStr=prevChunk+postChunk;}}while(index!=-1)
var windowAnchor=document.createElement("a");var windowUrl=window.location.href;if(options.ignoreCase){windowUrl=windowUrl.toLowerCase();}
windowAnchor.href=windowUrl;urlObject.protocol=windowAnchor.protocol;var splitter=(windowAnchor.pathname.indexOf("/")!=-1)?"/":"\\";var dirs=windowAnchor.pathname.split(splitter);dirs.pop();while((backs>0)&&(dirs.length>0)){dirs.pop();backs--;}
relStr=dirs.join("/")+"/"+relStr;urlObject.pathname=relStr;}
if((urlObject.protocol=="file:")||(urlObject.protocol=="")){urlObject.host="localhost";}
return urlObject;};OpenLayers.Util.removeTail=function(url){var head=null;var qMark=url.indexOf("?");var hashMark=url.indexOf("#");if(qMark==-1){head=(hashMark!=-1)?url.substr(0,hashMark):url;}else{head=(hashMark!=-1)?url.substr(0,Math.min(qMark,hashMark)):url.substr(0,qMark);}
return head;};OpenLayers.Util.getBrowserName=function(){var browserName="";var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("opera")!=-1){browserName="opera";}else if(ua.indexOf("msie")!=-1){browserName="msie";}else if(ua.indexOf("safari")!=-1){browserName="safari";}else if(ua.indexOf("mozilla")!=-1){if(ua.indexOf("firefox")!=-1){browserName="firefox";}else{browserName="mozilla";}}
return browserName;};OpenLayers.Util.getRenderedDimensions=function(contentHTML,size){var w=h=null;var container=document.createElement("div");container.style.overflow="";container.style.position="absolute";container.style.left="-9999px";if(size){if(size.w){w=container.style.width=size.w;}else if(size.h){h=container.style.height=size.h;}}
var content=document.createElement("div");content.innerHTML=contentHTML;container.appendChild(content);document.body.appendChild(container);if(!w){w=parseInt(content.scrollWidth);container.style.width=w+"px";}
if(!h){h=parseInt(content.scrollHeight);}
container.removeChild(content);document.body.removeChild(container);return new OpenLayers.Size(w,h);};OpenLayers.Util.getScrollbarWidth=function(){var scrollbarWidth=OpenLayers.Util._scrollbarWidth;if(scrollbarWidth==null){var scr=null;var inn=null;var wNoScroll=0;var wScroll=0;scr=document.createElement('div');scr.style.position='absolute';scr.style.top='-1000px';scr.style.left='-1000px';scr.style.width='100px';scr.style.height='50px';scr.style.overflow='hidden';inn=document.createElement('div');inn.style.width='100%';inn.style.height='200px';scr.appendChild(inn);document.body.appendChild(scr);wNoScroll=inn.offsetWidth;scr.style.overflow='scroll';wScroll=inn.offsetWidth;document.body.removeChild(document.body.lastChild);OpenLayers.Util._scrollbarWidth=(wNoScroll-wScroll);scrollbarWidth=OpenLayers.Util._scrollbarWidth;}
return scrollbarWidth;};OpenLayers.Rico=new Object();OpenLayers.Rico.Corner={round:function(e,options){e=OpenLayers.Util.getElement(e);this._setOptions(options);var color=this.options.color;if(this.options.color=="fromElement"){color=this._background(e);}
var bgColor=this.options.bgColor;if(this.options.bgColor=="fromParent"){bgColor=this._background(e.offsetParent);}
this._roundCornersImpl(e,color,bgColor);},changeColor:function(theDiv,newColor){theDiv.style.backgroundColor=newColor;var spanElements=theDiv.parentNode.getElementsByTagName("span");for(var currIdx=0;currIdx<spanElements.length;currIdx++){spanElements[currIdx].style.backgroundColor=newColor;}},changeOpacity:function(theDiv,newOpacity){var mozillaOpacity=newOpacity;var ieOpacity='alpha(opacity='+newOpacity*100+')';theDiv.style.opacity=mozillaOpacity;theDiv.style.filter=ieOpacity;var spanElements=theDiv.parentNode.getElementsByTagName("span");for(var currIdx=0;currIdx<spanElements.length;currIdx++){spanElements[currIdx].style.opacity=mozillaOpacity;spanElements[currIdx].style.filter=ieOpacity;}},reRound:function(theDiv,options){var topRico=theDiv.parentNode.childNodes[0];var bottomRico=theDiv.parentNode.childNodes[2];theDiv.parentNode.removeChild(topRico);theDiv.parentNode.removeChild(bottomRico);this.round(theDiv.parentNode,options);},_roundCornersImpl:function(e,color,bgColor){if(this.options.border){this._renderBorder(e,bgColor);}
if(this._isTopRounded()){this._roundTopCorners(e,color,bgColor);}
if(this._isBottomRounded()){this._roundBottomCorners(e,color,bgColor);}},_renderBorder:function(el,bgColor){var borderValue="1px solid "+this._borderColor(bgColor);var borderL="border-left: "+borderValue;var borderR="border-right: "+borderValue;var style="style='"+borderL+";"+borderR+"'";el.innerHTML="<div "+style+">"+el.innerHTML+"</div>";},_roundTopCorners:function(el,color,bgColor){var corner=this._createCorner(bgColor);for(var i=0;i<this.options.numSlices;i++){corner.appendChild(this._createCornerSlice(color,bgColor,i,"top"));}
el.style.paddingTop=0;el.insertBefore(corner,el.firstChild);},_roundBottomCorners:function(el,color,bgColor){var corner=this._createCorner(bgColor);for(var i=(this.options.numSlices-1);i>=0;i--){corner.appendChild(this._createCornerSlice(color,bgColor,i,"bottom"));}
el.style.paddingBottom=0;el.appendChild(corner);},_createCorner:function(bgColor){var corner=document.createElement("div");corner.style.backgroundColor=(this._isTransparent()?"transparent":bgColor);return corner;},_createCornerSlice:function(color,bgColor,n,position){var slice=document.createElement("span");var inStyle=slice.style;inStyle.backgroundColor=color;inStyle.display="block";inStyle.height="1px";inStyle.overflow="hidden";inStyle.fontSize="1px";var borderColor=this._borderColor(color,bgColor);if(this.options.border&&n==0){inStyle.borderTopStyle="solid";inStyle.borderTopWidth="1px";inStyle.borderLeftWidth="0px";inStyle.borderRightWidth="0px";inStyle.borderBottomWidth="0px";inStyle.height="0px";inStyle.borderColor=borderColor;}
else if(borderColor){inStyle.borderColor=borderColor;inStyle.borderStyle="solid";inStyle.borderWidth="0px 1px";}
if(!this.options.compact&&(n==(this.options.numSlices-1))){inStyle.height="2px";}
this._setMargin(slice,n,position);this._setBorder(slice,n,position);return slice;},_setOptions:function(options){this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false};OpenLayers.Util.extend(this.options,options||{});this.options.numSlices=this.options.compact?2:4;if(this._isTransparent()){this.options.blend=false;}},_whichSideTop:function(){if(this._hasString(this.options.corners,"all","top")){return"";}
if(this.options.corners.indexOf("tl")>=0&&this.options.corners.indexOf("tr")>=0){return"";}
if(this.options.corners.indexOf("tl")>=0){return"left";}else if(this.options.corners.indexOf("tr")>=0){return"right";}
return"";},_whichSideBottom:function(){if(this._hasString(this.options.corners,"all","bottom")){return"";}
if(this.options.corners.indexOf("bl")>=0&&this.options.corners.indexOf("br")>=0){return"";}
if(this.options.corners.indexOf("bl")>=0){return"left";}else if(this.options.corners.indexOf("br")>=0){return"right";}
return"";},_borderColor:function(color,bgColor){if(color=="transparent"){return bgColor;}else if(this.options.border){return this.options.border;}else if(this.options.blend){return this._blend(bgColor,color);}else{return"";}},_setMargin:function(el,n,corners){var marginSize=this._marginSize(n);var whichSide=corners=="top"?this._whichSideTop():this._whichSideBottom();if(whichSide=="left"){el.style.marginLeft=marginSize+"px";el.style.marginRight="0px";}
else if(whichSide=="right"){el.style.marginRight=marginSize+"px";el.style.marginLeft="0px";}
else{el.style.marginLeft=marginSize+"px";el.style.marginRight=marginSize+"px";}},_setBorder:function(el,n,corners){var borderSize=this._borderSize(n);var whichSide=corners=="top"?this._whichSideTop():this._whichSideBottom();if(whichSide=="left"){el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth="0px";}
else if(whichSide=="right"){el.style.borderRightWidth=borderSize+"px";el.style.borderLeftWidth="0px";}
else{el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth=borderSize+"px";}
if(this.options.border!=false){el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth=borderSize+"px";}},_marginSize:function(n){if(this._isTransparent()){return 0;}
var marginSizes=[5,3,2,1];var blendedMarginSizes=[3,2,1,0];var compactMarginSizes=[2,1];var smBlendedMarginSizes=[1,0];if(this.options.compact&&this.options.blend){return smBlendedMarginSizes[n];}else if(this.options.compact){return compactMarginSizes[n];}else if(this.options.blend){return blendedMarginSizes[n];}else{return marginSizes[n];}},_borderSize:function(n){var transparentBorderSizes=[5,3,2,1];var blendedBorderSizes=[2,1,1,1];var compactBorderSizes=[1,0];var actualBorderSizes=[0,2,0,0];if(this.options.compact&&(this.options.blend||this._isTransparent())){return 1;}else if(this.options.compact){return compactBorderSizes[n];}else if(this.options.blend){return blendedBorderSizes[n];}else if(this.options.border){return actualBorderSizes[n];}else if(this._isTransparent()){return transparentBorderSizes[n];}
return 0;},_hasString:function(str){for(var i=1;i<arguments.length;i++)if(str.indexOf(arguments[i])>=0){return true;}return false;},_blend:function(c1,c2){var cc1=OpenLayers.Rico.Color.createFromHex(c1);cc1.blend(OpenLayers.Rico.Color.createFromHex(c2));return cc1;},_background:function(el){try{return OpenLayers.Rico.Color.createColorFromBackground(el).asHex();}catch(err){return"#ffffff";}},_isTransparent:function(){return this.options.color=="transparent";},_isTopRounded:function(){return this._hasString(this.options.corners,"all","top","tl","tr");},_isBottomRounded:function(){return this._hasString(this.options.corners,"all","bottom","bl","br");},_hasSingleTextChild:function(el){return el.childNodes.length==1&&el.childNodes[0].nodeType==3;}};OpenLayers.ProxyHost="";OpenLayers.nullHandler=function(request){alert(OpenLayers.i18n("unhandledRequest",{'statusText':request.statusText}));};OpenLayers.loadURL=function(uri,params,caller,onComplete,onFailure){var success=(onComplete)?OpenLayers.Function.bind(onComplete,caller):OpenLayers.nullHandler;var failure=(onFailure)?OpenLayers.Function.bind(onFailure,caller):OpenLayers.nullHandler;var request=new OpenLayers.Ajax.Request(uri,{method:'get',parameters:params,onComplete:success,onFailure:failure});return request.transport;};OpenLayers.parseXMLString=function(text){var index=text.indexOf('<');if(index>0){text=text.substring(index);}
var ajaxResponse=OpenLayers.Util.Try(function(){var xmldom=new ActiveXObject('Microsoft.XMLDOM');xmldom.loadXML(text);return xmldom;},function(){return new DOMParser().parseFromString(text,'text/xml');},function(){var req=new XMLHttpRequest();req.open("GET","data:"+"text/xml"+";charset=utf-8,"+encodeURIComponent(text),false);if(req.overrideMimeType){req.overrideMimeType("text/xml");}
req.send(null);return req.responseXML;});return ajaxResponse;};OpenLayers.Ajax={emptyFunction:function(){},getTransport:function(){return OpenLayers.Util.Try(function(){return new XMLHttpRequest();},function(){return new ActiveXObject('Msxml2.XMLHTTP');},function(){return new ActiveXObject('Microsoft.XMLHTTP');})||false;},activeRequestCount:0};OpenLayers.Ajax.Responders={responders:[],register:function(responderToAdd){for(var i=0;i<this.responders.length;i++){if(responderToAdd==this.responders[i]){return;}}
this.responders.push(responderToAdd);},unregister:function(responderToRemove){OpenLayers.Util.removeItem(this.reponders,responderToRemove);},dispatch:function(callback,request,transport){var responder;for(var i=0;i<this.responders.length;i++){responder=this.responders[i];if(responder[callback]&&typeof responder[callback]=='function'){try{responder[callback].apply(responder,[request,transport]);}catch(e){}}}}};OpenLayers.Ajax.Responders.register({onCreate:function(){OpenLayers.Ajax.activeRequestCount++;},onComplete:function(){OpenLayers.Ajax.activeRequestCount--;}});OpenLayers.Ajax.Base=OpenLayers.Class({initialize:function(options){this.options={method:'post',asynchronous:true,contentType:'application/xml',parameters:''};OpenLayers.Util.extend(this.options,options||{});this.options.method=this.options.method.toLowerCase();if(typeof this.options.parameters=='string'){this.options.parameters=OpenLayers.Util.getParameters(this.options.parameters);}}});OpenLayers.Ajax.Request=OpenLayers.Class(OpenLayers.Ajax.Base,{_complete:false,initialize:function(url,options){OpenLayers.Ajax.Base.prototype.initialize.apply(this,[options]);if(OpenLayers.ProxyHost&&OpenLayers.String.startsWith(url,"http")){url=OpenLayers.ProxyHost+encodeURIComponent(url);}
this.transport=OpenLayers.Ajax.getTransport();this.request(url);},request:function(url){this.url=url;this.method=this.options.method;var params=OpenLayers.Util.extend({},this.options.parameters);if(this.method!='get'&&this.method!='post'){params['_method']=this.method;this.method='post';}
this.parameters=params;if(params=OpenLayers.Util.getParameterString(params)){if(this.method=='get'){this.url+=((this.url.indexOf('?')>-1)?'&':'?')+params;}else if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)){params+='&_=';}}
try{var response=new OpenLayers.Ajax.Response(this);if(this.options.onCreate){this.options.onCreate(response);}
OpenLayers.Ajax.Responders.dispatch('onCreate',this,response);this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);if(this.options.asynchronous){window.setTimeout(OpenLayers.Function.bind(this.respondToReadyState,this,1),10);}
this.transport.onreadystatechange=OpenLayers.Function.bind(this.onStateChange,this);this.setRequestHeaders();this.body=this.method=='post'?(this.options.postBody||params):null;this.transport.send(this.body);if(!this.options.asynchronous&&this.transport.overrideMimeType){this.onStateChange();}}catch(e){this.dispatchException(e);}},onStateChange:function(){var readyState=this.transport.readyState;if(readyState>1&&!((readyState==4)&&this._complete)){this.respondToReadyState(this.transport.readyState);}},setRequestHeaders:function(){var headers={'X-Requested-With':'XMLHttpRequest','Accept':'text/javascript, text/html, application/xml, text/xml, */*','OpenLayers':true};if(this.method=='post'){headers['Content-type']=this.options.contentType+
(this.options.encoding?'; charset='+this.options.encoding:'');if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005){headers['Connection']='close';}}
if(typeof this.options.requestHeaders=='object'){var extras=this.options.requestHeaders;if(typeof extras.push=='function'){for(var i=0,length=extras.length;i<length;i+=2){headers[extras[i]]=extras[i+1];}}else{for(var i in extras){headers[i]=pair[i];}}}
for(var name in headers){this.transport.setRequestHeader(name,headers[name]);}},success:function(){var status=this.getStatus();return!status||(status>=200&&status<300);},getStatus:function(){try{return this.transport.status||0;}catch(e){return 0;}},respondToReadyState:function(readyState){var state=OpenLayers.Ajax.Request.Events[readyState];var response=new OpenLayers.Ajax.Response(this);if(state=='Complete'){try{this._complete=true;(this.options['on'+response.status]||this.options['on'+(this.success()?'Success':'Failure')]||OpenLayers.Ajax.emptyFunction)(response);}catch(e){this.dispatchException(e);}
var contentType=response.getHeader('Content-type');}
try{(this.options['on'+state]||OpenLayers.Ajax.emptyFunction)(response);OpenLayers.Ajax.Responders.dispatch('on'+state,this,response);}catch(e){this.dispatchException(e);}
if(state=='Complete'){this.transport.onreadystatechange=OpenLayers.Ajax.emptyFunction;}},getHeader:function(name){try{return this.transport.getResponseHeader(name);}catch(e){return null;}},dispatchException:function(exception){var handler=this.options.onException;if(handler){handler(this,exception);OpenLayers.Ajax.Responders.dispatch('onException',this,exception);}else{var listener=false;var responders=OpenLayers.Ajax.Responders.responders;for(var i=0;i<responders.length;i++){if(responders[i].onException){listener=true;break;}}
if(listener){OpenLayers.Ajax.Responders.dispatch('onException',this,exception);}else{throw exception;}}}});OpenLayers.Ajax.Request.Events=['Uninitialized','Loading','Loaded','Interactive','Complete'];OpenLayers.Ajax.Response=OpenLayers.Class({status:0,statusText:'',initialize:function(request){this.request=request;var transport=this.transport=request.transport,readyState=this.readyState=transport.readyState;if((readyState>2&&!(!!(window.attachEvent&&!window.opera)))||readyState==4){this.status=this.getStatus();this.statusText=this.getStatusText();this.responseText=transport.responseText==null?'':String(transport.responseText);}
if(readyState==4){var xml=transport.responseXML;this.responseXML=xml===undefined?null:xml;}},getStatus:OpenLayers.Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||'';}catch(e){return'';}},getHeader:OpenLayers.Ajax.Request.prototype.getHeader,getResponseHeader:function(name){return this.transport.getResponseHeader(name);}});OpenLayers.Ajax.getElementsByTagNameNS=function(parentnode,nsuri,nsprefix,tagname){var elem=null;if(parentnode.getElementsByTagNameNS){elem=parentnode.getElementsByTagNameNS(nsuri,tagname);}else{elem=parentnode.getElementsByTagName(nsprefix+':'+tagname);}
return elem;};OpenLayers.Ajax.serializeXMLToString=function(xmldom){var serializer=new XMLSerializer();var data=serializer.serializeToString(xmldom);return data;};OpenLayers.Bounds=OpenLayers.Class({left:null,bottom:null,right:null,top:null,initialize:function(left,bottom,right,top){if(left!=null){this.left=parseFloat(left);}
if(bottom!=null){this.bottom=parseFloat(bottom);}
if(right!=null){this.right=parseFloat(right);}
if(top!=null){this.top=parseFloat(top);}},clone:function(){return new OpenLayers.Bounds(this.left,this.bottom,this.right,this.top);},equals:function(bounds){var equals=false;if(bounds!=null){equals=((this.left==bounds.left)&&(this.right==bounds.right)&&(this.top==bounds.top)&&(this.bottom==bounds.bottom));}
return equals;},toString:function(){return("left-bottom=("+this.left+","+this.bottom+")"
+" right-top=("+this.right+","+this.top+")");},toArray:function(){return[this.left,this.bottom,this.right,this.top];},toBBOX:function(decimal){if(decimal==null){decimal=6;}
var mult=Math.pow(10,decimal);var bbox=Math.round(this.left*mult)/mult+","+
Math.round(this.bottom*mult)/mult+","+
Math.round(this.right*mult)/mult+","+
Math.round(this.top*mult)/mult;return bbox;},toGeometry:function(){return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left,this.bottom),new OpenLayers.Geometry.Point(this.right,this.bottom),new OpenLayers.Geometry.Point(this.right,this.top),new OpenLayers.Geometry.Point(this.left,this.top)])]);},getWidth:function(){return(this.right-this.left);},getHeight:function(){return(this.top-this.bottom);},getSize:function(){return new OpenLayers.Size(this.getWidth(),this.getHeight());},getCenterPixel:function(){return new OpenLayers.Pixel((this.left+this.right)/2,(this.bottom+this.top)/2);},getCenterLonLat:function(){return new OpenLayers.LonLat((this.left+this.right)/2,(this.bottom+this.top)/2);},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("boundsAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Bounds(this.left+x,this.bottom+y,this.right+x,this.top+y);},extend:function(object){var bounds=null;if(object){switch(object.CLASS_NAME){case"OpenLayers.LonLat":bounds=new OpenLayers.Bounds(object.lon,object.lat,object.lon,object.lat);break;case"OpenLayers.Geometry.Point":bounds=new OpenLayers.Bounds(object.x,object.y,object.x,object.y);break;case"OpenLayers.Bounds":bounds=object;break;}
if(bounds){if((this.left==null)||(bounds.left<this.left)){this.left=bounds.left;}
if((this.bottom==null)||(bounds.bottom<this.bottom)){this.bottom=bounds.bottom;}
if((this.right==null)||(bounds.right>this.right)){this.right=bounds.right;}
if((this.top==null)||(bounds.top>this.top)){this.top=bounds.top;}}}},containsLonLat:function(ll,inclusive){return this.contains(ll.lon,ll.lat,inclusive);},containsPixel:function(px,inclusive){return this.contains(px.x,px.y,inclusive);},contains:function(x,y,inclusive){if(inclusive==null){inclusive=true;}
var contains=false;if(inclusive){contains=((x>=this.left)&&(x<=this.right)&&(y>=this.bottom)&&(y<=this.top));}else{contains=((x>this.left)&&(x<this.right)&&(y>this.bottom)&&(y<this.top));}
return contains;},intersectsBounds:function(bounds,inclusive){if(inclusive==null){inclusive=true;}
var inBottom=(bounds.bottom==this.bottom&&bounds.top==this.top)?true:(((bounds.bottom>this.bottom)&&(bounds.bottom<this.top))||((this.bottom>bounds.bottom)&&(this.bottom<bounds.top)));var inTop=(bounds.bottom==this.bottom&&bounds.top==this.top)?true:(((bounds.top>this.bottom)&&(bounds.top<this.top))||((this.top>bounds.bottom)&&(this.top<bounds.top)));var inRight=(bounds.right==this.right&&bounds.left==this.left)?true:(((bounds.right>this.left)&&(bounds.right<this.right))||((this.right>bounds.left)&&(this.right<bounds.right)));var inLeft=(bounds.right==this.right&&bounds.left==this.left)?true:(((bounds.left>this.left)&&(bounds.left<this.right))||((this.left>bounds.left)&&(this.left<bounds.right)));return(this.containsBounds(bounds,true,inclusive)||bounds.containsBounds(this,true,inclusive)||((inTop||inBottom)&&(inLeft||inRight)));},containsBounds:function(bounds,partial,inclusive){if(partial==null){partial=false;}
if(inclusive==null){inclusive=true;}
var inLeft;var inTop;var inRight;var inBottom;if(inclusive){inLeft=(bounds.left>=this.left)&&(bounds.left<=this.right);inTop=(bounds.top>=this.bottom)&&(bounds.top<=this.top);inRight=(bounds.right>=this.left)&&(bounds.right<=this.right);inBottom=(bounds.bottom>=this.bottom)&&(bounds.bottom<=this.top);}else{inLeft=(bounds.left>this.left)&&(bounds.left<this.right);inTop=(bounds.top>this.bottom)&&(bounds.top<this.top);inRight=(bounds.right>this.left)&&(bounds.right<this.right);inBottom=(bounds.bottom>this.bottom)&&(bounds.bottom<this.top);}
return(partial)?(inTop||inBottom)&&(inLeft||inRight):(inTop&&inLeft&&inBottom&&inRight);},determineQuadrant:function(lonlat){var quadrant="";var center=this.getCenterLonLat();quadrant+=(lonlat.lat<center.lat)?"b":"t";quadrant+=(lonlat.lon<center.lon)?"l":"r";return quadrant;},transform:function(source,dest){var ll=OpenLayers.Projection.transform({'x':this.left,'y':this.bottom},source,dest);var lr=OpenLayers.Projection.transform({'x':this.right,'y':this.bottom},source,dest);var ul=OpenLayers.Projection.transform({'x':this.left,'y':this.top},source,dest);var ur=OpenLayers.Projection.transform({'x':this.right,'y':this.top},source,dest);this.left=Math.min(ll.x,ul.x);this.bottom=Math.min(ll.y,lr.y);this.right=Math.max(lr.x,ur.x);this.top=Math.max(ul.y,ur.y);return this;},wrapDateLine:function(maxExtent,options){options=options||{};var leftTolerance=options.leftTolerance||0;var rightTolerance=options.rightTolerance||0;var newBounds=this.clone();if(maxExtent){while(newBounds.left<maxExtent.left&&(newBounds.right-rightTolerance)<=maxExtent.left){newBounds=newBounds.add(maxExtent.getWidth(),0);}
while((newBounds.left+leftTolerance)>=maxExtent.right&&newBounds.right>maxExtent.right){newBounds=newBounds.add(-maxExtent.getWidth(),0);}}
return newBounds;},CLASS_NAME:"OpenLayers.Bounds"});OpenLayers.Bounds.fromString=function(str){var bounds=str.split(",");return OpenLayers.Bounds.fromArray(bounds);};OpenLayers.Bounds.fromArray=function(bbox){return new OpenLayers.Bounds(parseFloat(bbox[0]),parseFloat(bbox[1]),parseFloat(bbox[2]),parseFloat(bbox[3]));};OpenLayers.Bounds.fromSize=function(size){return new OpenLayers.Bounds(0,size.h,size.w,0);};OpenLayers.Bounds.oppositeQuadrant=function(quadrant){var opp="";opp+=(quadrant.charAt(0)=='t')?'b':'t';opp+=(quadrant.charAt(1)=='l')?'r':'l';return opp;};OpenLayers.Element={visible:function(element){return OpenLayers.Util.getElement(element).style.display!='none';},toggle:function(){for(var i=0;i<arguments.length;i++){var element=OpenLayers.Util.getElement(arguments[i]);var display=OpenLayers.Element.visible(element)?'hide':'show';OpenLayers.Element[display](element);}},hide:function(){for(var i=0;i<arguments.length;i++){var element=OpenLayers.Util.getElement(arguments[i]);element.style.display='none';}},show:function(){for(var i=0;i<arguments.length;i++){var element=OpenLayers.Util.getElement(arguments[i]);element.style.display='';}},remove:function(element){element=OpenLayers.Util.getElement(element);element.parentNode.removeChild(element);},getHeight:function(element){element=OpenLayers.Util.getElement(element);return element.offsetHeight;},getDimensions:function(element){element=OpenLayers.Util.getElement(element);if(OpenLayers.Element.getStyle(element,'display')!='none'){return{width:element.offsetWidth,height:element.offsetHeight};}
var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;els.visibility='hidden';els.position='absolute';els.display='';var originalWidth=element.clientWidth;var originalHeight=element.clientHeight;els.display='none';els.position=originalPosition;els.visibility=originalVisibility;return{width:originalWidth,height:originalHeight};},getStyle:function(element,style){element=OpenLayers.Util.getElement(element);var value=element.style[OpenLayers.String.camelize(style)];if(!value){if(document.defaultView&&document.defaultView.getComputedStyle){var css=document.defaultView.getComputedStyle(element,null);value=css?css.getPropertyValue(style):null;}else if(element.currentStyle){value=element.currentStyle[OpenLayers.String.camelize(style)];}}
var positions=['left','top','right','bottom'];if(window.opera&&(OpenLayers.Util.indexOf(positions,style)!=-1)&&(OpenLayers.Element.getStyle(element,'position')=='static')){value='auto';}
return value=='auto'?null:value;}};OpenLayers.LonLat=OpenLayers.Class({lon:0.0,lat:0.0,initialize:function(lon,lat){this.lon=parseFloat(lon);this.lat=parseFloat(lat);},toString:function(){return("lon="+this.lon+",lat="+this.lat);},toShortString:function(){return(this.lon+", "+this.lat);},clone:function(){return new OpenLayers.LonLat(this.lon,this.lat);},add:function(lon,lat){if((lon==null)||(lat==null)){var msg=OpenLayers.i18n("lonlatAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.LonLat(this.lon+lon,this.lat+lat);},equals:function(ll){var equals=false;if(ll!=null){equals=((this.lon==ll.lon&&this.lat==ll.lat)||(isNaN(this.lon)&&isNaN(this.lat)&&isNaN(ll.lon)&&isNaN(ll.lat)));}
return equals;},transform:function(source,dest){var point=OpenLayers.Projection.transform({'x':this.lon,'y':this.lat},source,dest);this.lon=point.x;this.lat=point.y;return this;},wrapDateLine:function(maxExtent){var newLonLat=this.clone();if(maxExtent){while(newLonLat.lon<maxExtent.left){newLonLat.lon+=maxExtent.getWidth();}
while(newLonLat.lon>maxExtent.right){newLonLat.lon-=maxExtent.getWidth();}}
return newLonLat;},CLASS_NAME:"OpenLayers.LonLat"});OpenLayers.LonLat.fromString=function(str){var pair=str.split(",");return new OpenLayers.LonLat(parseFloat(pair[0]),parseFloat(pair[1]));};OpenLayers.Pixel=OpenLayers.Class({x:0.0,y:0.0,initialize:function(x,y){this.x=parseFloat(x);this.y=parseFloat(y);},toString:function(){return("x="+this.x+",y="+this.y);},clone:function(){return new OpenLayers.Pixel(this.x,this.y);},equals:function(px){var equals=false;if(px!=null){equals=((this.x==px.x&&this.y==px.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(px.x)&&isNaN(px.y)));}
return equals;},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("pixelAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Pixel(this.x+x,this.y+y);},offset:function(px){var newPx=this.clone();if(px){newPx=this.add(px.x,px.y);}
return newPx;},CLASS_NAME:"OpenLayers.Pixel"});OpenLayers.Size=OpenLayers.Class({w:0.0,h:0.0,initialize:function(w,h){this.w=parseFloat(w);this.h=parseFloat(h);},toString:function(){return("w="+this.w+",h="+this.h);},clone:function(){return new OpenLayers.Size(this.w,this.h);},equals:function(sz){var equals=false;if(sz!=null){equals=((this.w==sz.w&&this.h==sz.h)||(isNaN(this.w)&&isNaN(this.h)&&isNaN(sz.w)&&isNaN(sz.h)));}
return equals;},CLASS_NAME:"OpenLayers.Size"});OpenLayers.Console={log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){},CLASS_NAME:"OpenLayers.Console"};(function(){if(window.console){var scripts=document.getElementsByTagName("script");for(var i=0;i<scripts.length;++i){if(scripts[i].src.indexOf("firebug.js")!=-1){OpenLayers.Util.extend(OpenLayers.Console,console);break;}}}})();OpenLayers.Control=OpenLayers.Class({id:null,map:null,div:null,type:null,allowSelection:false,displayClass:"",title:"",active:null,handler:null,eventListeners:null,events:null,EVENT_TYPES:["activate","deactivate"],initialize:function(options){this.displayClass=this.CLASS_NAME.replace("OpenLayers.","ol").replace(/\./g,"");OpenLayers.Util.extend(this,options);this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){if(this.events){if(this.eventListeners){this.events.un(this.eventListeners);}
this.events.destroy();this.events=null;}
this.eventListeners=null;if(this.handler){this.handler.destroy();this.handler=null;}
if(this.handlers){for(var key in this.handlers){if(this.handlers.hasOwnProperty(key)&&typeof this.handlers[key].destroy=="function"){this.handlers[key].destroy();}}
this.handlers=null;}
if(this.map){this.map.removeControl(this);this.map=null;}},setMap:function(map){this.map=map;if(this.handler){this.handler.setMap(map);}},draw:function(px){if(this.div==null){this.div=OpenLayers.Util.createDiv(this.id);this.div.className=this.displayClass;if(!this.allowSelection){this.div.className+=" olControlNoSelect";this.div.setAttribute("unselectable","on",0);this.div.onselectstart=function(){return(false);};}
if(this.title!=""){this.div.title=this.title;}}
if(px!=null){this.position=px.clone();}
this.moveTo(this.position);return this.div;},moveTo:function(px){if((px!=null)&&(this.div!=null)){this.div.style.left=px.x+"px";this.div.style.top=px.y+"px";}},activate:function(){if(this.active){return false;}
if(this.handler){this.handler.activate();}
this.active=true;this.events.triggerEvent("activate");return true;},deactivate:function(){if(this.active){if(this.handler){this.handler.deactivate();}
this.active=false;this.events.triggerEvent("deactivate");return true;}
return false;},CLASS_NAME:"OpenLayers.Control"});OpenLayers.Control.TYPE_BUTTON=1;OpenLayers.Control.TYPE_TOGGLE=2;OpenLayers.Control.TYPE_TOOL=3;OpenLayers.Icon=OpenLayers.Class({url:null,size:null,offset:null,calculateOffset:null,imageDiv:null,px:null,initialize:function(url,size,offset,calculateOffset){this.url=url;this.size=(size)?size:new OpenLayers.Size(20,20);this.offset=offset?offset:new OpenLayers.Pixel(-(this.size.w/2),-(this.size.h/2));this.calculateOffset=calculateOffset;var id=OpenLayers.Util.createUniqueID("OL_Icon_");this.imageDiv=OpenLayers.Util.createAlphaImageDiv(id);},destroy:function(){OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild);this.imageDiv.innerHTML="";this.imageDiv=null;},clone:function(){return new OpenLayers.Icon(this.url,this.size,this.offset,this.calculateOffset);},setSize:function(size){if(size!=null){this.size=size;}
this.draw();},setUrl:function(url){if(url!=null){this.url=url;}
this.draw();},draw:function(px){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,this.size,this.url,"absolute");this.moveTo(px);return this.imageDiv;},setOpacity:function(opacity){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,null,null,null,null,null,opacity);},moveTo:function(px){if(px!=null){this.px=px;}
if(this.imageDiv!=null){if(this.px==null){this.display(false);}else{if(this.calculateOffset){this.offset=this.calculateOffset(this.size);}
var offsetPx=this.px.offset(this.offset);OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,offsetPx);}}},display:function(display){this.imageDiv.style.display=(display)?"":"none";},CLASS_NAME:"OpenLayers.Icon"});OpenLayers.Lang={code:null,defaultCode:"en",getCode:function(){if(!OpenLayers.Lang.code){OpenLayers.Lang.setCode();}
return OpenLayers.Lang.code;},setCode:function(code){var lang;if(!code){code=(OpenLayers.Util.getBrowserName()=="msie")?navigator.userLanguage:navigator.language;}
var parts=code.split('-');parts[0]=parts[0].toLowerCase();if(typeof OpenLayers.Lang[parts[0]]=="object"){lang=parts[0];}
if(parts[1]){var testLang=parts[0]+'-'+parts[1].toUpperCase();if(typeof OpenLayers.Lang[testLang]=="object"){lang=testLang;}}
if(!lang){OpenLayers.Console.warn('Failed to find OpenLayers.Lang.'+parts.join("-")+' dictionary, falling back to default language');lang=OpenLayers.Lang.defaultCode;}
OpenLayers.Lang.code=lang;},translate:function(key,context){var dictionary=OpenLayers.Lang[OpenLayers.Lang.getCode()];var message=dictionary[key];if(!message){message=key;}
if(context){message=OpenLayers.String.format(message,context);}
return message;}};OpenLayers.i18n=OpenLayers.Lang.translate;OpenLayers.Popup=OpenLayers.Class({events:null,id:"",lonlat:null,div:null,size:null,contentHTML:"",backgroundColor:"",opacity:"",border:"",contentDiv:null,groupDiv:null,closeDiv:null,autoSize:false,minSize:null,maxSize:null,padding:0,fixPadding:function(){if(typeof this.padding=="number"){this.padding=new OpenLayers.Bounds(this.padding,this.padding,this.padding,this.padding);}},panMapIfOutOfView:false,map:null,initialize:function(id,lonlat,size,contentHTML,closeBox,closeBoxCallback){if(id==null){id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");}
this.id=id;this.lonlat=lonlat;this.size=(size!=null)?size:new OpenLayers.Size(OpenLayers.Popup.WIDTH,OpenLayers.Popup.HEIGHT);if(contentHTML!=null){this.contentHTML=contentHTML;}
this.backgroundColor=OpenLayers.Popup.COLOR;this.opacity=OpenLayers.Popup.OPACITY;this.border=OpenLayers.Popup.BORDER;this.div=OpenLayers.Util.createDiv(this.id,null,null,null,null,null,"hidden");this.div.className='olPopup';var groupDivId=this.id+"_GroupDiv";this.groupDiv=OpenLayers.Util.createDiv(groupDivId,null,null,null,"relative",null,"hidden");var id=this.div.id+"_contentDiv";this.contentDiv=OpenLayers.Util.createDiv(id,null,this.size.clone(),null,"relative");this.contentDiv.className='olPopupContent';this.groupDiv.appendChild(this.contentDiv);this.div.appendChild(this.groupDiv);if(closeBox){this.addCloseBox(closeBoxCallback);}
this.registerEvents();},destroy:function(){this.id=null;this.lonlat=null;this.size=null;this.contentHTML=null;this.backgroundColor=null;this.opacity=null;this.border=null;this.events.destroy();this.events=null;if(this.closeDiv){OpenLayers.Event.stopObservingElement(this.closeDiv);this.groupDiv.removeChild(this.closeDiv);}
this.closeDiv=null;this.div.removeChild(this.groupDiv);this.groupDiv=null;if(this.map!=null){this.map.removePopup(this);}
this.map=null;this.div=null;this.autoSize=null;this.minSize=null;this.maxSize=null;this.padding=null;this.panMapIfOutOfView=null;},draw:function(px){if(px==null){if((this.lonlat!=null)&&(this.map!=null)){px=this.map.getLayerPxFromLonLat(this.lonlat);}}
if(OpenLayers.Util.getBrowserName()=='firefox'){this.map.events.register("movestart",this,function(){var style=document.defaultView.getComputedStyle(this.contentDiv,null);var currentOverflow=style.getPropertyValue("overflow");if(currentOverflow!="hidden"){this.contentDiv._oldOverflow=currentOverflow;this.contentDiv.style.overflow="hidden";}});this.map.events.register("moveend",this,function(){var oldOverflow=this.contentDiv._oldOverflow;if(oldOverflow){this.contentDiv.style.overflow=oldOverflow;this.contentDiv._oldOverflow=null;}});}
this.moveTo(px);if(!this.autoSize){this.setSize(this.size);}
this.setBackgroundColor();this.setOpacity();this.setBorder();this.setContentHTML();if(this.panMapIfOutOfView){this.panIntoView();}
return this.div;},updatePosition:function(){if((this.lonlat)&&(this.map)){var px=this.map.getLayerPxFromLonLat(this.lonlat);if(px){this.moveTo(px);}}},moveTo:function(px){if((px!=null)&&(this.div!=null)){this.div.style.left=px.x+"px";this.div.style.top=px.y+"px";}},visible:function(){return OpenLayers.Element.visible(this.div);},toggle:function(){if(this.visible()){this.hide();}else{this.show();}},show:function(){OpenLayers.Element.show(this.div);if(this.panMapIfOutOfView){this.panIntoView();}},hide:function(){OpenLayers.Element.hide(this.div);},setSize:function(size){this.size=size;var contentSize=this.size.clone();var contentDivPadding=this.getContentDivPadding();var wPadding=contentDivPadding.left+contentDivPadding.right;var hPadding=contentDivPadding.top+contentDivPadding.bottom;this.fixPadding();wPadding+=this.padding.left+this.padding.right;hPadding+=this.padding.top+this.padding.bottom;if(this.closeDiv){var closeDivWidth=parseInt(this.closeDiv.style.width);wPadding+=closeDivWidth+contentDivPadding.right;}
this.size.w+=wPadding;this.size.h+=hPadding;if(OpenLayers.Util.getBrowserName()=="msie"){contentSize.w+=contentDivPadding.left+contentDivPadding.right;contentSize.h+=contentDivPadding.bottom+contentDivPadding.top;}
if(this.div!=null){this.div.style.width=this.size.w+"px";this.div.style.height=this.size.h+"px";}
if(this.contentDiv!=null){this.contentDiv.style.width=contentSize.w+"px";this.contentDiv.style.height=contentSize.h+"px";}},setBackgroundColor:function(color){if(color!=undefined){this.backgroundColor=color;}
if(this.div!=null){this.div.style.backgroundColor=this.backgroundColor;}},setOpacity:function(opacity){if(opacity!=undefined){this.opacity=opacity;}
if(this.div!=null){this.div.style.opacity=this.opacity;this.div.style.filter='alpha(opacity='+this.opacity*100+')';}},setBorder:function(border){if(border!=undefined){this.border=border;}
if(this.div!=null){this.div.style.border=this.border;}},setContentHTML:function(contentHTML){if(contentHTML!=null){this.contentHTML=contentHTML;}
if(this.autoSize){var realSize=OpenLayers.Util.getRenderedDimensions(this.contentHTML);var safeSize=this.getSafeContentSize(realSize);var newSize=null;if(safeSize.equals(realSize)){newSize=realSize;}else{var fixedSize=new OpenLayers.Size();fixedSize.w=(safeSize.w<realSize.w)?safeSize.w:null;fixedSize.h=(safeSize.h<realSize.h)?safeSize.h:null;if(fixedSize.w&&fixedSize.h){newSize=safeSize;}else{var clippedSize=OpenLayers.Util.getRenderedDimensions(this.contentHTML,fixedSize);var currentOverflow=OpenLayers.Element.getStyle(this.contentDiv,"overflow");if((currentOverflow!="hidden")&&(clippedSize.equals(safeSize))){var scrollBar=OpenLayers.Util.getScrollbarWidth();if(fixedSize.w){clippedSize.h+=scrollBar;}else{clippedSize.w+=scrollBar;}}
newSize=this.getSafeContentSize(clippedSize);}}
this.setSize(newSize);}
if(this.contentDiv!=null){this.contentDiv.innerHTML=this.contentHTML;}},getSafeContentSize:function(size){var safeContentSize=size.clone();var contentDivPadding=this.getContentDivPadding();var wPadding=contentDivPadding.left+contentDivPadding.right;var hPadding=contentDivPadding.top+contentDivPadding.bottom;this.fixPadding();wPadding+=this.padding.left+this.padding.right;hPadding+=this.padding.top+this.padding.bottom;if(this.closeDiv){var closeDivWidth=parseInt(this.closeDiv.style.width);wPadding+=closeDivWidth+contentDivPadding.right;}
if(this.minSize){safeContentSize.w=Math.max(safeContentSize.w,(this.minSize.w-wPadding));safeContentSize.h=Math.max(safeContentSize.h,(this.minSize.h-hPadding));}
if(this.maxSize){safeContentSize.w=Math.min(safeContentSize.w,(this.maxSize.w-wPadding));safeContentSize.h=Math.min(safeContentSize.h,(this.maxSize.h-hPadding));}
if(this.map&&this.map.size){var maxY=this.map.size.h-
this.map.paddingForPopups.top-
this.map.paddingForPopups.bottom-
hPadding;var maxX=this.map.size.w-
this.map.paddingForPopups.left-
this.map.paddingForPopups.right-
wPadding;safeContentSize.w=Math.min(safeContentSize.w,maxX);safeContentSize.h=Math.min(safeContentSize.h,maxY);}
return safeContentSize;},getContentDivPadding:function(){var contentDivPadding=this._contentDivPadding;if(!contentDivPadding){this.div.style.display="none";document.body.appendChild(this.div);contentDivPadding=new OpenLayers.Bounds(OpenLayers.Element.getStyle(this.contentDiv,"padding-left"),OpenLayers.Element.getStyle(this.contentDiv,"padding-bottom"),OpenLayers.Element.getStyle(this.contentDiv,"padding-right"),OpenLayers.Element.getStyle(this.contentDiv,"padding-top"));this._contentDivPadding=contentDivPadding;document.body.removeChild(this.div);this.div.style.display="";}
return contentDivPadding;},addCloseBox:function(callback){this.closeDiv=OpenLayers.Util.createDiv(this.id+"_close",null,new OpenLayers.Size(17,17));this.closeDiv.className="olPopupCloseBox";var contentDivPadding=this.getContentDivPadding();this.closeDiv.style.right=contentDivPadding.right+"px";this.closeDiv.style.top=contentDivPadding.top+"px";this.groupDiv.appendChild(this.closeDiv);var closePopup=callback||function(e){this.hide();OpenLayers.Event.stop(e);};OpenLayers.Event.observe(this.closeDiv,"click",OpenLayers.Function.bindAsEventListener(closePopup,this));},panIntoView:function(){var mapSize=this.map.getSize();var origTL=this.map.getViewPortPxFromLayerPx(new OpenLayers.Pixel(parseInt(this.div.style.left),parseInt(this.div.style.top)));var newTL=origTL.clone();if(origTL.x<this.map.paddingForPopups.left){newTL.x=this.map.paddingForPopups.left;}else
if((origTL.x+this.size.w)>(mapSize.w-this.map.paddingForPopups.right)){newTL.x=mapSize.w-this.map.paddingForPopups.right-this.size.w;}
if(origTL.y<this.map.paddingForPopups.top){newTL.y=this.map.paddingForPopups.top;}else
if((origTL.y+this.size.h)>(mapSize.h-this.map.paddingForPopups.bottom)){newTL.y=mapSize.h-this.map.paddingForPopups.bottom-this.size.h;}
var dx=origTL.x-newTL.x;var dy=origTL.y-newTL.y;this.map.pan(dx,dy);},registerEvents:function(){this.events=new OpenLayers.Events(this,this.div,null,true);this.events.on({"mousedown":this.onmousedown,"mousemove":this.onmousemove,"mouseup":this.onmouseup,"click":this.onclick,"mouseout":this.onmouseout,"dblclick":this.ondblclick,scope:this});},onmousedown:function(evt){this.mousedown=true;OpenLayers.Event.stop(evt,true);},onmousemove:function(evt){if(this.mousedown){OpenLayers.Event.stop(evt,true);}},onmouseup:function(evt){if(this.mousedown){this.mousedown=false;OpenLayers.Event.stop(evt,true);}},onclick:function(evt){OpenLayers.Event.stop(evt,true);},onmouseout:function(evt){this.mousedown=false;},ondblclick:function(evt){OpenLayers.Event.stop(evt,true);},CLASS_NAME:"OpenLayers.Popup"});OpenLayers.Popup.WIDTH=200;OpenLayers.Popup.HEIGHT=200;OpenLayers.Popup.COLOR="white";OpenLayers.Popup.OPACITY=1;OpenLayers.Popup.BORDER="0px";OpenLayers.Renderer=OpenLayers.Class({container:null,extent:null,size:null,resolution:null,map:null,initialize:function(containerID){this.container=OpenLayers.Util.getElement(containerID);},destroy:function(){this.container=null;this.extent=null;this.size=null;this.resolution=null;this.map=null;},supported:function(){return false;},setExtent:function(extent){this.extent=extent.clone();this.resolution=null;},setSize:function(size){this.size=size.clone();this.resolution=null;},getResolution:function(){this.resolution=this.resolution||this.map.getResolution();return this.resolution;},drawFeature:function(feature,style){if(style==null){style=feature.style;}
if(feature.geometry){this.drawGeometry(feature.geometry,style,feature.id);}},drawGeometry:function(geometry,style,featureId){},clear:function(){},getFeatureIdFromEvent:function(evt){},eraseFeatures:function(features){if(!(features instanceof Array)){features=[features];}
for(var i=0;i<features.length;++i){this.eraseGeometry(features[i].geometry);}},eraseGeometry:function(geometry){},CLASS_NAME:"OpenLayers.Renderer"});OpenLayers.Tween=OpenLayers.Class({INTERVAL:10,easing:null,begin:null,finish:null,duration:null,callbacks:null,time:null,interval:null,playing:false,initialize:function(easing){this.easing=(easing)?easing:OpenLayers.Easing.Expo.easeOut;},start:function(begin,finish,duration,options){this.playing=true;this.begin=begin;this.finish=finish;this.duration=duration;this.callbacks=options.callbacks;this.time=0;if(this.interval){window.clearInterval(this.interval);this.interval=null;}
if(this.callbacks&&this.callbacks.start){this.callbacks.start.call(this,this.begin);}
this.interval=window.setInterval(OpenLayers.Function.bind(this.play,this),this.INTERVAL);},stop:function(){if(!this.playing){return;}
if(this.callbacks&&this.callbacks.done){this.callbacks.done.call(this,this.finish);}
window.clearInterval(this.interval);this.interval=null;this.playing=false;},play:function(){var value={};for(var i in this.begin){var b=this.begin[i];var f=this.finish[i];if(b==null||f==null||isNaN(b)||isNaN(f)){OpenLayers.Console.error('invalid value for Tween');}
var c=f-b;value[i]=this.easing.apply(this,[this.time,b,c,this.duration]);}
this.time++;if(this.callbacks&&this.callbacks.eachStep){this.callbacks.eachStep.call(this,value);}
if(this.time>this.duration){if(this.callbacks&&this.callbacks.done){this.callbacks.done.call(this,this.finish);this.playing=false;}
window.clearInterval(this.interval);this.interval=null;}},CLASS_NAME:"OpenLayers.Tween"});OpenLayers.Easing={CLASS_NAME:"OpenLayers.Easing"};OpenLayers.Easing.Linear={easeIn:function(t,b,c,d){return c*t/d+b;},easeOut:function(t,b,c,d){return c*t/d+b;},easeInOut:function(t,b,c,d){return c*t/d+b;},CLASS_NAME:"OpenLayers.Easing.Linear"};OpenLayers.Easing.Expo={easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOut:function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},CLASS_NAME:"OpenLayers.Easing.Expo"};OpenLayers.Easing.Quad={easeIn:function(t,b,c,d){return c*(t/=d)*t+b;},easeOut:function(t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},CLASS_NAME:"OpenLayers.Easing.Quad"};OpenLayers.Rico.Color=OpenLayers.Class({initialize:function(red,green,blue){this.rgb={r:red,g:green,b:blue};},setRed:function(r){this.rgb.r=r;},setGreen:function(g){this.rgb.g=g;},setBlue:function(b){this.rgb.b=b;},setHue:function(h){var hsb=this.asHSB();hsb.h=h;this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);},setSaturation:function(s){var hsb=this.asHSB();hsb.s=s;this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);},setBrightness:function(b){var hsb=this.asHSB();hsb.b=b;this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);},darken:function(percent){var hsb=this.asHSB();this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,Math.max(hsb.b-percent,0));},brighten:function(percent){var hsb=this.asHSB();this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,Math.min(hsb.b+percent,1));},blend:function(other){this.rgb.r=Math.floor((this.rgb.r+other.rgb.r)/2);this.rgb.g=Math.floor((this.rgb.g+other.rgb.g)/2);this.rgb.b=Math.floor((this.rgb.b+other.rgb.b)/2);},isBright:function(){var hsb=this.asHSB();return this.asHSB().b>0.5;},isDark:function(){return!this.isBright();},asRGB:function(){return"rgb("+this.rgb.r+","+this.rgb.g+","+this.rgb.b+")";},asHex:function(){return"#"+this.rgb.r.toColorPart()+this.rgb.g.toColorPart()+this.rgb.b.toColorPart();},asHSB:function(){return OpenLayers.Rico.Color.RGBtoHSB(this.rgb.r,this.rgb.g,this.rgb.b);},toString:function(){return this.asHex();}});OpenLayers.Rico.Color.createFromHex=function(hexCode){if(hexCode.length==4){var shortHexCode=hexCode;var hexCode='#';for(var i=1;i<4;i++){hexCode+=(shortHexCode.charAt(i)+
shortHexCode.charAt(i));}}
if(hexCode.indexOf('#')==0){hexCode=hexCode.substring(1);}
var red=hexCode.substring(0,2);var green=hexCode.substring(2,4);var blue=hexCode.substring(4,6);return new OpenLayers.Rico.Color(parseInt(red,16),parseInt(green,16),parseInt(blue,16));};OpenLayers.Rico.Color.createColorFromBackground=function(elem){var actualColor=RicoUtil.getElementsComputedStyle(OpenLayers.Util.getElement(elem),"backgroundColor","background-color");if(actualColor=="transparent"&&elem.parentNode){return OpenLayers.Rico.Color.createColorFromBackground(elem.parentNode);}
if(actualColor==null){return new OpenLayers.Rico.Color(255,255,255);}
if(actualColor.indexOf("rgb(")==0){var colors=actualColor.substring(4,actualColor.length-1);var colorArray=colors.split(",");return new OpenLayers.Rico.Color(parseInt(colorArray[0]),parseInt(colorArray[1]),parseInt(colorArray[2]));}
else if(actualColor.indexOf("#")==0){return OpenLayers.Rico.Color.createFromHex(actualColor);}
else{return new OpenLayers.Rico.Color(255,255,255);}};OpenLayers.Rico.Color.HSBtoRGB=function(hue,saturation,brightness){var red=0;var green=0;var blue=0;if(saturation==0){red=parseInt(brightness*255.0+0.5);green=red;blue=red;}
else{var h=(hue-Math.floor(hue))*6.0;var f=h-Math.floor(h);var p=brightness*(1.0-saturation);var q=brightness*(1.0-saturation*f);var t=brightness*(1.0-(saturation*(1.0-f)));switch(parseInt(h)){case 0:red=(brightness*255.0+0.5);green=(t*255.0+0.5);blue=(p*255.0+0.5);break;case 1:red=(q*255.0+0.5);green=(brightness*255.0+0.5);blue=(p*255.0+0.5);break;case 2:red=(p*255.0+0.5);green=(brightness*255.0+0.5);blue=(t*255.0+0.5);break;case 3:red=(p*255.0+0.5);green=(q*255.0+0.5);blue=(brightness*255.0+0.5);break;case 4:red=(t*255.0+0.5);green=(p*255.0+0.5);blue=(brightness*255.0+0.5);break;case 5:red=(brightness*255.0+0.5);green=(p*255.0+0.5);blue=(q*255.0+0.5);break;}}
return{r:parseInt(red),g:parseInt(green),b:parseInt(blue)};};OpenLayers.Rico.Color.RGBtoHSB=function(r,g,b){var hue;var saturation;var brightness;var cmax=(r>g)?r:g;if(b>cmax){cmax=b;}
var cmin=(r<g)?r:g;if(b<cmin){cmin=b;}
brightness=cmax/255.0;if(cmax!=0){saturation=(cmax-cmin)/cmax;}else{saturation=0;}
if(saturation==0){hue=0;}else{var redc=(cmax-r)/(cmax-cmin);var greenc=(cmax-g)/(cmax-cmin);var bluec=(cmax-b)/(cmax-cmin);if(r==cmax){hue=bluec-greenc;}else if(g==cmax){hue=2.0+redc-bluec;}else{hue=4.0+greenc-redc;}
hue=hue/6.0;if(hue<0){hue=hue+1.0;}}
return{h:hue,s:saturation,b:brightness};};OpenLayers.Control.ArgParser=OpenLayers.Class(OpenLayers.Control,{center:null,zoom:null,layers:null,displayProjection:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var i=0;i<this.map.controls.length;i++){var control=this.map.controls[i];if((control!=this)&&(control.CLASS_NAME=="OpenLayers.Control.ArgParser")){if(control.displayProjection!=this.displayProjection){this.displayProjection=control.displayProjection;}
break;}}
if(i==this.map.controls.length){var args=OpenLayers.Util.getParameters();if(args.layers){this.layers=args.layers;this.map.events.register('addlayer',this,this.configureLayers);this.configureLayers();}
if(args.lat&&args.lon){this.center=new OpenLayers.LonLat(parseFloat(args.lon),parseFloat(args.lat));if(args.zoom){this.zoom=parseInt(args.zoom);}
this.map.events.register('changebaselayer',this,this.setCenter);this.setCenter();}}},setCenter:function(){if(this.map.baseLayer){this.map.events.unregister('changebaselayer',this,this.setCenter);if(this.displayProjection){this.center.transform(this.displayProjection,this.map.getProjectionObject());}
this.map.setCenter(this.center,this.zoom);}},configureLayers:function(){if(this.layers.length==this.map.layers.length){this.map.events.unregister('addlayer',this,this.configureLayers);for(var i=0;i<this.layers.length;i++){var layer=this.map.layers[i];var c=this.layers.charAt(i);if(c=="B"){this.map.setBaseLayer(layer);}else if((c=="T")||(c=="F")){layer.setVisibility(c=="T");}}}},CLASS_NAME:"OpenLayers.Control.ArgParser"});OpenLayers.Control.Attribution=OpenLayers.Class(OpenLayers.Control,{separator:", ",initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){this.map.events.un({"removelayer":this.updateAttribution,"addlayer":this.updateAttribution,"changelayer":this.updateAttribution,"changebaselayer":this.updateAttribution,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);this.map.events.on({'changebaselayer':this.updateAttribution,'changelayer':this.updateAttribution,'addlayer':this.updateAttribution,'removelayer':this.updateAttribution,scope:this});this.updateAttribution();return this.div;},updateAttribution:function(){var attributions=[];if(this.map&&this.map.layers){for(var i=0;i<this.map.layers.length;i++){var layer=this.map.layers[i];if(layer.attribution&&layer.getVisibility()){attributions.push(layer.attribution);}}
this.div.innerHTML=attributions.join(this.separator);}},CLASS_NAME:"OpenLayers.Control.Attribution"});OpenLayers.Control.Button=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){},CLASS_NAME:"OpenLayers.Control.Button"});OpenLayers.Control.LayerSwitcher=OpenLayers.Class(OpenLayers.Control,{activeColor:"darkblue",layerStates:null,layersDiv:null,baseLayersDiv:null,baseLayers:null,dataLbl:null,dataLayersDiv:null,dataLayers:null,minimizeDiv:null,maximizeDiv:null,ascending:true,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);this.layerStates=[];},destroy:function(){OpenLayers.Event.stopObservingElement(this.div);OpenLayers.Event.stopObservingElement(this.minimizeDiv);OpenLayers.Event.stopObservingElement(this.maximizeDiv);this.clearLayersArray("base");this.clearLayersArray("data");this.map.events.un({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);this.map.events.on({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});},draw:function(){OpenLayers.Control.prototype.draw.apply(this);this.loadContents();if(!this.outsideViewport){this.minimizeControl();}
this.redraw();return this.div;},clearLayersArray:function(layersType){var layers=this[layersType+"Layers"];if(layers){for(var i=0;i<layers.length;i++){var layer=layers[i];OpenLayers.Event.stopObservingElement(layer.inputElem);OpenLayers.Event.stopObservingElement(layer.labelSpan);}}
this[layersType+"LayersDiv"].innerHTML="";this[layersType+"Layers"]=[];},checkRedraw:function(){var redraw=false;if(!this.layerStates.length||(this.map.layers.length!=this.layerStates.length)){redraw=true;}else{for(var i=0;i<this.layerStates.length;i++){var layerState=this.layerStates[i];var layer=this.map.layers[i];if((layerState.name!=layer.name)||(layerState.inRange!=layer.inRange)||(layerState.id!=layer.id)||(layerState.visibility!=layer.visibility)){redraw=true;break;}}}
return redraw;},redraw:function(){if(!this.checkRedraw()){return this.div;}
this.clearLayersArray("base");this.clearLayersArray("data");var containsOverlays=false;var containsBaseLayers=false;this.layerStates=new Array(this.map.layers.length);for(var i=0;i<this.map.layers.length;i++){var layer=this.map.layers[i];this.layerStates[i]={'name':layer.name,'visibility':layer.visibility,'inRange':layer.inRange,'id':layer.id};}
var layers=this.map.layers.slice();if(!this.ascending){layers.reverse();}
for(var i=0;i<layers.length;i++){var layer=layers[i];var baseLayer=layer.isBaseLayer;if(layer.displayInLayerSwitcher){if(baseLayer){containsBaseLayers=true;}else{containsOverlays=true;}
var checked=(baseLayer)?(layer==this.map.baseLayer):layer.getVisibility();var inputElem=document.createElement("input");inputElem.id="input_"+layer.name;inputElem.name=(baseLayer)?"baseLayers":layer.name;inputElem.type=(baseLayer)?"radio":"checkbox";inputElem.value=layer.name;inputElem.checked=checked;inputElem.defaultChecked=checked;if(!baseLayer&&!layer.inRange){inputElem.disabled=true;}
var context={'inputElem':inputElem,'layer':layer,'layerSwitcher':this};OpenLayers.Event.observe(inputElem,"mouseup",OpenLayers.Function.bindAsEventListener(this.onInputClick,context));var labelSpan=document.createElement("span");if(!baseLayer&&!layer.inRange){labelSpan.style.color="gray";}
labelSpan.innerHTML=layer.name;labelSpan.style.verticalAlign=(baseLayer)?"bottom":"baseline";OpenLayers.Event.observe(labelSpan,"click",OpenLayers.Function.bindAsEventListener(this.onInputClick,context));var br=document.createElement("br");var groupArray=(baseLayer)?this.baseLayers:this.dataLayers;groupArray.push({'layer':layer,'inputElem':inputElem,'labelSpan':labelSpan});var groupDiv=(baseLayer)?this.baseLayersDiv:this.dataLayersDiv;groupDiv.appendChild(inputElem);groupDiv.appendChild(labelSpan);groupDiv.appendChild(br);}}
this.dataLbl.style.display=(containsOverlays)?"":"none";this.baseLbl.style.display=(containsBaseLayers)?"":"none";return this.div;},onInputClick:function(e){if(!this.inputElem.disabled){if(this.inputElem.type=="radio"){this.inputElem.checked=true;this.layer.map.setBaseLayer(this.layer);}else{this.inputElem.checked=!this.inputElem.checked;this.layerSwitcher.updateMap();}}
OpenLayers.Event.stop(e);},onLayerClick:function(e){this.updateMap();},updateMap:function(){for(var i=0;i<this.baseLayers.length;i++){var layerEntry=this.baseLayers[i];if(layerEntry.inputElem.checked){this.map.setBaseLayer(layerEntry.layer,false);}}
for(var i=0;i<this.dataLayers.length;i++){var layerEntry=this.dataLayers[i];layerEntry.layer.setVisibility(layerEntry.inputElem.checked);}},maximizeControl:function(e){this.div.style.width="20em";this.div.style.height="";this.showControls(false);if(e!=null){OpenLayers.Event.stop(e);}},minimizeControl:function(e){this.div.style.width="0px";this.div.style.height="0px";this.showControls(true);if(e!=null){OpenLayers.Event.stop(e);}},showControls:function(minimize){this.maximizeDiv.style.display=minimize?"":"none";this.minimizeDiv.style.display=minimize?"none":"";this.layersDiv.style.display=minimize?"none":"";},loadContents:function(){this.div.style.position="absolute";this.div.style.top="25px";this.div.style.right="0px";this.div.style.left="";this.div.style.fontFamily="sans-serif";this.div.style.fontWeight="bold";this.div.style.marginTop="3px";this.div.style.marginLeft="3px";this.div.style.marginBottom="3px";this.div.style.fontSize="smaller";this.div.style.color="white";this.div.style.backgroundColor="transparent";OpenLayers.Event.observe(this.div,"mouseup",OpenLayers.Function.bindAsEventListener(this.mouseUp,this));OpenLayers.Event.observe(this.div,"click",this.ignoreEvent);OpenLayers.Event.observe(this.div,"mousedown",OpenLayers.Function.bindAsEventListener(this.mouseDown,this));OpenLayers.Event.observe(this.div,"dblclick",this.ignoreEvent);this.layersDiv=document.createElement("div");this.layersDiv.id="layersDiv";this.layersDiv.style.paddingTop="5px";this.layersDiv.style.paddingLeft="10px";this.layersDiv.style.paddingBottom="5px";this.layersDiv.style.paddingRight="75px";this.layersDiv.style.backgroundColor=this.activeColor;this.layersDiv.style.width="100%";this.layersDiv.style.height="100%";this.baseLbl=document.createElement("div");this.baseLbl.innerHTML=OpenLayers.i18n("baseLayer");this.baseLbl.style.marginTop="3px";this.baseLbl.style.marginLeft="3px";this.baseLbl.style.marginBottom="3px";this.baseLayersDiv=document.createElement("div");this.baseLayersDiv.style.paddingLeft="10px";this.dataLbl=document.createElement("div");this.dataLbl.innerHTML=OpenLayers.i18n("overlays");this.dataLbl.style.marginTop="3px";this.dataLbl.style.marginLeft="3px";this.dataLbl.style.marginBottom="3px";this.dataLayersDiv=document.createElement("div");this.dataLayersDiv.style.paddingLeft="10px";if(this.ascending){this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);}else{this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);}
this.div.appendChild(this.layersDiv);OpenLayers.Rico.Corner.round(this.div,{corners:"tl bl",bgColor:"transparent",color:this.activeColor,blend:false});OpenLayers.Rico.Corner.changeOpacity(this.layersDiv,0.75);var imgLocation=OpenLayers.Util.getImagesLocation();var sz=new OpenLayers.Size(18,18);var img=imgLocation+'layer-switcher-maximize.png';this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MaximizeDiv",null,sz,img,"absolute");this.maximizeDiv.style.top="5px";this.maximizeDiv.style.right="0px";this.maximizeDiv.style.left="";this.maximizeDiv.style.display="none";OpenLayers.Event.observe(this.maximizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.maximizeControl,this));this.div.appendChild(this.maximizeDiv);var img=imgLocation+'layer-switcher-minimize.png';var sz=new OpenLayers.Size(18,18);this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MinimizeDiv",null,sz,img,"absolute");this.minimizeDiv.style.top="5px";this.minimizeDiv.style.right="0px";this.minimizeDiv.style.left="";this.minimizeDiv.style.display="none";OpenLayers.Event.observe(this.minimizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.minimizeControl,this));this.div.appendChild(this.minimizeDiv);},ignoreEvent:function(evt){OpenLayers.Event.stop(evt);},mouseDown:function(evt){this.isMouseDown=true;this.ignoreEvent(evt);},mouseUp:function(evt){if(this.isMouseDown){this.isMouseDown=false;this.ignoreEvent(evt);}},CLASS_NAME:"OpenLayers.Control.LayerSwitcher"});OpenLayers.Control.MouseDefaults=OpenLayers.Class(OpenLayers.Control,{performedDrag:false,wheelObserver:null,initialize:function(){OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){if(this.handler){this.handler.destroy();}
this.handler=null;this.map.events.un({"click":this.defaultClick,"dblclick":this.defaultDblClick,"mousedown":this.defaultMouseDown,"mouseup":this.defaultMouseUp,"mousemove":this.defaultMouseMove,"mouseout":this.defaultMouseOut,scope:this});OpenLayers.Event.stopObserving(window,"DOMMouseScroll",this.wheelObserver);OpenLayers.Event.stopObserving(window,"mousewheel",this.wheelObserver);OpenLayers.Event.stopObserving(document,"mousewheel",this.wheelObserver);this.wheelObserver=null;OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){this.map.events.on({"click":this.defaultClick,"dblclick":this.defaultDblClick,"mousedown":this.defaultMouseDown,"mouseup":this.defaultMouseUp,"mousemove":this.defaultMouseMove,"mouseout":this.defaultMouseOut,scope:this});this.registerWheelEvents();},registerWheelEvents:function(){this.wheelObserver=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this);OpenLayers.Event.observe(window,"DOMMouseScroll",this.wheelObserver);OpenLayers.Event.observe(window,"mousewheel",this.wheelObserver);OpenLayers.Event.observe(document,"mousewheel",this.wheelObserver);},defaultClick:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
var notAfterDrag=!this.performedDrag;this.performedDrag=false;return notAfterDrag;},defaultDblClick:function(evt){var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom+1);OpenLayers.Event.stop(evt);return false;},defaultMouseDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
this.mouseDragStart=evt.xy.clone();this.performedDrag=false;if(evt.shiftKey){this.map.div.style.cursor="crosshair";this.zoomBox=OpenLayers.Util.createDiv('zoomBox',this.mouseDragStart,null,null,"absolute","2px solid red");this.zoomBox.style.backgroundColor="white";this.zoomBox.style.filter="alpha(opacity=50)";this.zoomBox.style.opacity="0.50";this.zoomBox.style.fontSize="1px";this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.viewPortDiv.appendChild(this.zoomBox);}
document.onselectstart=function(){return false;};OpenLayers.Event.stop(evt);},defaultMouseMove:function(evt){this.mousePosition=evt.xy.clone();if(this.mouseDragStart!=null){if(this.zoomBox){var deltaX=Math.abs(this.mouseDragStart.x-evt.xy.x);var deltaY=Math.abs(this.mouseDragStart.y-evt.xy.y);this.zoomBox.style.width=Math.max(1,deltaX)+"px";this.zoomBox.style.height=Math.max(1,deltaY)+"px";if(evt.xy.x<this.mouseDragStart.x){this.zoomBox.style.left=evt.xy.x+"px";}
if(evt.xy.y<this.mouseDragStart.y){this.zoomBox.style.top=evt.xy.y+"px";}}else{var deltaX=this.mouseDragStart.x-evt.xy.x;var deltaY=this.mouseDragStart.y-evt.xy.y;var size=this.map.getSize();var newXY=new OpenLayers.Pixel(size.w/2+deltaX,size.h/2+deltaY);var newCenter=this.map.getLonLatFromViewPortPx(newXY);this.map.setCenter(newCenter,null,true);this.mouseDragStart=evt.xy.clone();this.map.div.style.cursor="move";}
this.performedDrag=true;}},defaultMouseUp:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
if(this.zoomBox){this.zoomBoxEnd(evt);}else{if(this.performedDrag){this.map.setCenter(this.map.center);}}
document.onselectstart=null;this.mouseDragStart=null;this.map.div.style.cursor="";},defaultMouseOut:function(evt){if(this.mouseDragStart!=null&&OpenLayers.Util.mouseLeft(evt,this.map.div)){if(this.zoomBox){this.removeZoomBox();}
this.mouseDragStart=null;}},defaultWheelUp:function(evt){if(this.map.getZoom()<=this.map.getNumZoomLevels()){this.map.setCenter(this.map.getLonLatFromPixel(evt.xy),this.map.getZoom()+1);}},defaultWheelDown:function(evt){if(this.map.getZoom()>0){this.map.setCenter(this.map.getLonLatFromPixel(evt.xy),this.map.getZoom()-1);}},zoomBoxEnd:function(evt){if(this.mouseDragStart!=null){if(Math.abs(this.mouseDragStart.x-evt.xy.x)>5||Math.abs(this.mouseDragStart.y-evt.xy.y)>5){var start=this.map.getLonLatFromViewPortPx(this.mouseDragStart);var end=this.map.getLonLatFromViewPortPx(evt.xy);var top=Math.max(start.lat,end.lat);var bottom=Math.min(start.lat,end.lat);var left=Math.min(start.lon,end.lon);var right=Math.max(start.lon,end.lon);var bounds=new OpenLayers.Bounds(left,bottom,right,top);this.map.zoomToExtent(bounds);}else{var end=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(new OpenLayers.LonLat((end.lon),(end.lat)),this.map.getZoom()+1);}
this.removeZoomBox();}},removeZoomBox:function(){this.map.viewPortDiv.removeChild(this.zoomBox);this.zoomBox=null;},onWheelEvent:function(e){var inMap=false;var elem=OpenLayers.Event.element(e);while(elem!=null){if(this.map&&elem==this.map.div){inMap=true;break;}
elem=elem.parentNode;}
if(inMap){var delta=0;if(!e){e=window.event;}
if(e.wheelDelta){delta=e.wheelDelta/120;if(window.opera&&window.opera.version()<9.2){delta=-delta;}}else if(e.detail){delta=-e.detail/3;}
if(delta){e.xy=this.mousePosition;if(delta<0){this.defaultWheelDown(e);}else{this.defaultWheelUp(e);}}
OpenLayers.Event.stop(e);}},CLASS_NAME:"OpenLayers.Control.MouseDefaults"});OpenLayers.Control.MousePosition=OpenLayers.Class(OpenLayers.Control,{element:null,prefix:'',separator:', ',suffix:'',numdigits:5,granularity:10,lastXy:null,displayProjection:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){if(this.map){this.map.events.unregister('mousemove',this,this.redraw);}
OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.element){this.div.left="";this.div.top="";this.element=this.div;}
this.redraw();return this.div;},redraw:function(evt){var lonLat;if(evt==null){lonLat=new OpenLayers.LonLat(0,0);}else{if(this.lastXy==null||Math.abs(evt.xy.x-this.lastXy.x)>this.granularity||Math.abs(evt.xy.y-this.lastXy.y)>this.granularity)
{this.lastXy=evt.xy;return;}
lonLat=this.map.getLonLatFromPixel(evt.xy);if(!lonLat){return;}
if(this.displayProjection){lonLat.transform(this.map.getProjectionObject(),this.displayProjection);}
this.lastXy=evt.xy;}
var newHtml=this.formatOutput(lonLat);if(newHtml!=this.element.innerHTML){this.element.innerHTML=newHtml;}},formatOutput:function(lonLat){var digits=parseInt(this.numdigits);var newHtml=this.prefix+
lonLat.lon.toFixed(digits)+
this.separator+
lonLat.lat.toFixed(digits)+
this.suffix;return newHtml;},setMap:function(){OpenLayers.Control.prototype.setMap.apply(this,arguments);this.map.events.register('mousemove',this,this.redraw);},CLASS_NAME:"OpenLayers.Control.MousePosition"});OpenLayers.Control.NavigationHistory=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOGGLE,previous:null,previousOptions:null,next:null,nextOptions:null,limit:50,activateOnDraw:true,clearOnDeactivate:false,registry:null,nextStack:null,previousStack:null,listeners:null,restoring:false,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.registry=OpenLayers.Util.extend({"moveend":function(){return{center:this.map.getCenter(),resolution:this.map.getResolution()};}},this.registry);this.clear();var previousOptions={trigger:OpenLayers.Function.bind(this.previousTrigger,this),displayClass:this.displayClass+"Previous"};OpenLayers.Util.extend(previousOptions,this.previousOptions);this.previous=new OpenLayers.Control.Button(previousOptions);var nextOptions={trigger:OpenLayers.Function.bind(this.nextTrigger,this),displayClass:this.displayClass+"Next"};OpenLayers.Util.extend(nextOptions,this.nextOptions);this.next=new OpenLayers.Control.Button(nextOptions);},onPreviousChange:function(state,length){if(state&&!this.previous.active){this.previous.activate();}else if(!state&&this.previous.active){this.previous.deactivate();}},onNextChange:function(state,length){if(state&&!this.next.active){this.next.activate();}else if(!state&&this.next.active){this.next.deactivate();}},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this);this.previous.destroy();this.next.destroy();this.deactivate();for(var prop in this){this[prop]=null;}},setMap:function(map){this.map=map;this.next.setMap(map);this.previous.setMap(map);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);this.next.draw();this.previous.draw();if(this.activateOnDraw){this.activate();}},previousTrigger:function(){var current=this.previousStack.shift();var state=this.previousStack.shift();if(state!=undefined){this.nextStack.unshift(current);this.previousStack.unshift(state);this.restoring=true;this.restore(state);this.restoring=false;this.onNextChange(this.nextStack[0],this.nextStack.length);this.onPreviousChange(this.previousStack[1],this.previousStack.length-1);}else{this.previousStack.unshift(current);}
return state;},nextTrigger:function(){var state=this.nextStack.shift();if(state!=undefined){this.previousStack.unshift(state);this.restoring=true;this.restore(state);this.restoring=false;this.onNextChange(this.nextStack[0],this.nextStack.length);this.onPreviousChange(this.previousStack[1],this.previousStack.length-1);}
return state;},clear:function(){this.previousStack=[];this.nextStack=[];},restore:function(state){var zoom=this.map.getZoomForResolution(state.resolution);this.map.setCenter(state.center,zoom);},setListeners:function(){this.listeners={};for(var type in this.registry){this.listeners[type]=OpenLayers.Function.bind(function(){if(!this.restoring){var state=this.registry[type].apply(this,arguments);this.previousStack.unshift(state);if(this.previousStack.length>1){this.onPreviousChange(this.previousStack[1],this.previousStack.length-1);}
if(this.previousStack.length>(this.limit+1)){this.previousStack.pop();}
if(this.nextStack.length>0){this.nextStack=[];this.onNextChange(null,0);}}
return true;},this);}},activate:function(){var activated=false;if(this.map){if(OpenLayers.Control.prototype.activate.apply(this)){if(this.listeners==null){this.setListeners();}
for(var type in this.listeners){this.map.events.register(type,this,this.listeners[type]);}
activated=true;if(this.previousStack.length==0){this.initStack();}}}
return activated;},initStack:function(){if(this.map.getCenter()){this.listeners.moveend();}},deactivate:function(){var deactivated=false;if(this.map){if(OpenLayers.Control.prototype.deactivate.apply(this)){for(var type in this.listeners){this.map.events.unregister(type,this,this.listeners[type]);}
if(this.clearOnDeactivate){this.clear();}
deactivated=true;}}
return deactivated;},CLASS_NAME:"OpenLayers.Control.NavigationHistory"});OpenLayers.Control.PanZoom=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,buttons:null,position:null,initialize:function(options){this.position=new OpenLayers.Pixel(OpenLayers.Control.PanZoom.X,OpenLayers.Control.PanZoom.Y);OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this,arguments);while(this.buttons.length){var btn=this.buttons.shift();btn.map=null;OpenLayers.Event.stopObservingElement(btn);}
this.buttons=null;this.position=null;},draw:function(px){OpenLayers.Control.prototype.draw.apply(this,arguments);px=this.position;this.buttons=[];var sz=new OpenLayers.Size(18,18);var centered=new OpenLayers.Pixel(px.x+sz.w/2,px.y);this._addButton("panup","north-mini.png",centered,sz);px.y=centered.y+sz.h;this._addButton("panleft","west-mini.png",px,sz);this._addButton("panright","east-mini.png",px.add(sz.w,0),sz);this._addButton("pandown","south-mini.png",centered.add(0,sz.h*2),sz);this._addButton("zoomin","zoom-plus-mini.png",centered.add(0,sz.h*3+5),sz);this._addButton("zoomworld","zoom-world-mini.png",centered.add(0,sz.h*4+5),sz);this._addButton("zoomout","zoom-minus-mini.png",centered.add(0,sz.h*5+5),sz);return this.div;},_addButton:function(id,img,xy,sz){var imgLocation=OpenLayers.Util.getImagesLocation()+img;var btn=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_PanZoom_"+id,xy,sz,imgLocation,"absolute");this.div.appendChild(btn);OpenLayers.Event.observe(btn,"mousedown",OpenLayers.Function.bindAsEventListener(this.buttonDown,btn));OpenLayers.Event.observe(btn,"dblclick",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));OpenLayers.Event.observe(btn,"click",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));btn.action=id;btn.map=this.map;btn.slideFactor=this.slideFactor;this.buttons.push(btn);return btn;},doubleClick:function(evt){OpenLayers.Event.stop(evt);return false;},buttonDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
switch(this.action){case"panup":this.map.pan(0,-this.slideFactor);break;case"pandown":this.map.pan(0,this.slideFactor);break;case"panleft":this.map.pan(-this.slideFactor,0);break;case"panright":this.map.pan(this.slideFactor,0);break;case"zoomin":this.map.zoomIn();break;case"zoomout":this.map.zoomOut();break;case"zoomworld":this.map.zoomToMaxExtent();break;}
OpenLayers.Event.stop(evt);},CLASS_NAME:"OpenLayers.Control.PanZoom"});OpenLayers.Control.PanZoom.X=4;OpenLayers.Control.PanZoom.Y=4;OpenLayers.Control.Panel=OpenLayers.Class(OpenLayers.Control,{controls:null,defaultControl:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.controls=[];},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this,arguments);for(var i=this.controls.length-1;i>=0;i--){if(this.controls[i].events){this.controls[i].events.un({"activate":this.redraw,"deactivate":this.redraw,scope:this});}
OpenLayers.Event.stopObservingElement(this.controls[i].panel_div);this.controls[i].panel_div=null;}},activate:function(){if(OpenLayers.Control.prototype.activate.apply(this,arguments)){for(var i=0;i<this.controls.length;i++){if(this.controls[i]==this.defaultControl){this.controls[i].activate();}}
this.redraw();return true;}else{return false;}},deactivate:function(){if(OpenLayers.Control.prototype.deactivate.apply(this,arguments)){for(var i=0;i<this.controls.length;i++){this.controls[i].deactivate();}
return true;}else{return false;}},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);for(var i=0;i<this.controls.length;i++){this.map.addControl(this.controls[i]);this.controls[i].deactivate();this.controls[i].events.on({"activate":this.redraw,"deactivate":this.redraw,scope:this});}
this.activate();return this.div;},redraw:function(){this.div.innerHTML="";if(this.active){for(var i=0;i<this.controls.length;i++){var element=this.controls[i].panel_div;if(this.controls[i].active){element.className=this.controls[i].displayClass+"ItemActive";}else{element.className=this.controls[i].displayClass+"ItemInactive";}
this.div.appendChild(element);}}},activateControl:function(control){if(!this.active){return false;}
if(control.type==OpenLayers.Control.TYPE_BUTTON){control.trigger();return;}
if(control.type==OpenLayers.Control.TYPE_TOGGLE){if(control.active){control.deactivate();}else{control.activate();}
return;}
for(var i=0;i<this.controls.length;i++){if(this.controls[i]!=control){if(this.controls[i].type!=OpenLayers.Control.TYPE_TOGGLE){this.controls[i].deactivate();}}}
control.activate();},addControls:function(controls){if(!(controls instanceof Array)){controls=[controls];}
this.controls=this.controls.concat(controls);for(var i=0;i<controls.length;i++){var element=document.createElement("div");var textNode=document.createTextNode(" ");controls[i].panel_div=element;if(controls[i].title!=""){controls[i].panel_div.title=controls[i].title;}
OpenLayers.Event.observe(controls[i].panel_div,"click",OpenLayers.Function.bind(this.onClick,this,controls[i]));OpenLayers.Event.observe(controls[i].panel_div,"mousedown",OpenLayers.Function.bindAsEventListener(OpenLayers.Event.stop));}
if(this.map){for(var i=0;i<controls.length;i++){this.map.addControl(controls[i]);controls[i].deactivate();controls[i].events.on({"activate":this.redraw,"deactivate":this.redraw,scope:this});}
this.redraw();}},onClick:function(ctrl,evt){OpenLayers.Event.stop(evt?evt:window.event);this.activateControl(ctrl);},getControlsBy:function(property,match){var test=(typeof match.test=="function");var found=OpenLayers.Array.filter(this.controls,function(item){return item[property]==match||(test&&match.test(item[property]));});return found;},getControlsByName:function(match){return this.getControlsBy("name",match);},getControlsByClass:function(match){return this.getControlsBy("CLASS_NAME",match);},CLASS_NAME:"OpenLayers.Control.Panel"});OpenLayers.Control.Permalink=OpenLayers.Class(OpenLayers.Control,{element:null,base:'',displayProjection:null,initialize:function(element,base,options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.element=OpenLayers.Util.getElement(element);this.base=base||document.location.href;},destroy:function(){if(this.element.parentNode==this.div){this.div.removeChild(this.element);}
this.element=null;this.map.events.unregister('moveend',this,this.updateLink);OpenLayers.Control.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var i=0;i<this.map.controls.length;i++){var control=this.map.controls[i];if(control.CLASS_NAME=="OpenLayers.Control.ArgParser"){if(control.displayProjection!=this.displayProjection){this.displayProjection=control.displayProjection;}
break;}}
if(i==this.map.controls.length){this.map.addControl(new OpenLayers.Control.ArgParser({'displayProjection':this.displayProjection}));}},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.element){this.element=document.createElement("a");this.element.innerHTML=OpenLayers.i18n("permalink");this.element.href="";this.div.appendChild(this.element);}
this.map.events.on({'moveend':this.updateLink,'changelayer':this.updateLink,'changebaselayer':this.updateLink,scope:this});return this.div;},updateLink:function(){var center=this.map.getCenter();if(!center){return;}
var params=OpenLayers.Util.getParameters(this.base);params.zoom=this.map.getZoom();var lat=center.lat;var lon=center.lon;if(this.displayProjection){var mapPosition=OpenLayers.Projection.transform({x:lon,y:lat},this.map.getProjectionObject(),this.displayProjection);lon=mapPosition.x;lat=mapPosition.y;}
params.lat=Math.round(lat*100000)/100000;params.lon=Math.round(lon*100000)/100000;params.layers='';for(var i=0;i<this.map.layers.length;i++){var layer=this.map.layers[i];if(layer.isBaseLayer){params.layers+=(layer==this.map.baseLayer)?"B":"0";}else{params.layers+=(layer.getVisibility())?"T":"F";}}
var href=this.base;if(href.indexOf('?')!=-1){href=href.substring(0,href.indexOf('?'));}
href+='?'+OpenLayers.Util.getParameterString(params);this.element.href=href;},CLASS_NAME:"OpenLayers.Control.Permalink"});OpenLayers.Control.Scale=OpenLayers.Class(OpenLayers.Control,{element:null,initialize:function(element,options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.element=OpenLayers.Util.getElement(element);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.element){this.element=document.createElement("div");this.div.appendChild(this.element);}
this.map.events.register('moveend',this,this.updateScale);this.updateScale();return this.div;},updateScale:function(){var scale=this.map.getScale();if(!scale){return;}
if(scale>=9500&&scale<=950000){scale=Math.round(scale/1000)+"K";}else if(scale>=950000){scale=Math.round(scale/1000000)+"M";}else{scale=Math.round(scale);}
this.element.innerHTML=OpenLayers.i18n("scale",{'scaleDenom':scale});},CLASS_NAME:"OpenLayers.Control.Scale"});OpenLayers.Control.ScaleLine=OpenLayers.Class(OpenLayers.Control,{maxWidth:100,topOutUnits:"km",topInUnits:"m",bottomOutUnits:"mi",bottomInUnits:"ft",eTop:null,eBottom:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,[options]);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.eTop){this.div.style.display="block";this.div.style.position="absolute";this.eTop=document.createElement("div");this.eTop.className=this.displayClass+"Top";var theLen=this.topInUnits.length;this.div.appendChild(this.eTop);if((this.topOutUnits=="")||(this.topInUnits=="")){this.eTop.style.visibility="hidden";}else{this.eTop.style.visibility="visible";}
this.eBottom=document.createElement("div");this.eBottom.className=this.displayClass+"Bottom";this.div.appendChild(this.eBottom);if((this.bottomOutUnits=="")||(this.bottomInUnits=="")){this.eBottom.style.visibility="hidden";}else{this.eBottom.style.visibility="visible";}}
this.map.events.register('moveend',this,this.update);this.update();return this.div;},getBarLen:function(maxLen){var digits=parseInt(Math.log(maxLen)/Math.log(10));var pow10=Math.pow(10,digits);var firstChar=parseInt(maxLen/pow10);var barLen;if(firstChar>5){barLen=5;}else if(firstChar>2){barLen=2;}else{barLen=1;}
return barLen*pow10;},update:function(){var res=this.map.getResolution();if(!res){return;}
var curMapUnits=this.map.units;var inches=OpenLayers.INCHES_PER_UNIT;var maxSizeData=this.maxWidth*res*inches[curMapUnits];var topUnits;var bottomUnits;if(maxSizeData>100000){topUnits=this.topOutUnits;bottomUnits=this.bottomOutUnits;}else{topUnits=this.topInUnits;bottomUnits=this.bottomInUnits;}
var topMax=maxSizeData/inches[topUnits];var bottomMax=maxSizeData/inches[bottomUnits];var topRounded=this.getBarLen(topMax);var bottomRounded=this.getBarLen(bottomMax);topMax=topRounded/inches[curMapUnits]*inches[topUnits];bottomMax=bottomRounded/inches[curMapUnits]*inches[bottomUnits];var topPx=topMax/res;var bottomPx=bottomMax/res;this.eTop.style.width=Math.round(topPx)+"px";this.eBottom.style.width=Math.round(bottomPx)+"px";this.eTop.innerHTML=topRounded+" "+topUnits;this.eBottom.innerHTML=bottomRounded+" "+bottomUnits;},CLASS_NAME:"OpenLayers.Control.ScaleLine"});OpenLayers.Control.ZoomToMaxExtent=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){if(this.map){this.map.zoomToMaxExtent();}},CLASS_NAME:"OpenLayers.Control.ZoomToMaxExtent"});OpenLayers.Event={observers:false,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(event){return event.target||event.srcElement;},isLeftClick:function(event){return(((event.which)&&(event.which==1))||((event.button)&&(event.button==1)));},stop:function(event,allowDefault){if(!allowDefault){if(event.preventDefault){event.preventDefault();}else{event.returnValue=false;}}
if(event.stopPropagation){event.stopPropagation();}else{event.cancelBubble=true;}},findElement:function(event,tagName){var element=OpenLayers.Event.element(event);while(element.parentNode&&(!element.tagName||(element.tagName.toUpperCase()!=tagName.toUpperCase()))){element=element.parentNode;}
return element;},observe:function(elementParam,name,observer,useCapture){var element=OpenLayers.Util.getElement(elementParam);useCapture=useCapture||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.attachEvent)){name='keydown';}
if(!this.observers){this.observers={};}
if(!element._eventCacheID){var idPrefix="eventCacheID_";if(element.id){idPrefix=element.id+"_"+idPrefix;}
element._eventCacheID=OpenLayers.Util.createUniqueID(idPrefix);}
var cacheID=element._eventCacheID;if(!this.observers[cacheID]){this.observers[cacheID]=[];}
this.observers[cacheID].push({'element':element,'name':name,'observer':observer,'useCapture':useCapture});if(element.addEventListener){element.addEventListener(name,observer,useCapture);}else if(element.attachEvent){element.attachEvent('on'+name,observer);}},stopObservingElement:function(elementParam){var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;this._removeElementObservers(OpenLayers.Event.observers[cacheID]);},_removeElementObservers:function(elementObservers){if(elementObservers){for(var i=elementObservers.length-1;i>=0;i--){var entry=elementObservers[i];var args=new Array(entry.element,entry.name,entry.observer,entry.useCapture);var removed=OpenLayers.Event.stopObserving.apply(this,args);}}},stopObserving:function(elementParam,name,observer,useCapture){useCapture=useCapture||false;var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;if(name=='keypress'){if(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.detachEvent){name='keydown';}}
var foundEntry=false;var elementObservers=OpenLayers.Event.observers[cacheID];if(elementObservers){var i=0;while(!foundEntry&&i<elementObservers.length){var cacheEntry=elementObservers[i];if((cacheEntry.name==name)&&(cacheEntry.observer==observer)&&(cacheEntry.useCapture==useCapture)){elementObservers.splice(i,1);if(elementObservers.length==0){delete OpenLayers.Event.observers[cacheID];}
foundEntry=true;break;}
i++;}}
if(foundEntry){if(element.removeEventListener){element.removeEventListener(name,observer,useCapture);}else if(element&&element.detachEvent){element.detachEvent('on'+name,observer);}}
return foundEntry;},unloadCache:function(){if(OpenLayers.Event&&OpenLayers.Event.observers){for(var cacheID in OpenLayers.Event.observers){var elementObservers=OpenLayers.Event.observers[cacheID];OpenLayers.Event._removeElementObservers.apply(this,[elementObservers]);}
OpenLayers.Event.observers=false;}},CLASS_NAME:"OpenLayers.Event"};OpenLayers.Event.observe(window,'unload',OpenLayers.Event.unloadCache,false);if(window.Event){OpenLayers.Util.applyDefaults(window.Event,OpenLayers.Event);}else{var Event=OpenLayers.Event;}
OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:["mouseover","mouseout","mousedown","mouseup","mousemove","click","dblclick","resize","focus","blur"],listeners:null,object:null,element:null,eventTypes:null,eventHandler:null,fallThrough:null,initialize:function(object,element,eventTypes,fallThrough){this.object=object;this.element=element;this.eventTypes=eventTypes;this.fallThrough=fallThrough;this.listeners={};this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this);if(this.eventTypes!=null){for(var i=0;i<this.eventTypes.length;i++){this.addEventType(this.eventTypes[i]);}}
if(this.element!=null){this.attachToElement(element);}},destroy:function(){if(this.element){OpenLayers.Event.stopObservingElement(this.element);}
this.element=null;this.listeners=null;this.object=null;this.eventTypes=null;this.fallThrough=null;this.eventHandler=null;},addEventType:function(eventName){if(!this.listeners[eventName]){this.listeners[eventName]=[];}},attachToElement:function(element){for(var i=0;i<this.BROWSER_EVENTS.length;i++){var eventType=this.BROWSER_EVENTS[i];this.addEventType(eventType);OpenLayers.Event.observe(element,eventType,this.eventHandler);}
OpenLayers.Event.observe(element,"dragstart",OpenLayers.Event.stop);},on:function(object){for(var type in object){if(type!="scope"){this.register(type,object.scope,object[type]);}}},register:function(type,obj,func){if(func!=null&&((this.eventTypes&&OpenLayers.Util.indexOf(this.eventTypes,type)!=-1)||OpenLayers.Util.indexOf(this.BROWSER_EVENTS,type)!=-1)){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){listeners.push({obj:obj,func:func});}}},registerPriority:function(type,obj,func){if(func!=null){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){listeners.unshift({obj:obj,func:func});}}},un:function(object){for(var type in object){if(type!="scope"){this.unregister(type,object.scope,object[type]);}}},unregister:function(type,obj,func){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){for(var i=0;i<listeners.length;i++){if(listeners[i].obj==obj&&listeners[i].func==func){listeners.splice(i,1);break;}}}},remove:function(type){if(this.listeners[type]!=null){this.listeners[type]=[];}},triggerEvent:function(type,evt){if(evt==null){evt={};}
evt.object=this.object;evt.element=this.element;if(!evt.type){evt.type=type;}
var listeners=(this.listeners[type])?this.listeners[type].slice():null;if((listeners!=null)&&(listeners.length>0)){var continueChain;for(var i=0;i<listeners.length;i++){var callback=listeners[i];continueChain=callback.func.apply(callback.obj,[evt]);if((continueChain!=undefined)&&(continueChain==false)){break;}}
if(!this.fallThrough){OpenLayers.Event.stop(evt,true);}}
return continueChain;},handleBrowserEvent:function(evt){evt.xy=this.getMousePosition(evt);this.triggerEvent(evt.type,evt);},getMousePosition:function(evt){if(!this.element.offsets){this.element.offsets=OpenLayers.Util.pagePosition(this.element);this.element.offsets[0]+=(document.documentElement.scrollLeft||document.body.scrollLeft);this.element.offsets[1]+=(document.documentElement.scrollTop||document.body.scrollTop);}
return new OpenLayers.Pixel((evt.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft))-this.element.offsets[0]
-(document.documentElement.clientLeft||0),(evt.clientY+(document.documentElement.scrollTop||document.body.scrollTop))-this.element.offsets[1]
-(document.documentElement.clientTop||0));},CLASS_NAME:"OpenLayers.Events"});OpenLayers.Format=OpenLayers.Class({externalProjection:null,internalProjection:null,initialize:function(options){OpenLayers.Util.extend(this,options);},read:function(data){alert(OpenLayers.i18n("readNotImplemented"));},write:function(object){alert(OpenLayers.i18n("writeNotImplemented"));},CLASS_NAME:"OpenLayers.Format"});OpenLayers.Lang.en={'unhandledRequest':"Unhandled request return ${statusText}",'permalink':"Permalink",'overlays':"Overlays",'baseLayer':"Base Layer",'sameProjection':"The overview map only works when it is in the same projection as the main map",'readNotImplemented':"Read not implemented.",'writeNotImplemented':"Write not implemented.",'noFID':"Can't update a feature for which there is no FID.",'errorLoadingGML':"Error in loading GML file ${url}",'browserNotSupported':"Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}",'componentShouldBe':"addFeatures : component should be an ${geomType}",'getFeatureError':"getFeatureFromEvent called on layer with no renderer. This usually means you "+"destroyed a layer, but not some handler which is associated with it.",'minZoomLevelError':"The minZoomLevel property is only intended for use "+"with the FixedZoomLevels-descendent layers. That this "+"wfs layer checks for minZoomLevel is a relic of the"+"past. We cannot, however, remove it without possibly "+"breaking OL based applications that may depend on it."+" Therefore we are deprecating it -- the minZoomLevel "+"check below will be removed at 3.0. Please instead "+"use min/max resolution setting as described here: "+"http://trac.openlayers.org/wiki/SettingZoomLevels",'commitSuccess':"WFS Transaction: SUCCESS ${response}",'commitFailed':"WFS Transaction: FAILED ${response}",'googleWarning':"The Google Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the Google Maps library "+"script was either not included, or does not contain the "+"correct API key for your site.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/Google' "+"target='_blank'>click here</a>",'getLayerWarning':"The ${layerType} Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the ${layerLib} library "+"script was either not correctly included.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/${layerLib}' "+"target='_blank'>click here</a>",'scale':"Scale = 1 : ${scaleDenom}",'layerAlreadyAdded':"You tried to add the layer: ${layerName} to the map, but it has already been added",'reprojectDeprecated':"You are using the 'reproject' option "+"on the ${layerName} layer. This option is deprecated: "+"its use was designed to support displaying data over commercial "+"basemaps, but that functionality should now be achieved by using "+"Spherical Mercator support. More information is available from "+"http://trac.openlayers.org/wiki/SphericalMercator.",'methodDeprecated':"This method has been deprecated and will be removed in 3.0. "+"Please use ${newMethod} instead.",'boundsAddError':"You must pass both x and y values to the add function.",'lonlatAddError':"You must pass both lon and lat values to the add function.",'pixelAddError':"You must pass both x and y values to the add function.",'unsupportedGeometryType':"Unsupported geometry type: ${geomType}",'pagePositionFailed':"OpenLayers.Util.pagePosition failed: element with id ${elemId} may be misplaced.",'end':''};OpenLayers.Popup.Anchored=OpenLayers.Class(OpenLayers.Popup,{relativePosition:null,anchor:null,initialize:function(id,lonlat,size,contentHTML,anchor,closeBox,closeBoxCallback){var newArguments=new Array(id,lonlat,size,contentHTML,closeBox,closeBoxCallback);OpenLayers.Popup.prototype.initialize.apply(this,newArguments);this.anchor=(anchor!=null)?anchor:{size:new OpenLayers.Size(0,0),offset:new OpenLayers.Pixel(0,0)};},destroy:function(){this.anchor=null;this.relativePosition=null;OpenLayers.Popup.prototype.destroy.apply(this,arguments);},show:function(){this.updatePosition();OpenLayers.Popup.prototype.show.apply(this,arguments);},moveTo:function(px){var oldRelativePosition=this.relativePosition;this.relativePosition=this.calculateRelativePosition(px);var newPx=this.calculateNewPx(px);var newArguments=new Array(newPx);OpenLayers.Popup.prototype.moveTo.apply(this,newArguments);if(this.relativePosition!=oldRelativePosition){this.updateRelativePosition();}},setSize:function(size){OpenLayers.Popup.prototype.setSize.apply(this,arguments);if((this.lonlat)&&(this.map)){var px=this.map.getLayerPxFromLonLat(this.lonlat);this.moveTo(px);}},calculateRelativePosition:function(px){var lonlat=this.map.getLonLatFromLayerPx(px);var extent=this.map.getExtent();var quadrant=extent.determineQuadrant(lonlat);return OpenLayers.Bounds.oppositeQuadrant(quadrant);},updateRelativePosition:function(){},calculateNewPx:function(px){var newPx=px.offset(this.anchor.offset);var top=(this.relativePosition.charAt(0)=='t');newPx.y+=(top)?-this.size.h:this.anchor.size.h;var left=(this.relativePosition.charAt(1)=='l');newPx.x+=(left)?-this.size.w:this.anchor.size.w;return newPx;},CLASS_NAME:"OpenLayers.Popup.Anchored"});OpenLayers.Projection=OpenLayers.Class({proj:null,projCode:null,initialize:function(projCode,options){OpenLayers.Util.extend(this,options);this.projCode=projCode;if(window.Proj4js){this.proj=new Proj4js.Proj(projCode);}},getCode:function(){return this.proj?this.proj.srsCode:this.projCode;},getUnits:function(){return this.proj?this.proj.units:null;},toString:function(){return this.getCode();},equals:function(projection){if(projection&&projection.getCode){return this.getCode()==projection.getCode();}else{return false;}},destroy:function(){delete this.proj;delete this.projCode;},CLASS_NAME:"OpenLayers.Projection"});OpenLayers.Projection.transforms={};OpenLayers.Projection.addTransform=function(from,to,method){if(!OpenLayers.Projection.transforms[from]){OpenLayers.Projection.transforms[from]={};}
OpenLayers.Projection.transforms[from][to]=method;};OpenLayers.Projection.transform=function(point,source,dest){if(source.proj&&dest.proj){point=Proj4js.transform(source.proj,dest.proj,point);}else if(source&&dest&&OpenLayers.Projection.transforms[source.getCode()]&&OpenLayers.Projection.transforms[source.getCode()][dest.getCode()]){OpenLayers.Projection.transforms[source.getCode()][dest.getCode()](point);}
return point;};OpenLayers.Renderer.Elements=OpenLayers.Class(OpenLayers.Renderer,{rendererRoot:null,root:null,xmlns:null,minimumSymbolizer:{strokeLinecap:"round",strokeOpacity:1,fillOpacity:1,pointRadius:0},initialize:function(containerID){OpenLayers.Renderer.prototype.initialize.apply(this,arguments);this.rendererRoot=this.createRenderRoot();this.root=this.createRoot();this.rendererRoot.appendChild(this.root);this.container.appendChild(this.rendererRoot);},destroy:function(){this.clear();this.rendererRoot=null;this.root=null;this.xmlns=null;OpenLayers.Renderer.prototype.destroy.apply(this,arguments);},clear:function(){if(this.root){while(this.root.childNodes.length>0){this.root.removeChild(this.root.firstChild);}}},getNodeType:function(geometry,style){},drawGeometry:function(geometry,style,featureId){var className=geometry.CLASS_NAME;if((className=="OpenLayers.Geometry.Collection")||(className=="OpenLayers.Geometry.MultiPoint")||(className=="OpenLayers.Geometry.MultiLineString")||(className=="OpenLayers.Geometry.MultiPolygon")){for(var i=0;i<geometry.components.length;i++){this.drawGeometry(geometry.components[i],style,featureId);}
return;};if(style.display!="none"){var nodeType=this.getNodeType(geometry,style);var node=this.nodeFactory(geometry.id,nodeType);node._featureId=featureId;node._geometryClass=geometry.CLASS_NAME;node._style=style;node=this.drawGeometryNode(node,geometry);if(node.parentNode!=this.root){this.root.appendChild(node);}
this.postDraw(node);}else{node=OpenLayers.Util.getElement(geometry.id);if(node){node.parentNode.removeChild(node);}}},drawGeometryNode:function(node,geometry,style){style=style||node._style;OpenLayers.Util.applyDefaults(style,this.minimumSymbolizer);var options={'isFilled':true,'isStroked':!!style.strokeWidth};switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":this.drawPoint(node,geometry);break;case"OpenLayers.Geometry.LineString":options.isFilled=false;this.drawLineString(node,geometry);break;case"OpenLayers.Geometry.LinearRing":this.drawLinearRing(node,geometry);break;case"OpenLayers.Geometry.Polygon":this.drawPolygon(node,geometry);break;case"OpenLayers.Geometry.Surface":this.drawSurface(node,geometry);break;case"OpenLayers.Geometry.Rectangle":this.drawRectangle(node,geometry);break;default:break;}
node._style=style;node._options=options;return this.setStyle(node,style,options,geometry);},postDraw:function(node){},drawPoint:function(node,geometry){},drawLineString:function(node,geometry){},drawLinearRing:function(node,geometry){},drawPolygon:function(node,geometry){},drawRectangle:function(node,geometry){},drawCircle:function(node,geometry){},drawSurface:function(node,geometry){},getFeatureIdFromEvent:function(evt){var node=evt.target||evt.srcElement;return node._featureId;},eraseGeometry:function(geometry){if((geometry.CLASS_NAME=="OpenLayers.Geometry.MultiPoint")||(geometry.CLASS_NAME=="OpenLayers.Geometry.MultiLineString")||(geometry.CLASS_NAME=="OpenLayers.Geometry.MultiPolygon")){for(var i=0;i<geometry.components.length;i++){this.eraseGeometry(geometry.components[i]);}}else{var element=OpenLayers.Util.getElement(geometry.id);if(element&&element.parentNode){element.parentNode.removeChild(element);}}},nodeFactory:function(id,type){var node=OpenLayers.Util.getElement(id);if(node){if(!this.nodeTypeCompare(node,type)){node.parentNode.removeChild(node);node=this.nodeFactory(id,type);}}else{node=this.createNode(type,id);}
return node;},CLASS_NAME:"OpenLayers.Renderer.Elements"});OpenLayers.Tile=OpenLayers.Class({EVENT_TYPES:["loadstart","loadend","reload","unload"],events:null,id:null,layer:null,url:null,bounds:null,size:null,position:null,isLoading:false,isBackBuffer:false,lastRatio:1,isFirstDraw:true,backBufferTile:null,initialize:function(layer,position,bounds,url,size){this.layer=layer;this.position=position.clone();this.bounds=bounds.clone();this.url=url;this.size=size.clone();this.id=OpenLayers.Util.createUniqueID("Tile_");this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);},unload:function(){if(this.isLoading){this.isLoading=false;this.events.triggerEvent("unload");}},destroy:function(){if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){this.layer.events.unregister("loadend",this,this.resetBackBuffer);this.events.unregister('loadend',this,this.resetBackBuffer);}else{this.events.unregister('loadend',this,this.showTile);}
this.layer=null;this.bounds=null;this.size=null;this.position=null;this.events.destroy();this.events=null;if(this.backBufferTile){this.backBufferTile.destroy();this.backBufferTile=null;}},clone:function(obj){if(obj==null){obj=new OpenLayers.Tile(this.layer,this.position,this.bounds,this.url,this.size);}
OpenLayers.Util.applyDefaults(obj,this);return obj;},draw:function(){var maxExtent=this.layer.maxExtent;var withinMaxExtent=(maxExtent&&this.bounds.intersectsBounds(maxExtent,false));var drawTile=(withinMaxExtent||this.layer.displayOutsideMaxExtent);if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){if(drawTile){if(!this.backBufferTile){this.backBufferTile=this.clone();this.backBufferTile.hide();this.backBufferTile.isBackBuffer=true;this.events.register('loadend',this,this.resetBackBuffer);this.layer.events.register("loadend",this,this.resetBackBuffer);}
this.startTransition();}else{if(this.backBufferTile){this.backBufferTile.clear();}}}else{if(drawTile&&this.isFirstDraw){this.events.register('loadend',this,this.showTile);this.isFirstDraw=false;}}
this.shouldDraw=drawTile;this.clear();return drawTile;},moveTo:function(bounds,position,redraw){if(redraw==null){redraw=true;}
this.bounds=bounds.clone();this.position=position.clone();if(redraw){this.draw();}},clear:function(){},getBoundsFromBaseLayer:function(position){var msg=OpenLayers.i18n('reprojectDeprecated',{'layerName':this.layer.name});OpenLayers.Console.warn(msg);var topLeft=this.layer.map.getLonLatFromLayerPx(position);var bottomRightPx=position.clone();bottomRightPx.x+=this.size.w;bottomRightPx.y+=this.size.h;var bottomRight=this.layer.map.getLonLatFromLayerPx(bottomRightPx);if(topLeft.lon>bottomRight.lon){if(topLeft.lon<0){topLeft.lon=-180-(topLeft.lon+180);}else{bottomRight.lon=180+bottomRight.lon+180;}}
var bounds=new OpenLayers.Bounds(topLeft.lon,bottomRight.lat,bottomRight.lon,topLeft.lat);return bounds;},startTransition:function(){},resetBackBuffer:function(){this.showTile();if(this.backBufferTile&&(this.isFirstDraw||!this.layer.numLoadingTiles)){this.isFirstDraw=false;var maxExtent=this.layer.maxExtent;var withinMaxExtent=(maxExtent&&this.bounds.intersectsBounds(maxExtent,false));if(withinMaxExtent){this.backBufferTile.position=this.position;this.backBufferTile.bounds=this.bounds;this.backBufferTile.size=this.size;this.backBufferTile.imageSize=this.layer.imageSize||this.size;this.backBufferTile.imageOffset=this.layer.imageOffset;this.backBufferTile.resolution=this.layer.getResolution();this.backBufferTile.renderTile();}}},showTile:function(){if(this.shouldDraw){this.show();}},show:function(){},hide:function(){},CLASS_NAME:"OpenLayers.Tile"});OpenLayers.Control.MouseToolbar=OpenLayers.Class(OpenLayers.Control.MouseDefaults,{mode:null,buttons:null,direction:"vertical",buttonClicked:null,initialize:function(position,direction){OpenLayers.Control.prototype.initialize.apply(this,arguments);this.position=new OpenLayers.Pixel(OpenLayers.Control.MouseToolbar.X,OpenLayers.Control.MouseToolbar.Y);if(position){this.position=position;}
if(direction){this.direction=direction;}
this.measureDivs=[];},destroy:function(){for(var btnId in this.buttons){var btn=this.buttons[btnId];btn.map=null;btn.events.destroy();}
OpenLayers.Control.MouseDefaults.prototype.destroy.apply(this,arguments);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);OpenLayers.Control.MouseDefaults.prototype.draw.apply(this,arguments);this.buttons={};var sz=new OpenLayers.Size(28,28);var centered=new OpenLayers.Pixel(OpenLayers.Control.MouseToolbar.X,0);this._addButton("zoombox","drag-rectangle-off.png","drag-rectangle-on.png",centered,sz,"Shift->Drag to zoom to area");centered=centered.add((this.direction=="vertical"?0:sz.w),(this.direction=="vertical"?sz.h:0));this._addButton("pan","panning-hand-off.png","panning-hand-on.png",centered,sz,"Drag the map to pan.");centered=centered.add((this.direction=="vertical"?0:sz.w),(this.direction=="vertical"?sz.h:0));this.switchModeTo("pan");return this.div;},_addButton:function(id,img,activeImg,xy,sz,title){var imgLocation=OpenLayers.Util.getImagesLocation()+img;var activeImgLocation=OpenLayers.Util.getImagesLocation()+activeImg;var btn=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MouseToolbar_"+id,xy,sz,imgLocation,"absolute");this.div.appendChild(btn);btn.imgLocation=imgLocation;btn.activeImgLocation=activeImgLocation;btn.events=new OpenLayers.Events(this,btn,null,true);btn.events.on({"mousedown":this.buttonDown,"mouseup":this.buttonUp,"dblclick":OpenLayers.Event.stop,scope:this});btn.action=id;btn.title=title;btn.alt=title;btn.map=this.map;this.buttons[id]=btn;return btn;},buttonDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
this.buttonClicked=evt.element.action;OpenLayers.Event.stop(evt);},buttonUp:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
if(this.buttonClicked!=null){if(this.buttonClicked==evt.element.action){this.switchModeTo(evt.element.action);}
OpenLayers.Event.stop(evt);this.buttonClicked=null;}},defaultDblClick:function(evt){this.switchModeTo("pan");this.performedDrag=false;var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom+1);OpenLayers.Event.stop(evt);return false;},defaultMouseDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
this.mouseDragStart=evt.xy.clone();this.performedDrag=false;this.startViaKeyboard=false;if(evt.shiftKey&&this.mode!="zoombox"){this.switchModeTo("zoombox");this.startViaKeyboard=true;}else if(evt.altKey&&this.mode!="measure"){this.switchModeTo("measure");}else if(!this.mode){this.switchModeTo("pan");}
switch(this.mode){case"zoombox":this.map.div.style.cursor="crosshair";this.zoomBox=OpenLayers.Util.createDiv('zoomBox',this.mouseDragStart,null,null,"absolute","2px solid red");this.zoomBox.style.backgroundColor="white";this.zoomBox.style.filter="alpha(opacity=50)";this.zoomBox.style.opacity="0.50";this.zoomBox.style.fontSize="1px";this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.viewPortDiv.appendChild(this.zoomBox);this.performedDrag=true;break;case"measure":var distance="";if(this.measureStart){var measureEnd=this.map.getLonLatFromViewPortPx(this.mouseDragStart);distance=OpenLayers.Util.distVincenty(this.measureStart,measureEnd);distance=Math.round(distance*100)/100;distance=distance+"km";this.measureStartBox=this.measureBox;}
this.measureStart=this.map.getLonLatFromViewPortPx(this.mouseDragStart);;this.measureBox=OpenLayers.Util.createDiv(null,this.mouseDragStart.add(-2-parseInt(this.map.layerContainerDiv.style.left),-2-parseInt(this.map.layerContainerDiv.style.top)),null,null,"absolute");this.measureBox.style.width="4px";this.measureBox.style.height="4px";this.measureBox.style.fontSize="1px";this.measureBox.style.backgroundColor="red";this.measureBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.layerContainerDiv.appendChild(this.measureBox);if(distance){this.measureBoxDistance=OpenLayers.Util.createDiv(null,this.mouseDragStart.add(-2-parseInt(this.map.layerContainerDiv.style.left),2-parseInt(this.map.layerContainerDiv.style.top)),null,null,"absolute");this.measureBoxDistance.innerHTML=distance;this.measureBoxDistance.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.layerContainerDiv.appendChild(this.measureBoxDistance);this.measureDivs.push(this.measureBoxDistance);}
this.measureBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.layerContainerDiv.appendChild(this.measureBox);this.measureDivs.push(this.measureBox);break;default:this.map.div.style.cursor="move";break;}
document.onselectstart=function(){return false;};OpenLayers.Event.stop(evt);},switchModeTo:function(mode){if(mode!=this.mode){if(this.mode&&this.buttons[this.mode]){OpenLayers.Util.modifyAlphaImageDiv(this.buttons[this.mode],null,null,null,this.buttons[this.mode].imgLocation);}
if(this.mode=="measure"&&mode!="measure"){for(var i=0;i<this.measureDivs.length;i++){if(this.measureDivs[i]){this.map.layerContainerDiv.removeChild(this.measureDivs[i]);}}
this.measureDivs=[];this.measureStart=null;}
this.mode=mode;if(this.buttons[mode]){OpenLayers.Util.modifyAlphaImageDiv(this.buttons[mode],null,null,null,this.buttons[mode].activeImgLocation);}
switch(this.mode){case"zoombox":this.map.div.style.cursor="crosshair";break;default:this.map.div.style.cursor="";break;}}},leaveMode:function(){this.switchModeTo("pan");},defaultMouseMove:function(evt){if(this.mouseDragStart!=null){switch(this.mode){case"zoombox":var deltaX=Math.abs(this.mouseDragStart.x-evt.xy.x);var deltaY=Math.abs(this.mouseDragStart.y-evt.xy.y);this.zoomBox.style.width=Math.max(1,deltaX)+"px";this.zoomBox.style.height=Math.max(1,deltaY)+"px";if(evt.xy.x<this.mouseDragStart.x){this.zoomBox.style.left=evt.xy.x+"px";}
if(evt.xy.y<this.mouseDragStart.y){this.zoomBox.style.top=evt.xy.y+"px";}
break;default:var deltaX=this.mouseDragStart.x-evt.xy.x;var deltaY=this.mouseDragStart.y-evt.xy.y;var size=this.map.getSize();var newXY=new OpenLayers.Pixel(size.w/2+deltaX,size.h/2+deltaY);var newCenter=this.map.getLonLatFromViewPortPx(newXY);this.map.setCenter(newCenter,null,true);this.mouseDragStart=evt.xy.clone();}
this.performedDrag=true;}},defaultMouseUp:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
switch(this.mode){case"zoombox":this.zoomBoxEnd(evt);if(this.startViaKeyboard){this.leaveMode();}
break;case"pan":if(this.performedDrag){this.map.setCenter(this.map.center);}}
document.onselectstart=null;this.mouseDragStart=null;this.map.div.style.cursor="default";},defaultMouseOut:function(evt){if(this.mouseDragStart!=null&&OpenLayers.Util.mouseLeft(evt,this.map.div)){if(this.zoomBox){this.removeZoomBox();if(this.startViaKeyboard){this.leaveMode();}}
this.mouseDragStart=null;this.map.div.style.cursor="default";}},defaultClick:function(evt){if(this.performedDrag){this.performedDrag=false;return false;}},CLASS_NAME:"OpenLayers.Control.MouseToolbar"});OpenLayers.Control.MouseToolbar.X=6;OpenLayers.Control.MouseToolbar.Y=300;OpenLayers.Control.PanZoomBar=OpenLayers.Class(OpenLayers.Control.PanZoom,{zoomStopWidth:18,zoomStopHeight:11,slider:null,sliderEvents:null,zoomBarDiv:null,divEvents:null,zoomWorldIcon:false,initialize:function(){OpenLayers.Control.PanZoom.prototype.initialize.apply(this,arguments);},destroy:function(){this.div.removeChild(this.slider);this.slider=null;this.sliderEvents.destroy();this.sliderEvents=null;this.div.removeChild(this.zoombarDiv);this.zoomBarDiv=null;this.divEvents.destroy();this.divEvents=null;this.map.events.un({"zoomend":this.moveZoomBar,"changebaselayer":this.redraw,scope:this});OpenLayers.Control.PanZoom.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.PanZoom.prototype.setMap.apply(this,arguments);this.map.events.register("changebaselayer",this,this.redraw);},redraw:function(){if(this.div!=null){this.div.innerHTML="";}
this.draw();},draw:function(px){OpenLayers.Control.prototype.draw.apply(this,arguments);px=this.position.clone();this.buttons=[];var sz=new OpenLayers.Size(18,18);var centered=new OpenLayers.Pixel(px.x+sz.w/2,px.y);var wposition=sz.w;if(this.zoomWorldIcon){centered=new OpenLayers.Pixel(px.x+sz.w,px.y);}
this._addButton("panup","north-mini.png",centered,sz);px.y=centered.y+sz.h;this._addButton("panleft","west-mini.png",px,sz);if(this.zoomWorldIcon){this._addButton("zoomworld","zoom-world-mini.png",px.add(sz.w,0),sz);wposition*=2;}
this._addButton("panright","east-mini.png",px.add(wposition,0),sz);this._addButton("pandown","south-mini.png",centered.add(0,sz.h*2),sz);this._addButton("zoomin","zoom-plus-mini.png",centered.add(0,sz.h*3+5),sz);centered=this._addZoomBar(centered.add(0,sz.h*4+5));this._addButton("zoomout","zoom-minus-mini.png",centered,sz);return this.div;},_addZoomBar:function(centered){var imgLocation=OpenLayers.Util.getImagesLocation();var id="OpenLayers_Control_PanZoomBar_Slider"+this.map.id;var zoomsToEnd=this.map.getNumZoomLevels()-1-this.map.getZoom();var slider=OpenLayers.Util.createAlphaImageDiv(id,centered.add(-1,zoomsToEnd*this.zoomStopHeight),new OpenLayers.Size(20,9),imgLocation+"slider.png","absolute");this.slider=slider;this.sliderEvents=new OpenLayers.Events(this,slider,null,true);this.sliderEvents.on({"mousedown":this.zoomBarDown,"mousemove":this.zoomBarDrag,"mouseup":this.zoomBarUp,"dblclick":this.doubleClick,"click":this.doubleClick});var sz=new OpenLayers.Size();sz.h=this.zoomStopHeight*this.map.getNumZoomLevels();sz.w=this.zoomStopWidth;var div=null;if(OpenLayers.Util.alphaHack()){var id="OpenLayers_Control_PanZoomBar"+this.map.id;div=OpenLayers.Util.createAlphaImageDiv(id,centered,new OpenLayers.Size(sz.w,this.zoomStopHeight),imgLocation+"zoombar.png","absolute",null,"crop");div.style.height=sz.h;}else{div=OpenLayers.Util.createDiv('OpenLayers_Control_PanZoomBar_Zoombar'+this.map.id,centered,sz,imgLocation+"zoombar.png");}
this.zoombarDiv=div;this.divEvents=new OpenLayers.Events(this,div,null,true);this.divEvents.on({"mousedown":this.divClick,"mousemove":this.passEventToSlider,"dblclick":this.doubleClick,"click":this.doubleClick});this.div.appendChild(div);this.startTop=parseInt(div.style.top);this.div.appendChild(slider);this.map.events.register("zoomend",this,this.moveZoomBar);centered=centered.add(0,this.zoomStopHeight*this.map.getNumZoomLevels());return centered;},passEventToSlider:function(evt){this.sliderEvents.handleBrowserEvent(evt);},divClick:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
var y=evt.xy.y;var top=OpenLayers.Util.pagePosition(evt.object)[1];var levels=(y-top)/this.zoomStopHeight;if(!this.map.fractionalZoom){levels=Math.floor(levels);}
var zoom=(this.map.getNumZoomLevels()-1)-levels;zoom=Math.min(Math.max(zoom,0),this.map.getNumZoomLevels()-1);this.map.zoomTo(zoom);OpenLayers.Event.stop(evt);},zoomBarDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
this.map.events.on({"mousemove":this.passEventToSlider,"mouseup":this.passEventToSlider,scope:this});this.mouseDragStart=evt.xy.clone();this.zoomStart=evt.xy.clone();this.div.style.cursor="move";this.zoombarDiv.offsets=null;OpenLayers.Event.stop(evt);},zoomBarDrag:function(evt){if(this.mouseDragStart!=null){var deltaY=this.mouseDragStart.y-evt.xy.y;var offsets=OpenLayers.Util.pagePosition(this.zoombarDiv);if((evt.clientY-offsets[1])>0&&(evt.clientY-offsets[1])<parseInt(this.zoombarDiv.style.height)-2){var newTop=parseInt(this.slider.style.top)-deltaY;this.slider.style.top=newTop+"px";}
this.mouseDragStart=evt.xy.clone();OpenLayers.Event.stop(evt);}},zoomBarUp:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
if(this.zoomStart){this.div.style.cursor="";this.map.events.un({"mouseup":this.passEventToSlider,"mousemove":this.passEventToSlider,scope:this});var deltaY=this.zoomStart.y-evt.xy.y;var zoomLevel=this.map.zoom;if(this.map.fractionalZoom){zoomLevel+=deltaY/this.zoomStopHeight;zoomLevel=Math.min(Math.max(zoomLevel,0),this.map.getNumZoomLevels()-1);}else{zoomLevel+=Math.round(deltaY/this.zoomStopHeight);}
this.map.zoomTo(zoomLevel);this.moveZoomBar();this.mouseDragStart=null;OpenLayers.Event.stop(evt);}},moveZoomBar:function(){var newTop=((this.map.getNumZoomLevels()-1)-this.map.getZoom())*this.zoomStopHeight+this.startTop+1;this.slider.style.top=newTop+"px";},CLASS_NAME:"OpenLayers.Control.PanZoomBar"});OpenLayers.Format.JSON=OpenLayers.Class(OpenLayers.Format,{indent:"    ",space:" ",newline:"\n",level:0,pretty:false,initialize:function(options){OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(json,filter){try{if(/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){var object=eval('('+json+')');if(typeof filter==='function'){function walk(k,v){if(v&&typeof v==='object'){for(var i in v){if(v.hasOwnProperty(i)){v[i]=walk(i,v[i]);}}}
return filter(k,v);}
object=walk('',object);}
return object;}}catch(e){}
return null;},write:function(value,pretty){this.pretty=!!pretty;var json=null;var type=typeof value;if(this.serialize[type]){json=this.serialize[type].apply(this,[value]);}
return json;},writeIndent:function(){var pieces=[];if(this.pretty){for(var i=0;i<this.level;++i){pieces.push(this.indent);}}
return pieces.join('');},writeNewline:function(){return(this.pretty)?this.newline:'';},writeSpace:function(){return(this.pretty)?this.space:'';},serialize:{'object':function(object){if(object==null){return"null";}
if(object.constructor==Date){return this.serialize.date.apply(this,[object]);}
if(object.constructor==Array){return this.serialize.array.apply(this,[object]);}
var pieces=['{'];this.level+=1;var key,keyJSON,valueJSON;var addComma=false;for(key in object){if(object.hasOwnProperty(key)){keyJSON=OpenLayers.Format.JSON.prototype.write.apply(this,[key,this.pretty]);valueJSON=OpenLayers.Format.JSON.prototype.write.apply(this,[object[key],this.pretty]);if(keyJSON!=null&&valueJSON!=null){if(addComma){pieces.push(',');}
pieces.push(this.writeNewline(),this.writeIndent(),keyJSON,':',this.writeSpace(),valueJSON);addComma=true;}}}
this.level-=1;pieces.push(this.writeNewline(),this.writeIndent(),'}');return pieces.join('');},'array':function(array){var json;var pieces=['['];this.level+=1;for(var i=0;i<array.length;++i){json=OpenLayers.Format.JSON.prototype.write.apply(this,[array[i],this.pretty]);if(json!=null){if(i>0){pieces.push(',');}
pieces.push(this.writeNewline(),this.writeIndent(),json);}}
this.level-=1;pieces.push(this.writeNewline(),this.writeIndent(),']');return pieces.join('');},'string':function(string){var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};if(/["\\\x00-\x1f]/.test(string)){return'"'+string.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c;}
c=b.charCodeAt();return'\\u00'+
Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"';}
return'"'+string+'"';},'number':function(number){return isFinite(number)?String(number):"null";},'boolean':function(bool){return String(bool);},'date':function(date){function format(number){return(number<10)?'0'+number:number;}
return'"'+date.getFullYear()+'-'+
format(date.getMonth()+1)+'-'+
format(date.getDate())+'T'+
format(date.getHours())+':'+
format(date.getMinutes())+':'+
format(date.getSeconds())+'"';}},CLASS_NAME:"OpenLayers.Format.JSON"});OpenLayers.Format.XML=OpenLayers.Class(OpenLayers.Format,{xmldom:null,initialize:function(options){if(window.ActiveXObject){this.xmldom=new ActiveXObject("Microsoft.XMLDOM");}
OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(text){var index=text.indexOf('<');if(index>0){text=text.substring(index);}
var node=OpenLayers.Util.Try(OpenLayers.Function.bind((function(){var xmldom;if(window.ActiveXObject&&!this.xmldom){xmldom=new ActiveXObject("Microsoft.XMLDOM");}else{xmldom=this.xmldom;}
xmldom.loadXML(text);return xmldom;}),this),function(){return new DOMParser().parseFromString(text,'text/xml');},function(){var req=new XMLHttpRequest();req.open("GET","data:"+"text/xml"+";charset=utf-8,"+encodeURIComponent(text),false);if(req.overrideMimeType){req.overrideMimeType("text/xml");}
req.send(null);return req.responseXML;});return node;},write:function(node){var data;if(this.xmldom){data=node.xml;}else{var serializer=new XMLSerializer();if(node.nodeType==1){var doc=document.implementation.createDocument("","",null);if(doc.importNode){node=doc.importNode(node,true);}
doc.appendChild(node);data=serializer.serializeToString(doc);}else{data=serializer.serializeToString(node);}}
return data;},createElementNS:function(uri,name){var element;if(this.xmldom){if(typeof uri=="string"){element=this.xmldom.createNode(1,name,uri);}else{element=this.xmldom.createNode(1,name,"");}}else{element=document.createElementNS(uri,name);}
return element;},createTextNode:function(text){var node;if(this.xmldom){node=this.xmldom.createTextNode(text);}else{node=document.createTextNode(text);}
return node;},getElementsByTagNameNS:function(node,uri,name){var elements=[];if(node.getElementsByTagNameNS){elements=node.getElementsByTagNameNS(uri,name);}else{var allNodes=node.getElementsByTagName("*");var potentialNode,fullName;for(var i=0;i<allNodes.length;++i){potentialNode=allNodes[i];fullName=(potentialNode.prefix)?(potentialNode.prefix+":"+name):name;if((name=="*")||(fullName==potentialNode.nodeName)){if((uri=="*")||(uri==potentialNode.namespaceURI)){elements.push(potentialNode);}}}}
return elements;},getAttributeNodeNS:function(node,uri,name){var attributeNode=null;if(node.getAttributeNodeNS){attributeNode=node.getAttributeNodeNS(uri,name);}else{var attributes=node.attributes;var potentialNode,fullName;for(var i=0;i<attributes.length;++i){potentialNode=attributes[i];if(potentialNode.namespaceURI==uri){fullName=(potentialNode.prefix)?(potentialNode.prefix+":"+name):name;if(fullName==potentialNode.nodeName){attributeNode=potentialNode;break;}}}}
return attributeNode;},getAttributeNS:function(node,uri,name){var attributeValue="";if(node.getAttributeNS){attributeValue=node.getAttributeNS(uri,name)||"";}else{var attributeNode=this.getAttributeNodeNS(node,uri,name);if(attributeNode){attributeValue=attributeNode.nodeValue;}}
return attributeValue;},getChildValue:function(node,def){var value;try{value=node.firstChild.nodeValue;}catch(e){value=(def!=undefined)?def:"";}
return value;},concatChildValues:function(node,def){var value="";var child=node.firstChild;var childValue;while(child){childValue=child.nodeValue;if(childValue){value+=childValue;}
child=child.nextSibling;}
if(value==""&&def!=undefined){value=def;}
return value;},hasAttributeNS:function(node,uri,name){var found=false;if(node.hasAttributeNS){found=node.hasAttributeNS(uri,name);}else{found=!!this.getAttributeNodeNS(node,uri,name);}
return found;},setAttributeNS:function(node,uri,name,value){if(node.setAttributeNS){node.setAttributeNS(uri,name,value);}else{if(this.xmldom){if(uri){var attribute=node.ownerDocument.createNode(2,name,uri);attribute.nodeValue=value;node.setAttributeNode(attribute);}else{node.setAttribute(name,value);}}else{throw"setAttributeNS not implemented";}}},CLASS_NAME:"OpenLayers.Format.XML"});

OpenLayers.Handler = OpenLayers.Class({

    /**
     * Property: id
     * {String}
     */
    id: null,

    /**
     * APIProperty: control
     * {<OpenLayers.Control>}. The control that initialized this handler.  The
     *     control is assumed to have a valid map property - that map is used
     *     in the handler's own setMap method.
     */
    control: null,

    /**
     * Property: map
     * {<OpenLayers.Map>}
     */
    map: null,

    /**
     * APIProperty: keyMask
     * {Integer} Use bitwise operators and one or more of the OpenLayers.Handler
     *     constants to construct a keyMask.  The keyMask is used by
     *     <checkModifiers>.  If the keyMask matches the combination of keys
     *     down on an event, checkModifiers returns true.
     *
     * Example:
     * (code)
     *     // handler only responds if the Shift key is down
     *     handler.keyMask = OpenLayers.Handler.MOD_SHIFT;
     *
     *     // handler only responds if Ctrl-Shift is down
     *     handler.keyMask = OpenLayers.Handler.MOD_SHIFT |
     *                       OpenLayers.Handler.MOD_CTRL;
     * (end)
     */
    keyMask: null,

    /**
     * Property: active
     * {Boolean}
     */
    active: false,

    /**
     * Property: evt
     * {Event} This property references the last event handled by the handler.
     *     Note that this property is not part of the stable API.  Use of the
     *     evt property should be restricted to controls in the library
     *     or other applications that are willing to update with changes to
     *     the OpenLayers code.
     */
    evt: null,

    /**
     * Constructor: OpenLayers.Handler
     * Construct a handler.
     *
     * Parameters:
     * control - {<OpenLayers.Control>} The control that initialized this
     *     handler.  The control is assumed to have a valid map property; that
     *     map is used in the handler's own setMap method.
     * callbacks - {Object} An object whose properties correspond to abstracted
     *     events or sequences of browser events.  The values for these
     *     properties are functions defined by the control that get called by
     *     the handler.
     * options - {Object} An optional object whose properties will be set on
     *     the handler.
     */
    initialize: function(control, callbacks, options) {
        OpenLayers.Util.extend(this, options);
        this.control = control;
        this.callbacks = callbacks;
        if (control.map) {
            this.setMap(control.map);
        }

        OpenLayers.Util.extend(this, options);

        this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
    },

    /**
     * Method: setMap
     */
    setMap: function (map) {
        this.map = map;
    },

    /**
     * Method: checkModifiers
     * Check the keyMask on the handler.  If no <keyMask> is set, this always
     *     returns true.  If a <keyMask> is set and it matches the combination
     *     of keys down on an event, this returns true.
     *
     * Returns:
     * {Boolean} The keyMask matches the keys down on an event.
     */
    checkModifiers: function (evt) {
        if(this.keyMask == null) {
            return true;
        }
        /* calculate the keyboard modifier mask for this event */
        var keyModifiers =
            (evt.shiftKey ? OpenLayers.Handler.MOD_SHIFT : 0) |
            (evt.ctrlKey  ? OpenLayers.Handler.MOD_CTRL  : 0) |
            (evt.altKey   ? OpenLayers.Handler.MOD_ALT   : 0);

        /* if it differs from the handler object's key mask,
           bail out of the event handler */
        return (keyModifiers == this.keyMask);
    },

    /**
     * APIMethod: activate
     * Turn on the handler.  Returns false if the handler was already active.
     *
     * Returns:
     * {Boolean} The handler was activated.
     */
    activate: function() {
        if(this.active) {
            return false;
        }
        // register for event handlers defined on this class.
        var events = OpenLayers.Events.prototype.BROWSER_EVENTS;
        for (var i = 0; i < events.length; i++) {
            if (this[events[i]]) {
                this.register(events[i], this[events[i]]);
            }
        }
        this.active = true;
        return true;
    },

    /**
     * APIMethod: deactivate
     * Turn off the handler.  Returns false if the handler was already inactive.
     *
     * Returns:
     * {Boolean} The handler was deactivated.
     */
    deactivate: function() {
        if(!this.active) {
            return false;
        }
        // unregister event handlers defined on this class.
        var events = OpenLayers.Events.prototype.BROWSER_EVENTS;
        for (var i = 0; i < events.length; i++) {
            if (this[events[i]]) {
                this.unregister(events[i], this[events[i]]);
            }
        }
        this.active = false;
        return true;
    },

    /**
    * Method: callback
    * Trigger the control's named callback with the given arguments
    *
    * Parameters:
    * name - {String} The key for the callback that is one of the properties
    *     of the handler's callbacks object.
    * args - {Array(*)} An array of arguments (any type) with which to call
    *     the callback (defined by the control).
    */
    callback: function (name, args) {
        if (name && this.callbacks[name]) {
            this.callbacks[name].apply(this.control, args);
        }
    },

    /**
    * Method: register
    * register an event on the map
    */
    register: function (name, method) {
        // TODO: deal with registerPriority in 3.0
        this.map.events.registerPriority(name, this, method);
        this.map.events.registerPriority(name, this, this.setEvent);
    },

    /**
    * Method: unregister
    * unregister an event from the map
    */
    unregister: function (name, method) {
        this.map.events.unregister(name, this, method);
        this.map.events.unregister(name, this, this.setEvent);
    },

    /**
     * Method: setEvent
     * With each registered browser event, the handler sets its own evt
     *     property.  This property can be accessed by controls if needed
     *     to get more information about the event that the handler is
     *     processing.
     *
     * This allows modifier keys on the event to be checked (alt, shift,
     *     and ctrl cannot be checked with the keyboard handler).  For a
     *     control to determine which modifier keys are associated with the
     *     event that a handler is currently processing, it should access
     *     (code)handler.evt.altKey || handler.evt.shiftKey ||
     *     handler.evt.ctrlKey(end).
     *
     * Parameters:
     * evt - {Event} The browser event.
     */
    setEvent: function(evt) {
        this.evt = evt;
        return true;
    },

    /**
     * Method: destroy
     * Deconstruct the handler.
     */
    destroy: function () {
        // unregister event listeners
        this.deactivate();
        // eliminate circular references
        this.control = this.map = null;
    },

    CLASS_NAME: "OpenLayers.Handler"
});

/**
 * Constant: OpenLayers.Handler.MOD_NONE
 * If set as the <keyMask>, <checkModifiers> returns false if any key is down.
 */
OpenLayers.Handler.MOD_NONE  = 0;

/**
 * Constant: OpenLayers.Handler.MOD_SHIFT
 * If set as the <keyMask>, <checkModifiers> returns false if Shift is down.
 */
OpenLayers.Handler.MOD_SHIFT = 1;

/**
 * Constant: OpenLayers.Handler.MOD_CTRL
 * If set as the <keyMask>, <checkModifiers> returns false if Ctrl is down.
 */
OpenLayers.Handler.MOD_CTRL  = 2;

/**
 * Constant: OpenLayers.Handler.MOD_ALT
 * If set as the <keyMask>, <checkModifiers> returns false if Alt is down.
 */
OpenLayers.Handler.MOD_ALT   = 4;

OpenLayers.Map = OpenLayers.Class({

    /**
     * Constant: Z_INDEX_BASE
     * {Object} Base z-indexes for different classes of thing
     */
    Z_INDEX_BASE: { BaseLayer: 100, Overlay: 325, Popup: 750, Control: 1000 },

    /**
     * Constant: EVENT_TYPES
     * {Array(String)} Supported application event types.  Register a listener
     *     for a particular event with the following syntax:
     * (code)
     * map.events.register(type, obj, listener);
     * (end)
     *
     * Listeners will be called with a reference to an event object.  The
     *     properties of this event depends on exactly what happened.
     *
     * All event objects have at least the following properties:
     *  - *object* {Object} A reference to map.events.object.
     *  - *element* {DOMElement} A reference to map.events.element.
     *
     * Browser events have the following additional properties:
     *  - *xy* {<OpenLayers.Pixel>} The pixel location of the event (relative
     *      to the the map viewport).
     *  - other properties that come with browser events
     *
     * Supported map event types:
     *  - *preaddlayer* triggered before a layer has been added.  The event
     *      object will include a *layer* property that references the layer
     *      to be added.
     *  - *addlayer* triggered after a layer has been added.  The event object
     *      will include a *layer* property that references the added layer.
     *  - *removelayer* triggered after a layer has been removed.  The event
     *      object will include a *layer* property that references the removed
     *      layer.
     *  - *changelayer* triggered after a layer name change, order change, or
     *      visibility change (due to resolution thresholds).  Listeners will
     *      receive an event object with *layer* and *property* properties.  The
     *      *layer* property will be a reference to the changed layer.  The
     *      *property* property will be a key to the changed property (name,
     *      visibility, or order).
     *  - *movestart* triggered after the start of a drag, pan, or zoom
     *  - *move* triggered after each drag, pan, or zoom
     *  - *moveend* triggered after a drag, pan, or zoom completes
     *  - *popupopen* triggered after a popup opens
     *  - *popupclose* triggered after a popup opens
     *  - *addmarker* triggered after a marker has been added
     *  - *removemarker* triggered after a marker has been removed
     *  - *clearmarkers* triggered after markers have been cleared
     *  - *mouseover* triggered after mouseover the map
     *  - *mouseout* triggered after mouseout the map
     *  - *mousemove* triggered after mousemove the map
     *  - *dragstart* triggered after the start of a drag
     *  - *drag* triggered after a drag
     *  - *dragend* triggered after the end of a drag
     *  - *changebaselayer* triggered after the base layer changes
     */
    EVENT_TYPES: [
        "preaddlayer", "addlayer", "removelayer", "changelayer", "movestart",
        "move", "moveend", "zoomend", "popupopen", "popupclose",
        "addmarker", "removemarker", "clearmarkers", "mouseover",
        "mouseout", "mousemove", "dragstart", "drag", "dragend",
        "changebaselayer"],

    /**
     * Property: id
     * {String} Unique identifier for the map
     */
    id: null,

    /**
     * Property: fractionalZoom
     * {Boolean} For a base layer that supports it, allow the map resolution
     *     to be set to a value between one of the values in the resolutions
     *     array.  Default is false.
     *
     * When fractionalZoom is set to true, it is possible to zoom to
     *     an arbitrary extent.  This requires a base layer from a source
     *     that supports requests for arbitrary extents (i.e. not cached
     *     tiles on a regular lattice).  This means that fractionalZoom
     *     will not work with commercial layers (Google, Yahoo, VE), layers
     *     using TileCache, or any other pre-cached data sources.
     *
     * If you are using fractionalZoom, then you should also use
     *     <getResolutionForZoom> instead of layer.resolutions[zoom] as the
     *     former works for non-integer zoom levels.
     */
    fractionalZoom: false,

    /**
     * APIProperty: events
     * {<OpenLayers.Events>} An events object that handles all
     *                       events on the map
     */
    events: null,

    /**
     * APIProperty: div
     * {DOMElement} The element that contains the map
     */
    div: null,

    /**
     * Property: dragging
     * {Boolean} The map is currently being dragged.
     */
    dragging: false,

    /**
     * Property: size
     * {<OpenLayers.Size>} Size of the main div (this.div)
     */
    size: null,

    /**
     * Property: viewPortDiv
     * {HTMLDivElement} The element that represents the map viewport
     */
    viewPortDiv: null,

    /**
     * Property: layerContainerOrigin
     * {<OpenLayers.LonLat>} The lonlat at which the later container was
     *                       re-initialized (on-zoom)
     */
    layerContainerOrigin: null,

    /**
     * Property: layerContainerDiv
     * {HTMLDivElement} The element that contains the layers.
     */
    layerContainerDiv: null,

    /**
     * APIProperty: layers
     * {Array(<OpenLayers.Layer>)} Ordered list of layers in the map
     */
    layers: null,

    /**
     * Property: controls
     * {Array(<OpenLayers.Control>)} List of controls associated with the map
     */
    controls: null,

    /**
     * Property: popups
     * {Array(<OpenLayers.Popup>)} List of popups associated with the map
     */
    popups: null,

    /**
     * APIProperty: baseLayer
     * {<OpenLayers.Layer>} The currently selected base layer.  This determines
     * min/max zoom level, projection, etc.
     */
    baseLayer: null,

    /**
     * Property: center
     * {<OpenLayers.LonLat>} The current center of the map
     */
    center: null,

    /**
     * Property: resolution
     * {Float} The resolution of the map.
     */
    resolution: null,

    /**
     * Property: zoom
     * {Integer} The current zoom level of the map
     */
    zoom: 0,

    /**
     * Property: viewRequestID
     * {String} Used to store a unique identifier that changes when the map
     *          view changes. viewRequestID should be used when adding data
     *          asynchronously to the map: viewRequestID is incremented when
     *          you initiate your request (right now during changing of
     *          baselayers and changing of zooms). It is stored here in the
     *          map and also in the data that will be coming back
     *          asynchronously. Before displaying this data on request
     *          completion, we check that the viewRequestID of the data is
     *          still the same as that of the map. Fix for #480
     */
    viewRequestID: 0,

  // Options

    /**
     * APIProperty: tileSize
     * {<OpenLayers.Size>} Set in the map options to override the default tile
     *                     size for this map.
     */
    tileSize: null,

    /**
     * APIProperty: projection
     * {String} Set in the map options to override the default projection
     *          string this map - also set maxExtent, maxResolution, and
     *          units if appropriate.
     */
    projection: "EPSG:4326",

    /**
     * APIProperty: units
     * {String} The map units.  Defaults to 'degrees'.  Possible values are
     *          'degrees' (or 'dd'), 'm', 'ft', 'km', 'mi', 'inches'.
     */
    units: 'degrees',

    /**
     * APIProperty: resolutions
     * {Array(Float)} A list of map resolutions (map units per pixel) in
     *     descending order.  If this is not set in the layer constructor, it
     *     will be set based on other resolution related properties
     *     (maxExtent, maxResolution, maxScale, etc.).
     */
    resolutions: null,

    /**
     * APIProperty: maxResolution
     * {Float} Default max is 360 deg / 256 px, which corresponds to
     *          zoom level 0 on gmaps.  Specify a different value in the map
     *          options if you are not using a geographic projection and
     *          displaying the whole world.
     */
    maxResolution: 1.40625,

    /**
     * APIProperty: minResolution
     * {Float}
     */
    minResolution: null,

    /**
     * APIProperty: maxScale
     * {Float}
     */
    maxScale: null,

    /**
     * APIProperty: minScale
     * {Float}
     */
    minScale: null,

    /**
     * APIProperty: maxExtent
     * {<OpenLayers.Bounds>} The maximum extent for the map.  Defaults to the
     *                       whole world in decimal degrees
     *                       (-180, -90, 180, 90).  Specify a different
     *                        extent in the map options if you are not using a
     *                        geographic projection and displaying the whole
     *                        world.
     */
    maxExtent: null,

    /**
     * APIProperty: minExtent
     * {<OpenLayers.Bounds>}
     */
    minExtent: null,

    /**
     * APIProperty: restrictedExtent
     * {<OpenLayers.Bounds>} Limit map navigation to this extent where possible.
     *     If a non-null restrictedExtent is set, panning will be restricted
     *     to the given bounds.  In addition, zooming to a resolution that
     *     displays more than the restricted extent will center the map
     *     on the restricted extent.  If you wish to limit the zoom level
     *     or resolution, use maxResolution.
     */
    restrictedExtent: null,

    /**
     * APIProperty: numZoomLevels
     * {Integer} Number of zoom levels for the map.  Defaults to 16.  Set a
     *           different value in the map options if needed.
     */
    numZoomLevels: 16,

    /**
     * APIProperty: theme
     * {String} Relative path to a CSS file from which to load theme styles.
     *          Specify null in the map options (e.g. {theme: null}) if you
     *          want to get cascading style declarations - by putting links to
     *          stylesheets or style declarations directly in your page.
     */
    theme: null,

    /**
     * APIProperty: displayProjection
     * {<OpenLayers.Projection>} Requires proj4js support.Projection used by
     *     several controls to display data to user. If this property is set,
     *     it will be set on any control which has a null displayProjection
     *     property at the time the control is added to the map.
     */
    displayProjection: null,

    /**
     * APIProperty: fallThrough
     * {Boolean} Should OpenLayers allow events on the map to fall through to
     *           other elements on the page, or should it swallow them? (#457)
     *           Default is to fall through.
     */
    fallThrough: true,

    /**
     * Property: panTween
     * {OpenLayers.Tween} Animated panning tween object, see panTo()
     */
    panTween: null,

    /**
     * APIProperty: eventListeners
     * {Object} If set as an option at construction, the eventListeners
     *     object will be registered with <OpenLayers.Events.on>.  Object
     *     structure must be a listeners object as shown in the example for
     *     the events.on method.
     */
    eventListeners: null,

    /**
     * Property: panMethod
     * {Function} The Easing function to be used for tweening.  Default is
     * OpenLayers.Easing.Expo.easeOut. Setting this to 'null' turns off
     * animated panning.
     */
    panMethod: OpenLayers.Easing.Expo.easeOut,

    /**
     * Property: paddingForPopups
     * {<OpenLayers.Bounds>} Outside margin of the popup. Used to prevent
     *     the popup from getting too close to the map border.
     */
    paddingForPopups : null,

    /**
     * Constructor: OpenLayers.Map
     * Constructor for a new OpenLayers.Map instance.
     *
     * Parameters:
     * div - {String} Id of an element in your page that will contain the map.
     * options - {Object} Optional object with properties to tag onto the map.
     *
     * Examples:
     * (code)
     * // create a map with default options in an element with the id "map1"
     * var map = new OpenLayers.Map("map1");
     *
     * // create a map with non-default options in an element with id "map2"
     * var options = {
     *     maxExtent: new OpenLayers.Bounds(-200000, -200000, 200000, 200000),
     *     maxResolution: 156543,
     *     units: 'm',
     *     projection: "EPSG:41001"
     * };
     * var map = new OpenLayers.Map("map2", options);
     * (end)
     */
    initialize: function (div, options) {

        // Simple-type defaults are set in class definition.
        //  Now set complex-type defaults
        this.tileSize = new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH,
                                            OpenLayers.Map.TILE_HEIGHT);

        this.maxExtent = new OpenLayers.Bounds(-180, -90, 180, 90);

        this.paddingForPopups = new OpenLayers.Bounds(15, 15, 15, 15);

        this.theme = OpenLayers._getScriptLocation() +
                             'theme/default/style.css';

        // now override default options
        OpenLayers.Util.extend(this, options);

        this.id = OpenLayers.Util.createUniqueID("OpenLayers.Map_");

        this.div = OpenLayers.Util.getElement(div);

        // the viewPortDiv is the outermost div we modify
        var id = this.div.id + "_OpenLayers_ViewPort";
        this.viewPortDiv = OpenLayers.Util.createDiv(id, null, null, null,
                                                     "relative", null,
                                                     "hidden");
        this.viewPortDiv.style.width = "100%";
        this.viewPortDiv.style.height = "100%";
        this.viewPortDiv.className = "olMapViewport";
        this.div.appendChild(this.viewPortDiv);

        // the layerContainerDiv is the one that holds all the layers
        id = this.div.id + "_OpenLayers_Container";
        this.layerContainerDiv = OpenLayers.Util.createDiv(id);
        this.layerContainerDiv.style.zIndex=this.Z_INDEX_BASE['Popup']-1;

        this.viewPortDiv.appendChild(this.layerContainerDiv);

        this.events = new OpenLayers.Events(this,
                                            this.div,
                                            this.EVENT_TYPES,
                                            this.fallThrough);
        this.updateSize();
        if(this.eventListeners instanceof Object) {
            this.events.on(this.eventListeners);
        }

        // update the map size and location before the map moves
        this.events.register("movestart", this, this.updateSize);

        // Because Mozilla does not support the "resize" event for elements
        // other than "window", we need to put a hack here.
        if (OpenLayers.String.contains(navigator.appName, "Microsoft")) {
            // If IE, register the resize on the div
            this.events.register("resize", this, this.updateSize);
        } else {
            // Else updateSize on catching the window's resize
            //  Note that this is ok, as updateSize() does nothing if the
            //  map's size has not actually changed.
            this.updateSizeDestroy = OpenLayers.Function.bind(this.updateSize,
                this);
            OpenLayers.Event.observe(window, 'resize',
                            this.updateSizeDestroy);
        }

        // only append link stylesheet if the theme property is set
        if(this.theme) {
            // check existing links for equivalent url
            var addNode = true;
            var nodes = document.getElementsByTagName('link');
            for(var i=0; i<nodes.length; ++i) {
                if(OpenLayers.Util.isEquivalentUrl(nodes.item(i).href,
                                                   this.theme)) {
                    addNode = false;
                    break;
                }
            }
            // only add a new node if one with an equivalent url hasn't already
            // been added
            if(addNode) {
                var cssNode = document.createElement('link');
                cssNode.setAttribute('rel', 'stylesheet');
                cssNode.setAttribute('type', 'text/css');
                cssNode.setAttribute('href', this.theme);
                document.getElementsByTagName('head')[0].appendChild(cssNode);
            }
        }

        this.layers = [];

        if (this.controls == null) {
            if (OpenLayers.Control != null) { // running full or lite?
                this.controls = [ new OpenLayers.Control.Navigation(),
                                  new OpenLayers.Control.PanZoom(),
                                  new OpenLayers.Control.ArgParser(),
                                  new OpenLayers.Control.Attribution()
                                ];
            } else {
                this.controls = [];
            }
        }

        for(var i=0; i < this.controls.length; i++) {
            this.addControlToMap(this.controls[i]);
        }

        this.popups = [];

        this.unloadDestroy = OpenLayers.Function.bind(this.destroy, this);


        // always call map.destroy()
        OpenLayers.Event.observe(window, 'unload', this.unloadDestroy);

    },

    /**
     * Method: unloadDestroy
     * Function that is called to destroy the map on page unload. stored here
     *     so that if map is manually destroyed, we can unregister this.
     */
    unloadDestroy: null,

    /**
     * Method: updateSizeDestroy
     * When the map is destroyed, we need to stop listening to updateSize
     *    events: this method stores the function we need to unregister in
     *    non-IE browsers.
     */
    updateSizeDestroy: null,

    /**
     * APIMethod: destroy
     * Destroy this map
     */
    destroy:function() {
        // if unloadDestroy is null, we've already been destroyed
        if (!this.unloadDestroy) {
            return false;
        }

        // map has been destroyed. dont do it again!
        OpenLayers.Event.stopObserving(window, 'unload', this.unloadDestroy);
        this.unloadDestroy = null;

        if (this.updateSizeDestroy) {
            OpenLayers.Event.stopObserving(window, 'resize',
                                           this.updateSizeDestroy);
        } else {
            this.events.unregister("resize", this, this.updateSize);
        }

        this.paddingForPopups = null;

        if (this.controls != null) {
            for (var i = this.controls.length - 1; i>=0; --i) {
                this.controls[i].destroy();
            }
            this.controls = null;
        }
        if (this.layers != null) {
            for (var i = this.layers.length - 1; i>=0; --i) {
                //pass 'false' to destroy so that map wont try to set a new
                // baselayer after each baselayer is removed
                this.layers[i].destroy(false);
            }
            this.layers = null;
        }
        if (this.viewPortDiv) {
            this.div.removeChild(this.viewPortDiv);
        }
        this.viewPortDiv = null;

        if(this.eventListeners) {
            this.events.un(this.eventListeners);
            this.eventListeners = null;
        }
        this.events.destroy();
        this.events = null;

    },

    /**
     * APIMethod: setOptions
     * Change the map options
     *
     * Parameters:
     * options - {Object} Hashtable of options to tag to the map
     */
    setOptions: function(options) {
        OpenLayers.Util.extend(this, options);
    },

    /**
     * APIMethod: getTileSize
     * Get the tile size for the map
     *
     * Returns:
     * {<OpenLayers.Size>}
     */
     getTileSize: function() {
         return this.tileSize;
     },


    /**
     * APIMethod: getBy
     * Get a list of objects given a property and a match item.
     *
     * Parameters:
     * array - {String} A property on the map whose value is an array.
     * property - {String} A property on each item of the given array.
     * match - {String | Object} A string to match.  Can also be a regular
     *     expression literal or object.  In addition, it can be any object
     *     with a method named test.  For reqular expressions or other, if
     *     match.test(map[array][i][property]) evaluates to true, the item will
     *     be included in the array returned.  If no items are found, an empty
     *     array is returned.
     *
     * Returns:
     * {Array} An array of items where the given property matches the given
     *     criteria.
     */
    getBy: function(array, property, match) {
        var test = (typeof match.test == "function");
        var found = OpenLayers.Array.filter(this[array], function(item) {
            return item[property] == match || (test && match.test(item[property]));
        });
        return found;
    },

    /**
     * APIMethod: getLayersBy
     * Get a list of layers with properties matching the given criteria.
     *
     * Parameter:
     * property - {String} A layer property to be matched.
     * match - {String | Object} A string to match.  Can also be a regular
     *     expression literal or object.  In addition, it can be any object
     *     with a method named test.  For reqular expressions or other, if
     *     match.test(layer[property]) evaluates to true, the layer will be
     *     included in the array returned.  If no layers are found, an empty
     *     array is returned.
     *
     * Returns:
     * {Array(<OpenLayers.Layer>)} A list of layers matching the given criteria.
     *     An empty array is returned if no matches are found.
     */
    getLayersBy: function(property, match) {
        return this.getBy("layers", property, match);
    },

    /**
     * APIMethod: getLayersByName
     * Get a list of layers with names matching the given name.
     *
     * Parameter:
     * match - {String | Object} A layer name.  The name can also be a regular
     *     expression literal or object.  In addition, it can be any object
     *     with a method named test.  For reqular expressions or other, if
     *     name.test(layer.name) evaluates to true, the layer will be included
     *     in the list of layers returned.  If no layers are found, an empty
     *     array is returned.
     *
     * Returns:
     * {Array(<OpenLayers.Layer>)} A list of layers matching the given name.
     *     An empty array is returned if no matches are found.
     */
    getLayersByName: function(match) {
        return this.getLayersBy("name", match);
    },

    /**
     * APIMethod: getLayersByClass
     * Get a list of layers of a given class (CLASS_NAME).
     *
     * Parameter:
     * match - {String | Object} A layer class name.  The match can also be a
     *     regular expression literal or object.  In addition, it can be any
     *     object with a method named test.  For reqular expressions or other,
     *     if type.test(layer.CLASS_NAME) evaluates to true, the layer will
     *     be included in the list of layers returned.  If no layers are
     *     found, an empty array is returned.
     *
     * Returns:
     * {Array(<OpenLayers.Layer>)} A list of layers matching the given class.
     *     An empty array is returned if no matches are found.
     */
    getLayersByClass: function(match) {
        return this.getLayersBy("CLASS_NAME", match);
    },

    /**
     * APIMethod: getControlsBy
     * Get a list of controls with properties matching the given criteria.
     *
     * Parameter:
     * property - {String} A control property to be matched.
     * match - {String | Object} A string to match.  Can also be a regular
     *     expression literal or object.  In addition, it can be any object
     *     with a method named test.  For reqular expressions or other, if
     *     match.test(layer[property]) evaluates to true, the layer will be
     *     included in the array returned.  If no layers are found, an empty
     *     array is returned.
     *
     * Returns:
     * {Array(<OpenLayers.Control>)} A list of controls matching the given
     *     criteria.  An empty array is returned if no matches are found.
     */
    getControlsBy: function(property, match) {
        return this.getBy("controls", property, match);
    },

    /**
     * APIMethod: getControlsByClass
     * Get a list of controls of a given class (CLASS_NAME).
     *
     * Parameter:
     * match - {String | Object} A control class name.  The match can also be a
     *     regular expression literal or object.  In addition, it can be any
     *     object with a method named test.  For reqular expressions or other,
     *     if type.test(control.CLASS_NAME) evaluates to true, the control will
     *     be included in the list of controls returned.  If no controls are
     *     found, an empty array is returned.
     *
     * Returns:
     * {Array(<OpenLayers.Control>)} A list of controls matching the given class.
     *     An empty array is returned if no matches are found.
     */
    getControlsByClass: function(match) {
        return this.getControlsBy("CLASS_NAME", match);
    },

  /********************************************************/
  /*                                                      */
  /*                  Layer Functions                     */
  /*                                                      */
  /*     The following functions deal with adding and     */
  /*        removing Layers to and from the Map           */
  /*                                                      */
  /********************************************************/

    /**
     * APIMethod: getLayer
     * Get a layer based on its id
     *
     * Parameter:
     * id - {String} A layer id
     *
     * Returns:
     * {<OpenLayers.Layer>} The Layer with the corresponding id from the map's
     *                      layer collection, or null if not found.
     */
    getLayer: function(id) {
        var foundLayer = null;
        for (var i = 0; i < this.layers.length; i++) {
            var layer = this.layers[i];
            if (layer.id == id) {
                foundLayer = layer;
                break;
            }
        }
        return foundLayer;
    },

    /**
    * Method: setLayerZIndex
    *
    * Parameters:
    * layer - {<OpenLayers.Layer>}
    * zIdx - {int}
    */
    setLayerZIndex: function (layer, zIdx) {
        layer.setZIndex(
            this.Z_INDEX_BASE[layer.isBaseLayer ? 'BaseLayer' : 'Overlay']
            + zIdx * 5 );
    },

    /**
     * Method: resetLayersZIndex
     * Reset each layer's z-index based on layer's array index
     */
    resetLayersZIndex: function() {
        for (var i = 0; i < this.layers.length; i++) {
            var layer = this.layers[i];
            this.setLayerZIndex(layer, i);
        }
    },

    /**
    * APIMethod: addLayer
    *
    * Parameters:
    * layer - {<OpenLayers.Layer>}
    */
    addLayer: function (layer) {
        for(var i=0; i < this.layers.length; i++) {
            if (this.layers[i] == layer) {
                var msg = OpenLayers.i18n('layerAlreadyAdded',
                                                      {'layerName':layer.name});
                OpenLayers.Console.warn(msg);
                return false;
            }
        }

        this.events.triggerEvent("preaddlayer", {layer: layer});

        layer.div.className = "olLayerDiv";
        layer.div.style.overflow = "";
        this.setLayerZIndex(layer, this.layers.length);

        if (layer.isFixed) {
            this.viewPortDiv.appendChild(layer.div);
        } else {
            this.layerContainerDiv.appendChild(layer.div);
        }
        this.layers.push(layer);
        layer.setMap(this);

        if (layer.isBaseLayer)  {
            if (this.baseLayer == null) {
                // set the first baselaye we add as the baselayer
                this.setBaseLayer(layer);
            } else {
                layer.setVisibility(false);
            }
        } else {
            layer.redraw();
        }

        this.events.triggerEvent("addlayer", {layer: layer});
    },

    /**
    * APIMethod: addLayers
    *
    * Parameters:
    * layers - {Array(<OpenLayers.Layer>)}
    */
    addLayers: function (layers) {
        for (var i = 0; i <  layers.length; i++) {
            this.addLayer(layers[i]);
        }
    },

    /**
     * APIMethod: removeLayer
     * Removes a layer from the map by removing its visual element (the
     *   layer.div property), then removing it from the map's internal list
     *   of layers, setting the layer's map property to null.
     *
     *   a "removelayer" event is triggered.
     *
     *   very worthy of mention is that simply removing a layer from a map
     *   will not cause the removal of any popups which may have been created
     *   by the layer. this is due to the fact that it was decided at some
     *   point that popups would not belong to layers. thus there is no way
     *   for us to know here to which layer the popup belongs.
     *
     *     A simple solution to this is simply to call destroy() on the layer.
     *     the default OpenLayers.Layer class's destroy() function
     *     automatically takes care to remove itself from whatever map it has
     *     been attached to.
     *
     *     The correct solution is for the layer itself to register an
     *     event-handler on "removelayer" and when it is called, if it
     *     recognizes itself as the layer being removed, then it cycles through
     *     its own personal list of popups, removing them from the map.
     *
     * Parameters:
     * layer - {<OpenLayers.Layer>}
     * setNewBaseLayer - {Boolean} Default is true
     */
    removeLayer: function(layer, setNewBaseLayer) {
        if (setNewBaseLayer == null) {
            setNewBaseLayer = true;
        }

        if (layer.isFixed) {
            this.viewPortDiv.removeChild(layer.div);
        } else {
            this.layerContainerDiv.removeChild(layer.div);
        }
        OpenLayers.Util.removeItem(this.layers, layer);
        layer.removeMap(this);
        layer.map = null;

        // if we removed the base layer, need to set a new one
        if(this.baseLayer == layer) {
            this.baseLayer = null;
            if(setNewBaseLayer) {
                for(var i=0; i < this.layers.length; i++) {
                    var iLayer = this.layers[i];
                    if (iLayer.isBaseLayer) {
                        this.setBaseLayer(iLayer);
                        break;
                    }
                }
            }
        }

        this.resetLayersZIndex();

        this.events.triggerEvent("removelayer", {layer: layer});
    },

    /**
     * APIMethod: getNumLayers
     *
     * Returns:
     * {Int} The number of layers attached to the map.
     */
    getNumLayers: function () {
        return this.layers.length;
    },

    /**
     * APIMethod: getLayerIndex
     *
     * Parameters:
     * layer - {<OpenLayers.Layer>}
     *
     * Returns:
     * {Integer} The current (zero-based) index of the given layer in the map's
     *           layer stack. Returns -1 if the layer isn't on the map.
     */
    getLayerIndex: function (layer) {
        return OpenLayers.Util.indexOf(this.layers, layer);
    },

    /**
     * APIMethod: setLayerIndex
     * Move the given layer to the specified (zero-based) index in the layer
     *     list, changing its z-index in the map display. Use
     *     map.getLayerIndex() to find out the current index of a layer. Note
     *     that this cannot (or at least should not) be effectively used to
     *     raise base layers above overlays.
     *
     * Parameters:
     * layer - {<OpenLayers.Layer>}
     * idx - {int}
     */
    setLayerIndex: function (layer, idx) {
        var base = this.getLayerIndex(layer);
        if (idx < 0) {
            idx = 0;
        } else if (idx > this.layers.length) {
            idx = this.layers.length;
        }
        if (base != idx) {
            this.layers.splice(base, 1);
            this.layers.splice(idx, 0, layer);
            for (var i = 0; i < this.layers.length; i++) {
                this.setLayerZIndex(this.layers[i], i);
            }
            this.events.triggerEvent("changelayer", {
                layer: layer, property: "order"
            });
        }
    },

    /**
     * APIMethod: raiseLayer
     * Change the index of the given layer by delta. If delta is positive,
     *     the layer is moved up the map's layer stack; if delta is negative,
     *     the layer is moved down.  Again, note that this cannot (or at least
     *     should not) be effectively used to raise base layers above overlays.
     *
     * Paremeters:
     * layer - {<OpenLayers.Layer>}
     * idx - {int}
     */
    raiseLayer: function (layer, delta) {
        var idx = this.getLayerIndex(layer) + delta;
        this.setLayerIndex(layer, idx);
    },

    /**
     * APIMethod: setBaseLayer
     * Allows user to specify one of the currently-loaded layers as the Map's
     *     new base layer.
     *
     * Parameters:
     * newBaseLayer - {<OpenLayers.Layer>}
     */
    setBaseLayer: function(newBaseLayer) {
        var oldExtent = null;
        if (this.baseLayer) {
            oldExtent = this.baseLayer.getExtent();
        }

        if (newBaseLayer != this.baseLayer) {

            // is newBaseLayer an already loaded layer?m
            if (OpenLayers.Util.indexOf(this.layers, newBaseLayer) != -1) {

                // make the old base layer invisible
                if (this.baseLayer != null) {
                    this.baseLayer.setVisibility(false);
                }

                // set new baselayer
                this.baseLayer = newBaseLayer;

                // Increment viewRequestID since the baseLayer is
                // changing. This is used by tiles to check if they should
                // draw themselves.
                this.viewRequestID++;
                this.baseLayer.visibility = true;

                //redraw all layers
                var center = this.getCenter();
                if (center != null) {

                    //either get the center from the old Extent or just from
                    // the current center of the map.
                    var newCenter = (oldExtent)
                        ? oldExtent.getCenterLonLat()
                        : center;

                    //the new zoom will either come from the old Extent or
                    // from the current resolution of the map
                    var newZoom = (oldExtent)
                        ? this.getZoomForExtent(oldExtent, true)
                        : this.getZoomForResolution(this.resolution, true);

                    // zoom and force zoom change
                    this.setCenter(newCenter, newZoom, false, true);
                }

                this.events.triggerEvent("changebaselayer", {
                    layer: this.baseLayer
                });
            }
        }
    },


  /********************************************************/
  /*                                                      */
  /*                 Control Functions                    */
  /*                                                      */
  /*     The following functions deal with adding and     */
  /*        removing Controls to and from the Map         */
  /*                                                      */
  /********************************************************/

    /**
     * APIMethod: addControl
     *
     * Parameters:
     * control - {<OpenLayers.Control>}
     * px - {<OpenLayers.Pixel>}
     */
    addControl: function (control, px) {
        this.controls.push(control);
        this.addControlToMap(control, px);
    },

    /**
     * Method: addControlToMap
     *
     * Parameters:
     *
     * control - {<OpenLayers.Control>}
     * px - {<OpenLayers.Pixel>}
     */
    addControlToMap: function (control, px) {
        // If a control doesn't have a div at this point, it belongs in the
        // viewport.
        control.outsideViewport = (control.div != null);

        // If the map has a displayProjection, and the control doesn't, set
        // the display projection.
        if (this.displayProjection && !control.displayProjection) {
            control.displayProjection = this.displayProjection;
        }

        control.setMap(this);
        var div = control.draw(px);
        if (div) {
            if(!control.outsideViewport) {
                div.style.zIndex = this.Z_INDEX_BASE['Control'] +
                                    this.controls.length;
                this.viewPortDiv.appendChild( div );
            }
        }
    },

    /**
     * APIMethod: getControl
     *
     * Parameters:
     * id - {String} ID of the control to return.
     *
     * Returns:
     * {<OpenLayers.Control>} The control from the map's list of controls
     *                        which has a matching 'id'. If none found,
     *                        returns null.
     */
    getControl: function (id) {
        var returnControl = null;
        for(var i=0; i < this.controls.length; i++) {
            var control = this.controls[i];
            if (control.id == id) {
                returnControl = control;
                break;
            }
        }
        return returnControl;
    },

    /**
     * APIMethod: removeControl
     * Remove a control from the map. Removes the control both from the map
     *     object's internal array of controls, as well as from the map's
     *     viewPort (assuming the control was not added outsideViewport)
     *
     * Parameters:
     * control - {<OpenLayers.Control>} The control to remove.
     */
    removeControl: function (control) {
        //make sure control is non-null and actually part of our map
        if ( (control) && (control == this.getControl(control.id)) ) {
            if (control.div && (control.div.parentNode == this.viewPortDiv)) {
                this.viewPortDiv.removeChild(control.div);
            }
            OpenLayers.Util.removeItem(this.controls, control);
        }
    },

  /********************************************************/
  /*                                                      */
  /*                  Popup Functions                     */
  /*                                                      */
  /*     The following functions deal with adding and     */
  /*        removing Popups to and from the Map           */
  /*                                                      */
  /********************************************************/

    /**
     * APIMethod: addPopup
     *
     * Parameters:
     * popup - {<OpenLayers.Popup>}
     * exclusive - {Boolean} If true, closes all other popups first
     */
    addPopup: function(popup, exclusive) {

        if (exclusive) {
            //remove all other popups from screen
            for (var i = this.popups.length - 1; i >= 0; --i) {
                this.removePopup(this.popups[i]);
            }
        }

        popup.map = this;
        this.popups.push(popup);
        var popupDiv = popup.draw();
        if (popupDiv) {
            popupDiv.style.zIndex = this.Z_INDEX_BASE['Popup'] +
                                    this.popups.length;
            this.layerContainerDiv.appendChild(popupDiv);
        }
    },

    /**
    * APIMethod: removePopup
    *
    * Parameters:
    * popup - {<OpenLayers.Popup>}
    */
    removePopup: function(popup) {
        OpenLayers.Util.removeItem(this.popups, popup);
        if (popup.div) {
            try { this.layerContainerDiv.removeChild(popup.div); }
            catch (e) { } // Popups sometimes apparently get disconnected
                      // from the layerContainerDiv, and cause complaints.
        }
        popup.map = null;
    },

  /********************************************************/
  /*                                                      */
  /*              Container Div Functions                 */
  /*                                                      */
  /*   The following functions deal with the access to    */
  /*    and maintenance of the size of the container div  */
  /*                                                      */
  /********************************************************/

    /**
     * APIMethod: getSize
     *
     * Returns:
     * {<OpenLayers.Size>} An <OpenLayers.Size> object that represents the
     *                     size, in pixels, of the div into which OpenLayers
     *                     has been loaded.
     *                     Note - A clone() of this locally cached variable is
     *                     returned, so as not to allow users to modify it.
     */
    getSize: function () {
        var size = null;
        if (this.size != null) {
            size = this.size.clone();
        }
        return size;
    },

    /**
     * APIMethod: updateSize
     * This function should be called by any external code which dynamically
     *     changes the size of the map div (because mozilla wont let us catch
     *     the "onresize" for an element)
     */
    updateSize: function() {
        // the div might have moved on the page, also
        this.events.element.offsets = null;
        var newSize = this.getCurrentSize();
        var oldSize = this.getSize();
        if (oldSize == null) {
            this.size = oldSize = newSize;
        }
        if (!newSize.equals(oldSize)) {

            // store the new size
            this.size = newSize;

            //notify layers of mapresize
            for(var i=0; i < this.layers.length; i++) {
                this.layers[i].onMapResize();
            }

            if (this.baseLayer != null) {
                var center = new OpenLayers.Pixel(newSize.w /2, newSize.h / 2);
                var centerLL = this.getLonLatFromViewPortPx(center);
                var zoom = this.getZoom();
                this.zoom = null;
                this.setCenter(this.getCenter(), zoom);
            }

        }
    },

    /**
     * Method: getCurrentSize
     *
     * Returns:
     * {<OpenLayers.Size>} A new <OpenLayers.Size> object with the dimensions
     *                     of the map div
     */
    getCurrentSize: function() {

        var size = new OpenLayers.Size(this.div.clientWidth,
                                       this.div.clientHeight);

        // Workaround for the fact that hidden elements return 0 for size.
        if (size.w == 0 && size.h == 0 || isNaN(size.w) && isNaN(size.h)) {
            var dim = OpenLayers.Element.getDimensions(this.div);
            size.w = dim.width;
            size.h = dim.height;
        }
        if (size.w == 0 && size.h == 0 || isNaN(size.w) && isNaN(size.h)) {
            size.w = parseInt(this.div.style.width);
            size.h = parseInt(this.div.style.height);
        }
        return size;
    },

    /**
     * Method: calculateBounds
     *
     * Parameters:
     * center - {<OpenLayers.LonLat>} Default is this.getCenter()
     * resolution - {float} Default is this.getResolution()
     *
     * Returns:
     * {<OpenLayers.Bounds>} A bounds based on resolution, center, and
     *                       current mapsize.
     */
    calculateBounds: function(center, resolution) {

        var extent = null;

        if (center == null) {
            center = this.getCenter();
        }
        if (resolution == null) {
            resolution = this.getResolution();
        }

        if ((center != null) && (resolution != null)) {

            var size = this.getSize();
            var w_deg = size.w * resolution;
            var h_deg = size.h * resolution;

            extent = new OpenLayers.Bounds(center.lon - w_deg / 2,
                                           center.lat - h_deg / 2,
                                           center.lon + w_deg / 2,
                                           center.lat + h_deg / 2);

        }

        return extent;
    },


  /********************************************************/
  /*                                                      */
  /*            Zoom, Center, Pan Functions               */
  /*                                                      */
  /*    The following functions handle the validation,    */
  /*   getting and setting of the Zoom Level and Center   */
  /*       as well as the panning of the Map              */
  /*                                                      */
  /********************************************************/
    /**
     * APIMethod: getCenter
     *
     * Returns:
     * {<OpenLayers.LonLat>}
     */
    getCenter: function () {
        return this.center;
    },


    /**
     * APIMethod: getZoom
     *
     * Returns:
     * {Integer}
     */
    getZoom: function () {
        return this.zoom;
    },

    /**
     * APIMethod: pan
     * Allows user to pan by a value of screen pixels
     *
     * Parameters:
     * dx - {Integer}
     * dy - {Integer}
     * options - {Object} Options to configure panning:
     *  - *animate* {Boolean} Use panTo instead of setCenter. Default is true.
     *  - *dragging* {Boolean} Call setCenter with dragging true.  Default is
     *    false.
     */
    pan: function(dx, dy, options) {
        // this should be pushed to applyDefaults and extend
        if (!options) {
            options = {};
        }
        OpenLayers.Util.applyDefaults(options, {
            animate: true,
            dragging: false
        });
        // getCenter
        var centerPx = this.getViewPortPxFromLonLat(this.getCenter());

        // adjust
        var newCenterPx = centerPx.add(dx, dy);

        // only call setCenter if not dragging or there has been a change
        if (!options.dragging || !newCenterPx.equals(centerPx)) {
            var newCenterLonLat = this.getLonLatFromViewPortPx(newCenterPx);
            if (options.animate) {
                this.panTo(newCenterLonLat);
            } else {
                this.setCenter(newCenterLonLat, null, options.dragging);
            }
        }

   },

   /**
     * APIMethod: panTo
     * Allows user to pan to a new lonlat
     * If the new lonlat is in the current extent the map will slide smoothly
     *
     * Parameters:
     * lonlat - {<OpenLayers.Lonlat>}
     */
    panTo: function(lonlat) {
        if (this.panMethod && this.getExtent().containsLonLat(lonlat)) {
            if (!this.panTween) {
                this.panTween = new OpenLayers.Tween(this.panMethod);
            }
            var center = this.getCenter();
            var from = {
                lon: center.lon,
                lat: center.lat
            };
            var to = {
                lon: lonlat.lon,
                lat: lonlat.lat
            };
            this.panTween.start(from, to, 50, {
                callbacks: {
                    start: OpenLayers.Function.bind(function(lonlat) {
                        this.events.triggerEvent("movestart");
                    }, this),
                    eachStep: OpenLayers.Function.bind(function(lonlat) {
                        lonlat = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);
                        this.moveTo(lonlat, this.zoom, {
                            'dragging': true,
                            'noEvent': true
                        });
                    }, this),
                    done: OpenLayers.Function.bind(function(lonlat) {
                        lonlat = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);
                        this.moveTo(lonlat, this.zoom, {
                            'noEvent': true
                        });
                        this.events.triggerEvent("moveend");
                    }, this)
                }
            });
        } else {
            this.setCenter(lonlat);
        }
    },

    /**
     * APIMethod: setCenter
     *
     * Parameters:
     * lonlat - {<OpenLayers.LonLat>}
     * zoom - {Integer}
     * dragging - {Boolean} Specifies whether or not to trigger
     *                      movestart/end events
     * forceZoomChange - {Boolean} Specifies whether or not to trigger zoom
     *                             change events (needed on baseLayer change)
     *
     * TBD: reconsider forceZoomChange in 3.0
     */
    setCenter: function(lonlat, zoom, dragging, forceZoomChange) {
        this.moveTo(lonlat, zoom, {
            'dragging': dragging,
            'forceZoomChange': forceZoomChange,
            'caller': 'setCenter'
        });
    },

    /**
     * Method: moveTo
     *
     * Parameters:
     * lonlat - {<OpenLayers.LonLat>}
     * zoom - {Integer}
     * options - {Object}
     */
    moveTo: function(lonlat, zoom, options) {
        if (!options) {
            options = {};
        }
        // dragging is false by default
        var dragging = options.dragging;
        // forceZoomChange is false by default
        var forceZoomChange = options.forceZoomChange;
        // noEvent is false by default
        var noEvent = options.noEvent;

        if (this.panTween && options.caller == "setCenter") {
            this.panTween.stop();
        }

        if (!this.center && !this.isValidLonLat(lonlat)) {
            lonlat = this.maxExtent.getCenterLonLat();
        }

        if(this.restrictedExtent != null) {
            // In 3.0, decide if we want to change interpretation of maxExtent.
            if(lonlat == null) {
                lonlat = this.getCenter();
            }
            if(zoom == null) {
                zoom = this.getZoom();
            }
            var resolution = this.getResolutionForZoom(zoom);
            var extent = this.calculateBounds(lonlat, resolution);
            if(!this.restrictedExtent.containsBounds(extent)) {
                var maxCenter = this.restrictedExtent.getCenterLonLat();
                if(extent.getWidth() > this.restrictedExtent.getWidth()) {
                    lonlat = new OpenLayers.LonLat(maxCenter.lon, lonlat.lat);
                } else if(extent.left < this.restrictedExtent.left) {
                    lonlat = lonlat.add(this.restrictedExtent.left -
                                        extent.left, 0);
                } else if(extent.right > this.restrictedExtent.right) {
                    lonlat = lonlat.add(this.restrictedExtent.right -
                                        extent.right, 0);
                }
                if(extent.getHeight() > this.restrictedExtent.getHeight()) {
                    lonlat = new OpenLayers.LonLat(lonlat.lon, maxCenter.lat);
                } else if(extent.bottom < this.restrictedExtent.bottom) {
                    lonlat = lonlat.add(0, this.restrictedExtent.bottom -
                                        extent.bottom);
                }
                else if(extent.top > this.restrictedExtent.top) {
                    lonlat = lonlat.add(0, this.restrictedExtent.top -
                                        extent.top);
                }
            }
        }

        var zoomChanged = forceZoomChange || (
                            (this.isValidZoomLevel(zoom)) &&
                            (zoom != this.getZoom()) );

        var centerChanged = (this.isValidLonLat(lonlat)) &&
                            (!lonlat.equals(this.center));


        // if neither center nor zoom will change, no need to do anything
        if (zoomChanged || centerChanged || !dragging) {

            if (!this.dragging && !noEvent) {
                this.events.triggerEvent("movestart");
            }

            if (centerChanged) {
                if ((!zoomChanged) && (this.center)) {
                    // if zoom hasnt changed, just slide layerContainer
                    //  (must be done before setting this.center to new value)
                    this.centerLayerContainer(lonlat);
                }
                this.center = lonlat.clone();
            }

            // (re)set the layerContainerDiv's location
            if ((zoomChanged) || (this.layerContainerOrigin == null)) {
                this.layerContainerOrigin = this.center.clone();
                this.layerContainerDiv.style.left = "0px";
                this.layerContainerDiv.style.top  = "0px";
            }

            if (zoomChanged) {
                this.zoom = zoom;
                this.resolution = this.getResolutionForZoom(zoom);
                // zoom level has changed, increment viewRequestID.
                this.viewRequestID++;
            }

            var bounds = this.getExtent();

            //send the move call to the baselayer and all the overlays
            this.baseLayer.moveTo(bounds, zoomChanged, dragging);

            bounds = this.baseLayer.getExtent();

            for (var i = 0; i < this.layers.length; i++) {
                var layer = this.layers[i];
                if (!layer.isBaseLayer) {
                    var inRange = layer.calculateInRange();
                    if (layer.inRange != inRange) {
                        // the inRange property has changed. If the layer is
                        // no longer in range, we turn it off right away. If
                        // the layer is no longer out of range, the moveTo
                        // call below will turn on the layer.
                        layer.inRange = inRange;
                        if (!inRange) {
                            layer.display(false);
                        }
                        this.events.triggerEvent("changelayer", {
                            layer: layer, property: "visibility"
                        });
                    }
                    if (inRange && layer.visibility) {
                        layer.moveTo(bounds, zoomChanged, dragging);
                    }
                }
            }

            if (zoomChanged) {
                //redraw popups
                for (var i = 0; i < this.popups.length; i++) {
                    this.popups[i].updatePosition();
                }
            }

            this.events.triggerEvent("move");

            if (zoomChanged) { this.events.triggerEvent("zoomend"); }
        }

        // even if nothing was done, we want to notify of this
        if (!dragging && !noEvent) {
            this.events.triggerEvent("moveend");
        }

        // Store the map dragging state for later use
        this.dragging = !!dragging;

    },

    /**
     * Method: centerLayerContainer
     * This function takes care to recenter the layerContainerDiv.
     *
     * Parameters:
     * lonlat - {<OpenLayers.LonLat>}
     */
    centerLayerContainer: function (lonlat) {

        var originPx = this.getViewPortPxFromLonLat(this.layerContainerOrigin);
        var newPx = this.getViewPortPxFromLonLat(lonlat);

        if ((originPx != null) && (newPx != null)) {
            this.layerContainerDiv.style.left = Math.round(originPx.x - newPx.x) + "px";
            this.layerContainerDiv.style.top  = Math.round(originPx.y - newPx.y) + "px";
        }
    },

    /**
     * Method: isValidZoomLevel
     *
     * Parameters:
     * zoomLevel - {Integer}
     *
     * Returns:
     * {Boolean} Whether or not the zoom level passed in is non-null and
     *           within the min/max range of zoom levels.
     */
    isValidZoomLevel: function(zoomLevel) {
       return ( (zoomLevel != null) &&
                (zoomLevel >= 0) &&
                (zoomLevel < this.getNumZoomLevels()) );
    },

    /**
     * Method: isValidLonLat
     *
     * Parameters:
     * lonlat - {<OpenLayers.LonLat>}
     *
     * Returns:
     * {Boolean} Whether or not the lonlat passed in is non-null and within
     *           the maxExtent bounds
     */
    isValidLonLat: function(lonlat) {
        var valid = false;
        if (lonlat != null) {
            var maxExtent = this.getMaxExtent();
            valid = maxExtent.containsLonLat(lonlat);
        }
        return valid;
    },

  /********************************************************/
  /*                                                      */
  /*                 Layer Options                        */
  /*                                                      */
  /*    Accessor functions to Layer Options parameters    */
  /*                                                      */
  /********************************************************/

    /**
     * APIMethod: getProjection
     * This method returns a string representing the projection. In
     *     the case of projection support, this will be the srsCode which
     *     is loaded -- otherwise it will simply be the string value that
     *     was passed to the projection at startup.
     *
     * FIXME: In 3.0, we will remove getProjectionObject, and instead
     *     return a Projection object from this function.
     *
     * Returns:
     * {String} The Projection string from the base layer or null.
     */
    getProjection: function() {
        var projection = this.getProjectionObject();
        return projection ? projection.getCode() : null;
    },

    /**
     * APIMethod: getProjectionObject
     * Returns the projection obect from the baselayer.
     *
     * Returns:
     * {<OpenLayers.Projection>} The Projection of the base layer.
     */
    getProjectionObject: function() {
        var projection = null;
        if (this.baseLayer != null) {
            projection = this.baseLayer.projection;
        }
        return projection;
    },

    /**
     * APIMethod: getMaxResolution
     *
     * Returns:
     * {String} The Map's Maximum Resolution
     */
    getMaxResolution: function() {
        var maxResolution = null;
        if (this.baseLayer != null) {
            maxResolution = this.baseLayer.maxResolution;
        }
        return maxResolution;
    },

    /**
     * APIMethod: getMaxExtent
     *
     * Returns:
     * {<OpenLayers.Bounds>}
     */
    getMaxExtent: function () {
        var maxExtent = null;
        if (this.baseLayer != null) {
            maxExtent = this.baseLayer.maxExtent;
        }
        return maxExtent;
    },

    /**
     * APIMethod: getNumZoomLevels
     *
     * Returns:
     * {Integer} The total number of zoom levels that can be displayed by the
     *           current baseLayer.
     */
    getNumZoomLevels: function() {
        var numZoomLevels = null;
        if (this.baseLayer != null) {
            numZoomLevels = this.baseLayer.numZoomLevels;
        }
        return numZoomLevels;
    },

  /********************************************************/
  /*                                                      */
  /*                 Baselayer Functions                  */
  /*                                                      */
  /*    The following functions, all publicly exposed     */
  /*       in the API?, are all merely wrappers to the    */
  /*       the same calls on whatever layer is set as     */
  /*                the current base layer                */
  /*                                                      */
  /********************************************************/

    /**
     * APIMethod: getExtent
     *
     * Returns:
     * {<OpenLayers.Bounds>} A Bounds object which represents the lon/lat
     *                       bounds of the current viewPort.
     *                       If no baselayer is set, returns null.
     */
    getExtent: function () {
        var extent = null;
        if (this.baseLayer != null) {
            extent = this.baseLayer.getExtent();
        }
        return extent;
    },

    /**
     * APIMethod: getResolution
     *
     * Returns:
     * {Float} The current resolution of the map.
     *         If no baselayer is set, returns null.
     */
    getResolution: function () {
        var resolution = null;
        if (this.baseLayer != null) {
            resolution = this.baseLayer.getResolution();
        }
        return resolution;
    },

     /**
      * APIMethod: getScale
      *
      * Returns:
      * {Float} The current scale denominator of the map.
      *         If no baselayer is set, returns null.
      */
    getScale: function () {
        var scale = null;
        if (this.baseLayer != null) {
            var res = this.getResolution();
            var units = this.baseLayer.units;
            scale = OpenLayers.Util.getScaleFromResolution(res, units);
        }
        return scale;
    },


    /**
     * APIMethod: getZoomForExtent
     *
     * Parameters:
     * bounds - {<OpenLayers.Bounds>}
     * closest - {Boolean} Find the zoom level that most closely fits the
     *     specified bounds. Note that this may result in a zoom that does
     *     not exactly contain the entire extent.
     *     Default is false.
     *
     * Returns:
     * {Integer} A suitable zoom level for the specified bounds.
     *           If no baselayer is set, returns null.
     */
    getZoomForExtent: function (bounds, closest) {
        var zoom = null;
        if (this.baseLayer != null) {
            zoom = this.baseLayer.getZoomForExtent(bounds, closest);
        }
        return zoom;
    },

    /**
     * APIMethod: getResolutionForZoom
     *
     * Parameter:
     * zoom - {Float}
     *
     * Returns:
     * {Float} A suitable resolution for the specified zoom.  If no baselayer
     *     is set, returns null.
     */
    getResolutionForZoom: function(zoom) {
        var resolution = null;
        if(this.baseLayer) {
            resolution = this.baseLayer.getResolutionForZoom(zoom);
        }
        return resolution;
    },

    /**
     * APIMethod: getZoomForResolution
     *
     * Parameter:
     * resolution - {Float}
     * closest - {Boolean} Find the zoom level that corresponds to the absolute
     *     closest resolution, which may result in a zoom whose corresponding
     *     resolution is actually smaller than we would have desired (if this
     *     is being called from a getZoomForExtent() call, then this means that
     *     the returned zoom index might not actually contain the entire
     *     extent specified... but it'll be close).
     *     Default is false.
     *
     * Returns:
     * {Integer} A suitable zoom level for the specified resolution.
     *           If no baselayer is set, returns null.
     */
    getZoomForResolution: function(resolution, closest) {
        var zoom = null;
        if (this.baseLayer != null) {
            zoom = this.baseLayer.getZoomForResolution(resolution, closest);
        }
        return zoom;
    },

  /********************************************************/
  /*                                                      */
  /*                  Zooming Functions                   */
  /*                                                      */
  /*    The following functions, all publicly exposed     */
  /*       in the API, are all merely wrappers to the     */
  /*               the setCenter() function               */
  /*                                                      */
  /********************************************************/

    /**
     * APIMethod: zoomTo
     * Zoom to a specific zoom level
     *
     * Parameters:
     * zoom - {Integer}
     */
    zoomTo: function(zoom) {
        if (this.isValidZoomLevel(zoom)) {
            this.setCenter(null, zoom);
        }
    },

    /**
     * APIMethod: zoomIn
     *
     * Parameters:
     * zoom - {int}
     */
    zoomIn: function() {
        this.zoomTo(this.getZoom() + 1);
    },

    /**
     * APIMethod: zoomOut
     *
     * Parameters:
     * zoom - {int}
     */
    zoomOut: function() {
        this.zoomTo(this.getZoom() - 1);
    },

    /**
     * APIMethod: zoomToExtent
     * Zoom to the passed in bounds, recenter
     *
     * Parameters:
     * bounds - {<OpenLayers.Bounds>}
     */
    zoomToExtent: function(bounds) {
        var center = bounds.getCenterLonLat();
        if (this.baseLayer.wrapDateLine) {
            var maxExtent = this.getMaxExtent();

            //fix straddling bounds (in the case of a bbox that straddles the
            // dateline, it's left and right boundaries will appear backwards.
            // we fix this by allowing a right value that is greater than the
            // max value at the dateline -- this allows us to pass a valid
            // bounds to calculate zoom)
            //
            bounds = bounds.clone();
            while (bounds.right < bounds.left) {
                bounds.right += maxExtent.getWidth();
            }
            //if the bounds was straddling (see above), then the center point
            // we got from it was wrong. So we take our new bounds and ask it
            // for the center. Because our new bounds is at least partially
            // outside the bounds of maxExtent, the new calculated center
            // might also be. We don't want to pass a bad center value to
            // setCenter, so we have it wrap itself across the date line.
            //
            center = bounds.getCenterLonLat().wrapDateLine(maxExtent);
        }
        this.setCenter(center, this.getZoomForExtent(bounds));
    },

    /**
     * APIMethod: zoomToMaxExtent
     * Zoom to the full extent and recenter.
     */
    zoomToMaxExtent: function() {
        this.zoomToExtent(this.getMaxExtent());
    },

    /**
     * APIMethod: zoomToScale
     * Zoom to a specified scale
     *
     * Parameters:
     * scale - {float}
     */
    zoomToScale: function(scale) {
        var res = OpenLayers.Util.getResolutionFromScale(scale,
                                                         this.baseLayer.units);
        var size = this.getSize();
        var w_deg = size.w * res;
        var h_deg = size.h * res;
        var center = this.getCenter();

        var extent = new OpenLayers.Bounds(center.lon - w_deg / 2,
                                           center.lat - h_deg / 2,
                                           center.lon + w_deg / 2,
                                           center.lat + h_deg / 2);
        this.zoomToExtent(extent);
    },

  /********************************************************/
  /*                                                      */
  /*             Translation Functions                    */
  /*                                                      */
  /*      The following functions translate between       */
  /*           LonLat, LayerPx, and ViewPortPx            */
  /*                                                      */
  /********************************************************/

  //
  // TRANSLATION: LonLat <-> ViewPortPx
  //

    /**
     * Method: getLonLatFromViewPortPx
     *
     * Parameters:
     * viewPortPx - {<OpenLayers.Pixel>}
     *
     * Returns:
     * {<OpenLayers.LonLat>} An OpenLayers.LonLat which is the passed-in view
     *                       port <OpenLayers.Pixel>, translated into lon/lat
     *                       by the current base layer.
     */
    getLonLatFromViewPortPx: function (viewPortPx) {
        var lonlat = null;
        if (this.baseLayer != null) {
            lonlat = this.baseLayer.getLonLatFromViewPortPx(viewPortPx);
        }
        return lonlat;
    },

    /**
     * APIMethod: getViewPortPxFromLonLat
     *
     * Parameters:
     * lonlat - {<OpenLayers.LonLat>}
     *
     * Returns:
     * {<OpenLayers.Pixel>} An OpenLayers.Pixel which is the passed-in
     *                      <OpenLayers.LonLat>, translated into view port
     *                      pixels by the current base layer.
     */
    getViewPortPxFromLonLat: function (lonlat) {
        var px = null;
        if (this.baseLayer != null) {
            px = this.baseLayer.getViewPortPxFromLonLat(lonlat);
        }
        return px;
    },


  //
  // CONVENIENCE TRANSLATION FUNCTIONS FOR API
  //

    /**
     * APIMethod: getLonLatFromPixel
     *
     * Parameters:
     * px - {<OpenLayers.Pixel>}
     *
     * Returns:
     * {<OpenLayers.LonLat>} An OpenLayers.LonLat corresponding to the given
     *                       OpenLayers.Pixel, translated into lon/lat by the
     *                       current base layer
     */
    getLonLatFromPixel: function (px) {
        return this.getLonLatFromViewPortPx(px);
    },

    /**
     * APIMethod: getPixelFromLonLat
     * Returns a pixel location given a map location.  The map location is
     *     translated to an integer pixel location (in viewport pixel
     *     coordinates) by the current base layer.
     *
     * Parameters:
     * lonlat - {<OpenLayers.LonLat>} A map location.
     *
     * Returns:
     * {<OpenLayers.Pixel>} An OpenLayers.Pixel corresponding to the
     *     <OpenLayers.LonLat> translated into view port pixels by the current
     *     base layer.
     */
    getPixelFromLonLat: function (lonlat) {
        var px = this.getViewPortPxFromLonLat(lonlat);
        px.x = Math.round(px.x);
        px.y = Math.round(px.y);
        return px;
    },



  //
  // TRANSLATION: ViewPortPx <-> LayerPx
  //

    /**
     * APIMethod: getViewPortPxFromLayerPx
     *
     * Parameters:
     * layerPx - {<OpenLayers.Pixel>}
     *
     * Returns:
     * {<OpenLayers.Pixel>} Layer Pixel translated into ViewPort Pixel
     *                      coordinates
     */
    getViewPortPxFromLayerPx:function(layerPx) {
        var viewPortPx = null;
        if (layerPx != null) {
            var dX = parseInt(this.layerContainerDiv.style.left);
            var dY = parseInt(this.layerContainerDiv.style.top);
            viewPortPx = layerPx.add(dX, dY);
        }
        return viewPortPx;
    },

    /**
     * APIMethod: getLayerPxFromViewPortPx
     *
     * Parameters:
     * viewPortPx - {<OpenLayers.Pixel>}
     *
     * Returns:
     * {<OpenLayers.Pixel>} ViewPort Pixel translated into Layer Pixel
     *                      coordinates
     */
    getLayerPxFromViewPortPx:function(viewPortPx) {
        var layerPx = null;
        if (viewPortPx != null) {
            var dX = -parseInt(this.layerContainerDiv.style.left);
            var dY = -parseInt(this.layerContainerDiv.style.top);
            layerPx = viewPortPx.add(dX, dY);
            if (isNaN(layerPx.x) || isNaN(layerPx.y)) {
                layerPx = null;
            }
        }
        return layerPx;
    },

  //
  // TRANSLATION: LonLat <-> LayerPx
  //

    /**
     * Method: getLonLatFromLayerPx
     *
     * Parameters:
     * px - {<OpenLayers.Pixel>}
     *
     * Returns:
     * {<OpenLayers.LonLat>}
     */
    getLonLatFromLayerPx: function (px) {
       //adjust for displacement of layerContainerDiv
       px = this.getViewPortPxFromLayerPx(px);
       return this.getLonLatFromViewPortPx(px);
    },

    /**
     * APIMethod: getLayerPxFromLonLat
     *
     * Parameters:
     * lonlat - {<OpenLayers.LonLat>} lonlat
     *
     * Returns:
     * {<OpenLayers.Pixel>} An OpenLayers.Pixel which is the passed-in
     *                      <OpenLayers.LonLat>, translated into layer pixels
     *                      by the current base layer
     */
    getLayerPxFromLonLat: function (lonlat) {
       //adjust for displacement of layerContainerDiv
       var px = this.getPixelFromLonLat(lonlat);
       return this.getLayerPxFromViewPortPx(px);
    },

    CLASS_NAME: "OpenLayers.Map"
});

/**
 * Constant: TILE_WIDTH
 * {Integer} 256 Default tile width (unless otherwise specified)
 */
OpenLayers.Map.TILE_WIDTH = 256;
/**
 * Constant: TILE_HEIGHT
 * {Integer} 256 Default tile height (unless otherwise specified)
 */
OpenLayers.Map.TILE_HEIGHT = 256;

OpenLayers.Marker=OpenLayers.Class({icon:null,lonlat:null,events:null,map:null,initialize:function(lonlat,icon){this.lonlat=lonlat;var newIcon=(icon)?icon:OpenLayers.Marker.defaultIcon();if(this.icon==null){this.icon=newIcon;}else{this.icon.url=newIcon.url;this.icon.size=newIcon.size;this.icon.offset=newIcon.offset;this.icon.calculateOffset=newIcon.calculateOffset;}
this.events=new OpenLayers.Events(this,this.icon.imageDiv,null);},destroy:function(){this.map=null;this.events.destroy();this.events=null;if(this.icon!=null){this.icon.destroy();this.icon=null;}},draw:function(px){return this.icon.draw(px);},moveTo:function(px){if((px!=null)&&(this.icon!=null)){this.icon.moveTo(px);}
this.lonlat=this.map.getLonLatFromLayerPx(px);},onScreen:function(){var onScreen=false;if(this.map){var screenBounds=this.map.getExtent();onScreen=screenBounds.containsLonLat(this.lonlat);}
return onScreen;},inflate:function(inflate){if(this.icon){var newSize=new OpenLayers.Size(this.icon.size.w*inflate,this.icon.size.h*inflate);this.icon.setSize(newSize);}},setOpacity:function(opacity){this.icon.setOpacity(opacity);},setUrl:function(url){this.icon.setUrl(url);},display:function(display){this.icon.display(display);},CLASS_NAME:"OpenLayers.Marker"});OpenLayers.Marker.defaultIcon=function(){var url=OpenLayers.Util.getImagesLocation()+"marker.png";var size=new OpenLayers.Size(21,25);var calculateOffset=function(size){return new OpenLayers.Pixel(-(size.w/2),-size.h);};return new OpenLayers.Icon(url,size,null,calculateOffset);};OpenLayers.Popup.AnchoredBubble=OpenLayers.Class(OpenLayers.Popup.Anchored,{rounded:false,initialize:function(id,lonlat,size,contentHTML,anchor,closeBox,closeBoxCallback){this.padding=new OpenLayers.Bounds(0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE,0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE);OpenLayers.Popup.Anchored.prototype.initialize.apply(this,arguments);},draw:function(px){OpenLayers.Popup.Anchored.prototype.draw.apply(this,arguments);this.setContentHTML();this.setBackgroundColor();this.setOpacity();return this.div;},updateRelativePosition:function(){this.setRicoCorners();},setSize:function(size){OpenLayers.Popup.Anchored.prototype.setSize.apply(this,arguments);this.setRicoCorners();},setBackgroundColor:function(color){if(color!=undefined){this.backgroundColor=color;}
if(this.div!=null){if(this.contentDiv!=null){this.div.style.background="transparent";OpenLayers.Rico.Corner.changeColor(this.groupDiv,this.backgroundColor);}}},setOpacity:function(opacity){OpenLayers.Popup.Anchored.prototype.setOpacity.call(this,opacity);if(this.div!=null){if(this.groupDiv!=null){OpenLayers.Rico.Corner.changeOpacity(this.groupDiv,this.opacity);}}},setBorder:function(border){this.border=0;},setRicoCorners:function(){var corners=this.getCornersToRound(this.relativePosition);var options={corners:corners,color:this.backgroundColor,bgColor:"transparent",blend:false};if(!this.rounded){OpenLayers.Rico.Corner.round(this.div,options);this.rounded=true;}else{OpenLayers.Rico.Corner.reRound(this.groupDiv,options);this.setBackgroundColor();this.setOpacity();}},getCornersToRound:function(){var corners=['tl','tr','bl','br'];var corner=OpenLayers.Bounds.oppositeQuadrant(this.relativePosition);OpenLayers.Util.removeItem(corners,corner);return corners.join(" ");},CLASS_NAME:"OpenLayers.Popup.AnchoredBubble"});OpenLayers.Popup.AnchoredBubble.CORNER_SIZE=5;OpenLayers.Popup.Framed=OpenLayers.Class(OpenLayers.Popup.Anchored,{imageSrc:null,imageSize:null,isAlphaImage:false,positionBlocks:null,blocks:null,fixedRelativePosition:false,initialize:function(id,lonlat,size,contentHTML,anchor,closeBox,closeBoxCallback){OpenLayers.Popup.Anchored.prototype.initialize.apply(this,arguments);if(this.fixedRelativePosition){this.updateRelativePosition();this.calculateRelativePosition=function(px){return this.relativePosition;};}
this.contentDiv.style.position="absolute";this.contentDiv.style.zIndex=1;if(closeBox){this.closeDiv.style.zIndex=1;}
this.groupDiv.style.position="absolute";this.groupDiv.style.top="0px";this.groupDiv.style.left="0px";this.groupDiv.style.height="100%";this.groupDiv.style.width="100%";},destroy:function(){this.imageSrc=null;this.imageSize=null;this.isAlphaImage=null;this.fixedRelativePosition=false;this.positionBlocks=null;for(var i=0;i<this.blocks.length;i++){var block=this.blocks[i];if(block.image){block.div.removeChild(block.image);}
block.image=null;if(block.div){this.groupDiv.removeChild(block.div);}
block.div=null;}
this.blocks=null;OpenLayers.Popup.Anchored.prototype.destroy.apply(this,arguments);},setBackgroundColor:function(color){},setBorder:function(){},setOpacity:function(opacity){},setSize:function(size){OpenLayers.Popup.Anchored.prototype.setSize.apply(this,arguments);this.updateBlocks();},updateRelativePosition:function(){this.padding=this.positionBlocks[this.relativePosition].padding;if(this.closeDiv){var contentDivPadding=this.getContentDivPadding();this.closeDiv.style.right=contentDivPadding.right+
this.padding.right+"px";this.closeDiv.style.top=contentDivPadding.top+
this.padding.top+"px";}
this.updateBlocks();},calculateNewPx:function(px){var newPx=OpenLayers.Popup.Anchored.prototype.calculateNewPx.apply(this,arguments);newPx=newPx.offset(this.positionBlocks[this.relativePosition].offset);return newPx;},createBlocks:function(){this.blocks=[];var firstPosition=null;for(var key in this.positionBlocks){firstPosition=key;break;}
var position=this.positionBlocks[firstPosition];for(var i=0;i<position.blocks.length;i++){var block={};this.blocks.push(block);var divId=this.id+'_FrameDecorationDiv_'+i;block.div=OpenLayers.Util.createDiv(divId,null,null,null,"absolute",null,"hidden",null);var imgId=this.id+'_FrameDecorationImg_'+i;var imageCreator=(this.isAlphaImage)?OpenLayers.Util.createAlphaImageDiv:OpenLayers.Util.createImage;block.image=imageCreator(imgId,null,this.imageSize,this.imageSrc,"absolute",null,null,null);block.div.appendChild(block.image);this.groupDiv.appendChild(block.div);}},updateBlocks:function(){if(!this.blocks){this.createBlocks();}
if(this.relativePosition){var position=this.positionBlocks[this.relativePosition];for(var i=0;i<position.blocks.length;i++){var positionBlock=position.blocks[i];var block=this.blocks[i];var l=positionBlock.anchor.left;var b=positionBlock.anchor.bottom;var r=positionBlock.anchor.right;var t=positionBlock.anchor.top;var w=(isNaN(positionBlock.size.w))?this.size.w-(r+l):positionBlock.size.w;var h=(isNaN(positionBlock.size.h))?this.size.h-(b+t):positionBlock.size.h;block.div.style.width=w+'px';block.div.style.height=h+'px';block.div.style.left=(l!=null)?l+'px':'';block.div.style.bottom=(b!=null)?b+'px':'';block.div.style.right=(r!=null)?r+'px':'';block.div.style.top=(t!=null)?t+'px':'';block.image.style.left=positionBlock.position.x+'px';block.image.style.top=positionBlock.position.y+'px';}
this.contentDiv.style.left=this.padding.left+"px";this.contentDiv.style.top=this.padding.top+"px";}},CLASS_NAME:"OpenLayers.Popup.Framed"});OpenLayers.Renderer.SVG=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"http://www.w3.org/2000/svg",MAX_PIXEL:15000,localResolution:null,initialize:function(containerID){if(!this.supported()){return;}
OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments);},destroy:function(){OpenLayers.Renderer.Elements.prototype.destroy.apply(this,arguments);},supported:function(){var svgFeature="http://www.w3.org/TR/SVG11/feature#";return(document.implementation&&(document.implementation.hasFeature("org.w3c.svg","1.0")||document.implementation.hasFeature(svgFeature+"SVG","1.1")||document.implementation.hasFeature(svgFeature+"BasicStructure","1.1")));},inValidRange:function(x,y){return(x>=-this.MAX_PIXEL&&x<=this.MAX_PIXEL&&y>=-this.MAX_PIXEL&&y<=this.MAX_PIXEL);},setExtent:function(extent){OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments);var resolution=this.getResolution();if(!this.localResolution||resolution!=this.localResolution){this.left=-extent.left/resolution;this.top=extent.top/resolution;}
var left=0;var top=0;if(this.localResolution&&resolution==this.localResolution){left=(this.left)-(-extent.left/resolution);top=(this.top)-(extent.top/resolution);}
this.localResolution=resolution;var extentString=left+" "+top+" "+
extent.getWidth()/resolution+" "+extent.getHeight()/resolution;this.rendererRoot.setAttributeNS(null,"viewBox",extentString);},setSize:function(size){OpenLayers.Renderer.prototype.setSize.apply(this,arguments);this.rendererRoot.setAttributeNS(null,"width",this.size.w);this.rendererRoot.setAttributeNS(null,"height",this.size.h);},getNodeType:function(geometry,style){var nodeType=null;switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":nodeType=style.externalGraphic?"image":"circle";break;case"OpenLayers.Geometry.Rectangle":nodeType="rect";break;case"OpenLayers.Geometry.LineString":nodeType="polyline";break;case"OpenLayers.Geometry.LinearRing":nodeType="polygon";break;case"OpenLayers.Geometry.Polygon":case"OpenLayers.Geometry.Curve":case"OpenLayers.Geometry.Surface":nodeType="path";break;default:break;}
return nodeType;},setStyle:function(node,style,options){style=style||node._style;options=options||node._options;var r=parseFloat(node.getAttributeNS(null,"r"));if(node._geometryClass=="OpenLayers.Geometry.Point"&&r){if(style.externalGraphic){var x=parseFloat(node.getAttributeNS(null,"cx"));var y=parseFloat(node.getAttributeNS(null,"cy"));if(style.graphicWidth&&style.graphicHeight){node.setAttributeNS(null,"preserveAspectRatio","none");}
var width=style.graphicWidth||style.graphicHeight;var height=style.graphicHeight||style.graphicWidth;width=width?width:style.pointRadius*2;height=height?height:style.pointRadius*2;var xOffset=(style.graphicXOffset!=undefined)?style.graphicXOffset:-(0.5*width);var yOffset=(style.graphicYOffset!=undefined)?style.graphicYOffset:-(0.5*height);var opacity=style.graphicOpacity||style.fillOpacity;node.setAttributeNS(null,"x",(x+xOffset).toFixed());node.setAttributeNS(null,"y",(y+yOffset).toFixed());node.setAttributeNS(null,"width",width);node.setAttributeNS(null,"height",height);node.setAttributeNS("http://www.w3.org/1999/xlink","href",style.externalGraphic);node.setAttributeNS(null,"style","opacity: "+opacity);}else{node.setAttributeNS(null,"r",style.pointRadius);}}
if(options.isFilled){node.setAttributeNS(null,"fill",style.fillColor);node.setAttributeNS(null,"fill-opacity",style.fillOpacity);}else{node.setAttributeNS(null,"fill","none");}
if(options.isStroked){node.setAttributeNS(null,"stroke",style.strokeColor);node.setAttributeNS(null,"stroke-opacity",style.strokeOpacity);node.setAttributeNS(null,"stroke-width",style.strokeWidth);node.setAttributeNS(null,"stroke-linecap",style.strokeLinecap);}else{node.setAttributeNS(null,"stroke","none");}
if(style.pointerEvents){node.setAttributeNS(null,"pointer-events",style.pointerEvents);}
if(style.cursor!=null){node.setAttributeNS(null,"cursor",style.cursor);}
return node;},createNode:function(type,id){var node=document.createElementNS(this.xmlns,type);if(id){node.setAttributeNS(null,"id",id);}
return node;},nodeTypeCompare:function(node,type){return(type==node.nodeName);},createRenderRoot:function(){return this.nodeFactory(this.container.id+"_svgRoot","svg");},createRoot:function(){return this.nodeFactory(this.container.id+"_root","g");},drawPoint:function(node,geometry){this.drawCircle(node,geometry,1);},drawCircle:function(node,geometry,radius){var resolution=this.getResolution();var x=(geometry.x/resolution+this.left);var y=(this.top-geometry.y/resolution);if(this.inValidRange(x,y)){node.setAttributeNS(null,"cx",x);node.setAttributeNS(null,"cy",y);node.setAttributeNS(null,"r",radius);}else{node.setAttributeNS(null,"cx","");node.setAttributeNS(null,"cy","");node.setAttributeNS(null,"r",0);}},drawLineString:function(node,geometry){node.setAttributeNS(null,"points",this.getComponentsString(geometry.components));},drawLinearRing:function(node,geometry){node.setAttributeNS(null,"points",this.getComponentsString(geometry.components));},drawPolygon:function(node,geometry){var d="";var draw=true;for(var j=0;j<geometry.components.length;j++){var linearRing=geometry.components[j];d+=" M";for(var i=0;i<linearRing.components.length;i++){var component=this.getShortString(linearRing.components[i]);if(component){d+=" "+component;}else{draw=false;}}}
d+=" z";if(draw){node.setAttributeNS(null,"d",d);node.setAttributeNS(null,"fill-rule","evenodd");}else{node.setAttributeNS(null,"d","");}},drawRectangle:function(node,geometry){var resolution=this.getResolution();var x=(geometry.x/resolution+this.left);var y=(this.top-geometry.y/resolution);if(this.inValidRange(x,y)){node.setAttributeNS(null,"x",x);node.setAttributeNS(null,"y",y);node.setAttributeNS(null,"width",geometry.width/resolution);node.setAttributeNS(null,"height",geometry.height/resolution);}else{node.setAttributeNS(null,"x","");node.setAttributeNS(null,"y","");node.setAttributeNS(null,"width",0);node.setAttributeNS(null,"height",0);}},drawSurface:function(node,geometry){var d=null;var draw=true;for(var i=0;i<geometry.components.length;i++){if((i%3)==0&&(i/3)==0){var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d="M "+component;}else if((i%3)==1){var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d+=" C "+component;}else{var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d+=" "+component;}}
d+=" Z";if(draw){node.setAttributeNS(null,"d",d);}else{node.setAttributeNS(null,"d","");}},getComponentsString:function(components){var strings=[];for(var i=0;i<components.length;i++){var component=this.getShortString(components[i]);if(component){strings.push(component);}}
return strings.join(",");},getShortString:function(point){var resolution=this.getResolution();var x=(point.x/resolution+this.left);var y=(this.top-point.y/resolution);if(this.inValidRange(x,y)){return x+","+y;}else{return false;}},CLASS_NAME:"OpenLayers.Renderer.SVG"});OpenLayers.Renderer.VML=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"urn:schemas-microsoft-com:vml",initialize:function(containerID){if(!this.supported()){return;}
if(!document.namespaces.olv){document.namespaces.add("olv",this.xmlns);var style=document.createStyleSheet();style.addRule('olv\\:*',"behavior: url(#default#VML); "+"position: absolute; display: inline-block;");}
OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments);},destroy:function(){OpenLayers.Renderer.Elements.prototype.destroy.apply(this,arguments);},supported:function(){return!!(document.namespaces);},setExtent:function(extent){OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments);var resolution=this.getResolution();var org=extent.left/resolution+" "+
extent.top/resolution;this.root.setAttribute("coordorigin",org);var size=extent.getWidth()/resolution+" "+
-extent.getHeight()/resolution;this.root.setAttribute("coordsize",size);},setSize:function(size){OpenLayers.Renderer.prototype.setSize.apply(this,arguments);this.rendererRoot.style.width=this.size.w;this.rendererRoot.style.height=this.size.h;this.root.style.width=this.size.w;this.root.style.height=this.size.h;},getNodeType:function(geometry,style){var nodeType=null;switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":nodeType=style.externalGraphic?"olv:rect":"olv:oval";break;case"OpenLayers.Geometry.Rectangle":nodeType="olv:rect";break;case"OpenLayers.Geometry.LineString":case"OpenLayers.Geometry.LinearRing":case"OpenLayers.Geometry.Polygon":case"OpenLayers.Geometry.Curve":case"OpenLayers.Geometry.Surface":nodeType="olv:shape";break;default:break;}
return nodeType;},setStyle:function(node,style,options,geometry){style=style||node._style;options=options||node._options;if(node._geometryClass=="OpenLayers.Geometry.Point"){if(style.externalGraphic){var width=style.graphicWidth||style.graphicHeight;var height=style.graphicHeight||style.graphicWidth;width=width?width:style.pointRadius*2;height=height?height:style.pointRadius*2;var resolution=this.getResolution();var xOffset=(style.graphicXOffset!=undefined)?style.graphicXOffset:-(0.5*width);var yOffset=(style.graphicYOffset!=undefined)?style.graphicYOffset:-(0.5*height);node.style.left=((geometry.x/resolution)+xOffset).toFixed();node.style.top=((geometry.y/resolution)-(yOffset+height)).toFixed();node.style.width=width;node.style.height=height;style.fillColor="none";options.isStroked=false;}else{this.drawCircle(node,geometry,style.pointRadius);}}
if(options.isFilled){node.setAttribute("fillcolor",style.fillColor);}else{node.setAttribute("filled","false");}
var fills=node.getElementsByTagName("fill");var fill=(fills.length==0)?null:fills[0];if(!options.isFilled){if(fill){node.removeChild(fill);}}else{if(!fill){fill=this.createNode('olv:fill',node.id+"_fill");}
fill.setAttribute("opacity",style.fillOpacity);if(node._geometryClass=="OpenLayers.Geometry.Point"&&style.externalGraphic){if(style.graphicOpacity){fill.setAttribute("opacity",style.graphicOpacity);}
fill.setAttribute("src",style.externalGraphic);fill.setAttribute("type","frame");node.style.flip="y";if(!(style.graphicWidth&&style.graphicHeight)){fill.aspect="atmost";}}
if(fill.parentNode!=node){node.appendChild(fill);}}
if(options.isStroked){node.setAttribute("strokecolor",style.strokeColor);node.setAttribute("strokeweight",style.strokeWidth+"px");}else{node.setAttribute("stroked","false");}
var strokes=node.getElementsByTagName("stroke");var stroke=(strokes.length==0)?null:strokes[0];if(!options.isStroked){if(stroke){node.removeChild(stroke);}}else{if(!stroke){stroke=this.createNode('olv:stroke',node.id+"_stroke");node.appendChild(stroke);}
stroke.setAttribute("opacity",style.strokeOpacity);stroke.setAttribute("endcap",!style.strokeLinecap||style.strokeLinecap=='butt'?'flat':style.strokeLinecap);}
if(style.cursor!=null){node.style.cursor=style.cursor;}
return node;},postDraw:function(node){var fillColor=node._style.fillColor;var strokeColor=node._style.strokeColor;if(fillColor=="none"&&node.getAttribute("fillcolor")!=fillColor){node.setAttribute("fillcolor",fillColor);}
if(strokeColor=="none"&&node.getAttribute("strokecolor")!=strokeColor){node.setAttribute("strokecolor",strokeColor);}},setNodeDimension:function(node,geometry){var bbox=geometry.getBounds();if(bbox){var resolution=this.getResolution();var scaledBox=new OpenLayers.Bounds((bbox.left/resolution).toFixed(),(bbox.bottom/resolution).toFixed(),(bbox.right/resolution).toFixed(),(bbox.top/resolution).toFixed());node.style.left=scaledBox.left;node.style.top=scaledBox.top;node.style.width=scaledBox.getWidth();node.style.height=scaledBox.getHeight();node.coordorigin=scaledBox.left+" "+scaledBox.top;node.coordsize=scaledBox.getWidth()+" "+scaledBox.getHeight();}},createNode:function(type,id){var node=document.createElement(type);if(id){node.setAttribute('id',id);}
node.setAttribute('unselectable','on',0);node.onselectstart=function(){return(false);};return node;},nodeTypeCompare:function(node,type){var subType=type;var splitIndex=subType.indexOf(":");if(splitIndex!=-1){subType=subType.substr(splitIndex+1);}
var nodeName=node.nodeName;splitIndex=nodeName.indexOf(":");if(splitIndex!=-1){nodeName=nodeName.substr(splitIndex+1);}
return(subType==nodeName);},createRenderRoot:function(){return this.nodeFactory(this.container.id+"_vmlRoot","div");},createRoot:function(){return this.nodeFactory(this.container.id+"_root","olv:group");},drawPoint:function(node,geometry){this.drawCircle(node,geometry,1);},drawCircle:function(node,geometry,radius){if(!isNaN(geometry.x)&&!isNaN(geometry.y)){var resolution=this.getResolution();node.style.left=(geometry.x/resolution).toFixed()-radius;node.style.top=(geometry.y/resolution).toFixed()-radius;var diameter=radius*2;node.style.width=diameter;node.style.height=diameter;}},drawLineString:function(node,geometry){this.drawLine(node,geometry,false);},drawLinearRing:function(node,geometry){this.drawLine(node,geometry,true);},drawLine:function(node,geometry,closeLine){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var numComponents=geometry.components.length;var parts=new Array(numComponents);var comp,x,y;for(var i=0;i<numComponents;i++){comp=geometry.components[i];x=(comp.x/resolution);y=(comp.y/resolution);parts[i]=" "+x.toFixed()+","+y.toFixed()+" l ";}
var end=(closeLine)?" x e":" e";node.path="m"+parts.join("")+end;},drawPolygon:function(node,geometry){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var path=[];var linearRing,i,comp,x,y;for(var j=0;j<geometry.components.length;j++){linearRing=geometry.components[j];path.push("m");for(i=0;i<linearRing.components.length;i++){comp=linearRing.components[i];x=comp.x/resolution;y=comp.y/resolution;path.push(" "+x.toFixed()+","+y.toFixed());if(i==0){path.push(" l");}}
path.push(" x ");}
path.push("e");node.path=path.join("");},drawRectangle:function(node,geometry){var resolution=this.getResolution();node.style.left=geometry.x/resolution;node.style.top=geometry.y/resolution;node.style.width=geometry.width/resolution;node.style.height=geometry.height/resolution;},drawSurface:function(node,geometry){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var path=[];var comp,x,y;for(var i=0;i<geometry.components.length;i++){comp=geometry.components[i];x=comp.x/resolution;y=comp.y/resolution;if((i%3)==0&&(i/3)==0){path.push("m");}else if((i%3)==1){path.push(" c");}
path.push(" "+x+","+y);}
path.push(" x e");node.path=path.join("");},CLASS_NAME:"OpenLayers.Renderer.VML"});OpenLayers.Tile.Image=OpenLayers.Class(OpenLayers.Tile,{url:null,imgDiv:null,frame:null,layerAlphaHack:null,initialize:function(layer,position,bounds,url,size){OpenLayers.Tile.prototype.initialize.apply(this,arguments);this.url=url;this.frame=document.createElement('div');this.frame.style.overflow='hidden';this.frame.style.position='absolute';this.layerAlphaHack=this.layer.alpha&&OpenLayers.Util.alphaHack();},destroy:function(){if(this.imgDiv!=null){if(this.layerAlphaHack){OpenLayers.Event.stopObservingElement(this.imgDiv.childNodes[0].id);}else{OpenLayers.Event.stopObservingElement(this.imgDiv.id);}
if(this.imgDiv.parentNode==this.frame){this.frame.removeChild(this.imgDiv);this.imgDiv.map=null;}}
this.imgDiv=null;if((this.frame!=null)&&(this.frame.parentNode==this.layer.div)){this.layer.div.removeChild(this.frame);}
this.frame=null;OpenLayers.Tile.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Tile.Image(this.layer,this.position,this.bounds,this.url,this.size);}
obj=OpenLayers.Tile.prototype.clone.apply(this,[obj]);obj.imgDiv=null;return obj;},draw:function(){if(this.layer!=this.layer.map.baseLayer&&this.layer.reproject){this.bounds=this.getBoundsFromBaseLayer(this.position);}
if(!OpenLayers.Tile.prototype.draw.apply(this,arguments)){return false;}
if(this.isLoading){this.events.triggerEvent("reload");}else{this.isLoading=true;this.events.triggerEvent("loadstart");}
return this.renderTile();},renderTile:function(){if(this.imgDiv==null){this.initImgDiv();}
this.imgDiv.viewRequestID=this.layer.map.viewRequestID;this.url=this.layer.getURL(this.bounds);OpenLayers.Util.modifyDOMElement(this.frame,null,this.position,this.size);var imageSize=this.layer.getImageSize();if(this.layerAlphaHack){OpenLayers.Util.modifyAlphaImageDiv(this.imgDiv,null,null,imageSize,this.url);}else{OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,imageSize);this.imgDiv.src=this.url;}
return true;},clear:function(){if(this.imgDiv){this.hide();if(OpenLayers.Tile.Image.useBlankTile){this.imgDiv.src=OpenLayers.Util.getImagesLocation()+"blank.gif";}}},initImgDiv:function(){var offset=this.layer.imageOffset;var size=this.layer.getImageSize();if(this.layerAlphaHack){this.imgDiv=OpenLayers.Util.createAlphaImageDiv(null,offset,size,null,"relative",null,null,null,true);}else{this.imgDiv=OpenLayers.Util.createImage(null,offset,size,null,"relative",null,null,true);}
this.imgDiv.className='olTileImage';this.frame.style.zIndex=this.isBackBuffer?0:1;this.frame.appendChild(this.imgDiv);this.layer.div.appendChild(this.frame);if(this.layer.opacity!=null){OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,null,null,null,null,this.layer.opacity);}
this.imgDiv.map=this.layer.map;var onload=function(){if(this.isLoading){this.isLoading=false;this.events.triggerEvent("loadend");}};if(this.layerAlphaHack){OpenLayers.Event.observe(this.imgDiv.childNodes[0],'load',OpenLayers.Function.bind(onload,this));}else{OpenLayers.Event.observe(this.imgDiv,'load',OpenLayers.Function.bind(onload,this));}
var onerror=function(){if(this.imgDiv._attempts>OpenLayers.IMAGE_RELOAD_ATTEMPTS){onload.call(this);}};OpenLayers.Event.observe(this.imgDiv,"error",OpenLayers.Function.bind(onerror,this));},checkImgURL:function(){if(this.layer){var loaded=this.layerAlphaHack?this.imgDiv.firstChild.src:this.imgDiv.src;if(!OpenLayers.Util.isEquivalentUrl(loaded,this.url)){this.hide();}}},startTransition:function(){if(!this.backBufferTile||!this.backBufferTile.imgDiv){return;}
var ratio=1;if(this.backBufferTile.resolution){ratio=this.backBufferTile.resolution/this.layer.getResolution();}
if(ratio!=this.lastRatio){if(this.layer.transitionEffect=='resize'){var upperLeft=new OpenLayers.LonLat(this.backBufferTile.bounds.left,this.backBufferTile.bounds.top);var size=new OpenLayers.Size(this.backBufferTile.size.w*ratio,this.backBufferTile.size.h*ratio);var px=this.layer.map.getLayerPxFromLonLat(upperLeft);OpenLayers.Util.modifyDOMElement(this.backBufferTile.frame,null,px,size);var imageSize=this.backBufferTile.imageSize;imageSize=new OpenLayers.Size(imageSize.w*ratio,imageSize.h*ratio);var imageOffset=this.backBufferTile.imageOffset;if(imageOffset){imageOffset=new OpenLayers.Pixel(imageOffset.x*ratio,imageOffset.y*ratio);}
OpenLayers.Util.modifyDOMElement(this.backBufferTile.imgDiv,null,imageOffset,imageSize);this.backBufferTile.show();}}else{if(this.layer.singleTile){this.backBufferTile.show();}else{this.backBufferTile.hide();}}
this.lastRatio=ratio;},show:function(){this.frame.style.display='';if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){if(navigator.userAgent.toLowerCase().indexOf("gecko")!=-1){this.frame.scrollLeft=this.frame.scrollLeft;}}},hide:function(){this.frame.style.display='none';},CLASS_NAME:"OpenLayers.Tile.Image"});OpenLayers.Tile.Image.useBlankTile=(OpenLayers.Util.getBrowserName()=="safari"||OpenLayers.Util.getBrowserName()=="opera");OpenLayers.Tile.WFS=OpenLayers.Class(OpenLayers.Tile,{features:null,url:null,request:null,initialize:function(layer,position,bounds,url,size){OpenLayers.Tile.prototype.initialize.apply(this,arguments);this.url=url;this.features=[];},destroy:function(){OpenLayers.Tile.prototype.destroy.apply(this,arguments);this.destroyAllFeatures();this.features=null;this.url=null;if(this.request){this.request.abort();this.request=null;}},clear:function(){this.destroyAllFeatures();},draw:function(){if(OpenLayers.Tile.prototype.draw.apply(this,arguments)){if(this.isLoading){this.events.triggerEvent("reload");}else{this.isLoading=true;this.events.triggerEvent("loadstart");}
this.loadFeaturesForRegion(this.requestSuccess);}},loadFeaturesForRegion:function(success,failure){if(this.request){this.request.abort();}
this.request=OpenLayers.loadURL(this.url,null,this,success);},requestSuccess:function(request){if(this.features){var doc=request.responseXML;if(!doc||!doc.documentElement){doc=OpenLayers.Format.XML.prototype.read(request.responseText);}
if(this.layer.vectorMode){this.layer.addFeatures(this.layer.formatObject.read(doc));}else{var resultFeatures=OpenLayers.Ajax.getElementsByTagNameNS(doc,"http://www.opengis.net/gml","gml","featureMember");this.addResults(resultFeatures);}}
if(this.events){this.events.triggerEvent("loadend");}
this.request=null;},addResults:function(results){for(var i=0;i<results.length;i++){var feature=new this.layer.featureClass(this.layer,results[i]);this.features.push(feature);}},destroyAllFeatures:function(){while(this.features.length>0){var feature=this.features.shift();feature.destroy();}},CLASS_NAME:"OpenLayers.Tile.WFS"});OpenLayers.Control.OverviewMap=OpenLayers.Class(OpenLayers.Control,{element:null,ovmap:null,size:new OpenLayers.Size(180,90),layers:null,minRectSize:15,minRectDisplayClass:"RectReplacement",minRatio:8,maxRatio:32,mapOptions:null,handlers:null,initialize:function(options){this.layers=[];this.handlers={};OpenLayers.Control.prototype.initialize.apply(this,[options]);},destroy:function(){if(!this.mapDiv){return;}
this.handlers.click.destroy();this.mapDiv.removeChild(this.extentRectangle);this.extentRectangle=null;this.rectEvents.destroy();this.rectEvents=null;this.ovmap.destroy();this.ovmap=null;this.element.removeChild(this.mapDiv);this.mapDiv=null;this.div.removeChild(this.element);this.element=null;if(this.maximizeDiv){OpenLayers.Event.stopObservingElement(this.maximizeDiv);this.div.removeChild(this.maximizeDiv);this.maximizeDiv=null;}
if(this.minimizeDiv){OpenLayers.Event.stopObservingElement(this.minimizeDiv);this.div.removeChild(this.minimizeDiv);this.minimizeDiv=null;}
this.map.events.un({"moveend":this.update,"changebaselayer":this.baseLayerDraw,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!(this.layers.length>0)){if(this.map.baseLayer){var layer=this.map.baseLayer.clone();this.layers=[layer];}else{this.map.events.register("changebaselayer",this,this.baseLayerDraw);return this.div;}}
this.element=document.createElement('div');this.element.className=this.displayClass+'Element';this.element.style.display='none';this.mapDiv=document.createElement('div');this.mapDiv.style.width=this.size.w+'px';this.mapDiv.style.height=this.size.h+'px';this.mapDiv.style.position='relative';this.mapDiv.style.overflow='hidden';this.mapDiv.id=OpenLayers.Util.createUniqueID('overviewMap');this.extentRectangle=document.createElement('div');this.extentRectangle.style.position='absolute';this.extentRectangle.style.zIndex=1000;this.extentRectangle.className=this.displayClass+'ExtentRectangle';this.mapDiv.appendChild(this.extentRectangle);this.element.appendChild(this.mapDiv);this.div.appendChild(this.element);if(!this.outsideViewport){this.div.className+=" "+this.displayClass+'Container';var imgLocation=OpenLayers.Util.getImagesLocation();var img=imgLocation+'layer-switcher-maximize.png';this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv(this.displayClass+'MaximizeButton',null,new OpenLayers.Size(18,18),img,'absolute');this.maximizeDiv.style.display='none';this.maximizeDiv.className=this.displayClass+'MaximizeButton';OpenLayers.Event.observe(this.maximizeDiv,'click',OpenLayers.Function.bindAsEventListener(this.maximizeControl,this));this.div.appendChild(this.maximizeDiv);var img=imgLocation+'layer-switcher-minimize.png';this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv('OpenLayers_Control_minimizeDiv',null,new OpenLayers.Size(18,18),img,'absolute');this.minimizeDiv.style.display='none';this.minimizeDiv.className=this.displayClass+'MinimizeButton';OpenLayers.Event.observe(this.minimizeDiv,'click',OpenLayers.Function.bindAsEventListener(this.minimizeControl,this));this.div.appendChild(this.minimizeDiv);var eventsToStop=['dblclick','mousedown'];for(var i=0;i<eventsToStop.length;i++){OpenLayers.Event.observe(this.maximizeDiv,eventsToStop[i],OpenLayers.Event.stop);OpenLayers.Event.observe(this.minimizeDiv,eventsToStop[i],OpenLayers.Event.stop);}
this.minimizeControl();}else{this.element.style.display='';}
if(this.map.getExtent()){this.update();}
this.map.events.register('moveend',this,this.update);return this.div;},baseLayerDraw:function(){this.draw();this.map.events.unregister("changebaselayer",this,this.baseLayerDraw);},rectDrag:function(px){var deltaX=this.handlers.drag.last.x-px.x;var deltaY=this.handlers.drag.last.y-px.y;if(deltaX!=0||deltaY!=0){var rectTop=this.rectPxBounds.top;var rectLeft=this.rectPxBounds.left;var rectHeight=Math.abs(this.rectPxBounds.getHeight());var rectWidth=this.rectPxBounds.getWidth();var newTop=Math.max(0,(rectTop-deltaY));newTop=Math.min(newTop,this.ovmap.size.h-this.hComp-rectHeight);var newLeft=Math.max(0,(rectLeft-deltaX));newLeft=Math.min(newLeft,this.ovmap.size.w-this.wComp-rectWidth);this.setRectPxBounds(new OpenLayers.Bounds(newLeft,newTop+rectHeight,newLeft+rectWidth,newTop));}},mapDivClick:function(evt){var pxCenter=this.rectPxBounds.getCenterPixel();var deltaX=evt.xy.x-pxCenter.x;var deltaY=evt.xy.y-pxCenter.y;var top=this.rectPxBounds.top;var left=this.rectPxBounds.left;var height=Math.abs(this.rectPxBounds.getHeight());var width=this.rectPxBounds.getWidth();var newTop=Math.max(0,(top+deltaY));newTop=Math.min(newTop,this.ovmap.size.h-height);var newLeft=Math.max(0,(left+deltaX));newLeft=Math.min(newLeft,this.ovmap.size.w-width);this.setRectPxBounds(new OpenLayers.Bounds(newLeft,newTop+height,newLeft+width,newTop));this.updateMapToRect();},maximizeControl:function(e){this.element.style.display='';this.showToggle(false);if(e!=null){OpenLayers.Event.stop(e);}},minimizeControl:function(e){this.element.style.display='none';this.showToggle(true);if(e!=null){OpenLayers.Event.stop(e);}},showToggle:function(minimize){this.maximizeDiv.style.display=minimize?'':'none';this.minimizeDiv.style.display=minimize?'none':'';},update:function(){if(this.ovmap==null){this.createMap();}
if(!this.isSuitableOverview()){this.updateOverview();}
this.updateRectToMap();},isSuitableOverview:function(){var mapExtent=this.map.getExtent();var maxExtent=this.map.maxExtent;var testExtent=new OpenLayers.Bounds(Math.max(mapExtent.left,maxExtent.left),Math.max(mapExtent.bottom,maxExtent.bottom),Math.min(mapExtent.right,maxExtent.right),Math.min(mapExtent.top,maxExtent.top));var resRatio=this.ovmap.getResolution()/this.map.getResolution();return((resRatio>this.minRatio)&&(resRatio<=this.maxRatio)&&(this.ovmap.getExtent().containsBounds(testExtent)));},updateOverview:function(){var mapRes=this.map.getResolution();var targetRes=this.ovmap.getResolution();var resRatio=targetRes/mapRes;if(resRatio>this.maxRatio){targetRes=this.minRatio*mapRes;}else if(resRatio<=this.minRatio){targetRes=this.maxRatio*mapRes;}
this.ovmap.setCenter(this.map.center,this.ovmap.getZoomForResolution(targetRes));this.updateRectToMap();},createMap:function(){var options=OpenLayers.Util.extend({controls:[],maxResolution:'auto',fallThrough:false},this.mapOptions);this.ovmap=new OpenLayers.Map(this.mapDiv,options);OpenLayers.Event.stopObserving(window,'unload',this.ovmap.unloadDestroy);this.ovmap.addLayers(this.layers);this.ovmap.zoomToMaxExtent();this.wComp=parseInt(OpenLayers.Element.getStyle(this.extentRectangle,'border-left-width'))+
parseInt(OpenLayers.Element.getStyle(this.extentRectangle,'border-right-width'));this.wComp=(this.wComp)?this.wComp:2;this.hComp=parseInt(OpenLayers.Element.getStyle(this.extentRectangle,'border-top-width'))+
parseInt(OpenLayers.Element.getStyle(this.extentRectangle,'border-bottom-width'));this.hComp=(this.hComp)?this.hComp:2;this.handlers.drag=new OpenLayers.Handler.Drag(this,{move:this.rectDrag,done:this.updateMapToRect},{map:this.ovmap});this.handlers.click=new OpenLayers.Handler.Click(this,{"click":this.mapDivClick},{"single":true,"double":false,"stopSingle":true,"stopDouble":true,"pixelTolerance":1,map:this.ovmap});this.handlers.click.activate();this.rectEvents=new OpenLayers.Events(this,this.extentRectangle,null,true);this.rectEvents.register("mouseover",this,function(e){if(!this.handlers.drag.active&&!this.map.dragging){this.handlers.drag.activate();}});this.rectEvents.register("mouseout",this,function(e){if(!this.handlers.drag.dragging){this.handlers.drag.deactivate();}});},updateRectToMap:function(){if(this.map.units!='degrees'){if(this.ovmap.getProjection()&&(this.map.getProjection()!=this.ovmap.getProjection())){alert(OpenLayers.i18n("sameProjection"));}}
var pxBounds=this.getRectBoundsFromMapBounds(this.map.getExtent());if(pxBounds){this.setRectPxBounds(pxBounds);}},updateMapToRect:function(){var lonLatBounds=this.getMapBoundsFromRectBounds(this.rectPxBounds);this.map.panTo(lonLatBounds.getCenterLonLat());},setRectPxBounds:function(pxBounds){var top=Math.max(pxBounds.top,0);var left=Math.max(pxBounds.left,0);var bottom=Math.min(pxBounds.top+Math.abs(pxBounds.getHeight()),this.ovmap.size.h-this.hComp);var right=Math.min(pxBounds.left+pxBounds.getWidth(),this.ovmap.size.w-this.wComp);var width=Math.max(right-left,0);var height=Math.max(bottom-top,0);if(width<this.minRectSize||height<this.minRectSize){this.extentRectangle.className=this.displayClass+
this.minRectDisplayClass;var rLeft=left+(width/2)-(this.minRectSize/2);var rTop=top+(height/2)-(this.minRectSize/2);this.extentRectangle.style.top=Math.round(rTop)+'px';this.extentRectangle.style.left=Math.round(rLeft)+'px';this.extentRectangle.style.height=this.minRectSize+'px';this.extentRectangle.style.width=this.minRectSize+'px';}else{this.extentRectangle.className=this.displayClass+'ExtentRectangle';this.extentRectangle.style.top=Math.round(top)+'px';this.extentRectangle.style.left=Math.round(left)+'px';this.extentRectangle.style.height=Math.round(height)+'px';this.extentRectangle.style.width=Math.round(width)+'px';}
this.rectPxBounds=new OpenLayers.Bounds(Math.round(left),Math.round(bottom),Math.round(right),Math.round(top));},getRectBoundsFromMapBounds:function(lonLatBounds){var leftBottomLonLat=new OpenLayers.LonLat(lonLatBounds.left,lonLatBounds.bottom);var rightTopLonLat=new OpenLayers.LonLat(lonLatBounds.right,lonLatBounds.top);var leftBottomPx=this.getOverviewPxFromLonLat(leftBottomLonLat);var rightTopPx=this.getOverviewPxFromLonLat(rightTopLonLat);var bounds=null;if(leftBottomPx&&rightTopPx){bounds=new OpenLayers.Bounds(leftBottomPx.x,leftBottomPx.y,rightTopPx.x,rightTopPx.y);}
return bounds;},getMapBoundsFromRectBounds:function(pxBounds){var leftBottomPx=new OpenLayers.Pixel(pxBounds.left,pxBounds.bottom);var rightTopPx=new OpenLayers.Pixel(pxBounds.right,pxBounds.top);var leftBottomLonLat=this.getLonLatFromOverviewPx(leftBottomPx);var rightTopLonLat=this.getLonLatFromOverviewPx(rightTopPx);return new OpenLayers.Bounds(leftBottomLonLat.lon,leftBottomLonLat.lat,rightTopLonLat.lon,rightTopLonLat.lat);},getLonLatFromOverviewPx:function(overviewMapPx){var size=this.ovmap.size;var res=this.ovmap.getResolution();var center=this.ovmap.getExtent().getCenterLonLat();var delta_x=overviewMapPx.x-(size.w/2);var delta_y=overviewMapPx.y-(size.h/2);return new OpenLayers.LonLat(center.lon+delta_x*res,center.lat-delta_y*res);},getOverviewPxFromLonLat:function(lonlat){var res=this.ovmap.getResolution();var extent=this.ovmap.getExtent();var px=null;if(extent){px=new OpenLayers.Pixel(Math.round(1/res*(lonlat.lon-extent.left)),Math.round(1/res*(extent.top-lonlat.lat)));}
return px;},CLASS_NAME:'OpenLayers.Control.OverviewMap'});OpenLayers.Feature=OpenLayers.Class({layer:null,id:null,lonlat:null,data:null,marker:null,popupClass:OpenLayers.Popup.AnchoredBubble,popup:null,initialize:function(layer,lonlat,data){this.layer=layer;this.lonlat=lonlat;this.data=(data!=null)?data:{};this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){if((this.layer!=null)&&(this.layer.map!=null)){if(this.popup!=null){this.layer.map.removePopup(this.popup);}}
this.layer=null;this.id=null;this.lonlat=null;this.data=null;if(this.marker!=null){this.destroyMarker(this.marker);this.marker=null;}
if(this.popup!=null){this.destroyPopup(this.popup);this.popup=null;}},onScreen:function(){var onScreen=false;if((this.layer!=null)&&(this.layer.map!=null)){var screenBounds=this.layer.map.getExtent();onScreen=screenBounds.containsLonLat(this.lonlat);}
return onScreen;},createMarker:function(){if(this.lonlat!=null){this.marker=new OpenLayers.Marker(this.lonlat,this.data.icon);}
return this.marker;},destroyMarker:function(){this.marker.destroy();},createPopup:function(closeBox){if(this.lonlat!=null){var id=this.id+"_popup";var anchor=(this.marker)?this.marker.icon:null;if(!this.popup){this.popup=new this.popupClass(id,this.lonlat,this.data.popupSize,this.data.popupContentHTML,anchor,closeBox);}
if(this.data.overflow!=null){this.popup.contentDiv.style.overflow=this.data.overflow;}
this.popup.feature=this;}
return this.popup;},destroyPopup:function(){if(this.popup){this.popup.feature=null;this.popup.destroy();this.popup=null;}},CLASS_NAME:"OpenLayers.Feature"});OpenLayers.Format.WMC=OpenLayers.Class({defaultVersion:"1.1.0",version:null,layerOptions:null,parser:null,initialize:function(options){OpenLayers.Util.extend(this,options);this.options=options;},read:function(data,options){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
var root=data.documentElement;var version=this.version;if(!version){version=root.getAttribute("version");if(!version){version=this.defaultVersion;}}
if(!this.parser||this.parser.VERSION!=version){var format=OpenLayers.Format.WMC["v"+version.replace(/\./g,"_")];if(!format){throw"Can't find a WMC parser for version "+
version;}
this.parser=new format(this.options);}
var context=this.parser.read(data,options);var map;if(options.map){this.context=context;if(options.map instanceof OpenLayers.Map){map=this.mergeContextToMap(context,options.map);}else{map=this.contextToMap(context,options.map);}}else{map=context;}
return map;},contextToMap:function(context,id){var map=new OpenLayers.Map(id,{maxExtent:context.maxExtent,projection:context.projection});map.addLayers(context.layers);map.setCenter(context.bounds.getCenterLonLat(),map.getZoomForExtent(context.bounds,true));return map;},mergeContextToMap:function(context,map){map.addLayers(context.layers);return map;},write:function(obj,options){if(obj.CLASS_NAME=="OpenLayers.Map"){obj=this.mapToContext(obj);}
var version=(options&&options.version)||this.version||this.defaultVersion;if(!this.parser||this.parser.VERSION!=version){var format=OpenLayers.Format.WMC["v"+version.replace(/\./g,"_")];if(!format){throw"Can't find a WMS capabilities parser for version "+
version;}
this.parser=new format(this.options);}
var wmc=this.parser.write(obj,options);return wmc;},mapToContext:function(map){var context={bounds:map.getExtent(),maxExtent:map.maxExtent,projection:map.projection,layers:map.layers,size:map.getSize()};return context;},CLASS_NAME:"OpenLayers.Format.WMC"});OpenLayers.Format.WMC.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ol:"http://openlayers.org/context",wmc:"http://www.opengis.net/context",sld:"http://www.opengis.net/sld",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},schemaLocation:"",getNamespacePrefix:function(uri){var prefix=null;if(uri==null){prefix=this.namespaces[this.defaultPrefix];}else{for(prefix in this.namespaces){if(this.namespaces[prefix]==uri){break;}}}
return prefix;},defaultPrefix:"wmc",rootPrefix:null,defaultStyleName:"",defaultStyleTitle:"Default",initialize:function(options){OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},read:function(data){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
var root=data.documentElement;this.rootPrefix=root.prefix;var context={version:root.getAttribute("version")};this.runChildNodes(context,root);return context;},runChildNodes:function(obj,node){var children=node.childNodes;var childNode,processor,prefix,local;for(var i=0;i<children.length;++i){childNode=children[i];if(childNode.nodeType==1){prefix=this.getNamespacePrefix(childNode.namespaceURI);local=childNode.nodeName.split(":").pop();processor=this["read_"+prefix+"_"+local];if(processor){processor.apply(this,[obj,childNode]);}}}},read_wmc_General:function(context,node){this.runChildNodes(context,node);},read_wmc_BoundingBox:function(context,node){context.projection=node.getAttribute("SRS");context.bounds=new OpenLayers.Bounds(parseFloat(node.getAttribute("minx")),parseFloat(node.getAttribute("miny")),parseFloat(node.getAttribute("maxx")),parseFloat(node.getAttribute("maxy")));},read_wmc_LayerList:function(context,node){context.layers=[];this.runChildNodes(context,node);},read_wmc_Layer:function(context,node){var layerInfo={params:{},options:{visibility:(node.getAttribute("hidden")!="1")},queryable:(node.getAttribute("queryable")=="1"),formats:[],styles:[]};this.runChildNodes(layerInfo,node);layerInfo.params.layers=layerInfo.name;layerInfo.options.maxExtent=layerInfo.maxExtent;var layer=this.getLayerFromInfo(layerInfo);context.layers.push(layer);},getLayerFromInfo:function(layerInfo){var options=layerInfo.options;if(this.layerOptions){OpenLayers.Util.applyDefaults(options,this.layerOptions);}
var layer=new OpenLayers.Layer.WMS(layerInfo.title,layerInfo.href,layerInfo.params,options);return layer;},read_wmc_Extension:function(obj,node){this.runChildNodes(obj,node);},read_ol_units:function(layerInfo,node){layerInfo.options.units=this.getChildValue(node);},read_ol_maxExtent:function(obj,node){var bounds=new OpenLayers.Bounds(node.getAttribute("minx"),node.getAttribute("miny"),node.getAttribute("maxx"),node.getAttribute("maxy"));obj.maxExtent=bounds;},read_ol_transparent:function(layerInfo,node){layerInfo.params.transparent=this.getChildValue(node);},read_ol_numZoomLevels:function(layerInfo,node){layerInfo.options.numZoomLevels=parseInt(this.getChildValue(node));},read_ol_opacity:function(layerInfo,node){layerInfo.options.opacity=parseFloat(this.getChildValue(node));},read_ol_singleTile:function(layerInfo,node){layerInfo.options.singleTile=(this.getChildValue(node)=="true");},read_ol_isBaseLayer:function(layerInfo,node){layerInfo.options.isBaseLayer=(this.getChildValue(node)=="true");},read_ol_displayInLayerSwitcher:function(layerInfo,node){layerInfo.options.displayInLayerSwitcher=(this.getChildValue(node)=="true");},read_wmc_Server:function(layerInfo,node){layerInfo.params.version=node.getAttribute("version");this.runChildNodes(layerInfo,node);},read_wmc_FormatList:function(layerInfo,node){this.runChildNodes(layerInfo,node);},read_wmc_Format:function(layerInfo,node){var format=this.getChildValue(node);layerInfo.formats.push(format);if(node.getAttribute("current")=="1"){layerInfo.params.format=format;}},read_wmc_StyleList:function(layerInfo,node){this.runChildNodes(layerInfo,node);},read_wmc_Style:function(layerInfo,node){var style={};this.runChildNodes(style,node);if(node.getAttribute("current")=="1"){if(style.href){layerInfo.params.sld=style.href;}else if(style.body){layerInfo.params.sld_body=style.body;}else{layerInfo.params.styles=style.name;}}
layerInfo.styles.push(style);},read_wmc_SLD:function(style,node){this.runChildNodes(style,node);},read_sld_StyledLayerDescriptor:function(sld,node){var xml=OpenLayers.Format.XML.prototype.write.apply(this,[node]);sld.body=xml;},read_wmc_OnlineResource:function(obj,node){obj.href=this.getAttributeNS(node,this.namespaces.xlink,"href");},read_wmc_Name:function(obj,node){var name=this.getChildValue(node);if(name){obj.name=name;}},read_wmc_Title:function(obj,node){var title=this.getChildValue(node);if(title){obj.title=title;}},read_wmc_Abstract:function(obj,node){var abst=this.getChildValue(node);if(abst){obj["abstract"]=abst;}},read_wmc_LatLonBoundingBox:function(layer,node){layer.llbbox=[parseFloat(node.getAttribute("minx")),parseFloat(node.getAttribute("miny")),parseFloat(node.getAttribute("maxx")),parseFloat(node.getAttribute("maxy"))];},read_wmc_LegendURL:function(style,node){var legend={width:node.getAttribute('width'),height:node.getAttribute('height')};var links=node.getElementsByTagName("OnlineResource");if(links.length>0){this.read_wmc_OnlineResource(legend,links[0]);}
style.legend=legend;},write:function(context,options){var root=this.createElementDefaultNS("ViewContext");this.setAttributes(root,{version:this.VERSION,id:(options&&typeof options.id=="string")?options.id:OpenLayers.Util.createUniqueID("OpenLayers_Context_")});this.setAttributeNS(root,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation);root.appendChild(this.write_wmc_General(context));root.appendChild(this.write_wmc_LayerList(context));return OpenLayers.Format.XML.prototype.write.apply(this,[root]);},createElementDefaultNS:function(name,childValue,attributes){var node=this.createElementNS(this.namespaces[this.defaultPrefix],name);if(childValue){node.appendChild(this.createTextNode(childValue));}
if(attributes){this.setAttributes(node,attributes);}
return node;},setAttributes:function(node,obj){var value;for(var name in obj){value=obj[name].toString();if(value.match(/[A-Z]/)){this.setAttributeNS(node,null,name,value);}else{node.setAttribute(name,value);}}},write_wmc_General:function(context){var node=this.createElementDefaultNS("General");if(context.size){node.appendChild(this.createElementDefaultNS("Window",null,{width:context.size.w,height:context.size.h}));}
var bounds=context.bounds;node.appendChild(this.createElementDefaultNS("BoundingBox",null,{minx:bounds.left.toPrecision(10),miny:bounds.bottom.toPrecision(10),maxx:bounds.right.toPrecision(10),maxy:bounds.top.toPrecision(10),SRS:context.projection}));node.appendChild(this.createElementDefaultNS("Title",context.title));node.appendChild(this.write_ol_MapExtension(context));return node;},write_ol_MapExtension:function(context){var node=this.createElementDefaultNS("Extension");var bounds=context.maxExtent;if(bounds){var maxExtent=this.createElementNS(this.namespaces.ol,"ol:maxExtent");this.setAttributes(maxExtent,{minx:bounds.left.toPrecision(10),miny:bounds.bottom.toPrecision(10),maxx:bounds.right.toPrecision(10),maxy:bounds.top.toPrecision(10)});node.appendChild(maxExtent);}
return node;},write_wmc_LayerList:function(context){var list=this.createElementDefaultNS("LayerList");var layer;for(var i=0;i<context.layers.length;++i){layer=context.layers[i];if(layer instanceof OpenLayers.Layer.WMS){list.appendChild(this.write_wmc_Layer(layer));}}
return list;},write_wmc_Layer:function(layer){var node=this.createElementDefaultNS("Layer",null,{queryable:"1",hidden:layer.visibility?"0":"1"});node.appendChild(this.write_wmc_Server(layer));node.appendChild(this.createElementDefaultNS("Name",layer.params["LAYERS"]));node.appendChild(this.createElementDefaultNS("Title",layer.name));node.appendChild(this.write_wmc_FormatList(layer));node.appendChild(this.write_wmc_StyleList(layer));node.appendChild(this.write_wmc_LayerExtension(layer));return node;},write_wmc_LayerExtension:function(layer){var node=this.createElementDefaultNS("Extension");var bounds=layer.maxExtent;var maxExtent=this.createElementNS(this.namespaces.ol,"ol:maxExtent");this.setAttributes(maxExtent,{minx:bounds.left.toPrecision(10),miny:bounds.bottom.toPrecision(10),maxx:bounds.right.toPrecision(10),maxy:bounds.top.toPrecision(10)});node.appendChild(maxExtent);var param=layer.params["TRANSPARENT"];if(param){var trans=this.createElementNS(this.namespaces.ol,"ol:transparent");trans.appendChild(this.createTextNode(param));node.appendChild(trans);}
var properties=["numZoomLevels","units","isBaseLayer","opacity","displayInLayerSwitcher","singleTile"];var child;for(var i=0;i<properties.length;++i){child=this.createOLPropertyNode(layer,properties[i]);if(child){node.appendChild(child);}}
return node;},createOLPropertyNode:function(obj,prop){var node=null;if(obj[prop]!=null){node=this.createElementNS(this.namespaces.ol,"ol:"+prop);node.appendChild(this.createTextNode(obj[prop].toString()));}
return node;},write_wmc_Server:function(layer){var node=this.createElementDefaultNS("Server");this.setAttributes(node,{service:"OGC:WMS",version:layer.params["VERSION"]});node.appendChild(this.write_wmc_OnlineResource(layer.url));return node;},write_wmc_FormatList:function(layer){var node=this.createElementDefaultNS("FormatList");node.appendChild(this.createElementDefaultNS("Format",layer.params["FORMAT"],{current:"1"}));return node;},write_wmc_StyleList:function(layer){var node=this.createElementDefaultNS("StyleList");var style=this.createElementDefaultNS("Style",null,{current:"1"});if(layer.params["SLD"]){var sld=this.createElementDefaultNS("SLD");var link=this.write_wmc_OnlineResource(layer.params["SLD"]);sld.appendChild(link);style.appendChild(sld);}else if(layer.params["SLD_BODY"]){var sld=this.createElementDefaultNS("SLD");var body=layer.params["SLD_BODY"];var doc=OpenLayers.Format.XML.prototype.read.apply(this,[body]);var imported=doc.documentElement;if(sld.ownerDocument&&sld.ownerDocument.importNode){imported=sld.ownerDocument.importNode(imported,true);}
sld.appendChild(imported);style.appendChild(sld);}else{var name=layer.params["STYLES"]?layer.params["STYLES"]:this.defaultStyleName;style.appendChild(this.createElementDefaultNS("Name",name));style.appendChild(this.createElementDefaultNS("Title",this.defaultStyleTitle));}
node.appendChild(style);return node;},write_wmc_OnlineResource:function(href){var node=this.createElementDefaultNS("OnlineResource");this.setAttributeNS(node,this.namespaces.xlink,"xlink:type","simple");this.setAttributeNS(node,this.namespaces.xlink,"xlink:href",href);return node;},CLASS_NAME:"OpenLayers.Format.WMC.v1"});OpenLayers.Handler.Click=OpenLayers.Class(OpenLayers.Handler,{delay:300,single:true,'double':false,pixelTolerance:0,stopSingle:false,stopDouble:false,timerId:null,down:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);if(this.pixelTolerance!=null){this.mousedown=function(evt){this.down=evt.xy;return true;};}},mousedown:null,dblclick:function(evt){if(this.passesTolerance(evt)){if(this["double"]){this.callback('dblclick',[evt]);}
this.clearTimer();}
return!this.stopDouble;},click:function(evt){if(this.passesTolerance(evt)){if(this.timerId!=null){this.clearTimer();}else{var clickEvent=this.single?OpenLayers.Util.extend({},evt):null;this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,clickEvent),this.delay);}}
return!this.stopSingle;},passesTolerance:function(evt){var passes=true;if(this.pixelTolerance!=null&&this.down){var dpx=Math.sqrt(Math.pow(this.down.x-evt.xy.x,2)+
Math.pow(this.down.y-evt.xy.y,2));if(dpx>this.pixelTolerance){passes=false;}}
return passes;},clearTimer:function(){if(this.timerId!=null){window.clearTimeout(this.timerId);this.timerId=null;}},delayedCall:function(evt){this.timerId=null;if(evt){this.callback('click',[evt]);}},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.clearTimer();this.down=null;deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Click"});OpenLayers.Handler.Drag=OpenLayers.Class(OpenLayers.Handler,{started:false,stopDown:true,dragging:false,last:null,start:null,oldOnselectstart:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);},down:function(evt){},move:function(evt){},up:function(evt){},out:function(evt){},mousedown:function(evt){var propagate=true;this.dragging=false;if(this.checkModifiers(evt)&&OpenLayers.Event.isLeftClick(evt)){this.started=true;this.start=evt.xy;this.last=evt.xy;this.map.div.style.cursor="move";this.down(evt);this.callback("down",[evt.xy]);OpenLayers.Event.stop(evt);if(!this.oldOnselectstart){this.oldOnselectstart=(document.onselectstart)?document.onselectstart:function(){return true;};document.onselectstart=function(){return false;};}
propagate=!this.stopDown;}else{this.started=false;this.start=null;this.last=null;}
return propagate;},mousemove:function(evt){if(this.started){if(evt.xy.x!=this.last.x||evt.xy.y!=this.last.y){this.dragging=true;this.move(evt);this.callback("move",[evt.xy]);if(!this.oldOnselectstart){this.oldOnselectstart=document.onselectstart;document.onselectstart=function(){return false;};}
this.last=evt.xy;}}
return true;},mouseup:function(evt){if(this.started){var dragged=(this.start!=this.last);this.started=false;this.dragging=false;this.map.div.style.cursor="";this.up(evt);this.callback("up",[evt.xy]);if(dragged){this.callback("done",[evt.xy]);}
document.onselectstart=this.oldOnselectstart;}
return true;},mouseout:function(evt){if(this.started&&OpenLayers.Util.mouseLeft(evt,this.map.div)){var dragged=(this.start!=this.last);this.started=false;this.dragging=false;this.map.div.style.cursor="";this.out(evt);this.callback("out",[]);if(dragged){this.callback("done",[evt.xy]);}
if(document.onselectstart){document.onselectstart=this.oldOnselectstart;}}
return true;},click:function(evt){return(this.start==this.last);},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.dragging=false;activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.started=false;this.dragging=false;this.start=null;this.last=null;deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Drag"});OpenLayers.Handler.Feature=OpenLayers.Class(OpenLayers.Handler,{EVENTMAP:{'click':{'in':'click','out':'clickout'},'mousemove':{'in':'over','out':'out'},'dblclick':{'in':'dblclick','out':null},'mousedown':{'in':null,'out':null},'mouseup':{'in':null,'out':null}},feature:null,lastFeature:null,down:null,up:null,clickoutTolerance:4,geometryTypes:null,stopClick:true,stopDown:true,stopUp:true,layerIndex:null,initialize:function(control,layer,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,[control,callbacks,options]);this.layer=layer;},mousedown:function(evt){this.down=evt.xy;return this.handle(evt)?!this.stopDown:true;},mouseup:function(evt){this.up=evt.xy;return this.handle(evt)?!this.stopUp:true;},click:function(evt){return this.handle(evt)?!this.stopClick:true;},mousemove:function(evt){this.handle(evt);return true;},dblclick:function(evt){return!this.handle(evt);},geometryTypeMatches:function(feature){return this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,feature.geometry.CLASS_NAME)>-1;},handle:function(evt){var type=evt.type;var handled=false;var previouslyIn=!!(this.feature);var click=(type=="click"||type=="dblclick");this.feature=this.layer.getFeatureFromEvent(evt);if(this.feature){var inNew=(this.feature!=this.lastFeature);if(this.geometryTypeMatches(this.feature)){if(previouslyIn&&inNew){this.triggerCallback(type,'out',[this.lastFeature]);this.triggerCallback(type,'in',[this.feature]);}else if(!previouslyIn||click){this.triggerCallback(type,'in',[this.feature]);}
this.lastFeature=this.feature;handled=true;}else{if(previouslyIn&&inNew||(click&&this.lastFeature)){this.triggerCallback(type,'out',[this.lastFeature]);}
this.feature=null;}}else{if(previouslyIn||(click&&this.lastFeature)){this.triggerCallback(type,'out',[this.lastFeature]);}}
return handled;},triggerCallback:function(type,mode,args){var key=this.EVENTMAP[type][mode];if(key){if(type=='click'&&mode=='out'&&this.up&&this.down){var dpx=Math.sqrt(Math.pow(this.up.x-this.down.x,2)+
Math.pow(this.up.y-this.down.y,2));if(dpx<=this.clickoutTolerance){this.callback(key,args);}}else{this.callback(key,args);}}},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.layerIndex=this.layer.div.style.zIndex;this.layer.div.style.zIndex=this.map.Z_INDEX_BASE['Popup']-1;activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){if(this.layer&&this.layer.div){this.layer.div.style.zIndex=this.layerIndex;}
this.feature=null;this.lastFeature=null;this.down=null;this.up=null;deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Feature"});OpenLayers.Handler.Hover=OpenLayers.Class(OpenLayers.Handler,{delay:500,pixelTolerance:null,stopMove:false,px:null,timerId:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);},mousemove:function(evt){if(this.passesTolerance(evt.xy)){this.clearTimer();this.callback('move',[evt]);this.px=evt.xy;evt=OpenLayers.Util.extend({},evt);this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,evt),this.delay);}
return!this.stopMove;},mouseout:function(evt){if(OpenLayers.Util.mouseLeft(evt,this.map.div)){this.clearTimer();this.callback('move',[evt]);}
return true;},passesTolerance:function(px){var passes=true;if(this.pixelTolerance&&this.px){var dpx=Math.sqrt(Math.pow(this.px.x-px.x,2)+
Math.pow(this.px.y-px.y,2));if(dpx<this.pixelTolerance){passes=false;}}
return passes;},clearTimer:function(){if(this.timerId!=null){window.clearTimeout(this.timerId);this.timerId=null;}},delayedCall:function(evt){this.callback('pause',[evt]);},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.clearTimer();deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Hover"});OpenLayers.Handler.Keyboard=OpenLayers.Class(OpenLayers.Handler,{KEY_EVENTS:["keydown","keypress","keyup"],eventListener:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.eventListener=OpenLayers.Function.bindAsEventListener(this.handleKeyEvent,this);},destroy:function(){this.deactivate();this.eventListener=null;OpenLayers.Handler.prototype.destroy.apply(this,arguments);},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){for(var i=0;i<this.KEY_EVENTS.length;i++){OpenLayers.Event.observe(window,this.KEY_EVENTS[i],this.eventListener);}
return true;}else{return false;}},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){for(var i=0;i<this.KEY_EVENTS.length;i++){OpenLayers.Event.stopObserving(window,this.KEY_EVENTS[i],this.eventListener);}
deactivated=true;}
return deactivated;},handleKeyEvent:function(evt){if(this.checkModifiers(evt)){this.callback(evt.type,[evt.charCode||evt.keyCode]);}},CLASS_NAME:"OpenLayers.Handler.Keyboard"});OpenLayers.Handler.MouseWheel=OpenLayers.Class(OpenLayers.Handler,{wheelListener:null,mousePosition:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.wheelListener=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this);},destroy:function(){OpenLayers.Handler.prototype.destroy.apply(this,arguments);this.wheelListener=null;},onWheelEvent:function(e){if(!this.map||!this.checkModifiers(e)){return;}
var overScrollableDiv=false;var overLayerDiv=false;var overMapDiv=false;var elem=OpenLayers.Event.element(e);while((elem!=null)&&!overMapDiv&&!overScrollableDiv){if(!overScrollableDiv){try{if(elem.currentStyle){overflow=elem.currentStyle["overflow"];}else{var style=document.defaultView.getComputedStyle(elem,null);var overflow=style.getPropertyValue("overflow");}
overScrollableDiv=(overflow&&(overflow=="auto")||(overflow=="scroll"));}catch(err){}}
if(!overLayerDiv){for(var i=0;i<this.map.layers.length;i++){if(elem==this.map.layers[i].div||elem==this.map.layers[i].pane){overLayerDiv=true;break;}}}
overMapDiv=(elem==this.map.div);elem=elem.parentNode;}
if(!overScrollableDiv&&overMapDiv){if(overLayerDiv){this.wheelZoom(e);}
OpenLayers.Event.stop(e);}},wheelZoom:function(e){var delta=0;if(!e){e=window.event;}
if(e.wheelDelta){delta=e.wheelDelta/120;if(window.opera&&window.opera.version()<9.2){delta=-delta;}}else if(e.detail){delta=-e.detail/3;}
if(delta){if(this.mousePosition){e.xy=this.mousePosition;}
if(!e.xy){e.xy=this.map.getPixelFromLonLat(this.map.getCenter());}
if(delta<0){this.callback("down",[e,delta]);}else{this.callback("up",[e,delta]);}}},mousemove:function(evt){this.mousePosition=evt.xy;},activate:function(evt){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var wheelListener=this.wheelListener;OpenLayers.Event.observe(window,"DOMMouseScroll",wheelListener);OpenLayers.Event.observe(window,"mousewheel",wheelListener);OpenLayers.Event.observe(document,"mousewheel",wheelListener);return true;}else{return false;}},deactivate:function(evt){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){var wheelListener=this.wheelListener;OpenLayers.Event.stopObserving(window,"DOMMouseScroll",wheelListener);OpenLayers.Event.stopObserving(window,"mousewheel",wheelListener);OpenLayers.Event.stopObserving(document,"mousewheel",wheelListener);return true;}else{return false;}},CLASS_NAME:"OpenLayers.Handler.MouseWheel"});OpenLayers.Layer=OpenLayers.Class({id:null,name:null,div:null,opacity:null,EVENT_TYPES:["loadstart","loadend","loadcancel","visibilitychanged"],events:null,map:null,isBaseLayer:false,alpha:false,displayInLayerSwitcher:true,visibility:true,attribution:null,inRange:false,imageSize:null,imageOffset:null,options:null,eventListeners:null,gutter:0,projection:null,units:null,scales:null,resolutions:null,maxExtent:null,minExtent:null,maxResolution:null,minResolution:null,numZoomLevels:null,minScale:null,maxScale:null,displayOutsideMaxExtent:false,wrapDateLine:false,transitionEffect:null,SUPPORTED_TRANSITIONS:['resize'],initialize:function(name,options){this.addOptions(options);this.name=name;if(this.id==null){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");this.div=OpenLayers.Util.createDiv(this.id);this.div.style.width="100%";this.div.style.height="100%";this.events=new OpenLayers.Events(this,this.div,this.EVENT_TYPES);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}}
if(this.wrapDateLine){this.displayOutsideMaxExtent=true;}},destroy:function(setNewBaseLayer){if(setNewBaseLayer==null){setNewBaseLayer=true;}
if(this.map!=null){this.map.removeLayer(this,setNewBaseLayer);}
this.projection=null;this.map=null;this.name=null;this.div=null;this.options=null;if(this.events){if(this.eventListeners){this.events.un(this.eventListeners);}
this.events.destroy();}
this.eventListeners=null;this.events=null;},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer(this.name,this.options);}
OpenLayers.Util.applyDefaults(obj,this);obj.map=null;return obj;},setName:function(newName){if(newName!=this.name){this.name=newName;if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"name"});}}},addOptions:function(newOptions){if(this.options==null){this.options={};}
OpenLayers.Util.extend(this.options,newOptions);OpenLayers.Util.extend(this,newOptions);},onMapResize:function(){},redraw:function(){var redrawn=false;if(this.map){this.inRange=this.calculateInRange();var extent=this.getExtent();if(extent&&this.inRange&&this.visibility){this.moveTo(extent,true,false);redrawn=true;}}
return redrawn;},moveTo:function(bounds,zoomChanged,dragging){var display=this.visibility;if(!this.isBaseLayer){display=display&&this.inRange;}
this.display(display);},setMap:function(map){if(this.map==null){this.map=map;this.maxExtent=this.maxExtent||this.map.maxExtent;this.projection=this.projection||this.map.projection;if(this.projection&&typeof this.projection=="string"){this.projection=new OpenLayers.Projection(this.projection);}
this.units=this.projection.getUnits()||this.units||this.map.units;this.initResolutions();if(!this.isBaseLayer){this.inRange=this.calculateInRange();var show=((this.visibility)&&(this.inRange));this.div.style.display=show?"":"none";}
this.setTileSize();}},removeMap:function(map){},getImageSize:function(){return(this.imageSize||this.tileSize);},setTileSize:function(size){var tileSize=(size)?size:((this.tileSize)?this.tileSize:this.map.getTileSize());this.tileSize=tileSize;if(this.gutter){this.imageOffset=new OpenLayers.Pixel(-this.gutter,-this.gutter);this.imageSize=new OpenLayers.Size(tileSize.w+(2*this.gutter),tileSize.h+(2*this.gutter));}},getVisibility:function(){return this.visibility;},setVisibility:function(visibility){if(visibility!=this.visibility){this.visibility=visibility;this.display(visibility);this.redraw();if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"visibility"});}
this.events.triggerEvent("visibilitychanged");}},display:function(display){var inRange=this.calculateInRange();if(display!=(this.div.style.display!="none")){this.div.style.display=(display&&inRange)?"block":"none";}},calculateInRange:function(){var inRange=false;if(this.map){var resolution=this.map.getResolution();inRange=((resolution>=this.minResolution)&&(resolution<=this.maxResolution));}
return inRange;},setIsBaseLayer:function(isBaseLayer){if(isBaseLayer!=this.isBaseLayer){this.isBaseLayer=isBaseLayer;if(this.map!=null){this.map.events.triggerEvent("changebaselayer",{layer:this});}}},initResolutions:function(){var props=new Array('projection','units','scales','resolutions','maxScale','minScale','maxResolution','minResolution','minExtent','maxExtent','numZoomLevels','maxZoomLevel');var confProps={};for(var i=0;i<props.length;i++){var property=props[i];confProps[property]=this.options[property]||this.map[property];}
if(this.options.minScale!=null&&this.options.maxScale!=null&&this.options.scales==null){confProps.scales=null;}
if(this.options.minResolution!=null&&this.options.maxResolution!=null&&this.options.resolutions==null){confProps.resolutions=null;}
if((!confProps.numZoomLevels)&&(confProps.maxZoomLevel)){confProps.numZoomLevels=confProps.maxZoomLevel+1;}
if((confProps.scales!=null)||(confProps.resolutions!=null)){if(confProps.scales!=null){confProps.resolutions=[];for(var i=0;i<confProps.scales.length;i++){var scale=confProps.scales[i];confProps.resolutions[i]=OpenLayers.Util.getResolutionFromScale(scale,confProps.units);}}
confProps.numZoomLevels=confProps.resolutions.length;}else{if(confProps.minScale){confProps.maxResolution=OpenLayers.Util.getResolutionFromScale(confProps.minScale,confProps.units);}else if(confProps.maxResolution=="auto"){var viewSize=this.map.getSize();var wRes=confProps.maxExtent.getWidth()/viewSize.w;var hRes=confProps.maxExtent.getHeight()/viewSize.h;confProps.maxResolution=Math.max(wRes,hRes);}
if(confProps.maxScale!=null){confProps.minResolution=OpenLayers.Util.getResolutionFromScale(confProps.maxScale,confProps.units);}else if((confProps.minResolution=="auto")&&(confProps.minExtent!=null)){var viewSize=this.map.getSize();var wRes=confProps.minExtent.getWidth()/viewSize.w;var hRes=confProps.minExtent.getHeight()/viewSize.h;confProps.minResolution=Math.max(wRes,hRes);}
if(confProps.minResolution!=null&&this.options.numZoomLevels==undefined){var ratio=confProps.maxResolution/confProps.minResolution;confProps.numZoomLevels=Math.floor(Math.log(ratio)/Math.log(2))+1;}
confProps.resolutions=new Array(confProps.numZoomLevels);var base=2;if(typeof confProps.minResolution=="number"&&confProps.numZoomLevels>1){base=Math.pow((confProps.maxResolution/confProps.minResolution),(1/(confProps.numZoomLevels-1)));}
for(var i=0;i<confProps.numZoomLevels;i++){var res=confProps.maxResolution/Math.pow(base,i);confProps.resolutions[i]=res;}}
confProps.resolutions.sort(function(a,b){return(b-a);});this.resolutions=confProps.resolutions;this.maxResolution=confProps.resolutions[0];var lastIndex=confProps.resolutions.length-1;this.minResolution=confProps.resolutions[lastIndex];this.scales=[];for(var i=0;i<confProps.resolutions.length;i++){this.scales[i]=OpenLayers.Util.getScaleFromResolution(confProps.resolutions[i],confProps.units);}
this.minScale=this.scales[0];this.maxScale=this.scales[this.scales.length-1];this.numZoomLevels=confProps.numZoomLevels;},getResolution:function(){var zoom=this.map.getZoom();return this.getResolutionForZoom(zoom);},getExtent:function(){return this.map.calculateBounds();},getZoomForExtent:function(extent,closest){var viewSize=this.map.getSize();var idealResolution=Math.max(extent.getWidth()/viewSize.w,extent.getHeight()/viewSize.h);return this.getZoomForResolution(idealResolution,closest);},getDataExtent:function(){},getResolutionForZoom:function(zoom){zoom=Math.max(0,Math.min(zoom,this.resolutions.length-1));var resolution;if(this.map.fractionalZoom){var low=Math.floor(zoom);var high=Math.ceil(zoom);resolution=this.resolutions[high]+
((zoom-low)*(this.resolutions[low]-this.resolutions[high]));}else{resolution=this.resolutions[Math.round(zoom)];}
return resolution;},getZoomForResolution:function(resolution,closest){var zoom;if(this.map.fractionalZoom){var lowZoom=0;var highZoom=this.resolutions.length-1;var highRes=this.resolutions[lowZoom];var lowRes=this.resolutions[highZoom];var res;for(var i=0;i<this.resolutions.length;++i){res=this.resolutions[i];if(res>=resolution){highRes=res;lowZoom=i;}
if(res<=resolution){lowRes=res;highZoom=i;break;}}
var dRes=highRes-lowRes;if(dRes>0){zoom=lowZoom+((resolution-lowRes)/dRes);}else{zoom=lowZoom;}}else{var diff;var minDiff=Number.POSITIVE_INFINITY;for(var i=0;i<this.resolutions.length;i++){if(closest){diff=Math.abs(this.resolutions[i]-resolution);if(diff>minDiff){break;}
minDiff=diff;}else{if(this.resolutions[i]<resolution){break;}}}
zoom=Math.max(0,i-1);}
return zoom;},getLonLatFromViewPortPx:function(viewPortPx){var lonlat=null;if(viewPortPx!=null){var size=this.map.getSize();var center=this.map.getCenter();if(center){var res=this.map.getResolution();var delta_x=viewPortPx.x-(size.w/2);var delta_y=viewPortPx.y-(size.h/2);lonlat=new OpenLayers.LonLat(center.lon+delta_x*res,center.lat-delta_y*res);if(this.wrapDateLine){lonlat=lonlat.wrapDateLine(this.maxExtent);}}}
return lonlat;},getViewPortPxFromLonLat:function(lonlat){var px=null;if(lonlat!=null){var resolution=this.map.getResolution();var extent=this.map.getExtent();px=new OpenLayers.Pixel((1/resolution*(lonlat.lon-extent.left)),(1/resolution*(extent.top-lonlat.lat)));}
return px;},setOpacity:function(opacity){if(opacity!=this.opacity){this.opacity=opacity;for(var i=0;i<this.div.childNodes.length;++i){var element=this.div.childNodes[i].firstChild;OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);}}},setZIndex:function(zIndex){this.div.style.zIndex=zIndex;},adjustBounds:function(bounds){if(this.gutter){var mapGutter=this.gutter*this.map.getResolution();bounds=new OpenLayers.Bounds(bounds.left-mapGutter,bounds.bottom-mapGutter,bounds.right+mapGutter,bounds.top+mapGutter);}
if(this.wrapDateLine){var wrappingOptions={'rightTolerance':this.getResolution()};bounds=bounds.wrapDateLine(this.maxExtent,wrappingOptions);}
return bounds;},CLASS_NAME:"OpenLayers.Layer"});OpenLayers.Marker.Box=OpenLayers.Class(OpenLayers.Marker,{bounds:null,div:null,initialize:function(bounds,borderColor,borderWidth){this.bounds=bounds;this.div=OpenLayers.Util.createDiv();this.div.style.overflow='hidden';this.events=new OpenLayers.Events(this,this.div,null);this.setBorder(borderColor,borderWidth);},destroy:function(){this.bounds=null;this.div=null;OpenLayers.Marker.prototype.destroy.apply(this,arguments);},setBorder:function(color,width){if(!color){color="red";}
if(!width){width=2;}
this.div.style.border=width+"px solid "+color;},draw:function(px,sz){OpenLayers.Util.modifyDOMElement(this.div,null,px,sz);return this.div;},onScreen:function(){var onScreen=false;if(this.map){var screenBounds=this.map.getExtent();onScreen=screenBounds.containsBounds(this.bounds,true,true);}
return onScreen;},display:function(display){this.div.style.display=(display)?"":"none";},CLASS_NAME:"OpenLayers.Marker.Box"});OpenLayers.Popup.FramedCloud=OpenLayers.Class(OpenLayers.Popup.Framed,{autoSize:true,panMapIfOutOfView:true,imageSize:new OpenLayers.Size(676,736),isAlphaImage:false,fixedRelativePosition:false,positionBlocks:{"tl":{'offset':new OpenLayers.Pixel(44,0),'padding':new OpenLayers.Bounds(8,40,8,9),'blocks':[{size:new OpenLayers.Size('auto','auto'),anchor:new OpenLayers.Bounds(0,51,22,0),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,'auto'),anchor:new OpenLayers.Bounds(null,50,0,0),position:new OpenLayers.Pixel(-638,0)},{size:new OpenLayers.Size('auto',21),anchor:new OpenLayers.Bounds(0,32,80,null),position:new OpenLayers.Pixel(0,-629)},{size:new OpenLayers.Size(22,21),anchor:new OpenLayers.Bounds(null,32,0,null),position:new OpenLayers.Pixel(-638,-629)},{size:new OpenLayers.Size(81,54),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(0,-668)}]},"tr":{'offset':new OpenLayers.Pixel(-45,0),'padding':new OpenLayers.Bounds(8,40,8,9),'blocks':[{size:new OpenLayers.Size('auto','auto'),anchor:new OpenLayers.Bounds(0,51,22,0),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,'auto'),anchor:new OpenLayers.Bounds(null,50,0,0),position:new OpenLayers.Pixel(-638,0)},{size:new OpenLayers.Size('auto',21),anchor:new OpenLayers.Bounds(0,32,22,null),position:new OpenLayers.Pixel(0,-629)},{size:new OpenLayers.Size(22,21),anchor:new OpenLayers.Bounds(null,32,0,null),position:new OpenLayers.Pixel(-638,-629)},{size:new OpenLayers.Size(81,54),anchor:new OpenLayers.Bounds(0,0,null,null),position:new OpenLayers.Pixel(-215,-668)}]},"bl":{'offset':new OpenLayers.Pixel(45,0),'padding':new OpenLayers.Bounds(8,9,8,40),'blocks':[{size:new OpenLayers.Size('auto','auto'),anchor:new OpenLayers.Bounds(0,21,22,32),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,'auto'),anchor:new OpenLayers.Bounds(null,21,0,32),position:new OpenLayers.Pixel(-638,0)},{size:new OpenLayers.Size('auto',21),anchor:new OpenLayers.Bounds(0,0,22,null),position:new OpenLayers.Pixel(0,-629)},{size:new OpenLayers.Size(22,21),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(-638,-629)},{size:new OpenLayers.Size(81,54),anchor:new OpenLayers.Bounds(null,null,0,0),position:new OpenLayers.Pixel(-101,-674)}]},"br":{'offset':new OpenLayers.Pixel(-44,0),'padding':new OpenLayers.Bounds(8,9,8,40),'blocks':[{size:new OpenLayers.Size('auto','auto'),anchor:new OpenLayers.Bounds(0,21,22,32),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,'auto'),anchor:new OpenLayers.Bounds(null,21,0,32),position:new OpenLayers.Pixel(-638,0)},{size:new OpenLayers.Size('auto',21),anchor:new OpenLayers.Bounds(0,0,22,null),position:new OpenLayers.Pixel(0,-629)},{size:new OpenLayers.Size(22,21),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(-638,-629)},{size:new OpenLayers.Size(81,54),anchor:new OpenLayers.Bounds(0,null,null,0),position:new OpenLayers.Pixel(-311,-674)}]}},minSize:new OpenLayers.Size(105,10),maxSize:new OpenLayers.Size(600,660),initialize:function(id,lonlat,size,contentHTML,anchor,closeBox,closeBoxCallback){this.imageSrc=OpenLayers.Util.getImagesLocation()+'cloud-popup-relative.png';OpenLayers.Popup.Framed.prototype.initialize.apply(this,arguments);this.contentDiv.className="olFramedCloudPopupContent";},destroy:function(){OpenLayers.Popup.Framed.prototype.destroy.apply(this,arguments);},CLASS_NAME:"OpenLayers.Popup.FramedCloud"});OpenLayers.Control.DragFeature=OpenLayers.Class(OpenLayers.Control,{geometryTypes:null,onStart:function(feature,pixel){},onDrag:function(feature,pixel){},onComplete:function(feature,pixel){},layer:null,feature:null,dragCallbacks:{},featureCallbacks:{},lastPixel:null,initialize:function(layer,options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.layer=layer;this.handlers={drag:new OpenLayers.Handler.Drag(this,OpenLayers.Util.extend({down:this.downFeature,move:this.moveFeature,up:this.upFeature,out:this.cancel,done:this.doneDragging},this.dragCallbacks)),feature:new OpenLayers.Handler.Feature(this,this.layer,OpenLayers.Util.extend({over:this.overFeature,out:this.outFeature},this.featureCallbacks),{geometryTypes:this.geometryTypes})};},destroy:function(){this.layer=null;OpenLayers.Control.prototype.destroy.apply(this,[]);},activate:function(){return(this.handlers.feature.activate()&&OpenLayers.Control.prototype.activate.apply(this,arguments));},deactivate:function(){this.handlers.drag.deactivate();this.handlers.feature.deactivate();this.feature=null;this.dragging=false;this.lastPixel=null;return OpenLayers.Control.prototype.deactivate.apply(this,arguments);},overFeature:function(feature){if(!this.handlers.drag.dragging){this.feature=feature;this.handlers.drag.activate();this.over=true;this.map.div.style.cursor="move";}else{if(this.feature.id==feature.id){this.over=true;}else{this.over=false;}}},downFeature:function(pixel){this.lastPixel=pixel;this.onStart(this.feature,pixel);},moveFeature:function(pixel){var res=this.map.getResolution();this.feature.geometry.move(res*(pixel.x-this.lastPixel.x),res*(this.lastPixel.y-pixel.y));this.layer.drawFeature(this.feature);this.lastPixel=pixel;this.onDrag(this.feature,pixel);},upFeature:function(pixel){if(!this.over){this.handlers.drag.deactivate();this.feature=null;this.map.div.style.cursor="default";}},doneDragging:function(pixel){this.onComplete(this.feature,pixel);},outFeature:function(feature){if(!this.handlers.drag.dragging){this.over=false;this.handlers.drag.deactivate();this.map.div.style.cursor="default";this.feature=null;}else{if(this.feature.id==feature.id){this.over=false;}}},cancel:function(){this.handlers.drag.deactivate();this.over=false;},setMap:function(map){this.handlers.drag.setMap(map);this.handlers.feature.setMap(map);OpenLayers.Control.prototype.setMap.apply(this,arguments);},CLASS_NAME:"OpenLayers.Control.DragFeature"});OpenLayers.Control.DragPan=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,panned:false,draw:function(){this.handler=new OpenLayers.Handler.Drag(this,{"move":this.panMap,"done":this.panMapDone});},panMap:function(xy){this.panned=true;this.map.pan(this.handler.last.x-xy.x,this.handler.last.y-xy.y,{dragging:this.handler.dragging,animate:false});},panMapDone:function(xy){if(this.panned){this.panMap(xy);this.panned=false;}},CLASS_NAME:"OpenLayers.Control.DragPan"});OpenLayers.Control.KeyboardDefaults=OpenLayers.Class(OpenLayers.Control,{slideFactor:75,initialize:function(){OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){if(this.handler){this.handler.destroy();}
this.handler=null;OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){this.handler=new OpenLayers.Handler.Keyboard(this,{"keypress":this.defaultKeyPress});this.activate();},defaultKeyPress:function(code){switch(code){case OpenLayers.Event.KEY_LEFT:this.map.pan(-this.slideFactor,0);break;case OpenLayers.Event.KEY_RIGHT:this.map.pan(this.slideFactor,0);break;case OpenLayers.Event.KEY_UP:this.map.pan(0,-this.slideFactor);break;case OpenLayers.Event.KEY_DOWN:this.map.pan(0,this.slideFactor);break;case 33:var size=this.map.getSize();this.map.pan(0,-0.75*size.h);break;case 34:var size=this.map.getSize();this.map.pan(0,0.75*size.h);break;case 35:var size=this.map.getSize();this.map.pan(0.75*size.w,0);break;case 36:var size=this.map.getSize();this.map.pan(-0.75*size.w,0);break;case 43:this.map.zoomIn();break;case 45:this.map.zoomOut();break;case 107:this.map.zoomIn();break;case 109:this.map.zoomOut();break;}},CLASS_NAME:"OpenLayers.Control.KeyboardDefaults"});OpenLayers.State={UNKNOWN:'Unknown',INSERT:'Insert',UPDATE:'Update',DELETE:'Delete'};OpenLayers.Feature.Vector=OpenLayers.Class(OpenLayers.Feature,{fid:null,geometry:null,attributes:null,state:null,style:null,renderIntent:"default",initialize:function(geometry,attributes,style){OpenLayers.Feature.prototype.initialize.apply(this,[null,null,attributes]);this.lonlat=null;this.geometry=geometry;this.state=null;this.attributes={};if(attributes){this.attributes=OpenLayers.Util.extend(this.attributes,attributes);}
this.style=style?style:null;},destroy:function(){if(this.layer){this.layer.removeFeatures(this);this.layer=null;}
this.geometry=null;OpenLayers.Feature.prototype.destroy.apply(this,arguments);},clone:function(){return new OpenLayers.Feature.Vector(this.geometry.clone(),this.attributes,this.style);},onScreen:function(boundsOnly){var onScreen=false;if(this.layer&&this.layer.map){var screenBounds=this.layer.map.getExtent();if(boundsOnly){var featureBounds=this.geometry.getBounds();onScreen=screenBounds.intersectsBounds(featureBounds);}else{var screenPoly=screenBounds.toGeometry();onScreen=screenPoly.intersects(this.geometry);}}
return onScreen;},createMarker:function(){return null;},destroyMarker:function(){},createPopup:function(){return null;},atPoint:function(lonlat,toleranceLon,toleranceLat){var atPoint=false;if(this.geometry){atPoint=this.geometry.atPoint(lonlat,toleranceLon,toleranceLat);}
return atPoint;},destroyPopup:function(){},toState:function(state){if(state==OpenLayers.State.UPDATE){switch(this.state){case OpenLayers.State.UNKNOWN:case OpenLayers.State.DELETE:this.state=state;break;case OpenLayers.State.UPDATE:case OpenLayers.State.INSERT:break;}}else if(state==OpenLayers.State.INSERT){switch(this.state){case OpenLayers.State.UNKNOWN:break;default:this.state=state;break;}}else if(state==OpenLayers.State.DELETE){switch(this.state){case OpenLayers.State.INSERT:break;case OpenLayers.State.DELETE:break;case OpenLayers.State.UNKNOWN:case OpenLayers.State.UPDATE:this.state=state;break;}}else if(state==OpenLayers.State.UNKNOWN){this.state=state;}},CLASS_NAME:"OpenLayers.Feature.Vector"});OpenLayers.Feature.Vector.style={'default':{fillColor:"#ee9900",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"#ee9900",strokeOpacity:1,strokeWidth:1,strokeLinecap:"round",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:""},'select':{fillColor:"blue",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"blue",strokeOpacity:1,strokeWidth:2,strokeLinecap:"round",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"pointer"},'temporary':{fillColor:"yellow",fillOpacity:0.2,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"yellow",strokeOpacity:1,strokeLinecap:"round",strokeWidth:4,hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:""}};OpenLayers.Feature.WFS=OpenLayers.Class(OpenLayers.Feature,{initialize:function(layer,xmlNode){var newArguments=arguments;var data=this.processXMLNode(xmlNode);newArguments=new Array(layer,data.lonlat,data);OpenLayers.Feature.prototype.initialize.apply(this,newArguments);this.createMarker();this.layer.addMarker(this.marker);},destroy:function(){if(this.marker!=null){this.layer.removeMarker(this.marker);}
OpenLayers.Feature.prototype.destroy.apply(this,arguments);},processXMLNode:function(xmlNode){var point=OpenLayers.Ajax.getElementsByTagNameNS(xmlNode,"http://www.opengis.net/gml","gml","Point");var text=OpenLayers.Util.getXmlNodeValue(OpenLayers.Ajax.getElementsByTagNameNS(point[0],"http://www.opengis.net/gml","gml","coordinates")[0]);var floats=text.split(",");return{lonlat:new OpenLayers.LonLat(parseFloat(floats[0]),parseFloat(floats[1])),id:null};},CLASS_NAME:"OpenLayers.Feature.WFS"});OpenLayers.Format.WMC.v1_0_0=OpenLayers.Class(OpenLayers.Format.WMC.v1,{VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/context http://schemas.opengis.net/context/1.0.0/context.xsd",initialize:function(options){OpenLayers.Format.WMC.v1.prototype.initialize.apply(this,[options]);},CLASS_NAME:"OpenLayers.Format.WMC.v1_0_0"});OpenLayers.Format.WMC.v1_1_0=OpenLayers.Class(OpenLayers.Format.WMC.v1,{VERSION:"1.1.0",schemaLocation:"http://www.opengis.net/context http://schemas.opengis.net/context/1.1.0/context.xsd",initialize:function(options){OpenLayers.Format.WMC.v1.prototype.initialize.apply(this,[options]);},read_sld_MinScaleDenominator:function(layerInfo,node){layerInfo.options.maxScale=this.getChildValue(node);},read_sld_MaxScaleDenominator:function(layerInfo,node){layerInfo.options.minScale=this.getChildValue(node);},write_wmc_Layer:function(layer){var node=OpenLayers.Format.WMC.v1.prototype.write_wmc_Layer.apply(this,[layer]);if(layer.options.resolutions||layer.options.scales||layer.options.minResolution||layer.options.maxScale){var minSD=this.createElementNS(this.namespaces.sld,"sld:MinScaleDenominator");minSD.appendChild(this.createTextNode(layer.maxScale.toPrecision(10)));node.insertBefore(minSD,node.childNodes[3]);}
if(layer.options.resolutions||layer.options.scales||layer.options.maxResolution||layer.options.minScale){var maxSD=this.createElementNS(this.namespaces.sld,"sld:MaxScaleDenominator");maxSD.appendChild(this.createTextNode(layer.minScale.toPrecision(10)));node.insertBefore(maxSD,node.childNodes[4]);}
return node;},CLASS_NAME:"OpenLayers.Format.WMC.v1_1_0"});OpenLayers.Handler.Box=OpenLayers.Class(OpenLayers.Handler,{dragHandler:null,boxDivClassName:'olHandlerBoxZoomBox',initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);var callbacks={"down":this.startBox,"move":this.moveBox,"out":this.removeBox,"up":this.endBox};this.dragHandler=new OpenLayers.Handler.Drag(this,callbacks,{keyMask:this.keyMask});},setMap:function(map){OpenLayers.Handler.prototype.setMap.apply(this,arguments);if(this.dragHandler){this.dragHandler.setMap(map);}},startBox:function(xy){this.zoomBox=OpenLayers.Util.createDiv('zoomBox',this.dragHandler.start);this.zoomBox.className=this.boxDivClassName;this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.viewPortDiv.appendChild(this.zoomBox);this.map.div.style.cursor="crosshair";},moveBox:function(xy){var deltaX=Math.abs(this.dragHandler.start.x-xy.x);var deltaY=Math.abs(this.dragHandler.start.y-xy.y);this.zoomBox.style.width=Math.max(1,deltaX)+"px";this.zoomBox.style.height=Math.max(1,deltaY)+"px";if(xy.x<this.dragHandler.start.x){this.zoomBox.style.left=xy.x+"px";}
if(xy.y<this.dragHandler.start.y){this.zoomBox.style.top=xy.y+"px";}},endBox:function(end){var result;if(Math.abs(this.dragHandler.start.x-end.x)>5||Math.abs(this.dragHandler.start.y-end.y)>5){var start=this.dragHandler.start;var top=Math.min(start.y,end.y);var bottom=Math.max(start.y,end.y);var left=Math.min(start.x,end.x);var right=Math.max(start.x,end.x);result=new OpenLayers.Bounds(left,bottom,right,top);}else{result=this.dragHandler.start.clone();}
this.removeBox();this.map.div.style.cursor="";this.callback("done",[result]);},removeBox:function(){this.map.viewPortDiv.removeChild(this.zoomBox);this.zoomBox=null;},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.dragHandler.activate();return true;}else{return false;}},deactivate:function(){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.dragHandler.deactivate();return true;}else{return false;}},CLASS_NAME:"OpenLayers.Handler.Box"});OpenLayers.Handler.RegularPolygon=OpenLayers.Class(OpenLayers.Handler.Drag,{sides:4,radius:null,snapAngle:null,snapToggle:'shiftKey',persist:false,irregular:false,angle:null,fixedRadius:false,feature:null,layer:null,origin:null,initialize:function(control,callbacks,options){this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'],{});OpenLayers.Handler.prototype.initialize.apply(this,[control,callbacks,options]);this.options=(options)?options:new Object();},setOptions:function(newOptions){OpenLayers.Util.extend(this.options,newOptions);OpenLayers.Util.extend(this,newOptions);},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var options={displayInLayerSwitcher:false};this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,options);this.map.addLayer(this.layer);activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.Drag.prototype.deactivate.apply(this,arguments)){if(this.dragging){this.cancel();}
if(this.layer.map!=null){this.layer.destroy(false);if(this.feature){this.feature.destroy();}}
this.layer=null;this.feature=null;deactivated=true;}
return deactivated;},down:function(evt){this.fixedRadius=!!(this.radius);var maploc=this.map.getLonLatFromPixel(evt.xy);this.origin=new OpenLayers.Geometry.Point(maploc.lon,maploc.lat);if(!this.fixedRadius||this.irregular){this.radius=this.map.getResolution();}
if(this.persist){this.clear();}
this.feature=new OpenLayers.Feature.Vector();this.createGeometry();this.layer.addFeatures([this.feature],{silent:true});this.layer.drawFeature(this.feature,this.style);},move:function(evt){var maploc=this.map.getLonLatFromPixel(evt.xy);var point=new OpenLayers.Geometry.Point(maploc.lon,maploc.lat);if(this.irregular){var ry=Math.sqrt(2)*Math.abs(point.y-this.origin.y)/2;this.radius=Math.max(this.map.getResolution()/2,ry);}else if(this.fixedRadius){this.origin=point;}else{this.calculateAngle(point,evt);this.radius=Math.max(this.map.getResolution()/2,point.distanceTo(this.origin));}
this.modifyGeometry();if(this.irregular){var dx=point.x-this.origin.x;var dy=point.y-this.origin.y;var ratio;if(dy==0){ratio=dx/(this.radius*Math.sqrt(2));}else{ratio=dx/dy;}
this.feature.geometry.resize(1,this.origin,ratio);this.feature.geometry.move(dx/2,dy/2);}
this.layer.drawFeature(this.feature,this.style);},up:function(evt){this.finalize();},out:function(evt){this.finalize();},createGeometry:function(){this.angle=Math.PI*((1/this.sides)-(1/2));if(this.snapAngle){this.angle+=this.snapAngle*(Math.PI/180);}
this.feature.geometry=OpenLayers.Geometry.Polygon.createRegularPolygon(this.origin,this.radius,this.sides,this.snapAngle);},modifyGeometry:function(){var angle,dx,dy,point;var ring=this.feature.geometry.components[0];if(ring.components.length!=(this.sides+1)){this.createGeometry();ring=this.feature.geometry.components[0];}
for(var i=0;i<this.sides;++i){point=ring.components[i];angle=this.angle+(i*2*Math.PI/this.sides);point.x=this.origin.x+(this.radius*Math.cos(angle));point.y=this.origin.y+(this.radius*Math.sin(angle));point.clearBounds();}},calculateAngle:function(point,evt){var alpha=Math.atan2(point.y-this.origin.y,point.x-this.origin.x);if(this.snapAngle&&(this.snapToggle&&!evt[this.snapToggle])){var snapAngleRad=(Math.PI/180)*this.snapAngle;this.angle=Math.round(alpha/snapAngleRad)*snapAngleRad;}else{this.angle=alpha;}},cancel:function(){this.callback("cancel",null);this.finalize();},finalize:function(){this.origin=null;this.radius=this.options.radius;},clear:function(){this.layer.renderer.clear();this.layer.destroyFeatures();},callback:function(name,args){if(this.callbacks[name]){this.callbacks[name].apply(this.control,[this.feature.geometry.clone()]);}
if(!this.persist&&(name=="done"||name=="cancel")){this.clear();}},CLASS_NAME:"OpenLayers.Handler.RegularPolygon"});OpenLayers.Layer.EventPane=OpenLayers.Class(OpenLayers.Layer,{smoothDragPan:true,isBaseLayer:true,isFixed:true,pane:null,mapObject:null,initialize:function(name,options){OpenLayers.Layer.prototype.initialize.apply(this,arguments);if(this.pane==null){this.pane=OpenLayers.Util.createDiv(this.div.id+"_EventPane");}},destroy:function(){this.mapObject=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Layer.prototype.setMap.apply(this,arguments);this.pane.style.zIndex=parseInt(this.div.style.zIndex)+1;this.pane.style.display=this.div.style.display;this.pane.style.width="100%";this.pane.style.height="100%";if(OpenLayers.Util.getBrowserName()=="msie"){this.pane.style.background="url("+OpenLayers.Util.getImagesLocation()+"blank.gif)";}
if(this.isFixed){this.map.viewPortDiv.appendChild(this.pane);}else{this.map.layerContainerDiv.appendChild(this.pane);}
this.loadMapObject();if(this.mapObject==null){this.loadWarningMessage();}},removeMap:function(map){if(this.pane&&this.pane.parentNode){this.pane.parentNode.removeChild(this.pane);this.pane=null;}
OpenLayers.Layer.prototype.removeMap.apply(this,arguments);},loadWarningMessage:function(){this.div.style.backgroundColor="darkblue";var viewSize=this.map.getSize();var msgW=Math.min(viewSize.w,300);var msgH=Math.min(viewSize.h,200);var size=new OpenLayers.Size(msgW,msgH);var centerPx=new OpenLayers.Pixel(viewSize.w/2,viewSize.h/2);var topLeft=centerPx.add(-size.w/2,-size.h/2);var div=OpenLayers.Util.createDiv(this.name+"_warning",topLeft,size,null,null,null,"auto");div.style.padding="7px";div.style.backgroundColor="yellow";div.innerHTML=this.getWarningHTML();this.div.appendChild(div);},getWarningHTML:function(){return"";},display:function(display){OpenLayers.Layer.prototype.display.apply(this,arguments);this.pane.style.display=this.div.style.display;},setZIndex:function(zIndex){OpenLayers.Layer.prototype.setZIndex.apply(this,arguments);this.pane.style.zIndex=parseInt(this.div.style.zIndex)+1;},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);if(this.mapObject!=null){var newCenter=this.map.getCenter();var newZoom=this.map.getZoom();if(newCenter!=null){var moOldCenter=this.getMapObjectCenter();var oldCenter=this.getOLLonLatFromMapObjectLonLat(moOldCenter);var moOldZoom=this.getMapObjectZoom();var oldZoom=this.getOLZoomFromMapObjectZoom(moOldZoom);if(!(newCenter.equals(oldCenter))||!(newZoom==oldZoom)){if(dragging&&this.dragPanMapObject&&this.smoothDragPan){var oldPx=this.map.getViewPortPxFromLonLat(oldCenter);var newPx=this.map.getViewPortPxFromLonLat(newCenter);this.dragPanMapObject(newPx.x-oldPx.x,oldPx.y-newPx.y);}else{var center=this.getMapObjectLonLatFromOLLonLat(newCenter);var zoom=this.getMapObjectZoomFromOLZoom(newZoom);this.setMapObjectCenter(center,zoom,dragging);}}}}},getLonLatFromViewPortPx:function(viewPortPx){var lonlat=null;if((this.mapObject!=null)&&(this.getMapObjectCenter()!=null)){var moPixel=this.getMapObjectPixelFromOLPixel(viewPortPx);var moLonLat=this.getMapObjectLonLatFromMapObjectPixel(moPixel);lonlat=this.getOLLonLatFromMapObjectLonLat(moLonLat);}
return lonlat;},getViewPortPxFromLonLat:function(lonlat){var viewPortPx=null;if((this.mapObject!=null)&&(this.getMapObjectCenter()!=null)){var moLonLat=this.getMapObjectLonLatFromOLLonLat(lonlat);var moPixel=this.getMapObjectPixelFromMapObjectLonLat(moLonLat);viewPortPx=this.getOLPixelFromMapObjectPixel(moPixel);}
return viewPortPx;},getOLLonLatFromMapObjectLonLat:function(moLonLat){var olLonLat=null;if(moLonLat!=null){var lon=this.getLongitudeFromMapObjectLonLat(moLonLat);var lat=this.getLatitudeFromMapObjectLonLat(moLonLat);olLonLat=new OpenLayers.LonLat(lon,lat);}
return olLonLat;},getMapObjectLonLatFromOLLonLat:function(olLonLat){var moLatLng=null;if(olLonLat!=null){moLatLng=this.getMapObjectLonLatFromLonLat(olLonLat.lon,olLonLat.lat);}
return moLatLng;},getOLPixelFromMapObjectPixel:function(moPixel){var olPixel=null;if(moPixel!=null){var x=this.getXFromMapObjectPixel(moPixel);var y=this.getYFromMapObjectPixel(moPixel);olPixel=new OpenLayers.Pixel(x,y);}
return olPixel;},getMapObjectPixelFromOLPixel:function(olPixel){var moPixel=null;if(olPixel!=null){moPixel=this.getMapObjectPixelFromXY(olPixel.x,olPixel.y);}
return moPixel;},CLASS_NAME:"OpenLayers.Layer.EventPane"});OpenLayers.Layer.FixedZoomLevels=OpenLayers.Class({initialize:function(){},initResolutions:function(){var props=new Array('minZoomLevel','maxZoomLevel','numZoomLevels');for(var i=0;i<props.length;i++){var property=props[i];this[property]=(this.options[property]!=null)?this.options[property]:this.map[property];}
if((this.minZoomLevel==null)||(this.minZoomLevel<this.MIN_ZOOM_LEVEL)){this.minZoomLevel=this.MIN_ZOOM_LEVEL;}
var limitZoomLevels=this.MAX_ZOOM_LEVEL-this.minZoomLevel+1;if(this.numZoomLevels!=null){this.numZoomLevels=Math.min(this.numZoomLevels,limitZoomLevels);}else{if(this.maxZoomLevel!=null){var zoomDiff=this.maxZoomLevel-this.minZoomLevel+1;this.numZoomLevels=Math.min(zoomDiff,limitZoomLevels);}else{this.numZoomLevels=limitZoomLevels;}}
this.maxZoomLevel=this.minZoomLevel+this.numZoomLevels-1;if(this.RESOLUTIONS!=null){var resolutionsIndex=0;this.resolutions=[];for(var i=this.minZoomLevel;i<=this.maxZoomLevel;i++){this.resolutions[resolutionsIndex++]=this.RESOLUTIONS[i];}
this.maxResolution=this.resolutions[0];this.minResolution=this.resolutions[this.resolutions.length-1];}},getResolution:function(){if(this.resolutions!=null){return OpenLayers.Layer.prototype.getResolution.apply(this,arguments);}else{var resolution=null;var viewSize=this.map.getSize();var extent=this.getExtent();if((viewSize!=null)&&(extent!=null)){resolution=Math.max(extent.getWidth()/viewSize.w,extent.getHeight()/viewSize.h);}
return resolution;}},getExtent:function(){var extent=null;var size=this.map.getSize();var tlPx=new OpenLayers.Pixel(0,0);var tlLL=this.getLonLatFromViewPortPx(tlPx);var brPx=new OpenLayers.Pixel(size.w,size.h);var brLL=this.getLonLatFromViewPortPx(brPx);if((tlLL!=null)&&(brLL!=null)){extent=new OpenLayers.Bounds(tlLL.lon,brLL.lat,brLL.lon,tlLL.lat);}
return extent;},getZoomForResolution:function(resolution){if(this.resolutions!=null){return OpenLayers.Layer.prototype.getZoomForResolution.apply(this,arguments);}else{var extent=OpenLayers.Layer.prototype.getExtent.apply(this,[]);return this.getZoomForExtent(extent);}},getOLZoomFromMapObjectZoom:function(moZoom){var zoom=null;if(moZoom!=null){zoom=moZoom-this.minZoomLevel;}
return zoom;},getMapObjectZoomFromOLZoom:function(olZoom){var zoom=null;if(olZoom!=null){zoom=olZoom+this.minZoomLevel;}
return zoom;},CLASS_NAME:"FixedZoomLevels.js"});OpenLayers.Layer.HTTPRequest=OpenLayers.Class(OpenLayers.Layer,{URL_HASH_FACTOR:(Math.sqrt(5)-1)/2,url:null,params:null,reproject:false,initialize:function(name,url,params,options){var newArguments=arguments;newArguments=[name,options];OpenLayers.Layer.prototype.initialize.apply(this,newArguments);this.url=url;this.params=OpenLayers.Util.extend({},params);},destroy:function(){this.url=null;this.params=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.HTTPRequest(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);return obj;},setUrl:function(newUrl){this.url=newUrl;},mergeNewParams:function(newParams){this.params=OpenLayers.Util.extend(this.params,newParams);return this.redraw();},redraw:function(force){if(force){return this.mergeNewParams({"_olSalt":Math.random()});}else{return OpenLayers.Layer.prototype.redraw.apply(this,[]);}},selectUrl:function(paramString,urls){var product=1;for(var i=0;i<paramString.length;i++){product*=paramString.charCodeAt(i)*this.URL_HASH_FACTOR;product-=Math.floor(product);}
return urls[Math.floor(product*urls.length)];},getFullRequestString:function(newParams,altUrl){var url=altUrl||this.url;var allParams=OpenLayers.Util.extend({},this.params);allParams=OpenLayers.Util.extend(allParams,newParams);var paramsString=OpenLayers.Util.getParameterString(allParams);if(url instanceof Array){url=this.selectUrl(paramsString,url);}
var urlParams=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));for(var key in allParams){if(key.toUpperCase()in urlParams){delete allParams[key];}}
paramsString=OpenLayers.Util.getParameterString(allParams);var requestString=url;if(paramsString!=""){var lastServerChar=url.charAt(url.length-1);if((lastServerChar=="&")||(lastServerChar=="?")){requestString+=paramsString;}else{if(url.indexOf('?')==-1){requestString+='?'+paramsString;}else{requestString+='&'+paramsString;}}}
return requestString;},CLASS_NAME:"OpenLayers.Layer.HTTPRequest"});OpenLayers.Layer.Image=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:true,url:null,extent:null,size:null,tile:null,aspectRatio:null,initialize:function(name,url,extent,size,options){this.url=url;this.extent=extent;this.size=size;OpenLayers.Layer.prototype.initialize.apply(this,[name,options]);this.aspectRatio=(this.extent.getHeight()/this.size.h)/(this.extent.getWidth()/this.size.w);},destroy:function(){if(this.tile){this.tile.destroy();this.tile=null;}
OpenLayers.Layer.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.Image(this.name,this.url,this.extent,this.size,this.options);}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);return obj;},setMap:function(map){if(this.options.maxResolution==null){this.options.maxResolution=this.aspectRatio*this.extent.getWidth()/this.size.w;}
OpenLayers.Layer.prototype.setMap.apply(this,arguments);},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);var firstRendering=(this.tile==null);if(zoomChanged||firstRendering){this.setTileSize();var ul=new OpenLayers.LonLat(this.extent.left,this.extent.top);var ulPx=this.map.getLayerPxFromLonLat(ul);if(firstRendering){this.tile=new OpenLayers.Tile.Image(this,ulPx,this.extent,null,this.tileSize);}else{this.tile.size=this.tileSize.clone();this.tile.position=ulPx.clone();}
this.tile.draw();}},setTileSize:function(){var tileWidth=this.extent.getWidth()/this.map.getResolution();var tileHeight=this.extent.getHeight()/this.map.getResolution();this.tileSize=new OpenLayers.Size(tileWidth,tileHeight);},setUrl:function(newUrl){this.url=newUrl;this.tile.draw();},getURL:function(bounds){return this.url;},CLASS_NAME:"OpenLayers.Layer.Image"});OpenLayers.Layer.Markers=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:false,markers:null,drawn:false,initialize:function(name,options){OpenLayers.Layer.prototype.initialize.apply(this,arguments);this.markers=[];},destroy:function(){this.clearMarkers();this.markers=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},setOpacity:function(opacity){if(opacity!=this.opacity){this.opacity=opacity;for(var i=0;i<this.markers.length;i++){this.markers[i].setOpacity(this.opacity);}}},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);if(zoomChanged||!this.drawn){for(var i=0;i<this.markers.length;i++){this.drawMarker(this.markers[i]);}
this.drawn=true;}},addMarker:function(marker){this.markers.push(marker);if(this.opacity!=null){marker.setOpacity(this.opacity);}
if(this.map&&this.map.getExtent()){marker.map=this.map;this.drawMarker(marker);}},removeMarker:function(marker){if(this.markers&&this.markers.length){OpenLayers.Util.removeItem(this.markers,marker);if((marker.icon!=null)&&(marker.icon.imageDiv!=null)&&(marker.icon.imageDiv.parentNode==this.div)){this.div.removeChild(marker.icon.imageDiv);marker.drawn=false;}}},clearMarkers:function(){if(this.markers!=null){while(this.markers.length>0){this.removeMarker(this.markers[0]);}}},drawMarker:function(marker){var px=this.map.getLayerPxFromLonLat(marker.lonlat);if(px==null){marker.display(false);}else{var markerImg=marker.draw(px);if(!marker.drawn){this.div.appendChild(markerImg);marker.drawn=true;}}},getDataExtent:function(){var maxExtent=null;if(this.markers&&(this.markers.length>0)){var maxExtent=new OpenLayers.Bounds();for(var i=0;i<this.markers.length;i++){var marker=this.markers[i];maxExtent.extend(marker.lonlat);}}
return maxExtent;},CLASS_NAME:"OpenLayers.Layer.Markers"});OpenLayers.Layer.SphericalMercator={getExtent:function(){var extent=null;if(this.sphericalMercator){extent=this.map.calculateBounds();}else{extent=OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this);}
return extent;},initMercatorParameters:function(){this.RESOLUTIONS=[];var maxResolution=156543.0339;for(var zoom=0;zoom<=this.MAX_ZOOM_LEVEL;++zoom){this.RESOLUTIONS[zoom]=maxResolution/Math.pow(2,zoom);}
this.units="m";this.projection="EPSG:900913";},forwardMercator:function(lon,lat){var x=lon*20037508.34/180;var y=Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);y=y*20037508.34/180;return new OpenLayers.LonLat(x,y);},inverseMercator:function(x,y){var lon=(x/20037508.34)*180;var lat=(y/20037508.34)*180;lat=180/Math.PI*(2*Math.atan(Math.exp(lat*Math.PI/180))-Math.PI/2);return new OpenLayers.LonLat(lon,lat);},projectForward:function(point){var lonlat=OpenLayers.Layer.SphericalMercator.forwardMercator(point.x,point.y);point.x=lonlat.lon;point.y=lonlat.lat;return point;},projectInverse:function(point){var lonlat=OpenLayers.Layer.SphericalMercator.inverseMercator(point.x,point.y);point.x=lonlat.lon;point.y=lonlat.lat;return point;}};OpenLayers.Projection.addTransform("EPSG:4326","EPSG:900913",OpenLayers.Layer.SphericalMercator.projectForward);OpenLayers.Projection.addTransform("EPSG:900913","EPSG:4326",OpenLayers.Layer.SphericalMercator.projectInverse);OpenLayers.Control.DrawFeature=OpenLayers.Class(OpenLayers.Control,{layer:null,callbacks:null,featureAdded:function(){},handlerOptions:null,initialize:function(layer,handler,options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.callbacks=OpenLayers.Util.extend({done:this.drawFeature},this.callbacks);this.layer=layer;this.handler=new handler(this,this.callbacks,this.handlerOptions);},drawFeature:function(geometry){var feature=new OpenLayers.Feature.Vector(geometry);this.layer.addFeatures([feature]);this.featureAdded(feature);},CLASS_NAME:"OpenLayers.Control.DrawFeature"});OpenLayers.Control.SelectFeature=OpenLayers.Class(OpenLayers.Control,{multipleKey:null,toggleKey:null,multiple:false,clickout:true,toggle:false,hover:false,onSelect:function(){},onUnselect:function(){},geometryTypes:null,layer:null,callbacks:null,selectStyle:null,renderIntent:"select",handler:null,initialize:function(layer,options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.layer=layer;this.callbacks=OpenLayers.Util.extend({click:this.clickFeature,clickout:this.clickoutFeature,over:this.overFeature,out:this.outFeature},this.callbacks);var handlerOptions={geometryTypes:this.geometryTypes};this.handler=new OpenLayers.Handler.Feature(this,layer,this.callbacks,handlerOptions);},unselectAll:function(options){var feature;for(var i=this.layer.selectedFeatures.length-1;i>=0;--i){feature=this.layer.selectedFeatures[i];if(!options||options.except!=feature){this.unselect(feature);}}},clickFeature:function(feature){if(!this.hover){var selected=(OpenLayers.Util.indexOf(this.layer.selectedFeatures,feature)>-1);if(selected){if(this.toggleSelect()){this.unselect(feature);}else if(!this.multipleSelect()){this.unselectAll({except:feature});}}else{if(!this.multipleSelect()){this.unselectAll({except:feature});}
this.select(feature);}}},multipleSelect:function(){return this.multiple||this.handler.evt[this.multipleKey];},toggleSelect:function(){return this.toggle||this.handler.evt[this.toggleKey];},clickoutFeature:function(feature){if(!this.hover&&this.clickout){this.unselectAll();}},overFeature:function(feature){if(this.hover&&(OpenLayers.Util.indexOf(this.layer.selectedFeatures,feature)==-1)){this.select(feature);}},outFeature:function(feature){if(this.hover){this.unselect(feature);}},select:function(feature){this.layer.selectedFeatures.push(feature);var selectStyle=this.selectStyle||this.renderIntent;this.layer.drawFeature(feature,selectStyle);this.layer.events.triggerEvent("featureselected",{feature:feature});this.onSelect(feature);},unselect:function(feature){this.layer.drawFeature(feature,"default");OpenLayers.Util.removeItem(this.layer.selectedFeatures,feature);this.layer.events.triggerEvent("featureunselected",{feature:feature});this.onUnselect(feature);},setMap:function(map){this.handler.setMap(map);OpenLayers.Control.prototype.setMap.apply(this,arguments);},CLASS_NAME:"OpenLayers.Control.SelectFeature"});OpenLayers.Control.ZoomBox=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,out:false,draw:function(){this.handler=new OpenLayers.Handler.Box(this,{done:this.zoomBox},{keyMask:this.keyMask});},zoomBox:function(position){if(position instanceof OpenLayers.Bounds){if(!this.out){var minXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left,position.bottom));var maxXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right,position.top));var bounds=new OpenLayers.Bounds(minXY.lon,minXY.lat,maxXY.lon,maxXY.lat);}else{var pixWidth=Math.abs(position.right-position.left);var pixHeight=Math.abs(position.top-position.bottom);var zoomFactor=Math.min((this.map.size.h/pixHeight),(this.map.size.w/pixWidth));var extent=this.map.getExtent();var center=this.map.getLonLatFromPixel(position.getCenterPixel());var xmin=center.lon-(extent.getWidth()/2)*zoomFactor;var xmax=center.lon+(extent.getWidth()/2)*zoomFactor;var ymin=center.lat-(extent.getHeight()/2)*zoomFactor;var ymax=center.lat+(extent.getHeight()/2)*zoomFactor;var bounds=new OpenLayers.Bounds(xmin,ymin,xmax,ymax);}
this.map.zoomToExtent(bounds);}else{if(!this.out){this.map.setCenter(this.map.getLonLatFromPixel(position),this.map.getZoom()+1);}else{this.map.setCenter(this.map.getLonLatFromPixel(position),this.map.getZoom()-1);}}},CLASS_NAME:"OpenLayers.Control.ZoomBox"});OpenLayers.Format.WKT=OpenLayers.Class(OpenLayers.Format,{initialize:function(options){this.regExes={'typeStr':/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,'spaces':/\s+/,'parenComma':/\)\s*,\s*\(/,'doubleParenComma':/\)\s*\)\s*,\s*\(\s*\(/,'trimParens':/^\s*\(?(.*?)\)?\s*$/};OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(wkt){var features,type,str;var matches=this.regExes.typeStr.exec(wkt);if(matches){type=matches[1].toLowerCase();str=matches[2];if(this.parse[type]){features=this.parse[type].apply(this,[str]);}
if(this.internalProjection&&this.externalProjection){if(features&&features.CLASS_NAME=="OpenLayers.Feature.Vector"){features.geometry.transform(this.externalProjection,this.internalProjection);}else if(features&&typeof features=="object"){for(var i=0;i<features.length;i++){var component=features[i];component.geometry.transform(this.externalProjection,this.internalProjection);}}}}
return features;},write:function(features){var collection,geometry,type,data,isCollection;if(features.constructor==Array){collection=features;isCollection=true;}else{collection=[features];isCollection=false;}
var pieces=[];if(isCollection){pieces.push('GEOMETRYCOLLECTION(');}
for(var i=0;i<collection.length;++i){if(isCollection&&i>0){pieces.push(',');}
geometry=collection[i].geometry;type=geometry.CLASS_NAME.split('.')[2].toLowerCase();if(!this.extract[type]){return null;}
if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
data=this.extract[type].apply(this,[geometry]);pieces.push(type.toUpperCase()+'('+data+')');}
if(isCollection){pieces.push(')');}
return pieces.join('');},extract:{'point':function(point){return point.x+' '+point.y;},'multipoint':function(multipoint){var array=[];for(var i=0;i<multipoint.components.length;++i){array.push(this.extract.point.apply(this,[multipoint.components[i]]));}
return array.join(',');},'linestring':function(linestring){var array=[];for(var i=0;i<linestring.components.length;++i){array.push(this.extract.point.apply(this,[linestring.components[i]]));}
return array.join(',');},'multilinestring':function(multilinestring){var array=[];for(var i=0;i<multilinestring.components.length;++i){array.push('('+
this.extract.linestring.apply(this,[multilinestring.components[i]])+')');}
return array.join(',');},'polygon':function(polygon){var array=[];for(var i=0;i<polygon.components.length;++i){array.push('('+
this.extract.linestring.apply(this,[polygon.components[i]])+')');}
return array.join(',');},'multipolygon':function(multipolygon){var array=[];for(var i=0;i<multipolygon.components.length;++i){array.push('('+
this.extract.polygon.apply(this,[multipolygon.components[i]])+')');}
return array.join(',');}},parse:{'point':function(str){var coords=OpenLayers.String.trim(str).split(this.regExes.spaces);return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0],coords[1]));},'multipoint':function(str){var points=OpenLayers.String.trim(str).split(',');var components=[];for(var i=0;i<points.length;++i){components.push(this.parse.point.apply(this,[points[i]]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPoint(components));},'linestring':function(str){var points=OpenLayers.String.trim(str).split(',');var components=[];for(var i=0;i<points.length;++i){components.push(this.parse.point.apply(this,[points[i]]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(components));},'multilinestring':function(str){var line;var lines=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0;i<lines.length;++i){line=lines[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.linestring.apply(this,[line]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiLineString(components));},'polygon':function(str){var ring,linestring,linearring;var rings=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0;i<rings.length;++i){ring=rings[i].replace(this.regExes.trimParens,'$1');linestring=this.parse.linestring.apply(this,[ring]).geometry;linearring=new OpenLayers.Geometry.LinearRing(linestring.components);components.push(linearring);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(components));},'multipolygon':function(str){var polygon;var polygons=OpenLayers.String.trim(str).split(this.regExes.doubleParenComma);var components=[];for(var i=0;i<polygons.length;++i){polygon=polygons[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.polygon.apply(this,[polygon]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(components));},'geometrycollection':function(str){str=str.replace(/,\s*([A-Za-z])/g,'|$1');var wktArray=OpenLayers.String.trim(str).split('|');var components=[];for(var i=0;i<wktArray.length;++i){components.push(OpenLayers.Format.WKT.prototype.read.apply(this,[wktArray[i]]));}
return components;}},CLASS_NAME:"OpenLayers.Format.WKT"});OpenLayers.Layer.Boxes=OpenLayers.Class(OpenLayers.Layer.Markers,{initialize:function(name,options){OpenLayers.Layer.Markers.prototype.initialize.apply(this,arguments);},drawMarker:function(marker){var bounds=marker.bounds;var topleft=this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.left,bounds.top));var botright=this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.right,bounds.bottom));if(botright==null||topleft==null){marker.display(false);}else{var sz=new OpenLayers.Size(Math.max(1,botright.x-topleft.x),Math.max(1,botright.y-topleft.y));var markerDiv=marker.draw(topleft,sz);if(!marker.drawn){this.div.appendChild(markerDiv);marker.drawn=true;}}},removeMarker:function(marker){OpenLayers.Util.removeItem(this.markers,marker);if((marker.div!=null)&&(marker.div.parentNode==this.div)){this.div.removeChild(marker.div);}},CLASS_NAME:"OpenLayers.Layer.Boxes"});OpenLayers.Layer.GeoRSS=OpenLayers.Class(OpenLayers.Layer.Markers,{location:null,features:null,formatOptions:null,selectedFeature:null,icon:null,popupSize:null,useFeedTitle:true,initialize:function(name,location,options){OpenLayers.Layer.Markers.prototype.initialize.apply(this,[name,options]);this.location=location;this.features=[];},destroy:function(){OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments);this.clearFeatures();this.features=null;},loadRSS:function(){if(!this.loaded){this.events.triggerEvent("loadstart");OpenLayers.loadURL(this.location,null,this,this.parseData);this.loaded=true;}},moveTo:function(bounds,zoomChanged,minor){OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments);if(this.visibility&&!this.loaded){this.events.triggerEvent("loadstart");this.loadRSS();}},parseData:function(ajaxRequest){var doc=ajaxRequest.responseXML;if(!doc||!doc.documentElement){doc=OpenLayers.Format.XML.prototype.read(ajaxRequest.responseText);}
if(this.useFeedTitle){var name=null;try{name=doc.getElementsByTagNameNS('*','title')[0].firstChild.nodeValue;}
catch(e){name=doc.getElementsByTagName('title')[0].firstChild.nodeValue;}
if(name){this.setName(name);}}
var options={};OpenLayers.Util.extend(options,this.formatOptions);if(this.map&&!this.projection.equals(this.map.getProjectionObject())){options.externalProjection=this.projection;options.internalProjection=this.map.getProjectionObject();}
var format=new OpenLayers.Format.GeoRSS(options);var features=format.read(doc);for(var i=0;i<features.length;i++){var data={};var feature=features[i];if(!feature.geometry){continue;}
var title=feature.attributes.title?feature.attributes.title:"Untitled";var description=feature.attributes.description?feature.attributes.description:"No description.";var link=feature.attributes.link?feature.attributes.link:"";var location=feature.geometry.getBounds().getCenterLonLat();data.icon=this.icon==null?OpenLayers.Marker.defaultIcon():this.icon.clone();data.popupSize=this.popupSize?this.popupSize.clone():new OpenLayers.Size(250,120);if(title||description){var contentHTML='<div class="olLayerGeoRSSClose">[x]</div>';contentHTML+='<div class="olLayerGeoRSSTitle">';if(link){contentHTML+='<a class="link" href="'+link+'" target="_blank">';}
contentHTML+=title;if(link){contentHTML+='</a>';}
contentHTML+='</div>';contentHTML+='<div style="" class="olLayerGeoRSSDescription">';contentHTML+=description;contentHTML+='</div>';data['popupContentHTML']=contentHTML;}
var feature=new OpenLayers.Feature(this,location,data);this.features.push(feature);var marker=feature.createMarker();marker.events.register('click',feature,this.markerClick);this.addMarker(marker);}
this.events.triggerEvent("loadend");},markerClick:function(evt){var sameMarkerClicked=(this==this.layer.selectedFeature);this.layer.selectedFeature=(!sameMarkerClicked)?this:null;for(var i=0;i<this.layer.map.popups.length;i++){this.layer.map.removePopup(this.layer.map.popups[i]);}
if(!sameMarkerClicked){var popup=this.createPopup();OpenLayers.Event.observe(popup.div,"click",OpenLayers.Function.bind(function(){for(var i=0;i<this.layer.map.popups.length;i++){this.layer.map.removePopup(this.layer.map.popups[i]);}},this));this.layer.map.addPopup(popup);}
OpenLayers.Event.stop(evt);},clearFeatures:function(){if(this.features!=null){while(this.features.length>0){var feature=this.features[0];OpenLayers.Util.removeItem(this.features,feature);feature.destroy();}}},CLASS_NAME:"OpenLayers.Layer.GeoRSS"});OpenLayers.Layer.Google=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:0,MAX_ZOOM_LEVEL:19,RESOLUTIONS:[1.40625,0.703125,0.3515625,0.17578125,0.087890625,0.0439453125,0.02197265625,0.010986328125,0.0054931640625,0.00274658203125,0.001373291015625,0.0006866455078125,0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125,0.00002145767211914062,0.00001072883605957031,0.00000536441802978515,0.00000268220901489257],type:null,sphericalMercator:false,dragObject:null,initialize:function(name,options){OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments);OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments);this.addContainerPxFunction();if(this.sphericalMercator){OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator);this.initMercatorParameters();}},loadMapObject:function(){try{this.mapObject=new GMap2(this.div);if(typeof this.mapObject.getDragObject=="function"){this.dragObject=this.mapObject.getDragObject();}else{this.dragPanMapObject=null;}
var poweredBy=this.div.lastChild;this.div.removeChild(poweredBy);this.pane.appendChild(poweredBy);poweredBy.className="olLayerGooglePoweredBy gmnoprint";poweredBy.style.left="";poweredBy.style.bottom="";var termsOfUse=this.div.lastChild;this.div.removeChild(termsOfUse);this.pane.appendChild(termsOfUse);termsOfUse.className="olLayerGoogleCopyright";termsOfUse.style.right="";termsOfUse.style.bottom="";}catch(e){OpenLayers.Console.error(e);}},setMap:function(map){OpenLayers.Layer.EventPane.prototype.setMap.apply(this,arguments);if(this.type!=null){this.map.events.register("moveend",this,this.setMapType);}},setMapType:function(){if(this.mapObject.getCenter()!=null){if(OpenLayers.Util.indexOf(this.mapObject.getMapTypes(),this.type)==-1){this.mapObject.addMapType(this.type);}
this.mapObject.setMapType(this.type);this.map.events.unregister("moveend",this,this.setMapType);}},onMapResize:function(){this.mapObject.checkResize();},getOLBoundsFromMapObjectBounds:function(moBounds){var olBounds=null;if(moBounds!=null){var sw=moBounds.getSouthWest();var ne=moBounds.getNorthEast();if(this.sphericalMercator){sw=this.forwardMercator(sw.lng(),sw.lat());ne=this.forwardMercator(ne.lng(),ne.lat());}else{sw=new OpenLayers.LonLat(sw.lng(),sw.lat());ne=new OpenLayers.LonLat(ne.lng(),ne.lat());}
olBounds=new OpenLayers.Bounds(sw.lon,sw.lat,ne.lon,ne.lat);}
return olBounds;},getMapObjectBoundsFromOLBounds:function(olBounds){var moBounds=null;if(olBounds!=null){var sw=this.sphericalMercator?this.inverseMercator(olBounds.bottom,olBounds.left):new OpenLayers.LonLat(olBounds.bottom,olBounds.left);var ne=this.sphericalMercator?this.inverseMercator(olBounds.top,olBounds.right):new OpenLayers.LonLat(olBounds.top,olBounds.right);moBounds=new GLatLngBounds(new GLatLng(sw.lat,sw.lon),new GLatLng(ne.lat,ne.lon));}
return moBounds;},addContainerPxFunction:function(){if((typeof GMap2!="undefined")&&!GMap2.prototype.fromLatLngToContainerPixel){GMap2.prototype.fromLatLngToContainerPixel=function(gLatLng){var gPoint=this.fromLatLngToDivPixel(gLatLng);var div=this.getContainer().firstChild.firstChild;gPoint.x+=div.offsetLeft;gPoint.y+=div.offsetTop;return gPoint;};}},getWarningHTML:function(){return OpenLayers.i18n("googleWarning");},setMapObjectCenter:function(center,zoom){this.mapObject.setCenter(center,zoom);},dragPanMapObject:function(dX,dY){this.dragObject.moveBy(new GSize(-dX,dY));},getMapObjectCenter:function(){return this.mapObject.getCenter();},getMapObjectZoom:function(){return this.mapObject.getZoom();},getMapObjectLonLatFromMapObjectPixel:function(moPixel){return this.mapObject.fromContainerPixelToLatLng(moPixel);},getMapObjectPixelFromMapObjectLonLat:function(moLonLat){return this.mapObject.fromLatLngToContainerPixel(moLonLat);},getMapObjectZoomFromMapObjectBounds:function(moBounds){return this.mapObject.getBoundsZoomLevel(moBounds);},getLongitudeFromMapObjectLonLat:function(moLonLat){return this.sphericalMercator?this.forwardMercator(moLonLat.lng(),moLonLat.lat()).lon:moLonLat.lng();},getLatitudeFromMapObjectLonLat:function(moLonLat){var lat=this.sphericalMercator?this.forwardMercator(moLonLat.lng(),moLonLat.lat()).lat:moLonLat.lat();return lat;},getMapObjectLonLatFromLonLat:function(lon,lat){var gLatLng;if(this.sphericalMercator){var lonlat=this.inverseMercator(lon,lat);gLatLng=new GLatLng(lonlat.lat,lonlat.lon);}else{gLatLng=new GLatLng(lat,lon);}
return gLatLng;},getXFromMapObjectPixel:function(moPixel){return moPixel.x;},getYFromMapObjectPixel:function(moPixel){return moPixel.y;},getMapObjectPixelFromXY:function(x,y){return new GPoint(x,y);},CLASS_NAME:"OpenLayers.Layer.Google"});OpenLayers.Layer.Grid=OpenLayers.Class(OpenLayers.Layer.HTTPRequest,{tileSize:null,grid:null,singleTile:false,ratio:1.5,buffer:2,numLoadingTiles:0,initialize:function(name,url,params,options){OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this,arguments);this.events.addEventType("tileloaded");this.grid=[];},destroy:function(){this.clearGrid();this.grid=null;this.tileSize=null;OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this,arguments);},clearGrid:function(){if(this.grid){for(var iRow=0;iRow<this.grid.length;iRow++){var row=this.grid[iRow];for(var iCol=0;iCol<row.length;iCol++){var tile=row[iCol];this.removeTileMonitoringHooks(tile);tile.destroy();}}
this.grid=[];}},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.Grid(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[obj]);if(this.tileSize!=null){obj.tileSize=this.tileSize.clone();}
obj.grid=[];return obj;},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this,arguments);bounds=bounds||this.map.getExtent();if(bounds!=null){var forceReTile=!this.grid.length||zoomChanged;var tilesBounds=this.getTilesBounds();if(this.singleTile){if(forceReTile||(!dragging&&!tilesBounds.containsBounds(bounds))){this.initSingleTile(bounds);}}else{if(forceReTile||!tilesBounds.containsBounds(bounds,true)){this.initGriddedTiles(bounds);}else{this.moveGriddedTiles(bounds);}}}},setTileSize:function(size){if(this.singleTile){size=this.map.getSize().clone();size.h=parseInt(size.h*this.ratio);size.w=parseInt(size.w*this.ratio);}
OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this,[size]);},getGridBounds:function(){var msg="The getGridBounds() function is deprecated. It will be "+"removed in 3.0. Please use getTilesBounds() instead.";OpenLayers.Console.warn(msg);return this.getTilesBounds();},getTilesBounds:function(){var bounds=null;if(this.grid.length){var bottom=this.grid.length-1;var bottomLeftTile=this.grid[bottom][0];var right=this.grid[0].length-1;var topRightTile=this.grid[0][right];bounds=new OpenLayers.Bounds(bottomLeftTile.bounds.left,bottomLeftTile.bounds.bottom,topRightTile.bounds.right,topRightTile.bounds.top);}
return bounds;},initSingleTile:function(bounds){var center=bounds.getCenterLonLat();var tileWidth=bounds.getWidth()*this.ratio;var tileHeight=bounds.getHeight()*this.ratio;var tileBounds=new OpenLayers.Bounds(center.lon-(tileWidth/2),center.lat-(tileHeight/2),center.lon+(tileWidth/2),center.lat+(tileHeight/2));var ul=new OpenLayers.LonLat(tileBounds.left,tileBounds.top);var px=this.map.getLayerPxFromLonLat(ul);if(!this.grid.length){this.grid[0]=[];}
var tile=this.grid[0][0];if(!tile){tile=this.addTile(tileBounds,px);this.addTileMonitoringHooks(tile);tile.draw();this.grid[0][0]=tile;}else{tile.moveTo(tileBounds,px);}
this.removeExcessTiles(1,1);},calculateGridLayout:function(bounds,extent,resolution){var tilelon=resolution*this.tileSize.w;var tilelat=resolution*this.tileSize.h;var offsetlon=bounds.left-extent.left;var tilecol=Math.floor(offsetlon/tilelon)-this.buffer;var tilecolremain=offsetlon/tilelon-tilecol;var tileoffsetx=-tilecolremain*this.tileSize.w;var tileoffsetlon=extent.left+tilecol*tilelon;var offsetlat=bounds.top-(extent.bottom+tilelat);var tilerow=Math.ceil(offsetlat/tilelat)+this.buffer;var tilerowremain=tilerow-offsetlat/tilelat;var tileoffsety=-tilerowremain*this.tileSize.h;var tileoffsetlat=extent.bottom+tilerow*tilelat;return{tilelon:tilelon,tilelat:tilelat,tileoffsetlon:tileoffsetlon,tileoffsetlat:tileoffsetlat,tileoffsetx:tileoffsetx,tileoffsety:tileoffsety};},initGriddedTiles:function(bounds){var viewSize=this.map.getSize();var minRows=Math.ceil(viewSize.h/this.tileSize.h)+
Math.max(1,2*this.buffer);var minCols=Math.ceil(viewSize.w/this.tileSize.w)+
Math.max(1,2*this.buffer);var extent=this.map.getMaxExtent();var resolution=this.map.getResolution();var tileLayout=this.calculateGridLayout(bounds,extent,resolution);var tileoffsetx=Math.round(tileLayout.tileoffsetx);var tileoffsety=Math.round(tileLayout.tileoffsety);var tileoffsetlon=tileLayout.tileoffsetlon;var tileoffsetlat=tileLayout.tileoffsetlat;var tilelon=tileLayout.tilelon;var tilelat=tileLayout.tilelat;this.origin=new OpenLayers.Pixel(tileoffsetx,tileoffsety);var startX=tileoffsetx;var startLon=tileoffsetlon;var rowidx=0;var layerContainerDivLeft=parseInt(this.map.layerContainerDiv.style.left);var layerContainerDivTop=parseInt(this.map.layerContainerDiv.style.top);do{var row=this.grid[rowidx++];if(!row){row=[];this.grid.push(row);}
tileoffsetlon=startLon;tileoffsetx=startX;var colidx=0;do{var tileBounds=new OpenLayers.Bounds(tileoffsetlon,tileoffsetlat,tileoffsetlon+tilelon,tileoffsetlat+tilelat);var x=tileoffsetx;x-=layerContainerDivLeft;var y=tileoffsety;y-=layerContainerDivTop;var px=new OpenLayers.Pixel(x,y);var tile=row[colidx++];if(!tile){tile=this.addTile(tileBounds,px);this.addTileMonitoringHooks(tile);row.push(tile);}else{tile.moveTo(tileBounds,px,false);}
tileoffsetlon+=tilelon;tileoffsetx+=this.tileSize.w;}while((tileoffsetlon<=bounds.right+tilelon*this.buffer)||colidx<minCols)
tileoffsetlat-=tilelat;tileoffsety+=this.tileSize.h;}while((tileoffsetlat>=bounds.bottom-tilelat*this.buffer)||rowidx<minRows)
this.removeExcessTiles(rowidx,colidx);this.spiralTileLoad();},spiralTileLoad:function(){var tileQueue=[];var directions=["right","down","left","up"];var iRow=0;var iCell=-1;var direction=OpenLayers.Util.indexOf(directions,"right");var directionsTried=0;while(directionsTried<directions.length){var testRow=iRow;var testCell=iCell;switch(directions[direction]){case"right":testCell++;break;case"down":testRow++;break;case"left":testCell--;break;case"up":testRow--;break;}
var tile=null;if((testRow<this.grid.length)&&(testRow>=0)&&(testCell<this.grid[0].length)&&(testCell>=0)){tile=this.grid[testRow][testCell];}
if((tile!=null)&&(!tile.queued)){tileQueue.unshift(tile);tile.queued=true;directionsTried=0;iRow=testRow;iCell=testCell;}else{direction=(direction+1)%4;directionsTried++;}}
for(var i=0;i<tileQueue.length;i++){var tile=tileQueue[i];tile.draw();tile.queued=false;}},addTile:function(bounds,position){},addTileMonitoringHooks:function(tile){tile.onLoadStart=function(){if(this.numLoadingTiles==0){this.events.triggerEvent("loadstart");}
this.numLoadingTiles++;};tile.events.register("loadstart",this,tile.onLoadStart);tile.onLoadEnd=function(){this.numLoadingTiles--;this.events.triggerEvent("tileloaded");if(this.numLoadingTiles==0){this.events.triggerEvent("loadend");}};tile.events.register("loadend",this,tile.onLoadEnd);tile.events.register("unload",this,tile.onLoadEnd);},removeTileMonitoringHooks:function(tile){tile.unload();tile.events.un({"loadstart":tile.onLoadStart,"loadend":tile.onLoadEnd,"unload":tile.onLoadEnd,scope:this});},moveGriddedTiles:function(bounds){var buffer=this.buffer||1;while(true){var tlLayer=this.grid[0][0].position;var tlViewPort=this.map.getViewPortPxFromLayerPx(tlLayer);if(tlViewPort.x>-this.tileSize.w*(buffer-1)){this.shiftColumn(true);}else if(tlViewPort.x<-this.tileSize.w*buffer){this.shiftColumn(false);}else if(tlViewPort.y>-this.tileSize.h*(buffer-1)){this.shiftRow(true);}else if(tlViewPort.y<-this.tileSize.h*buffer){this.shiftRow(false);}else{break;}};},shiftRow:function(prepend){var modelRowIndex=(prepend)?0:(this.grid.length-1);var grid=this.grid;var modelRow=grid[modelRowIndex];var resolution=this.map.getResolution();var deltaY=(prepend)?-this.tileSize.h:this.tileSize.h;var deltaLat=resolution*-deltaY;var row=(prepend)?grid.pop():grid.shift();for(var i=0;i<modelRow.length;i++){var modelTile=modelRow[i];var bounds=modelTile.bounds.clone();var position=modelTile.position.clone();bounds.bottom=bounds.bottom+deltaLat;bounds.top=bounds.top+deltaLat;position.y=position.y+deltaY;row[i].moveTo(bounds,position);}
if(prepend){grid.unshift(row);}else{grid.push(row);}},shiftColumn:function(prepend){var deltaX=(prepend)?-this.tileSize.w:this.tileSize.w;var resolution=this.map.getResolution();var deltaLon=resolution*deltaX;for(var i=0;i<this.grid.length;i++){var row=this.grid[i];var modelTileIndex=(prepend)?0:(row.length-1);var modelTile=row[modelTileIndex];var bounds=modelTile.bounds.clone();var position=modelTile.position.clone();bounds.left=bounds.left+deltaLon;bounds.right=bounds.right+deltaLon;position.x=position.x+deltaX;var tile=prepend?this.grid[i].pop():this.grid[i].shift();tile.moveTo(bounds,position);if(prepend){row.unshift(tile);}else{row.push(tile);}}},removeExcessTiles:function(rows,columns){while(this.grid.length>rows){var row=this.grid.pop();for(var i=0,l=row.length;i<l;i++){var tile=row[i];this.removeTileMonitoringHooks(tile);tile.destroy();}}
while(this.grid[0].length>columns){for(var i=0,l=this.grid.length;i<l;i++){var row=this.grid[i];var tile=row.pop();this.removeTileMonitoringHooks(tile);tile.destroy();}}},onMapResize:function(){if(this.singleTile){this.clearGrid();this.setTileSize();}},getTileBounds:function(viewPortPx){var maxExtent=this.map.getMaxExtent();var resolution=this.getResolution();var tileMapWidth=resolution*this.tileSize.w;var tileMapHeight=resolution*this.tileSize.h;var mapPoint=this.getLonLatFromViewPortPx(viewPortPx);var tileLeft=maxExtent.left+(tileMapWidth*Math.floor((mapPoint.lon-
maxExtent.left)/tileMapWidth));var tileBottom=maxExtent.bottom+(tileMapHeight*Math.floor((mapPoint.lat-
maxExtent.bottom)/tileMapHeight));return new OpenLayers.Bounds(tileLeft,tileBottom,tileLeft+tileMapWidth,tileBottom+tileMapHeight);},CLASS_NAME:"OpenLayers.Layer.Grid"});OpenLayers.Layer.MultiMap=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:1,MAX_ZOOM_LEVEL:17,RESOLUTIONS:[9,1.40625,0.703125,0.3515625,0.17578125,0.087890625,0.0439453125,0.02197265625,0.010986328125,0.0054931640625,0.00274658203125,0.001373291015625,0.0006866455078125,0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125],type:null,initialize:function(name,options){OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments);OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments);if(this.sphericalMercator){OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator);this.initMercatorParameters();this.RESOLUTIONS.unshift(10);}},loadMapObject:function(){try{this.mapObject=new MultimapViewer(this.div);}catch(e){}},getWarningHTML:function(){return OpenLayers.i18n("getLayerWarning",{'layerType':"MM",'layerLib':"MultiMap"});},setMapObjectCenter:function(center,zoom){this.mapObject.goToPosition(center,zoom);},getMapObjectCenter:function(){return this.mapObject.getCurrentPosition();},getMapObjectZoom:function(){return this.mapObject.getZoomFactor();},getMapObjectLonLatFromMapObjectPixel:function(moPixel){moPixel.x=moPixel.x-(this.map.getSize().w/2);moPixel.y=moPixel.y-(this.map.getSize().h/2);return this.mapObject.getMapPositionAt(moPixel);},getMapObjectPixelFromMapObjectLonLat:function(moLonLat){return this.mapObject.geoPosToContainerPixels(moLonLat);},getLongitudeFromMapObjectLonLat:function(moLonLat){return this.sphericalMercator?this.forwardMercator(moLonLat.lon,moLonLat.lat).lon:moLonLat.lon;},getLatitudeFromMapObjectLonLat:function(moLonLat){return this.sphericalMercator?this.forwardMercator(moLonLat.lon,moLonLat.lat).lat:moLonLat.lat;},getMapObjectLonLatFromLonLat:function(lon,lat){var mmLatLon;if(this.sphericalMercator){var lonlat=this.inverseMercator(lon,lat);mmLatLon=new MMLatLon(lonlat.lat,lonlat.lon);}else{mmLatLon=new MMLatLon(lat,lon);}
return mmLatLon;},getXFromMapObjectPixel:function(moPixel){return moPixel.x;},getYFromMapObjectPixel:function(moPixel){return moPixel.y;},getMapObjectPixelFromXY:function(x,y){return new MMPoint(x,y);},CLASS_NAME:"OpenLayers.Layer.MultiMap"});OpenLayers.Layer.Text=OpenLayers.Class(OpenLayers.Layer.Markers,{location:null,features:null,formatOptions:null,selectedFeature:null,initialize:function(name,options){OpenLayers.Layer.Markers.prototype.initialize.apply(this,arguments);this.features=new Array();},destroy:function(){OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments);this.clearFeatures();this.features=null;},loadText:function(){if(!this.loaded){if(this.location!=null){var onFail=function(e){this.events.triggerEvent("loadend");};this.events.triggerEvent("loadstart");OpenLayers.loadURL(this.location,null,this,this.parseData,onFail);this.loaded=true;}}},moveTo:function(bounds,zoomChanged,minor){OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments);if(this.visibility&&!this.loaded){this.events.triggerEvent("loadstart");this.loadText();}},parseData:function(ajaxRequest){var text=ajaxRequest.responseText;var options={};OpenLayers.Util.extend(options,this.formatOptions);if(this.map&&!this.projection.equals(this.map.getProjectionObject())){options.externalProjection=this.projection;options.internalProjection=this.map.getProjectionObject();}
var parser=new OpenLayers.Format.Text(options);features=parser.read(text);for(var i=0;i<features.length;i++){var data={};var feature=features[i];var location;var iconSize,iconOffset;location=new OpenLayers.LonLat(feature.geometry.x,feature.geometry.y);if(feature.style.graphicWidth&&feature.style.graphicHeight){iconSize=new OpenLayers.Size(feature.style.graphicWidth,feature.style.graphicHeight);}
if(feature.style.graphicXOffset&&feature.style.graphicYOffset){iconOffset=new OpenLayers.Pixel(feature.style.graphicXOffset,feature.style.graphicYOffset);}
if(feature.style.externalGraphic!=null){data.icon=new OpenLayers.Icon(feature.style.externalGraphic,iconSize,iconOffset);}else{data.icon=OpenLayers.Marker.defaultIcon();if(iconSize!=null){data.icon.setSize(iconSize);}}
if((feature.attributes.title!=null)&&(feature.attributes.description!=null)){data['popupContentHTML']='<h2>'+feature.attributes.title+'</h2>'+'<p>'+feature.attributes.description+'</p>';}
data['overflow']=feature.attributes.overflow||"auto";var markerFeature=new OpenLayers.Feature(this,location,data);this.features.push(markerFeature);var marker=markerFeature.createMarker();if((feature.attributes.title!=null)&&(feature.attributes.description!=null)){marker.events.register('click',markerFeature,this.markerClick);}
this.addMarker(marker);}
this.events.triggerEvent("loadend");},markerClick:function(evt){var sameMarkerClicked=(this==this.layer.selectedFeature);this.layer.selectedFeature=(!sameMarkerClicked)?this:null;for(var i=0;i<this.layer.map.popups.length;i++){this.layer.map.removePopup(this.layer.map.popups[i]);}
if(!sameMarkerClicked){this.layer.map.addPopup(this.createPopup());}
OpenLayers.Event.stop(evt);},clearFeatures:function(){if(this.features!=null){while(this.features.length>0){var feature=this.features[0];OpenLayers.Util.removeItem(this.features,feature);feature.destroy();}}},CLASS_NAME:"OpenLayers.Layer.Text"});OpenLayers.Layer.VirtualEarth=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:1,MAX_ZOOM_LEVEL:17,RESOLUTIONS:[1.40625,0.703125,0.3515625,0.17578125,0.087890625,0.0439453125,0.02197265625,0.010986328125,0.0054931640625,0.00274658203125,0.001373291015625,0.0006866455078125,0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125],type:null,sphericalMercator:false,initialize:function(name,options){OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments);OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments);if(this.sphericalMercator){OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator);this.initMercatorParameters();}},loadMapObject:function(){var veDiv=OpenLayers.Util.createDiv(this.name);var sz=this.map.getSize();veDiv.style.width=sz.w;veDiv.style.height=sz.h;this.div.appendChild(veDiv);try{this.mapObject=new VEMap(this.name);}catch(e){}
if(this.mapObject!=null){try{this.mapObject.LoadMap(null,null,this.type,true);this.mapObject.AttachEvent("onmousedown",function(){return true;});}catch(e){}
this.mapObject.HideDashboard();}
if(!this.mapObject||!this.mapObject.vemapcontrol||!this.mapObject.vemapcontrol.PanMap||(typeof this.mapObject.vemapcontrol.PanMap!="function")){this.dragPanMapObject=null;}},getWarningHTML:function(){return OpenLayers.i18n("getLayerWarning",{'layerType':'VE','layerLib':'VirtualEarth'});},setMapObjectCenter:function(center,zoom){this.mapObject.SetCenterAndZoom(center,zoom);},getMapObjectCenter:function(){return this.mapObject.GetCenter();},dragPanMapObject:function(dX,dY){this.mapObject.vemapcontrol.PanMap(dX,-dY);},getMapObjectZoom:function(){return this.mapObject.GetZoomLevel();},getMapObjectLonLatFromMapObjectPixel:function(moPixel){return this.mapObject.PixelToLatLong(moPixel.x,moPixel.y);},getMapObjectPixelFromMapObjectLonLat:function(moLonLat){return this.mapObject.LatLongToPixel(moLonLat);},getLongitudeFromMapObjectLonLat:function(moLonLat){return this.sphericalMercator?this.forwardMercator(moLonLat.Longitude,moLonLat.Latitude).lon:moLonLat.Longitude;},getLatitudeFromMapObjectLonLat:function(moLonLat){return this.sphericalMercator?this.forwardMercator(moLonLat.Longitude,moLonLat.Latitude).lat:moLonLat.Latitude;},getMapObjectLonLatFromLonLat:function(lon,lat){var veLatLong;if(this.sphericalMercator){var lonlat=this.inverseMercator(lon,lat);veLatLong=new VELatLong(lonlat.lat,lonlat.lon);}else{veLatLong=new VELatLong(lat,lon);}
return veLatLong;},getXFromMapObjectPixel:function(moPixel){return moPixel.x;},getYFromMapObjectPixel:function(moPixel){return moPixel.y;},getMapObjectPixelFromXY:function(x,y){return new Msn.VE.Pixel(x,y);},CLASS_NAME:"OpenLayers.Layer.VirtualEarth"});OpenLayers.Layer.Yahoo=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:0,MAX_ZOOM_LEVEL:15,RESOLUTIONS:[1.40625,0.703125,0.3515625,0.17578125,0.087890625,0.0439453125,0.02197265625,0.010986328125,0.0054931640625,0.00274658203125,0.001373291015625,0.0006866455078125,0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125],type:null,sphericalMercator:false,initialize:function(name,options){OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments);OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments);if(this.sphericalMercator){OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator);this.initMercatorParameters();}},loadMapObject:function(){try{var size=this.getMapObjectSizeFromOLSize(this.map.getSize());this.mapObject=new YMap(this.div,this.type,size);this.mapObject.disableKeyControls();this.mapObject.disableDragMap();if(!this.mapObject.moveByXY||(typeof this.mapObject.moveByXY!="function")){this.dragPanMapObject=null;}}catch(e){}},onMapResize:function(){try{var size=this.getMapObjectSizeFromOLSize(this.map.getSize());this.mapObject.resizeTo(size);}catch(e){}},setMap:function(map){OpenLayers.Layer.EventPane.prototype.setMap.apply(this,arguments);this.map.events.register("moveend",this,this.fixYahooEventPane);},fixYahooEventPane:function(){var yahooEventPane=OpenLayers.Util.getElement("ygddfdiv");if(yahooEventPane!=null){if(yahooEventPane.parentNode!=null){yahooEventPane.parentNode.removeChild(yahooEventPane);}
this.map.events.unregister("moveend",this,this.fixYahooEventPane);}},getWarningHTML:function(){return OpenLayers.i18n("getLayerWarning",{'layerType':'Yahoo','layerLib':'Yahoo'});},getOLZoomFromMapObjectZoom:function(moZoom){var zoom=null;if(moZoom!=null){zoom=OpenLayers.Layer.FixedZoomLevels.prototype.getOLZoomFromMapObjectZoom.apply(this,[moZoom]);zoom=18-zoom;}
return zoom;},getMapObjectZoomFromOLZoom:function(olZoom){var zoom=null;if(olZoom!=null){zoom=OpenLayers.Layer.FixedZoomLevels.prototype.getMapObjectZoomFromOLZoom.apply(this,[olZoom]);zoom=18-zoom;}
return zoom;},setMapObjectCenter:function(center,zoom){this.mapObject.drawZoomAndCenter(center,zoom);},getMapObjectCenter:function(){return this.mapObject.getCenterLatLon();},dragPanMapObject:function(dX,dY){this.mapObject.moveByXY({'x':-dX,'y':dY});},getMapObjectZoom:function(){return this.mapObject.getZoomLevel();},getMapObjectLonLatFromMapObjectPixel:function(moPixel){return this.mapObject.convertXYLatLon(moPixel);},getMapObjectPixelFromMapObjectLonLat:function(moLonLat){return this.mapObject.convertLatLonXY(moLonLat);},getLongitudeFromMapObjectLonLat:function(moLonLat){return this.sphericalMercator?this.forwardMercator(moLonLat.Lon,moLonLat.Lat).lon:moLonLat.Lon;},getLatitudeFromMapObjectLonLat:function(moLonLat){return this.sphericalMercator?this.forwardMercator(moLonLat.Lon,moLonLat.Lat).lat:moLonLat.Lat;},getMapObjectLonLatFromLonLat:function(lon,lat){var yLatLong;if(this.sphericalMercator){var lonlat=this.inverseMercator(lon,lat);yLatLong=new YGeoPoint(lonlat.lat,lonlat.lon);}else{yLatLong=new YGeoPoint(lat,lon);}
return yLatLong;},getXFromMapObjectPixel:function(moPixel){return moPixel.x;},getYFromMapObjectPixel:function(moPixel){return moPixel.y;},getMapObjectPixelFromXY:function(x,y){return new YCoordPoint(x,y);},getMapObjectSizeFromOLSize:function(olSize){return new YSize(olSize.w,olSize.h);},CLASS_NAME:"OpenLayers.Layer.Yahoo"});OpenLayers.Style=OpenLayers.Class({name:null,title:null,description:null,layerName:null,isDefault:false,rules:null,context:null,defaultStyle:null,propertyStyles:null,initialize:function(style,options){this.rules=[];this.setDefaultStyle(style||OpenLayers.Feature.Vector.style["default"]);OpenLayers.Util.extend(this,options);},destroy:function(){for(var i=0;i<this.rules.length;i++){this.rules[i].destroy();this.rules[i]=null;}
this.rules=null;this.defaultStyle=null;},createSymbolizer:function(feature){var style=this.createLiterals(OpenLayers.Util.extend({},this.defaultStyle),feature);var rules=this.rules;var rule,context;var elseRules=[];var appliedRules=false;for(var i=0;i<rules.length;i++){rule=rules[i];var applies=rule.evaluate(feature);if(applies){if(rule instanceof OpenLayers.Rule&&rule.elseFilter){elseRules.push(rule);}else{appliedRules=true;this.applySymbolizer(rule,style,feature);}}}
if(appliedRules==false&&elseRules.length>0){appliedRules=true;for(var i=0;i<elseRules.length;i++){this.applySymbolizer(elseRules[i],style,feature);}}
if(rules.length>0&&appliedRules==false){style.display="none";}else{style.display="";}
return style;},applySymbolizer:function(rule,style,feature){var symbolizerPrefix=feature.geometry?this.getSymbolizerPrefix(feature.geometry):OpenLayers.Style.SYMBOLIZER_PREFIXES[0];var symbolizer=rule.symbolizer[symbolizerPrefix]||rule.symbolizer;return this.createLiterals(OpenLayers.Util.extend(style,symbolizer),feature);},createLiterals:function(style,feature){var context=this.context||feature.attributes||feature.data;for(var i in this.propertyStyles){style[i]=OpenLayers.Style.createLiteral(style[i],context,feature);}
return style;},findPropertyStyles:function(){var propertyStyles={};var style=this.defaultStyle;this.addPropertyStyles(propertyStyles,style);var rules=this.rules;var symbolizer,value;for(var i=0;i<rules.length;i++){var symbolizer=rules[i].symbolizer;for(var key in symbolizer){value=symbolizer[key];if(typeof value=="object"){this.addPropertyStyles(propertyStyles,value);}else{this.addPropertyStyles(propertyStyles,symbolizer);break;}}}
return propertyStyles;},addPropertyStyles:function(propertyStyles,symbolizer){var property;for(var key in symbolizer){property=symbolizer[key];if(typeof property=="string"&&property.match(/\$\{\w+\}/)){propertyStyles[key]=true;}}
return propertyStyles;},addRules:function(rules){this.rules=this.rules.concat(rules);this.propertyStyles=this.findPropertyStyles();},setDefaultStyle:function(style){this.defaultStyle=style;this.propertyStyles=this.findPropertyStyles();},getSymbolizerPrefix:function(geometry){var prefixes=OpenLayers.Style.SYMBOLIZER_PREFIXES;for(var i=0;i<prefixes.length;i++){if(geometry.CLASS_NAME.indexOf(prefixes[i])!=-1){return prefixes[i];}}},CLASS_NAME:"OpenLayers.Style"});OpenLayers.Style.createLiteral=function(value,context,feature){if(typeof value=="string"&&value.indexOf("${")!=-1){value=OpenLayers.String.format(value,context,[feature]);value=(isNaN(value)||!value)?value:parseFloat(value);}
return value;};OpenLayers.Style.SYMBOLIZER_PREFIXES=['Point','Line','Polygon'];OpenLayers.Control.ModifyFeature=OpenLayers.Class(OpenLayers.Control,{geometryTypes:null,clickout:true,toggle:true,layer:null,feature:null,vertices:null,virtualVertices:null,selectControl:null,dragControl:null,handlers:null,deleteCodes:null,virtualStyle:null,mode:null,radiusHandle:null,dragHandle:null,onModificationStart:function(){},onModification:function(){},onModificationEnd:function(){},initialize:function(layer,options){this.layer=layer;this.vertices=[];this.virtualVertices=[];this.virtualStyle=OpenLayers.Util.extend({},this.layer.style||this.layer.styleMap.createSymbolizer());this.virtualStyle.fillOpacity=0.3;this.virtualStyle.strokeOpacity=0.3;this.deleteCodes=[46,100];this.mode=OpenLayers.Control.ModifyFeature.RESHAPE;OpenLayers.Control.prototype.initialize.apply(this,[options]);if(!(this.deleteCodes instanceof Array)){this.deleteCodes=[this.deleteCodes];}
var control=this;var selectOptions={geometryTypes:this.geometryTypes,clickout:this.clickout,toggle:this.toggle};this.selectControl=new OpenLayers.Control.SelectFeature(layer,selectOptions);this.layer.events.on({"featureselected":this.selectFeature,"featureunselected":this.unselectFeature,scope:this});var dragOptions={geometryTypes:["OpenLayers.Geometry.Point"],snappingOptions:this.snappingOptions,onStart:function(feature,pixel){control.dragStart.apply(control,[feature,pixel]);},onDrag:function(feature){control.dragVertex.apply(control,[feature]);},onComplete:function(feature){control.dragComplete.apply(control,[feature]);}};this.dragControl=new OpenLayers.Control.DragFeature(layer,dragOptions);var keyboardOptions={keypress:this.handleKeypress};this.handlers={keyboard:new OpenLayers.Handler.Keyboard(this,keyboardOptions)};},destroy:function(){this.layer.events.un({"featureselected":this.selectFeature,"featureunselected":this.unselectFeature,scope:this});this.layer=null;this.selectControl.destroy();this.dragControl.destroy();OpenLayers.Control.prototype.destroy.apply(this,[]);},activate:function(){return(this.selectControl.activate()&&this.handlers.keyboard.activate()&&OpenLayers.Control.prototype.activate.apply(this,arguments));},deactivate:function(){var deactivated=false;if(OpenLayers.Control.prototype.deactivate.apply(this,arguments)){this.layer.removeFeatures(this.vertices);this.layer.removeFeatures(this.virtualVertices);this.vertices=[];this.dragControl.deactivate();if(this.feature&&this.feature.geometry){this.selectControl.unselect.apply(this.selectControl,[this.feature]);}
this.selectControl.deactivate();this.handlers.keyboard.deactivate();deactivated=true;}
return deactivated;},selectFeature:function(object){this.feature=object.feature;this.resetVertices();this.dragControl.activate();this.onModificationStart(this.feature);this.layer.events.triggerEvent("beforefeaturemodified",{feature:this.feature});},unselectFeature:function(object){this.layer.removeFeatures(this.vertices);this.vertices=[];this.layer.destroyFeatures(this.virtualVertices);this.virtualVertices=[];if(this.dragHandle){this.layer.destroyFeatures([this.dragHandle]);delete this.dragHandle;}
if(this.radiusHandle){this.layer.destroyFeatures([this.radiusHandle]);delete this.radiusHandle;}
this.feature=null;this.dragControl.deactivate();this.onModificationEnd(object.feature);this.layer.events.triggerEvent("afterfeaturemodified",{feature:object.feature});},dragStart:function(feature,pixel){if(feature!=this.feature&&!feature.geometry.parent&&feature!=this.dragHandle&&feature!=this.radiusHandle){if(this.feature){this.selectControl.clickFeature.apply(this.selectControl,[this.feature]);}
if(this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,feature.geometry.CLASS_NAME)!=-1){this.selectControl.clickFeature.apply(this.selectControl,[feature]);this.dragControl.overFeature.apply(this.dragControl,[feature]);this.dragControl.lastPixel=pixel;this.dragControl.handlers.drag.started=true;this.dragControl.handlers.drag.start=pixel;this.dragControl.handlers.drag.last=pixel;}}},dragVertex:function(vertex){if(this.feature.geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){if(this.feature!=vertex){this.feature=vertex;}}else{if(vertex._index){vertex.geometry.parent.addComponent(vertex.geometry,vertex._index);delete vertex._index;OpenLayers.Util.removeItem(this.virtualVertices,vertex);this.vertices.push(vertex);}else if(vertex==this.dragHandle){this.layer.removeFeatures(this.vertices);this.vertices=[];if(this.radiusHandle){this.layer.destroyFeatures([this.radiusHandle]);this.radiusHandle=null;}}
if(this.virtualVertices.length>0){this.layer.destroyFeatures(this.virtualVertices);this.virtualVertices=[];}
this.layer.drawFeature(this.feature,this.selectControl.renderIntent);}
this.layer.drawFeature(vertex);},dragComplete:function(vertex){this.resetVertices();this.onModification(this.feature);this.layer.events.triggerEvent("featuremodified",{feature:this.feature});},resetVertices:function(){if(this.dragControl.feature){this.dragControl.outFeature(this.dragControl.feature);}
if(this.vertices.length>0){this.layer.removeFeatures(this.vertices);this.vertices=[];}
if(this.virtualVertices.length>0){this.layer.removeFeatures(this.virtualVertices);this.virtualVertices=[];}
if(this.dragHandle){this.layer.destroyFeatures([this.dragHandle]);this.dragHandle=null;}
if(this.radiusHandle){this.layer.destroyFeatures([this.radiusHandle]);this.radiusHandle=null;}
if(this.feature&&this.feature.geometry.CLASS_NAME!="OpenLayers.Geometry.Point"){if((this.mode&OpenLayers.Control.ModifyFeature.DRAG)){this.collectDragHandle();}
if((this.mode&(OpenLayers.Control.ModifyFeature.ROTATE|OpenLayers.Control.ModifyFeature.RESIZE))){this.collectRadiusHandle();}
if((this.mode&OpenLayers.Control.ModifyFeature.RESHAPE)){this.collectVertices();}}},handleKeypress:function(code){if(this.feature&&OpenLayers.Util.indexOf(this.deleteCodes,code)!=-1){var vertex=this.dragControl.feature;if(vertex&&OpenLayers.Util.indexOf(this.vertices,vertex)!=-1&&!this.dragControl.handlers.drag.dragging&&vertex.geometry.parent){vertex.geometry.parent.removeComponent(vertex.geometry);this.layer.drawFeature(this.feature,this.selectControl.renderIntent);this.resetVertices();this.onModification(this.feature);this.layer.events.triggerEvent("featuremodified",{feature:this.feature});}}},collectVertices:function(){this.vertices=[];this.virtualVertices=[];var control=this;function collectComponentVertices(geometry){var i,vertex,component;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){vertex=new OpenLayers.Feature.Vector(geometry);control.vertices.push(vertex);}else{var numVert=geometry.components.length;if(geometry.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){numVert-=1;}
for(i=0;i<numVert;++i){component=geometry.components[i];if(component.CLASS_NAME=="OpenLayers.Geometry.Point"){vertex=new OpenLayers.Feature.Vector(component);control.vertices.push(vertex);}else{collectComponentVertices(component);}}
if(geometry.CLASS_NAME!="OpenLayers.Geometry.MultiPoint"){for(i=0;i<geometry.components.length-1;++i){var prevVertex=geometry.components[i];var nextVertex=geometry.components[i+1];if(prevVertex.CLASS_NAME=="OpenLayers.Geometry.Point"&&nextVertex.CLASS_NAME=="OpenLayers.Geometry.Point"){var x=(prevVertex.x+nextVertex.x)/2;var y=(prevVertex.y+nextVertex.y)/2;var point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(x,y),null,control.virtualStyle);point.geometry.parent=geometry;point._index=i+1;control.virtualVertices.push(point);}}}}}
collectComponentVertices.call(this,this.feature.geometry);this.layer.addFeatures(this.vertices,{silent:true});this.layer.addFeatures(this.virtualVertices,{silent:true});},collectDragHandle:function(){var geometry=this.feature.geometry;var center=geometry.getBounds().getCenterLonLat();var originGeometry=new OpenLayers.Geometry.Point(center.lon,center.lat);var origin=new OpenLayers.Feature.Vector(originGeometry);originGeometry.move=function(x,y){OpenLayers.Geometry.Point.prototype.move.call(this,x,y);geometry.move(x,y);};this.dragHandle=origin;this.layer.addFeatures([this.dragHandle],{silent:true});},collectRadiusHandle:function(){var geometry=this.feature.geometry;var bounds=geometry.getBounds();var center=bounds.getCenterLonLat();var originGeometry=new OpenLayers.Geometry.Point(center.lon,center.lat);var radiusGeometry=new OpenLayers.Geometry.Point(bounds.right,bounds.bottom);var radius=new OpenLayers.Feature.Vector(radiusGeometry);var resize=(this.mode&OpenLayers.Control.ModifyFeature.RESIZE);var rotate=(this.mode&OpenLayers.Control.ModifyFeature.ROTATE);radiusGeometry.move=function(x,y){OpenLayers.Geometry.Point.prototype.move.call(this,x,y);var dx1=this.x-originGeometry.x;var dy1=this.y-originGeometry.y;var dx0=dx1-x;var dy0=dy1-y;if(rotate){var a0=Math.atan2(dy0,dx0);var a1=Math.atan2(dy1,dx1);var angle=a1-a0;angle*=180/Math.PI;geometry.rotate(angle,originGeometry);}
if(resize){var l0=Math.sqrt((dx0*dx0)+(dy0*dy0));var l1=Math.sqrt((dx1*dx1)+(dy1*dy1));geometry.resize(l1/l0,originGeometry);}};this.radiusHandle=radius;this.layer.addFeatures([this.radiusHandle],{silent:true});},setMap:function(map){this.selectControl.setMap(map);this.dragControl.setMap(map);OpenLayers.Control.prototype.setMap.apply(this,arguments);},CLASS_NAME:"OpenLayers.Control.ModifyFeature"});OpenLayers.Control.ModifyFeature.RESHAPE=1;OpenLayers.Control.ModifyFeature.RESIZE=2;OpenLayers.Control.ModifyFeature.ROTATE=4;OpenLayers.Control.ModifyFeature.DRAG=8;OpenLayers.Control.Navigation=OpenLayers.Class(OpenLayers.Control,{dragPan:null,zoomBox:null,zoomWheelEnabled:true,initialize:function(options){this.handlers={};OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){this.deactivate();if(this.dragPan){this.dragPan.destroy();}
this.dragPan=null;if(this.zoomBox){this.zoomBox.destroy();}
this.zoomBox=null;OpenLayers.Control.prototype.destroy.apply(this,arguments);},activate:function(){this.dragPan.activate();if(this.zoomWheelEnabled){this.handlers.wheel.activate();}
this.handlers.click.activate();this.zoomBox.activate();return OpenLayers.Control.prototype.activate.apply(this,arguments);},deactivate:function(){this.zoomBox.deactivate();this.dragPan.deactivate();this.handlers.click.deactivate();this.handlers.wheel.deactivate();return OpenLayers.Control.prototype.deactivate.apply(this,arguments);},draw:function(){this.handlers.click=new OpenLayers.Handler.Click(this,{'dblclick':this.defaultDblClick},{'double':true,'stopDouble':true});this.dragPan=new OpenLayers.Control.DragPan({map:this.map});this.zoomBox=new OpenLayers.Control.ZoomBox({map:this.map,keyMask:OpenLayers.Handler.MOD_SHIFT});this.dragPan.draw();this.zoomBox.draw();this.handlers.wheel=new OpenLayers.Handler.MouseWheel(this,{"up":this.wheelUp,"down":this.wheelDown});this.activate();},defaultDblClick:function(evt){var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom+1);},wheelChange:function(evt,deltaZ){var newZoom=this.map.getZoom()+deltaZ;if(!this.map.isValidZoomLevel(newZoom)){return;}
var size=this.map.getSize();var deltaX=size.w/2-evt.xy.x;var deltaY=evt.xy.y-size.h/2;var newRes=this.map.baseLayer.getResolutionForZoom(newZoom);var zoomPoint=this.map.getLonLatFromPixel(evt.xy);var newCenter=new OpenLayers.LonLat(zoomPoint.lon+deltaX*newRes,zoomPoint.lat+deltaY*newRes);this.map.setCenter(newCenter,newZoom);},wheelUp:function(evt){this.wheelChange(evt,1);},wheelDown:function(evt){this.wheelChange(evt,-1);},disableZoomWheel:function(){this.zoomWheelEnabled=false;this.handlers.wheel.deactivate();},enableZoomWheel:function(){this.zoomWheelEnabled=true;if(this.active){this.handlers.wheel.activate();}},CLASS_NAME:"OpenLayers.Control.Navigation"});OpenLayers.Filter=OpenLayers.Class({initialize:function(options){OpenLayers.Util.extend(this,options);},destroy:function(){},evaluate:function(context){return true;},CLASS_NAME:"OpenLayers.Filter"});OpenLayers.Geometry=OpenLayers.Class({id:null,parent:null,bounds:null,initialize:function(){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){this.id=null;this.bounds=null;},clone:function(){return new OpenLayers.Geometry();},setBounds:function(bounds){if(bounds){this.bounds=bounds.clone();}},clearBounds:function(){this.bounds=null;if(this.parent){this.parent.clearBounds();}},extendBounds:function(newBounds){var bounds=this.getBounds();if(!bounds){this.setBounds(newBounds);}else{this.bounds.extend(newBounds);}},getBounds:function(){if(this.bounds==null){this.calculateBounds();}
return this.bounds;},calculateBounds:function(){},atPoint:function(lonlat,toleranceLon,toleranceLat){var atPoint=false;var bounds=this.getBounds();if((bounds!=null)&&(lonlat!=null)){var dX=(toleranceLon!=null)?toleranceLon:0;var dY=(toleranceLat!=null)?toleranceLat:0;var toleranceBounds=new OpenLayers.Bounds(this.bounds.left-dX,this.bounds.bottom-dY,this.bounds.right+dX,this.bounds.top+dY);atPoint=toleranceBounds.containsLonLat(lonlat);}
return atPoint;},getLength:function(){return 0.0;},getArea:function(){return 0.0;},toString:function(){return OpenLayers.Format.WKT.prototype.write(new OpenLayers.Feature.Vector(this));},CLASS_NAME:"OpenLayers.Geometry"});OpenLayers.Geometry.segmentsIntersect=function(seg1,seg2,point){var intersection=false;var x11_21=seg1.x1-seg2.x1;var y11_21=seg1.y1-seg2.y1;var x12_11=seg1.x2-seg1.x1;var y12_11=seg1.y2-seg1.y1;var y22_21=seg2.y2-seg2.y1;var x22_21=seg2.x2-seg2.x1;var d=(y22_21*x12_11)-(x22_21*y12_11);var n1=(x22_21*y11_21)-(y22_21*x11_21);var n2=(x12_11*y11_21)-(y12_11*x11_21);if(d==0){if(n1==0&&n2==0){intersection=true;}}else{var along1=n1/d;var along2=n2/d;if(along1>=0&&along1<=1&&along2>=0&&along2<=1){if(!point){intersection=true;}else{var x=seg1.x1+(along1*x12_11);var y=seg1.y1+(along1*y12_11);intersection=new OpenLayers.Geometry.Point(x,y);}}}
return intersection;};OpenLayers.Layer.KaMap=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,units:null,resolution:OpenLayers.DOTS_PER_INCH,DEFAULT_PARAMS:{i:'jpeg',map:''},initialize:function(name,url,params,options){var newArguments=[];newArguments.push(name,url,params,options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);this.params=(params?params:{});if(params){OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS);}},getURL:function(bounds){bounds=this.adjustBounds(bounds);var mapRes=this.map.getResolution();var scale=Math.round((this.map.getScale()*10000))/10000;var pX=Math.round(bounds.left/mapRes);var pY=-Math.round(bounds.top/mapRes);return this.getFullRequestString({t:pY,l:pX,s:scale});},addTile:function(bounds,position){var url=this.getURL(bounds);return new OpenLayers.Tile.Image(this,position,bounds,url,this.tileSize);},calculateGridLayout:function(bounds,extent,resolution){var tilelon=resolution*this.tileSize.w;var tilelat=resolution*this.tileSize.h;var offsetlon=bounds.left;var tilecol=Math.floor(offsetlon/tilelon)-this.buffer;var tilecolremain=offsetlon/tilelon-tilecol;var tileoffsetx=-tilecolremain*this.tileSize.w;var tileoffsetlon=tilecol*tilelon;var offsetlat=bounds.top;var tilerow=Math.ceil(offsetlat/tilelat)+this.buffer;var tilerowremain=tilerow-offsetlat/tilelat;var tileoffsety=-(tilerowremain+1)*this.tileSize.h;var tileoffsetlat=tilerow*tilelat;return{tilelon:tilelon,tilelat:tilelat,tileoffsetlon:tileoffsetlon,tileoffsetlat:tileoffsetlat,tileoffsetx:tileoffsetx,tileoffsety:tileoffsety};},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.KaMap(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);if(this.tileSize!=null){obj.tileSize=this.tileSize.clone();}
obj.grid=[];return obj;},getTileBounds:function(viewPortPx){var resolution=this.getResolution();var tileMapWidth=resolution*this.tileSize.w;var tileMapHeight=resolution*this.tileSize.h;var mapPoint=this.getLonLatFromViewPortPx(viewPortPx);var tileLeft=tileMapWidth*Math.floor(mapPoint.lon/tileMapWidth);var tileBottom=tileMapHeight*Math.floor(mapPoint.lat/tileMapHeight);return new OpenLayers.Bounds(tileLeft,tileBottom,tileLeft+tileMapWidth,tileBottom+tileMapHeight);},CLASS_NAME:"OpenLayers.Layer.KaMap"});OpenLayers.Layer.MapGuide=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,singleTile:false,TILE_PARAMS:{operation:'GETTILEIMAGE',version:'1.2.0'},SINGLE_TILE_PARAMS:{operation:'GETMAPIMAGE',format:'PNG',locale:'en',clip:'1',version:'1.0.0'},defaultSize:new OpenLayers.Size(300,300),initialize:function(name,url,params,options){OpenLayers.Layer.Grid.prototype.initialize.apply(this,arguments);if(options==null||options.isBaseLayer==null){this.isBaseLayer=((this.transparent!="true")&&(this.transparent!=true));}
if(this.singleTile){OpenLayers.Util.applyDefaults(this.params,this.SINGLE_TILE_PARAMS);}else{OpenLayers.Util.applyDefaults(this.params,this.TILE_PARAMS);this.setTileSize(this.defaultSize);}},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.MapGuide(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},getURL:function(bounds){var url;var center=bounds.getCenterLonLat();var mapSize=this.map.getCurrentSize();if(this.singleTile){var params={};params.setdisplaydpi=OpenLayers.DOTS_PER_INCH;params.setdisplayheight=mapSize.h*this.ratio;params.setdisplaywidth=mapSize.w*this.ratio;params.setviewcenterx=center.lon;params.setviewcentery=center.lat;params.setviewscale=this.map.getScale();if(!this.isBaseLayer){this.params.operation="GETDYNAMICMAPOVERLAYIMAGE";var getVisParams={};getVisParams.operation="GETVISIBLEMAPEXTENT";getVisParams.version="1.0.0";getVisParams.session=this.params.session;getVisParams.mapName=this.params.mapName;getVisParams.format='text/xml';getVisParams=OpenLayers.Util.extend(getVisParams,params);new OpenLayers.Ajax.Request(this.url,{parameters:getVisParams,method:'get',asynchronous:false});}
url=this.getFullRequestString(params);}else{var currentRes=this.map.getResolution();var colidx=Math.floor((bounds.left-this.maxExtent.left)/currentRes);colidx=Math.round(colidx/this.tileSize.w);var rowidx=Math.floor((this.maxExtent.top-bounds.top)/currentRes);rowidx=Math.round(rowidx/this.tileSize.h);url=this.getFullRequestString({tilecol:colidx,tilerow:rowidx,scaleindex:this.resolutions.length-this.map.zoom-1});}
return url;},getFullRequestString:function(newParams,altUrl){var url=(altUrl==null)?this.url:altUrl;if(typeof url=="object"){url=url[Math.floor(Math.random()*url.length)];}
var requestString=url;var allParams=OpenLayers.Util.extend({},this.params);allParams=OpenLayers.Util.extend(allParams,newParams);var urlParams=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getArgs(url));for(var key in allParams){if(key.toUpperCase()in urlParams){delete allParams[key];}}
var paramsString=OpenLayers.Util.getParameterString(allParams);paramsString=paramsString.replace(/,/g,"+");if(paramsString!=""){var lastServerChar=url.charAt(url.length-1);if((lastServerChar=="&")||(lastServerChar=="?")){requestString+=paramsString;}else{if(url.indexOf('?')==-1){requestString+='?'+paramsString;}else{requestString+='&'+paramsString;}}}
return requestString;},calculateGridLayout:function(bounds,extent,resolution){var tilelon=resolution*this.tileSize.w;var tilelat=resolution*this.tileSize.h;var offsetlon=bounds.left-extent.left;var tilecol=Math.floor(offsetlon/tilelon)-this.buffer;var tilecolremain=offsetlon/tilelon-tilecol;var tileoffsetx=-tilecolremain*this.tileSize.w;var tileoffsetlon=extent.left+tilecol*tilelon;var offsetlat=extent.top-bounds.top+tilelat;var tilerow=Math.floor(offsetlat/tilelat)-this.buffer;var tilerowremain=tilerow-offsetlat/tilelat;var tileoffsety=tilerowremain*this.tileSize.h;var tileoffsetlat=extent.top-tilelat*tilerow;return{tilelon:tilelon,tilelat:tilelat,tileoffsetlon:tileoffsetlon,tileoffsetlat:tileoffsetlat,tileoffsetx:tileoffsetx,tileoffsety:tileoffsety};},CLASS_NAME:"OpenLayers.Layer.MapGuide"});OpenLayers.Layer.MapServer=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{mode:"map",map_imagetype:"png"},initialize:function(name,url,params,options){var newArguments=[];newArguments.push(name,url,params,options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);if(arguments.length>0){OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS);}
if(options==null||options.isBaseLayer==null){this.isBaseLayer=((this.params.transparent!="true")&&(this.params.transparent!=true));}},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.MapServer(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},getURL:function(bounds){bounds=this.adjustBounds(bounds);var extent=[bounds.left,bounds.bottom,bounds.right,bounds.top];var imageSize=this.getImageSize();var url=this.getFullRequestString({mapext:extent,imgext:extent,map_size:[imageSize.w,imageSize.h],imgx:imageSize.w/2,imgy:imageSize.h/2,imgxy:[imageSize.w,imageSize.h]});return url;},getFullRequestString:function(newParams,altUrl){var url=(altUrl==null)?this.url:altUrl;var allParams=OpenLayers.Util.extend({},this.params);allParams=OpenLayers.Util.extend(allParams,newParams);var paramsString=OpenLayers.Util.getParameterString(allParams);if(url instanceof Array){url=this.selectUrl(paramsString,url);}
var urlParams=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));for(var key in allParams){if(key.toUpperCase()in urlParams){delete allParams[key];}}
paramsString=OpenLayers.Util.getParameterString(allParams);var requestString=url;paramsString=paramsString.replace(/,/g,"+");if(paramsString!=""){var lastServerChar=url.charAt(url.length-1);if((lastServerChar=="&")||(lastServerChar=="?")){requestString+=paramsString;}else{if(url.indexOf('?')==-1){requestString+='?'+paramsString;}else{requestString+='&'+paramsString;}}}
return requestString;},CLASS_NAME:"OpenLayers.Layer.MapServer"});OpenLayers.Layer.TMS=OpenLayers.Class(OpenLayers.Layer.Grid,{serviceVersion:"1.0.0",isBaseLayer:true,tileOrigin:null,initialize:function(name,url,options){var newArguments=[];newArguments.push(name,url,{},options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);},destroy:function(){OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.TMS(this.name,this.url,this.options);}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){bounds=this.adjustBounds(bounds);var res=this.map.getResolution();var x=Math.round((bounds.left-this.tileOrigin.lon)/(res*this.tileSize.w));var y=Math.round((bounds.bottom-this.tileOrigin.lat)/(res*this.tileSize.h));var z=this.map.getZoom();var path=this.serviceVersion+"/"+this.layername+"/"+z+"/"+x+"/"+y+"."+this.type;var url=this.url;if(url instanceof Array){url=this.selectUrl(path,url);}
return url+path;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},setMap:function(map){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);if(!this.tileOrigin){this.tileOrigin=new OpenLayers.LonLat(this.map.maxExtent.left,this.map.maxExtent.bottom);}},CLASS_NAME:"OpenLayers.Layer.TMS"});OpenLayers.Layer.TileCache=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,tileOrigin:null,format:'image/png',initialize:function(name,url,layername,options){this.layername=layername;OpenLayers.Layer.Grid.prototype.initialize.apply(this,[name,url,{},options]);this.extension=this.format.split('/')[1].toLowerCase();this.extension=(this.extension=='jpg')?'jpeg':this.extension;},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.TileCache(this.name,this.url,this.layername,this.options);}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){var res=this.map.getResolution();var bbox=this.maxExtent;var size=this.tileSize;var tileX=Math.round((bounds.left-bbox.left)/(res*size.w));var tileY=Math.round((bounds.bottom-bbox.bottom)/(res*size.h));var tileZ=this.map.zoom;function zeroPad(number,length){number=String(number);var zeros=[];for(var i=0;i<length;++i){zeros.push('0');}
return zeros.join('').substring(0,length-number.length)+number;}
var components=[this.layername,zeroPad(tileZ,2),zeroPad(parseInt(tileX/1000000),3),zeroPad((parseInt(tileX/1000)%1000),3),zeroPad((parseInt(tileX)%1000),3),zeroPad(parseInt(tileY/1000000),3),zeroPad((parseInt(tileY/1000)%1000),3),zeroPad((parseInt(tileY)%1000),3)+'.'+this.extension];var path=components.join('/');var url=this.url;if(url instanceof Array){url=this.selectUrl(path,url);}
url=(url.charAt(url.length-1)=='/')?url:url+'/';return url+path;},addTile:function(bounds,position){var url=this.getURL(bounds);return new OpenLayers.Tile.Image(this,position,bounds,url,this.tileSize);},setMap:function(map){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);if(!this.tileOrigin){this.tileOrigin=new OpenLayers.LonLat(this.map.maxExtent.left,this.map.maxExtent.bottom);}},CLASS_NAME:"OpenLayers.Layer.TileCache"});OpenLayers.Layer.WMS=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{service:"WMS",version:"1.1.1",request:"GetMap",styles:"",exceptions:"application/vnd.ogc.se_inimage",format:"image/jpeg"},reproject:false,isBaseLayer:true,encodeBBOX:false,initialize:function(name,url,params,options){var newArguments=[];params=OpenLayers.Util.upperCaseObject(params);newArguments.push(name,url,params,options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);OpenLayers.Util.applyDefaults(this.params,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));if(this.params.TRANSPARENT&&this.params.TRANSPARENT.toString().toLowerCase()=="true"){if((options==null)||(!options.isBaseLayer)){this.isBaseLayer=false;}
if(this.params.FORMAT=="image/jpeg"){this.params.FORMAT=OpenLayers.Util.alphaHack()?"image/gif":"image/png";}}},destroy:function(){OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.WMS(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){bounds=this.adjustBounds(bounds);var imageSize=this.getImageSize();var newParams={'BBOX':this.encodeBBOX?bounds.toBBOX():bounds.toArray(),'WIDTH':imageSize.w,'HEIGHT':imageSize.h};var requestString=this.getFullRequestString(newParams);return requestString;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},mergeNewParams:function(newParams){var upperParams=OpenLayers.Util.upperCaseObject(newParams);var newArguments=[upperParams];return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,newArguments);},getFullRequestString:function(newParams,altUrl){var projectionCode=this.map.getProjection();this.params.SRS=(projectionCode=="none")?null:projectionCode;return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this,arguments);},CLASS_NAME:"OpenLayers.Layer.WMS"});OpenLayers.Layer.WorldWind=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{},isBaseLayer:true,lzd:null,zoomLevels:null,initialize:function(name,url,lzd,zoomLevels,params,options){this.lzd=lzd;this.zoomLevels=zoomLevels;var newArguments=[];newArguments.push(name,url,params,options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);this.params=(params?params:{});if(params){OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS);}},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},getZoom:function(){var zoom=this.map.getZoom();var extent=this.map.getMaxExtent();zoom=zoom-Math.log(this.maxResolution/(this.lzd/512))/Math.log(2);return zoom;},getURL:function(bounds){bounds=this.adjustBounds(bounds);var zoom=this.getZoom();var extent=this.map.getMaxExtent();var deg=this.lzd/Math.pow(2,this.getZoom());var x=Math.floor((bounds.left-extent.left)/deg);var y=Math.floor((bounds.bottom-extent.bottom)/deg);if(this.map.getResolution()<=(this.lzd/512)&&this.getZoom()<=this.zoomLevels){return this.getFullRequestString({L:zoom,X:x,Y:y});}else{return OpenLayers.Util.getImagesLocation()+"blank.gif";}},CLASS_NAME:"OpenLayers.Layer.WorldWind"});OpenLayers.Rule=OpenLayers.Class({id:null,name:'default',title:null,description:null,context:null,filter:null,elseFilter:false,symbolizer:null,minScaleDenominator:null,maxScaleDenominator:null,initialize:function(options){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");this.symbolizer={};OpenLayers.Util.extend(this,options);},destroy:function(){for(var i in this.symbolizer){this.symbolizer[i]=null;}
this.symbolizer=null;},evaluate:function(feature){var context=this.getContext(feature);var applies=true;if(this.minScaleDenominator||this.maxScaleDenominator){var scale=feature.layer.map.getScale();}
if(this.minScaleDenominator){applies=scale>=OpenLayers.Style.createLiteral(this.minScaleDenominator,context);}
if(applies&&this.maxScaleDenominator){applies=scale<OpenLayers.Style.createLiteral(this.maxScaleDenominator,context);}
if(applies&&this.filter){if(this.filter.CLASS_NAME=="OpenLayers.Filter.FeatureId"){applies=this.filter.evaluate(feature);}else{applies=this.filter.evaluate(context);}}
return applies;},getContext:function(feature){var context=this.context;if(!context){context=feature.attributes||feature.data;}
return context;},CLASS_NAME:"OpenLayers.Rule"});OpenLayers.StyleMap=OpenLayers.Class({styles:null,extendDefault:true,initialize:function(style,options){this.styles={"default":new OpenLayers.Style(OpenLayers.Feature.Vector.style["default"]),"select":new OpenLayers.Style(OpenLayers.Feature.Vector.style["select"]),"temporary":new OpenLayers.Style(OpenLayers.Feature.Vector.style["temporary"])};if(style instanceof OpenLayers.Style){this.styles["default"]=style;this.styles["select"]=style;this.styles["temporary"]=style;}else if(typeof style=="object"){for(var key in style){if(style[key]instanceof OpenLayers.Style){this.styles[key]=style[key];}else if(typeof style[key]=="object"){this.styles[key]=new OpenLayers.Style(style[key]);}else{this.styles["default"]=new OpenLayers.Style(style);this.styles["select"]=new OpenLayers.Style(style);this.styles["temporary"]=new OpenLayers.Style(style);break;}}}
OpenLayers.Util.extend(this,options);},destroy:function(){for(var key in this.styles){this.styles[key].destroy();}
this.styles=null;},createSymbolizer:function(feature,intent){if(!feature){feature=new OpenLayers.Feature.Vector();}
if(!this.styles[intent]){intent="default";}
feature.renderIntent=intent;var defaultSymbolizer={};if(this.extendDefault&&intent!="default"){defaultSymbolizer=this.styles["default"].createSymbolizer(feature);}
return OpenLayers.Util.extend(defaultSymbolizer,this.styles[intent].createSymbolizer(feature));},addUniqueValueRules:function(renderIntent,property,symbolizers){var rules=[];for(var value in symbolizers){rules.push(new OpenLayers.Rule({symbolizer:symbolizers[value],filter:new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,property:property,value:value})}));}
this.styles[renderIntent].addRules(rules);},CLASS_NAME:"OpenLayers.StyleMap"});OpenLayers.Control.NavToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(options){OpenLayers.Control.Panel.prototype.initialize.apply(this,[options]);this.addControls([new OpenLayers.Control.Navigation(),new OpenLayers.Control.ZoomBox()]);},draw:function(){var div=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);this.activateControl(this.controls[0]);return div;},CLASS_NAME:"OpenLayers.Control.NavToolbar"});OpenLayers.Filter.Comparison=OpenLayers.Class(OpenLayers.Filter,{type:null,property:null,value:null,lowerBoundary:null,upperBoundary:null,initialize:function(options){OpenLayers.Filter.prototype.initialize.apply(this,[options]);},evaluate:function(context){switch(this.type){case OpenLayers.Filter.Comparison.EQUAL_TO:case OpenLayers.Filter.Comparison.LESS_THAN:case OpenLayers.Filter.Comparison.GREATER_THAN:case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO:case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO:return this.binaryCompare(context,this.property,this.value);case OpenLayers.Filter.Comparison.BETWEEN:var result=context[this.property]>=this.lowerBoundary;result=result&&context[this.property]<=this.upperBoundary;return result;case OpenLayers.Filter.Comparison.LIKE:var regexp=new RegExp(this.value,"gi");return regexp.test(context[this.property]);}},value2regex:function(wildCard,singleChar,escapeChar){if(wildCard=="."){var msg="'.' is an unsupported wildCard character for "+"OpenLayers.Filter.Comparison";OpenLayers.Console.error(msg);return null;}
wildCard=wildCard?wildCard:"*";singleChar=singleChar?singleChar:".";escapeChar=escapeChar?escapeChar:"!";this.value=this.value.replace(new RegExp("\\"+escapeChar,"g"),"\\");this.value=this.value.replace(new RegExp("\\"+singleChar,"g"),".");this.value=this.value.replace(new RegExp("\\"+wildCard,"g"),".*");this.value=this.value.replace(new RegExp("\\\\.\\*","g"),"\\"+wildCard);this.value=this.value.replace(new RegExp("\\\\\\.","g"),"\\"+singleChar);return this.value;},regex2value:function(){var value=this.value;value=value.replace(/!/g,"!!");value=value.replace(/(\\)?\\\./g,function($0,$1){return $1?$0:"!.";});value=value.replace(/(\\)?\\\*/g,function($0,$1){return $1?$0:"!*";});value=value.replace(/\\\\/g,"\\");value=value.replace(/\.\*/g,"*");return value;},binaryCompare:function(context,property,value){switch(this.type){case OpenLayers.Filter.Comparison.EQUAL_TO:return context[property]==value;case OpenLayers.Filter.Comparison.NOT_EQUAL_TO:return context[property]!=value;case OpenLayers.Filter.Comparison.LESS_THAN:return context[property]<value;case OpenLayers.Filter.Comparison.GREATER_THAN:return context[property]>value;case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO:return context[property]<=value;case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO:return context[property]>=value;}},CLASS_NAME:"OpenLayers.Filter.Comparison"});OpenLayers.Filter.Comparison.EQUAL_TO="==";OpenLayers.Filter.Comparison.NOT_EQUAL_TO="!=";OpenLayers.Filter.Comparison.LESS_THAN="<";OpenLayers.Filter.Comparison.GREATER_THAN=">";OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO="<=";OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO=">=";OpenLayers.Filter.Comparison.BETWEEN="..";OpenLayers.Filter.Comparison.LIKE="~";OpenLayers.Filter.FeatureId=OpenLayers.Class(OpenLayers.Filter,{fids:null,initialize:function(options){this.fids=[];OpenLayers.Filter.prototype.initialize.apply(this,[options]);},evaluate:function(feature){for(var i=0;i<this.fids.length;i++){var fid=feature.fid||feature.id;if(fid==this.fids[i]){return true;}}
return false;},CLASS_NAME:"OpenLayers.Filter.FeatureId"});OpenLayers.Filter.Logical=OpenLayers.Class(OpenLayers.Filter,{filters:null,type:null,initialize:function(options){this.filters=[];OpenLayers.Filter.prototype.initialize.apply(this,[options]);},destroy:function(){this.filters=null;OpenLayers.Filter.prototype.destroy.apply(this);},evaluate:function(context){switch(this.type){case OpenLayers.Filter.Logical.AND:for(var i=0;i<this.filters.length;i++){if(this.filters[i].evaluate(context)==false){return false;}}
return true;case OpenLayers.Filter.Logical.OR:for(var i=0;i<this.filters.length;i++){if(this.filters[i].evaluate(context)==true){return true;}}
return false;case OpenLayers.Filter.Logical.NOT:return(!this.filters[0].evaluate(context));}},CLASS_NAME:"OpenLayers.Filter.Logical"});OpenLayers.Filter.Logical.AND="&&";OpenLayers.Filter.Logical.OR="||";OpenLayers.Filter.Logical.NOT="!";OpenLayers.Geometry.Collection=OpenLayers.Class(OpenLayers.Geometry,{components:null,componentTypes:null,initialize:function(components){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.components=[];if(components!=null){this.addComponents(components);}},destroy:function(){this.components.length=0;this.components=null;},clone:function(){var geometry=eval("new "+this.CLASS_NAME+"()");for(var i=0;i<this.components.length;i++){geometry.addComponent(this.components[i].clone());}
OpenLayers.Util.applyDefaults(geometry,this);return geometry;},getComponentsString:function(){var strings=[];for(var i=0;i<this.components.length;i++){strings.push(this.components[i].toShortString());}
return strings.join(",");},calculateBounds:function(){this.bounds=null;if(this.components&&this.components.length>0){this.setBounds(this.components[0].getBounds());for(var i=1;i<this.components.length;i++){this.extendBounds(this.components[i].getBounds());}}},addComponents:function(components){if(!(components instanceof Array)){components=[components];}
for(var i=0;i<components.length;i++){this.addComponent(components[i]);}},addComponent:function(component,index){var added=false;if(component){if(this.componentTypes==null||(OpenLayers.Util.indexOf(this.componentTypes,component.CLASS_NAME)>-1)){if(index!=null&&(index<this.components.length)){var components1=this.components.slice(0,index);var components2=this.components.slice(index,this.components.length);components1.push(component);this.components=components1.concat(components2);}else{this.components.push(component);}
component.parent=this;this.clearBounds();added=true;}}
return added;},removeComponents:function(components){if(!(components instanceof Array)){components=[components];}
for(var i=components.length-1;i>=0;--i){this.removeComponent(components[i]);}},removeComponent:function(component){OpenLayers.Util.removeItem(this.components,component);this.clearBounds();},getLength:function(){var length=0.0;for(var i=0;i<this.components.length;i++){length+=this.components[i].getLength();}
return length;},getArea:function(){var area=0.0;for(var i=0;i<this.components.length;i++){area+=this.components[i].getArea();}
return area;},move:function(x,y){for(var i=0;i<this.components.length;i++){this.components[i].move(x,y);}},rotate:function(angle,origin){for(var i=0;i<this.components.length;++i){this.components[i].rotate(angle,origin);}},resize:function(scale,origin,ratio){for(var i=0;i<this.components.length;++i){this.components[i].resize(scale,origin,ratio);}},equals:function(geometry){var equivalent=true;if(!geometry||!geometry.CLASS_NAME||(this.CLASS_NAME!=geometry.CLASS_NAME)){equivalent=false;}else if(!(geometry.components instanceof Array)||(geometry.components.length!=this.components.length)){equivalent=false;}else{for(var i=0;i<this.components.length;++i){if(!this.components[i].equals(geometry.components[i])){equivalent=false;break;}}}
return equivalent;},transform:function(source,dest){if(source&&dest){for(var i=0;i<this.components.length;i++){var component=this.components[i];component.transform(source,dest);}}
return this;},intersects:function(geometry){var intersect=false;for(var i=0;i<this.components.length;++i){intersect=geometry.intersects(this.components[i]);if(intersect){break;}}
return intersect;},CLASS_NAME:"OpenLayers.Geometry.Collection"});OpenLayers.Geometry.Point=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,initialize:function(x,y){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.x=parseFloat(x);this.y=parseFloat(y);},clone:function(obj){if(obj==null){obj=new OpenLayers.Geometry.Point(this.x,this.y);}
OpenLayers.Util.applyDefaults(obj,this);return obj;},calculateBounds:function(){this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x,this.y);},distanceTo:function(point){var distance=0.0;if((this.x!=null)&&(this.y!=null)&&(point!=null)&&(point.x!=null)&&(point.y!=null)){var dx2=Math.pow(this.x-point.x,2);var dy2=Math.pow(this.y-point.y,2);distance=Math.sqrt(dx2+dy2);}
return distance;},equals:function(geom){var equals=false;if(geom!=null){equals=((this.x==geom.x&&this.y==geom.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(geom.x)&&isNaN(geom.y)));}
return equals;},toShortString:function(){return(this.x+", "+this.y);},move:function(x,y){this.x=this.x+x;this.y=this.y+y;this.clearBounds();},rotate:function(angle,origin){angle*=Math.PI/180;var radius=this.distanceTo(origin);var theta=angle+Math.atan2(this.y-origin.y,this.x-origin.x);this.x=origin.x+(radius*Math.cos(theta));this.y=origin.y+(radius*Math.sin(theta));this.clearBounds();},resize:function(scale,origin,ratio){ratio=(ratio==undefined)?1:ratio;this.x=origin.x+(scale*ratio*(this.x-origin.x));this.y=origin.y+(scale*(this.y-origin.y));this.clearBounds();},intersects:function(geometry){var intersect=false;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.equals(geometry);}else{intersect=geometry.intersects(this);}
return intersect;},transform:function(source,dest){if((source&&dest)){OpenLayers.Projection.transform(this,source,dest);}
return this;},CLASS_NAME:"OpenLayers.Geometry.Point"});OpenLayers.Geometry.Rectangle=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,width:null,height:null,initialize:function(x,y,width,height){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.x=x;this.y=y;this.width=width;this.height=height;},calculateBounds:function(){this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x+this.width,this.y+this.height);},getLength:function(){var length=(2*this.width)+(2*this.height);return length;},getArea:function(){var area=this.width*this.height;return area;},CLASS_NAME:"OpenLayers.Geometry.Rectangle"});OpenLayers.Geometry.Surface=OpenLayers.Class(OpenLayers.Geometry,{initialize:function(){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Geometry.Surface"});OpenLayers.Layer.MapServer.Untiled=OpenLayers.Class(OpenLayers.Layer.MapServer,{singleTile:true,initialize:function(name,url,params,options){OpenLayers.Layer.MapServer.prototype.initialize.apply(this,arguments);var msg="The OpenLayers.Layer.MapServer.Untiled class is deprecated and "+"will be removed in 3.0. Instead, you should use the "+"normal OpenLayers.Layer.MapServer class, passing it the option "+"'singleTile' as true.";OpenLayers.Console.warn(msg);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.MapServer.Untiled(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.MapServer.prototype.clone.apply(this,[obj]);return obj;},CLASS_NAME:"OpenLayers.Layer.MapServer.Untiled"});OpenLayers.Layer.Vector=OpenLayers.Class(OpenLayers.Layer,{EVENT_TYPES:["beforefeatureadded","featureadded","featuresadded","featureselected","featureunselected","beforefeaturemodified","featuremodified","afterfeaturemodified"],isBaseLayer:false,isFixed:false,isVector:true,features:null,selectedFeatures:null,reportError:true,style:null,styleMap:null,renderers:['SVG','VML'],renderer:null,geometryType:null,drawn:false,initialize:function(name,options){this.EVENT_TYPES=OpenLayers.Layer.Vector.prototype.EVENT_TYPES.concat(OpenLayers.Layer.prototype.EVENT_TYPES);OpenLayers.Layer.prototype.initialize.apply(this,arguments);if(!this.renderer||!this.renderer.supported()){this.assignRenderer();}
if(!this.renderer||!this.renderer.supported()){this.renderer=null;this.displayError();}
if(!this.styleMap){this.styleMap=new OpenLayers.StyleMap();}
this.features=[];this.selectedFeatures=[];},destroy:function(){OpenLayers.Layer.prototype.destroy.apply(this,arguments);this.destroyFeatures();this.features=null;this.selectedFeatures=null;if(this.renderer){this.renderer.destroy();}
this.renderer=null;this.geometryType=null;this.drawn=null;},assignRenderer:function(){for(var i=0;i<this.renderers.length;i++){var rendererClass=OpenLayers.Renderer[this.renderers[i]];if(rendererClass&&rendererClass.prototype.supported()){this.renderer=new rendererClass(this.div);break;}}},displayError:function(){if(this.reportError){alert(OpenLayers.i18n("browserNotSupported",{'renderers':this.renderers.join("\n")}));}},setMap:function(map){OpenLayers.Layer.prototype.setMap.apply(this,arguments);if(!this.renderer){this.map.removeLayer(this);}else{this.renderer.map=this.map;this.renderer.setSize(this.map.getSize());}},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize.apply(this,arguments);this.renderer.setSize(this.map.getSize());},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);if(!dragging){this.renderer.root.style.visibility="hidden";if(navigator.userAgent.toLowerCase().indexOf("gecko")!=-1){this.div.scrollLeft=this.div.scrollLeft;}
this.div.style.left=-parseInt(this.map.layerContainerDiv.style.left)+"px";this.div.style.top=-parseInt(this.map.layerContainerDiv.style.top)+"px";var extent=this.map.getExtent();this.renderer.setExtent(extent);this.renderer.root.style.visibility="visible";}
if(!this.drawn||zoomChanged){this.drawn=true;for(var i=0;i<this.features.length;i++){var feature=this.features[i];this.drawFeature(feature);}}},addFeatures:function(features,options){if(!(features instanceof Array)){features=[features];}
var notify=!options||!options.silent;for(var i=0;i<features.length;i++){var feature=features[i];if(this.geometryType&&!(feature.geometry instanceof this.geometryType)){var throwStr=OpenLayers.i18n('componentShouldBe',{'geomType':this.geometryType.prototype.CLASS_NAME});throw throwStr;}
this.features.push(feature);feature.layer=this;if(!feature.style&&this.style){feature.style=OpenLayers.Util.extend({},this.style);}
if(notify){this.events.triggerEvent("beforefeatureadded",{feature:feature});this.preFeatureInsert(feature);}
if(this.drawn){this.drawFeature(feature);}
if(notify){this.events.triggerEvent("featureadded",{feature:feature});this.onFeatureInsert(feature);}}
if(notify){this.events.triggerEvent("featuresadded",{features:features});}},removeFeatures:function(features){if(!(features instanceof Array)){features=[features];}
for(var i=features.length-1;i>=0;i--){var feature=features[i];this.features=OpenLayers.Util.removeItem(this.features,feature);if(feature.geometry){this.renderer.eraseGeometry(feature.geometry);}
if(OpenLayers.Util.indexOf(this.selectedFeatures,feature)!=-1){OpenLayers.Util.removeItem(this.selectedFeatures,feature);}}},destroyFeatures:function(features){var all=(features==undefined);if(all){features=this.features;this.selectedFeatures=[];}
this.eraseFeatures(features);var feature;for(var i=features.length-1;i>=0;i--){feature=features[i];if(!all){OpenLayers.Util.removeItem(this.selectedFeatures,feature);}
feature.destroy();}},drawFeature:function(feature,style){if(typeof style!="object"){var renderIntent=typeof style=="string"?style:feature.renderIntent;style=feature.style||this.style;if(!style){style=this.styleMap.createSymbolizer(feature,renderIntent);}}
this.renderer.drawFeature(feature,style);},eraseFeatures:function(features){this.renderer.eraseFeatures(features);},getFeatureFromEvent:function(evt){if(!this.renderer){OpenLayers.Console.error(OpenLayers.i18n("getFeatureError"));return null;}
var featureId=this.renderer.getFeatureIdFromEvent(evt);return this.getFeatureById(featureId);},getFeatureById:function(featureId){var feature=null;for(var i=0;i<this.features.length;++i){if(this.features[i].id==featureId){feature=this.features[i];break;}}
return feature;},onFeatureInsert:function(feature){},preFeatureInsert:function(feature){},CLASS_NAME:"OpenLayers.Layer.Vector"});OpenLayers.Layer.WMS.Untiled=OpenLayers.Class(OpenLayers.Layer.WMS,{singleTile:true,initialize:function(name,url,params,options){OpenLayers.Layer.WMS.prototype.initialize.apply(this,arguments);var msg="The OpenLayers.Layer.WMS.Untiled class is deprecated and "+"will be removed in 3.0. Instead, you should use the "+"normal OpenLayers.Layer.WMS class, passing it the option "+"'singleTile' as true.";OpenLayers.Console.warn(msg);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.WMS.Untiled(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.WMS.prototype.clone.apply(this,[obj]);return obj;},CLASS_NAME:"OpenLayers.Layer.WMS.Untiled"});OpenLayers.Format.SLD=OpenLayers.Class(OpenLayers.Format.XML,{defaultVersion:"1.0.0",version:null,parser:null,initialize:function(options){OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},write:function(sld,options){var version=(options&&options.version)||this.version||this.defaultVersion;if(!this.parser||this.parser.VERSION!=version){var format=OpenLayers.Format.SLD["v"+version.replace(/\./g,"_")];if(!format){throw"Can't find a SLD parser for version "+
version;}
this.parser=new format(this.options);}
var root=this.parser.write(sld);return OpenLayers.Format.XML.prototype.write.apply(this,[root]);},read:function(data){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
var root=data.documentElement;var version=this.version;if(!version){version=root.getAttribute("version");if(!version){version=this.defaultVersion;}}
if(!this.parser||this.parser.VERSION!=version){var format=OpenLayers.Format.SLD["v"+version.replace(/\./g,"_")];if(!format){throw"Can't find a SLD parser for version "+
version;}
this.parser=new format(this.options);}
var sld=this.parser.read(data);return sld;},CLASS_NAME:"OpenLayers.Format.SLD"});OpenLayers.Format.Text=OpenLayers.Class(OpenLayers.Format,{initialize:function(options){OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(text){var lines=text.split('\n');var columns;var features=[];for(var lcv=0;lcv<(lines.length-1);lcv++){var currLine=lines[lcv].replace(/^\s*/,'').replace(/\s*$/,'');if(currLine.charAt(0)!='#'){if(!columns){columns=currLine.split('\t');}else{var vals=currLine.split('\t');var geometry=new OpenLayers.Geometry.Point(0,0);var attributes={};var style={};var icon,iconSize,iconOffset,overflow;var set=false;for(var valIndex=0;valIndex<vals.length;valIndex++){if(vals[valIndex]){if(columns[valIndex]=='point'){var coords=vals[valIndex].split(',');geometry.y=parseFloat(coords[0]);geometry.x=parseFloat(coords[1]);set=true;}else if(columns[valIndex]=='lat'){geometry.y=parseFloat(vals[valIndex]);set=true;}else if(columns[valIndex]=='lon'){geometry.x=parseFloat(vals[valIndex]);set=true;}else if(columns[valIndex]=='title')
attributes['title']=vals[valIndex];else if(columns[valIndex]=='image'||columns[valIndex]=='icon')
style['externalGraphic']=vals[valIndex];else if(columns[valIndex]=='iconSize'){var size=vals[valIndex].split(',');style['graphicWidth']=parseFloat(size[0]);style['graphicHeight']=parseFloat(size[1]);}else if(columns[valIndex]=='iconOffset'){var offset=vals[valIndex].split(',');style['graphicXOffset']=parseFloat(offset[0]);style['graphicYOffset']=parseFloat(offset[1]);}else if(columns[valIndex]=='description'){attributes['description']=vals[valIndex];}else if(columns[valIndex]=='overflow'){attributes['overflow']=vals[valIndex];}}}
if(set){if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}
var feature=new OpenLayers.Feature.Vector(geometry,attributes,style);features.push(feature);}}}}
return features;},CLASS_NAME:"OpenLayers.Format.Text"});OpenLayers.Geometry.MultiLineString=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LineString"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Geometry.MultiLineString"});OpenLayers.Geometry.MultiPoint=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},addPoint:function(point,index){this.addComponent(point,index);},removePoint:function(point){this.removeComponent(point);},CLASS_NAME:"OpenLayers.Geometry.MultiPoint"});OpenLayers.Geometry.MultiPolygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Polygon"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Geometry.MultiPolygon"});OpenLayers.Geometry.Polygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LinearRing"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},getArea:function(){var area=0.0;if(this.components&&(this.components.length>0)){area+=Math.abs(this.components[0].getArea());for(var i=1;i<this.components.length;i++){area-=Math.abs(this.components[i].getArea());}}
return area;},containsPoint:function(point){var numRings=this.components.length;var contained=false;if(numRings>0){contained=this.components[0].containsPoint(point);if(contained!==1){if(contained&&numRings>1){var hole;for(var i=1;i<numRings;++i){hole=this.components[i].containsPoint(point);if(hole){if(hole===1){contained=1;}else{contained=false;}
break;}}}}}
return contained;},intersects:function(geometry){var intersect=false;var i;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.containsPoint(geometry);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LineString"||geometry.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){for(i=0;i<this.components.length;++i){intersect=geometry.intersects(this.components[i]);if(intersect){break;}}
if(!intersect){for(i=0;i<geometry.components.length;++i){intersect=this.containsPoint(geometry.components[i]);if(intersect){break;}}}}else{for(i=0;i<geometry.components.length;++i){intersect=this.intersects(geometry.components[i]);if(intersect){break;}}}
if(!intersect&&geometry.CLASS_NAME=="OpenLayers.Geometry.Polygon"){var ring=this.components[0];for(i=0;i<ring.components.length;++i){intersect=geometry.containsPoint(ring.components[i]);if(intersect){break;}}}
return intersect;},CLASS_NAME:"OpenLayers.Geometry.Polygon"});OpenLayers.Geometry.Polygon.createRegularPolygon=function(origin,radius,sides,rotation){var angle=Math.PI*((1/sides)-(1/2));if(rotation){angle+=(rotation/180)*Math.PI;}
var rotatedAngle,x,y;var points=[];for(var i=0;i<sides;++i){rotatedAngle=angle+(i*2*Math.PI/sides);x=origin.x+(radius*Math.cos(rotatedAngle));y=origin.y+(radius*Math.sin(rotatedAngle));points.push(new OpenLayers.Geometry.Point(x,y));}
var ring=new OpenLayers.Geometry.LinearRing(points);return new OpenLayers.Geometry.Polygon([ring]);};OpenLayers.Handler.Point=OpenLayers.Class(OpenLayers.Handler,{point:null,layer:null,drawing:false,mouseDown:false,lastDown:null,lastUp:null,initialize:function(control,callbacks,options){this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'],{});OpenLayers.Handler.prototype.initialize.apply(this,arguments);},activate:function(){if(!OpenLayers.Handler.prototype.activate.apply(this,arguments)){return false;}
var options={displayInLayerSwitcher:false,calculateInRange:function(){return true;}};this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,options);this.map.addLayer(this.layer);return true;},createFeature:function(){this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point());},deactivate:function(){if(!OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){return false;}
if(this.drawing){this.cancel();}
if(this.layer.map!=null){this.layer.destroy(false);}
this.layer=null;return true;},destroyFeature:function(){if(this.point){this.point.destroy();}
this.point=null;},finalize:function(){this.layer.renderer.clear();this.drawing=false;this.mouseDown=false;this.lastDown=null;this.lastUp=null;this.callback("done",[this.geometryClone()]);this.destroyFeature();},cancel:function(){this.layer.renderer.clear();this.drawing=false;this.mouseDown=false;this.lastDown=null;this.lastUp=null;this.callback("cancel",[this.geometryClone()]);this.destroyFeature();},click:function(evt){OpenLayers.Event.stop(evt);return false;},dblclick:function(evt){OpenLayers.Event.stop(evt);return false;},drawFeature:function(){this.layer.drawFeature(this.point,this.style);},geometryClone:function(){return this.point.geometry.clone();},mousedown:function(evt){if(!this.checkModifiers(evt)){return true;}
if(this.lastDown&&this.lastDown.equals(evt.xy)){return true;}
if(this.lastDown==null){this.createFeature();}
this.lastDown=evt.xy;this.drawing=true;var lonlat=this.map.getLonLatFromPixel(evt.xy);this.point.geometry.x=lonlat.lon;this.point.geometry.y=lonlat.lat;this.drawFeature();return false;},mousemove:function(evt){if(this.drawing){var lonlat=this.map.getLonLatFromPixel(evt.xy);this.point.geometry.x=lonlat.lon;this.point.geometry.y=lonlat.lat;this.point.geometry.clearBounds();this.drawFeature();}
return true;},mouseup:function(evt){if(this.drawing){this.finalize();return false;}else{return true;}},CLASS_NAME:"OpenLayers.Handler.Point"});OpenLayers.Layer.GML=OpenLayers.Class(OpenLayers.Layer.Vector,{loaded:false,format:null,formatOptions:null,initialize:function(name,url,options){var newArguments=[];newArguments.push(name,options);OpenLayers.Layer.Vector.prototype.initialize.apply(this,newArguments);this.url=url;},setVisibility:function(visibility,noEvent){OpenLayers.Layer.Vector.prototype.setVisibility.apply(this,arguments);if(this.visibility&&!this.loaded){this.loadGML();}},moveTo:function(bounds,zoomChanged,minor){OpenLayers.Layer.Vector.prototype.moveTo.apply(this,arguments);if(this.visibility&&!this.loaded){this.events.triggerEvent("loadstart");this.loadGML();}},loadGML:function(){if(!this.loaded){var results=OpenLayers.loadURL(this.url,null,this,this.requestSuccess,this.requestFailure);this.loaded=true;}},setUrl:function(url){this.url=url;this.destroyFeatures();this.loaded=false;this.events.triggerEvent("loadstart");this.loadGML();},requestSuccess:function(request){var doc=request.responseXML;if(!doc||!doc.documentElement){doc=request.responseText;}
var options={};OpenLayers.Util.extend(options,this.formatOptions);if(this.map&&!this.projection.equals(this.map.getProjectionObject())){options.externalProjection=this.projection;options.internalProjection=this.map.getProjectionObject();}
var gml=this.format?new this.format(options):new OpenLayers.Format.GML(options);this.addFeatures(gml.read(doc));this.events.triggerEvent("loadend");},requestFailure:function(request){alert(OpenLayers.i18n("errorLoadingGML",{'url':this.url}));this.events.triggerEvent("loadend");},CLASS_NAME:"OpenLayers.Layer.GML"});OpenLayers.Layer.PointTrack=OpenLayers.Class(OpenLayers.Layer.Vector,{dataFrom:null,initialize:function(name,options){OpenLayers.Layer.Vector.prototype.initialize.apply(this,arguments);},addNodes:function(pointFeatures){if(pointFeatures.length<2){OpenLayers.Console.error("At least two point features have to be added to create"+"a line from");return;}
var lines=new Array(pointFeatures.length-1);var pointFeature,startPoint,endPoint;for(var i=0;i<pointFeatures.length;i++){pointFeature=pointFeatures[i];endPoint=pointFeature.geometry;if(!endPoint){var lonlat=pointFeature.lonlat;endPoint=new OpenLayers.Geometry.Point(lonlat.lon,lonlat.lat);}else if(endPoint.CLASS_NAME!="OpenLayers.Geometry.Point"){OpenLayers.Console.error("Only features with point geometries are supported.");return;}
if(i>0){var attributes=(this.dataFrom!=null)?(pointFeatures[i+this.dataFrom].data||pointFeatures[i+this.dataFrom].attributes):null;var line=new OpenLayers.Geometry.LineString([startPoint,endPoint]);lines[i-1]=new OpenLayers.Feature.Vector(line,attributes);}
startPoint=endPoint;}
this.addFeatures(lines);},CLASS_NAME:"OpenLayers.Layer.PointTrack"});OpenLayers.Layer.PointTrack.dataFrom={'SOURCE_NODE':-1,'TARGET_NODE':0};OpenLayers.Layer.WFS=OpenLayers.Class(OpenLayers.Layer.Vector,OpenLayers.Layer.Markers,{isBaseLayer:false,tile:null,ratio:2,DEFAULT_PARAMS:{service:"WFS",version:"1.0.0",request:"GetFeature"},featureClass:null,format:null,formatObject:null,formatOptions:null,vectorMode:true,encodeBBOX:false,extractAttributes:false,initialize:function(name,url,params,options){if(options==undefined){options={};}
if(options.featureClass||!OpenLayers.Layer.Vector||!OpenLayers.Feature.Vector){this.vectorMode=false;}
OpenLayers.Util.extend(options,{'reportError':false});var newArguments=[];newArguments.push(name,options);OpenLayers.Layer.Vector.prototype.initialize.apply(this,newArguments);if(!this.renderer||!this.vectorMode){this.vectorMode=false;if(!options.featureClass){options.featureClass=OpenLayers.Feature.WFS;}
OpenLayers.Layer.Markers.prototype.initialize.apply(this,newArguments);}
if(this.params&&this.params.typename&&!this.options.typename){this.options.typename=this.params.typename;}
if(!this.options.geometry_column){this.options.geometry_column="the_geom";}
this.params=params;OpenLayers.Util.applyDefaults(this.params,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));this.url=url;},destroy:function(){if(this.vectorMode){OpenLayers.Layer.Vector.prototype.destroy.apply(this,arguments);}else{OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments);}
if(this.tile){this.tile.destroy();}
this.tile=null;this.ratio=null;this.featureClass=null;this.format=null;if(this.formatObject&&this.formatObject.destroy){this.formatObject.destroy();}
this.formatObject=null;this.formatOptions=null;this.vectorMode=null;this.encodeBBOX=null;this.extractAttributes=null;},setMap:function(map){if(this.vectorMode){OpenLayers.Layer.Vector.prototype.setMap.apply(this,arguments);var options={'extractAttributes':this.extractAttributes};OpenLayers.Util.extend(options,this.formatOptions);if(this.map&&!this.projection.equals(this.map.getProjectionObject())){options.externalProjection=this.projection;options.internalProjection=this.map.getProjectionObject();}
this.formatObject=this.format?new this.format(options):new OpenLayers.Format.GML(options);}else{OpenLayers.Layer.Markers.prototype.setMap.apply(this,arguments);}},moveTo:function(bounds,zoomChanged,dragging){if(this.vectorMode){OpenLayers.Layer.Vector.prototype.moveTo.apply(this,arguments);}else{OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments);}
if(dragging){return false;}
if(zoomChanged){if(this.vectorMode){this.renderer.clear();}}
if(this.options.minZoomLevel){OpenLayers.Console.warn(OpenLayers.i18n('minZoomLevelError'));if(this.map.getZoom()<this.options.minZoomLevel){return null;}}
if(bounds==null){bounds=this.map.getExtent();}
var firstRendering=(this.tile==null);var outOfBounds=(!firstRendering&&!this.tile.bounds.containsBounds(bounds));if(zoomChanged||firstRendering||(!dragging&&outOfBounds)){var center=bounds.getCenterLonLat();var tileWidth=bounds.getWidth()*this.ratio;var tileHeight=bounds.getHeight()*this.ratio;var tileBounds=new OpenLayers.Bounds(center.lon-(tileWidth/2),center.lat-(tileHeight/2),center.lon+(tileWidth/2),center.lat+(tileHeight/2));var tileSize=this.map.getSize();tileSize.w=tileSize.w*this.ratio;tileSize.h=tileSize.h*this.ratio;var ul=new OpenLayers.LonLat(tileBounds.left,tileBounds.top);var pos=this.map.getLayerPxFromLonLat(ul);var url=this.getFullRequestString();var params={BBOX:this.encodeBBOX?tileBounds.toBBOX():tileBounds.toArray()};if(this.map&&!this.projection.equals(this.map.getProjectionObject())){var projectedBounds=tileBounds.clone();projectedBounds.transform(this.map.getProjectionObject(),this.projection);params.BBOX=this.encodeBBOX?projectedBounds.toBBOX():projectedBounds.toArray();}
url+="&"+OpenLayers.Util.getParameterString(params);if(!this.tile){this.tile=new OpenLayers.Tile.WFS(this,pos,tileBounds,url,tileSize);this.addTileMonitoringHooks(this.tile);this.tile.draw();}else{if(this.vectorMode){this.destroyFeatures();this.renderer.clear();}else{this.clearMarkers();}
this.removeTileMonitoringHooks(this.tile);this.tile.destroy();this.tile=null;this.tile=new OpenLayers.Tile.WFS(this,pos,tileBounds,url,tileSize);this.addTileMonitoringHooks(this.tile);this.tile.draw();}}},addTileMonitoringHooks:function(tile){tile.onLoadStart=function(){if(this==this.layer.tile){this.layer.events.triggerEvent("loadstart");}};tile.events.register("loadstart",tile,tile.onLoadStart);tile.onLoadEnd=function(){if(this==this.layer.tile){this.layer.events.triggerEvent("tileloaded");this.layer.events.triggerEvent("loadend");}};tile.events.register("loadend",tile,tile.onLoadEnd);tile.events.register("unload",tile,tile.onLoadEnd);},removeTileMonitoringHooks:function(tile){tile.unload();tile.events.un({"loadstart":tile.onLoadStart,"loadend":tile.onLoadEnd,"unload":tile.onLoadEnd,scope:tile});},onMapResize:function(){if(this.vectorMode){OpenLayers.Layer.Vector.prototype.onMapResize.apply(this,arguments);}else{OpenLayers.Layer.Markers.prototype.onMapResize.apply(this,arguments);}},mergeNewParams:function(newParams){var upperParams=OpenLayers.Util.upperCaseObject(newParams);var newArguments=[upperParams];return OpenLayers.Layer.HTTPRequest.prototype.mergeNewParams.apply(this,newArguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.WFS(this.name,this.url,this.params,this.options);}
if(this.vectorMode){obj=OpenLayers.Layer.Vector.prototype.clone.apply(this,[obj]);}else{obj=OpenLayers.Layer.Markers.prototype.clone.apply(this,[obj]);}
return obj;},getFullRequestString:function(newParams,altUrl){var projectionCode=this.map.getProjection();this.params.SRS=(projectionCode=="none")?null:projectionCode;return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this,arguments);},commit:function(){if(!this.writer){var options={};if(this.map&&!this.projection.equals(this.map.getProjectionObject())){options.externalProjection=this.projection;options.internalProjection=this.map.getProjectionObject();}
this.writer=new OpenLayers.Format.WFS(options,this);}
var data=this.writer.write(this.features);var url=this.url;var success=OpenLayers.Function.bind(this.commitSuccess,this);var failure=OpenLayers.Function.bind(this.commitFailure,this);new OpenLayers.Ajax.Request(url,{method:'post',postBody:data,onComplete:success,onFailure:failure});},commitSuccess:function(request){var response=request.responseText;if(response.indexOf('SUCCESS')!=-1){this.commitReport(OpenLayers.i18n("commitSuccess",{'response':response}));for(var i=0;i<this.features.length;i++){this.features[i].state=null;}}else if(response.indexOf('FAILED')!=-1||response.indexOf('Exception')!=-1){this.commitReport(OpenLayers.i18n("commitFailed",{'response':response}));}},commitFailure:function(request){},commitReport:function(string,response){alert(string);},refresh:function(){if(this.tile){if(this.vectorMode){this.renderer.clear();this.features.length=0;}else{this.clearMarkers();this.markers.length=0;}
this.tile.draw();}},CLASS_NAME:"OpenLayers.Layer.WFS"});OpenLayers.Format.SLD.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{sld:"http://www.opengis.net/sld",ogc:"http://www.opengis.net/ogc",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"sld",schemaLocation:null,defaultSymbolizer:{fillColor:"#808080",fillOpacity:1,strokeColor:"#000000",strokeOpacity:1,strokeWidth:1,pointRadius:6},initialize:function(options){OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},read:function(data){var sld={namedLayers:{}};this.readChildNodes(data,sld);return sld;},readers:{"sld":{"StyledLayerDescriptor":function(node,sld){sld.version=node.getAttribute("version");this.readChildNodes(node,sld);},"Name":function(node,obj){obj.name=this.getChildValue(node);},"Title":function(node,obj){obj.title=this.getChildValue(node);},"Abstract":function(node,obj){obj.description=this.getChildValue(node);},"NamedLayer":function(node,sld){var layer={userStyles:[],namedStyles:[]};this.readChildNodes(node,layer);for(var i=0;i<layer.userStyles.length;++i){layer.userStyles[i].layerName=layer.name;}
sld.namedLayers[layer.name]=layer;},"NamedStyle":function(node,layer){layer.namedStyles.push(this.getChildName(node.firstChild));},"UserStyle":function(node,layer){var style=new OpenLayers.Style(this.defaultSymbolizer);this.readChildNodes(node,style);layer.userStyles.push(style);},"IsDefault":function(node,style){if(this.getChildValue(node)=="1"){style.isDefault=true;}},"FeatureTypeStyle":function(node,style){var obj={rules:[]};this.readChildNodes(node,obj);style.rules=obj.rules;},"Rule":function(node,obj){var rule=new OpenLayers.Rule();this.readChildNodes(node,rule);obj.rules.push(rule);},"ElseFilter":function(node,rule){rule.elseFilter=true;},"MinScaleDenominator":function(node,rule){rule.minScaleDenominator=this.getChildValue(node);},"MaxScaleDenominator":function(node,rule){rule.maxScaleDenominator=this.getChildValue(node);},"LineSymbolizer":function(node,rule){var symbolizer=rule.symbolizer["Line"]||{};this.readChildNodes(node,symbolizer);rule.symbolizer["Line"]=symbolizer;},"PolygonSymbolizer":function(node,rule){var symbolizer=rule.symbolizer["Polygon"]||{};this.readChildNodes(node,symbolizer);rule.symbolizer["Polygon"]=symbolizer;},"PointSymbolizer":function(node,rule){var symbolizer=rule.symbolizer["Point"]||{};this.readChildNodes(node,symbolizer);rule.symbolizer["Point"]=symbolizer;},"Stroke":function(node,symbolizer){this.readChildNodes(node,symbolizer);},"Fill":function(node,symbolizer){this.readChildNodes(node,symbolizer);},"CssParameter":function(node,symbolizer){var cssProperty=node.getAttribute("name");var symProperty=this.cssMap[cssProperty];if(symProperty){var value=this.readOgcExpression(node);if(value){symbolizer[symProperty]=value;}}},"Graphic":function(node,symbolizer){var graphic={};this.readChildNodes(node,graphic);var properties=["strokeColor","strokeWidth","strokeOpacity","strokeLinecap","fillColor","fillOpacity","graphicName","rotation","graphicFormat"];var prop,value;for(var i=0;i<properties.length;++i){prop=properties[i];value=graphic[prop];if(value!=undefined){symbolizer[prop]=value;}}
if(graphic.opacity!=undefined){symbolizer.graphicOpacity=graphic.opacity;}
if(graphic.size!=undefined){symbolizer.pointRadius=graphic.size;}
if(graphic.href!=undefined){symbolizer.externalGraphic=graphic.href;}},"ExternalGraphic":function(node,graphic){this.readChildNodes(node,graphic);},"Mark":function(node,graphic){this.readChildNodes(node,graphic);},"WellKnownName":function(node,graphic){graphic.graphicName=this.getChildValue(node);},"Opacity":function(node,obj){var opacity=this.getChildValue(node);if(opacity){obj.opacity=opacity;}},"Size":function(node,obj){var size=this.getChildValue(node);if(size){obj.size=size;}},"Rotation":function(node,obj){var rotation=this.getChildValue(node);if(rotation){obj.rotation=rotation;}},"OnlineResource":function(node,obj){obj.href=this.getAttributeNS(node,this.namespaces.xlink,"href");},"Format":function(node,graphic){graphic.graphicFormat=this.getChildValue(node);}},"ogc":{"Filter":function(node,rule){var obj={fids:[],filters:[]};this.readChildNodes(node,obj);if(obj.fids.length>0){rule.filter=new OpenLayers.Filter.FeatureId({fids:obj.fids});}else if(obj.filters.length>0){rule.filter=obj.filters[0];}},"FeatureId":function(node,obj){var fid=node.getAttribute("fid");if(fid){obj.fids.push(fid);}},"And":function(node,obj){var filter=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.AND});this.readChildNodes(node,filter);obj.filters.push(filter);},"Or":function(node,obj){var filter=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.OR});this.readChildNodes(node,filter);obj.filters.push(filter);},"Not":function(node,obj){var filter=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.NOT});this.readChildNodes(node,filter);obj.filters.push(filter);},"PropertyIsEqualTo":function(node,obj){var filter=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO});this.readChildNodes(node,filter);obj.filters.push(filter);},"PropertyIsNotEqualTo":function(node,obj){var filter=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.NOT_EQUAL_TO});this.readChildNodes(node,filter);obj.filters.push(filter);},"PropertyIsLessThan":function(node,obj){var filter=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LESS_THAN});this.readChildNodes(node,filter);obj.filters.push(filter);},"PropertyIsGreaterThan":function(node,obj){var filter=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.GREATER_THAN});this.readChildNodes(node,filter);obj.filters.push(filter);},"PropertyIsLessThanOrEqualTo":function(node,obj){var filter=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO});this.readChildNodes(node,filter);obj.filters.push(filter);},"PropertyIsGreaterThanOrEqualTo":function(node,obj){var filter=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO});this.readChildNodes(node,filter);obj.filters.push(filter);},"PropertyIsBetween":function(node,obj){var filter=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.BETWEEN});this.readChildNodes(node,filter);obj.filters.push(filter);},"PropertyIsLike":function(node,obj){var filter=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LIKE});this.readChildNodes(node,filter);var wildCard=node.getAttribute("wildCard");var singleChar=node.getAttribute("singleChar");var esc=node.getAttribute("escape");filter.value2regex(wildCard,singleChar,esc);obj.filters.push(filter);},"Literal":function(node,obj){obj.value=this.getChildValue(node);},"PropertyName":function(node,filter){filter.property=this.getChildValue(node);},"LowerBoundary":function(node,filter){filter.lowerBoundary=this.readOgcExpression(node);},"UpperBoundary":function(node,filter){filter.upperBoundary=this.readOgcExpression(node);}}},readOgcExpression:function(node){var obj={};this.readChildNodes(node,obj);var value=obj.value;if(!value){value=this.getChildValue(node);}
return value;},cssMap:{"stroke":"strokeColor","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","fill":"fillColor","fill-opacity":"fillOpacity"},getCssProperty:function(sym){var css=null;for(var prop in this.cssMap){if(this.cssMap[prop]==sym){css=prop;break;}}
return css;},getGraphicFormat:function(href){var format,regex;for(var key in this.graphicFormats){if(this.graphicFormats[key].test(href)){format=key;break;}}
return format||this.defautlGraphicFormat;},defaultGraphicFormat:"image/png",graphicFormats:{"image/jpeg":/\.jpe?g$/i,"image/gif":/\.gif$/i,"image/png":/\.png$/i},write:function(sld){return this.writers.sld.StyledLayerDescriptor.apply(this,[sld]);},writers:{"sld":{"StyledLayerDescriptor":function(sld){var root=this.createElementNSPlus("StyledLayerDescriptor",{attributes:{"version":this.VERSION,"xsi:schemaLocation":this.schemaLocation}});if(sld.name){this.writeNode(root,"Name",sld.name);}
if(sld.title){this.writeNode(root,"Title",sld.title);}
if(sld.description){this.writeNode(root,"Abstract",sld.description);}
for(var name in sld.namedLayers){this.writeNode(root,"NamedLayer",sld.namedLayers[name]);}
return root;},"Name":function(name){return this.createElementNSPlus("Name",{value:name});},"Title":function(title){return this.createElementNSPlus("Title",{value:title});},"Abstract":function(description){return this.createElementNSPlus("Abstract",{value:description});},"NamedLayer":function(layer){var node=this.createElementNSPlus("NamedLayer");this.writeNode(node,"Name",layer.name);if(layer.namedStyles){for(var i=0;i<layer.namedStyles.length;++i){this.writeNode(node,"NamedStyle",layer.namedStyles[i]);}}
if(layer.userStyles){for(var i=0;i<layer.userStyles.length;++i){this.writeNode(node,"UserStyle",layer.userStyles[i]);}}
return node;},"NamedStyle":function(name){var node=this.createElementNSPlus("NamedStyle");this.writeNode(node,"Name",name);return node;},"UserStyle":function(style){var node=this.createElementNSPlus("UserStyle");if(style.name){this.writeNode(node,"Name",style.name);}
if(style.title){this.writeNode(node,"Title",style.title);}
if(style.description){this.writeNode(node,"Abstract",style.description);}
if(style.isDefault){this.writeNode(node,"IsDefault",style.isDefault);}
this.writeNode(node,"FeatureTypeStyle",style);return node;},"IsDefault":function(bool){return this.createElementNSPlus("IsDefault",{value:(bool)?"1":"0"});},"FeatureTypeStyle":function(style){var node=this.createElementNSPlus("FeatureTypeStyle");for(var i=0;i<style.rules.length;++i){this.writeNode(node,"Rule",style.rules[i]);}
return node;},"Rule":function(rule){var node=this.createElementNSPlus("Rule");if(rule.name){this.writeNode(node,"Name",rule.name);}
if(rule.title){this.writeNode(node,"Title",rule.title);}
if(rule.description){this.writeNode(node,"Abstract",rule.description);}
if(rule.elseFilter){this.writeNode(node,"ElseFilter");}else if(rule.filter){this.writeNode(node,"ogc:Filter",rule.filter);}
if(rule.minScaleDenominator!=undefined){this.writeNode(node,"MinScaleDenominator",rule.minScaleDenominator);}
if(rule.maxScaleDenominator!=undefined){this.writeNode(node,"MaxScaleDenominator",rule.maxScaleDenominator);}
var types=OpenLayers.Style.SYMBOLIZER_PREFIXES;var type,symbolizer;for(var i=0;i<types.length;++i){type=types[i];symbolizer=rule.symbolizer[type];if(symbolizer){this.writeNode(node,type+"Symbolizer",symbolizer);}}
return node;},"ElseFilter":function(){return this.createElementNSPlus("ElseFilter");},"MinScaleDenominator":function(scale){return this.createElementNSPlus("MinScaleDenominator",{value:scale});},"MaxScaleDenominator":function(scale){return this.createElementNSPlus("MaxScaleDenominator",{value:scale});},"LineSymbolizer":function(symbolizer){var node=this.createElementNSPlus("LineSymbolizer");this.writeNode(node,"Stroke",symbolizer);return node;},"Stroke":function(symbolizer){var node=this.createElementNSPlus("Stroke");if(symbolizer.strokeColor!=undefined){this.writeNode(node,"CssParameter",{symbolizer:symbolizer,key:"strokeColor"});}
if(symbolizer.strokeOpacity!=undefined){this.writeNode(node,"CssParameter",{symbolizer:symbolizer,key:"strokeOpacity"});}
if(symbolizer.strokeWidth!=undefined){this.writeNode(node,"CssParameter",{symbolizer:symbolizer,key:"strokeWidth"});}
return node;},"CssParameter":function(obj){return this.createElementNSPlus("CssParameter",{attributes:{name:this.getCssProperty(obj.key)},value:obj.symbolizer[obj.key]});},"PolygonSymbolizer":function(symbolizer){var node=this.createElementNSPlus("PolygonSymbolizer");this.writeNode(node,"Fill",symbolizer);this.writeNode(node,"Stroke",symbolizer);return node;},"Fill":function(symbolizer){var node=this.createElementNSPlus("Fill");if(symbolizer.fillColor){this.writeNode(node,"CssParameter",{symbolizer:symbolizer,key:"fillColor"});}
if(symbolizer.fillOpacity){this.writeNode(node,"CssParameter",{symbolizer:symbolizer,key:"fillOpacity"});}
return node;},"PointSymbolizer":function(symbolizer){var node=this.createElementNSPlus("PointSymbolizer");this.writeNode(node,"Graphic",symbolizer);return node;},"Graphic":function(symbolizer){var node=this.createElementNSPlus("Graphic");if(symbolizer.externalGraphic!=undefined){this.writeNode(node,"ExternalGraphic",symbolizer);}else if(symbolizer.graphicName){this.writeNode(node,"Mark",symbolizer);}
if(symbolizer.graphicOpacity!=undefined){this.writeNode(node,"Opacity",symbolizer.graphicOpacity);}
if(symbolizer.pointRadius!=undefined){this.writeNode(node,"Size",symbolizer.pointRadius);}
if(symbolizer.rotation!=undefined){this.writeNode(node,"Rotation",symbolizer.rotation);}
return node;},"ExternalGraphic":function(symbolizer){var node=this.createElementNSPlus("ExternalGraphic");this.writeNode(node,"OnlineResource",symbolizer.externalGraphic);var format=symbolizer.graphicFormat||this.getGraphicFormat(symbolizer.externalGraphic);this.writeNode(node,"Format",format);return node;},"Mark":function(symbolizer){var node=this.createElementNSPlus("Mark");this.writeNode(node,"WellKnownName",symbolizer.graphicName);this.writeNode(node,"Fill",symbolizer);this.writeNode(node,"Stroke",symbolizer);return node;},"WellKnownName":function(name){return this.createElementNSPlus("WellKnownName",{value:name});},"Opacity":function(value){return this.createElementNSPlus("Opacity",{value:value});},"Size":function(value){return this.createElementNSPlus("Size",{value:value});},"Rotation":function(value){return this.createElementNSPlus("Rotation",{value:value});},"OnlineResource":function(href){return this.createElementNSPlus("OnlineResource",{attributes:{"xlink:type":"simple","xlink:href":href}});},"Format":function(format){return this.createElementNSPlus("Format",{value:format});}},"ogc":{"Filter":function(filter){var node=this.createElementNSPlus("ogc:Filter");var sub=filter.CLASS_NAME.split(".").pop();if(sub=="FeatureId"){for(var i=0;i<filter.fids.length;++i){this.writeNode(node,"FeatureId",filter.fids[i]);}}else{this.writeNode(node,this.getFilterType(filter),filter);}
return node;},"FeatureId":function(fid){return this.createElementNSPlus("ogc:FeatureId",{attributes:{fid:fid}});},"And":function(filter){var node=this.createElementNSPlus("ogc:And");var childFilter;for(var i=0;i<filter.filters.length;++i){childFilter=filter.filters[i];this.writeNode(node,this.getFilterType(childFilter),childFilter);}
return node;},"Or":function(filter){var node=this.createElementNSPlus("ogc:Or");var childFilter;for(var i=0;i<filter.filters.length;++i){childFilter=filter.filters[i];this.writeNode(node,this.getFilterType(childFilter),childFilter);}
return node;},"Not":function(filter){var node=this.createElementNSPlus("ogc:Not");var childFilter=filter.filters[0];this.writeNode(node,this.getFilterType(childFilter),childFilter);return node;},"PropertyIsEqualTo":function(filter){var node=this.createElementNSPlus("ogc:PropertyIsEqualTo");this.writeNode(node,"PropertyName",filter);this.writeNode(node,"Literal",filter.value);return node;},"PropertyIsNotEqualTo":function(filter){var node=this.createElementNSPlus("ogc:PropertyIsNotEqualTo");this.writeNode(node,"PropertyName",filter);this.writeNode(node,"Literal",filter.value);return node;},"PropertyIsLessThan":function(filter){var node=this.createElementNSPlus("ogc:PropertyIsLessThan");this.writeNode(node,"PropertyName",filter);this.writeNode(node,"Literal",filter.value);return node;},"PropertyIsGreaterThan":function(filter){var node=this.createElementNSPlus("ogc:PropertyIsGreaterThan");this.writeNode(node,"PropertyName",filter);this.writeNode(node,"Literal",filter.value);return node;},"PropertyIsLessThanOrEqualTo":function(filter){var node=this.createElementNSPlus("ogc:PropertyIsLessThanOrEqualTo");this.writeNode(node,"PropertyName",filter);this.writeNode(node,"Literal",filter.value);return node;},"PropertyIsGreaterThanOrEqualTo":function(filter){var node=this.createElementNSPlus("ogc:PropertyIsGreaterThanOrEqualTo");this.writeNode(node,"PropertyName",filter);this.writeNode(node,"Literal",filter.value);return node;},"PropertyIsBetween":function(filter){var node=this.createElementNSPlus("ogc:PropertyIsBetween");this.writeNode(node,"PropertyName",filter);this.writeNode(node,"LowerBoundary",filter);this.writeNode(node,"UpperBoundary",filter);return node;},"PropertyIsLike":function(filter){var node=this.createElementNSPlus("ogc:PropertyIsLike",{attributes:{wildCard:"*",singleChar:".",escape:"!"}});this.writeNode(node,"PropertyName",filter);this.writeNode(node,"Literal",filter.regex2value());return node;},"PropertyName":function(filter){return this.createElementNSPlus("ogc:PropertyName",{value:filter.property});},"Literal":function(value){return this.createElementNSPlus("ogc:Literal",{value:value});},"LowerBoundary":function(filter){var node=this.createElementNSPlus("ogc:LowerBoundary");this.writeNode(node,"Literal",filter.lowerBoundary);return node;},"UpperBoundary":function(filter){var node=this.createElementNSPlus("ogc:UpperBoundary");this.writeNode(node,"Literal",filter.upperBoundary);return node;}}},getFilterType:function(filter){var filterType=this.filterMap[filter.type];if(!filterType){throw"SLD writing not supported for rule type: "+filter.type;}
return filterType;},filterMap:{"&&":"And","||":"Or","!":"Not","==":"PropertyIsEqualTo","!=":"PropertyIsNotEqualTo","<":"PropertyIsLessThan",">":"PropertyIsGreaterThan","<=":"PropertyIsLessThanOrEqualTo",">=":"PropertyIsGreaterThanOrEqualTo","..":"PropertyIsBetween","~":"PropertyIsLike"},getNamespacePrefix:function(uri){var prefix=null;if(uri==null){prefix=this.namespaces[this.defaultPrefix];}else{var gotPrefix=false;for(prefix in this.namespaces){if(this.namespaces[prefix]==uri){gotPrefix=true;break;}}
if(!gotPrefix){prefix=null;}}
return prefix;},readChildNodes:function(node,obj){var children=node.childNodes;var child,group,reader,prefix,local;for(var i=0;i<children.length;++i){child=children[i];if(child.nodeType==1){prefix=this.getNamespacePrefix(child.namespaceURI);local=child.nodeName.split(":").pop();group=this.readers[prefix];if(group){reader=group[local];if(reader){reader.apply(this,[child,obj]);}}}}},writeNode:function(parent,name,obj){var prefix,local;var split=name.indexOf(":");if(split>0){prefix=name.substring(0,split);local=name.substring(split+1);}else{prefix=this.getNamespacePrefix(parent.namespaceURI);local=name;}
var child=this.writers[prefix][local].apply(this,[obj]);parent.appendChild(child);return child;},createElementNSPlus:function(name,options){options=options||{};var loc=name.indexOf(":");var uri=options.uri||this.namespaces[options.prefix];if(!uri){loc=name.indexOf(":");uri=this.namespaces[name.substring(0,loc)];}
if(!uri){uri=this.namespaces[this.defaultPrefix];}
var node=this.createElementNS(uri,name);if(options.attributes){this.setAttributes(node,options.attributes);}
if(options.value){node.appendChild(this.createTextNode(options.value));}
return node;},setAttributes:function(node,obj){var value,loc,alias,uri;for(var name in obj){value=obj[name].toString();uri=this.namespaces[name.substring(0,name.indexOf(":"))]||null;this.setAttributeNS(node,uri,name,value);}},CLASS_NAME:"OpenLayers.Format.SLD.v1"});OpenLayers.Geometry.Curve=OpenLayers.Class(OpenLayers.Geometry.MultiPoint,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(points){OpenLayers.Geometry.MultiPoint.prototype.initialize.apply(this,arguments);},getLength:function(){var length=0.0;if(this.components&&(this.components.length>1)){for(var i=1;i<this.components.length;i++){length+=this.components[i-1].distanceTo(this.components[i]);}}
return length;},CLASS_NAME:"OpenLayers.Geometry.Curve"});OpenLayers.Format.SLD.v1_0_0=OpenLayers.Class(OpenLayers.Format.SLD.v1,{VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd",initialize:function(options){OpenLayers.Format.SLD.v1.prototype.initialize.apply(this,[options]);},CLASS_NAME:"OpenLayers.Format.SLD.v1_0_0"});OpenLayers.Geometry.LineString=OpenLayers.Class(OpenLayers.Geometry.Curve,{initialize:function(points){OpenLayers.Geometry.Curve.prototype.initialize.apply(this,arguments);},removeComponent:function(point){if(this.components&&(this.components.length>2)){OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);}},intersects:function(geometry){var intersect=false;var type=geometry.CLASS_NAME;if(type=="OpenLayers.Geometry.LineString"||type=="OpenLayers.Geometry.LinearRing"||type=="OpenLayers.Geometry.Point"){var segs1=this.getSortedSegments();var segs2;if(type=="OpenLayers.Geometry.Point"){segs2=[{x1:geometry.x,y1:geometry.y,x2:geometry.x,y2:geometry.y}];}else{segs2=geometry.getSortedSegments();}
var seg1,seg1x1,seg1x2,seg1y1,seg1y2,seg2,seg2y1,seg2y2;outer:for(var i=0;i<segs1.length;++i){seg1=segs1[i];seg1x1=seg1.x1;seg1x2=seg1.x2;seg1y1=seg1.y1;seg1y2=seg1.y2;inner:for(var j=0;j<segs2.length;++j){seg2=segs2[j];if(seg2.x1>seg1x2){break;}
if(seg2.x2<seg1x1){continue;}
seg2y1=seg2.y1;seg2y2=seg2.y2;if(Math.min(seg2y1,seg2y2)>Math.max(seg1y1,seg1y2)){continue;}
if(Math.max(seg2y1,seg2y2)<Math.min(seg1y1,seg1y2)){continue;}
if(OpenLayers.Geometry.segmentsIntersect(seg1,seg2)){intersect=true;break outer;}}}}else{intersect=geometry.intersects(this);}
return intersect;},getSortedSegments:function(){var numSeg=this.components.length-1;var segments=new Array(numSeg);for(var i=0;i<numSeg;++i){point1=this.components[i];point2=this.components[i+1];if(point1.x<point2.x){segments[i]={x1:point1.x,y1:point1.y,x2:point2.x,y2:point2.y};}else{segments[i]={x1:point2.x,y1:point2.y,x2:point1.x,y2:point1.y};}}
function byX1(seg1,seg2){return seg1.x1-seg2.x1;}
return segments.sort(byX1);},CLASS_NAME:"OpenLayers.Geometry.LineString"});OpenLayers.Format.GML=OpenLayers.Class(OpenLayers.Format.XML,{featureNS:"http://mapserver.gis.umn.edu/mapserver",featurePrefix:"feature",featureName:"featureMember",layerName:"features",geometryName:"geometry",collectionName:"FeatureCollection",gmlns:"http://www.opengis.net/gml",extractAttributes:true,xy:true,initialize:function(options){this.regExes={trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)};OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},read:function(data){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
var featureNodes=this.getElementsByTagNameNS(data.documentElement,this.gmlns,this.featureName);var features=[];for(var i=0;i<featureNodes.length;i++){var feature=this.parseFeature(featureNodes[i]);if(feature){features.push(feature);}}
return features;},parseFeature:function(node){var order=["MultiPolygon","Polygon","MultiLineString","LineString","MultiPoint","Point","Envelope"];var type,nodeList,geometry,parser;for(var i=0;i<order.length;++i){type=order[i];nodeList=this.getElementsByTagNameNS(node,this.gmlns,type);if(nodeList.length>0){var parser=this.parseGeometry[type.toLowerCase()];if(parser){geometry=parser.apply(this,[nodeList[0]]);if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}}else{OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType",{'geomType':type}));}
break;}}
var attributes;if(this.extractAttributes){attributes=this.parseAttributes(node);}
var feature=new OpenLayers.Feature.Vector(geometry,attributes);var childNode=node.firstChild;var fid;while(childNode){if(childNode.nodeType==1){fid=childNode.getAttribute("fid")||childNode.getAttribute("id");if(fid){break;}}
childNode=childNode.nextSibling;}
feature.fid=fid;return feature;},parseGeometry:{point:function(node){var nodeList,coordString;var coords=[];var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"pos");if(nodeList.length>0){coordString=nodeList[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.trimSpace,"");coords=coordString.split(this.regExes.splitSpace);}
if(coords.length==0){nodeList=this.getElementsByTagNameNS(node,this.gmlns,"coordinates");if(nodeList.length>0){coordString=nodeList[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.removeSpace,"");coords=coordString.split(",");}}
if(coords.length==0){nodeList=this.getElementsByTagNameNS(node,this.gmlns,"coord");if(nodeList.length>0){var xList=this.getElementsByTagNameNS(nodeList[0],this.gmlns,"X");var yList=this.getElementsByTagNameNS(nodeList[0],this.gmlns,"Y");if(xList.length>0&&yList.length>0){coords=[xList[0].firstChild.nodeValue,yList[0].firstChild.nodeValue];}}}
if(coords.length==2){coords[2]=null;}
if(this.xy){return new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}
else{return new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]);}},multipoint:function(node){var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"Point");var components=[];if(nodeList.length>0){var point;for(var i=0;i<nodeList.length;++i){point=this.parseGeometry.point.apply(this,[nodeList[i]]);if(point){components.push(point);}}}
return new OpenLayers.Geometry.MultiPoint(components);},linestring:function(node,ring){var nodeList,coordString;var coords=[];var points=[];nodeList=this.getElementsByTagNameNS(node,this.gmlns,"posList");if(nodeList.length>0){coordString=this.concatChildValues(nodeList[0]);coordString=coordString.replace(this.regExes.trimSpace,"");coords=coordString.split(this.regExes.splitSpace);var dim=parseInt(nodeList[0].getAttribute("dimension"));var j,x,y,z;for(var i=0;i<coords.length/dim;++i){j=i*dim;x=coords[j];y=coords[j+1];z=(dim==2)?null:coords[j+2];if(this.xy){points.push(new OpenLayers.Geometry.Point(x,y,z));}else{points.push(new OpenLayers.Geometry.Point(y,x,z));}}}
if(coords.length==0){nodeList=this.getElementsByTagNameNS(node,this.gmlns,"coordinates");if(nodeList.length>0){coordString=this.concatChildValues(nodeList[0]);coordString=coordString.replace(this.regExes.trimSpace,"");coordString=coordString.replace(this.regExes.trimComma,",");var pointList=coordString.split(this.regExes.splitSpace);for(var i=0;i<pointList.length;++i){coords=pointList[i].split(",");if(coords.length==2){coords[2]=null;}
if(this.xy){points.push(new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]));}else{points.push(new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]));}}}}
var line=null;if(points.length!=0){if(ring){line=new OpenLayers.Geometry.LinearRing(points);}else{line=new OpenLayers.Geometry.LineString(points);}}
return line;},multilinestring:function(node){var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"LineString");var components=[];if(nodeList.length>0){var line;for(var i=0;i<nodeList.length;++i){line=this.parseGeometry.linestring.apply(this,[nodeList[i]]);if(line){components.push(line);}}}
return new OpenLayers.Geometry.MultiLineString(components);},polygon:function(node){var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"LinearRing");var components=[];if(nodeList.length>0){var ring;for(var i=0;i<nodeList.length;++i){ring=this.parseGeometry.linestring.apply(this,[nodeList[i],true]);if(ring){components.push(ring);}}}
return new OpenLayers.Geometry.Polygon(components);},multipolygon:function(node){var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"Polygon");var components=[];if(nodeList.length>0){var polygon;for(var i=0;i<nodeList.length;++i){polygon=this.parseGeometry.polygon.apply(this,[nodeList[i]]);if(polygon){components.push(polygon);}}}
return new OpenLayers.Geometry.MultiPolygon(components);},envelope:function(node){var components=[];var coordString;var envelope;var lpoint=this.getElementsByTagNameNS(node,this.gmlns,"lowerCorner");if(lpoint.length>0){var coords=[];if(lpoint.length>0){coordString=lpoint[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.trimSpace,"");coords=coordString.split(this.regExes.splitSpace);}
if(coords.length==2){coords[2]=null;}
if(this.xy){var lowerPoint=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{var lowerPoint=new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]);}}
var upoint=this.getElementsByTagNameNS(node,this.gmlns,"upperCorner");if(upoint.length>0){var coords=[];if(upoint.length>0){coordString=upoint[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.trimSpace,"");coords=coordString.split(this.regExes.splitSpace);}
if(coords.length==2){coords[2]=null;}
if(this.xy){var upperPoint=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{var upperPoint=new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]);}}
if(lowerPoint&&upperPoint){components.push(new OpenLayers.Geometry.Point(lowerPoint.x,lowerPoint.y));components.push(new OpenLayers.Geometry.Point(upperPoint.x,lowerPoint.y));components.push(new OpenLayers.Geometry.Point(upperPoint.x,upperPoint.y));components.push(new OpenLayers.Geometry.Point(lowerPoint.x,upperPoint.y));components.push(new OpenLayers.Geometry.Point(lowerPoint.x,lowerPoint.y));var ring=new OpenLayers.Geometry.LinearRing(components);envelope=new OpenLayers.Geometry.Polygon([ring]);}
return envelope;}},parseAttributes:function(node){var attributes={};var childNode=node.firstChild;var children,i,child,grandchildren,grandchild,name,value;while(childNode){if(childNode.nodeType==1){children=childNode.childNodes;for(i=0;i<children.length;++i){child=children[i];if(child.nodeType==1){grandchildren=child.childNodes;if(grandchildren.length==1){grandchild=grandchildren[0];if(grandchild.nodeType==3||grandchild.nodeType==4){name=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;value=grandchild.nodeValue.replace(this.regExes.trimSpace,"");attributes[name]=value;}}}}
break;}
childNode=childNode.nextSibling;}
return attributes;},write:function(features){if(!(features instanceof Array)){features=[features];}
var gml=this.createElementNS("http://www.opengis.net/wfs","wfs:"+this.collectionName);for(var i=0;i<features.length;i++){gml.appendChild(this.createFeatureXML(features[i]));}
return OpenLayers.Format.XML.prototype.write.apply(this,[gml]);},createFeatureXML:function(feature){var geometry=feature.geometry;var geometryNode=this.buildGeometryNode(geometry);var geomContainer=this.createElementNS(this.featureNS,this.featurePrefix+":"+
this.geometryName);geomContainer.appendChild(geometryNode);var featureNode=this.createElementNS(this.gmlns,"gml:"+this.featureName);var featureContainer=this.createElementNS(this.featureNS,this.featurePrefix+":"+
this.layerName);var fid=feature.fid||feature.id;featureContainer.setAttribute("fid",fid);featureContainer.appendChild(geomContainer);for(var attr in feature.attributes){var attrText=this.createTextNode(feature.attributes[attr]);var nodename=attr.substring(attr.lastIndexOf(":")+1);var attrContainer=this.createElementNS(this.featureNS,this.featurePrefix+":"+
nodename);attrContainer.appendChild(attrText);featureContainer.appendChild(attrContainer);}
featureNode.appendChild(featureContainer);return featureNode;},buildGeometryNode:function(geometry){if(this.externalProjection&&this.internalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var className=geometry.CLASS_NAME;var type=className.substring(className.lastIndexOf(".")+1);var builder=this.buildGeometry[type.toLowerCase()];return builder.apply(this,[geometry]);},buildGeometry:{point:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:Point");gml.appendChild(this.buildCoordinatesNode(geometry));return gml;},multipoint:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:MultiPoint");var points=geometry.components;var pointMember,pointGeom;for(var i=0;i<points.length;i++){pointMember=this.createElementNS(this.gmlns,"gml:pointMember");pointGeom=this.buildGeometry.point.apply(this,[points[i]]);pointMember.appendChild(pointGeom);gml.appendChild(pointMember);}
return gml;},linestring:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:LineString");gml.appendChild(this.buildCoordinatesNode(geometry));return gml;},multilinestring:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:MultiLineString");var lines=geometry.components;var lineMember,lineGeom;for(var i=0;i<lines.length;++i){lineMember=this.createElementNS(this.gmlns,"gml:lineStringMember");lineGeom=this.buildGeometry.linestring.apply(this,[lines[i]]);lineMember.appendChild(lineGeom);gml.appendChild(lineMember);}
return gml;},linearring:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:LinearRing");gml.appendChild(this.buildCoordinatesNode(geometry));return gml;},polygon:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:Polygon");var rings=geometry.components;var ringMember,ringGeom,type;for(var i=0;i<rings.length;++i){type=(i==0)?"outerBoundaryIs":"innerBoundaryIs";ringMember=this.createElementNS(this.gmlns,"gml:"+type);ringGeom=this.buildGeometry.linearring.apply(this,[rings[i]]);ringMember.appendChild(ringGeom);gml.appendChild(ringMember);}
return gml;},multipolygon:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:MultiPolygon");var polys=geometry.components;var polyMember,polyGeom;for(var i=0;i<polys.length;++i){polyMember=this.createElementNS(this.gmlns,"gml:polygonMember");polyGeom=this.buildGeometry.polygon.apply(this,[polys[i]]);polyMember.appendChild(polyGeom);gml.appendChild(polyMember);}
return gml;}},buildCoordinatesNode:function(geometry){var coordinatesNode=this.createElementNS(this.gmlns,"gml:coordinates");coordinatesNode.setAttribute("decimal",".");coordinatesNode.setAttribute("cs",",");coordinatesNode.setAttribute("ts"," ");var points=(geometry.components)?geometry.components:[geometry];var parts=[];for(var i=0;i<points.length;i++){parts.push(points[i].x+","+points[i].y);}
var txtNode=this.createTextNode(parts.join(" "));coordinatesNode.appendChild(txtNode);return coordinatesNode;},CLASS_NAME:"OpenLayers.Format.GML"});OpenLayers.Format.GeoJSON=OpenLayers.Class(OpenLayers.Format.JSON,{initialize:function(options){OpenLayers.Format.JSON.prototype.initialize.apply(this,[options]);},read:function(json,type,filter){type=(type)?type:"FeatureCollection";var results=null;var obj=null;if(typeof json=="string"){obj=OpenLayers.Format.JSON.prototype.read.apply(this,[json,filter]);}else{obj=json;}
if(!obj){OpenLayers.Console.error("Bad JSON: "+json);}else if(typeof(obj.type)!="string"){OpenLayers.Console.error("Bad GeoJSON - no type: "+json);}else if(this.isValidType(obj,type)){switch(type){case"Geometry":try{results=this.parseGeometry(obj);}catch(err){OpenLayers.Console.error(err);}
break;case"Feature":try{results=this.parseFeature(obj);results.type="Feature";}catch(err){OpenLayers.Console.error(err);}
break;case"FeatureCollection":results=[];switch(obj.type){case"Feature":try{results.push(this.parseFeature(obj));}catch(err){results=null;OpenLayers.Console.error(err);}
break;case"FeatureCollection":for(var i=0;i<obj.features.length;++i){try{results.push(this.parseFeature(obj.features[i]));}catch(err){results=null;OpenLayers.Console.error(err);}}
break;default:try{var geom=this.parseGeometry(obj);results.push(new OpenLayers.Feature.Vector(geom));}catch(err){results=null;OpenLayers.Console.error(err);}}
break;}}
return results;},isValidType:function(obj,type){var valid=false;switch(type){case"Geometry":if(OpenLayers.Util.indexOf(["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","Box","GeometryCollection"],obj.type)==-1){OpenLayers.Console.error("Unsupported geometry type: "+
obj.type);}else{valid=true;}
break;case"FeatureCollection":valid=true;break;default:if(obj.type==type){valid=true;}else{OpenLayers.Console.error("Cannot convert types from "+
obj.type+" to "+type);}}
return valid;},parseFeature:function(obj){var feature,geometry,attributes;attributes=(obj.properties)?obj.properties:{};try{geometry=this.parseGeometry(obj.geometry);}catch(err){throw err;}
feature=new OpenLayers.Feature.Vector(geometry,attributes);if(obj.id){feature.fid=obj.id;}
return feature;},parseGeometry:function(obj){var geometry;if(obj.type=="GeometryCollection"){if(!(obj.geometries instanceof Array)){throw"GeometryCollection must have geometries array: "+obj;}
var numGeom=obj.geometries.length;var components=new Array(numGeom);for(var i=0;i<numGeom;++i){components[i]=this.parseGeometry.apply(this,[obj.geometries[i]]);}
geometry=new OpenLayers.Geometry.Collection(components);}else{if(!(obj.coordinates instanceof Array)){throw"Geometry must have coordinates array: "+obj;}
if(!this.parseCoords[obj.type.toLowerCase()]){throw"Unsupported geometry type: "+obj.type;}
try{geometry=this.parseCoords[obj.type.toLowerCase()].apply(this,[obj.coordinates]);}catch(err){throw err;}}
if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}
return geometry;},parseCoords:{"point":function(array){if(array.length!=2){throw"Only 2D points are supported: "+array;}
return new OpenLayers.Geometry.Point(array[0],array[1]);},"multipoint":function(array){var points=[];var p=null;for(var i=0;i<array.length;++i){try{p=this.parseCoords["point"].apply(this,[array[i]]);}catch(err){throw err;}
points.push(p);}
return new OpenLayers.Geometry.MultiPoint(points);},"linestring":function(array){var points=[];var p=null;for(var i=0;i<array.length;++i){try{p=this.parseCoords["point"].apply(this,[array[i]]);}catch(err){throw err;}
points.push(p);}
return new OpenLayers.Geometry.LineString(points);},"multilinestring":function(array){var lines=[];var l=null;for(var i=0;i<array.length;++i){try{l=this.parseCoords["linestring"].apply(this,[array[i]]);}catch(err){throw err;}
lines.push(l);}
return new OpenLayers.Geometry.MultiLineString(lines);},"polygon":function(array){var rings=[];var r,l;for(var i=0;i<array.length;++i){try{l=this.parseCoords["linestring"].apply(this,[array[i]]);}catch(err){throw err;}
r=new OpenLayers.Geometry.LinearRing(l.components);rings.push(r);}
return new OpenLayers.Geometry.Polygon(rings);},"multipolygon":function(array){var polys=[];var p=null;for(var i=0;i<array.length;++i){try{p=this.parseCoords["polygon"].apply(this,[array[i]]);}catch(err){throw err;}
polys.push(p);}
return new OpenLayers.Geometry.MultiPolygon(polys);},"box":function(array){if(array.length!=2){throw"GeoJSON box coordinates must have 2 elements";}
return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(array[0][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[0][1])])]);}},write:function(obj,pretty){var geojson={"type":null};if(obj instanceof Array){geojson.type="FeatureCollection";var numFeatures=obj.length;geojson.features=new Array(numFeatures);for(var i=0;i<numFeatures;++i){var element=obj[i];if(!element instanceof OpenLayers.Feature.Vector){var msg="FeatureCollection only supports collections "+"of features: "+element;throw msg;}
geojson.features[i]=this.extract.feature.apply(this,[element]);}}else if(obj.CLASS_NAME.indexOf("OpenLayers.Geometry")==0){geojson=this.extract.geometry.apply(this,[obj]);}else if(obj instanceof OpenLayers.Feature.Vector){geojson=this.extract.feature.apply(this,[obj]);if(obj.layer&&obj.layer.projection){geojson.crs=this.createCRSObject(obj);}}
return OpenLayers.Format.JSON.prototype.write.apply(this,[geojson,pretty]);},createCRSObject:function(object){var proj=object.layer.projection.toString();var crs={};if(proj.match(/epsg:/i)){var code=parseInt(proj.substring(proj.indexOf(":")+1));if(code==4326){crs={"type":"OGC","properties":{"urn":"urn:ogc:def:crs:OGC:1.3:CRS84"}};}else{crs={"type":"EPSG","properties":{"code":code}};}}
return crs;},extract:{'feature':function(feature){var geom=this.extract.geometry.apply(this,[feature.geometry]);return{"type":"Feature","id":feature.fid==null?feature.id:feature.fid,"properties":feature.attributes,"geometry":geom};},'geometry':function(geometry){if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var geometryType=geometry.CLASS_NAME.split('.')[2];var data=this.extract[geometryType.toLowerCase()].apply(this,[geometry]);var json;if(geometryType=="Collection"){json={"type":"GeometryCollection","geometries":data};}else{json={"type":geometryType,"coordinates":data};}
return json;},'point':function(point){return[point.x,point.y];},'multipoint':function(multipoint){var array=[];for(var i=0;i<multipoint.components.length;++i){array.push(this.extract.point.apply(this,[multipoint.components[i]]));}
return array;},'linestring':function(linestring){var array=[];for(var i=0;i<linestring.components.length;++i){array.push(this.extract.point.apply(this,[linestring.components[i]]));}
return array;},'multilinestring':function(multilinestring){var array=[];for(var i=0;i<multilinestring.components.length;++i){array.push(this.extract.linestring.apply(this,[multilinestring.components[i]]));}
return array;},'polygon':function(polygon){var array=[];for(var i=0;i<polygon.components.length;++i){array.push(this.extract.linestring.apply(this,[polygon.components[i]]));}
return array;},'multipolygon':function(multipolygon){var array=[];for(var i=0;i<multipolygon.components.length;++i){array.push(this.extract.polygon.apply(this,[multipolygon.components[i]]));}
return array;},'collection':function(collection){var len=collection.components.length;var array=new Array(len);for(var i=0;i<len;++i){array[i]=this.extract.geometry.apply(this,[collection.components[i]]);}
return array;}},CLASS_NAME:"OpenLayers.Format.GeoJSON"});OpenLayers.Format.GeoRSS=OpenLayers.Class(OpenLayers.Format.XML,{rssns:"http://backend.userland.com/rss2",featureNS:"http://mapserver.gis.umn.edu/mapserver",georssns:"http://www.georss.org/georss",geons:"http://www.w3.org/2003/01/geo/wgs84_pos#",featureTitle:"Untitled",featureDescription:"No Description",gmlParser:null,xy:false,initialize:function(options){OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},createGeometryFromItem:function(item){var point=this.getElementsByTagNameNS(item,this.georssns,"point");var lat=this.getElementsByTagNameNS(item,this.geons,'lat');var lon=this.getElementsByTagNameNS(item,this.geons,'long');var line=this.getElementsByTagNameNS(item,this.georssns,"line");var polygon=this.getElementsByTagNameNS(item,this.georssns,"polygon");var where=this.getElementsByTagNameNS(item,this.georssns,"where");if(point.length>0||(lat.length>0&&lon.length>0)){var location;if(point.length>0){location=OpenLayers.String.trim(point[0].firstChild.nodeValue).split(/\s+/);if(location.length!=2){location=OpenLayers.String.trim(point[0].firstChild.nodeValue).split(/\s*,\s*/);}}else{location=[parseFloat(lat[0].firstChild.nodeValue),parseFloat(lon[0].firstChild.nodeValue)];}
var geometry=new OpenLayers.Geometry.Point(parseFloat(location[1]),parseFloat(location[0]));}else if(line.length>0){var coords=OpenLayers.String.trim(line[0].firstChild.nodeValue).split(/\s+/);var components=[];var point;for(var i=0;i<coords.length;i+=2){point=new OpenLayers.Geometry.Point(parseFloat(coords[i+1]),parseFloat(coords[i]));components.push(point);}
geometry=new OpenLayers.Geometry.LineString(components);}else if(polygon.length>0){var coords=OpenLayers.String.trim(polygon[0].firstChild.nodeValue).split(/\s+/);var components=[];var point;for(var i=0;i<coords.length;i+=2){point=new OpenLayers.Geometry.Point(parseFloat(coords[i+1]),parseFloat(coords[i]));components.push(point);}
geometry=new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(components)]);}else if(where.length>0){if(!this.gmlParser){this.gmlParser=new OpenLayers.Format.GML({'xy':this.xy});}
var feature=this.gmlParser.parseFeature(where[0]);geometry=feature.geometry;}
if(geometry&&this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}
return geometry;},createFeatureFromItem:function(item){var geometry=this.createGeometryFromItem(item);var title=this.getChildValue(item,"*","title",this.featureTitle);var description=this.getChildValue(item,"*","description",this.getChildValue(item,"*","content",this.featureDescription));var link=this.getChildValue(item,"*","link");if(!link){try{link=this.getElementsByTagNameNS(item,"*","link")[0].getAttribute("href");}catch(e){link=null;}}
var id=this.getChildValue(item,"*","id",null);var data={"title":title,"description":description,"link":link};var feature=new OpenLayers.Feature.Vector(geometry,data);feature.fid=id;return feature;},getChildValue:function(node,nsuri,name,def){var value;try{value=this.getElementsByTagNameNS(node,nsuri,name)[0].firstChild.nodeValue;}catch(e){value=(def==undefined)?"":def;}
return value;},read:function(doc){if(typeof doc=="string"){doc=OpenLayers.Format.XML.prototype.read.apply(this,[doc]);}
var itemlist=null;itemlist=this.getElementsByTagNameNS(doc,'*','item');if(itemlist.length==0){itemlist=this.getElementsByTagNameNS(doc,'*','entry');}
var numItems=itemlist.length;var features=new Array(numItems);for(var i=0;i<numItems;i++){features[i]=this.createFeatureFromItem(itemlist[i]);}
return features;},write:function(features){var georss;if(features instanceof Array){georss=this.createElementNS(this.rssns,"rss");for(var i=0;i<features.length;i++){georss.appendChild(this.createFeatureXML(features[i]));}}else{georss=this.createFeatureXML(features);}
return OpenLayers.Format.XML.prototype.write.apply(this,[georss]);},createFeatureXML:function(feature){var geometryNode=this.buildGeometryNode(feature.geometry);var featureNode=this.createElementNS(this.rssns,"item");var titleNode=this.createElementNS(this.rssns,"title");titleNode.appendChild(this.createTextNode(feature.attributes.title?feature.attributes.title:""));var descNode=this.createElementNS(this.rssns,"description");descNode.appendChild(this.createTextNode(feature.attributes.description?feature.attributes.description:""));featureNode.appendChild(titleNode);featureNode.appendChild(descNode);if(feature.attributes.link){var linkNode=this.createElementNS(this.rssns,"link");linkNode.appendChild(this.createTextNode(feature.attributes.link));featureNode.appendChild(linkNode);}
for(var attr in feature.attributes){if(attr=="link"||attr=="title"||attr=="description"){continue;}
var attrText=this.createTextNode(feature.attributes[attr]);var nodename=attr;if(attr.search(":")!=-1){nodename=attr.split(":")[1];}
var attrContainer=this.createElementNS(this.featureNS,"feature:"+nodename);attrContainer.appendChild(attrText);featureNode.appendChild(attrContainer);}
featureNode.appendChild(geometryNode);return featureNode;},buildGeometryNode:function(geometry){if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var node;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Polygon"){node=this.createElementNS(this.georssns,'georss:polygon');node.appendChild(this.buildCoordinatesNode(geometry.components[0]));}
else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LineString"){node=this.createElementNS(this.georssns,'georss:line');node.appendChild(this.buildCoordinatesNode(geometry));}
else if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){node=this.createElementNS(this.georssns,'georss:point');node.appendChild(this.buildCoordinatesNode(geometry));}else{throw"Couldn't parse "+geometry.CLASS_NAME;}
return node;},buildCoordinatesNode:function(geometry){var points=null;if(geometry.components){points=geometry.components;}
var path;if(points){var numPoints=points.length;var parts=new Array(numPoints);for(var i=0;i<numPoints;i++){parts[i]=points[i].y+" "+points[i].x;}
path=parts.join(" ");}else{path=geometry.y+" "+geometry.x;}
return this.createTextNode(path);},CLASS_NAME:"OpenLayers.Format.GeoRSS"});OpenLayers.Format.KML=OpenLayers.Class(OpenLayers.Format.XML,{kmlns:"http://earth.google.com/kml/2.0",placemarksDesc:"No description available",foldersName:"OpenLayers export",foldersDesc:"Exported on "+new Date(),extractAttributes:true,extractStyles:false,internalns:null,features:null,styles:null,styleBaseUrl:"",fetched:null,maxDepth:0,initialize:function(options){this.regExes={trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g),kmlColor:(/(\w{2})(\w{2})(\w{2})(\w{2})/),kmlIconPalette:(/root:\/\/icons\/palette-(\d+)(\.\w+)/),straightBracket:(/\$\[(.*?)\]/g)};OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},read:function(data){this.features=[];this.styles={};this.fetched={};var options={depth:this.maxDepth,styleBaseUrl:this.styleBaseUrl};return this.parseData(data,options);},parseData:function(data,options){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
var types=["Link","NetworkLink","Style","StyleMap","Placemark"];for(var i=0;i<types.length;++i){var type=types[i];var nodes=this.getElementsByTagNameNS(data,"*",type);if(nodes.length==0){continue;}
switch(type.toLowerCase()){case"link":case"networklink":this.parseLinks(nodes,options);break;case"style":if(this.extractStyles){this.parseStyles(nodes,options);}
break;case"stylemap":if(this.extractStyles){this.parseStyleMaps(nodes,options);}
break;case"placemark":this.parseFeatures(nodes,options);break;}}
return this.features;},parseLinks:function(nodes,options){if(options.depth>=this.maxDepth){return false;}
var newOptions=OpenLayers.Util.extend({},options);newOptions.depth++;for(var i=0;i<nodes.length;i++){var href=this.parseProperty(nodes[i],"*","href");if(href&&!this.fetched[href]){this.fetched[href]=true;var data=this.fetchLink(href);if(data){this.parseData(data,newOptions);}}}},fetchLink:function(href){var request=new OpenLayers.Ajax.Request(href,{method:'get',asynchronous:false});if(request&&request.transport){return request.transport.responseText;}},parseStyles:function(nodes,options){for(var i=0;i<nodes.length;i++){var style=this.parseStyle(nodes[i]);if(style){styleName=(options.styleBaseUrl||"")+"#"+style.id;this.styles[styleName]=style;}}},parseStyle:function(node){var style={};var types=["LineStyle","PolyStyle","IconStyle","BalloonStyle"];var type,nodeList,geometry,parser;for(var i=0;i<types.length;++i){type=types[i];styleTypeNode=this.getElementsByTagNameNS(node,"*",type)[0];if(!styleTypeNode){continue;}
switch(type.toLowerCase()){case"linestyle":var color=this.parseProperty(styleTypeNode,"*","color");if(color){var matches=(color.toString()).match(this.regExes.kmlColor);var alpha=matches[1];style["strokeOpacity"]=parseInt(alpha,16)/255;var b=matches[2];var g=matches[3];var r=matches[4];style["strokeColor"]="#"+r+g+b;}
var width=this.parseProperty(styleTypeNode,"*","width");if(width){style["strokeWidth"]=width;}
case"polystyle":var color=this.parseProperty(styleTypeNode,"*","color");if(color){var matches=(color.toString()).match(this.regExes.kmlColor);var alpha=matches[1];style["fillOpacity"]=parseInt(alpha,16)/255;var b=matches[2];var g=matches[3];var r=matches[4];style["fillColor"]="#"+r+g+b;}
break;case"iconstyle":var scale=parseFloat(this.parseProperty(styleTypeNode,"*","scale")||1);var width=32*scale;var height=32*scale;var iconNode=this.getElementsByTagNameNS(styleTypeNode,"*","Icon")[0];if(iconNode){var href=this.parseProperty(iconNode,"*","href");if(href){var w=this.parseProperty(iconNode,"*","w");var h=this.parseProperty(iconNode,"*","h");var google="http://maps.google.com/mapfiles/kml";if(OpenLayers.String.startsWith(href,google)&&!w&&!h){w=64;h=64;scale=scale/2;}
w=w||h;h=h||w;if(w){width=parseInt(w)*scale;}
if(h){height=parseInt(h)*scale;}
var matches=href.match(this.regExes.kmlIconPalette);if(matches){var palette=matches[1];var file_extension=matches[2];var x=this.parseProperty(iconNode,"*","x");var y=this.parseProperty(iconNode,"*","y");var posX=x?x/32:0;var posY=y?(7-y/32):7;var pos=posY*8+posX;href="http://maps.google.com/mapfiles/kml/pal"
+palette+"/icon"+pos+file_extension;}
style["graphicOpacity"]=1;style["externalGraphic"]=href;}}
var hotSpotNode=this.getElementsByTagNameNS(styleTypeNode,"*","hotSpot")[0];if(hotSpotNode){var x=parseFloat(hotSpotNode.getAttribute("x"));var y=parseFloat(hotSpotNode.getAttribute("y"));var xUnits=hotSpotNode.getAttribute("xunits");if(xUnits=="pixels"){style["graphicXOffset"]=-x*scale;}
else if(xUnits=="insetPixels"){style["graphicXOffset"]=-width+(x*scale);}
else if(xUnits=="fraction"){style["graphicXOffset"]=-width*x;}
var yUnits=hotSpotNode.getAttribute("yunits");if(yUnits=="pixels"){style["graphicYOffset"]=-height+(y*scale)+1;}
else if(yUnits=="insetPixels"){style["graphicYOffset"]=-(y*scale)+1;}
else if(yUnits=="fraction"){style["graphicYOffset"]=-height*(1-y)+1;}}
style["graphicWidth"]=width;style["graphicHeight"]=height;break;case"balloonstyle":var balloonStyle=OpenLayers.Util.getXmlNodeValue(styleTypeNode);if(balloonStyle){style["balloonStyle"]=balloonStyle.replace(this.regExes.straightBracket,"${$1}");}
break;default:}}
if(!style["strokeColor"]&&style["fillColor"]){style["strokeColor"]=style["fillColor"];}
var id=node.getAttribute("id");if(id&&style){style.id=id;}
return style;},parseStyleMaps:function(nodes,options){for(var i=0;i<nodes.length;i++){var node=nodes[i];var pairs=this.getElementsByTagNameNS(node,"*","Pair");var id=node.getAttribute("id");for(var j=0;j<pairs.length;j++){var pair=pairs[j];var key=this.parseProperty(pair,"*","key");var styleUrl=this.parseProperty(pair,"*","styleUrl");if(styleUrl&&key=="normal"){this.styles[(options.styleBaseUrl||"")+"#"+id]=this.styles[(options.styleBaseUrl||"")+styleUrl];}
if(styleUrl&&key=="highlight"){}}}},parseFeatures:function(nodes,options){var features=new Array(nodes.length);for(var i=0;i<nodes.length;i++){var featureNode=nodes[i];var feature=this.parseFeature.apply(this,[featureNode]);if(feature){if(this.extractStyles&&feature.attributes&&feature.attributes.styleUrl){feature.style=this.getStyle(feature.attributes.styleUrl);}
//#3581
var inlineStyleNode=(this.extractStyles==true)?this.getElementsByTagNameNS(featureNode,"*","Style")[0]:null;if(inlineStyleNode){var inlineStyle=this.parseStyle(inlineStyleNode);if(inlineStyle){feature.style=OpenLayers.Util.extend({},feature.style);OpenLayers.Util.extend(feature.style,inlineStyle);}}
features[i]=feature;}else{throw"Bad Placemark: "+i;}}
this.features=this.features.concat(features);},parseFeature:function(node){var order=["MultiGeometry","Polygon","LineString","Point"];var type,nodeList,geometry,parser;for(var i=0;i<order.length;++i){type=order[i];this.internalns=node.namespaceURI?node.namespaceURI:this.kmlns;nodeList=this.getElementsByTagNameNS(node,this.internalns,type);if(nodeList.length>0){var parser=this.parseGeometry[type.toLowerCase()];if(parser){geometry=parser.apply(this,[nodeList[0]]);if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}}else{OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType",{'geomType':type}));}
break;}}
var attributes;if(this.extractAttributes){attributes=this.parseAttributes(node);}
var feature=new OpenLayers.Feature.Vector(geometry,attributes);var fid=node.getAttribute("id")||node.getAttribute("name");if(fid!=null){feature.fid=fid;}
return feature;},getStyle:function(styleUrl,options){var styleBaseUrl=OpenLayers.Util.removeTail(styleUrl);var newOptions=OpenLayers.Util.extend({},options);newOptions.depth++;newOptions.styleBaseUrl=styleBaseUrl;if(!this.styles[styleUrl]&&!OpenLayers.String.startsWith(styleUrl,"#")&&newOptions.depth<=this.maxDepth&&!this.fetched[styleBaseUrl]){var data=this.fetchLink(styleBaseUrl);if(data){this.parseData(data,newOptions);}}
var style=this.styles[styleUrl];return style;},parseGeometry:{point:function(node){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"coordinates");var coords=[];if(nodeList.length>0){var coordString=nodeList[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.removeSpace,"");coords=coordString.split(",");}
var point=null;if(coords.length>1){if(coords.length==2){coords[2]=null;}
point=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{throw"Bad coordinate string: "+coordString;}
return point;},linestring:function(node,ring){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"coordinates");var line=null;if(nodeList.length>0){var coordString=this.concatChildValues(nodeList[0]);coordString=coordString.replace(this.regExes.trimSpace,"");coordString=coordString.replace(this.regExes.trimComma,",");var pointList=coordString.split(this.regExes.splitSpace);var numPoints=pointList.length;var points=new Array(numPoints);var coords,numCoords;for(var i=0;i<numPoints;++i){coords=pointList[i].split(",");numCoords=coords.length;if(numCoords>1){if(coords.length==2){coords[2]=null;}
points[i]=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{throw"Bad LineString point coordinates: "+
pointList[i];}}
if(numPoints){if(ring){line=new OpenLayers.Geometry.LinearRing(points);}else{line=new OpenLayers.Geometry.LineString(points);}}else{throw"Bad LineString coordinates: "+coordString;}}
return line;},polygon:function(node){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"LinearRing");var numRings=nodeList.length;var components=new Array(numRings);if(numRings>0){var ring;for(var i=0;i<nodeList.length;++i){ring=this.parseGeometry.linestring.apply(this,[nodeList[i],true]);if(ring){components[i]=ring;}else{throw"Bad LinearRing geometry: "+i;}}}
return new OpenLayers.Geometry.Polygon(components);},multigeometry:function(node){var child,parser;var parts=[];var children=node.childNodes;for(var i=0;i<children.length;++i){child=children[i];if(child.nodeType==1){var type=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;var parser=this.parseGeometry[type.toLowerCase()];if(parser){parts.push(parser.apply(this,[child]));}}}
return new OpenLayers.Geometry.Collection(parts);}},parseAttributes:function(node){var attributes={};var child,grandchildren,grandchild;var children=node.childNodes;for(var i=0;i<children.length;++i){child=children[i];if(child.nodeType==1){grandchildren=child.childNodes;if(grandchildren.length==1||grandchildren.length==3){var grandchild;switch(grandchildren.length){case 1:grandchild=grandchildren[0];break;case 3:default:grandchild=grandchildren[1];break;}
if(grandchild.nodeType==3||grandchild.nodeType==4){var name=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;var value=OpenLayers.Util.getXmlNodeValue(grandchild);if(value){value=value.replace(this.regExes.trimSpace,"");attributes[name]=value;}}}}}
return attributes;},parseProperty:function(xmlNode,namespace,tagName){var value;var nodeList=this.getElementsByTagNameNS(xmlNode,namespace,tagName);try{value=OpenLayers.Util.getXmlNodeValue(nodeList[0]);}catch(e){value=null;}
return value;},write:function(features){if(!(features instanceof Array)){features=[features];}
var kml=this.createElementNS(this.kmlns,"kml");var folder=this.createFolderXML();for(var i=0;i<features.length;++i){folder.appendChild(this.createPlacemarkXML(features[i]));}
kml.appendChild(folder);return OpenLayers.Format.XML.prototype.write.apply(this,[kml]);},createFolderXML:function(){var folderName=this.createElementNS(this.kmlns,"name");var folderNameText=this.createTextNode(this.foldersName);folderName.appendChild(folderNameText);var folderDesc=this.createElementNS(this.kmlns,"description");var folderDescText=this.createTextNode(this.foldersDesc);folderDesc.appendChild(folderDescText);var folder=this.createElementNS(this.kmlns,"Folder");folder.appendChild(folderName);folder.appendChild(folderDesc);return folder;},createPlacemarkXML:function(feature){var placemarkName=this.createElementNS(this.kmlns,"name");var name=(feature.attributes.name)?feature.attributes.name:feature.id;placemarkName.appendChild(this.createTextNode(name));var placemarkDesc=this.createElementNS(this.kmlns,"description");var desc=(feature.attributes.description)?feature.attributes.description:this.placemarksDesc;placemarkDesc.appendChild(this.createTextNode(desc));var placemarkNode=this.createElementNS(this.kmlns,"Placemark");if(feature.fid!=null){placemarkNode.setAttribute("id",feature.fid);}
placemarkNode.appendChild(placemarkName);placemarkNode.appendChild(placemarkDesc);var geometryNode=this.buildGeometryNode(feature.geometry);placemarkNode.appendChild(geometryNode);return placemarkNode;},buildGeometryNode:function(geometry){if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var className=geometry.CLASS_NAME;var type=className.substring(className.lastIndexOf(".")+1);var builder=this.buildGeometry[type.toLowerCase()];var node=null;if(builder){node=builder.apply(this,[geometry]);}
return node;},buildGeometry:{point:function(geometry){var kml=this.createElementNS(this.kmlns,"Point");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},multipoint:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},linestring:function(geometry){var kml=this.createElementNS(this.kmlns,"LineString");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},multilinestring:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},linearring:function(geometry){var kml=this.createElementNS(this.kmlns,"LinearRing");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},polygon:function(geometry){var kml=this.createElementNS(this.kmlns,"Polygon");var rings=geometry.components;var ringMember,ringGeom,type;for(var i=0;i<rings.length;++i){type=(i==0)?"outerBoundaryIs":"innerBoundaryIs";ringMember=this.createElementNS(this.kmlns,type);ringGeom=this.buildGeometry.linearring.apply(this,[rings[i]]);ringMember.appendChild(ringGeom);kml.appendChild(ringMember);}
return kml;},multipolygon:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},collection:function(geometry){var kml=this.createElementNS(this.kmlns,"MultiGeometry");var child;for(var i=0;i<geometry.components.length;++i){child=this.buildGeometryNode.apply(this,[geometry.components[i]]);if(child){kml.appendChild(child);}}
return kml;}},buildCoordinatesNode:function(geometry){var coordinatesNode=this.createElementNS(this.kmlns,"coordinates");var path;var points=geometry.components;if(points){var point;var numPoints=points.length;var parts=new Array(numPoints);for(var i=0;i<numPoints;++i){point=points[i];parts[i]=point.x+","+point.y;}
path=parts.join(" ");}else{path=geometry.x+","+geometry.y;}
var txtNode=this.createTextNode(path);coordinatesNode.appendChild(txtNode);return coordinatesNode;},CLASS_NAME:"OpenLayers.Format.KML"});OpenLayers.Format.OSM=OpenLayers.Class(OpenLayers.Format.XML,{checkTags:false,interestingTagsExclude:null,areaTags:null,initialize:function(options){var layer_defaults={'interestingTagsExclude':['source','source_ref','source:ref','history','attribution','created_by'],'areaTags':['area','building','leisure','tourism','ruins','historic','landuse','military','natural','sport']};layer_defaults=OpenLayers.Util.extend(layer_defaults,options);var interesting={};for(var i=0;i<layer_defaults.interestingTagsExclude.length;i++){interesting[layer_defaults.interestingTagsExclude[i]]=true;}
layer_defaults.interestingTagsExclude=interesting;var area={};for(var i=0;i<layer_defaults.areaTags.length;i++){area[layer_defaults.areaTags[i]]=true;}
layer_defaults.areaTags=area;OpenLayers.Format.XML.prototype.initialize.apply(this,[layer_defaults]);},read:function(doc){if(typeof doc=="string"){doc=OpenLayers.Format.XML.prototype.read.apply(this,[doc]);}
var nodes=this.getNodes(doc);var ways=this.getWays(doc);var feat_list=new Array(ways.length);for(var i=0;i<ways.length;i++){var point_list=new Array(ways[i].nodes.length);var poly=this.isWayArea(ways[i])?1:0;for(var j=0;j<ways[i].nodes.length;j++){var node=nodes[ways[i].nodes[j]];var point=new OpenLayers.Geometry.Point(node.lon,node.lat);point.osm_id=parseInt(ways[i].nodes[j]);point_list[j]=point;node.used=true;}
var geometry=null;if(poly){geometry=new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(point_list));}else{geometry=new OpenLayers.Geometry.LineString(point_list);}
if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}
var feat=new OpenLayers.Feature.Vector(geometry,ways[i].tags);feat.osm_id=parseInt(ways[i].id);feat.fid="way."+feat.osm_id;feat_list[i]=feat;}
for(var node_id in nodes){var node=nodes[node_id];if(!node.used||this.checkTags){var tags=null;if(this.checkTags){var result=this.getTags(node.node,true);if(node.used&&!result[1]){continue;}
tags=result[0];}else{tags=this.getTags(node.node);}
var feat=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(node['lon'],node['lat']),tags);if(this.internalProjection&&this.externalProjection){feat.geometry.transform(this.externalProjection,this.internalProjection);}
feat.osm_id=parseInt(node_id);feat.fid="node."+feat.osm_id;feat_list.push(feat);}
node.node=null;}
return feat_list;},getNodes:function(doc){var node_list=doc.getElementsByTagName("node");var nodes={};for(var i=0;i<node_list.length;i++){var node=node_list[i];var id=node.getAttribute("id");nodes[id]={'lat':node.getAttribute("lat"),'lon':node.getAttribute("lon"),'node':node};}
return nodes;},getWays:function(doc){var way_list=doc.getElementsByTagName("way");var return_ways=[];for(var i=0;i<way_list.length;i++){var way=way_list[i];var way_object={id:way.getAttribute("id")};way_object.tags=this.getTags(way);var node_list=way.getElementsByTagName("nd");way_object.nodes=new Array(node_list.length);for(var j=0;j<node_list.length;j++){way_object.nodes[j]=node_list[j].getAttribute("ref");}
return_ways.push(way_object);}
return return_ways;},getTags:function(dom_node,interesting_tags){var tag_list=dom_node.getElementsByTagName("tag");var tags={};var interesting=false;for(var j=0;j<tag_list.length;j++){var key=tag_list[j].getAttribute("k");tags[key]=tag_list[j].getAttribute("v");if(interesting_tags){if(!this.interestingTagsExclude[key]){interesting=true;}}}
return interesting_tags?[tags,interesting]:tags;},isWayArea:function(way){var poly_shaped=false;var poly_tags=false;if(way.nodes[0]==way.nodes[way.nodes.length-1]){poly_shaped=true;}
if(this.checkTags){for(var key in way.tags){if(this.areaTags[key]){poly_tags=true;break;}}}
return poly_shaped&&(this.checkTags?poly_tags:true);},write:function(features){if(!(features instanceof Array)){features=[features];}
this.osm_id=1;this.created_nodes={};var root_node=this.createElementNS(null,"osm");root_node.setAttribute("version","0.5");root_node.setAttribute("generator","OpenLayers "+OpenLayers.VERSION_NUMBER);for(var i=features.length-1;i>=0;i--){var nodes=this.createFeatureNodes(features[i]);for(var j=0;j<nodes.length;j++){root_node.appendChild(nodes[j]);}}
return OpenLayers.Format.XML.prototype.write.apply(this,[root_node]);},createFeatureNodes:function(feature){var nodes=[];var className=feature.geometry.CLASS_NAME;var type=className.substring(className.lastIndexOf(".")+1);type=type.toLowerCase();var builder=this.createXML[type];if(builder){nodes=builder.apply(this,[feature]);}
return nodes;},createXML:{'point':function(point){var id=null;var geometry=point.geometry?point.geometry:point;var already_exists=false;if(point.osm_id){id=point.osm_id;if(this.created_nodes[id]){already_exists=true;}}else{id=-this.osm_id;this.osm_id++;}
if(already_exists){node=this.created_nodes[id];}else{var node=this.createElementNS(null,"node");}
this.created_nodes[id]=node;node.setAttribute("id",id);node.setAttribute("lon",geometry.x);node.setAttribute("lat",geometry.y);if(point.attributes){this.serializeTags(point,node);}
this.setState(point,node);return already_exists?[]:[node];},linestring:function(feature){var nodes=[];var geometry=feature.geometry;if(feature.osm_id){id=feature.osm_id;}else{id=-this.osm_id;this.osm_id++;}
var way=this.createElementNS(null,"way");way.setAttribute("id",id);for(var i=0;i<geometry.components.length;i++){var node=this.createXML['point'].apply(this,[geometry.components[i]]);if(node.length){node=node[0];var node_ref=node.getAttribute("id");nodes.push(node);}else{node_ref=geometry.components[i].osm_id;node=this.created_nodes[node_ref];}
this.setState(feature,node);var nd_dom=this.createElementNS(null,"nd");nd_dom.setAttribute("ref",node_ref);way.appendChild(nd_dom);}
this.serializeTags(feature,way);nodes.push(way);return nodes;},polygon:function(feature){var attrs=OpenLayers.Util.extend({'area':'yes'},feature.attributes);var feat=new OpenLayers.Feature.Vector(feature.geometry.components[0],attrs);feat.osm_id=feature.osm_id;return this.createXML['linestring'].apply(this,[feat]);}},serializeTags:function(feature,node){for(var key in feature.attributes){var tag=this.createElementNS(null,"tag");tag.setAttribute("k",key);tag.setAttribute("v",feature.attributes[key]);node.appendChild(tag);}},setState:function(feature,node){if(feature.state){var state=null;switch(feature.state){case OpenLayers.State.UPDATE:state="modify";case OpenLayers.State.DELETE:state="delete";}
if(state){node.setAttribute("action",state);}}},CLASS_NAME:"OpenLayers.Format.OSM"});OpenLayers.Geometry.LinearRing=OpenLayers.Class(OpenLayers.Geometry.LineString,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(points){OpenLayers.Geometry.LineString.prototype.initialize.apply(this,arguments);},addComponent:function(point,index){var added=false;var lastPoint=this.components.pop();if(index!=null||!point.equals(lastPoint)){added=OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,arguments);}
var firstPoint=this.components[0];OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[firstPoint]);return added;},removeComponent:function(point){if(this.components.length>4){this.components.pop();OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);var firstPoint=this.components[0];OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[firstPoint]);}},move:function(x,y){for(var i=0;i<this.components.length-1;i++){this.components[i].move(x,y);}},rotate:function(angle,origin){for(var i=0;i<this.components.length-1;++i){this.components[i].rotate(angle,origin);}},resize:function(scale,origin,ratio){for(var i=0;i<this.components.length-1;++i){this.components[i].resize(scale,origin,ratio);}},transform:function(source,dest){if(source&&dest){for(var i=0;i<this.components.length-1;i++){var component=this.components[i];component.transform(source,dest);}}
return this;},getArea:function(){var area=0.0;if(this.components&&(this.components.length>2)){var sum=0.0;for(var i=0;i<this.components.length-1;i++){var b=this.components[i];var c=this.components[i+1];sum+=(b.x+c.x)*(c.y-b.y);}
area=-sum/2.0;}
return area;},containsPoint:function(point){var approx=OpenLayers.Number.limitSigDigs;var digs=14;var px=approx(point.x,digs);var py=approx(point.y,digs);function getX(y,x1,y1,x2,y2){return(((x1-x2)*y)+((x2*y1)-(x1*y2)))/(y1-y2);}
var numSeg=this.components.length-1;var start,end,x1,y1,x2,y2,cx,cy;var crosses=0;for(var i=0;i<numSeg;++i){start=this.components[i];x1=approx(start.x,digs);y1=approx(start.y,digs);end=this.components[i+1];x2=approx(end.x,digs);y2=approx(end.y,digs);if(y1==y2){if(py==y1){if(x1<=x2&&(px>=x1&&px<=x2)||x1>=x2&&(px<=x1&&px>=x2)){crosses=-1;break;}}
continue;}
cx=approx(getX(py,x1,y1,x2,y2),digs);if(cx==px){if(y1<y2&&(py>=y1&&py<=y2)||y1>y2&&(py<=y1&&py>=y2)){crosses=-1;break;}}
if(cx<=px){continue;}
if(x1!=x2&&(cx<Math.min(x1,x2)||cx>Math.max(x1,x2))){continue;}
if(y1<y2&&(py>=y1&&py<y2)||y1>y2&&(py<y1&&py>=y2)){++crosses;}}
var contained=(crosses==-1)?1:!!(crosses&1);return contained;},intersects:function(geometry){var intersect=false;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.containsPoint(geometry);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LineString"){intersect=geometry.intersects(this);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){intersect=OpenLayers.Geometry.LineString.prototype.intersects.apply(this,[geometry]);}else{for(var i=0;i<geometry.components.length;++i){intersect=geometry.components[i].intersects(this);if(intersect){break;}}}
return intersect;},CLASS_NAME:"OpenLayers.Geometry.LinearRing"});OpenLayers.Handler.Path=OpenLayers.Class(OpenLayers.Handler.Point,{line:null,freehand:false,freehandToggle:'shiftKey',initialize:function(control,callbacks,options){OpenLayers.Handler.Point.prototype.initialize.apply(this,arguments);},createFeature:function(){this.line=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString());this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point());},destroyFeature:function(){OpenLayers.Handler.Point.prototype.destroyFeature.apply(this);if(this.line){this.line.destroy();}
this.line=null;},addPoint:function(){this.line.geometry.addComponent(this.point.geometry.clone(),this.line.geometry.components.length);this.callback("point",[this.point.geometry]);},freehandMode:function(evt){return(this.freehandToggle&&evt[this.freehandToggle])?!this.freehand:this.freehand;},modifyFeature:function(){var index=this.line.geometry.components.length-1;this.line.geometry.components[index].x=this.point.geometry.x;this.line.geometry.components[index].y=this.point.geometry.y;this.line.geometry.components[index].clearBounds();},drawFeature:function(){this.layer.drawFeature(this.line,this.style);this.layer.drawFeature(this.point,this.style);},geometryClone:function(){return this.line.geometry.clone();},mousedown:function(evt){if(this.lastDown&&this.lastDown.equals(evt.xy)){return false;}
if(this.lastDown==null){this.createFeature();}
this.mouseDown=true;this.lastDown=evt.xy;var lonlat=this.control.map.getLonLatFromPixel(evt.xy);this.point.geometry.x=lonlat.lon;this.point.geometry.y=lonlat.lat;if((this.lastUp==null)||!this.lastUp.equals(evt.xy)){this.addPoint();}
this.drawFeature();this.drawing=true;return false;},mousemove:function(evt){if(this.drawing){var lonlat=this.map.getLonLatFromPixel(evt.xy);this.point.geometry.x=lonlat.lon;this.point.geometry.y=lonlat.lat;if(this.mouseDown&&this.freehandMode(evt)){this.addPoint();}else{this.modifyFeature();}
this.drawFeature();}
return true;},mouseup:function(evt){this.mouseDown=false;if(this.drawing){if(this.freehandMode(evt)){this.finalize();}else{if(this.lastUp==null){this.addPoint();}
this.lastUp=evt.xy;}
return false;}
return true;},dblclick:function(evt){if(!this.freehandMode(evt)){var index=this.line.geometry.components.length-1;this.line.geometry.removeComponent(this.line.geometry.components[index]);this.finalize();}
return false;},CLASS_NAME:"OpenLayers.Handler.Path"});OpenLayers.Format.WFS=OpenLayers.Class(OpenLayers.Format.GML,{layer:null,wfsns:"http://www.opengis.net/wfs",ogcns:"http://www.opengis.net/ogc",initialize:function(options,layer){OpenLayers.Format.GML.prototype.initialize.apply(this,[options]);this.layer=layer;if(this.layer.featureNS){this.featureNS=this.layer.featureNS;}
if(this.layer.options.geometry_column){this.geometryName=this.layer.options.geometry_column;}
if(this.layer.options.typename){this.featureName=this.layer.options.typename;}},write:function(features){var transaction=this.createElementNS(this.wfsns,'wfs:Transaction');transaction.setAttribute("version","1.0.0");transaction.setAttribute("service","WFS");for(var i=0;i<features.length;i++){switch(features[i].state){case OpenLayers.State.INSERT:transaction.appendChild(this.insert(features[i]));break;case OpenLayers.State.UPDATE:transaction.appendChild(this.update(features[i]));break;case OpenLayers.State.DELETE:transaction.appendChild(this.remove(features[i]));break;}}
return OpenLayers.Format.XML.prototype.write.apply(this,[transaction]);},createFeatureXML:function(feature){var geometryNode=this.buildGeometryNode(feature.geometry);var geomContainer=this.createElementNS(this.featureNS,"feature:"+this.geometryName);geomContainer.appendChild(geometryNode);var featureContainer=this.createElementNS(this.featureNS,"feature:"+this.featureName);featureContainer.appendChild(geomContainer);for(var attr in feature.attributes){var attrText=this.createTextNode(feature.attributes[attr]);var nodename=attr;if(attr.search(":")!=-1){nodename=attr.split(":")[1];}
var attrContainer=this.createElementNS(this.featureNS,"feature:"+nodename);attrContainer.appendChild(attrText);featureContainer.appendChild(attrContainer);}
return featureContainer;},insert:function(feature){var insertNode=this.createElementNS(this.wfsns,'wfs:Insert');insertNode.appendChild(this.createFeatureXML(feature));return insertNode;},update:function(feature){if(!feature.fid){alert(OpenLayers.i18n("noFID"));}
var updateNode=this.createElementNS(this.wfsns,'wfs:Update');updateNode.setAttribute("typeName",this.layerName);var propertyNode=this.createElementNS(this.wfsns,'wfs:Property');var nameNode=this.createElementNS(this.wfsns,'wfs:Name');var txtNode=this.createTextNode(this.geometryName);nameNode.appendChild(txtNode);propertyNode.appendChild(nameNode);var valueNode=this.createElementNS(this.wfsns,'wfs:Value');var geometryNode=this.buildGeometryNode(feature.geometry);if(feature.layer){geometryNode.setAttribute("srsName",feature.layer.projection.getCode());}
valueNode.appendChild(geometryNode);propertyNode.appendChild(valueNode);updateNode.appendChild(propertyNode);for(var propName in feature.attributes){propertyNode=this.createElementNS(this.wfsns,'wfs:Property');nameNode=this.createElementNS(this.wfsns,'wfs:Name');nameNode.appendChild(this.createTextNode(propName));propertyNode.appendChild(nameNode);valueNode=this.createElementNS(this.wfsns,'wfs:Value');valueNode.appendChild(this.createTextNode(feature.attributes[propName]));propertyNode.appendChild(valueNode);updateNode.appendChild(propertyNode);}
var filterNode=this.createElementNS(this.ogcns,'ogc:Filter');var filterIdNode=this.createElementNS(this.ogcns,'ogc:FeatureId');filterIdNode.setAttribute("fid",feature.fid);filterNode.appendChild(filterIdNode);updateNode.appendChild(filterNode);return updateNode;},remove:function(feature){if(!feature.fid){alert(OpenLayers.i18n("noFID"));return false;}
var deleteNode=this.createElementNS(this.wfsns,'wfs:Delete');deleteNode.setAttribute("typeName",this.layerName);var filterNode=this.createElementNS(this.ogcns,'ogc:Filter');var filterIdNode=this.createElementNS(this.ogcns,'ogc:FeatureId');filterIdNode.setAttribute("fid",feature.fid);filterNode.appendChild(filterIdNode);deleteNode.appendChild(filterNode);return deleteNode;},destroy:function(){this.layer=null;},CLASS_NAME:"OpenLayers.Format.WFS"});OpenLayers.Handler.Polygon=OpenLayers.Class(OpenLayers.Handler.Path,{polygon:null,initialize:function(control,callbacks,options){OpenLayers.Handler.Path.prototype.initialize.apply(this,arguments);},createFeature:function(){this.polygon=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon());this.line=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LinearRing());this.polygon.geometry.addComponent(this.line.geometry);this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point());},destroyFeature:function(){OpenLayers.Handler.Path.prototype.destroyFeature.apply(this);if(this.polygon){this.polygon.destroy();}
this.polygon=null;},modifyFeature:function(){var index=this.line.geometry.components.length-2;this.line.geometry.components[index].x=this.point.geometry.x;this.line.geometry.components[index].y=this.point.geometry.y;this.line.geometry.components[index].clearBounds();},drawFeature:function(){this.layer.drawFeature(this.polygon,this.style);this.layer.drawFeature(this.point,this.style);},geometryClone:function(){return this.polygon.geometry.clone();},dblclick:function(evt){if(!this.freehandMode(evt)){var index=this.line.geometry.components.length-2;this.line.geometry.removeComponent(this.line.geometry.components[index]);this.finalize();}
return false;},CLASS_NAME:"OpenLayers.Handler.Polygon"});OpenLayers.Control.EditingToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(layer,options){OpenLayers.Control.Panel.prototype.initialize.apply(this,[options]);this.addControls([new OpenLayers.Control.Navigation()]);var controls=[new OpenLayers.Control.DrawFeature(layer,OpenLayers.Handler.Point,{'displayClass':'olControlDrawFeaturePoint'}),new OpenLayers.Control.DrawFeature(layer,OpenLayers.Handler.Path,{'displayClass':'olControlDrawFeaturePath'}),new OpenLayers.Control.DrawFeature(layer,OpenLayers.Handler.Polygon,{'displayClass':'olControlDrawFeaturePolygon'})];for(var i=0;i<controls.length;i++){controls[i].featureAdded=function(feature){feature.state=OpenLayers.State.INSERT;};}
this.addControls(controls);},draw:function(){var div=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);this.activateControl(this.controls[0]);return div;},CLASS_NAME:"OpenLayers.Control.EditingToolbar"});