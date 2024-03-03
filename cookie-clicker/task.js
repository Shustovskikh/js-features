class CookieClicker {
    constructor(elementId, startValue) {
        this.clickerCounter = document.getElementById('clicker__counter');
        this.cookie = document.getElementById('cookie');
        this.count = startValue;
        this.cookie.addEventListener('click', () => this.clickHandler());
    }

    clickHandler() {
        this.count++;
        this.clickerCounter.textContent = this.count;
        this.animateCookie();
    }

    animateCookie() {
        if (this.count % 2 === 0) {
            this.cookie.style.width = '180px';
            this.cookie.style.height = '180px';
        } else {
            this.cookie.style.width = '220px';
            this.cookie.style.height = '220px';
        }
    }
}

let clicker = new CookieClicker('cookie', 0);