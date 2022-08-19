// Variables
const phoneMinus = document.getElementById("phoneMinus");
const phonePlus = document.getElementById("phonePlus");

// Events
phonePlus.addEventListener("click", () => {
  isIncrease(true, "phoneInput");
  updateProductPrice("phoneInput", "phonePrice", 1219);
  finalPrice();
});
phoneMinus.addEventListener("click", () => {
  isIncrease(false, "phoneInput");
  updateProductPrice("phoneInput", "phonePrice", 1219);
  finalPrice();
});
