interface lengthWise {
  length: number;
}

function logging<T extends Record<any, any>>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// logging("adasd")
