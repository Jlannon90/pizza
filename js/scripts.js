// business logic
debugger;
// pizza constructor
function Pizza (size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

// pizza prototype that returns what the customer ordered
Pizza.prototype.typeOfPizza = function() {
  return "1x " + this.pizzaSize + " pizza </br> with " + this.pizzaToppings;
}

// pizza prototype that calculates cost
Pizza.prototype.cost = function() {
  var pizzaCost = 10;

  if (this.pizzaSize === "medium") {
    pizzaCost += 2;
  } else if (this.pizzaSize === "large") {
    pizzaCost += 3;
  }

  this.pizzaToppings.forEach(function(topping) {
    if ((topping === "pepperoni") || (topping === "chicken") || (topping === "sardines") || (topping === "sausage")) {
      pizzaCost += 2;
    } else if ((topping === "mushroom") || (topping === "bell pepper") || (topping === "jalapeno") || (topping === "onion") || (topping === "olives")) {
      pizzaCost += 1;
    }
  });
  return pizzaCost;
}

// user interface logic

$(function() {
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
      var sizeSelection = $("input:radio[name=size]:checked").val();
      var toppingSelection = $("input:checkbox[name=topping]:checked").map(function() {
        return this.value;
      }).get();

      var newPizza = new Pizza(sizeSelection, toppingSelection);

      $("ul#pizza").append("<li><h3>Your order:</h3></br>" + newPizza.typeOfPizza() + " Total cost: $" + newPizza.cost() + "</li>");
      console.log(newPizza);
  });
});
