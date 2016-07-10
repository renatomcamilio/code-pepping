/**
 * 
You are given an array of integers of size . You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.

Input

The first line of the input consists of an integer . The next line contains  space-separated integers contained in the array.

Sample Input 
5
1000000001 1000000002 1000000003 1000000004 1000000005

Output 
Print a single value equal to the sum of the elements in the array. In the above sample, you would print .
 */

function digitsFromNumber(num) {
    return num.toString().split('').map(Number);
}

function sumBigNumbers(num1, num2) {
    var iterator = function (digits1, digits2, finalResult, remainder) {
        if (!digits1.length && !digits2.length && !remainder) return finalResult;
        
        var num1 = digits1.length ? digits1.pop() : 0;
        var num2 = digits2.length ? digits2.pop() : 0;
        var sum = num1 + num2 + remainder;
        remainder = 0;
        
        if (sum >= 10) {
            sum -= 10;
            remainder = 1;
        }
        
        finalResult.unshift(sum);
        
        return iterator(digits1, digits2, finalResult, remainder);
    }
    
    return iterator(digitsFromNumber(num1), digitsFromNumber(num2), [], 0);
}

function sumBigNumbersArray(numbersArray) {
    return numbersArray.reduce(function (result, currNumber, index, arr) {
        return sumBigNumbers(result, currNumber).join('');
    }, 0);
}