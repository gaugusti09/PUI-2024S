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
    }
}


// function addRollToCart(){
//     const params = new URLSearchParams(window.location.search);
// 	rollType = params.get("roll");
//     const price = rolls[rollType]["basePrice"];
//     cartItem = new Roll("Original", "Sugar milk", 1, rolls["Original"]["basePrice"]));
// }

function makeRoll() {
    rollType = params.get("roll");

    //get glaze
    selectedGlzElem = document.querySelector('#glazing-options');
    rollGlaze = selectedGlzElem.value;
    console.log(rollGlaze);

    //get packSize
    selectedSzElem = document.querySelector('#glazing-options');
    rollSize = selectedSz.value;
    console.log(rollSize);
}