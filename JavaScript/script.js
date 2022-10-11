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

// MUDANDO TRANSPARÊNCIA

function esvaecer() {
    document.getElementById("itemList").style.opacity = "0.3";
    
  }

// CRIANDO LINHA

valorBotao.onclick = function() {
    // card.appendChild('div')
    // const novaLinha = document.createElement('row')
}