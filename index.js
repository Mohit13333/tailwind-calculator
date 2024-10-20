const display = document.getElementById('display');

        document.getElementById('clearDisplay').addEventListener('click', clearDisplay);
        document.getElementById('deleteDisplay').addEventListener('click', deleteDisplay);
        document.getElementById('percentBtn').addEventListener('click', () => appendToDisplay('%'));
        document.getElementById('divideBtn').addEventListener('click', () => appendToDisplay('/'));
        document.getElementById('multiplyBtn').addEventListener('click', () => appendToDisplay('*'));
        document.getElementById('subtractBtn').addEventListener('click', () => appendToDisplay('-'));
        document.getElementById('addBtn').addEventListener('click', () => appendToDisplay('+'));
        document.getElementById('equalBtn').addEventListener('click', calculateResult);
        document.getElementById('dotBtn').addEventListener('click', () => appendToDisplay('.'));
        document.getElementById('zeroBtn').addEventListener('click', () => appendToDisplay('0'));
        document.getElementById('oneBtn').addEventListener('click', () => appendToDisplay('1'));
        document.getElementById('twoBtn').addEventListener('click', () => appendToDisplay('2'));
        document.getElementById('threeBtn').addEventListener('click', () => appendToDisplay('3'));
        document.getElementById('fourBtn').addEventListener('click', () => appendToDisplay('4'));
        document.getElementById('fiveBtn').addEventListener('click', () => appendToDisplay('5'));
        document.getElementById('sixBtn').addEventListener('click', () => appendToDisplay('6'));
        document.getElementById('sevenBtn').addEventListener('click', () => appendToDisplay('7'));
        document.getElementById('eightBtn').addEventListener('click', () => appendToDisplay('8'));
        document.getElementById('nineBtn').addEventListener('click', () => appendToDisplay('9'));
        document.getElementById('opbracket').addEventListener('click', () => appendToDisplay('('));
        document.getElementById('clbracket').addEventListener('click', () => appendToDisplay(')'));

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function deleteDisplay() {
            display.value = display.value.slice(0, -1);
        }

        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch (err) {
            }
        }
