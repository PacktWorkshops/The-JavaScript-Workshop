import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.5 - Beyond the Fundamentals - Boolean Operators', () => {
  it('boolean examples', () => {
    expect(21 == 9+12);
    expect(false != true);
    expect(6 > 1);
    expect(5 >= 5);
    expect("1" == 1);
  })

  it('Exercise 3', () => {
    let spy = sinon.spy(console, 'log');
    function odd_or_even(counter, last) {
      while (counter <= last) {
        if (counter % 2 == 0) {
          console.log(counter, "is an even number");
        } else {
          console.log(counter, "is an odd number");
        }
        counter = counter + 1;
      }
    }
    odd_or_even(1, 5);
    assert(spy.calledWith(1, "is an odd number"));
    assert(spy.calledWith(2, "is an even number"));
    assert(spy.calledWith(3, "is an odd number"));
    assert(spy.calledWith(4, "is an even number"));
    assert(spy.calledWith(5, "is an odd number"));
    spy.restore();
  })

  it('Zero value as boolean', () => {
    assert.equal((0), false);
    assert.equal(0 == false, true);
    assert.equal(0 === false, false);
  })

  it('Not operator', () => {
    var falseValue = !true;
    assert.equal(falseValue, false);
    let spy = sinon.spy(console, 'log');
    if (!!1 === true) {
      console.log("this code will execute");
    }
    assert(spy.calledWith("this code will execute"));
    spy.restore();
  })

  it('Boolean associativity', () => {
    var john = {name: "John", happy: false};
    var lucy = {name: "Lucy", happy: false};

    function make_happy( person ) {
      console.log("Making " +person.name+ " happy.");
      person.happy= true;
      return true;
    }

    let spy = sinon.spy(console, 'log');
    if (make_happy(john) || make_happy(lucy)) {
      console.log("John is happy: " +john.happy+ ", Lucy is happy: " +lucy.happy);
    }
    assert(spy.calledWith("John is happy: true, Lucy is happy: false"));
    spy.restore();
  })

  it('Exercise 4', () => {
    function isValidAge(age, gender) {
      if (age < 18 || gender === "female" && age > 35 || gender !== "female" && age > 30) {
        return false;
      }
      return true;
    }
    let spy = sinon.spy(console, 'log');

    console.log(isValidAge(17, "female"));
    assert(spy.calledWith(false));

    console.log(isValidAge(34, "male"));
    assert(spy.calledWith(false));

    console.log(isValidAge(34, "female"));
    assert(spy.calledWith(true));
    spy.restore();
  })

  it('Boolean and non-boolean expressions', () => {
    let spy = sinon.spy(console, 'log');
    console.log(1 == true);
    assert(spy.calledWith(true));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(2 == true);
    assert(spy.calledWith(false));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(2 == false);
    assert(spy.calledWith(false));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(!!2 == true);
    assert(spy.calledWith(true));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(!!2 == false);
    assert(spy.calledWith(false));
    spy.restore();
  })

  it('Not chaining boolean expressions', () => {
    let spy = sinon.spy(console, 'log');
    console.log(1 + 2 + 3);
    assert(spy.calledWith(6));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(true && true && false);
    assert(spy.calledWith(false));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(1 < 3 < 2);
    assert(spy.calledWith(true));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(2==2==2);
    assert(spy.calledWith(false));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(0==0==0);
    assert(spy.calledWith(false));
    spy.restore();

    spy = sinon.spy(console, 'log');
    console.log(1==1==1);
    assert(spy.calledWith(true));
    spy.restore();
  })

  it('Ternary operator', () => {
    var age = 35;
    var action = (age < 21) ? "Deny access" : "Grant access";
    assert.equal(action, "Grant access");

    if (age < 21) {
      action = "Deny access";
    } else {
      action = "Grant access";
    }
    assert.equal(action, "Grant access");

    var status = (age < 18) ? "child" : (age > 65) ? "pensioner" : "adult";
    assert.equal(status, "adult");

    if (age < 18) {
      status = "child";
    } else if (age > 65) {
      status = "pensioner";
    } else {
      status = "adult";
    }
    assert.equal(status, "adult");
  })
});
