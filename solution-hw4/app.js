// track all of the Glaze prices and their adaptations!
const allGlazes = {"Keep original" : 0.0,
	"Sugar milk" : 0.0,
	"Vanilla milk" : 0.50,
	"Double chocolate" : 1.50};

  // track all of the Size prices and their adaptations!
const allSizes = {"1" : 1, 
  "3" : 3, 
  "6" : 5, 
  "12" : 10};

// Method Constants, set as bases for Rolls
let glazeSel = "Keep original";
let basePrice = 2.49;
let packSel = 1;
let cart = [];




//Populate the selects!!
function glazingPopulate() {
  const params = new URLSearchParams(window.location.search);
  const rollType = params.get("roll");
  const rollPrice = rolls[rolltype]["basePrice"];
  const imgP = "images/products/" + roll[rollType]["img"];

  //update page ! ! !
  const headerElement = document.querySelector("#cart-header-text");
  headerElement.innerText = rollType + ' Cinnamon Roll';

  const cartBunImg = document.querySelector("#cinnamon-img");
  cartBunImg.src = '..//assets/products/' + imgFile;

  let cartPrice = document.querySelector("#base-price"); //...?
  cartPrice.innerText = price;

  // basePrice = parseFloat(price);
	//updateTotalPrice()

}

function sizePackPopulate() {
  const sizeSel = document.querySelector("select#glazing-options");
  for (const [glaze, price] of Object.entries(glazingPrices)) {
    const option = document.createElement('option');
    option.textContent = glazing;
    option.value = price;
    sizeSel.appendChild(option);
  }

  const packSel = document.getElementById('packOptions');
  for (const [pack, price] of Object.entries(packPrices)) {
    const option = document.createElement('option');
    option.textContent = pack;
    option.value = price;
    packSel.appendChild(option);
  }
}

function glazeChange(elem) {
  glazeOpt = element.option[elem.index].text;
  updatePrice();
}

function packChange(elem) {
  packOpt = element.option[elem.index].text;
  updatePrice();
}

glazingPopulate();
sizePackPopulate(); //????


//update the price when either selector changes

let elements = document.querySelectorAll('select');
for (const element of elements) {
    element.addEventListener('change', updatePrice);
  }

//read the URL
  
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const rollType = params.get("roll");
  let price = 0.00;
  let imgFile = "";
  
  //Extract the current roll’s information (name, price, image path) 
  
  for (let i in rolls) {
      if (rolls[i].name == rollType) {
          price = rolls[i].basePrice;
          imgFile = rolls[i].imageFile;}
  }
  
  console.log(price)
  console.log(imgFile)


  function updatePrice() {
    var glazeSel = document.getElementById('glazingOptions');
    var value = glazeSel.value;
    var add = 0.00;
    
    if (value != ("Keep original") && value != ("Sugar milk")){
        if (value == "Vanilla milk") {
            add = .5
        } else {
            add = 1.5
        }
    }

    var packSel = document.getElementById('packOptions');
    var value = packSel.value;
    var size = 1;
    if (value == 3) {
        size = 3;
    } else {
        if (value == 6) {
            size = 5;
        } else if (value == 12) {
          size = 10;
        }
    }
    let finalP = (2.49 + add)*size;
    let pricing = document.querySelector("#totalPrice");
    pricing.innerText = "$" + finalP.toFixed(2);
}