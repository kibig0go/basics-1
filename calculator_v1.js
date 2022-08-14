function calc(action, a, b) {
    switch (action) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'error';
    }
}

console.log('value1 = ' + calc('add', 1, 2));
console.log('value2 = ' + calc('multi', 1, 2));
console.log('value3 = ' + calc('subtract', 3, 2));