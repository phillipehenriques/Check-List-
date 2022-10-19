// COLETANDO TODOS OS IDS

const adicionandoItem = document.getElementById('add')
const itemDaLista = document.getElementById('itemList')
const botaoX = document.getElementById('buttonX')
const linha = document.getElementById('row')
const card = document.getElementById('card')

let listaCompleta = []

// BOTAO

const valorBotao = document.getElementById('clicar');

// -------------------- CRIANDO LINHA ( FUNCIONANDO )

function addRow() {
  var value = document.getElementById('add').value
  var container = document.getElementById('listContainer')
  var row = createRow(value);
  container.appendChild(row);
}

// -------------------- EXCLUINDO LINHA ( OK )

function apagar() {
  var component = document.getElementById('');
  component.style.display = "none";
}

// -------------------- CRIANDO LINHAS ( OK )

function createRow(value) {

  // <div class="card2" id="cardJs"> <- comp1
  //     <div class="item" id="row"> <- comp2
  //         <div id="checkB" class="checkbox-circle"> <- comp3
  //             <input onclick="selecionar(this)" type="checkbox" id="checkbox-circle1" name="check"> <- comp4
  //             <label for="checkbox-circle1" id="itemList">Macarrão</label> <- comp5
  //         </div>
  //     </div>
  //     <div class="buttonX" id="buttonX" onclick="apagar()">X</div> <- comp6
  // </div>

  var comp1 = document.createElement('div');
  comp1.className = "card2";
  comp1.id = "comp1_" + Math.floor(Math.random() * 90000) + 10000;

  var comp2 = document.createElement('div');
  comp2.className = "item";
  comp2.id = "comp2_" + Math.floor(Math.random() * 90000) + 10000;

  var comp3 = document.createElement('div');
  comp3.className = "checkbox-circle";
  comp3.id = "comp3_" + Math.floor(Math.random() * 90000) + 10000;

  var comp4 = document.createElement('input');
  comp4.id = "comp4_" + Math.floor(Math.random() * 90000) + 10000;
  comp4.type = "checkbox";
  comp4.name = "check";
  
  var comp5 = document.createElement('label');
  comp5.id = "comp5_" + Math.floor(Math.random() * 90000) + 10000;
  comp5.innerText = value

  var comp6 = document.createElement('div');
  comp6.className = "buttonX";
  comp6.id = "comp6_" + Math.floor(Math.random() * 90000) + 10000;

  comp6.onclick = function(event) {
    var component = document.getElementById(event.target.parentElement.id);
    component.style.display = "none";
  }

  comp6.innerText = "X";

  comp4.onclick = function(event) {
    
    var div = document.getElementById(comp1.id);
    var checkbox = document.getElementById(event.target.id);
    var label = document.getElementById(comp5.id);

    if(checkbox.checked) {
      label.style.color = 'white'
      document.getElementById(comp1.id).style.backgroundColor = 'orange'
    } else {
      label.style.color = 'black'
      document.getElementById(comp1.id).style.backgroundColor = 'white'
    }
  }
  
  comp1.appendChild(comp2);
  comp1.appendChild(comp6);
  comp2.appendChild(comp3);
  comp3.appendChild(comp4);
  comp3.appendChild(comp5);
  
  return comp1
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
