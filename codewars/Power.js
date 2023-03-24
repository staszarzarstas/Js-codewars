// function numberToPower(number, power) {
//     console.info(Math.log2(1024));
//     for (var i = 1; i < power; i++) {
//         if (number = number * number);
//     }
//     return number;
// }

function numberToPower(number, power) {
    //     console.info(Math.log2(1024));
    let c = 2
    for (var i = 1; i != power + 1; i++) {
        let c = number * c;
    }
    return number;
}