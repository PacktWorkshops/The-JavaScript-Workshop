import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.15 - Beyond the Fundamentals - Working with Dates', () => {
  it('Date Math', () => {
    var date1 = new Date("Dec 25 2001").getTime();
     var date2 = new Date("Dec 25 2019").getTime();
     var diff = date2 - date1;
     assert.equal(diff, 567993600000);

     var day = 1000 * 60 * 60 * 24;
     var numDays = diff / day;
     assert.equal(numDays, 6574);

     var d = new Date("Apr 25 2019");
     d.setMonth(d.getMonth() + 60);
     assert.equal(d, "Thu Apr 25 2024 00:00:00 GMT+0100 (British Summer Time)");
  })
});