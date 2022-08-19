// Variables
const casePlus = document.getElementById("casePlus");
const caseMinus = document.getElementById("caseMinus");

// Events
casePlus.addEventListener("click", () => {
  // Increate by 1
  isIncrease(true, "caseInput");
  // update product price
  updateProductPrice("caseInput", "casePrice", 59);
  // update final price
  finalPrice();
});
caseMinus.addEventListener("click", () => {
  isIncrease(false, "caseInput");
  updateProductPrice("caseInput", "casePrice", 59);
  finalPrice();
});
