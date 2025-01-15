'use strict';

let nums = [3, 2, 4, 1];
let maxSuma = 0;


for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        let Suma = nums[i] + nums[j];
        if (Suma > maxSuma) {
            maxSuma = Suma;
        }
    }
}

console.log("El mayor es: ", maxSuma);
