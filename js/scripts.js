// business logic

// pizza constructor
function Pizza (toppings, size) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}

// pizza prototype that returns what the customer ordered
Pizza.prototype.typeOfPizza = function() {
  return "1x " + this.pizzaSize + " with " + this.pizzaToppings;
}





// user interface logic
