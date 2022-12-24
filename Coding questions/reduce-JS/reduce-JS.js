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


// Given a list of fruits, let’s create an object that groups the fruits by how many times they occur in the array

const fruits = [
    'apple',
    'orange',
    'orange',
    'apple',
    'cherry',
    'grape',
    'banana',
    'cherry',
    'orange'
];

const tally = (fruits) => {
    let obj = {};

    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];
        if (obj[fruit]) {
            obj[fruit]++;
        } else {
            obj[fruit] = 1;
        }
    }

    return obj;
};

const tally1 = (fruits) => {
    return fruits.reduce((prevValue, currValue) => {
        if (prevValue[currValue]) {
            prevValue[currValue]++;
            return prevValue;
        } else {
            prevValue[currValue] = 1;
            return prevValue;
        }
    }, {});
};

// Flatten array using reduce

const nums2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const flatten = (array) => {
    return array.reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
};

console.log(flatten(nums2D));