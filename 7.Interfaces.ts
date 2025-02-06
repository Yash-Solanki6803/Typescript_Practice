interface User {
  email: string;
  userId: number;
  startTrial: () => string; //Both do the same thing
  endTrial(date: number): string;
}

// Re-opening interface : This will add a value to the interface, not replace the prev ones
interface User {
  name: string;
}

// Inheritance
interface Admin extends User {
  isAdmin: true;
}
