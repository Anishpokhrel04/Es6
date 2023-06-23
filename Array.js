//var names = new Array("Anup" , "Rajesh" , "Shyam" , "Hari" , "Geeta" , "Sita");
//for(var i= 2; i<=names.length;i++){
  //console.log(names[i])
//}

//Concatination of array

// var alphabet =["a" , "b" , "c" , "d" , "e"]
// var number = [1, 2, 3 , 4]
// var alphaNumeric= alphabet.concat(number);
// console.log(alphaNumeric);

//filtering array

// function Filters(element){
//   return(element>=10)
// }
// var hero = [21,56,10,6,4].filter(Filters)
// console.log(hero);

// map function

const products=[
  {name:"Salt" , price: 45},
  {name: "Suger", price:100}
];
const mappedData = products.map((item, index)=>{
  console.log(index);
  return item.name +"has price of "+ item.price
})
console.log(mappedData)