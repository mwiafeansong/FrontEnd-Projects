import {
  Todo,
  setTodo,
  changeStatus,
  removeTodo,
  getTodosLeft,
} from './todo.js';

const form = document.querySelector('form');
const todoInput = document.querySelector('input[type="text"]');
const todos = document.querySelector('.todos');
const showAllBtns = document.querySelectorAll('.show-all');
const showActiveBtns = document.querySelectorAll('.show-active');
const showCompletedBtns = document.querySelectorAll('.show-completed');
const clearBtn = document.querySelector('.clear');

let domTodos = [];
// MAIN
const TodoDom = function (list) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let newItem = Todo(todoInput.value, false);
    //add to storage
    setTodo(list, newItem);
    //add to dom
    createTodo(todoInput.value, domTodos);
    //clear input field
    todoInput.value = '';

    //add eventlisteners to newly created todos
    checkTodo(list);
    deleteTodo(list);
    getTodosLeftDom(list);
  });

  showAllBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      resetFilterBtns();
      showAllTodos();
      btn.classList.add('activeFilter');
    });
  });

  showActiveBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      resetFilterBtns();
      showActiveTodos();
      btn.classList.add('activeFilter');
    });
  });

  showCompletedBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      resetFilterBtns();
      showCompletedTodos();
      btn.classList.add('activeFilter');
    });
  });

  clearBtn.addEventListener('click', clearCompletedTodos);

  checkTodo(list);
  deleteTodo(list);
  getTodosLeftDom(list);
};

// check completed todos
function checkTodo(list) {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

  checkBoxes.forEach((box) => {
    box.addEventListener('change', (e) => {
      let boxIndex = +box.getAttribute('data-index');

      if (box.checked) {
        //change completion status in storage
        changeStatus(list, boxIndex);

        //mark as completed on Dom
        box.nextElementSibling.classList.add('completed');

        //update todos left
        getTodosLeft();
      } else {
        changeStatus(list, boxIndex);
        box.nextElementSibling.classList.remove('completed');
        getTodosLeft();
      }
    });
  });
}

// function deleteTodo(list) {
//   todos.addEventListener('click', (e) => {
//     if (e.target.classList.contains('del-todo')) {
//       let btnId = e.target.getAttribute('data-index');
//       removeTodo(list, btnId);
//       console.log(todos);
//       console.log(e.target.parentElement);
//       todos.removeChild(e.target.parentElement);
//       getTodosLeft();
//     }
//   });
// }

// delete a todo
function deleteTodo(list) {
  const deleteTodoBtns = document.querySelectorAll('.del-todo');

  deleteTodoBtns.forEach((btn) => {
    let btnId = +btn.getAttribute('data-index');
    let todoId =
      +btn.previousElementSibling.lastElementChild.getAttribute('data-index');
    btn.addEventListener('click', () => {
      if (btnId === todoId) {
        //remove todo from storage
        removeTodo(list, todoId);

        //remove todo from Dom
        todos.removeChild(btn.parentElement);
        domTodos.slice(btnId, 1);

        //reorder data indexes

        //update todos left
        getTodosLeft();
      }
    });
  });
}

function getTodosLeftDom(list) {
  const itemsLeftPara = document.querySelector('.items-left');

  let itemsLeft = getTodosLeft(list);

  itemsLeftPara.textContent = `${itemsLeft} items left`;
}

// function getTodosLeft() {
//   const todoItems = document.querySelectorAll('.todo-item');
//   const itemsLeftPara = document.querySelector('.items-left');
//   let itemsLeft = 0;

//   todoItems.forEach((item) => {
//     if (!item.classList.contains('completed')) {
//       itemsLeft++;
//     }
//   });

//   itemsLeftPara.textContent = `${itemsLeft} items left`;
// }

function resetFilterBtns() {
  const filterBtns = document.querySelectorAll('.filter');

  filterBtns.forEach((btn) => {
    if (btn.classList.contains('activeFilter')) {
      btn.classList.remove('activeFilter');
    }
  });
}

function showAllTodos() {
  const todoItems = document.querySelectorAll('.todo-item');

  todoItems.forEach((item) => {
    const todo = item.parentElement.parentElement;
    if ((todo.style.display = 'none')) {
      todo.style.display = 'flex';
    }
  });
}

function showActiveTodos() {
  const todoItems = document.querySelectorAll('.todo-item');

  todoItems.forEach((item) => {
    const todo = item.parentElement.parentElement;
    if (item.classList.contains('completed')) {
      todo.style.display = 'none';
    } else {
      todo.style.display = 'flex';
    }
  });
}

function showCompletedTodos() {
  const todoItems = document.querySelectorAll('.todo-item');

  todoItems.forEach((item) => {
    const todo = item.parentElement.parentElement;
    if (!item.classList.contains('completed')) {
      todo.style.display = 'none';
    } else {
      todo.style.display = 'flex';
    }
  });
}

function clearCompletedTodos() {
  const todoItems = document.querySelectorAll('.todo-item');

  todoItems.forEach((item) => {
    if (item.classList.contains('completed')) {
      todos.removeChild(item.parentElement.parentElement);
    }
  });
}

function createTodo(todoTitle, list) {
  const todoContainer = document.createElement('li');
  todoContainer.className = 'todo';
  todoContainer.setAttribute('data-index', list.length - 1);

  const textAndCheck = document.createElement('div');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.setAttribute('data-index', list.length - 1);
  const todo = document.createElement('label');
  todo.setAttribute('data-index', list.length - 1);
  todo.className = 'todo-item';
  todo.textContent = todoTitle;
  textAndCheck.append(checkBox, todo);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'del-todo';
  deleteBtn.setAttribute('data-index', list.length - 1);
  const deleteImg = document.createElement('img');
  // deleteImg.setAttribute('data-index', list.length - 1);
  deleteImg.src = './images/icon-cross.svg';
  deleteBtn.appendChild(deleteImg);

  todoContainer.append(textAndCheck, deleteBtn);

  domTodos.push(todoContainer);

  todos.appendChild(todoContainer);
}

export default TodoDom;
