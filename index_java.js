$(document).ready(function (){
    $(".texto_def").hide();
    $("#definiciones").mouseenter(function (){
        $(".texto_def").show();
    });
    $("#definiciones").mouseleave(function (){
        $(".texto_def").hide();
    });
});