//Primitives: numbers, strings, booleans
//More complex types: arrays, objects
//Function types, parameters

//Primitives

let age: number; //have to use lowercase so it doesn't point the JS Number object

age = 25;

let userName: string;

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[]; //This allows you to have an array of strings instead of just one string - can do the same with number, boolean, etc

hobbies = ['Motorcycle riding', 'Cooking', 'Watching TV'];

type Person = { //Type aliases - used on person and people variables below
    name: string;
    age: number;
};

let person: Person; 

person = {
    name: 'Whip',
    age: 25
};

let people: Person[];

//Type inference
let course = 'React - The Complete Guide'; //Type inference is helpful and should be used
//course = 12341; //Get an error because typescript inferred the type of course is a string, not a number

//Union types
let course2: string | number = 'React - The Complete Guide';
course2 = 12341; //No longer get the error because we allow both string and number types for the variable