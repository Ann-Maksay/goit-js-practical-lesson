'use strict';

var arr = [
    {name: 'width', value: 10}, 
    {name: 'height', value: 20}
   ];


function createObj(arry){
    const data = {};
    arry.forEach(elem => {
        data[elem.name] = elem.value;
    })
    return data;
}



console.log(createObj(arr));