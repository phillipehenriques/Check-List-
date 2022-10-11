// COLETANDO TODOS OS IDS

const adicionandoItem = document.getElementById('add')
const itemDaLista = document.getElementById('itemList')
const botaoX = document.getElementById('buttonX')
const linha = document.getElementById('row')
const card = document.getElementById('card')

let listaCompleta = []

// BOTAO 

const valorBotao = document.getElementById('clicar');

valorBotao.addEventListener('click', () => {
    // alert('Ítem incluído!')
    card.appendChild('cardJs')
    document.createElement('cardJS')
})

// EXCLUINDO LINHA

function apagar() {
    document.getElementById("cardJs").style.display = "none";
  }



// CRIANDO LINHA

valorBotao.onclick = function() {
    // card.appendChild('div')
    // const novaLinha = document.createElement('row')
}

// -------------------- MUDANDO TRANSPARÊNCIA

function esvaecer() {
  // var item = document.getElementById('itemList')
  //   if(this.checked) {
  //     item.style.opacity = 0.2
  //   } else {
  //     item.style.opacity = 1
  //   }
    document.getElementById("itemList").style.opacity = "0.3"; 
    document.getElementById
  }



// --------------- OUTRO EXEMPLO

// document.getElementById('checkB').addEventListener('click', function esvaecer() {
//   var d = document.getElementById('itemList');
//   if(this.checked) {
//       window.alert('ola')
//       d.style.opacity = 0.2;
//   } else {
//       d.style.opacity = 1;
//   }
// });