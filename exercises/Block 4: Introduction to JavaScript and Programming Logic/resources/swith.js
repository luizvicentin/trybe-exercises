// Switch Statement
//https://www.w3schools.com/js/js_switch.asp

//Use the switch statement to select one of many code blocks to be executed.
// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

let trafficLight = 'green';

switch (trafficLight) {
    case 'red':
        console.log('Stop!');
        break;
        
        case 'yellow':
            console.log('Attention!');
            break;

        case 'green':
        console.log('You are good to Go!');
        break;
    
    default:
        console.log('Value indefine!!')
        break;
};

//The structure switch/case is used when we want to peform differente actions.
//The expresision we pass to switch is evaluated only once, and its value is compared
// in each case. If this comparison is true, the block code os the evaluated case is executed.
//If no value satifies the lists case, the code in is executed default.