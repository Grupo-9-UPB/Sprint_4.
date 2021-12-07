/*let calcular = require('./src');
console.log(calcular.calcularPocentajes(10,20,10000,22,8,12,9000,11));*/
/*const limits = require('./limits.json');
const ranges_parameters = require('./ranges_parameters.json');*/
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
/*
const app = express()
const port = 3000 */

//app.use(express.json());

app.get('/api/emission-measurement/ranges_parameters', (req, res) => {
    console.log(ranges_parameters);
    //let limites = JSON.stringify(ranges_parameters)
  res.send(ranges_parameters);
})

app.post('/api/emission-measurement/ranges_parameters', (req, res) => {
    //console.log(ranges_parameters);
    //let limites = JSON.stringify(ranges_parameters)
    let nuevorango=req.body;
    ranges_parameters.push(nuevorango);
    console.log(ranges_parameters);
    //let stringnuevorango = JSON.stringify(ranges_parameters)
    res.send(ranges_parameters);
})

app.get('/api/emission-measurement/limits', (req, res) => {
    console.log(limits);
    //let stringnuevorango = JSON.stringify(ranges_parameters)
    res.send(limits);
})
/*
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) */

module.exports = app;