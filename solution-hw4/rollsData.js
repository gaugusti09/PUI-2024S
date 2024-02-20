const rolls = {
    "Original": {
        "name": "Original",
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "name": "Apple",
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "name": "Raisin",
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "name": "Walnut",
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "name": "Double-Chocolate",
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "name": "Strawberry",
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const cart = [];

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
//from the dictionary in step (1) and update relevant DOM elements:
const headerElement = document.querySelector("#cart-header-text");
headerElement.innerText = rollType + ' Cinnamon Roll';

const cartBunImg = document.querySelector("#cinnamon-img");
cartBunImg.src = '..//assets/products/' + imgFile;

let cartPrice = document.querySelector("#base-price");
cartPrice.innerText = price;


//window.onload = getRollType(rollType);