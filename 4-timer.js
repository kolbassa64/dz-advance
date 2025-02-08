function updateTimer() {
            const now = new Date();
            const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);

            const diff = endOfYear - now;

            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('root').innerHTML = `
                ${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд
            `;
        }

const timer = setInterval(updateTimer, 1000);