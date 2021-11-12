class Hierro {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      
      this.width = 200;
      this.height = 80;
      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(this.x,this.y, 50, 50, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     // pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('yellow')
      fill('black')
      rectMode(CENTER)
      rect(this.x,this.y, this.width, this.height);
      
      pop();
    };
  };
  