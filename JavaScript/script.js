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
    var container = document.getElementById('listContainer')
    var row = createRow();
    container.appendChild(row);
}

function createRow() {
  // <div class="card2" id="cardJs"> <- Wrapper
  //     <!-- checkbox -->
  //     <div class="item" id="row">
  //         <div id="checkB" class="checkbox-circle">
  //             <input onclick="selecionar(this)" type="checkbox" id="checkbox-circle1" name="check">
  //             <label for="checkbox-circle1" id="itemList">Macarrão</label>
  //         </div>
  //     </div>
  //     <!-- checkbox -->
  //     <div class="buttonX" id="buttonX" onclick="apagar()">X</div>
  // </div>
  var wrapper = document.createElement('div');
  wrapper.className = "card2"
  wrapper.id = "card_" + Math.floor(Math.random() * 90000) + 10000;

  // wrapper.appendChild(newElement)

  return wrapper
}

// -------------------- SELECIONANDO UMA LINHA ( OK )

function selecionar() {
  var item = document.getElementById('itemList')
  var sel = document.getElementById('checkbox-circle1')
   

    if(sel.checked) {
      item.style.color = 'white'
      document.getElementById('cardJs').style.backgroundColor = 'orange'
    } else {
      item.style.color = 'black'
      document.getElementById('cardJs').style.backgroundColor = 'white'
    }
    
  }
