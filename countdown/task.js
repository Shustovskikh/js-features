class CountdownTimer {
    constructor(elementId, startValue) {
        this.timerElement = document.getElementById(elementId);
        this.timeLeft = startValue;
        this.countdown = null;
    }

    start() {
        this.countdown = setInterval(() => {
            this.timeLeft--;
            this.timerElement.textContent = this.timeLeft;

            if (this.timeLeft <= 0) {
                this.stop();
                alert('Вы победили в конкурсе!');
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.countdown);
    }
}

let timer = new CountdownTimer('timer', parseInt(document.getElementById('timer').textContent));
timer.start();