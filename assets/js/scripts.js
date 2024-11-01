function updateTimer() {
    const end = new Date();
    end.setHours(end.getHours() + 24);

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

setInterval(updateTimer, 1000);
updateTimer();

document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        item.classList.toggle("active");
    });
});

function showRandomNotification() {
    const notices = [
        "🔥 3 personas se han inscrito en la última hora!",
        '⭐ "El mejor curso que he tomado" - María S.',
        "💰 Un estudiante reportó sus primeros $1,000 USD",
    ];

    const notice = document.getElementById("floatingNotice");
    notice.innerHTML = `<p>${notices[Math.floor(Math.random() * notices.length)]
        }</p>`;
    notice.style.display = "block";

    setTimeout(() => {
        notice.style.display = "none";
    }, 5000);
}

setInterval(() => {
    if (Math.random() > 0.5) showRandomNotification();
}, 30000);
