class ground{
    constructor(x,y,width,height){
        let sstatic={isStatic:true};
        this.body=Bodies.rectangle(x,y,width,height,sstatic);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        World.add(world,this.body);


    }

    displayGround(){
        let positionBody = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill("yellow");
        rect(positionBody.x,positionBody.y,this.width,this.height);
        pop();


        

    }

    }
