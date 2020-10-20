$(document).ready(function(){
    /* MAPA */

  $("#XV2016").hide();
  $("#I2016").hide();
  $("#II2016").hide();
  $("#III2016").hide();
  $("#IV2016").hide();
  $("#RM2016").hide();
  $("#V2016").hide();
  $("#VI2016").hide();
  $("#VII2016").hide();
  $("#VIII2016").hide();
  $("#IX2016").hide();
  $("#X2016").hide();
  $("#XI2016").hide();
  $("#XII2016").hide();
  $("#XIV2016").hide();
  $("#XVI2016").hide();
  $("#VF2").hide();
  $("#Fem2").hide();
  $("#D32").hide();
  $("#D42").hide();

  var año1= false;
  var año2= false;
  var año3= false;
  var año4= false;
  var año5= false;
  var faño1= false;
  var faño2= false;
  var faño3= false;
  var faño4= false;
  var faño5= false;

  $("#VF").mouseenter(function (){
      $("#VF2").show();
  });
  $("#VF").mouseleave(function (){
      $("#VF2").hide();
  });
  $("#Fem").mouseenter(function (){
      $("#Fem2").show();
  });
  $("#Fem").mouseleave(function (){
      $("#Fem2").hide();
  });
  $("#D3").mouseenter(function (){
      $("#D32").show();
  });
  $("#D3").mouseleave(function (){
      $("#D32").hide();
  });
  $("#D4").mouseenter(function (){
      $("#D42").show();
  });
  $("#D4").mouseleave(function (){
      $("#D42").hide();
  });    
  var regiones = $(".region");
  regiones.mouseenter(function(){
      var nombreregion = $(this).attr("title");
      $("#TVF").text(nombreregion);
      $(this).fadeTo("fast", 0.5);
  });
  regiones.mouseleave(function(){
      $("#TVF").text("Violencia intrafamiliar a la mujer en Chile");
      $(this).fadeTo("fast", 1);
  });
  var fregiones = $(".fregion");
  fregiones.mouseenter(function(){
      var nombreregion = $(this).attr("title");
      $("#TF").text(nombreregion);
      $(this).fadeTo("fast", 0.5);
  });
  fregiones.mouseleave(function(){
      $("#TF").text("Femicidios en Chile");
      $(this).fadeTo("fast", 1);
  });
  var escondido1 = true;
  $("#XV").click(function(){
      if (escondido1==true&&año1==true){
          $("#XV2016").show();
          // var myLine = new LeaderLine(
          //     document.getElementById('XV'),
          //     document.getElementById('XV2016'));
          // myLine.setOptions({"color":"gray"});
          $("#XV").css("fill","black");
          escondido1 = false}
      else{
          $("#XV").css("fill","#9B59B6");
          // myLine.remove();
          $("#XV2016").hide();

          escondido1 = true}
  });
  var escondido2 = true;
  $("#I").click(function(){
      if (escondido2==true&&año1==true){
          $("#I2016").show();
          // var myLine1 = new LeaderLine(
          //     document.getElementById('I'),
          //     document.getElementById('I2016'));
          // myLine1.setOptions({"color":"gray"});
          $("#I").css("fill","black");
          escondido2 = false}
      else{
          $("#I").css("fill","#512E5F")
          $("#I2016").hide();
          //myLine1.remove();
          escondido2 = true}
  });
  var escondido3 = true;
  $("#II").click(function(){
      if (escondido3==true&&año1==true){
          $("#II2016").show();
          //var myLine2 = new LeaderLine(
          //     document.getElementById('II'),
          //     document.getElementById('II2016'));
          // myLine2.setOptions({"color":"gray"});
          $("#II").css("fill","black");
          escondido3 = false}
      else{
          $("#II").css("fill","#C39BD3");
          $("#II2016").hide();
          //myLine2.remove();
          escondido3 = true}
  });
  var escondido4 = true;
  $("#III").click(function(){
      if (escondido4==true&&año1==true){
          $("#III2016").show();
          // var myLine3 = new LeaderLine(
          //     document.getElementById('III'),
          //     document.getElementById('III2016'));
          // myLine3.setOptions({"color":"gray"});
          $("#III").css("fill","black");
          escondido4 = false}
      else{
          $("#III").css("fill","#9B59B6");
          $("#III2016").hide();
          //myLine3.remove();
          escondido4 = true}
  });
  var escondido5 = true;
  $("#IV").click(function(){
      if (escondido5==true&&año1==true){
          $("#IV2016").show();
          // var myLine4 = new LeaderLine(
          //     document.getElementById('IV'),
          //     document.getElementById('IV2016'));
          // myLine4.setOptions({"color":"gray"});
          $("#IV").css("fill","black");
          escondido5 = false}
      else{
          $("#IV").css("fill","#C39BD3");
          $("#IV2016").hide();
          //myLine4.remove();
          escondido5 = true}
  });
  var escondido6 = true;
  $("#V").click(function(){
      if (escondido6==true&&año1==true){
          $("#V2016").show();
          // var myLine5 = new LeaderLine(
          //     document.getElementById('V'),
          //     document.getElementById('V2016'));
          //myLine5.setOptions({"color":"gray"});
          $("#V").css("fill","black");
          escondido6 = false}
      else{
          $("#V").css("fill","#C39BD3");
          $("#V2016").hide();
          //myLine5.remove();
          escondido6 = true}
  });
  var escondido7 = true;
  $("#RM").click(function(){
      if (escondido7==true&&año1==true){
          $("#RM2016").show();
          // var myLine6 = new LeaderLine(
          //     document.getElementById('RM'),
          //     document.getElementById('RM2016'));
          // myLine6.setOptions({"color":"gray"});
          $("#RM").css("fill","black");
          escondido7 = false}
      else{
          $("#RM").css("fill","#EBDEF0");
          $("#RM2016").hide();
          //myLine6.remove();
          escondido7 = true}
  });
  var escondido8 = true;
  $("#VI").click(function(){
      if (escondido8==true&&año1==true){
          $("#VI2016").show();
          // var myLine7 = new LeaderLine(
          //     document.getElementById('VI'),
          //     document.getElementById('VI2016'));
          // myLine7.setOptions({"color":"gray"});
          $("#VI").css("fill","black");
          escondido8 = false}
      else{
          $("#VI").css("fill","#C39BD3");
          $("#VI2016").hide();
          //myLine7.remove();
          escondido8 = true}
  });
  var escondido9 = true;
  $("#VII").click(function(){
      if (escondido9==true&&año1==true){
          $("#VII2016").show();
          // var myLine8 = new LeaderLine(
          //     document.getElementById('VII'),
          //     document.getElementById('VII2016'));
          // myLine8.setOptions({"color":"gray"});
          $("#VII").css("fill","black");
          escondido9 = false}
      else{
          $("#VII").css("fill","#C39BD3")
          $("#VII2016").hide();
          //myLine8.remove();
          escondido9 = true}
  });
  var escondido10 = true;
  $("#VIII").click(function(){
      if (escondido10==true&&año1==true){
          $("#VIII2016").show();
          // var myLine9 = new LeaderLine(
          //     document.getElementById('VIII'),
          //     document.getElementById('VIII2016'));
          // myLine9.setOptions({"color":"gray"});
          $("#VIII").css("fill","black");
          escondido10 = false}
      else{
          $("#VIII").css("fill","#C39BD3")
          $("#VIII2016").hide();
          //myLine9.remove();
          escondido10 = true}
  });
  var escondido11 = true;
  $("#XVI").click(function(){
      if (escondido11==true&&año1==true){
          $("#XVI2016").show();
          // var myLine10 = new LeaderLine(
          //     document.getElementById('XVI'),
          //     document.getElementById('XVI2016'));
          // myLine10.setOptions({"color":"gray"});
          $("#XVI").css("fill","black");
          escondido11 = false}
      else{
          $("#XVI").css("fill","#C39BD3");
          $("#XVI2016").hide();
          //myLine10.remove();
          escondido11 = true}
  });
  var escondido12 = true;
  $("#IX").click(function(){
      if (escondido12==true&&año1==true){
          $("#IX2016").show();
          // var myLine11 = new LeaderLine(
          //     document.getElementById('IX'),
          //     document.getElementById('IX2016'));
          // myLine11.setOptions({"color":"gray"});
          $("#IX").css("fill","black");
          escondido12 = false}
      else{
          $("#IX").css("fill","#9B59B6");
          $("#IX2016").hide();
          //myLine11.remove();
          escondido12 = true}
  });
  var escondido13 = true;
  $("#XIV").click(function(){
      if (escondido13==true&&año1==true){
          $("#XIV2016").show();
          // var myLine12 = new LeaderLine(
          //     document.getElementById('XIV'),
          //     document.getElementById('XIV2016'));
          // myLine12.setOptions({"color":"gray"});
          $("#XIV").css("fill","black");
          escondido13 = false}
      else{
          $("#XIV").css("fill","#9B59B6");
          $("#XIV2016").hide();
          //myLine12.remove();
          escondido13 = true}
  });
  var escondido14 = true;
  $("#X").click(function(){
      if (escondido14==true&&año1==true){
          $("#X2016").show();
          // var myLine13 = new LeaderLine(
          //     document.getElementById('X'),
          //     document.getElementById('X2016'));
          // myLine13.setOptions({"color":"gray"});
          $("#X").css("fill","black");
          escondido14 = false}
      else{
          $("#X").css("fill","#76448A");
          $("#X2016").hide();
          //myLine13.remove();
          escondido14 = true}
  });
  var escondido15 = true;
  $("#XI").click(function(){
      if (escondido15==true&&año1==true){
          $("#XI2016").show();
          // var myLine15 = new LeaderLine(
          //     document.getElementById('XI'),
          //     document.getElementById('XI2016'));
          // myLine14.setOptions({"color":"gray"});
          $("#XI").css("fill","black");
          escondido15 = false}
      else{
          $("#XI").css("fill","#512E5F");
          $("#XI2016").hide();
          //myLine14.remove();
          escondido15 = true}
  });
  var escondido16 = true;
  $("#XII").click(function(){
      if (escondido16==true&&año1==true){
          $("#XII2016").show();
          // var myLine15 = new LeaderLine(
          //     document.getElementById('XII'),
          //     document.getElementById('XII2016'));
          //myLine15.setOptions({"color":"gray"});
          $("#XII").css("fill","black");
          escondido16 = false}
      else{
          $("#XII").css("fill","#EBDEF0");
          $("#XII2016").hide();
          //myLine15.remove();
          escondido16 = true}
  });         
  $("#boton").click(function(){
      año1= true;
      año2=false;
      año3=false;
      año4=false;
      año5=false;
      $("#XV").css("fill","#9B59B6");
      $("#I").css("fill","#512E5F");
      $("#II").css("fill","#C39BD3");
      $("#III").css("fill","#9B59B6");
      $("#IV").css("fill","#C39BD3");
      $("#V").css("fill","#C39BD3");
      $("#RM").css("fill","#EBDEF0");
      $("#VI").css("fill","#C39BD3");
      $("#VII").css("fill","#C39BD3");
      $("#XVI").css("fill","#C39BD3");
      $("#VIII").css("fill","#C39BD3");      
      $("#IX").css("fill","#9B59B6");
      $("#XIV").css("fill","#9B59B6");
      $("#X").css("fill","#76448A");
      $("#XI").css("fill","#512E5F");
      $("#XII").css("fill","#EBDEF0");
      });
  $("#boton2").click(function(){
      año1= false;
      año2=true;
      año3=false;
      año4=false;
      año5=false;
      $("#XV").css("fill","#76448A");
      $("#I").css("fill","#512E5F");
      $("#II").css("fill","#9B59B6");
      $("#III").css("fill","#9B59B6");
      $("#IV").css("fill","#C39BD3");
      $("#V").css("fill","#C39BD3");
      $("#RM").css("fill","#EBDEF0");
      $("#VI").css("fill","#C39BD3");
      $("#VII").css("fill","#C39BD3");
      $("#XVI").css("fill","#C39BD3");
      $("#VIII").css("fill","#C39BD3");      
      $("#IX").css("fill","#9B59B6");
      $("#XIV").css("fill","#9B59B6");
      $("#X").css("fill","#9B59B6");
      $("#XI").css("fill","#512E5F");
      $("#XII").css("fill","#EBDEF0");
  });
  $("#boton3").click(function(){
      año1=false;
      año2=false;
      año3=true;
      año4=false;
      año5=false;
      $("#XV").css("fill","#C39BD3");
      $("#I").css("fill","#76448A");
      $("#II").css("fill","#C39BD3");
      $("#III").css("fill","#C39BD3");
      $("#IV").css("fill","#EBDEF0");
      $("#V").css("fill","#EBDEF0");
      $("#RM").css("fill","#EBDEF0");
      $("#VI").css("fill","#C39BD3");
      $("#VII").css("fill","#C39BD3");
      $("#XVI").css("fill","#EBDEF0");
      $("#VIII").css("fill","#EBDEF0");      
      $("#IX").css("fill","#9B59B6");
      $("#XIV").css("fill","#C39BD3");
      $("#X").css("fill","#9B59B6");
      $("#XI").css("fill","#9B59B6");
      $("#XII").css("fill","#EBDEF0");
  });
  $("#boton4").click(function(){
      año1=false;
      año2=false;
      año3=false;
      año4=true;
      año5=false;
      $("#XV").css("fill","#9B59B6");
      $("#I").css("fill","#76448A");
      $("#II").css("fill","#C39BD3");
      $("#III").css("fill","#9B59B6");
      $("#IV").css("fill","#C39BD3");
      $("#V").css("fill","#C39BD3");
      $("#RM").css("fill","#EBDEF0");
      $("#VI").css("fill","#9B59B6");
      $("#VII").css("fill","#C39BD3");
      $("#XVI").css("fill","#C39BD3");
      $("#VIII").css("fill","#C39BD3");      
      $("#IX").css("fill","#9B59B6");
      $("#XIV").css("fill","#9B59B6");
      $("#X").css("fill","#76448A");
      $("#XI").css("fill","#C39BD3");
      $("#XII").css("fill","#C39BD3");
  });
  $("#boton5").click(function(){
  año1=false;
  año2=false;
  año3=false;
  año4=false;
  año5=true;
  $("#XV").css("fill","#9B59B6");
  $("#I").css("fill","#76448A");
  $("#II").css("fill","#C39BD3");
  $("#III").css("fill","#9B59B6");
  $("#IV").css("fill","#C39BD3");
  $("#V").css("fill","#EBDEF0");
  $("#RM").css("fill","#F5EEF8");
  $("#VI").css("fill","#C39BD3");
  $("#VII").css("fill","#C39BD3");
  $("#XVI").css("fill","#C39BD3");
  $("#VIII").css("fill","#EBDEF0");      
  $("#IX").css("fill","#9B59B6");
  $("#XIV").css("fill","#9B59B6");
  $("#X").css("fill","#9B59B6");
  $("#XI").css("fill","#9B59B6");
  $("#XII").css("fill","#EBDEF0");
  });
  $("#foton").click(function(){
      faño1= true;
      faño2=false;
      faño3=false;
      faño4=false;
      faño5=false;
      $("#fXV").css("fill","#9B59B6");
      $("#fI").css("fill","#512E5F");
      $("#fII").css("fill","#C39BD3");
      $("#fIII").css("fill","#9B59B6");
      $("#fIV").css("fill","#C39BD3");
      $("#fV").css("fill","#C39BD3");
      $("#fRM").css("fill","#EBDEF0");
      $("#fVI").css("fill","#C39BD3");
      $("#fVII").css("fill","#C39BD3");
      $("#fXVI").css("fill","#C39BD3");
      $("#fVIII").css("fill","#C39BD3");      
      $("#fIX").css("fill","#9B59B6");
      $("#fXIV").css("fill","#9B59B6");
      $("#fX").css("fill","#76448A");
      $("#fXI").css("fill","#512E5F");
      $("#fXII").css("fill","#EBDEF0");
      });
  $("#foton2").click(function(){
      faño1= false;
      faño2=true;
      faño3=false;
      faño4=false;
      faño5=false;
      $("#fXV").css("fill","#76448A");
      $("#fI").css("fill","#512E5F");
      $("#fII").css("fill","#9B59B6");
      $("#fIII").css("fill","#9B59B6");
      $("#fIV").css("fill","#C39BD3");
      $("#fV").css("fill","#C39BD3");
      $("#fRM").css("fill","#EBDEF0");
      $("#fVI").css("fill","#C39BD3");
      $("#fVII").css("fill","#C39BD3");
      $("#fXVI").css("fill","#C39BD3");
      $("#fVIII").css("fill","#C39BD3");      
      $("#fIX").css("fill","#9B59B6");
      $("#fXIV").css("fill","#9B59B6");
      $("#fX").css("fill","#9B59B6");
      $("#fXI").css("fill","#512E5F");
      $("#fXII").css("fill","#EBDEF0");
  });
  $("#foton3").click(function(){
      faño1=false;
      faño2=false;
      faño3=true;
      faño4=false;
      faño5=false;
      $("#fXV").css("fill","#C39BD3");
      $("#fI").css("fill","#76448A");
      $("#fII").css("fill","#C39BD3");
      $("#fIII").css("fill","#C39BD3");
      $("#fIV").css("fill","#EBDEF0");
      $("#fV").css("fill","#EBDEF0");
      $("#fRM").css("fill","#EBDEF0");
      $("#fVI").css("fill","#C39BD3");
      $("#fVII").css("fill","#C39BD3");
      $("#fXVI").css("fill","#EBDEF0");
      $("#fVIII").css("fill","#EBDEF0");      
      $("#fIX").css("fill","#9B59B6");
      $("#fXIV").css("fill","#C39BD3");
      $("#fX").css("fill","#9B59B6");
      $("#fXI").css("fill","#9B59B6");
      $("#fXII").css("fill","#EBDEF0");
  });
  $("#foton4").click(function(){
      faño1=false;
      faño2=false;
      faño3=false;
      faño4=true;
      faño5=false;
      $("#fXV").css("fill","#9B59B6");
      $("#fI").css("fill","#76448A");
      $("#fII").css("fill","#C39BD3");
      $("#fIII").css("fill","#9B59B6");
      $("#fIV").css("fill","#C39BD3");
      $("#fV").css("fill","#C39BD3");
      $("#fRM").css("fill","#EBDEF0");
      $("#fVI").css("fill","#9B59B6");
      $("#fVII").css("fill","#C39BD3");
      $("#fXVI").css("fill","#C39BD3");
      $("#fVIII").css("fill","#C39BD3");      
      $("#fIX").css("fill","#9B59B6");
      $("#fXIV").css("fill","#9B59B6");
      $("#fX").css("fill","#76448A");
      $("#fXI").css("fill","#C39BD3");
      $("#fXII").css("fill","#C39BD3");
  });
  $("#foton5").click(function(){
  faño1=false;
  faño2=false;
  faño3=false;
  faño4=false;
  faño5=true;
  $("#fXV").css("fill","#9B59B6");
  $("#fI").css("fill","#76448A");
  $("#fII").css("fill","#C39BD3");
  $("#fIII").css("fill","#9B59B6");
  $("#fIV").css("fill","#C39BD3");
  $("#fV").css("fill","#EBDEF0");
  $("#fRM").css("fill","#F5EEF8");
  $("#fVI").css("fill","#C39BD3");
  $("#fVII").css("fill","#C39BD3");
  $("#fXVI").css("fill","#C39BD3");
  $("#fVIII").css("fill","#EBDEF0");      
  $("#fIX").css("fill","#9B59B6");
  $("#fXIV").css("fill","#9B59B6");
  $("#fX").css("fill","#9B59B6");
  $("#fXI").css("fill","#9B59B6");
  $("#fXII").css("fill","#EBDEF0");
  })
  })
