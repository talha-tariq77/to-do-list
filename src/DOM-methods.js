import { toDoItem, activeProjects, addToDoItem } from "./index.js";


let formNum = 0;

function createFormFromExisting(toDoListitem) {
    let form = document.createElement('form');

    let title = document.createElement('h1');
    title.textContent = toDoListitem.title;
    form.appendChild(title);

    let description = document.createElement('p');
    description.textContent = toDoListitem.description;
    form.appendChild(description);


    let dueDate = document.createElement('input');

    dueDate.setAttribute('type', 'date');

    dueDate.setAttribute('value', toDoListitem.dueDate);
    form.appendChild(dueDate);


    let priority = document.createElement('h4');

    priority.textContent = toDoListitem.priority;
    form.appendChild(priority);

    let display = document.querySelector('div#toDoDisplay');
    display.appendChild(form);
}

function addNewToDoButton() {
    let display = document.querySelector('div#toDoDisplay');

    let newToDoButton = document.createElement('button');

    newToDoButton.textContent = 'New To Do';

    newToDoButton.addEventListener('click', createNewForm);

    display.appendChild(newToDoButton);
}

function createNewForm() {
    let form = document.createElement('form');

    form.setAttribute('id', formNum);

    let titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'title';
    form.appendChild(titleLabel);

    let title = document.createElement('input');
    title.setAttribute('id', 'title' + formNum);
    form.appendChild(title);


    let descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'description';
    form.appendChild(descriptionLabel);


    let description = document.createElement('input');
    description.setAttribute('id', 'description' + formNum);
    form.appendChild(description);


    let dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'dueDate');
    dueDateLabel.textContent = 'Due date:';
    form.appendChild(dueDateLabel);


    let dueDate = document.createElement('input');
    dueDate.setAttribute('id', 'dueDate' + formNum);

    dueDate.setAttribute('type', 'date');

    form.appendChild(dueDate);

    let priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority';
    form.appendChild(priorityLabel);


    let priority = document.createElement('input');
    priority.setAttribute('id', 'priority' + formNum);

    form.appendChild(priority);

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    submitButton.addEventListener('click', addToDoItem);

    form.appendChild(submitButton);

    let display = document.querySelector('div#toDoDisplay');

    display.append(form);

    formNum += 1;
}


export {createFormFromExisting, createNewForm, addNewToDoButton, formNum};