function updateTimer() {
    const startDate = new Date("2024-05-23T16:30:00");
    const now = new Date();

    // Calcular diferencia de tiempo
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    // Ajustar valores negativos
    if (days < 0) {
        months--;
        let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Calcular total de días transcurridos
    let totalMilliseconds = now - startDate;
    let totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));

    // Cálculo de horas, minutos y segundos
    let remainingMilliseconds = totalMilliseconds % (1000 * 60 * 60 * 24);
    let hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
    let minutes = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);

    // Actualizar el contenido del div timerText
    document.getElementById("timerText").innerHTML = `
        <div class="time-unit">
            <div class="number">${totalDays}</div>
            <div class="label">días juntos</div>
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
            <div class="number">${days}</div>
            <div class="label">días</div>
        </div>
        <div class="time-unit">
            <div class="number">${hours}</div>
            <div class="label">horas</div>
        </div>
        <div class="time-unit">
            <div class="number">${minutes}</div>
            <div class="label">minutos</div>
        </div>
        <div class="time-unit">
            <div class="number">${seconds}</div>
            <div class="label">segundos</div>
        </div>
    `;
}

// Manejador de eventos onload
window.onload = () => {
    setTimeout(() => {
        document.getElementById("interactiveMessage").style.display = "none";
        document.getElementById("initialMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("initialMessage").style.display = "none";
            document.getElementById("timer").style.display = "block";
            setInterval(updateTimer, 1000);
            updateTimer(); // Llamar inmediatamente para evitar el primer retraso
        }, 2000);
    }, 2000);
};
