var modele = require('./modele');

var pt = modele.point;
var pnt = new pt(3,4);
var pnt2 = new pt(2,4);
console.log(pnt);

var cercle = modele.circle;
var c1 = new cercle(pnt, 5);
console.log(c1);

var snake = modele.snake;
var s = new snake(5);
s.tete(pnt, 5);
s.corps(pnt, 5);
console.log(s);


