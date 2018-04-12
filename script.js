$(document).ready(onReady);

console.log( 'jQuery Lecture');

//Our very first callback function.  Method that we pass a function into.  It waits to run the callback function until after the document is ready.
    function onReady(){
    console.log( 'jQuery is ready');
    $('h1').addClass( 'funny' );
    $('h1').css('color', 'red');  // This is a jQuery method.
    

// getters and setters


console.log($('h2').text()); //get text value of h2.  .text is for most elements
$('h2').text('You have been set');
    
// inputs (also, getter and setter)
$('#nameInput').val('Alex'); //setter for input val
console.log($('#nameInput').val()); // .val is for inputs

// events
// event handler
$('#addPersonButton').on( 'click', function(){
let newPersonName = $('#nameInput').val();
console.log( newPersonName);
$('#personList').append( '<li>' + newPersonName + ' ' + '<button class="deleteButton">Delete</button>' + '</li>');
});

$('#iWasClicked').on( 'click', function(){
    console.log($('I was clicked').val());
});

$('#personList').on( 'click', '.deleteButton', function(){
    console.log( 'Delete button was clicked.');
    $(this).parent().remove();
});
}




