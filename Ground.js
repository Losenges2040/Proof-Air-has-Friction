class Ground{
constructor(x,y,width,height){
    var Goptions = {
        isStatic : true,
        density: 1.0
      }
      this.body = Bodies.rectangle(x,y,width,height, Goptions);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
      this.color = "green";
}

display(){
    var pos = this.body.position;
    fill(this.color);
    rectMode(CENTER);
    console.log(pos);
    //rect(pos.x,pos.y,this.width,this.height);

}

}