// declaring enums
enum SeatChoice {
  AISLE, //Default value is 0
  MIDDLE, // Default value is 1 and so on with increment of 1
  WINDOW,
}

// Can also use strings or anything else as values
enum Gender {
  Male = "m",
  Female = "f",
}

//Here the produced code is too large so it is recommended to add connst

const enum Genders {
  Male,
  Female,
  Trans,
  Queer,
}

const yashSeat = SeatChoice.AISLE;
