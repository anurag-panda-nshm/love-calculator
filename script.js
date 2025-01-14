document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate');
    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const result = document.getElementById('result');
    const lovePercent = document.getElementById('love-percent');
    const message = document.getElementById('message');

    calculateBtn.addEventListener('click', () => {
        const name1 = name1Input.value.trim().toLowerCase();
        const name2 = name2Input.value.trim().toLowerCase();

        if (name1 === '' || name2 === '') {
            alert('Please enter both names');
            return;
        }

        const loveScore = calculateLove(name1, name2);
        displayResult(loveScore);
    });

    function calculateLove(name1, name2) {
        // This is a simple algorithm for demonstration purposes
        const combinedNames = name1 + name2;
        let total = 0;

        for (let char of combinedNames) {
            total += char.charCodeAt(0);
        }

        return total % 101; // Returns a number between 0 and 100
    }

    function displayResult(score) {
        result.classList.remove('hidden');
        lovePercent.textContent = `${score}%`;

        if (score < 30) {
            message.textContent = "Not a great match. But love can grow!";
        } else if (score < 60) {
            message.textContent = "There's potential here. Give it a chance!";
        } else if (score < 80) {
            message.textContent = "Great compatibility! You two have a bright future!";
        } else {
            message.textContent = "Perfect match! You're meant to be together!";
        }
    }
});

