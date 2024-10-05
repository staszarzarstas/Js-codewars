// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

let str = "Sam Harris";
function abbrevName(name){
    let words = name.split(' ');
    let initials = words[0][0].toUpperCase() + "." + words[1][0].toUpperCase(); 
    return initials;
}
console.log(abbrevName(str)); 





