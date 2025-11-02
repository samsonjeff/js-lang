
function getValue(unitPrice, quantity) {
  return unitPrice * quantity;
} // -> to have a total values

function flowersInfo(flowerName, unitPrice, flowerQuantity) {
  let flowerValues = getValue(unitPrice, flowerQuantity);
  console.log(
    `${flowerName} - unit price: ${unitPrice} , quantity: ${flowerQuantity} , value: ${flowerValues}`
  );
  return flowerValues; // -> sends data back from the function to be used later
}

let roseVal = flowersInfo("Rose", 8, 70, 560);
let lilyVal = flowersInfo("Lily", 10, 50, 500);
let tulipsVal = flowersInfo("Tulip", 2, 120, 240);

let total = roseVal + lilyVal + tulipsVal;
console.log(`Total: ${total}`);
