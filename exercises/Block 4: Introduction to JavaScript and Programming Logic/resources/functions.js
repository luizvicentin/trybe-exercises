/* Basics of functions

- A function is a reusable piece of code that performs some logic and gives you a result
- The return keyword allows the function to give the result of its computation.
- return keyword can only be used inside a function.
- A parameter is a variable that a function receives.
- Most functions will use that variable they receive and will compute the result based on it.
- To call a function, you have to start with its name then opening parentheses (, then the value you want to give to the parameter and then a closing parenthesis )
*/
// Example ↓

let statusCar = 'off';
let speed = 0;
let direction = 0;

function onOff () { 
    if (statusCar === 'off') {
        statusCar = 'on';
    } else {
        statusCar = 'off';
    }
    return statusCar;
};

function speedUp ( increase ) {
    speed = speed + increase;

    return 'Speeding up at ' + speed + 'm/s²';
};

function brake ( decrease ) {
    speed = speed - decrease;

    return 'Slowing down at ' + speed + 'm/s²'; 
};

function turn ( rotationAngle ) {
    direction = rotationAngle;
    
    return direction + '°';
};

console.log ( statusCar);