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
  const queryStr = new URLSearchParams(window.location.search);
  const rollType = queryStr.get("roll");
  const rollPrice = rolls[rolltype]["basePrice"];
  const imgP = "images/products/" + roll[rollType]["img"];

  //update page ! ! !
  const headerElement = document.querySelector("#cart-header-text"); // the header
  headerElement.innerText = rollType + ' Cinnamon Roll';
  const cartBunImg = document.querySelector("#cinnamon-img"); // the image
  cartBunImg.src = '..//assets/products/' + imgFile;
  let cartPrice = document.querySelector("#base-price"); // price
  cartPrice.innerText = price;

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

function updatePrice() {
  const glazeSel = glazingPrices[glazeOpt];
  const basePrice = packPrices[packOpt];
  // calculation goes here
  // ????const totalPrice = ;
}

class CinnamonRoll {
  constructor(rollSelect, glazingSelect, packSelect, basePrice) {
      this.type = rollSelect
      this.glazing =  glazingSelect;
      this.size = packSelect;
      this.basePrice = basePrice;
  }
}

// can push this....???????