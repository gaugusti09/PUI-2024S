function updateBadge(){
    const cartData = JSON.parse(localStorage.getItem("newCart"));
    console.log(cartData.length)
    let cartLength = cartData.length;
    const badgeElem = document.querySelector("#cart-badge");
    badgeElem.textContent = cartLength;
}

updateBadge();
