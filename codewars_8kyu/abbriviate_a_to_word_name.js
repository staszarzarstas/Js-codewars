// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

let str = "Sam Harris";
function abbrevName(name){
    let words = name.split(' '); // Разделяем строку на слова
  return words[0][0].toUpperCase() + "." + words[1][0].toUpperCase(); // Берем первые буквы каждого слова
    // return initials;
}
console.log(abbrevName(str)); // Выведет: S.H


// let str = ["C", "l", "a", "v", "i", "n", "H", "a", "c", 'h', 'b', 't'];
// console.log(str.sort());



