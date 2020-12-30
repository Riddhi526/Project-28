class Stone {
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.y=y;
        this.x=x;
        this.r=r;
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var stonePos = this.body.position;

        push()
        translate(stonePos.x,stonePos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        image(this.image,0,0,this.r,this.r);
        pop()

    }
}