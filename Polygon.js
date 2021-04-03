class Polygon {
    constructor(x,y){
      this.body = Bodies.circle(x,y,30);
      this.image = loadImage("polygon.png");
      World.add(world, this.body)
    }
  
    display() {
    
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50,50);
        
    }
  }
   