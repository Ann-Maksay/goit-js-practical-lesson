'use strict';

const students = [
    {name: 'Olha', gender: 'female'},
    {name: 'Oleh', gender: 'male'},
    {name: 'Kristi', gender: 'female'}
];


function sortByGender(students){
    const result = {male: [], female: []};
    students.forEach(
        elem =>{
            result[elem.gender].push(elem);
        }
    )
    return result;
}

console.log(sortByGender(students));



// const result = {
//     male: [{name: 'Oleh', gender: 'male'}],
//     female: [{name: 'Olha', gender: 'female'}, {name: 'Kristi', gender: 'female'}]
// }