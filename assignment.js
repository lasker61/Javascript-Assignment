//Kilometer to Meter

function kilometerToMeter(kilometer){
    if( kilometer < 0){
        return "kilometer can not be negative !";
    }
    var meter = kilometer * 1000;     //1000 meter = 1 kilometer
    return meter;
}
console.log(kilometerToMeter(-5000));


//Budget Calculator

function budgetCalculator(numberOfWatch,numberOfPhone,numberOfLaptop){
    if(numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0){
        return "Watch,Phone,Laptop can not be negative";
    }
    var watchTotal = numberOfWatch * 50;  // each watch = 50 taka
    var phoneTotal = numberOfPhone * 100;
    var laptopTotal = numberOfLaptop* 500;
    var totalPrice =watchTotal + phoneTotal + laptopTotal;
    return totalPrice;
}
console.log(budgetCalculator(2,5,1));


//hotelCost

function hotelCost(days){
    var rent = 0;
    if(days == 0 || days < 0){
        return " Dayes can not be 0 or negative) ";
    }
    else if(days > 0 && days <= 10){
        rent = days * 100;   // first 10 days 100 taka per day
    }
    else if(days > 10 && days <=20){
        days = days - 10 ;
        rent = 10*100 + days * 80;  // first 10 days + 80 taka * number of days within 20
    }
    else if( days > 20){
        days = days - 20;
        rent = 10 *100 + 10 *80 + days * 50;   //first 20 days + 50 taka * per day after 20 days
    }
    return rent;
}
console.log(hotelCost(23));


//megaFriend

function megaFriend(friendName){
    if(friendName.length == 0 || Array.isArray(friendName) == false){ //checking wheather the input array is valid or not
        return "please enter right array";
    }
    var largest = friendName[0];
    for (i = 0; i < friendName.length; i++){
        var nextName = friendName[i];          //if the nextName has large length then we will update the largest with nextName!
        if (nextName.length > largest.length){
            largest = nextName;
        }
    }
    return largest;
}
console.log(megaFriend(["nahid", "kadir","mohammad Ebrahim", "abishekh", "arafat", "Joy"]));

