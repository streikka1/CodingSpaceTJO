function myPow(a, n) {
    // = 1 required to set type    
    let result = 1;
    if (n == 0) {
        result = a;
    } else if (n > 0) {
        for (let index = 0; index < n; index++) {
            result *= a;
        }
    } else if (n < 0) {
        for (let index = 0; index > n; index--) {
            result /= a;
        }
    }
    return result;
}