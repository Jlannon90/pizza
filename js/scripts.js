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

// pizza prototype that calculates cost
Pizza.prototype.cost = function() {
  var pizzaCost = 10;

  if (this.pizzaSize === "medium") {
    pizzaCost += 2;
  } else if (this.pizzaSize === "large") {
    pizzaCost += 3;
  }

  if (this.pizzaToppings === "meat") {
    pizzaCost += 2;
  } else if (this.pizzaToppings === "veggie") {
    pizzaCost += 1;
  }
  return PizzaCost;
}

// user interface logic

$(function() {
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
      var sizeSelection = $("input:radio[name=size]:checked").val();
      var toppingSelection = $("input:radio[name=topping]:checked").val();

      var newPizza = new Pizza(sizeSelection, toppingSelection);

  });
});
