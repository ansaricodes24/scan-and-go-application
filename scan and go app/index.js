const listgroup = document.getElementById("product-list-group");
const totalPrice = document.getElementById("totalPrice");
var ids = "";
const total = [];
var userInput = document.getElementById("prodId");
const add = document.getElementById("add");
var i = 1;
var x = 1;

// db
const product = {
  "product_1": {
    "id": "01",
    "name": "Coca-cola Signature Mixers 200ml (Imported) - Pack of 2 (Batch No.02 - Spicy)",
    "price": "699.00",
    "img": "https://m.media-amazon.com/images/I/51JEkuKPiSL._SX679_.jpg"
  },
  "product_2": {
    "id": "02",
    "name": "JOLOCHIP - LAST CHIP CHALLENGE 5g",
    "price": "1330.00",
    "img": "https://m.media-amazon.com/images/I/41UCDyiR1JL.jpg"
  },
  "product_3": {
    "id": "03",
    "name": "ALL THINGS Single Origin Malabar Dark Chef's Chocolate",
    "price": "2124.00",
    "img": "https://m.media-amazon.com/images/I/41ev18tq92L.jpg"
  },
  "product_4": {
    "id": "04",
    "name": "PATCHINO ; Premium Handcrafted Brookies®",
    "price": "1080.00",
    "img": "https://m.media-amazon.com/images/I/81tgoVRVDqL._SY741_.jpg"
  }
}

function getName(i) {
  if(i == 01) {
    return product.product_1.name;
  }
  else if(i == 02) {
    return product.product_2.name;
  }
  else if(i == 03) {
    return product.product_3.name;
  }
  else if(i == 04) {
    return product.product_4.name;
  }
} 

function getPrice(i) {
  if(i == 01) {
    return product.product_1.price;
  }
  else if(i == 02) {
    return product.product_2.price;
  }
  else if(i == 03) {
    return product.product_3.price;
  }
  else if(i == 04) {
    return product.product_4.price;
  }
} 

function getImg(i) {
  if(i == 01) {
    return product.product_1.img;
  }
  else if(i == 02) {
    return product.product_2.img;
  }
  else if(i == 03) {
    return product.product_3.img;
  }
  else if(i == 04) {
    return product.product_4.img;
  }
}

function openDialog() {
  document.getElementById("scanner").style.display = "block";
}

function closeDialog() {
  document.getElementById("scanner").style.display = "none";
}

function inputLength() {
  return userInput.value.length;
}

function getTotal(u) {
  total.push(Number(getPrice(u)));
}

function sum(t) {
  let sum = 0;
  for(let i = 0; i < t.length; i++) {
    sum += t[i];
  }

  return sum;
}

function addListItem() {
    x = 1;
    const userId = userInput.value;
    var card = ``;
    if(userId < 5) {
    card = 
    `<div class="card flex-row" id="prod-card-${i}" style="height: 10%;">
    <img class="card-img-left" src="${getImg(userId)}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${getName(userId)}</h5>
      <p class="card-text">${getPrice(userId)}</p>
      <button class="btn btn-danger" onclick="deleteListItem(${i})"><ion-icon name="trash-outline"></ion-icon></button>       

    </div>
    </div>`;
    }
    else {
      alert("ITEM NOT FOUND ON DATABASE");
    }

    ids = "prod-count-" + i;
    var li = document.createElement("li");
    li.classList.add("product-item");
    li.innerHTML = card;

    listgroup.append(li);

    i = i + 1;
    getTotal(userId);
    totalPrice.innerText = sum(total);
    userInput.value = "";
    
}

function deleteListItem(num) {
    var prodId = "prod-card-" + num; 
    var cardId = document.getElementById(prodId);
    cardId.parentNode.remove();
}

function addCount() {
  x += 1;
  document.getElementById(ids).innerHTML = x;
  
}

function reduceCount() {
  x -= 1;
  document.getElementById(ids).innerHTML = x;
}

add.addEventListener("click", clicked);
userInput.addEventListener("keypress", pressed);
function clicked() {
  if(inputLength() > 0) {
      addListItem();
      closeDialog();
  }
}

function pressed() {
  if(inputLength() > 0 && event.which == 13) {
      addListItem();
      closeDialog();
  }
}