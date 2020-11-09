
class Trash extends LogHelper{
  constructor(x,y){
    super(x,y,100,135);
    this.image = loadImage("dustbin.png");

  
  }
  display(){
    /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    super.display();
  }
}
  