class Pig {
    constructor(x,y){
        var option ={
            restitution : 0.8 ,
            density : 0.5,
            friction : 0.6

        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("blue");
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }





};