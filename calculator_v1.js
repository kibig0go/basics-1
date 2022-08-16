function calc(action, a, b) {
    let operations = {
        'add': a + b,
        'multi': a * b,
        'subtract': a - b,
    }
    switch (action) {
        case 'add':
            return operations.add;
        case 'multi':
            return operations.multi;
        case 'subtract':
            return operations.subtract;
        default:
            return "error";
    }
}

console.log('value1 = ' + calc('add', 1, 2));
console.log('value2 = ' + calc('multi', 1, 2));
console.log('value3 = ' + calc('subtract', 3, 2));