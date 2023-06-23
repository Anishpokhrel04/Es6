//promise created 
const getData = () =>{
  return new Promise ((resolve, reject) => {
    const names = ['ram' , 'hari'];
    resolve(names)
  })
}
 function getDataSecondPromise(resolve, reject){
  reject("Error 404")
 }

 const getDataSecond = () => {
  return new Promise(getDataSecondPromise)
 }

 getData()
 .then((data)=>{
  console.log(data)
 }) 
 .catch((err)=>{
  console.log("Error Occoured")
 })