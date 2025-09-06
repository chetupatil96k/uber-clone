const rideModel=require('../models/ride.model');
const mapService=require('./maps.service');
const crypto = require('crypto');


async function getFare (pickup,destination) {
    if(!pickup || !destination) {
        throw new Error('Pickup and destination are required to calculate fare.');
    }

    const distanceTime = await mapService.getDistanceAndTime(pickup, destination);
    
    const baseFare = {
        auto: 30,
        car: 50,
        moto:20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto:8
    };
    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto:1.5
    };

   
    const fare = {
        auto: baseFare.auto + (perKmRate.auto * (distanceTime.distance.value / 1000)) + (perMinuteRate.auto * (distanceTime.duration.value / 60)),
        car: baseFare.car + (perKmRate.car * (distanceTime.distance.value / 1000)) + (perMinuteRate.car * (distanceTime.duration.value / 60)),
        moto: baseFare.moto + (perKmRate.moto * (distanceTime.distance.value / 1000)) + (perMinuteRate.moto * (distanceTime.duration.value / 60)),
    };
    return fare;
}

function getOtp(num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString();
        return otp;
    }
    return generateOtp(num);
}



module.exports.createRide=async ({
    user,pickup,destination,vehicleType
})=>{
    if(!user || !pickup || !destination || !vehicleType) {
        throw new Error('Missing required fields to create a ride.');
    }
    const fare = await getFare(pickup, destination);
    

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(4),
        fare: fare[vehicleType],
       
        
    });

    return ride;
}



