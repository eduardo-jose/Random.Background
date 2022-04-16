const hex = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const texto = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumero()];
    }
    document.body.style.backgroundColor = hexColor;
    btn.style.backgroundColor = hexColor;
    btn.style.userSelect.backgroundColor = hexColor;
    texto.textContent = hexColor; 
})

function getRandomNumero(){
    return Math.floor(Math.random()*hex.length);
}
console.log(getRandomNumero());