/*
    C
    int number = 30;
    printf("%d", number);

    JS
    var number = 32.9;
    var character = "c";
    //const var let
    console.log(number);
    ////node use when backend in javascripts  not sure writing node right or wrong
    */
    let number = 30;
    console.log(number);

    var today = new Date();
    // new key word use here cuz Date have already create 
    console.log(today);

    var hrNow = today.getHours(); // if no () is properties, if () is method
    var greeting;

    if (hrNow > 18){
      greeting = "Good night";
    } else if ( hrNow <= 11){
      greeting = "Good morning";
    } else {
      greeting = "Good afternoon";
    }

    console.log(hrNow);
    console.log(greeting);

    document.write("<h1>" + greeting + "</h1>");

    var price = 20;
    var quantity = 30;
    var total;
    total = price * quantity;
    // document.write( "<p>" + "Price is: $" + price + "</p>");
    // document.write( "<p>" + "Quanitity is: $" + quantity
    //  + "</p>");
    // document.write( "<p>" + "Total price is: $" + total + "</p>");

    console.log

    var el = document.getElementById ('cost');
    el.textContent = "Total: $" + total;
