const link = document.querySelector('#btn-down'); 

function triggerAnimation() {
    link.classList.add('link-grow-twice');
    
    setTimeout(() => {
        link.classList.remove('link-grow-twice');
    }, 800); 
}


setInterval(triggerAnimation, 10000);

const mensajes = [
    "Bienvenido a la cueva de Dot Dager, el youtuber programador que sabe tanto de código como de gatos 🐱.",
    "¿Eres un programador en busca de diversión? ¡Te has encontrado en el lugar correcto! 🖥️🎸",
    "Entre líneas de código y acordes de guitarra, Dot Dager hace magia. ¿Listo para aprender y reírte?",
    "¿Sabías que Dot Dager escribe código con una mano y toca Pepinos con la otra? ¡Síguelo para aprender y disfrutar al mismo tiempo!",
    "Si te gustan los pepinos, los gatos, y los desafíos de programación... ¡Este es tu lugar! 🥒🐱",
    "No solo se trata de programar, también se trata de divertirse. ¡Aprende a programar mientras te ríes con Dot Dager!",
    "Cuidado, si eres fan de los gatos, las guitarras y los pepinos, podrías quedar atrapado aquí mucho más de lo que planeabas... 😏🎸🐱🥒",
    "Dot Dager no solo sabe de código... ¡También sabe cómo tocar el alma con una guitarra! 🎶👨‍💻",
    "¿Alguna vez pensaste que los pepinos podrían ser tan divertidos? ¡Pues Dot Dager lo hizo posible! 🥒😆",
    "Códigos, guitarras y gatos. Eso es lo que encontrarás en este canal. ¡Bienvenido a la locura de Dot Dager!",
    "¡No te quedes atrás! Únete a la comunidad de programadores, músicos y amantes de los pepinos y gatos. 😎🐾",
    "Recuerda: si no estás aprendiendo y divirtiéndote con Dot Dager, ¡estás haciendo algo mal! 😉💻🎸",
    "¿Estás listo para mejorar tu código mientras te diviertes? ¡Aquí no solo hay programación, también hay mucho buen humor y guitarras! 🎶🐱"
  ];
  


document.addEventListener('DOMContentLoaded', () =>{
    recorrerMensajes()
})

function recorrerMensajes(){
    const parrafo = document.querySelector('#mainContent-p');
    let i = 0;

    setInterval(() => {
        parrafo.innerHTML = mensajes[i];
        i = (i + 1) % mensajes.length; 
    }, 5000); 
}


const datosFilosoficos = [

    // Personalizadas para Dot Dager
    "Dicen que el universo es infinito, pero no tanto como el número de chistes de pitos que puedo hacer. - Dot Dager",
    "El sentido de la vida, según el programador: return 42;",
    "En el canal de Dot Dager, cada chiste de pepinos compila más rápido que su código.",
    "En la vida, como en el código, los pitos no son un bug... son un feature.",
    "Dot Dager reflexiona: '¿Es la música el lenguaje del alma, o el código su sintaxis?'",
    "Un programador sin café es como un filósofo sin dudas: inútil. - Dot Dager's Coffee Chronicles",
    "¿La vida tiene sentido? Depende del compilador. - Humor existencialista",
    "El programador dijo: 'Solo quería declarar una variable', y el intérprete respondió con un pito.",
    "El músico-programador vive en armonía: notas para el oído, código para el cerebro. - Filosofía aplicada",
    "Un día, Dot Dager intentó no hacer un chiste de pitos en su canal... el universo colapsó.",
    "¿El algoritmo del amor? Error 404: lógica no encontrada. - Sabiduría romántica",
    "Si el universo fuera un IDE, ¿quién manejaría los pull requests? - Filosofía cósmica",
    "La consola del programador y la partitura del músico: ambas revelan el alma del creador.",
    "El pepino y la berenjena: ambos partes esenciales del hombre... o de su ensalada. - Filosofía de mercado",
    "Dot Dager dice: 'Un programador no necesita un dios, sólo un debugger eficiente'.",
    "Dot Dager dice: 'En la vida, como en el código, si funciona, no lo toques'.",
    "El músico dice: 'Toqué una nota equivocada'. El programador responde: 'Es un feature, no un bug'.",
    "El código más limpio es aquel que nunca tienes que escribir. - Filosofía del programador",
    "Entre acordes y líneas de código, Dot encuentra la filosofía de la existencia. - Reflexión personal",
    "La música es la taquigrafía de la emoción. - León Tolstói",
    "El músico afina su guitarra, el programador su código, y el filósofo... sólo pregunta '¿por qué?'.",
    "El piano y el IDE: ambos necesitan teclas, pero sólo uno da conciertos. - Reflexión musical",
    "¿Qué es más bello? ¿El sonido de un acorde mayor o el éxito de un build sin errores? - Dilema de Dot",
    "La filosofía es como el JavaScript: empieza con algo simple y termina en caos. - Programación espiritual",
    "Si el universo es una sinfonía, Dot es su programador principal. - Filosofía creativa",
    "¿El hombre es un animal racional? Quizás, pero sigue riéndose de los pepinos desde hace siglos.",
    "Dot Dager: músico, programador y maestro indiscutible del pito cósmico.",

];


