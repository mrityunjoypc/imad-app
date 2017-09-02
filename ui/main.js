console.log('Loaded!');

//This is to change the text inside the HTML page.

var element = document.getElementById("text-header");
element.innerHTML = "This text is changed through JavaScript!!";

//Play around with the css of web elements

var image = document.getElementById('img-logo');



var siz = 0
function moveRight(){
    
    siz = marginleft + 20;
    image.style.marginLeft = siz + 'px';
    
}
    
    


image.onclick = function() {
    image.style.marginLeft = "10%";
    element.style.color = 'green';
    var interval = setInterval(moveRight,100);
};