// alert("prueba javascript")

var nombre = "Daniela Blanco"
var edad = 26
var estatura = 165


//document.write(nombre);

var datos = document.getElementById("datos");

datos.innerHTML = 
<h1> Soy una caja de datos </h1>
<h1>Mi nombre es: $[nombre]</h1>
<h1>Mi nombre es: $[edad]</h1>
<h1>Mi nombre es: $[estatura]</h1>
;

