class Pig extends Base {
    constructor(x, y) {
        
        super(x, y, 50, 50, 0);

        this.Image= loadImage("sprites/enemy.png")

        this.visible= (255);
    }

    display() {
       //console.log(this.body.speed);
       
       if(this.body.speed<2) {
         
        super.display();

       } else{
        push();
        World.remove(myworld, this.body);
        this.visible= this.visible-10
        tint(255, this.visible);
        image(this.Image, this.body.position.x, this.body.position.y, 50, 50)
        pop();
       }
        
    }

    calculator() {
      if(this.visible< 0 && this.visible>= -100) {
          Score= Score+100;

      }
      
      
    }

    
}