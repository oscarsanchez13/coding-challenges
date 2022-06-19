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
  for(let i=0; i<arr.length; i++) {
    if (arr[i] > 255) {result += 'FF'; break;}
    if (arr[i] < 0) {result += '00'; break;}

    switch (Math.floor(arr[i]/16)) {
    case 10: result += 'A'; break;
    case 11: result += 'B'; break;
    case 12: result += 'C'; break;
    case 13: result += 'D'; break;
    case 14: result += 'E'; break;
    case 15: result += 'F'; break;
    default: result += Math.floor(arr[i]/16);
    }
    switch (arr[i] % 16) {
    case 10: result += 'A'; break;
    case 11: result += 'B'; break;
    case 12: result += 'C'; break;
    case 13: result += 'D'; break;
    case 14: result += 'E'; break;
    case 15: result += 'F'; break;
    default: result += arr[i] % 16;
    }
  }
return result;
}

// Solution 2 (using toSting(16))
function rgb(r, g, b) {
    function convert(x){
      if (x > 255) return 'FF';
      else if (x < 0) return '00';
      else 
        return x
                .toString(16)
                .padStart(2,'0')
                .toUpperCase();
    }
    return convert(r) + convert(g) + convert(b);
}