function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    a = expr[0];
    b = expr[2];

    console.log("1y=" + expr[0] + " 2y=" + expr[1] + " 3y= " + expr[2] + " 4y= " + expr[3] + " 5y= " + expr[4]);

    if (typeof expr[1] == "string") {
// если вторым элементом знак мат. действия, то подставляем его между первым и третим элементом 
        switch (expr[1]) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "/":
                if (expr[4] == "0") { var zero = "TypeError: Devision by zero.";
                    return zero;
                }
                else {
                return a / b;}
            case "*":
                return a * b;
        }
    }
}

module.exports = {
    expressionCalculator
}