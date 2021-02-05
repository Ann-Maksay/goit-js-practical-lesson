//Есть несколько слов, определить состоят ли они из одних и тех же букв ('кот', 'ток', 'окт');
'use strict';

const first = 'кот';
const second = 'ток';
const third = 'окт';

function findAnagram(...str) {
    const sortArr = [];

    for (let elem of str) {
        sortArr.push(
            elem
                .toLowerCase()
                .split('')
                .sort()
                .join('')
        );
    }

    for (let i = 1; i < sortArr.length; i++){
        if (sortArr[0] !== sortArr[i]) {
            return false;
        }
    }

    return true;
}


//test

console.log(findAnagram(first, second, third));

console.log(findAnagram('hsor', 'sohr', 'ohRs', 'sorh', 'rOSh'));

console.log(findAnagram('hsor', 'sohr', 'ohrs', 'gdsjs', 'sorh', 'rosh'));