function updateTimer() {
    const startDate = new Date("2024-05-23T16:30:00");
    const now = new Date();
    const totalMilliseconds = now - startDate;

    // Cálculos (igual que antes)
    const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const remainingDays = totalDays % 30;
    const remainingMilliseconds = totalMilliseconds % (1000 * 60 * 60 * 24);
    const remainingHours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);

    // Generar HTML con número arriba y etiqueta debajo
    document.getElementById("timerText").innerHTML = `
        <div class="time-unit">
            <div class="number">${totalDays}</div>
            <div class="label">días</div>
        </div>
        <div class="time-unit">
            <div class="number">${years}</div>
            <div class="label">años</div>
        </div>
        <div class="time-unit">
            <div class="number">${months}</div>
            <div class="label">meses</div>
        </div>
        <div class="time-unit">
            <div class="number">${remainingDays}</div>
            <div class="label">días</div>
        </div>
        <div class="time-unit">
            <div class="number">${remainingHours}</div>
            <div class="label">horas</div>
        </div>
        <div class="time-unit">
            <div class="number">${remainingMinutes}</div>
            <div class="label">minutos</div>
        </div>
        <div class="time-unit">
            <div class="number">${remainingSeconds}</div>
            <div class="label">segundos</div>
        </div>
    `;
}

// El código de window.onload se mantiene EXACTAMENTE como lo pediste
window.onload = () => {
    setTimeout(() => {
        document.getElementById("interactiveMessage").style.display = "none";
        document.getElementById("initialMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("initialMessage").style.display = "none";
            const timerElement = document.getElementById("timer");
            timerElement.style.display = "block";
            setInterval(updateTimer, 1000);
            updateTimer();
        }, 2000);
    }, 2000);
};