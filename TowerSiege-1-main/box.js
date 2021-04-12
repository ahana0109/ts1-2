class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      if (this.body.speed<3) {
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
       
    } else {
        World.remove(world, this.body); 
        this.visibility = this.visibility-5
    }
    pop();  

    }
  };