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

let person: {
    name: string;
    age: number;
}; 

person = {
    name: 'Whip',
    age: 25
};

let people: {
    name: string;
    age: number;
}[];

//Type inference
let course = 'React - The Complete Guide'; //Type inference is helpful and should be used
//course = 12341; //Get an error because typescript inferred the type of course is a string, not a number