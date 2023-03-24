// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray) {
    return [driverArray[0], driverArray[1]];
}

const returnLastTwoDrivers = function(driverArray) {
    return [driverArray[2], driverArray[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => function fareMultipler(fare) {
    return fare * integer;
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (arrayOfDrivers, selectedDrivers) {
    if (selectedDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}