
populateCinnamonData();
populateSelectOptions();

function populateCinnamonData() {
	const params = new URLSearchParams(window.location.search);
	rollType = params.get("roll");
	const imagePath = "images/products/" + rolls[rollType]["imageFile"];
	const price = rolls[rollType]["basePrice"];

	const bannerElement = document.querySelector("#banner");
	bannerElement.innerText = rollType + " Cinnamon Roll";

	const imageElement = document.querySelector("img.product-image");
	imageElement.src = imagePath;

	basePrice = parseFloat(price);
	updateTotalPrice();
}

function populateSelectOptions() {
	// Populate glazing options with corresponding price adaptation values
	const glazingSelect = document.querySelector("select#glazing-options");

	for (const [glazing, price] of Object.entries(glazingPrices)) {
		const option = document.createElement("option");
		option.textContent = glazing;
		option.value = price;
		glazingSelect.appendChild(option);
	}

	// Populate pack options with corresponding price adaptation values
	const packSelect = document.querySelector("select#pack-options");

	for (const [pack, price] of Object.entries(packPrices)) {
		const option = document.createElement("option");
		option.textContent = pack;
		option.value = price;
		packSelect.appendChild(option);
	}
}


/* Record the current glazing option and update the total price */
function glazingChange(element) {
	glazingOption = element.options[element.selectedIndex].text;
	updateTotalPrice();
}

/* Record the current pack option and update the total price */
function packChange(element) {
	packOption = element.options[element.selectedIndex].text;
	updateTotalPrice();
}

function updateTotalPrice() {
	const glazingPrice = glazingPrices[glazingOption];
	const packPrice = packPrices[packOption];
	const totalPrice = (basePrice + glazingPrice) * packPrice;
	const totalPriceField = document.querySelector("#add-cart span");
	totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function printCart() {
	const roll = new Roll(rollType, glazingOption, packOption, basePrice);
	cart.push(roll);
	console.log(cart);
}
