let allGlazes = [
    {
      name: 'Keep original',
      price: 0.00,
    },
    {
      name: 'Sugar milk',
      price: 0.00,
    },
    {
      name: 'Vanilla milk',
      price: 0.50,
    },
    {
      name: 'Double Chocolate',
      price: 1.50,
    }
  ];

let allSizes= [
    {
      quantity: '1',
      adaptation: 1,
    },
    {
      quantity: '3',
      adaptation: 3,
    },
    {
       quantity: '6',
       adaptation: 5,
    },
    {
       quantity: '12',
       adaptation: 10,
    }
  ];


function glazingPopulate() {
    //populate glazing dropdowns
    var glazeSel = document.getElementById('glazingOptions');
    for(let i = 0; i < allGlazes.length; i++) {
        let option =document.createElement('option');
        option.innerHTML = allGlazes[i].name
        glazeSel.appendChild(option)
        //return allGlazes[i].price
    };
}

function sizePopulate() {
    //populate packsize dropdowns
    var sizeSel = document.getElementById('packOptions');
    for(var i = 0; i < allSizes.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = allSizes[i].quantity
        sizeSel.appendChild(option)
        //return allSizes[i].adaptation
    };
}

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

glazingPopulate();
sizePopulate();


//update the price when either selector changes

let elements = document.querySelectorAll('select');
for (const element of elements) {
    element.addEventListener('change', updatePrice);
  }

