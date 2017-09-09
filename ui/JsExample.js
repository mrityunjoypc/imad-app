var counter = 0 // this is to initialize the counter

app.get('http://mrityunjoypc.imad.hasura-app.io/ui/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
  
});