import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.13 - Beyond the Fundamentals - Working with Objects', () => {
  it('Working with Objects', () => {
    var myObject = {foo: "bar"};
    console.log(myObject.foo, "bar");
  })

  it('Objects as HashTables', () => {
    var myObject = {};
    myObject.age = 21;
    assert.equal(myObject.age, 21);
    myObject["age"] = 32;
    assert.equal(myObject.age, 32);

    var obj = {};
    obj["   "] = 99;
    assert.equal(obj["   "], 99);
  })

  it('Object Keys and Memory', () => {
    var obj = {key: 99};
    obj.key = null;
    let spy = sinon.spy(console, 'log');
    console.log(obj);
    assert(spy.calledWith({key: null}));
    spy.restore();

    spy = sinon.spy(console, 'log');
    obj = {key: "data"};
    delete obj.key;
    console.log(obj);
    assert(spy.calledWith({}));
    spy.restore();
  })

  it('Object and Pass-By Reference', () => {
    var myObj = {key: 99};
    function update(obj) {
      obj.key = 22;
      return obj === myObj;
    }
    assert.equal(update(myObj), true);
    assert.equal(myObj.key, 22);
  })

  it('Object Iteration', () => {
    var myObj = {key: "value"};
    let spy = sinon.spy(console, 'log');
    for (const key in myObj) {
      console.log(myObj[key]);
    }
    assert(spy.calledWith("value"));
    spy.restore();
    var keys = Object.keys(myObj);
    spy = sinon.spy(console, 'log');
    for (let i=0; i<keys.length; i++) {
      var key = keys[i];
      console.log(myObj[key]);
    }
    assert(spy.calledWith("value"));
    spy.restore();
    var keys = Object.keys(myObj);
    spy = sinon.spy(console, 'log');
    for (const key of keys) {
      console.log(myObj[key]);
    }
    assert(spy.calledWith("value"));
    spy.restore();
    var values = Object.values(myObj);
    spy = sinon.spy(console, 'log');
    for (const value of values) {
      console.log(value);
    }
    assert(spy.calledWith("value"));
    spy.restore();
    var keyValues = Object.entries(myObj);
    spy = sinon.spy(console, 'log');
    for (const kv of keyValues) {
      console.log(kv[0], kv[1]);
    }
    assert(spy.calledWith("key", "value"));
    spy.restore();
  })

  it('Object Accessors', () => {
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
    assert.equal(gameState.score, 0);
    gameState.score = 100;
    gameState.score = 99;
    assert.equal(gameState.score, 199);
    assert.equal(gameState.enemies, 99);
    gameState.killEnemies = 3;
    assert.equal(gameState.enemies, 96);
    gameState.killEnemies;
    assert.equal(gameState.enemies, 95);
    assert.equal(gameState.lives, 3);
    gameState.killPlayer;
    assert.equal(gameState.lives, 2);
    gameState.killEnemies = 99;
    gameState.killPlayer;
    assert.equal(gameState.lives, 3);
  })

  it('Exercise 10', () => {
    var obj = {meaningOfLife: 42, foo: "bar", child: {me: "you", other: {him: "her"}}, toString: Object.prototype.toString};
    var str = obj + "";
    expect(typeof str == "object");
    var objToString = function(obj, indent) {
    obj = obj || this;
    indent = indent || "";
    var res = "";
    for (var k in obj) {
      if (typeof obj[k] == "object") {
        res += indent + k + " = {\n";
        res += objToString(obj[k], indent + "- ");
        res += indent + "}";
        } else if (typeof obj[k] != "function") {
          res += indent + k + " = " + obj[k];
        } else {
          continue;
        }
        res += "\n";
        }
        return res;
      }
      obj.toString = objToString;
      assert.equal(obj + "", "meaningOfLife = 42\nfoo = bar\nchild = {\n- me = you\n- other = {\n- - him = her\n- }\n}\n");
  })
});