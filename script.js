const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const tease = document.getElementById("tease");
const musica = document.getElementById("musica");

yesBtn.addEventListener("click", () => {
    response.textContent = "💖 Sabía que dirías que sí. Prometo hacerte feliz hoy y siempre 💖";
    response.classList.remove("hidden");

    noBtn.style.display = "none"; 
    tease.textContent = "";        

    musica.volume = 0.3;
    musica.play().catch(err => console.log(err));
});


noBtn.addEventListener("mouseover", () => {
    const phrases = [
        "Mi amor, te confundiste? 🙃",
        "Colabora mi amor 😳",
        "Ese botón no funciona, lo siento 😌",
        "Déjate querer hermosa 🥰",
        "Intenta otra vez 💕",
        "No te hagas la difícil, sabes que sí quieres 😏",
        "Mi amorrrrr 🙁",
        "Eres perseverante, pero no tienes opción 😂",
        "Creo que te equivocaste, verdad amor? 😅",
        "Vamos, di que sí preciosa 🥰",
        "Piénsalo bien guapa 🤭",
        "El otro botón te espera bb 💖",
        "¿Sigues creyendo que tienes opción? 😜",
        "Yo sé tu respuesta ❤️",
        "Mira la foto nuevamente 🫶🏻"
    ];

    tease.textContent = phrases[Math.floor(Math.random() * phrases.length)];

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 200;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

