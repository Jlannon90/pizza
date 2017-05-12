// business logic

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

// adjusts price based on size, small just stays at $10 so its not included
  if (this.pizzaSize === "medium") {
    pizzaCost += 2;
  } else if (this.pizzaSize === "large") {
    pizzaCost += 4;
  }

// loop that checks array for added topping and adjusts price based on what it finds in array
  this.pizzaToppings.forEach(function(topping) {
    if ((topping === " pepperoni") || (topping === " chicken") || (topping === " sardines") || (topping === " sausage")) {
      pizzaCost += 2;
    } else if ((topping === " mushroom") || (topping === " bell pepper") || (topping === " jalapeno") || (topping === " onion") || (topping === " olives")) {
      pizzaCost += 1;
    }
  });
  return pizzaCost;
}

// user interface logic

$(function() {
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
// collects user input from radio buttons and checkboxs
      var sizeSelection = $("input:radio[name=size]:checked").val();
      var toppingSelection = $("input:checkbox[name=topping]:checked").map(function() {
        return this.value;
      }).get();

// creates new pizza objects based on user input
      var newPizza = new Pizza(sizeSelection, toppingSelection);

// displays the new pizza
      $("ul#pizza").append("<li>" + newPizza.typeOfPizza() + "</br><strong>Total cost:</strong> $" + newPizza.cost() + "</li>");
  });
});
