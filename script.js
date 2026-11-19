
function pesanCinta() {
    alert("Lina ❤️ Kamu itu istimewa. Jangan pernah lupa kalau kamu berharga dan pantas bahagia! 💕");
}

// Membuat animasi hati berjatuhan
function buatHati() {
    const hati = document.createElement("div");

    hati.classList.add("hati-jatuh");
    hati.innerHTML = "❤️";

    hati.style.left = Math.random() * 100 + "vw";
    hati.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(hati);

    setTimeout(() => {
        hati.remove();
    }, 5000);
}

// Hati muncul setiap 400 milidetik
setInterval(buatHati, 400);
