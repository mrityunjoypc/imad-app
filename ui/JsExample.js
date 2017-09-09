
var counter = 0;
var button = document.getElementById('countBut');
button.onclick = function(){
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};


