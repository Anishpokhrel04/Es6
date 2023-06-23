class Introduction{
  constructor(roll, fname, lname){
    this.rn = roll
    this.fname= fname
    this.lname = lname
  }
  get fullName(){
    return this.fname + "--" + this.lname
  }
}

let s1 = new Introduction(14, 'Anish' , 'Pokhrel');
console.log(s1);
console.log(s1.fullName)
