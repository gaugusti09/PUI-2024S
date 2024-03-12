const cart = [];

console.log("Hiiii");

// Cinnamon Roll class from HW4
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

// Make Cinnamon Roll objects!
const originalRoll = new Roll('Original', 'Sugar Milk', 1, 2.49);
const walnutRoll = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
const raisinRoll = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const appleRoll = new Roll('Apple', 'Original', 3, 3.49);

// initially ! add the rolls to the cart
function populateCart() {
    cart.push(originalRoll);
    cart.push(walnutRoll);
    cart.push(raisinRoll);
    cart.push(appleRoll)
    console.log(cart);

}

populateCart();
displayRolls();
// price computation

function appendRoll(givenRoll){
    let temp = document.getElementById(givenRoll.type);
    let templateContent = temp.content;
    document.body.appendChild(templateContent);
}

function displayRolls() {
    for (i=0; i<cart.length; i++) {
        appendRoll(cart[i]);
    }
}

function removeRoll(givenRoll){
    cart.pop(givenRoll)
    const element = document.getElementById(givenRoll.type);
    element.remove();
}