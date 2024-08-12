import {addNewToDoButton, createFormFromExisting, createNewForm, formNum} from './DOM-methods.js'


console.log('how many times will this be called');
const activeProjects = [];

let selectedProj = 'Default Project';

let nextProjNum = 1;

let selectedProjNum = 0;

let project = function(name) {
    return {name, items: []};
}

function addNewProject(name) {
    let newProject = project(name);

    activeProjects.push(newProject)
}

function addNewProjectTab(name) {
    let tabsDiv = document.querySelector('projectTabs');

    let newButton = document.createElement('button');
    newButton.setAttribute('type', 'button');
    newButton.textContent = name;

    tabsDiv.appendChild(newButton);
}

let toDoItem = function (title, description, dueDate, priority) {

    return {title, description, dueDate, priority};
}

activeProjects.push(project('Default Project'));

activeProjects[0].items.push(toDoItem('yes', 'mhm', '2024-11-04', 'very'));

console.log(activeProjects);

function selectProject(projIndex, override) {
    projIndex = parseInt(projIndex);

    if (selectedProjNum != projIndex || override) {
        let displayDiv = document.querySelector('#toDoDisplay');

        displayDiv.replaceChildren();

        selectedProj = activeProjects[projIndex];
        selectedProjNum = projIndex;
        console.log(selectedProj);

    selectedProj.items.forEach(element => {
        createFormFromExisting(element);
    });

    addNewToDoButton();
    }
    
}

function updateDisplay() {
    console.log('hi', selectedProj.items);
    createFormFromExisting(selectedProj.items.at(-1));
}

function addToDoItem(e) {

    e.preventDefault();

    let formId = e.target.parentNode.id;

    console.log('id', formId);

    let toAddToDoItem = {'title': document.querySelector('#title' + formId).value, 'description': document.querySelector('#description' + formId).value,
    'dueDate': document.querySelector('#dueDate' + formId).value, 'priority': document.querySelector('#priority' + formId).value};

    console.log('item', toAddToDoItem);

    activeProjects[selectedProjNum].items.push(toAddToDoItem);

    console.log('added?', activeProjects[selectedProjNum]);

    e.target.parentNode.parentNode.removeChild(e.target.parentNode);

    updateDisplay();}

if (formNum == 0) {
    selectProject(0, true);
}


function selectProjectWrapper(e) {
    selectProject(e.target.id.slice(4), false);
}

console.log('yes')

let defaultProjButton = document.querySelector('button#proj0');

defaultProjButton.addEventListener('click', selectProjectWrapper);

let addProjButton = document.querySelector('button#newProj');

addProjButton.addEventListener('click', createNewProjButton);

function createNewProjButton() {
    let newProjButton = document.createElement('button');

    newProjButton.setAttribute('id', 'proj' + nextProjNum);

    newProjButton.addEventListener('click', selectProjectWrapper);

    newProjButton.textContent = 'randomcontent';

    let projDiv = document.querySelector('div#projectTabs');

    projDiv.appendChild(newProjButton);

    nextProjNum += 1;

    activeProjects.push(project('randomcontent'));
}


export {toDoItem, activeProjects, addToDoItem};


// TODO:
// edit, delete nodes