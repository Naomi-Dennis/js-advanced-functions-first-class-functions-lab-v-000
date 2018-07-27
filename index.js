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
   return (multi) => { return value ** multi}
}

function fareDoubler(fare){
  return (fare) => { return fare * 2 }
}
function fareTripler(){
     return (fare) => { return fare * 2 }
}
function selectDifferentDrivers(arrayOfDrivers, foo){

}
