$(document).on("ready",function(){
	//todas las funciones ajax lleven estos parametros
	$.ajaxSetup({
		url:"url",
		//tipo de datos
		datatype:JSON,
		//datos que envias
		data:{"nombre":"juan"},
		//metodo
		type:"POST"
	});
	//peticion ajax al servidor
	//peticion asincrona
	$.ajax({
		url:"url",
		//tipo de datos
		datatype:JSON,
		//datos que envias
		data:{"nombre":"juan"},
		//metodo
		type:"POST"
	}).done(function() {
		//lo que vayas a hacer con los datos
		alert( "peticion correcta" );
	}).fail(function() {
		alert( "error" );
	}).always(function() {
		alert( "completada" );
	});

	//optener peticiones via get
	//asincronamente
	$.get({"url",{datos:"hola"},function(data){
		//lo que vayas a hacer con los datos
	}).done(function() {
		alert( "peticion correcta" );
	}).fail(function() {
		alert( "error" );
	}).always(function() {
		alert( "completada" );
	});
	//obtener informacion via post
	//de manera asincrona
	$.POST({}).done(function() {
		//lo que vayas a hacer con los datos
		alert( "peticion correcta" );
	}).fail(function() {
		alert( "error" );
	}).always(function() {
		alert( "completada" );
	});
	
	//obtener un json
	//de manera asincrona
	$.getJSON({}).done(function() {
		//lo que vayas a hacer con los datos
		alert( "peticion correcta" );
	}).fail(function() {
		alert( "error" );
	}).always(function() {
		alert( "completada" );
	});
});

