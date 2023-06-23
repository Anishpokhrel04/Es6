class Rectangle{
  constructor(height, width){
    this.height= height
    this.width = width
  }
  test(){
    console.log("the height and width of the rectangle are" , this.height , this.width)
  }
}

var test1 =new  Rectangle(14,22);
test1.test();
