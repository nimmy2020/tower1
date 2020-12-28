class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
            
        }
        this.body1=Constraint.create(options);
        this.pointB=pointB,
        World.add(world,this.body1);

    }

    fly(){
        console.log("inside")
        this.body1.bodyA=null;

    }


    display(){
        if(this.body1.bodyA){
        var pointA=this.body1.bodyA.position;
        var pointB=this.pointB;
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
       
    }
}