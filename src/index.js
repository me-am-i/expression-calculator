function eval() {
    // Do not use eval!!!
    return;
}

/*

Гипотезы:
проверяем кол-во скобок, если не парное - то отлуп

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/TypeError


https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/match
Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
пройдём по строке, и найдём количество скобок

*/



function expressionCalculator(expr) { //на вход поступает строка String


var bracketMask = /\(|\)/g; //создаём маску
var found = expr.match(bracketMask); //ищем по маске


if (!found) {

    var array = Array.from(expr);  //создаём массив из входящей строки


    //console.log(Array.isArray(array)); //проверяем, что у нас массив

    //console.log(typeof expr);
    


  var a = expr[0];
  var b = expr[2];

    console.log("1y=" + expr[0] + " 2y=" + expr[1] + " 3y= " + expr[2] + " 4y= " + expr[3] + " 5y= " + expr[4]);

    if (expr[4] == 0) {throw TypeError("TypeError: Division by zero.");
}


    if (typeof expr[1] == "string") {
// если вторым элементом знак мат. действия, то подставляем его между первым и третим элементом 
        switch (expr[1]) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "/":
                if (expr != 1) {throw TypeError("TypeError: Division by zero.");
                }
                else {
                return a / b;}
            case "*":
                return a * b;
        }
    }
}





if (found.length % 2) {  //проверка количества
        console.log(found.length + " нечетное, ошибка");

        throw TypeError("ExpressionError: Brackets must be paired");

} else if (found.length % 2 == 0) {
    console.log(found.length + " чётное, проверяем дальше");
} else {
  

 

/*

Array.isArray(array);


console.log(found.length);

var newArray = Array.from(found);
console.log(newArray.length);

*/

//console.log(typeof array);
//console.log(array.length);
console.log(found);

var array = Array.from(expr);  //создаём массив из входящей строки


    //console.log(Array.isArray(array)); //проверяем, что у нас массив

    //console.log(typeof expr);
    


  var a = expr[0];
  var b = expr[2];

    console.log("1y=" + expr[0] + " 2y=" + expr[1] + " 3y= " + expr[2] + " 4y= " + expr[3] + " 5y= " + expr[4]);

    if (expr[4] == 0) {throw TypeError("TypeError: Division by zero.");
}


    if (typeof expr[1] == "string") {
// если вторым элементом знак мат. действия, то подставляем его между первым и третим элементом 
        switch (expr[1]) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "/":
                if (expr != 1) {throw TypeError("TypeError: Division by zero.");
                }
                else {
                return a / b;}
            case "*":
                return a * b;
        }
    }
}

}




module.exports = {
    expressionCalculator
}

/*
try {
    if (expr == "1 / 0") throw new TypeError("Division by zero.");
      } catch (error) {
      return error;
  }
  */
