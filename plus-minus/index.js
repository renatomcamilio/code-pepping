/**
 * 

Input Format

The first line contains an integer, , denoting the size of the array. 
The second line contains  space-separated integers describing an array of numbers .

Output Format

You must print the following  lines:

A decimal representing of the fraction of positive numbers in the array.
A decimal representing of the fraction of negative numbers in the array.
A decimal representing of the fraction of zeroes in the array.
Sample Input

6
-4 3 -9 0 4 1         
Sample Output

0.500000
0.333333
0.166667

 * 
 */

function parse(input) {
  var lines = input.split('\n');
  var n = Number(lines.shift());
  var integers = lines[0].split(' ').map(Number);
  
  return { n: n, integers: integers };
}

function isPositive(value) { return value > 0; }
function isNegative(value) { return value < 0; }
function isZero(value) { return value === 0; }

function fraction(list, n, condition) {
  return list.filter(condition).length / n;
}

function plusMinus(list, n) {
  return { 
    positive: fraction(list, n, isPositive),
    negative: fraction(list, n, isNegative),
    zero: fraction(list, n, isZero)
  };
}

var inputtest = '6\n-4 3 -9 0 4 1';
var parsed = parse(inputtest);

console.log(plusMinus(parsed.integers, parsed.n));