const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const SettingsBill = require('./SettingsBill');
const Set = SettingsBill();
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {

  res.render('home');
});

app.post('/settings', function(req, res) {
  // let smsCost = req.body.smsCost;
  // let callCost = req.body.callCost;
  // let critical = req.body.criticalLevel;
  // let warning = req.body.warningLevel;


  let { warning,callCost,smsCost,critical}=req.body

  Set.Callprice(callCost);
  Set.Smsprice(smsCost);
  Set.criticalLevel(critical);
  Set.warningLevel(warning);


  res.render('home', {

  });
  // res.redirect('/');
});

app.post('/action', function(req, res) {


let { warning,callCost,smsCost,critical}=req.body

  Set.Billtype(req.body.costType);

  let calls = Set.Calltotal();
  let smses = Set.Smstotal();
  let grandTotal = Set.TTTotal();



  res.render('home', {
    calls,
    smses,
    grandTotal
  });


});



let PORT = process.env.PORT || 3009;

app.listen(PORT, function() {
  console.log('App starting on port', PORT);
});
