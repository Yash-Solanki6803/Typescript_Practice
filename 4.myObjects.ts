// Object's props can have different datatypes

//Inferred type
const user = {
  name: "yash",
  age: 20,
  isAdmin: false,
};

let admin: {
  name: string;
  age: number;
  isAdmin: true;
};

// using objects as arguments and returnType

function createUser({
  name,
  age,
  isAdmin,
}: {
  // Argument types
  name: string;
  age: number;
  isAdmin: boolean;
}): {
  // Return types
  name: string;
  age: number;
  isAdmin: boolean;
} {
  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
  };
}

//Problem

// This works
createUser({
  name: "Yash",
  age: 23,
  isAdmin: true,
});

//This doesn't work
createUser({
  name: "Yash",
  age: 23,
  isAdmin: true,
  email: "thisisyashs@gmail.com",
});

//But this does
const newUser = {
  name: "Yash",
  age: 23,
  isAdmin: true,
  email: "thisisyashs@gmail.com",
};

createUser(newUser);

export {};
