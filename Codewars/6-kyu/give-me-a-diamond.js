/*
Description:

Jamie is a programmer, and James' girlfriend. She likes 
diamonds, and wants a diamond string from James. Since James 
doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape 
when printed on the screen, using asterisk (*) characters. 
Trailing spaces should be removed, and every line must be 
terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or 
negative, as it is not possible to print a diamond of even 
or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

// Solution 1
function diamond(n) {

  if(n % 2 == 0 || n < 0) {
      return null;
  }

  var middle = parseInt((n + 1) / 2);
  var j, diam = '';
  for(var i = 1; i <= n; i++) {
      j = i <= middle ? i : n - i + 1;
      diam += ' '.repeat(middle - j) + '*'.repeat(2 * j - 1) + '\n';
  }
  return diam;
}

// Solution 2