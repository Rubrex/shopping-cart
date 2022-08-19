function updateProductPrice(inputCartId, totalPriceID, price) {
  const inputValue = document.getElementById(inputCartId);
  const inputCartValue = parseInt(inputValue.value);
  document.getElementById(totalPriceID).innerText = inputCartValue * price;
}

function isIncrease(isIncrease, cartInputID) {
  const cartInput = document.getElementById(cartInputID);
  if (isIncrease) {
    let cartValue = parseInt(cartInput.value);

    cartValue += 1;
    cartInput.value = cartValue;
  } else {
    let cartValue = parseInt(cartInput.value);
    //   don't go below 0
    if (cartValue === 0) {
      return;
    }
    cartValue -= 1;
    cartInput.value = cartValue;
  }
}

function finalPrice() {
  // variables
  const subtotal = document.getElementById("subtotal");
  const tax = document.getElementById("tax");
  const total = document.getElementById("total");

  const phonePriceValue = parseInt(
    document.getElementById("phonePrice").innerText
  );
  const casePriceValue = parseInt(
    document.getElementById("casePrice").innerText
  );
  // display SubTotal
  const totalPrice = phonePriceValue + casePriceValue;
  subtotal.innerText = totalPrice;
  //   calculate Tax
  const taxValue = ((totalPrice * 10) / 100).toFixed(2);
  //   display Tax
  tax.innerText = taxValue;
  //   display Total
  total.innerText = (totalPrice - taxValue).toFixed(2);
}
