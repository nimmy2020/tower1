class Block{
    constructor(x,y,width,height){
        var options={
            restitution : 0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        var angle = this.body.angle; 
        var pos = this.body.position
        push ();
        translate (pos.x,pos.y);
        angleMode (RADIANS);
        rotate (angle); 

        strokeWeight (3);
        rectMode (CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}