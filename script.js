let number = 4


if (number> 0) {
    console.log('Number is greater than 10');
} else if  (number < 0) {
    console.log('x is not greater than 10');
}

else {
    console.log('Number is not greater than 10');
}



var day = 'Friday';

switch (day) {
    case 'Sunday':
        console.log('yay!! it is Sunday!!');
        break;
    case 'Monday':
        console.log('Ewww it is Monday.');
        break;
    case 'Tuesday':
        console.log('it is Tuesday.');
        break;
    case 'Wednesday':
        console.log('it is Wednesday');
        break;
    case 'Thurdays':
        console.log('it is Thursday');
        break;
    case 'Friday':
        console.log('Yay!! it is Friday');
        break;
    case 'Saturday':
        console.log('YAAAYY!! it is Saturday');
        break;
}




for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        break; 
    }
    console.log(i);
}
console.log("Loop exited at i = 7");

var person = {
    firstName: "othniel",
    lastName: "powell",
    age: 27
};

with (person) {
    console.log(firstName + " " + lastName + " is " + age + " years old");
}


let globalVar = "I'm global!";
 
function scopeExample() {
    let localVar = "I'm local!";
   


}

for (let j = 1; j <= 5; j++) {
    // Print i


let j = 1; 
do;


while (j <= 5) 
    console.log("j");

}

console.log("j");
