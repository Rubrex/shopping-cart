// Variables
const casePlus = document.getElementById("casePlus");
const caseMinus = document.getElementById("caseMinus");

// Events
casePlus.addEventListener("click", () => {
  isIncrease(true, "caseInput");
  updateProductPrice("caseInput", "casePrice", 59);
  finalPrice();
});
caseMinus.addEventListener("click", () => {
  isIncrease(false, "caseInput");
  updateProductPrice("caseInput", "casePrice", 59);
  finalPrice();
});
