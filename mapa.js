$(document).ready(function(){
    $(".click1").hide();
    $(".click2").hide();
    $(".click3").hide();
    $(".click4").hide();
    $(".click5").hide();
    $(".click6").hide();
    $(".click7").hide();
    $(".click8").hide();
    $(".click9").hide();
    $(".click10").hide();
    $("#I1").hide();
    $("#I2").hide();
    $("#I3").hide();
    $("#I4").hide();
    $("#I5").hide();
    $("#I6").hide();
    $("#I7").hide();
    var regiones = $(".region");
    regiones.mouseenter(function(){
        var idregion = $(this).attr("title");
        $("#titulo").text(idregion);
        $(this).fadeTo("fast", 0.5);
    });
    regiones.mouseleave(function(){
        $("#titulo").text("Mapa de Chile");
        $(this).fadeTo("fast", 1)
    });
    var escondido1 = true;
    $("#XV").click(function(){
        if (escondido1==true&&año1==true){
            $(".click1").show();
            $(".click2").show();
            $("#I1").show();
            $("#I2").show();
            $("#I3").show();
            $("#I4").show();
            $("#I5").show();
            $("#I6").show();
            $("#I7").hide();
            escondido1 = false}
        else{
            $(".click1").hide();
            $(".click2").hide();
            $("#I1").hide();
            $("#I2").hide();
            $("#I3").hide();
            $("#I4").hide();
            $("#I5").hide();
            $("#I6").hide();
            $("#I7").hide();
            escondido1 = true}
    });
    var escondido2 = true;
    $("#XV").click(function(){
        if (escondido2==true&&año2==true){
            $(".click3").show();
            $(".click4").show();
            $("#I1").show();
            $("#I2").show();
            $("#I3").show();
            $("#I4").show();
            $("#I5").show();
            $("#I6").show();
            $("#I7").show();
            escondido2 = false}
        else{
            $(".click3").hide();
            $(".click4").hide();
            $("#I1").hide();
            $("#I2").hide();
            $("#I3").hide();
            $("#I4").hide();
            $("#I5").hide();
            $("#I6").hide();
            $("#I7").hide();
            escondido2 = true}
    });
    var escondido3 = true;
    $("#XV").click(function(){
        if (escondido3==true&&año3==true){
            $(".click5").show();
            $(".click6").show();
            $(".imagenes").show();
            $("#I6").hide();
            $("#I7").hide();
            escondido3 = false}
        else{
            $(".click5").hide();
            $(".click6").hide();
            $(".imagenes").hide();
            escondido3 = true}
    });
    var escondido4 = true;
    $("#XV").click(function(){
        if (escondido4==true&&año4==true){
            $(".click7").show();
            $(".click8").show();
            $("#I1").show();
            $("#I2").show();
            $("#I3").show();
            $("#I4").show();
            $("#I5").show();
            $("#I6").show();
            $("#I7").show();
            escondido4 = false}
        else{
            $(".click7").hide();
            $(".click8").hide();
            $("#I1").hide();
            $("#I2").hide();
            $("#I3").hide();
            $("#I4").hide();
            $("#I5").hide();
            $("#I6").hide();
            $("#I7").hide();
            escondido4 = true}
    });
    var escondido5 = true;
    $("#XV").click(function(){
        if (escondido5==true&&año5==true){
                $(".click9").show();
                $(".click10").show();
                $("#I1").show();
                $("#I2").show();
                $("#I3").show();
                $("#I4").show();
                $("#I5").show();
                $("#I6").show();
                $("#I7").show();
                escondido2 = false}
            else{
                $(".click9").hide();
                $(".click10").hide();
                $("#I1").hide();
                $("#I2").hide();
                $("#I3").hide();
                $("#I4").hide();
                $("#I5").hide();
                $("#I6").hide();
                $("#I7").hide();
                escondido2 = true}
            });
    var año1= false;
    var año2= false;
    var año3= false;
    var año4= false;
    var año5= false;

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
    })
})




