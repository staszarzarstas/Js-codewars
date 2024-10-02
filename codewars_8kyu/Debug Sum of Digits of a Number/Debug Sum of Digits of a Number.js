function getSumOfDigits(integer) {
    var sum = null;
    var digits = Math.floor(integer).toString();
    for (var ix = 1; ix < digits.length; ix++) {
        sum = +digits[ix + 1];

        return sum;
    }
}

// var value = 2568,
//     sum = 0;

// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }

// console.log(sum);