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

//Functions and types

function add(a:number, b: number): number { //You can declare a type here, or TS will infer it is a number as it's returning a number plus a number
    return a + b;
};

function print_output(value: any) { //Because this isn't returning anything, it's return type is void
    console.log(value);
};

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
};

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

//classes
class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
        ) {}

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Whip', 'Alleman', 25, ['Angular']);
student.enroll('React'); //student.courses => Angular, React
student.listCourses();

//Interfaces

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 25,
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human { //Typescript forces this to have the same structure as Human
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!');
    }
}