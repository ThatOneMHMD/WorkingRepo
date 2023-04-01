var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('input[#shopping-list]');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event){

    event.preventDefault();

    var shoppingItems = $("<p>");
    shoppingItems.text("shopping List:", shoppingListEl.val());
    shoppingItems.append(shoppingFormEl);

    


}


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
