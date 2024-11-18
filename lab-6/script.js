// JavaScript code for bubble sort
document.getElementById('sortButton').addEventListener('click', function () {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));

    if (numbers.some(isNaN)) {
        alert('Please enter a valid list of numbers separated by commas.');
        return;
    }

    // Bubble sort algorithm
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    // Display sorted array
    document.getElementById('sortedOutput').textContent = numbers.join(', ');
});
