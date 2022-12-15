let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

let convertFromKg = () => {
  let kg = kgRef.value;
  //toFixed(4) limits the decimals to four digits.
  lbRef.value = (kg * 2.205).toFixed(4);
  ozRef.value = (kg * 35.274).toFixed(4);
};

let convertFromLb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.205).toFixed(4);
  ozRef.value = (lb * 16).toFixed(4);
};

let convertFromOz = () => {
  let oz = ozRef.value;
  kgRef.value = (oz / 35.274).toFixed(4);
  lbRef.value = (oz / 16).toFixed(4);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);
