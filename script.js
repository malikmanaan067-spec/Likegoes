/* ISHFAQ GANIE WEB - Logic & Matrix Engine */

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Setup Matrix Rain
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%#&_@";
const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

// Authentication Sequence
const messages = [
    "> INITIALIZING SECURE_CORE...",
    "> SCANNING PORT 8080...",
    "> AUTHENTICATING: ISHFAQ_GANIE...",
    "> DECRYPTING_FILES...",
    "> ACCESS_GRANTED"
];

let msgIndex = 0;
const statusMsg = document.getElementById('status-msg');
const progressBar = document.getElementById('progress-bar');

function runAuth() {
    if (msgIndex < messages.length) {
        statusMsg.innerText = messages[msgIndex];
        let progress = ((msgIndex + 1) / messages.length) * 100;
        progressBar.style.width = progress + "%";
        msgIndex++;
        setTimeout(runAuth, 700);
    } else {
        setTimeout(completeEntry, 800);
    }
}

function completeEntry() {
    const loader = document.getElementById('loading-screen');
    const mainSite = document.getElementById('main-site');
    
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
        mainSite.style.display = 'flex';
        setTimeout(() => mainSite.style.opacity = '1', 100);
    }, 1000);
}

// Initializing
window.onload = () => {
    setInterval(drawMatrix, 35);
    runAuth();
};

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
