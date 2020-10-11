
$(document).ready(function () {
    var regiones = $(".region");
    regiones.mouseenter(function(){
        var idregion = $(this).attr("title");
        $("#titulo_mapa").text(idregion);
        $(this).fadeTo("fast", 0.5);
    });
    regiones.mouseleave(function(){
        $("#titulo_mapa").text("Mapa de Chile");
        $(this).fadeTo("fast", 1);
    });
    var b = false;
    $("#boton").click(function(){
        if (b==false){
            $("#I").css("fill","#6A0888");
            $("#II").css("fill","#4C0B5F");
            $("#III").css("fill","#A901DB");
            $("#IV").css("fill","#A901DB");
            $("#V").css("fill","#E2A9F3");
            $("#VI").css("fill","#4C0B5F");
            $("#VII").css("fill","#D358F7");
            $("#VIII").css("fill","#2F0B3A");      
            $("#IX").css("fill","#8904B1");
            $("#X").css("fill","#2F0B3A");
            $("#XI").css("fill","#6A0888");
            $("#XII").css("fill","#D358F7");
            $("#RM").css("fill","#E2A9F3");
            $("#XIV").css("fill","#8904B1");
            $("#XV").css("fill","6A0888");
            $("#XVI").css("fill","#2F0B3A");
            b=true}
        else {
            $("#I").css("fill","#D0D3D4");
            $("#II").css("fill","#D0D3D4");
            $("#III").css("fill","#D0D3D4");
            $("#IV").css("fill","#D0D3D4");
            $("#V").css("fill","#D0D3D4");
            $("#VI").css("fill","#D0D3D4");
            $("#VII").css("fill","#D0D3D4");
            $("#VIII").css("fill","#D0D3D4");
            $("#IX").css("fill","#D0D3D4");
            $("#X").css("fill","#D0D3D4");
            $("#XI").css("fill","#D0D3D4");
            $("#XII").css("fill","#D0D3D4");
            $("#RM").css("fill","#D0D3D4");
            $("#XIV").css("fill","#D0D3D4");
            $("#XV").css("fill","#D0D3D4");
            $("#XVI").css("fill","#D0D3D4");
            b=false}
        });
        var b2 = false;
    $("#boton2").click(function(){
        if (b2==false){
            $("#I").css("fill","#FF8000");
            $("#II").css("fill","#DF7401");
            $("#III").css("fill","#61380B");
            $("#IV").css("fill","#FF8000");
            $("#V").css("fill","#8A4B08");
            $("#VI").css("fill","#FE9A2E");
            $("#VII").css("fill","#DF7401");
            $("#VIII").css("fill","#61380B");      
            $("#IX").css("fill","#B45F04");
            $("#X").css("fill","#FF8000");
            $("#XI").css("fill","#F7BE81");
            $("#XII").css("fill","#8A4B08");
            $("#RM").css("fill","#F7BE81");
            $("#XIV").css("fill","#B45F04");
            $("#XV").css("fill","#61380B");
            $("#XVI").css("fill","#FE9A2E");
            b2=true}
        else {
            $("#I").css("fill","#D0D3D4");
            $("#II").css("fill","#D0D3D4");
            $("#III").css("fill","#D0D3D4");
            $("#IV").css("fill","#D0D3D4");
            $("#V").css("fill","#D0D3D4");
            $("#VI").css("fill","#D0D3D4");
            $("#VII").css("fill","#D0D3D4");
            $("#VIII").css("fill","#D0D3D4");
            $("#IX").css("fill","#D0D3D4");
            $("#X").css("fill","#D0D3D4");
            $("#XI").css("fill","#D0D3D4");
            $("#XII").css("fill","#D0D3D4");
            $("#RM").css("fill","#D0D3D4");
            $("#XIV").css("fill","#D0D3D4");
            $("#XV").css("fill","#D0D3D4");
            $("#XVI").css("fill","#D0D3D4");
            b2=false}
  });
  var b3 = false;
  $("#boton3").click(function(){
    if (b3==false){
        $("#I").css("fill","#8A084B");
        $("#II").css("fill","#FF00BF");
        $("#III").css("fill","#8A084B");
        $("#IV").css("fill","#FE2E9A");
        $("#V").css("fill","#FF00BF");
        $("#VI").css("fill","#F781BE");
        $("#VII").css("fill","#FE2E9A");
        $("#VIII").css("fill","#B4045F");      
        $("#IX").css("fill","#B40486");
        $("#X").css("fill","#FF0080");
        $("#XI").css("fill","#610B4B");
        $("#XII").css("fill","#B4045F");
        $("#RM").css("fill","#F781BE");
        $("#XIV").css("fill","#B4045F");
        $("#XV").css("fill","#8A084B");
        $("#XVI").css("fill","#FF0080");
        b3=true}
    else {
        $("#I").css("fill","#D0D3D4");
        $("#II").css("fill","#D0D3D4");
        $("#III").css("fill","#D0D3D4");
        $("#IV").css("fill","#D0D3D4");
        $("#V").css("fill","#D0D3D4");
        $("#VI").css("fill","#D0D3D4");
        $("#VII").css("fill","#D0D3D4");
        $("#VIII").css("fill","#D0D3D4");
        $("#IX").css("fill","#D0D3D4");
        $("#X").css("fill","#D0D3D4");
        $("#XI").css("fill","#D0D3D4");
        $("#XII").css("fill","#D0D3D4");
        $("#RM").css("fill","#D0D3D4");
        $("#XIV").css("fill","#D0D3D4");
        $("#XV").css("fill","#D0D3D4");
        $("#XVI").css("fill","#D0D3D4");
        b3=false}
  });
  var b4= false;
  $("#boton4").click(function(){
    if (b4==false){
        $("#I").css("fill","#FE2E64");
        $("#II").css("fill","#DF013A");
        $("#III").css("fill","#8A0829");
        $("#IV").css("fill","#DF013A");
        $("#V").css("fill","#610B21");
        $("#VI").css("fill","#FF0040");
        $("#VII").css("fill","#DF013A");
        $("#VIII").css("fill","#610B21");      
        $("#IX").css("fill","#F7819F");
        $("#X").css("fill","#FF0040");
        $("#XI").css("fill","#F7819F");
        $("#XII").css("fill","#8A0829");
        $("#RM").css("fill","#FE2E64");
        $("#XIV").css("fill","#FF0040");
        $("#XV").css("fill","#DF013A");
        $("#XVI").css("fill","#8A0829");
        b4=true}
    else {
        $("#I").css("fill","#D0D3D4");
        $("#II").css("fill","#D0D3D4");
        $("#III").css("fill","#D0D3D4");
        $("#IV").css("fill","#D0D3D4");
        $("#V").css("fill","#D0D3D4");
        $("#VI").css("fill","#D0D3D4");
        $("#VII").css("fill","#D0D3D4");
        $("#VIII").css("fill","#D0D3D4");
        $("#IX").css("fill","#D0D3D4");
        $("#X").css("fill","#D0D3D4");
        $("#XI").css("fill","#D0D3D4");
        $("#XII").css("fill","#D0D3D4");
        $("#RM").css("fill","#D0D3D4");
        $("#XIV").css("fill","#D0D3D4");
        $("#XV").css("fill","#D0D3D4");
        $("#XVI").css("fill","#D0D3D4");
        b4=false}
  })
})