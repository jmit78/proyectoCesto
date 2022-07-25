class Ball {
    constructor(x,y,r){
    this.body = Bodies.circle(x, y, r)
    this.r = r;
    World.add(world, this.body);
    }
    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(127);
        fill("purple");
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
      }
    Hforce(){
      Body.applyForce(this.body,{x: 0,y:0},{x:0.05,y:0})


    }
        Hforceup(){
      Body.applyForce(this.body,{x: 0,y:0},{x:0,y: - 0.05})


    }
}