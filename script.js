function outputadd() {
  var addQuantity1 = parseInt(document.getElementById("Quantity1").value);
  var addQuantity2 = parseInt(document.getElementById("Quantity2").value);
  var entry = addQuantity1 + addQuantity2;
  document.getElementById("Entry").innerHTML = entry;
}
function outputmultiply() {
  var mulQuantity1 = parseInt(document.getElementById("Quantity1").value);
  var mulQuantity2 = parseInt(document.getElementById("Quantity2").value);
  var entry = mulQuantity1 * mulQuantity2;
  document.getElementById("Entry").innerHTML = entry;
}
function outputdivide() {
  var divQuantity1 = parseInt(document.getElementById("Quantity1").value);
  var divQuantity2 = parseInt(document.getElementById("Quantity2").value);
  var entry = divQuantity1 / divQuantity2;
  document.getElementById("Entry").innerHTML = entry;
}
function outputsubtract() {
  var subQuantity1 = parseInt(document.getElementById("Quantity1").value);
  var subQuantity2 = parseInt(document.getElementById("Quantity2").value);
  var entry = subQuantity1 - subQuantity2;
  document.getElementById("Entry").innerHTML = entry;
}
function outputexponentiate() {
  var expQuantity1 = parseInt(document.getElementById("Quantity1").value);
  var expQuantity2 = parseInt(document.getElementById("Quantity2").value);
  var entry = expQuantity1 ** expQuantity2;
  document.getElementById("Entry").innerHTML = entry;
}
function outputincrement() {
  var incrQuantity1 = parseInt(document.getElementById("Quantity1").value);
  var incrQuantity2 = parseInt(document.getElementById("Quantity2").value);
  var entry = 2*(incrQuantity1 + incrQuantity2);
  document.getElementById("Entry").innerHTML = entry;
}
function outputdecrement() {
  var decrQuantity1 = parseInt(document.getElementById("Quantity1").value);
  var decrQuantity2 = parseInt(document.getElementById("Quantity2").value);
  var entry = 2*(decrQuantity1 - decrQuantity2);
  document.getElementById("Entry").innerHTML = entry;
}
function outputrandom() {
  document.getElementById("random-entry").innerHTML = Math.floor(Math.random() * 100);
}