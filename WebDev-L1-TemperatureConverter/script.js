const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const clearBtn = document.getElementById('clear-btn');

function roundToTwo(num) {
    return Math.round(num * 100) / 100;
}

// Convert from Celsius
celsiusInput.addEventListener('input', function() {
    const c = parseFloat(celsiusInput.value);
    if (isNaN(c)) {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        return;
    }
    fahrenheitInput.value = roundToTwo((c * 9/5) + 32);
    kelvinInput.value = roundToTwo(c + 273.15);
});

// Convert from Fahrenheit
fahrenheitInput.addEventListener('input', function() {
    const f = parseFloat(fahrenheitInput.value);
    if (isNaN(f)) {
        celsiusInput.value = '';
        kelvinInput.value = '';
        return;
    }
    celsiusInput.value = roundToTwo((f - 32) * 5/9);
    kelvinInput.value = roundToTwo((f - 32) * 5/9 + 273.15);
});

// Convert from Kelvin
kelvinInput.addEventListener('input', function() {
    const k = parseFloat(kelvinInput.value);
    if (isNaN(k)) {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        return;
    }
    celsiusInput.value = roundToTwo(k - 273.15);
    fahrenheitInput.value = roundToTwo((k - 273.15) * 9/5 + 32);
});

// Clear all inputs
clearBtn.addEventListener('click', function() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
});