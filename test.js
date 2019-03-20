let str = "jncdfjlkclsmcfdkdfv";

function changeReg(str, reg, inv) {
    let newstr = "";
    for (let i=0; i<str.length; i++) {
        if (reg === "up") {
            if (inv && i==0) {
                newstr += str[i].toLowerCase();
            } else {
                newstr += str[i].toUpperCase();
            }
        } else if (reg === "down") {
            if (inv && i==0) {
                newstr += str[i].toUpperCase();
            } else {
                newstr += str[i].toLowerCase();
            }
        } else {
            console.log("Задан неправильный регистр");
            break;
        }
    }
    return newstr;
}

console.log(str);
console.log("Измененная строка: ", changeReg(str, "up", 1));
console.log("Измененная строка: ", changeReg(str, "down", 1));