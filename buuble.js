class RedBubble{
    constructor(x,y,color){
        this.radius=20
        this.color=color;
        var options={isStatic:true};
        this.body=Bodies.circle(x,y,this.radius,options);
        //this.image=loadImage("redBubble.png");
    }

    display(){
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        
    }
}