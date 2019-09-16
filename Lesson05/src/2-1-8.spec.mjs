import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.8 - Beyond the Fundamentals - Working with Strings', () => {
  it('Working with strings', () => {
    assert.equal("I am a string", "I am a string");
    assert.equal('I am also a string', "I am also a string");
    assert.equal(`I am a special string`, "I am a special string");

    assert.equal("Hello, World!"[7], "W");

    var msg = "Hello, World!";
    try {
      assert.equal(msg[7] = "Z", "Z");
    } catch(e) {}
    assert.equal(msg, "Hello, World!");
  })

  it('Concatenation', () => {
    assert.equal("This string " + "and " + "this string " + "are concatenated", "This string and this string are concatenated");
  })

  it('Template Literals', () => {
    var str = `2 + 2 = ${2 + 2}`;
    assert.equal(str, "2 + 2 = 4");
    var name = "Jonny";
    var welcomeStr = `Hello, ${name}!`;
    assert.equal(welcomeStr, "Hello, Jonny!");

    var str = `This is line one
    and this is line two`;
    assert.equal(str, "This is line one\n    and this is line two");
  })

  it('Exercise 6', () => {
    function sendEmail(name, age, comments) {
      var age = Number(age);
      if (Number.isNaN(age)
      || typeof name != "string"
      || typeof comments != "string") {
        return null;
      }
      var body = `A user has posted a comment from the website:
name: ${name}
age: ${age}
status: ${(age < 18) ? `${name} is a child` : `${name} is an adult`}
comments: ${comments}`;
      return body;
    }

    var res = sendEmail("Jane", 27, "Your website is fantastic!");
    assert.equal(res, "A user has posted a comment from the website:\nname: Jane\nage: 27\nstatus: Jane is an adult\ncomments: Your website is fantastic!");
  })
});