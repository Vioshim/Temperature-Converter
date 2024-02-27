const conversionFunctions = {
    Celsius: {
        Celsius: (value) => value,
        Fahrenheit: (value) => (value * 9) / 5 + 32,
        Kelvin: (value) => value + 273.15,
    },
    Fahrenheit: {
        Celsius: (value) => ((value - 32) * 5) / 9,
        Fahrenheit: (value) => value,
        Kelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
    },
    Kelvin: {
        Celsius: (value) => value - 273.15,
        Fahrenheit: (value) => ((value - 273.15) * 9) / 5 + 32,
        Kelvin: (value) => value,
    },
};

window.onload = function () {
    document
        .getElementById("tempForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            convertTemperature();
        });

    document
        .getElementById("value")
        .addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.keyCode === 13 || event.which === 13) {
                event.preventDefault();
                convertTemperature(event.shiftKey);
            }
        });
};

function convertTemperature(inverse = false) {
    let fromUnit, toUnit;

    if (inverse) {
        fromUnit = document.getElementById("to");
        toUnit = document.getElementById("from");
    } else {
        fromUnit = document.getElementById("from");
        toUnit = document.getElementById("to");
    }

    let inputValue = parseFloat(document.getElementById("value").value);

    if (isNaN(inputValue)) {
        window.alert("Please enter a valid number for temperature");
        return;
    }

    const result = conversionFunctions[fromUnit.value][toUnit.value](inputValue);

    document.getElementById("result_from").textContent = fromUnit.value;
    document.getElementById("result_to").textContent = toUnit.value;
    document.getElementById("result_value").textContent = result;
}
