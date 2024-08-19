let clickCount = 0;
const audio = document.getElementById('background-audio');
audio.volume = 0.3;

const audio2 = document.getElementById('peperoni');
audio2.volume = 0.5;
document.getElementById("welcome-message").addEventListener("click", function() {
    clickCount++;
    if (clickCount >= 2) {
        document.getElementById("welcome-message").style.display = "none";
        if (audio.paused) {
            audio.play(); // Reproducir si está pausado
        } else {
            audio.pause(); // Pausar si está reproduciéndose
        }
        document.getElementById("envelope").style.display = "flex"; // Muestra el sobre
        document.getElementById("heart").classList.add("orange");

    }
});


function openEnvelope() {
    if (audio.paused) {
        audio.play(); // Reproducir si está pausado
    } else {
        audio.pause(); // Pausar si está        
    }
    // Oculta el sobre
    document.getElementById("envelope").style.display = "none";
    // Muestra la carta
    if (audio2.paused) {
        audio2.play(); // Reproducir si está pausado
    } else {
        audio2.pause(); // Pausar si está        
    }
    document.getElementById("letter").classList.remove("hidden");
    document.getElementById("letter").classList.add("open");


   

}

// Lógica para mostrar y ocultar el video
document.getElementById("play-video").addEventListener("click", function() {
    document.getElementById("video-container").classList.remove("hidden");
    document.getElementById("video").play(); // Reproduce el video automáticamente
});

document.getElementById("close-video").addEventListener("click", function() {
    document.getElementById("video").pause(); // Pausa el video
    document.getElementById("video").currentTime = 0; // Reinicia el video
    document.getElementById("video-container").classList.add("hidden");
});





