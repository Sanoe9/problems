// Given an array, calculate the total of elements

let calculateSum = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
};

let calculateSum1 = (array) => {
    return array.reduce((prevValue, currValue) => {
        return prevValue + currValue;
    });
};


// Calculate the total price of the products in the shopping cart

let shoppingCart = [
    {
      product: 'phone',
      qty: 1,
      price: 500,
    },
    {
      product: 'Screen Protector',
      qty: 1,
      price: 10,
    },
    {
      product: 'Memory Card',
      qty: 2,
      price: 20,
    }
]; 

let calculateTotalPrice = (shoppingCart) => {
    return shoppingCart.reduce((prevValue, currValue) => {
        return prevValue + currValue.price * currValue.qty;
    }, 0);
};

console.log(calculateTotalPrice(shoppingCart));