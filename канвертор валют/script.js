const USD = 17;
const EURO = 18;

function convertMDL() {
  let input_mdl = document.querySelector(".mdl");
  let input_usd = document.querySelector(".usd");
  let input_euro = document.querySelector(".euro");

  let resualt_usd = input_mdl.value / USD;
  let resualt_euro = input_mdl.value / EURO;
  
  input_usd.value = resualt_usd.toFixed(2)
  input_euro.value = resualt_euro.toFixed(2)
}