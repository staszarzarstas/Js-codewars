function closeCompare(a, b, margin) {
    if (Math.abs(a - b) <= margin) {
        return 0;
    } else {
        Math.sign(a - b);
    }
}