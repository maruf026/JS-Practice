// Task 01 /////////////

function introduce(name, age){
    console.log(`My name is ${name} and I am 20 years old`)
}
introduce('Abdur',20);

// /// Task 02 /////////

function calculateDiscount(originalPrice, discountPercentage){
    let disPrice= originalPrice - (originalPrice*discountPercentage/100);
    return disPrice
}

console.log(calculateDiscount(100,20));

// // Task 03 /////

function calculateTotal(price, quantity){
    let totalPrice= price* quantity;
    return totalPrice
}
console.log(calculateTotal(200,5));

// // Task 04 ////////

let PriceCategory = price => {
    if(price < 500){
        return 'Low Budget Product'
    }
    else if(price > 500 && price <= 2000){
        return 'Mid range Product'
    }
    else{
        return 'Premium Product'
    }
}
console.log(PriceCategory(20000))