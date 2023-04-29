// function myColor() {
//     var red = document.getElementById('red').value;
//     var green = document.getElementById('green').value;
//     var blue = document.getElementById('blue').value;
//     var color = 'rgb('+ red +','+ green +','+ blue +')';
//     document.body.style.backgroundColor = color;
//     document.getElementById('box').value = color;

//         // Agregar valor al portapapeles
//         var copyText = document.getElementById('box');
//         copyText.select();
//         copyText.setSelectionRange(0, 99999); // Para móviles
//         document.execCommand('copy');
// }

// document.getElementById('red').addEventListener('input',myColor);
// document.getElementById('green').addEventListener('input',myColor);
// document.getElementById('blue').addEventListener('input',myColor);

//  ==========================================================================
//  ==========================================================================

// Refactorizado 1
// function myColor() {
//     const red = document.getElementById('red').value;
//     const green = document.getElementById('green').value;
//     const blue = document.getElementById('blue').value;
//     const color = `rgb(${red}, ${green}, ${blue})`;
//     document.body.style.backgroundColor = color;
//     document.getElementById('box').value = color;
    
//     // Agregar valor al portapapeles
//     navigator.clipboard.writeText(color)
//       .then(() => console.log('Valor copiado al portapapeles'))
//       .catch(err => console.error('Error al copiar valor al portapapeles', err));
//   }
  
//   document.getElementById('red').addEventListener('input', myColor);
//   document.getElementById('green').addEventListener('input', myColor);
//   document.getElementById('blue').addEventListener('input', myColor);
  

//  ==========================================================================
//  ==========================================================================

// Refactorizacion 2
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const colorBox = document.getElementById('box');

function myColor() {
  const red = redInput.value;
  const green = greenInput.value;
  const blue = blueInput.value;
  const color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = color;
  colorBox.value = color;
  
  // Agregar valor al portapapeles
  navigator.clipboard.writeText(color)
    .then(() => console.log('Valor copiado al portapapeles'))
    .catch(error => console.error('Error al copiar valor al portapapeles', error));
}

redInput.addEventListener('input', myColor);
greenInput.addEventListener('input', myColor);
blueInput.addEventListener('input', myColor);
