'use strict';

let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
    let linea = ""; 
    for (let j = i; j < nums.length; j++) {
        linea += `${nums[i]}${nums[j]} `; 
    }
    alert(linea); 
}