let indiceActual = 0;

document.getElementById('btn-filosofia').addEventListener('click', () => {
    const datoElemento = document.getElementById('dato-filosofico');
    datoElemento.textContent = datosFilosoficos[indiceActual];
    indiceActual = (indiceActual + 1) % datosFilosoficos.length; 
});


document.querySelector(".enlaceCanales").addEventListener("click", function (event) {
    event.preventDefault(); 
    const target = document.getElementById("canales"); 
    const offset = -60; 
    const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth" // Desplazamiento suave
    });
});

const logoToggle = document.getElementById('logo-toggle');
const menu = document.getElementById('menu');


logoToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
    const typingText = "Bienvenido a Dot Dager!";
    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const elementsToFade = document.querySelectorAll("#mainContent-p, h2");
    let index = 0;

    function typeEffect() {
        if (index < typingText.length) {
            typingElement.innerHTML = typingText.substring(0, index + 1) + '<span id="cursor">|</span>';
            index++;
            setTimeout(typeEffect, 100);
        } else {
            cursor.style.animation = "blink 0.7s step-start infinite"; 
            setTimeout(() => fadeInElements(), 500);
        }
    }

    function fadeInElements() {
        elementsToFade.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add("fade-in");
            }, i * 300); 
        });
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionar las secciones a observar
    const secciones = document.querySelectorAll(
        ".seccion-gatos, .seccion-guitarra, .seccion-pepinos, .seccion-filosofica, .contenido"
    );

    secciones.forEach(seccion => observer.observe(seccion));
});


document.addEventListener("scroll", () => {
    const aboutContent = document.querySelector(".about-content");
    const aboutImage = document.querySelector(".about-img .img");
  
    if (aboutContent && aboutImage) {
      const contentPosition = aboutContent.getBoundingClientRect().top;
      const imagePosition = aboutImage.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (contentPosition < windowHeight - 50) {
        aboutContent.classList.add("visible");
      }
      if (imagePosition < windowHeight - 50) {
        aboutImage.classList.add("visible");
      }
    }
  });

// Función para observar la visibilidad de las secciones
const observeSections = () => {
    if (window.innerWidth <= 768) {
        return;
    }

    const sections = document.querySelectorAll('.channels, .music-section, .twitch-section, .main-channel, .philosophy');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observamos cada una de las secciones
    sections.forEach(section => {
        observer.observe(section);
    });
};

document.addEventListener('DOMContentLoaded', observeSections);


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

const elementsToObserve = document.querySelectorAll('.card, article');

elementsToObserve.forEach(element => {
    observer.observe(element);
});


const musicPlayer = document.getElementById('musicPlayer');
const guitarImage = document.getElementById('guitarImage');

function togglePlay() {
    if (musicPlayer.paused) {
        musicPlayer.play();
        guitarImage.classList.add('playing');
    } else {
        musicPlayer.pause();
        guitarImage.classList.remove('playing');
    }
}

musicPlayer.addEventListener('ended', function() {
    guitarImage.classList.remove('playing');
});