/**
 * 

Input Format

A single integer, , denoting the size of the staircase.

Output Format

Print a staircase of size  using # symbols and spaces.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######

 */

function padding(n) {
  var result = function (n, str) {
    if (n === 0) return str;
    return result(n - 1, str + '-');
  };

  return result(n, '');
}

function hash(n) {
  var result = function (n, str) {
    if (n === 0) return str;
    return result(n - 1, str + '#');
  };

  return result(n, '');
}

function line(current, max) {
  // 2, 4 == --##
  // 3, 4 == -###
  return padding(max - current) + hash(current) + '\n';
}

function staircase(n) {
  var result = function (current, max, stairs) {
    if (current == max) return stairs;
    return stairs + result(current + 1, max, line(current + 1, max));
  };

  return result(0, n, '');
}


console.log(
  '\n' + staircase(6)
);
