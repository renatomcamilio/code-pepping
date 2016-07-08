/**
 * 

Input Format

A single line of four space-separated integers denoting the respective values of , , , and .

Constraints

Output Format

Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.

Sample Input 0

0 3 4 2
Sample Output 0

YES
Explanation 0

The two kangaroos jump through the following sequence of locations:

Thus, the kangaroos meet after  jumps and we print YES.

Sample Input 1

0 2 5 3
Sample Output 1

NO
Explanation 1

The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ). Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.

 */



var input = '0 3 4 2';

function parse(input) {
  var components = input.split(' ').map(Number);
  
  return [
    {
      start: components[0],
      speed: components[1]
    },
    {
      start: components[2],
      speed: components[3]   
    }
  ];
}

function shouldJump(kangaroo1, kangaroo2) {
  if (kangaroo1.start === kangaroo2.start) return false;
  
  return !(
    (kangaroo1.start > kangaroo2.start && kangaroo1.speed >= kangaroo2.speed) ||
    (kangaroo1.start < kangaroo2.start && kangaroo1.speed <= kangaroo2.speed)
  );
}

function canLandAtSameTimeInTheSameLocation(kangaroos) {
  var kangaroo1 = kangaroos[0];
  var kangaroo2 = kangaroos[1];
  
  var jumps = 0;
  while (jumps <= 10000 && shouldJump(kangaroo1, kangaroo2)) {
    kangaroo1.start += kangaroo1.speed;
    kangaroo2.start += kangaroo2.speed;
    
    jumps += 1;
  }
  
  return kangaroo1.start === kangaroo2.start;
}

function yesOrNo(boolean) {
  return boolean ? 'YES' : 'NO';
}


console.log(yesOrNo(canLandAtSameTimeInTheSameLocation(parse(input))));