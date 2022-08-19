function updateProductPrice(inputCartVariable, totalPriceID, price) {
  const inputCartValue = parseInt(inputCartVariable.value);
  document.getElementById(totalPriceID).innerText = inputCartValue * price;
}
