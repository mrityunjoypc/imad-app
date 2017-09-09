
var counter = 0;
var button = document.getElementById('countBut');
button.onclick = function(){
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};


var button2 = document.getElementById('countBut2');
button2.onclick = function(){
//create request object
var request = new XMLHttpRequest();

//capture response and store it in a variable
request.onreadystatechange = function(){
                                        if (request.readyState == XMLHttpRequest.DONE){
                                                                                if (request.status == 200){
                                                                                                var counter2 = request.responseText;
                                                                                                var span = document.getElementById('count2');
                                                                                                span.innerHTML = counter2.toString();
                                                                                                            }
                                                                                        }
                                        };

request.open('GET','http://mrityunjoypc.imad.hasura-app.io/ui/counter', true);
request.send(null);

};