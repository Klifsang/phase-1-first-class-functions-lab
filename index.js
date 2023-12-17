// Code your solution in this file!
const returnFirstTwoDrivers = (drivers)=>{
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = (drivers)=>{
    return drivers.slice(-2);
}
const createFareMultiplier = (factor)=>{
    const multiplier = fare => fare*factor;
    return multiplier;
}
const fareDoubler = (fare)=>{
    return createFareMultiplier(2)(fare);
}
const fareTripler = (fare)=>{
    return createFareMultiplier(3)(fare);
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const selectDifferentDrivers = (drivers,selectedDrivers)=>selectedDrivers(drivers);