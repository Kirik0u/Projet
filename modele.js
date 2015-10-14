function point(x, y){
	this.x = x;
	this.y = y;
}

function vector(A, B){
	this.a = new point(A.x, A.y);
	this.b  =new point(B.x, B.y);
	var dirx = a.x-b.x;
	var diry = a.y-b.y;
	this.longueur = function(){
		return Math.sqrt(dirx*dirx + diry*diry);
	};
}

function circle(pt, rayon){
	this.centre = new point(pt.x, pt.y);
	this.rayon = rayon;
}

function snake(count){
	this.count = count;
	//this.dir = new vector();
	this.tete = function(pt, r){
		this.tete = new circle(pt, r);
	};
	this.corps = function(pt, r){
		for(i=0; i<count; i++)
			this.corps[i] = new circle(pt-i*r, r);
	};
}

module.exports.point = point;
module.exports.vector = vector;
module.exports.circle = circle;
module.exports.snake = snake;
	
