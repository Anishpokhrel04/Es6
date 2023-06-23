class Introduction{
  constructor(roll, fname, lname){
    this.rn = roll
    this.fname= fname
    this.lname = lname
  }
  set rollnumber(roln){
    this.rn = roln
  }
}

let s1 = new Introduction(14, 'Anish' , 'Pokhrel');
console.log(s1);
s1.rollnumber = 44;
console.log(s1)