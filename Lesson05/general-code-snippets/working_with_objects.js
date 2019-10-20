var myObject = {};

var myObject = {foo: "bar"};
console.log(myObject.foo);
// =>  “bar”

var myObject = {param1: 1, "param2": 2};

var myObject = {};
myObject.age = 21;
console.log(myObject.age);
// =>  21

myObject["age"] = 32;
console.log(myObject.age);
// =>  32

var obj = {};
obj["   "] = 99;
console.log(obj["   "]);
// =>   99

var obj = {key: 99};
obj.key = null;
console.log(obj);
// =>  {key: null}

var obj = {key: "data"};
delete obj.key;
console.log(obj);
// =>   {}

var myObj = {key: 99};
function update(obj) {
  obj.key = 22;
  console.log(obj === myObj);  // check they are the same object
}
update(myObj);
// =>   true
console.log(myObj.key);
// =>   22

var myObj= {key: "value"};
for (const key in myObj) {
  console.log(myObj[key]);
}

var keys = Object.keys(myObj);
for (let i=0; i<keys.length; i++) {
  var key = keys[i];
  console.log(myObj[key]);
}

var keys = Object.keys(myObj);
for (const key of keys) {
  console.log(myObj[key]);
}

var values = Object.values(myObj);
for (const value of values) {
  console.log(value);
}

var keyValues = Object.entries(myObj);
for (const kv of keyValues) {
  console.log(kv[0], kv[1]);
}

var gameState = {
  score: 0,
  enemies: 99,
  lives: 3
}

var gameState = {
  _score: 0,
  _enemies: 99,
  _lives: 3,
  addToScore: function(value) {
    this._score += value;
  },
  killEnemies: function(num) {
    this._enemies -= num;
  },
  killPlayer: function() {
    this._lives -= 1;
  }
}

var gameState = {
  _score: 0,
  _enemies: 99,
  _lives: 3,
  get score() {
    return this._score;
  },
  set score(value) {
    this._score += value;
  },
  get enemies() {
    return this._enemies;
  },
  get killEnemies() {
    this._enemies--;
  },
  set killEnemies(num) {
    this._enemies -= num;
  },
  get lives() {
    return this._lives;
  },
  get killPlayer() {
    if (this.enemies <= 0) {
      this._lives = 3;
    } else {
      this._lives--;
    }
  }
}

console.log(gameState.score);
// =>   0
gameState.score = 100;
gameState.score = 99;
console.log(gameState.score);
// =>   199

 console.log(gameState.enemies);
// =>   99
 gameState.killEnemies = 3;
 console.log(gameState.enemies);
// =>   96
 gameState.killEnemies;
 console.log(gameState.enemies);
// =>   95

 console.log(gameState.lives);
// =>   3
 gameState.killPlayer;
 console.log(gameState.lives);
// =>   2
 gameState.killEnemies = 99;
 gameState.killPlayer;
 console.log(gameState.lives);
// =>   3