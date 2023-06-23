class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  details(){
    return 'Name is ' + this.name + 'Age is ' + this.age
  }
}

ram = new Person('Ram Subedi' , 24)
console.log(ram.details())
hari = new Person('hari Krishna' , 45)
console.log (hari.details())
