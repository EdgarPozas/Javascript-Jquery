$(document).on("ready",function(){

//primer parametro tiempo, segundo que hacer al completarlo
//desliza arriba
$("#div1").slideUp("slow",function(){
//desliza abajo
$("#div1").slideDown("slow",function(){
//desliza segun se encuentre
$("#div2").slideToggle("slow",function(){
//desaparece
$("#div2").fadeOut("slow",function(){
//aparece
$("#div2").fadeIn("slow",function(){
//parcialemnte
$("#div3").fadeTo("slow",function(){
//aparece o desaparece segun sea
$("#div3").fadeToggle("slow",function(){
});});});});});});});});