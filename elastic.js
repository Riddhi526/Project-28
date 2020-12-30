class Elastic{
    constructor(bodyA,pointB){
         var options={
             bodyA: bodyA,
             pointB: pointB,
             stiffnes: 0.04,
             lenght: 10
         }
         this.pointB = pointB;
         this.sling=Constraint.create(options);
         World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    attach(body){
        this.sling.bodyA=body;
    }

}
        
       