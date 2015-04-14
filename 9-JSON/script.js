//JSON

/*
	El JSON es una notacion de javascript
*/

//crear JSON
var json={
	//Aqui va las propiedades
	"Nombre":"Pepe",
	"Edad":15,
	//arreglos
	"Clases":["español","matematicas","web"],
	//embebidos
	"Maestros":{
		"español":{
			"Maestro":"Pepe",
			"Edad":53
		},
		"matematicas":{
			"Maestro":"Juan",
			"Edad":20
		},
		"Web":{
			"Maestro":"Antonio",
			"Edad":32
		}
	}
};

//para mostrar el json lo tomamos como un objeto
console.log(json);
//para acceder a sus metodos usamos un . seguido de el atributo
console.log(json.Nombre);
console.log(json.Edad);
console.log(json.Clases);
console.log(json.Maestros);
console.log(json.Maestros.español.Maestro);

//hacer un string a json usamos el metodo JSON.parse(texto a json)

console.log(JSON.parse('{"hola":"hola"}'));



