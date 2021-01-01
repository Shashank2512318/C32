class Bird extends Base {
    constructor(x, y) {
        super(x, y, 50, 50, 0);

        this.Image= loadImage("sprites/bird.png");
        this.smokeImage= loadImage("sprites/smoke.png")

        this.path= [];


    }

    display() {
        
        super.display();

        //this.body.position.x= mouseX;
        //this.body.position.y= mouseY;
           if(this.body.position.x> 225 && this.body.speed>10) {
        this.path.push([this.body.position.x, this.body.position.y]);}
        for (var i= 0; i< this.path.length; i++) {
            image(this.smokeImage, this.path[i][0], this.path[i][1])

        }
    
        
    }
}