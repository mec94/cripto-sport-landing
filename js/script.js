// Variables

const hamburgerIcon = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-menu__item');

// Events

hamburgerIcon.addEventListener('click', displayMobileMenu);
navigationMenu.addEventListener('click', closeMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));


// Functions


// Menu

function displayMobileMenu() {
    hamburgerIcon.classList.toggle('active');
    navigationMenu.classList.toggle('active');
}

function closeMenu(){
        hamburgerIcon.classList.remove("active");
        navigationMenu.classList.remove("active");
}

// Formulario


var ejercicioSemanal = document.getElementById('ejercicioSemanal');
var diasEjercicio = document.getElementById('diasEjercicio');

function rutinaEjercicio(val) {
    if (val == 1) {
        diasEjercicio.innerHTML = `Solo un día por semana`;
    }
    else {
        diasEjercicio.innerHTML = `${ejercicioSemanal.value} días a la semana`;
    }
}

// Efecto máquina de escribir

document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Que tus ganancias no sean solo musculares", "Rentabiliza tu inversión en el gimnasio", "Suscríbete a nuestro newsletter", "Recibe rutinas de ejercicio y consejos de inversión"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(".main-content__text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });