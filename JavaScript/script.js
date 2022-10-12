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

// -------------------- EXCLUINDO LINHA ( OK )

function apagar() {
    document.getElementById("cardJs").style.display = "none";
  }

// -------------------- CRIANDO LINHA ( FUNCIONANDO )

function addRow() {
    function teste() {
        window.alert('deu certo')
      }

    //const nova = createElement('linha')
    document.getElementById('clicar').addEventListener('click', teste)

    //document.getElementsByTagName('section')[0].appendChild(div)
}

// -------------------- SELECIONANDO UMA LINHA ( OK )

function selecionar() {
  var item = document.getElementById('itemList')
  var sel = document.getElementById('checkbox-circle1')


    if(sel.checked == true) {     
      item.style.color = 'white'
      document.getElementById('cardJs').style.backgroundColor = 'orange'
    } else {
      item.style.color = 'black'
      document.getElementById('cardJs').style.backgroundColor = 'white'
    }
    
  }
