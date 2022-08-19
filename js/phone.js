// Variables
const phoneMinus = document.getElementById("phoneMinus");
const phonePlus = document.getElementById("phonePlus");
const phoneCartValue = document.getElementById("phoneCartValue");

// Functions
function isIncrease(isIncrease) {
  if (isIncrease) {
    let cartValue = parseInt(phoneCartValue.value);
    cartValue += 1;
    phoneCartValue.value = cartValue;
  } else {
    let cartValue = parseInt(phoneCartValue.value);
    //   don't go below 0
    if (cartValue === 0) {
      return;
    }
    cartValue -= 1;
    phoneCartValue.value = cartValue;
  }
}

// Events
phonePlus.addEventListener("click", () => {
  isIncrease(true);
  updateProductPrice(phoneCartValue, "phonePrice", 1219);
});
phoneMinus.addEventListener("click", () => {
  isIncrease(false);
  updateProductPrice(phoneCartValue, "phonePrice", 1219);
});
