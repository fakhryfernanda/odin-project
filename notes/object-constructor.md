# Objects and Object Constructors

## Object Literal

```js
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
 }
}

// get information out of an object
// dot notation
myObject.property // 'Value!'

// bracket notation
myObject["obnoxious property"] // [Function]
```

## Objects as a Design Pattern

``` js
const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}
```

## Object Constructor

When you have a specific type of object that you need to duplicate like our player or inventory items, a better way to create them is using an object constructor, which is a function that looks like this:

``` js
function Player(name, marker) {
  this.name = name
  this.marker = marker
}

// you can call the function with the keyword new
const player = new Player('steve', 'X')
console.log(player.name) // 'steve'
```

Just like with objects created using the Object Literal method, you can add functions to the object:

``` js
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'
```

