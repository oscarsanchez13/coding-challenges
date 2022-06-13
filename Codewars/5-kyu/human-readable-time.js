/*
Description:

Write a function, which takes a non-negative integer (seconds) 
as input and returns the time in a human-readable format 
(HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// Solution 1
function humanReadable(x){
    let hh = Math.floor(x / 3600);
    let mm = Math.floor((((x % 31536000) % 86400) % 3600) / 60);
    let ss = (((x % 31536000) % 86400) % 3600) % 60;
    ss > 9 ? ss = '' + ss : ss = '0' + ss;
    mm > 9 ? mm = '' + mm : mm = '0' + mm;
    hh > 9 ? hh = '' + hh : hh = '0' + hh;
    return `${hh}:${mm}:${ss}`;
}

// Solution 2
