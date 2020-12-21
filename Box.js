class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution: 1,
        friction:0.3,
        denstity:0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
