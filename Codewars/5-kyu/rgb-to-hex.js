/*
Description:

he rgb function is incomplete. Complete it so that passing in 
RGB decimal values will result in a hexadecimal representation 
being returned. Valid decimal values for RGB are 0 - 255. Any 
values that fall out of that range must be rounded to the 
closest valid value.

Note: Your answer should always be 6 characters long, the 
shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// Solution 1 (BROKEN)
function rgb(r, g, b){
    let result = '';
    let arr = [r,g,b];
    for(let i=0; i<arr.length; i++){
      function convertFirst(arr[i]) {
        switch (Math.floor(arr[i] / 16)) {
          case 10: result.push('A');break;
          case 11: result.push('B');break;
          case 12: result.push('C');break;
          case 13: result.push('D');break;
          case 14: result.push('E');break;
          case 15: result.push('F');break;
          default: result.push(Math.floor(((arr[i] / 16)+'')));
        }
       switch (Math.floor((((arr[i]/16) - 16) * 16))) {
          case 10: result.push('A');break;
          case 11: result.push('B');break;
          case 12: result.push('C');break;
          case 13: result.push('D');break;
          case 14: result.push('E');break;
          case 15: result.push('F');break;
          default: result.push(Math.floor((((arr[i]/16) - 16) * 16)+''));
        }
      }
    }
    return result;
}