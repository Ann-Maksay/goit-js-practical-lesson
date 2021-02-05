'use strict';

function common(arry1, arry2, arry3){
    return arry1
    .filter(elem => arry2.includes(elem) && arry3.includes(elem))
    .reduce((count, elem) => {return count + elem}, 0);
}

console.log(common([1,2,3],[5,3,2],[7,3,2]));
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]));