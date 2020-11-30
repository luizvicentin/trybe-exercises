//Variables: angles
function triangle ( ang1 , ang2 , ang3 ) {
    let sum = ang1 + ang2 + ang3;
    if ( sum === 180 ) {
        return ( 'True. We have a Triangle!' );
    } else {
        return ( 'ERROR: These are not valid angles for a triangle' );
    }
};

console.log(triangle( 100 , 30 , 50 ));