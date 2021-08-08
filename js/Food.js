class Food{
    constructor(){
        this.image=loadImage('images/Milk.png')
    }

display(){

    var x=100,y=120;
    imageMode (CENTER)
    image (this.image,x,y,40,40)

    if(foodS!=0)
    for(var i=0;i<foodS+1;i++)
{
    image(this.image,x,y,40,40)
    x=x+20
      
    if(i%10===0){
        y=y+40;
        x=100
    }
}
}

}