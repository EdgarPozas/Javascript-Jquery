//Hola mundo de jquery


/*	$(selector).on("evento",function(){		Instrucciones 	 });
	$(document).on("ready",function(){		Instrucciones	 });
*/

$(document).on("ready",function(){
	//Aqui va todo el codigo que se creo despues de que cargara completamente 
	//la pagina
	alert("Estamos usando Jquery");
	//Selectores
	//son similares a los usados en css
	//si vas a usar un efecto o evento a varias cosas usa el selector de clase o atributo
	$(".clase");
	$("[atributo='']");
	//si vas a usar solo un elemento usa el id
	$("#id");
	//si vas a usar todos los de un mismo tag
	$("tag");
});

