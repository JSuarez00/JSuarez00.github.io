// Función para actualizar el temporizador
function updateTimer() {
    const end = new Date(date.now);
    end.setHours(end.getHours() + 13);

    const now = new Date();
    const diff = end - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const format = (num) => num.toString().padStart(2, "0");

    document.getElementById("countdown").innerHTML = `
    <div style="display:flex; justify-content:center; gap:1rem; font-size:2rem;">
        <div style="background:rgba(0,0,0,0.2); padding:1rem; border-radius:8px;">
        <span style="font-size:2.5rem; font-weight:bold;">${format(
        hours
    )}</span>
        <br>HORAS
        </div>
        <div style="background:rgba(0,0,0,0.2); padding:1rem; border-radius:8px;">
        <span style="font-size:2.5rem; font-weight:bold;">${format(
        minutes
    )}</span>
        <br>MINUTOS
        </div>
        <div style="background:rgba(0,0,0,0.2); padding:1rem; border-radius:8px;">
        <span style="font-size:2.5rem; font-weight:bold;">${format(
        seconds
    )}</span>
        <br>SEGUNDOS
        </div>
    </div>
    `;
}

// Inicializa el temporizador
setInterval(updateTimer, 1000);
updateTimer();

// Función para mostrar notificaciones aleatorias
function showRandomNotification() {
    const notices = [
        "🔥 3 personas se han inscrito en la última hora!",
        '⭐ "El mejor curso que he tomado" - María S.',
        "💰 Un estudiante reportó sus primeros $1,000 USD",
        '🔥🔥🔥¡Felicidades! 5 nuevos estudiantes se han unido a la comunidad. ¡Sé parte de este grupo de éxito y alcanza tus metas!',
        '⭐⭐¡Testimonio de un cliente satisfecho! "Este curso superó todas mis expectativas." ¡Únete a la comunidad y tú también podrás lograrlo!',
        '⏰ ¡Cuenta regresiva activada! ⏳ En menos de 24 horas, el precio sube. ¡Aprovecha esta oportunidad única!',
        '✨ ¡Imagina alcanzar tus metas más rápido de lo que imaginas! Con nuestro curso, es posible'

    ];

    const notice = document.getElementById("floatingNotice");
    notice.innerHTML = `<p>${notices[Math.floor(Math.random() * notices.length)]
        }</p>`;
    notice.style.display = "block";

    setTimeout(() => {
        notice.style.display = "none";
    }, 5000);
}

// Inicializa las notificaciones aleatorias
setInterval(() => {
    if (Math.random() > 0.5) showRandomNotification();
}, 30000);

// Función para mostrar y ocultar FAQs
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        item.classList.toggle("active");
    });
});

// Seleccionamos el formulario y los campos de entrada
const form = document.getElementById('data-collection');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const responseDiv = document.getElementById('userdata-response');

// Agregamos un evento de submit al formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe a un servidor

    // Recopilamos los datos del usuario
    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };

    // Guardamos los datos en el almacenamiento del navegador (localStorage)
    localStorage.setItem('userData', JSON.stringify(userData));

    // Mostramos un mensaje de confirmación
    responseDiv.innerHTML = 'Datos guardados con éxito!';

    // Limpiamos los campos de entrada
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
});
function saveData(email, userName, userDetails) {
    const sheetName = "User Data";
    const scriptProperties = PropertiesService.getUserProperties();
    const spreadsheetId = scriptProperties.getProperty("spreadsheetId");
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

    const data = [[email, userName, userDetails]];
    sheet.getRange(sheet.getLastRow() + 1, 1, 1, 3).setValues(data);
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-collection");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const userName = document.getElementById("userName").value;
        const userDetails = document.getElementById("userDetails").value;

        saveData(email, userName, userDetails);
    });
});

function doGet() {
    const scriptProperties = PropertiesService.getUserProperties();
    scriptProperties.setProperty("spreadsheetId", "12Vuvfw_v4olpEp6gwpUgheclsIeATU2TwB75m-vOSw8");
    // ...
}