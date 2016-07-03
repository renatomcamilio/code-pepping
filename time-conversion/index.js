/**
 * 

Input Format

A single string containing a time in -hour clock format (i.e.:  or ), where .

Output Format

Convert and print the given time in -hour format, where .

Sample Input

07:05:45PM

Sample Output

19:05:45
 
 */

var testinput = '07:05:45PM';

function parse(timeStr) {
  var isPM = /pm/i.test(timeStr);
  var timeComponents = timeStr.replace(/pm|am/i, '').split(':').map(Number);
  var time = {
    hours: timeComponents[0],
    minutes: timeComponents[1],
    seconds: timeComponents[2]
  };
  
  return {
    time: time,
    isPM: isPM
  };
}

function formattedTime(components) {
  var hourStr = (components.time.hours < 10) ? '0' + components.time.hours : components.time.hours;
  var minuteStr = (components.time.minutes < 10) ? '0' + components.time.minutes : components.time.minutes;
  var secondStr = (components.time.seconds < 10) ? '0' + components.time.seconds : components.time.seconds;
  
  return '' + hourStr + ':' + minuteStr + ':' + secondStr;
}

function convertTime(input) {
  var components = parse(input);
  
  if (components.isPM) {
    var hour = components.time.hours;
    
    if (hour === 12) {
      components.time.hours = 0;
    } else {
      components.time.hours += 12;
    }
  }
  
  return formattedTime(components);
}

console.log(convertTime(testinput));