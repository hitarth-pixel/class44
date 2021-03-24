class Ball{
    constructor(x,y){
        this.radius=30;
        this.body=Bodies.circle(x,y,this.radius);
        World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(this.body.x,this.body.y,this.radius,this.radius);
        pop();

    }
}