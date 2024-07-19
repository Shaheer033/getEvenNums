function getEvenNums(num) {
    let result = '';
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            result += i + '\n';
        }
    }
    return result;
}

const form = document.getElementById('evenNumForm');
const outputElement = document.getElementById('evenNumbers');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const num = parseInt(document.getElementById('numInput').value, 10);
    const evenNumbers = getEvenNums(num);
    outputElement.textContent = evenNumbers;
});