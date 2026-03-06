console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(shoppingList) {
  return "Current Shopping List: "+shoppingList;
}

consol.log(getShoppingListMsg(shoppingList));