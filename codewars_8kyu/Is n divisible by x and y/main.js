function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        otvet = true;
    } else {
        otvet = false;

    }
    return otvet;

}
console.log(isDivisible)