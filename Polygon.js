class Polygon{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image,0, 0, this.r*2, this.r*2);
      pop();
    }
}