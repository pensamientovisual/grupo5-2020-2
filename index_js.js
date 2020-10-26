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

     $("#XV2017").hide();
     $("#I2017").hide();
     $("#II2017").hide();
     $("#III2017").hide();
     $("#IV2017").hide();
     $("#RM2017").hide();
     $("#V2017").hide();
     $("#VI2017").hide();
     $("#VII2017").hide();
     $("#VIII2017").hide();
     $("#IX2017").hide();
     $("#X2017").hide();
     $("#XI2017").hide();
     $("#XII2017").hide();
     $("#XIV2017").hide();
     $("#XVI2017").hide();

     $("#XV2018").hide();
     $("#I2018").hide();
     $("#II2018").hide();
     $("#III2018").hide();
     $("#IV2018").hide();
     $("#RM2018").hide();
     $("#V2018").hide();
     $("#VI2018").hide();
     $("#VII2018").hide();
     $("#VIII2018").hide();
     $("#IX2018").hide();
     $("#X2018").hide();
     $("#XI2018").hide();
     $("#XII2018").hide();
     $("#XIV2018").hide();
     $("#XVI2018").hide();

     $("#XV2019").hide();
     $("#I2019").hide();
     $("#II2019").hide();
     $("#III2019").hide();
     $("#IV2019").hide();
     $("#RM2019").hide();
     $("#V2019").hide();
     $("#VI2019").hide();
     $("#VII2019").hide();
     $("#VIII2019").hide();
     $("#IX2019").hide();
     $("#X2019").hide();
     $("#XI2019").hide();
     $("#XII2019").hide();
     $("#XIV2019").hide();
     $("#XVI2019").hide();

    $("#TRanking2016").hide();
    $("#TRanking2017").hide();
    $("#TRanking2018").hide();
    $("#TRanking2019").hide();

    $("#FRanking2016").hide();
    $("#FRanking2017").hide();
    $("#FRanking2018").hide();
    $("#FRanking2019").hide();

    $(".infoboton-box").hide();
    $(".infoboton-box2").hide();
    $(".infoboton-box3").hide();

    $("#TRegion").hide();
 
    $("#mensaje").hide();
  var año1= false;
  var año2= false;
  var año3= false;
  var año4= false;
  $(".infoboton").mouseenter(function(){
      $(".infoboton-box").show();
  });
  $(".infoboton").mouseleave(function(){
    $(".infoboton-box").hide();
    });
  $(".infoboton3").mouseenter(function(){
          $(".infoboton-box3").show();
    });
    $(".infoboton3").mouseleave(function(){
        $(".infoboton-box3").hide();
    });
    $(".infoboton2").mouseenter(function(){
            $(".infoboton-box2").show();
        });
    $(".infoboton2").mouseleave(function(){
    $(".infoboton-box2").hide();
    });
  regiones = $(".region");
  regiones.mouseenter(function(){
      var nombreregion = $(this).attr("title");
      var idregion = $(this).attr("id");
      if (año1==true){
        var ranking = "R16"+idregion;
        var fanking = "F16"+idregion}
      else if (año2==true){
        var ranking = "R17"+idregion;
        var fanking = "F17"+idregion}
      else if (año3==true){
        var ranking = "R18"+idregion;
        var fanking = "F18"+idregion}
      else if (año4==true){
        var ranking = "R19"+idregion;
        var fanking = "F19"+idregion}
      $("#"+ranking).css("color", "#6C3483").css("font-weight","bold");
      $("#"+fanking).css("color", "#af457d").css("font-weight","bold");
       $("#TVF2").hide();
       $(".infoboton3").hide();
       $(".infoboton2").hide();
       $("#TVF").hide();
       $("#TRegion").show();
       $("#TRegion").text(nombreregion).css("position","relative").css("top","40px");
       $(this).fadeTo("fast", 0.5);
  });

  regiones.mouseleave(function(){
    $("#TRegion").hide();
    $("#TVF2").show();
    $(".infoboton3").show();
    $(".infoboton2").show();
    $("#TVF").show();
      $(".R16").css("color","white").css("font-weight","normal");
      $(".R17").css("color","white").css("font-weight","normal");
      $(".R18").css("color","white").css("font-weight","normal");
      $(".R19").css("color","white").css("font-weight","normal");
      $(".F16").css("color","white").css("font-weight","normal");
      $(".F17").css("color","white").css("font-weight","normal");
      $(".F18").css("color","white").css("font-weight","normal");
      $(".F19").css("color","white").css("font-weight","normal");
      $(this).fadeTo("fast", 1);

  });
  var escondido1 = true;
  $("#XV").click(function(){
    if (escondido1==true&&año1==true){
        $("#XV2016").show();
        $("#XV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido1 = false}
    else if (escondido1==true&&año2==true){
        $("#XV2017").show();
        $("#XV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido1 = false}
    else if (escondido1==true&&año3==true){
        $("#XV2018").show();
        $("#XV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido1 = false}
    else if (escondido1==true&&año4==true){
        $("#XV2019").show();
        $("#XV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido1 = false}
    else{
        $("#XV").css("stroke","black").css("stroke-width","0.75");
        $("#XV2016").hide();
        $("#XV2017").hide();
        $("#XV2018").hide();
        $("#XV2019").hide();
        if (escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido6==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido1 = true}
});
   var escondido2 = true;
   $("#I").click(function(){
     if (escondido2==true&&año1==true){
         $("#I2016").show();
         $("#I").css("stroke","white").css("stroke-width","1.5");
         $("#mensaje").hide();
         escondido2 = false}
     else if (escondido2==true&&año2==true){
        $("#I2017").show();
        $("#I").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido2 = false}
    else if (escondido2==true&&año3==true){
        $("#I2018").show();
        $("#I").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido2 = false}
    else if (escondido2==true&&año4==true){
        $("#I2019").show();
        $("#I").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido2 = false}
    else{
        $("#I").css("stroke","black").css("stroke-width","0.75");
        $("#I2016").hide();
        $("#I2017").hide();
        $("#I2018").hide();
        $("#I2019").hide();
        if (escondido1==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido6==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido2 = true}
});  
  var escondido3 = true;
  $("#II").click(function(){
    if (escondido3==true&&año1==true){
        $("#II2016").show();
        $("#II").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido3 = false}
    else if (escondido3==true&&año2==true){
        $("#II2017").show();
        $("#II").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido3 = false}
    else if (escondido3==true&&año3==true){
        $("#II2018").show();
        $("#II").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido3 = false}
    else if (escondido3==true&&año4==true){
        $("#II2019").show();
        $("#II").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido3 = false}
    else{
        $("#II").css("stroke","black").css("stroke-width","0.75");
        $("#II2016").hide();
        $("#II2017").hide();
        $("#II2018").hide();
        $("#II2019").hide();
        if (escondido1==true&&escondido2==true&&escondido4==true&&escondido5==true&&escondido6==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido3 = true}
});
  var escondido4 = true;
  $("#III").click(function(){
    if (escondido4==true&&año1==true){
        $("#III2016").show();
        $("#III").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido4 = false}
    else if (escondido4==true&&año2==true){
        $("#III2017").show();
        $("#III").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido4 = false}
    else if (escondido4==true&&año3==true){
        $("#III2018").show();
        $("#III").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido4 = false}
    else if (escondido4==true&&año4==true){
        $("#III2019").show();
        $("#III").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido4 = false}
    else{
        $("#III").css("stroke","black").css("stroke-width","0.75");
        $("#III2016").hide();
        $("#III2017").hide();
        $("#III2018").hide();
        $("#III2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido5==true&&escondido6==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido4 = true}
});
  var escondido5 = true;
  $("#IV").click(function(){
    if (escondido5==true&&año1==true){
        $("#IV2016").show();
        $("#IV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido5 = false}
    else if (escondido5==true&&año2==true){
        $("#IV2017").show();
        $("#IV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido5 = false}
    else if (escondido5==true&&año3==true){
        $("#IV2018").show();
        $("#IV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido5 = false}
    else if (escondido5==true&&año4==true){
        $("#IV2019").show();
        $("#IV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido5 = false}
    else{
        $("#IV").css("stroke","black").css("stroke-width","0.75");
        $("#mensaje").hide();
        $("#IV2016").hide();
        $("#IV2017").hide();
        $("#IV2018").hide();
        $("#IV2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido6==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido5 = true}
});
 var escondido6 = true;
 $("#V").click(function(){
    if (escondido6==true&&año1==true){
        $("#V2016").show();
        $("#V").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido6 = false}
    else if (escondido6==true&&año2==true){
        $("#V2017").show();
        $("#V").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido6 = false}
    else if (escondido6==true&&año3==true){
        $("#V2018").show();
        $("#V").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido6 = false}
    else if (escondido6==true&&año4==true){
        $("#V2019").show();
        $("#V").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido6 = false}
    else{
        $("#V").css("stroke","black").css("stroke-width","0.75");
        $("#V2016").hide();
        $("#V2017").hide();
        $("#V2018").hide();
        $("#V2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido6 = true}
});
  var escondido7 = true;
  $("#RM").click(function(){
    if (escondido7==true&&año1==true){
        $("#RM2016").show();
        $("#RM").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido7 = false}
    else if (escondido7==true&&año2==true){
        $("#RM2017").show();
        $("#RM").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido7 = false}
    else if (escondido7==true&&año3==true){
        $("#RM2018").show();
        $("#RM").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido7 = false}
    else if (escondido7==true&&año4==true){
        $("#RM2019").show();
        $("#RM").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido7 = false}
    else{
        $("#RM").css("stroke","black").css("stroke-width","0.75");
        $("#RM2016").hide();
        $("#RM2017").hide();
        $("#RM2018").hide();
        $("#RM2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido6==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido7 = true}
});
  var escondido8 = true;
  $("#VI").click(function(){
    if (escondido8==true&&año1==true){
        $("#VI2016").show();
        $("#VI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido8 = false}
    else if (escondido8==true&&año2==true){
        $("#VI2017").show();
        $("#VI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido8 = false}
    else if (escondido8==true&&año3==true){
        $("#VI2018").show();
        $("#VI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido8 = false}
    else if (escondido8==true&&año4==true){
        $("#VI2019").show();
        $("#VI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido8 = false}
    else{
        $("#VI").css("stroke","black").css("stroke-width","0.75");
        $("#VI2016").hide();
        $("#VI2017").hide();
        $("#VI2018").hide();
        $("#VI2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido6==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido8= true}
});
  var escondido9 = true;
  $("#VII").click(function(){
    if (escondido9==true&&año1==true){
        $("#VII2016").show();
        $("#VII").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido9 = false}
    else if (escondido9==true&&año2==true){
        $("#VII2017").show();
        $("#VII").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido9 = false}
    else if (escondido9==true&&año3==true){
        $("#VII2018").show();
        $("#VII").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido9 = false}
    else if (escondido9==true&&año4==true){
        $("#VII2019").show();
        $("#VII").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido9 = false}
    else{
        $("#VII").css("stroke","black").css("stroke-width","0.75");
        $("#VII2016").hide();
        $("#VII2017").hide();
        $("#VII2018").hide();
        $("#VII2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido6==true&&escondido8==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido9 = true}
});
  var escondido10 = true;
  $("#VIII").click(function(){
    if (escondido10==true&&año1==true){
        $("#VIII2016").show();
        $("#VIII").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido10 = false}
    else if (escondido10==true&&año2==true){
        $("#VIII2017").show();
        $("#VIII").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido10 = false}
    else if (escondido10==true&&año3==true){
        $("#VIII2018").show();
        $("#VIII").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido10 = false}
    else if (escondido10==true&&año4==true){
        $("#VIII2019").show();
        $("#VIII").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido10 = false}
    else{
        $("#VIII").css("stroke","black").css("stroke-width","0.75");
        $("#VIII2016").hide();
        $("#VIII2017").hide();
        $("#VIIII2018").hide();
        $("#VIII2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido6==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido10 = true}
});
  var escondido11 = true;
  $("#XVI").click(function(){
    if (escondido11==true&&año1==true){
        $("#XVI2016").show();
        $("#XVI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido11 = false}
    else if (escondido11==true&&año2==true){
        $("#XVI2017").show();
        $("#XVI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido11 = false}
    else if (escondido11==true&&año3==true){
        $("#XVI2018").show();
        $("#XVI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido11 = false}
    else if (escondido11==true&&año4==true){
        $("#XVI2019").show();
        $("#XVI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido11 = false}
    else{
        $("#XVI").css("stroke","black").css("stroke-width","0.75");
        $("#XVI2016").hide();
        $("#XVI2017").hide();
        $("#XVI2018").hide();
        $("#XVI2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido6==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido11 = true}
});
  var escondido12 = true;
  $("#IX").click(function(){
    if (escondido12==true&&año1==true){
        $("#IX2016").show();
        $("#IX").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido12 = false}
    else if (escondido12==true&&año2==true){
        $("#IX2017").show();
        $("#IX").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido12 = false}
    else if (escondido12==true&&año3==true){
        $("#IX2018").show();
        $("#IX").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido12 = false}
    else if (escondido12==true&&año4==true){
        $("#IX2019").show();
        $("#IX").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido12 = false}
    else{
        $("#IX").css("stroke","black").css("stroke-width","0.75");
        $("#IX2016").hide();
        $("#IX2017").hide();
        $("#IX2018").hide();
        $("#IX2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido6==true&&escondido13==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido12 = true}
});
  var escondido13 = true;
  $("#XIV").click(function(){
    if (escondido13==true&&año1==true){
        $("#XIV2016").show();
        $("#XIV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido13 = false}
    else if (escondido13==true&&año2==true){
        $("#XIV2017").show();
        $("#XIV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido13 = false}
    else if (escondido13==true&&año3==true){
        $("#XIV2018").show();
        $("#XIV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido13 = false}
    else if (escondido13==true&&año4==true){
        $("#XIV2019").show();
        $("#XIV").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido13 = false}
    else{
        $("#XIV").css("stroke","black").css("stroke-width","0.75");
        $("#XIV2016").hide();
        $("#XIV2017").hide();
        $("#XIV2018").hide();
        $("#XIV2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido6==true&&escondido14==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido13 = true}
});
  var escondido14 = true;
  $("#X").click(function(){
    if (escondido14==true&&año1==true){
        $("#X2016").show();
        $("#X").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido14 = false}
    else if (escondido14==true&&año2==true){
        $("#X2017").show();
        $("#X").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido14 = false}
    else if (escondido14==true&&año3==true){
        $("#X2018").show();
        $("#X").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido14 = false}
    else if (escondido14==true&&año4==true){
        $("#X2019").show();
        $("#X").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido14 = false}
    else{
        $("#X").css("stroke","black").css("stroke-width","0.75");
        $("#X2016").hide();
        $("#X2017").hide();
        $("#X2018").hide();
        $("#X2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido6==true&&
            escondido15==true&&escondido16==true){
        $("#mensaje").show()};
        escondido14 = true}
});
  var escondido15 = true;
  $("#XI").click(function(){
    if (escondido15==true&&año1==true){
        $("#XI2016").show();
        $("#XI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide(); 
        escondido15 = false}
    else if (escondido15==true&&año2==true){
        $("#XI2017").show();
        $("#XI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido15 = false}
    else if (escondido15==true&&año3==true){
        $("#XI2018").show();
        $("#XI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido15 = false}
    else if (escondido15==true&&año4==true){
        $("#XI2019").show();
        $("#XI").css("stroke","white").css("stroke-width","1.5");
        $("#mensaje").hide();
        escondido15 = false}
    else{
        $("#XI").css("stroke","black").css("stroke-width","0.75");
        $("#XI2016").hide();
        $("#XI2017").hide();
        $("#XI2018").hide();
        $("#XI2019").hide();
        if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
            escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
            escondido6==true&&escondido16==true){
        $("#mensaje").show()};
        escondido15 = true}
});
  var escondido16 = true;
  $("#XII").click(function(){
        if (escondido16==true&&año1==true){
            $("#XII2016").show();
            $("#XII").css("stroke","white").css("stroke-width","1.5");
            $("#mensaje").hide();
            escondido16 = false}
        else if (escondido16==true&&año2==true){
            $("#XII2017").show();
            $("#XII").css("stroke","white").css("stroke-width","1.5");
            $("#mensaje").hide();
            escondido16 = false}
        else if (escondido16==true&&año3==true){
            $("#XII2018").show();
            $("#XII").css("stroke","white").css("stroke-width","1.5");
            $("#mensaje").hide();
            escondido16 = false}
        else if (escondido16==true&&año4==true){
            $("#XII2019").show();
            $("#XII").css("stroke","white").css("stroke-width","1.5");
            $("#mensaje").hide();
            escondido16 = false}
        else{
            $("#XII").css("stroke","black").css("stroke-width","0.75");
            $("#XII2016").hide();
            $("#XII2017").hide();
            $("#XII2018").hide();
            $("#XII2019").hide();
            if (escondido1==true&&escondido2==true&&escondido3==true&&escondido4==true&&escondido5==true&&escondido7==true&&
                escondido8==true&&escondido9==true&&escondido10==true&&escondido11==true&&escondido12==true&&escondido13==true&&escondido14==true&&
                escondido15==true&&escondido6==true){
            $("#mensaje").show()};
            escondido16 = true}
  }); 
  $("#boton").click(function(){
      año1= true;
      año2=false;
      año3=false;
      año4=false;
      $("#mensaje").show();
    $("#TRanking2016").show();
    $("#TRanking2017").hide();
    $("#TRanking2018").hide();
    $("#TRanking2019").hide(); 
    
    $("#FRanking2016").show();
    $("#FRanking2017").hide();
    $("#FRanking2018").hide();
    $("#FRanking2019").hide();  

      escondido1=true;escondido2=true;escondido3=true;escondido4=true;escondido5=true;escondido6=true;escondido7=true;escondido8=true;escondido9=true;escondido10=true;escondido11=true;escondido12=true;escondido13=true;escondido14=true;escondido15=true;escondido16=true;
      $("#XV2017").hide();$("#I2017").hide();$("#II2017").hide();$("#III2017").hide();$("#IV2017").hide();$("#RM2017").hide();$("#V2017").hide();$("#VI2017").hide();$("#VII2017").hide();$("#VIII2017").hide();$("#IX2017").hide();$("#X2017").hide();$("#XI2017").hide();$("#XII2017").hide();$("#XIV2017").hide();$("#XVI2017").hide();
      $("#XV2018").hide();$("#I2018").hide();$("#II2018").hide();$("#III2018").hide();$("#IV2018").hide();$("#RM2018").hide();$("#V2018").hide();$("#VI2018").hide();$("#VII2018").hide();$("#VIII2018").hide();$("#IX2018").hide();$("#X2018").hide();$("#XI2018").hide();$("#XII2018").hide();$("#XIV2018").hide();$("#XVI2018").hide();
      $("#XV2019").hide();$("#I2019").hide();$("#II2019").hide();$("#III2019").hide();$("#IV2019").hide();$("#RM2019").hide();$("#V2019").hide();$("#VI2019").hide();$("#VII2019").hide();$("#VIII2019").hide();$("#IX2019").hide();$("#X2019").hide();$("#XI2019").hide();$("#XII2019").hide();$("#XIV2019").hide();$("#XVI2019").hide();
      $("#XV").css("stroke","black").css("stroke-width","0.75");$("#I").css("stroke","black").css("stroke-width","0.75");$("#II").css("stroke","black").css("stroke-width","0.75");$("#III").css("stroke","black").css("stroke-width","0.75");$("#IV").css("stroke","black").css("stroke-width","0.75");$("#V").css("stroke","black").css("stroke-width","0.75");$("#RM").css("stroke","black").css("stroke-width","0.75");$("#VI").css("stroke","black").css("stroke-width","0.75");$("#VII").css("stroke","black").css("stroke-width","0.75");$("#XVI").css("stroke","black").css("stroke-width","0.75");$("#VIII").css("stroke","black").css("stroke-width","0.75");$("#IX").css("stroke","black").css("stroke-width","0.75");$("#XIV").css("stroke","black").css("stroke-width","0.75");$("#X").css("stroke","black").css("stroke-width","0.75");$("#XI").css("stroke","black").css("stroke-width","0.75");$("#XII").css("stroke","black").css("stroke-width","0.75");
      $("#boton").css("background-color","#C39BD3");
      $("#boton2").css("background-color","");
      $("#boton3").css("background-color","");
      $("#boton4").css("background-color","");
      $("#boton5").css("background-color","");
      $("#XV").css("fill","#976eb4");
      $("#I").css("fill","#5f367c");
      $("#II").css("fill","#cfb6e2");
      $("#III").css("fill","#af8bc9");
      $("#IV").css("fill","#ddcaeb");
      $("#V").css("fill","#ddcaeb");
      $("#RM").css("fill","#ece3f3");
      $("#VI").css("fill","#cfb6e2");
      $("#VII").css("fill","#ddcaeb");
      $("#XVI").css("fill","#ddcaeb");
      $("#VIII").css("fill","#ddcaeb");      
      $("#IX").css("fill","#976eb4");
      $("#XIV").css("fill","#976eb4");
      $("#X").css("fill","#81599");
      $("#XI").css("fill","#48285f");
      $("#XII").css("fill","#ece3f3");

    $("#fXV").css("fill","#f5d0e3");
    $("#fI").css("fill","#ebb4d0");
    $("#fII").css("fill","#dd95ba");
    $("#fIII").css("fill","#f5d0e3");
    $("#fIV").css("fill","#dd95ba");
    $("#fV").css("fill","#9b3269");
    $("#fRM").css("fill","#4c1130");
    $("#fVI").css("fill","#ce77a4");
    $("#fVII").css("fill","#ce77a4");
    $("#fXVI").css("fill","#ebb4d0");
    $("#fVIII").css("fill","#af457d");      
    $("#fIX").css("fill","#ca689b");
    $("#fXIV").css("fill","#ebb4d0");
    $("#fX").css("fill","#ce77a4");
    $("#fXI").css("fill","#fae6f0");
    $("#fXII").css("fill","#fae6f0");
    });
  $("#boton2").click(function(){
      año1= false;
      año2=true;
      año3=false;
      año4=false;
      año5=false;
      $("#mensaje").show();
    $("#TRanking2016").hide();
    $("#TRanking2017").show();
    $("#TRanking2018").hide();
    $("#TRanking2019").hide();

    $("#FRanking2016").hide();
    $("#FRanking2017").show();
    $("#FRanking2018").hide();
    $("#FRanking2019").hide();  

      escondido1=true;escondido2=true;escondido3=true;escondido4=true;escondido5=true;escondido6=true;escondido7=true;escondido8=true;escondido9=true;escondido10=true;escondido11=true;escondido12=true;escondido13=true;escondido14=true;escondido15=true;escondido16=true;
      $("#XV").css("stroke","black").css("stroke-width","0.75");$("#I").css("stroke","black").css("stroke-width","0.75");$("#II").css("stroke","black").css("stroke-width","0.75");$("#III").css("stroke","black").css("stroke-width","0.75");$("#IV").css("stroke","black").css("stroke-width","0.75");$("#V").css("stroke","black").css("stroke-width","0.75");$("#RM").css("stroke","black").css("stroke-width","0.75");$("#VI").css("stroke","black").css("stroke-width","0.75");$("#VII").css("stroke","black").css("stroke-width","0.75");$("#XVI").css("stroke","black").css("stroke-width","0.75");$("#VIII").css("stroke","black").css("stroke-width","0.75");$("#IX").css("stroke","black").css("stroke-width","0.75");$("#XIV").css("stroke","black").css("stroke-width","0.75");$("#X").css("stroke","black").css("stroke-width","0.75");$("#XI").css("stroke","black").css("stroke-width","0.75");$("#XII").css("stroke","black").css("stroke-width","0.75");
      $("#XV2016").hide();$("#I2016").hide();$("#II2016").hide();$("#III2016").hide();$("#IV2016").hide();$("#RM2016").hide();$("#V2016").hide();$("#VI2016").hide();$("#VII2016").hide();$("#VIII2016").hide();$("#IX2016").hide();$("#X2016").hide();$("#XI2016").hide();$("#XII2016").hide();$("#XIV2016").hide();$("#XVI2016").hide();
      $("#XV2018").hide();$("#I2018").hide();$("#II2018").hide();$("#III2018").hide();$("#IV2018").hide();$("#RM2018").hide();$("#V2018").hide();$("#VI2018").hide();$("#VII2018").hide();$("#VIII2018").hide();$("#IX2018").hide();$("#X2018").hide();$("#XI2018").hide();$("#XII2018").hide();$("#XIV2018").hide();$("#XVI2018").hide();
      $("#XV2019").hide();$("#I2019").hide();$("#II2019").hide();$("#III2019").hide();$("#IV2019").hide();$("#RM2019").hide();$("#V2019").hide();$("#VI2019").hide();$("#VII2019").hide();$("#VIII2019").hide();$("#IX2019").hide();$("#X2019").hide();$("#XI2019").hide();$("#XII2019").hide();$("#XIV2019").hide();$("#XVI2019").hide();
      $("#boton2").css("background-color","#C39BD3");
      $("#boton3").css("background-color","");
      $("#boton4").css("background-color","");
      $("#boton").css("background-color","");
      $("#XV").css("fill","#976eb4");
      $("#I").css("fill","#724b8f");
      $("#II").css("fill","#af8bc9");
      $("#III").css("fill","#af8bc9");
      $("#IV").css("fill","#ddcaeb");
      $("#V").css("fill","#ddcaeb");
      $("#RM").css("fill","#ece3f3");
      $("#VI").css("fill","#cfb6e2");
      $("#VII").css("fill","#ddcaeb");
      $("#XVI").css("fill","#cfb6e2");
      $("#VIII").css("fill","#ece3f3");      
      $("#IX").css("fill","#976eb4");
      $("#XIV").css("fill","#af8bc9");
      $("#X").css("fill","#976eb4");
      $("#XI").css("fill","#5f367c");
      $("#XII").css("fill","#ece3f3");

    $("#fXV").css("fill","#f5d0e3");
    $("#fI").css("fill","#ebb4d0");
    $("#fII").css("fill","#dd95ba");
    $("#fIII").css("fill","#f5d0e3");
    $("#fIV").css("fill","#dd95ba");
    $("#fV").css("fill","#af457d");
    $("#fRM").css("fill","#4c1130");
    $("#fVI").css("fill","#ce77a4");
    $("#fVII").css("fill","#ce77a4");
    $("#fXVI").css("fill","#ebb4d0");
    $("#fVIII").css("fill","#bd548b");      
    $("#fIX").css("fill","#ca689b");
    $("#fXIV").css("fill","#ebb4d0");
    $("#fX").css("fill","#ce77a4");
    $("#fXI").css("fill","#fae6f0");
    $("#fXII").css("fill","#fae6f0");
    });
  $("#boton3").click(function(){
      año1=false;
      año2=false;
      año3=true;
      año4=false;
      año5=false;
      $("#mensaje").show();
    $("#TRanking2016").hide();
    $("#TRanking2017").hide();
    $("#TRanking2018").show();
    $("#TRanking2019").hide();

    $("#FRanking2016").hide();
    $("#FRanking2017").hide();
    $("#FRanking2018").show();
    $("#FRanking2019").hide();
      escondido1=true;escondido2=true;escondido3=true;escondido4=true;escondido5=true;escondido6=true;escondido7=true;escondido8=true;escondido9=true;escondido10=true;escondido11=true;escondido12=true;escondido13=true;escondido14=true;escondido15=true;escondido16=true;
      $("#XV").css("stroke","black").css("stroke-width","0.75");$("#I").css("stroke","black").css("stroke-width","0.75");$("#II").css("stroke","black").css("stroke-width","0.75");$("#III").css("stroke","black").css("stroke-width","0.75");$("#IV").css("stroke","black").css("stroke-width","0.75");$("#V").css("stroke","black").css("stroke-width","0.75");$("#RM").css("stroke","black").css("stroke-width","0.75");$("#VI").css("stroke","black").css("stroke-width","0.75");$("#VII").css("stroke","black").css("stroke-width","0.75");$("#XVI").css("stroke","black").css("stroke-width","0.75");$("#VIII").css("stroke","black").css("stroke-width","0.75");$("#IX").css("stroke","black").css("stroke-width","0.75");$("#XIV").css("stroke","black").css("stroke-width","0.75");$("#X").css("stroke","black").css("stroke-width","0.75");$("#XI").css("stroke","black").css("stroke-width","0.75");$("#XII").css("stroke","black").css("stroke-width","0.75");
      $("#XV2016").hide();$("#I2016").hide();$("#II2016").hide();$("#III2016").hide();$("#IV2016").hide();$("#RM2016").hide();$("#V2016").hide();$("#VI2016").hide();$("#VII2016").hide();$("#VIII2016").hide();$("#IX2016").hide();$("#X2016").hide();$("#XI2016").hide();$("#XII2016").hide();$("#XIV2016").hide();$("#XVI2016").hide();
      $("#XV2017").hide();$("#I2017").hide();$("#II2017").hide();$("#III2017").hide();$("#IV2017").hide();$("#RM2017").hide();$("#V2017").hide();$("#VI2017").hide();$("#VII2017").hide();$("#VIII2017").hide();$("#IX2017").hide();$("#X2017").hide();$("#XI2017").hide();$("#XII2017").hide();$("#XIV2017").hide();$("#XVI2017").hide();
      $("#XV2019").hide();$("#I2019").hide();$("#II2019").hide();$("#III2019").hide();$("#IV2019").hide();$("#RM2019").hide();$("#V2019").hide();$("#VI2019").hide();$("#VII2019").hide();$("#VIII2019").hide();$("#IX2019").hide();$("#X2019").hide();$("#XI2019").hide();$("#XII2019").hide();$("#XIV2019").hide();$("#XVI2019").hide();
      $("#boton3").css("background-color","#C39BD3");
      $("#boton").css("background-color","");
      $("#boton2").css("background-color","");
      $("#boton4").css("background-color","");
      $("#XV").css("fill","#cfb6e2");
      $("#I").css("fill","#81599e");
      $("#II").css("fill","#cfb6e2");
      $("#III").css("fill","#cfb6e2");
      $("#IV").css("fill","#ece3f3");
      $("#V").css("fill","#ece3f3");
      $("#RM").css("fill","#ece3f3");
      $("#VI").css("fill","#ddcaeb");
      $("#VII").css("fill","#ddcaeb");
      $("#XVI").css("fill","#ddcaeb");
      $("#VIII").css("fill","#ece3f3");      
      $("#IX").css("fill","#af8bc9");
      $("#XIV").css("fill","#af8bc9");
      $("#X").css("fill","#af8bc9");
      $("#XI").css("fill","#af8bc9");
      $("#XII").css("fill","#ece3f3");

    $("#fXV").css("fill","#f5d0e3");
    $("#fI").css("fill","#ebb4d0");
    $("#fII").css("fill","#dd95ba");
    $("#fIII").css("fill","#f5d0e3");
    $("#fIV").css("fill","#dd95ba");
    $("#fV").css("fill","#af457d");
    $("#fRM").css("fill","#6d1d47");
    $("#fVI").css("fill","#d585ae");
    $("#fVII").css("fill","#ce77a4");
    $("#fXVI").css("fill","#ebb4d0");
    $("#fVIII").css("fill","#bd548b");      
    $("#fIX").css("fill","#ce77a4");
    $("#fXIV").css("fill","#ebb4d0");
    $("#fX").css("fill","#ce77a4");
    $("#fXI").css("fill","#fae6f0");
    $("#fXII").css("fill","#fae6f0");
    });
      
  $("#boton4").click(function(){
      año1=false;
      año2=false;
      año3=false;
      año4=true;
      $("#mensaje").show();
    $("#TRanking2016").hide();
    $("#TRanking2017").hide();
    $("#TRanking2018").hide();
    $("#TRanking2019").show();

    $("#FRanking2016").hide();
    $("#FRanking2017").hide();
    $("#FRanking2018").hide();
    $("#FRanking2019").show();
      escondido1=true;escondido2=true;escondido3=true;escondido4=true;escondido5=true;escondido6=true;escondido7=true;escondido8=true;escondido9=true;escondido10=true;escondido11=true;escondido12=true;escondido13=true;escondido14=true;escondido15=true;escondido16=true;
      $("#XV").css("stroke","black").css("stroke-width","0.75");$("#I").css("stroke","black").css("stroke-width","0.75");$("#II").css("stroke","black").css("stroke-width","0.75");$("#III").css("stroke","black").css("stroke-width","0.75");$("#IV").css("stroke","black").css("stroke-width","0.75");$("#V").css("stroke","black").css("stroke-width","0.75");$("#RM").css("stroke","black").css("stroke-width","0.75");$("#VI").css("stroke","black").css("stroke-width","0.75");$("#VII").css("stroke","black").css("stroke-width","0.75");$("#XVI").css("stroke","black").css("stroke-width","0.75");$("#VIII").css("stroke","black").css("stroke-width","0.75");$("#IX").css("stroke","black").css("stroke-width","0.75");$("#XIV").css("stroke","black").css("stroke-width","0.75");$("#X").css("stroke","black").css("stroke-width","0.75");$("#XI").css("stroke","black").css("stroke-width","0.75");$("#XII").css("stroke","black").css("stroke-width","0.75");
      $("#XV2016").hide();$("#I2016").hide();$("#II2016").hide();$("#III2016").hide();$("#IV2016").hide();$("#RM2016").hide();$("#V2016").hide();$("#VI2016").hide();$("#VII2016").hide();$("#VIII2016").hide();$("#IX2016").hide();$("#X2016").hide();$("#XI2016").hide();$("#XII2016").hide();$("#XIV2016").hide();$("#XVI2016").hide();
      $("#XV2017").hide();$("#I2017").hide();$("#II2017").hide();$("#III2017").hide();$("#IV2017").hide();$("#RM2017").hide();$("#V2017").hide();$("#VI2017").hide();$("#VII2017").hide();$("#VIII2017").hide();$("#IX2017").hide();$("#X2017").hide();$("#XI2017").hide();$("#XII2017").hide();$("#XIV2017").hide();$("#XVI2017").hide();
      $("#XV2018").hide();$("#I2018").hide();$("#II2018").hide();$("#III2018").hide();$("#IV2018").hide();$("#RM2018").hide();$("#V2018").hide();$("#VI2018").hide();$("#VII2018").hide();$("#VIII2018").hide();$("#IX2018").hide();$("#X2018").hide();$("#XI2018").hide();$("#XII2018").hide();$("#XIV2018").hide();$("#XVI2018").hide();
      $("#boton4").css("background-color","#C39BD3");
      $("#boton").css("background-color","");
      $("#boton3").css("background-color","");
      $("#boton2").css("background-color","");
      $("#XV").css("fill","#af8bc9");
      $("#I").css("fill","#81599e");
      $("#II").css("fill","#cfb6e2");
      $("#III").css("fill","#af8bc9");
      $("#IV").css("fill","#ddcaeb");
      $("#V").css("fill","#ddcaeb");
      $("#RM").css("fill","#ece3f3");
      $("#VI").css("fill","#af8bc9");
      $("#VII").css("fill","#cfb6e2");
      $("#XVI").css("fill","#ddcaeb");
      $("#VIII").css("fill","#ddcaeb");      
      $("#IX").css("fill","#af8bc9");
      $("#XIV").css("fill","#af8bc9");
      $("#X").css("fill","#81599e");
      $("#XI").css("fill","#af8bc9");
      $("#XII").css("fill","#ece3f3");

    $("#fXV").css("fill","#f5d0e3");
    $("#fI").css("fill","#ebb4d0");
    $("#fII").css("fill","#dd95ba");
    $("#fIII").css("fill","#f5d0e3");
    $("#fIV").css("fill","#dd95ba");
    $("#fV").css("fill","#9b3269");
    $("#fRM").css("fill","#310a1f");
    $("#fVI").css("fill","#ce77a4");
    $("#fVII").css("fill","#ce77a4");
    $("#fXVI").css("fill","#ebb4d0");
    $("#fVIII").css("fill","#bd548b");      
    $("#fIX").css("fill","#ce77a4");
    $("#fXIV").css("fill","#ebb4d0");
    $("#fX").css("fill","#ce77a4");
    $("#fXI").css("fill","#fae6f0");
    $("#fXII").css("fill","#fae6f0");
    });

    $("#boton5").click(function(){
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
   
        $("#XV2017").hide();
        $("#I2017").hide();
        $("#II2017").hide();
        $("#III2017").hide();
        $("#IV2017").hide();
        $("#RM2017").hide();
        $("#V2017").hide();
        $("#VI2017").hide();
        $("#VII2017").hide();
        $("#VIII2017").hide();
        $("#IX2017").hide();
        $("#X2017").hide();
        $("#XI2017").hide();
        $("#XII2017").hide();
        $("#XIV2017").hide();
        $("#XVI2017").hide();
   
        $("#XV2018").hide();
        $("#I2018").hide();
        $("#II2018").hide();
        $("#III2018").hide();
        $("#IV2018").hide();
        $("#RM2018").hide();
        $("#V2018").hide();
        $("#VI2018").hide();
        $("#VII2018").hide();
        $("#VIII2018").hide();
        $("#IX2018").hide();
        $("#X2018").hide();
        $("#XI2018").hide();
        $("#XII2018").hide();
        $("#XIV2018").hide();
        $("#XVI2018").hide();
   
        $("#XV2019").hide();
        $("#I2019").hide();
        $("#II2019").hide();
        $("#III2019").hide();
        $("#IV2019").hide();
        $("#RM2019").hide();
        $("#V2019").hide();
        $("#VI2019").hide();
        $("#VII2019").hide();
        $("#VIII2019").hide();
        $("#IX2019").hide();
        $("#X2019").hide();
        $("#XI2019").hide();
        $("#XII2019").hide();
        $("#XIV2019").hide();
        $("#XVI2019").hide();
    })
     
}) 
