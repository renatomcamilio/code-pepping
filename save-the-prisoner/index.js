/**

Output Format

For each test case, print the ID number of the prisoner who receives the poisoned sweet on a new line.

Sample Input

1 
5 2 1
Sample Output

2
Explanation

There are  prisoners and  sweets. Distribution starts at ID number , so prisoner  gets the first sweet and prisoner  gets the second (last) sweet. Thus, we must warn prisoner  about the poison, so we print on a new line.

*/

function parse(input) {
  var lines = input.split('\n');
  var n = Number(lines.shift());
  var cases = lines.map(function (val) {
    return val.split(' ').map(Number);
  });
  
  return { n: n, cases: cases };
}

function handleCase(singleCase) {
  var prisoners = singleCase[0];
  var sweets = singleCase[1];
  var startingID = singleCase[2];

  /**
  * RangeError: Maximum call stack size exceeded 
  * JS shitting the bed on deep call stack
  */
//   var iterator = function (sweets, startingID) {
//     if (sweets === 1) return startingID;
//     if (startingID === prisoners) startingID = 0;
//     return iterator(sweets - 1, startingID + 1);
//   };
  
  var iteratorOnSteroids = function (sweets, startingID) {
    var cursed = sweets + startingID;
    var result = cursed % prisoners - 1;
    
    return (result <= 0) ? result + prisoners : result;
  };
  
  return iteratorOnSteroids(sweets, startingID);
}

function saveThePrisoner(cases, n) {
  return cases.map(handleCase).join('\n');
}

// var inputtest = '1\n5 5 5'; // 4
var inputtest = '1\n5 7 5'; // 1
// var inputtest = '1\n5 2 5'; // 1
// var inputtest = '2\n5 4 1\n5 3 3'; // 4 5
// var inputtest = '1\n5 2 1';
var parsed = parse(inputtest);

console.log(saveThePrisoner(parsed.cases, parsed.n));