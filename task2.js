// Access the elments from the DOM

const button = document.getElementById('addTask');
const inputElement = document.getElementById('input');
const taskContainer = document.getElementById('listContainer');

// Initialize task counter and list array
let taskNumber = document.getElementById('taskCounter');
taskNumber.textContent = 0 + ' tasks';
console.log(taskNumber);
let listArray = [];

// Disable the button initially until there is input in the text field
button.disabled = true;

// Function to check if the input field is empty and enable/disable the button accordingly
const checkInput = () => {
  button.disabled = inputElement.value.trim() === '';
};

taskNumber.style.fontSize = '1.2rem';

inputElement.addEventListener('input', checkInput);

// Function to add Task

button.addEventListener('click', () => {
  // Access input value and create new list item
  const inputText = inputElement.value;
  const newList = document.createElement('li');
  newList.classList.add('task-item');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const taskText = document.createElement('span');
  taskText.textContent = inputText;

// Create a div to hold the checkbox and task text

  const left = document.createElement('div');
  left.classList.add('left-item');

  // Create delete button and icon
  const button = document.createElement('button');
  button.id = 'deleteBtn';
  const deleteBtn = document.getElementById('deleteBtn');
  const deleteIcon = document.createElement('i');

// Add classes and styles to the delete icon

  deleteIcon.classList.add('bi', 'bi-trash');
  deleteIcon.style.color = 'rgb(250, 41, 41)';
  deleteIcon.style.fontSize = '1.2rem';
  

  // Append checkbox and task text to the left div, then append left div and delete button to the new list item

  left.appendChild(checkbox);
  left.appendChild(taskText);
  newList.appendChild(left);
  taskContainer.appendChild(newList);
  newList.appendChild(button);
  button.appendChild(deleteIcon);

// Clear input field after button has been clicked
  inputElement.value = '';

//  Update task count
  checkInput();

  // Add the input text to the listArray and log it to the console

  listArray.push(inputText);
  console.log(listArray);

  updateTaskCount();
});

// Function to update task count
const updateTaskCount = () => {
  taskNumber.textContent = `${listArray.length} ${listArray.length === 1 ? 'task' : 'tasks'}`;

  taskNumber.style.color = 'blueviolet';
};

// Delete Task

deleteBtn.addEventListener('click', () => {
  newList.remove();
});
