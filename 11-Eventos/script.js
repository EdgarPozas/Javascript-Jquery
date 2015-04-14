//cuando se haya cargado el documento
$(document).on("ready",function(){
	//click
	$("#div1").on("click",function(){
		console.log("click al botón");
	});
	//doble click
	$("#div1").on("dblclick",function(){
		console.log("doble click al botón");
	});
	//hover
	$("#div2").on("hover",function(){
		console.log("pasaste sobre el boton");
	});
	//presionar tecla
	$("body").on("keypress",function(){
		console.log("tecla presionada");
	});
	//levantar tecla
	$("body").on("keyup",function(){
		console.log("tecla liberada");
	});
	//tecla apretada
	$("body").on("keydown",function(){
		console.log("tecla presionada");
	});
	//mover mouse
	$("#div3").on("mousemove",function(){
		console.log("moviste el mouse");
	});
	//salio el mouse
	$("#div2").on("mouseout",function(){
		console.log("salio el mouse");
	});
	//scroll
	$(window).scroll(function(){
		console.log("scroll");
	});
});