'use strict';

let nums = [2, 3, 2, 3, 5];

for (let i = 0; i < nums.length; i++) {
    let ascending = i;                   
    let descending = nums.length - 1 - i;
    console.log(ascending, " ", descending);
}
