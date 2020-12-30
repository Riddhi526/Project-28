class Ground {
    constructor(x,y,w,h){
        
        this.body=Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    display(){
        var groundpos = this.body.position;
        push()
        translate(groundpos.x,groundpos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(123,123,123);
        rect(0,0,this.width,this.height);

        pop()
    
    }
}