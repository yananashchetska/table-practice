'use strict';
/**
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 * 
 */


const people = require('./lib/people.json');
const table = document.querySelector('.dashboard');

//1. change the body and header
const tableHeaderContent = table.childNodes[1].innerHTML;
const tableHeader = document.createElement('THEAD');

tableHeader.innerHTML = tableHeaderContent;
table.removeChild(table.childNodes[1]);
table.appendChild(tableHeader);

const tableBody = document.createElement('TBODY');

table.appendChild(tableBody);

// 1 done


// option 1:

// const insertRows = (peopleArray) => {
//     peopleArray.forEach(person => {

//         const gender = person.sex === 'm' ? 'male'
//             : 'female';
//         const age = person.died - person.born;
//         const century = Math.ceil(person.died / 100);

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${person.name}</td>
//             <td>${gender}</td>
//             <td>${person.born}</td>
//             <td>${person.died}</td>
//             <td>${age}</td>
//             <td>${century}</td>
//         `;

//         table.appendChild(row);
//     });

// }

// option 2:

const insertRows = (peopleArray) => {

    peopleArray.forEach(person => {
        
        const row = document.createElement('tr');

        const gender = person.sex === 'm' ? 'male' : 'female';
        const age = person.died - person.born;
        const century = Math.ceil(person.died / 100);
        
        const nameCell = document.createElement('td');
        const genderCell = document.createElement('td');
        const bornCell = document.createElement('td');
        const diedCell = document.createElement('td');
        const ageCell = document.createElement('td');
        const centuryCell = document.createElement('td');
        
        nameCell.textContent = person.name;
        genderCell.textContent = gender;
        bornCell.textContent = person.born;
        diedCell.textContent = person.died;
        ageCell.textContent = age;
        centuryCell.textContent = century;
        
        row.append(
            nameCell, 
            genderCell, 
            bornCell, 
            diedCell, 
            ageCell,
            centuryCell
        );

        tableBody.appendChild(row);
    });

}

insertRows(people);


const sortTableByColumn = (column, asc = true) => {
    const dirModifier = asc ? 1 : -1;
    const rows = [...tableBody.querySelectorAll('tr')];
    
    rows.sort((a, b) => {
        const aColumnText = a.children[column].textContent.trim();
        const bColumnText = b.children[column].textContent.trim();
        
        return aColumnText > bColumnText ? (1 * dirModifier)
        : (-1 * dirModifier);
    }) 
    
    return rows;      
}


let index = 0;
let asc = false;

tableHeader.addEventListener('click', ev => {

    asc = !asc;

    index = Array.prototype.indexOf.call([...ev.target.parentElement.children], ev.target);

    const sorted = (sortTableByColumn(index, asc));

    ev.target.classList.toggle('asc', asc);
    ev.target.classList.toggle('desc', !asc);

    tableBody.innerHTML = '';

    sorted.forEach(row => {
        tableBody.appendChild(row);
    })
})