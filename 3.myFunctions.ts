// Types in functions arguments
function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string = "default value") {
  return val.toUpperCase();
}

addTwo(5);

//Types in functions return statement
function addThree(num: number): number {
  return num + 3;
}

//using tsc inference.
const heroes = ["thor", "spiderman", "ironman"];

heroes.map((hero): string => {
  return `hello ${hero}`;
});
