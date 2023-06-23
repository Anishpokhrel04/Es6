// map function using multiple data 

const Data=[
  {
    id:1,
    key:20,
    name:"Rajesh",
    location: "kathmandu",
  },

  {
    id:2,
    name:"Rajesh",
    location: "kathmandu",
  }

]

const answer = Data.map((item)=>({
  id:item.id,
  key:item.key,
  name:item.name,
}));
console.log(answer);


// map function using numbers

const number = [1,4,9];
const roots = number.map((num)=>Math.sqrt(num));
console.log(roots);



