var d = new Date();
d.setHours(12);

var greatDate = Date.parse("November 3, 1976");

var millis = Date.parse("November 3, 1976");
var greatDate = new Date(millis);

var d = new Date();
console.log(d);
//  => current time in local timezone, for example:
// Thu Apr 25 2019 12:00:00 GMT+0100 (British Summer Time)

var toString = function(date) {
  date = date || this;
  var months = [
   "Jan", "Feb", "Mar",
   "Apr", "May", "Jun",
   "Jul", "Aug", "Sep",
   "Oct", "Nov", "Dec"
  ];
  var day = date.getDate();
  var mnth = date.getMonth();
  var year = date.getFullYear();
  return day + ' ' + months[mnth] + ' ' + year;
}
var d = new Date();
d.toString = toString;
console.log(d);
// =>  current date in format 25 Apr 2019

var date1 = new Date("Dec 25 2001").getTime();
var date2 = new Date("Dec 25 2019").getTime();
var diff = date2 - date1;
diff
// =>   567993600000

var day = 1000 * 60 * 60 * 24;
var numDays = diff / day;
numDays
// =>   6574

var d = new Date("Apr 25 2019");
d.setMonth(d.getMonth() + 60);
d
// =>   Thu Apr 25 2024 00:00:00 GMT+0100 (British Summer Time)
// The above result will use your local timezone.

