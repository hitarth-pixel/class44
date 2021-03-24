class Form{
    constructor(){
        this.button=createButton('start');
        
    }

    display(){
        var title=createElement('h1');
        title.html("BUBBLE SHHOTER GAME");
        title.position(displayWidth/2-50,0);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(()=>{
                    
            background("black");
            this.button.hide();

            for(var i=0;i<=width;i=i+50){
                redBubble=new RedBubble(i,100,"red");
                redBubble.display();}

            for(var j=0;j<=width;j=j+75){
                blueBubble=new BlueBubble(j,170,"blue");
                blueBubble.display();
                }

            for(var z=0;z<=width;z=z+100){
                greenBubble=new GreenBubble(z,240,"green");
                greenBubble.display();
                }

             for(var x=0;x<=width;x=x+125){
                yellowBubble=new YellowBubble(x,310,"yellow");
                yellowBubble.display();
                }
                fireObj=new Ball(displayWidth/2,displayHeight/4)
    chain=new slingShot(fireObj.body,{x:displayWidth/2,y:displayHeight/2-50})
                fireObj.display();
                chain.display();
             }) 
    }

}