const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
const alphabetContainer = document.getElementById('alphabet-container');
const inputText = document.getElementById('input-text');
const outputContainer = document.getElementById('output-container');


alphabet.split('').forEach((letter, index) => {
    const letterContainer = document.createElement('div');
    letterContainer.innerText = letter;
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.id = letter;
    colorInput.value = rainbowColors[index % rainbowColors.length]; 
    letterContainer.appendChild(colorInput);
    alphabetContainer.appendChild(letterContainer);
});

function convertToColors() {
    outputContainer.innerHTML = '';
    const textLines = inputText.value.toLowerCase().split('\n');
    textLines.forEach(line => {
        const lineContainer = document.createElement('div');
        for (const char of line) {
            if (char === ' ') continue; 
            const colorBlock = document.createElement('span');
            if (alphabet.includes(char)) {
                const color = document.getElementById(char).value;
                colorBlock.style.backgroundColor = color;
                colorBlock.style.width = '10px'; 
                colorBlock.style.height = '20px'; 
                colorBlock.style.display = 'inline-block';
            }
            lineContainer.appendChild(colorBlock);
        }
        outputContainer.appendChild(lineContainer);
    });
}