class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      
      this.width = 100;
      this.height = 20;
	  this.x=x;
	  this.y=y;
	  this.body = Bodies.rectangle(x, y, 50, 50, options);
      World.add(world, this.body);
    };
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("black");
		    rect(this.x,this.y,50,50);

			pop()
	}

}