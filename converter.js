function updateUnits() {
    const quantity = document.getElementById('quantity').value;
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');

    // Clear existing unit options
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';

    let units = [];
    if (quantity === 'temperature') {
        units = ['Celsius', 'Fahrenheit', 'Kelvin'];
    } else if (quantity === 'weight') {
        units = ['Kilograms', 'Pounds'];
    } else if (quantity === 'length') {
        units = ['Meters', 'Kilometers'];
    } else if (quantity === 'area') {
        units = ['Square Meters', 'Square Kilometers'];
    } else if (quantity === 'speed') {
        units = ['Meters per Second', 'Kilometers per Hour'];
    }

    units.forEach(unit => {
        const optionFrom = document.createElement('option');
        optionFrom.value = unit.toLowerCase().replace(/\s/g, ''); // Match consistent format for comparison
        optionFrom.textContent = unit;
        fromUnit.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = unit.toLowerCase().replace(/\s/g, ''); // Match consistent format for comparison
        optionTo.textContent = unit;
        toUnit.appendChild(optionTo);
    });
}

function convert() {
    const quantity = document.getElementById('quantity').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    if (isNaN(inputValue)) {
        alert('Please enter a valid number.');
        return;
    }

    let result = '';
    if (quantity === 'temperature') {
        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            result = (inputValue * 9 / 5) + 32;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            result = (inputValue - 32) * 5 / 9;
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
            result = inputValue + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
            result = inputValue - 273.15;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
            result = (inputValue - 32) * 5 / 9 + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
            result = (inputValue - 273.15) * 9 / 5 + 32;
        }
    } else if (quantity === 'weight') {
        if (fromUnit === 'kilograms' && toUnit === 'pounds') {
            result = inputValue * 2.20462;
        } else if (fromUnit === 'pounds' && toUnit === 'kilograms') {
            result = inputValue / 2.20462;
        }
    } else if (quantity === 'length') {
        if (fromUnit === 'meters' && toUnit === 'kilometers') {
            result = inputValue / 1000;
        } else if (fromUnit === 'kilometers' && toUnit === 'meters') {
            result = inputValue * 1000;
        }
    } else if (quantity === 'area') {
        if (fromUnit === 'squaremeters' && toUnit === 'squarekilometers') {
            result = inputValue / 1e6; 
        } else if (fromUnit === 'squarekilometers' && toUnit === 'squaremeters') {
            result = inputValue * 1e6; 
        }
    } else if (quantity === 'speed') {
        if (fromUnit === 'meterspersecond' && toUnit === 'kilometersperhour') {
            result = inputValue * 3.6;
        } else if (fromUnit === 'kilometersperhour' && toUnit === 'meterspersecond') {
            result = inputValue / 3.6;
        }
    }

    if (result !== '') {
        document.getElementById('result').textContent = `Result: ${result.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Conversion not supported for selected units.';
    }
}

// Initialize the form with the default units
updateUnits();