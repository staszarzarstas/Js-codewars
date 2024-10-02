// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) return i;
//     }
//     return "Not found";
// }

function find(a, b) {
    return a.indexOf(b) >= 0 ? a.indexOf(b) : "Not found";
}