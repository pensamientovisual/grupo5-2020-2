$(document).ready(function(){
      /* MAPA */
    // $(".click1").hide();
    // $(".click2").hide();
    // $(".click3").hide();
    // $(".click4").hide();
    // $(".click5").hide();
    // $(".click6").hide();
    // $(".click7").hide();
    // $(".click8").hide();
    // $(".click9").hide();
    // $(".click10").hide();
    // $(".imagenes1").hide();
    // $(".imagenes2").hide();
    // $(".imagenes3").hide();
    // $(".imagenes4").hide();
    // $(".imagenes5").hide();
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
            var nombreregion1 = $(this).attr("title");
            $(".mtitulo").text(nombreregion1);
            $("#XV").css("fill","black");
            $(".click1").show();
            $(".click2").show();
            $(".imagenes1").show();
            escondido1 = false}
        else{
            $("#XV").css("fill","#9B59B6");
            $(".click1").hide();
            $(".click2").hide();
            $(".imagenes1").hide();
            $(".mtitulo").text("Violencia intrafamiliar a la mujer en Chile");
            escondido1 = true}
    });
    var escondido2 = true;
    $("#XV").click(function(){
        if (escondido2==true&&año2==true){
            $("#XV").css("fill","black");
            $(".click3").show();
            $(".click4").show();
            $(".imagenes2").show();
            escondido2 = false}
        else{
            $("#XV").css("fill","#76448A");
            $(".click3").hide();
            $(".click4").hide();
            $(".imagenes2").hide();
            escondido2 = true}
    });
    var escondido3 = true;
    $("#XV").click(function(){
        if (escondido3==true&&año3==true){
            $("#XV").css("fill","black");
            $(".click5").show();
            $(".click6").show();
            $(".imagenes3").show();
            escondido3 = false}
        else{
            $("#XV").css("fill","#C39BD3");
            $(".click5").hide();
            $(".click6").hide();
            $(".imagenes3").hide();
            escondido3 = true}
    });
    var escondido4 = true;
    $("#XV").click(function(){
        if (escondido4==true&&año4==true){
            $("#XV").css("fill","black");
            $(".click7").show();
            $(".click8").show();
            $(".imagenes4").show();
            escondido4 = false}
        else{
            $("#XV").css("fill","#9B59B6");
            $(".click7").hide();
            $(".click8").hide();
            $(".imagenes4").hide();
            escondido4 = true}
    });
    var escondido5 = true;
    $("#XV").click(function(){
        if (escondido5==true&&año5==true){
                $("#XV").css("fill","black");
                $(".click9").show();
                $(".click10").show();
                $(".imagenes5").show();
                escondido5 = false}
            else{
                $("#XV").css("fill","#9B59B6");
                $(".click9").hide();
                $(".click10").hide();
                $(".imagenes5").hide();
                escondido5 = true}
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
