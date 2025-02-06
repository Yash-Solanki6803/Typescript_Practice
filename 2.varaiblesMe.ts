//string
let greetings: string = "Yash";

console.log(greetings);

//number

let userId: number = 123123123;

userId.toExponential();

//boolean

let isLoggedIn: boolean = false;

// Inference - If a variable is initiated and declared at the same place, typescript will get the type automatically.

// This
// let userID:number = 2121212;
// Is same as
// let userID = 11121212;

//any

let hero;

function getHero() {
  return "thor";
}

hero = getHero(); //Inferred type is any instead of string. So it is good to use  hero:any at declaration.
