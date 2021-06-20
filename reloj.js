/*
combinar: 

1- usar un setTimeout (esta función tomará como callback los elementos que componen al reloj y a la función misma
2- Recursividad (la función se ejecutará a sí misma hasta cumplir con la condición (cada segundo))
3- usar el Date constructor para crear los elementos de fecha y hora que cambiarán en tiempo real

*/

console.log(
  "%cHola! Soy Luis Revilla",
  "color: red; font-size: 35px; text-align: center"
);
console.log(
  "%cBienvenidos a mi extensión de Chrome. Siéntete cómodo inspeccionando los elementos que contiene",
  "color: green; font-size: 25px; text-align: center"
);

/*FUNCIONAMIENTO DEL RELOJ*/
function reloj() {
  let mainPage = document.getElementById("reloj-main");
  let newDate, newHours, horas, minutos, segundos, dias, meses;
  let date = new Date();
  let dia = date.getDay();
  horas = date.getHours();
  minutos = date.getMinutes();
  segundos = date.getSeconds();
  dias = date.getDate();
  meses = date.getMonth() + 1;

  let datos = [horas, minutos, segundos, dias, meses].map((el) => {
    return (el < 10 ? "0" : "") + el;
  });

  if (horas >= 0 && horas < 6) document.title = "¡Buenas noches!";
  else if (horas >= 6 && horas < 13) document.title = "¡Buenos días!";
  else if (horas >= 13 && horas < 19) document.title = "¡Buenas tardes!";
  else if (horas >= 19) document.title = "¡Buenas noches!";

  switch (dia) {
    case 0: dia = "Domingo"; break;
    case 1: dia = "Lunes"; break;
    case 2: dia = "Martes"; break;
    case 3: dia = "Miércoles"; break;
    case 4: dia = "Jueves"; break;
    case 5: dia = "Viernes"; break;
    case 6: dia = "Sábado"; break;
  }

  return setTimeout(() => {
    newDate = `${datos[3]}/${datos[4]}/${date.getFullYear()}`;
    newHours = `${datos[0]}:${datos[1]}:${datos[2]}`;
    mainPage.innerHTML = `
    <div class="date-wrap">
    <h1 class="dia">${dia}</h1>
    <h1 class="hora">${newHours}</h1>
    <h1 class="fecha">${newDate}</h1>
    </div>
    `;
    reloj();
  }, 1000);
}

reloj();

/*CAMBIO MODO DIURNO/NOCTURNO*/
function cambiarTema() {
  let botonNight = document.getElementById("turn-night");
  let day = document.querySelector(".day");
  let night = document.querySelector(".night");

  const changeDisplay = () => {
    if (night.style.display != "block") {
      botonNight.style = "animation: buttonMove1 600ms ease-in-out";
      night.style = "display: block; opacity: 1";
      day.style = "display: none; opacity: 0";
      document.body.style = "background: #000; color: #fff";
      document.querySelector(".date-wrap h1:first-child").style.color = "#fff";
      document.querySelector("#turn-night img").src = "media/Day Button.svg";
    } else {
      botonNight.style = "animation: buttonMove2 600ms ease-in-out";
      day.style = "display: block; opacity: 1";
      night.style = "display: none; opacity: 0";
      document.body.style = "background: #fff";
      document.querySelector("#turn-night img").src = "media/Night Button.svg";
    }
  };

  botonNight.addEventListener("click", changeDisplay);
}

cambiarTema();
