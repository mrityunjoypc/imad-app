console.log('Loaded!');

//This is to change the text inside the HTML page.

var element = document.getElementById("text-header");
element.innerHTML = "This text is changed through JavaScript!!";

//Play around with the image css

var image = document.getElementById('img-logo');

image.onclick = function() {
    image.style.marginleft = "200px";
};

