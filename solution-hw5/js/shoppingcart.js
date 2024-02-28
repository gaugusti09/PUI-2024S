const cart = [];

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
    console.log(cart);
    cart.push(originalRoll);
    cart.push(walnutRoll);
    cart.push(raisinRoll);
    cart.push(appleRoll)

    console.log(cart);
}

console.log(2);
populateCart();


// price computation

function appendRoll(givenRoll){
    cart.push(givenRoll);
    let template = document.getElementById(givenRoll.type);
    let templateContent = template.content;
    document.body.appendChild(templateContent);
}


populateCart();

function displayRolls() {
    for (i=0; i<cart.length; i++) {
        appendRoll(cart[i]);
        console.log('heyyy');
    }
}

function removeRoll(givenRoll){
    cart.pop(givenRoll)
    const element = document.getElementById(givenRoll.type);
    element.remove();
}

console.log("Hello world!"); 