'use strict';

function moveZeros(arry){
    return arry.sort(
        (a, b) => {
            if(a === 0 && b === 0){
                return 0;
            }
            if(a === 0){
                return 1;
            }
            if(b === 0){
                return -1;
            }
            return 0;
        }
    )
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));