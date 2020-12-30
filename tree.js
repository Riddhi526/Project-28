class Tree{
    constructor(x,y,w,h){
        var options={
            isStatic: true,
            restitution: 0
        }
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.image=loadImage("tree.png");
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);

    }
    display(){
        var treePos = this.body.position;

        push()
        translate(treePos.x,treePos.y);
        imageMode(CENTER);
        strokeWeight(4);
        fill("brown");
        image(this.image,0,0,this.width,this.height);
        pop()

    }
}