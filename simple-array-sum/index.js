/**
 * 

Input Format

The first line contains an integer, , denoting the size of the array. 
The second line contains  space-separated integers representing the array's elements.

Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 10 11

Sample Output

31

 */

function parse(input) {
  var inputLines = input.split('\n');
  
  return {
    size: Number(inputLines[0]),
    integersArray: inputLines[1].split(' ').map(Number)
  };
}

function sum(list) {
  var iterator = function (total, list) {
    if (list.length === 0) return total;
    return iterator(list.shift() + total, list);
  };
  
  return iterator(0, list);
}

var testinput = '6\n1 2 3 4 10 11';

var integers = parse(testinput).integersArray;
console.log(sum(integers));