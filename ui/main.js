console.log('Loaded!');

//This is to change the text inside the HTML page.

var element = document.getElementById("text-header");
element.innerHTML = "This text is changed through JavaScript!! \n now click on the image";

//Play around with the css of web elements

var image = document.getElementById('img-logo');
var siz = 0;

function moveRight(){
    
    siz = siz + 20;
    image.style.marginLeft = siz + 'px';
    
}
    
image.onclick = function() {
    image.style.marginLeft = "10%";
    element.style.color = 'green';
    element.innerHTML = "The text is changed again when image is clicked, also the image is moving.";
    var interval = setInterval(moveRight,50);
};



var button = document.getElementById('countBut');
button.onclick = function(){
    
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
};