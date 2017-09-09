
var counter = 0;
var button = document.getElementById('countBut');
button.onclick = function(){
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};


var counter2 = 0 // this is to initialize the counter
app.get('/ui/counter', function (req, res) {
  counter2 = counter2 + 1;
  res.send(counter2.toString());
  
});
