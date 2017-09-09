var counter = 0 // this is to initialize the counter

app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
  
});