const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE === 

addName.addEventListener('click', addname);

function addname(){
 nameList.insertAdjacentHTML("beforeend", `
 <li>Chows</li>
 <li>Dhruval</li>
 <li>Leona</li>
 `);
}