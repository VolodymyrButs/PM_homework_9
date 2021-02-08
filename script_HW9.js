// task 1
class SomeClass {
  static #count = 0;

  callMe() {
    ++SomeClass.#count;
  }

  static callCount() {
    return this.#count;
  }
}

const A = new SomeClass();
const B = new SomeClass();

A.callMe();
B.callMe();
A.callMe();
A.callMe();
B.callMe();
A.callMe();

console.log(SomeClass.callCount());

// task 2

class PersonGenderError extends Error {
  constructor(message) {
    super(message);
    this.name = "PersonGenderError";
  }
}

class Person {
  static GENDER = {
    NOT_DEFINED: 0,
    MAN: 1,
    WOMAN: 2,
  };

  _gender = Person.GENDER.NOT_DEFINED;
  _name = "NoName";
  constructor(gender, name) {
    this._name = name ? name : _name;
    if (!Object.values(Person.GENDER).includes(gender)) {
      throw new PersonGenderError("Gender shoud be among Person.GENDER values");
    }
    this._gender = gender;
  }

  set gender(gender) {
    if (!Object.values(Person.GENDER).includes(gender)) {
      throw new PersonGenderError("Gender shoud be among Person.GENDER values");
    }
    this._gender = gender;
  }

  get gender() {
    return this._gender;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

// task 3

class PersonLog extends Person {
  #logs = [];

  constructor(gender, name) {
    super(gender, name);
  }

  set gender(gender) {
    this.#logs.push(`gender: ${super.gender} ${gender}`);
    super.gender = gender;
  }

  get gender() {
    return super.gender;
  }

  set name(name) {
    this.#logs.push(`name: ${super.name} ${name}`);
    super.name = name;
  }

  get name() {
    return super.name;
  }

  printLogs() {
    console.table(this.#logs);
  }
}

const pl1 = new PersonLog(0, "new");
const pl2 = new PersonLog(2, "new2");

pl1.gender = 2;
pl1.gender = 1;
pl1.gender = 0;
pl1.name = "Name 1";
pl1.name = "Name 2";
pl2.name = "lala";
pl2.printLogs();
