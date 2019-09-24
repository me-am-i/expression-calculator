function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    a = expr[0];
    b = expr[2];

    if (typeof expr[1] == "string") {
// если вторым элементом знак мат. действия, то подставляем его между первым и третим элементом 
        switch (expr[1]) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "/":
                return a / b;
            case "*":
                return a * b;
        }
    }
}

module.exports = {
    expressionCalculator
}