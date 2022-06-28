let quantityDown = document.getElementById("quantity-down");
let quantityUp = document.getElementById("quantity-up");

let totalNumber = 1;
let quantityNumber = document.getElementById('quantityNumber')
// quantityNumber = 1;
quantityNumber.textContent = 1;

let totalpriceNumber = 15;
let priceNumber = document.getElementById('priceNumber');
priceNumber.textContent = 15;

quantityDown.addEventListener('click', function(){
  if (totalNumber > 0){
    quantityNumber.textContent = "";
  totalNumber = totalNumber - 1;
    quantityNumber.append(totalNumber);

    priceNumber.textContent = "";
   totalpriceNumber = totalpriceNumber - 15;
   priceNumber.append(totalpriceNumber);

  console.log(totalNumber)
  console.log(totalpriceNumber)
  }
  else if (totalNumber = 0) {
    totalNumber = 0;
    priceNumber = 0;
  }
})

quantityUp.addEventListener('click', function(){
  quantityNumber.textContent = "";
  totalNumber = totalNumber + 1;
    quantityNumber.append(totalNumber);

        priceNumber.textContent = "";
   totalpriceNumber = totalpriceNumber + 15;
   priceNumber.append(totalpriceNumber);

  console.log(totalNumber)
  console.log(totalpriceNumber)
})

let remove = document.querySelector('.remove')

remove.addEventListener('click', function(){
  // quantityNumber = 0;
  quantityNumber.textContent = 0;
  priceNumber.textContent = 0;
  totalNumber = 0;
  totalpriceNumber = 0;
  console.log(quantityNumber.textContent)
})
