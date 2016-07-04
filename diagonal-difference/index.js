/**
 * 
 
 Input Format

The first line contains a single integer, .
The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12

Sample Output

15

 * 
 */

/**

input:
3
11 2 4
4 5 6
10 8 -12

output:
15

first: 11 + 5 - 12 = 4
second: 4 + 5 + 10 = 19

final: |4 - 19| = 15

*/

function diagonals(matrix, n, reverse) {
  if (reverse === true) matrix.reverse();
  
  var iterator = function (diagonal, matrix) {
    var curr = diagonal.length;
    if (curr === n - 1) return diagonal.concat(matrix[curr][curr]);
    return iterator(diagonal.concat(matrix[curr][curr]), matrix);
  };
  
  return iterator([], matrix);
}

function sum(list) {
  var iterator = function (total, list) {
    if (list.length === 0) return total;
    return iterator(list.shift() + total, list);
  };
  
  return iterator(0, list);
}

function absolute(n) {
  if (n < 0) return n * -1;

  return n;
}

function parse(input) {
  var lines = input.split('\n');
  var n = Number(lines.shift());
  var matrix = lines.map(function (line) {
    return line.split(' ').map(Number);
  });
  
  return { matrix: matrix, n: n };
}

function diagonalsDifference(matrix, n) {
  var firstDiagonal = sum(diagonals(matrix, n));
  var secondDiagonal = sum(diagonals(matrix, n, true));
  
  return absolute(firstDiagonal - secondDiagonal);
}

// var inputtest = '4\n11 2 4 1\n4 5 6 1\n10 8 -12 1\n3 5 -7 1';
var inputtest = '3\n11 2 4\n4 5 6\n10 8 -12';
var parsed = parse(inputtest);
console.log(diagonalsDifference(parsed.matrix, parsed.n));