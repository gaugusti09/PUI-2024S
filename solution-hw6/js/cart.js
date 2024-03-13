// cart constants from prev hws
const glazingPrices = {
	"Keep original" : 0.0,
	"Sugar milk" : 0.0,
	"Vanilla milk" : 0.50,
	"Double chocolate" : 1.50
};

const packPrices = {
	"1" : 1, "3" : 3, "6" : 5, "12" : 10
};

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calcPrice = (this.basePrice + glazingPrices[this.glazing]) * packPrices[this.size];
    }
}

const shoppingCart = [];
let rollIndexes = 0; // use these to #nayeon'spop rolls off !

// function populateInitCart() {
//     shoppingCart.push(new Roll("Original", "Sugar milk", 1, rolls["Original"]["basePrice"]));
//     shoppingCart.push(new Roll("Walnut", "Vanilla milk", 12, rolls["Walnut"]["basePrice"]));
//     shoppingCart.push(new Roll("Raisin", "Sugar milk", 3, rolls["Raisin"]["basePrice"]));
//     shoppingCart.push(new Roll("Apple", "Keep original  ", 3, rolls["Apple"]["basePrice"]));
// }

//takes a roll && adds it to the page!
function addNewRoll(roll) {
    console.log(roll);
    const newRollImg = "images/products/" + rolls[roll.type]["imageFile"];
    const newRollName = roll.type;
    const newRollGlz = roll.glazing;
    const newRollSz = roll.size;
    // ` <-- works for this ?? need find why !!

    const newRollHtml = `
    <div class="cart-item" id="item-${rollIndexes}">
        <div>
            <img class="product-image" src="${newRollImg}">
            <p class="remove">Remove</p>
        </div>
        <div class="item-detail">
            <p>${newRollName} Cinnamon Roll</p>
            <p>Glazing: ${newRollGlz}</p>
            <p>Pack Size: ${newRollSz}</p>
        </div>
        <div class="item-price">
            <p>$ 2.49</p>
        </div>
    </div>
    `;
    //console.log(newRollHtml);

    const bunTemplate = document.createElement("template"); // make a template for cart items!
    bunTemplate.innerHTML = newRollHtml;
    const cartItem = bunTemplate.content; 


    const cartWrapper = document.querySelector(".cart-wrapper");
    //cartWrapper.appendChild(cartItem);
    //rollIndexes +=1; vhjfdns
    // removing roll items!
    
    let currentRoll = rollIndexes;
    cartItem.querySelector(".remove").onclick = function() {
        var selection="#item-" + currentRoll.toString();
        console.log(currentRoll);
        console.log("bye bye!");
        //console.log(cartWrapper.querySelector(selection));
        cartWrapper.querySelector(selection).remove();
        updateCartPrice();
    }

    cartWrapper.appendChild(cartItem);
    rollIndexes ++;
}


//function addPrice(money) {
//    return roll.addPrice+money
//}

//revamped function from prev hw -- use this now to update items from this page!
function updateCartPrice() {
    let price = 0;
    //cart.forEach(addPrice(price));
    cartItems.forEach(roll => totalPrice += roll.calcPrice);
    const priceElem = document.querySelector(".total-price");
    priceElem.textContent = "$" + price.toFixed(2);
}


function updateCartPage() {
    //populateInitCart();
    shoppingCart.forEach(addNewRoll);
    updateCartPrice();
}
