// Types in functions arguments
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    if (val === void 0) { val = "default value"; }
    return val.toUpperCase();
}
addTwo(5);
//Types in functions return statement
function addThree(num) {
    return num + 3;
}
//using tsc inference.
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "hello ".concat(hero);
});
