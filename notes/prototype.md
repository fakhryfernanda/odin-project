<link rel="stylesheet" href="style.css">

# The Prototype

All objects in JavaScript have a prototype. Stated simply, the `prototype` is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.

``` js
function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.goToProm = function() {
  console.log("Eh.. go to prom?")
}
```

If you’re using constructors to make your objects it is best to define functions on the `prototype` of that object. Doing so means that a single instance of each function will be shared between all of the Student objects. If we declare the function directly in the constructor, like we did when they were first introduced, that function would be duplicated every time a new Student is created.

## Recommended Method for Prototype Inheritance
The recommended way of setting the prototype of an object is `Object.create` ([here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) is the documentation for that method). `Object.create` very simply returns a new object with the specified prototype and any additional properties you want to add.

``` js
function Student() {
    this.status = 'student'
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name, ...args) {
  Student.apply(this, args)
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.status // "student"
carl.sayName() // console.logs "carl"
carl.grade // 8
```

A warning… this doesn’t work:

``` js
EighthGrader.prototype = Student.prototype
```

because it will literally set EighthGrader’s prototype to Student.prototype (i.e. not a copy), which could cause problems if you want to edit something in the future. Consider one more example.

``` js
function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

// don't do this!!!
EighthGrader.prototype = Student.prototype

function NinthGrader(name) {
  this.name = name
  this.grade = 9
}

// noooo! not again!
NinthGrader.prototype = Student.prototype

NinthGrader.prototype.sayName = function() {console.log("HAHAHAHAHAHA")}

const carl = new EighthGrader("carl")
carl.sayName() //uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
```

If we had used `Object.create` in this example, then we could safely edit the `NinthGrader.prototype.sayName` function without changing the function for `EighthGrader` as well.

# Other Materials

- [Video Javascript Tutorial | Prototype Inheritance](https://www.youtube.com/watch?v=sOrtAjyk4lQ)
- [Article JavaScript Visualized: Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)
- [The Principles of Object-Oriented JavaScript](http://www.r-5.org/files/books/computers/languages/escss/fp/Nicholas_C_Zakas-The_Principles_of_JavaScript-EN.pdf) book by Nicholas C. Zakas

