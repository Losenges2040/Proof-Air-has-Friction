class Box{
    constructor(x,y,width,height){
        var Options = {
            isStatic : false,
            density: 8946578463,
            restitution:0.9367,
            friction:0.8,
            frictionAir:0.5
            
          }
          this.body = Bodies.rectangle(x,y,width,height, Options);
          World.add(world,this.body);
          this.width = width;
          this.height = height;
          this.color = "red";
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
      
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    
    }
    
    }

