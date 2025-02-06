// Creating type alias
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User): User {
  user.isActive = !user.isActive;
  return user;
}

type A = {
  a: number;
};

type B = {
  b: string;
  c: boolean;
};

// Using AND in type
type C = A & B;

const myVar: C = {
  a: 12,
  b: "asda",
  c: true,
};

// Array Type : Both are same types
type Users = User[];
type Admins = Array<User>;

// Using OR in type
type Admin = {
  username: string;
  isHead: boolean;
};

// So I can use to have any one of  the two types.
let user1: User | Admin;
