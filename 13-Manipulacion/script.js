$(document).on("ready",function(){
	//cuando le de click al elemento con id div1
	$("#div1").on("click",function(){
		//a este mismo elemento que le dieron click $(this)
		//se le va a modificar el css({varios})
		$(this).css({background:"#f1f1f1",fontSize:"20px"});
		//un solo atributo
		$(this).css("border","solid");
	});
	//cuando le de click al elemento con id div2
	$("#div2").on("click",function(){
		//se va a cambiar todo su html por
		$(this).html("<h1>Nuevo Titulo</h1>");
		//se le va a agregar despues de todo
		$(this).append("<p>nuevo parrafo</p>");
		//se va a agredar antes de todos
		$(this).prepend("<h1>Antes de todos</h1>");
	});
	//cuando le de click al elemento con id div3
	$("#div3").on("click",function(){
		//se le va a clonar
		var otra=$(this).clone();
		//lo clonado se va a agregar despues
		$(this).append(otra);
		//ver sus atributos y modificarlos
		$(this).attr();
	});
});