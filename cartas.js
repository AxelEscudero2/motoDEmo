var linea1 = document.getElementById("linea1");
var linea2 = document.getElementById("linea2");
var botoncito = document.getElementById("accion");
var opcion1 = document.getElementById("opcion1");
var opcion2 = document.getElementById("opcion2");
var opcion3 = document.getElementById("opcion3");
var mano = document.getElementById("mano");
var info = document.getElementById("info");

function empezar()
{
  botoncito.innerHTML = "continuar";
  linea1.innerHTML = cartas[suerte1][0];
  linea2.innerHTML = "## confrontamiento ##";
  var suerte2 = parseInt(Math.random() * 5);
  var suerte3 = parseInt(Math.random() * 5);
  var suerte4 = parseInt(Math.random() * 5);
  opcion1.innerHTML = cartas[suerte2][0];
  opcion2.innerHTML = cartas[suerte3][0];
  opcion3.innerHTML = cartas[suerte4][0];
  mano.style.display = "block";
}

var suerte1 = suerte();
var cartas = [];

carta0 = ["templario", 5, 4];
carta1 = ["cruzado", 2, 5];
carta2 = ["caballero", 3, 4];
carta3 = ["orco", 4, 4];
carta4 = ["arquero", 4, 3];
carta5 = ["lanzero", 5, 2];

cartas.push(carta0);
cartas.push(carta1);
cartas.push(carta2);
cartas.push(carta3);
cartas.push(carta4);
cartas.push(carta5);

function suerte()
{
  var suerte = parseInt(Math.random() * 5);
  return suerte;
}
