// function checkThreeAndTwo(array) {
//     let ar1 = array.join(" ")
//      for (let i = 0; i < array.length; i++) {
//         if (ar1[i] === ar1[i - 1]) {
//
//         }
//      }
// }



// const arrays = ["a", "a", "a", "b", "b"];
// console.log(checkThreeAndTwo(arrays));

// let str = 'Pop'
// function palindrom(str) {
//       let s = str.toLowerCase().replace(/[^a-z0-9]/g, '')
//       let revStr  = s.split("").reverse().join("")
//       return s === revStr;
// }
// console.log(palindrom(str))


let str = 'Pop'
function palindrom(str) {
    let s = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left ++
        right --
    }
    return true
}
console.log(palindrom(str))