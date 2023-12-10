function myFunction() {
    const vegetarian = "Vegetarian Pizza";
    const hawaiian = "Hawaiian Pizza";
    const pepperoni = "Pepperoni Pizza";

    const pizzaPrice = 80;
    let orderTotal = 0;
    let orderQuantity = parseInt(document.getElementById("quantity").value);
    let cookingTime = 0;
    let orderName = document.getElementById("pizzaType").value;
    pizzaType = document.getElementById("pizzaType");
    quantity = document.getElementById("quantity");

    function checkOrderName() {
        const validPizzaTypes = ["Vegetarian Pizza", "Hawaiian Pizza", "Pepperoni Pizza"];
        let orderName = document.getElementById("pizzaType").value;
        
        if (!validPizzaTypes.includes(orderName)) {
            popUp();
            document.getElementById("pizzaType").value = "";
            document.getElementById("quantity").value = "";
            return false;
        }
        else {
            return true;
        }
    }

    function popUp() {
        document.getElementById("popup").innerHTML = "We do not serve that here.";
    }

    function totalCost() {
        orderTotal = orderQuantity * pizzaPrice;
    }

    function cookingTimer() {
        if (orderQuantity >= 1 && orderQuantity <= 2) {
            cookingTime = 10;
        } else if (orderQuantity >= 3 && orderQuantity <= 5) {
            cookingTime = 15;
        } else
        cookingTime = "at least 20";
    }

    if (checkOrderName()) {
        cookingTimer();
        totalCost();
        document.getElementById("result").innerHTML = "Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " + cookingTime + " minutes.";
    }

} 