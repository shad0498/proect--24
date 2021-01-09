class Dustbin {
    constructer (x,y,width, heighht){
        var options = {
            'isStatic' : true     
        }
        
        this.bodyb = Bodies.rectangle(x,y,width,options);
        World.add(world,this.body);
        this.body1= Bodies.rectangle((x-(width))),(y-(height*2)),height;
        World.add(world, this.body1)
        this.bodyr = Bodies.rectangle((x+(width/2)),(y-(height*2),height));
        World.add(world,this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height
        
    }

 display(){

   fill("white");
   rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width);
   rect((this.bodyb.position.x-(this.bodyb.width/2)),(this.bodyb.position.y));
   rect((this.bodyb.position.x+(this.bodyb.width/2)),(this.bodyb.position.y));

 } 
}