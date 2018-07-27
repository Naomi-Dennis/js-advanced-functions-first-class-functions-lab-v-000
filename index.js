// Code your solution in this file!
const returnFirstTwoDrivers = (list) => {
   return list.slice(0, 2)
}

 const returnLastTwoDrivers = (list) =>{
   let maxLength = list.length
   return list.slice(maxLength - 2, maxLength)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(value){
   return (value) => { return value ** 2}
}

function fareDoubler(){

}
function fareTripler(){

}
function selectDifferentDrivers(arrayOfDrivers, foo){

}
