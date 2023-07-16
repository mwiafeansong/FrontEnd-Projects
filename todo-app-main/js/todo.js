const Todo = (title, completedState) => {
  let newTodo = {
    title: title,
    completed: completedState,
  };

  return newTodo;
};

// add a new todo
function setTodo(list, newTodo) {
  list.push(newTodo);
}

//change completion status in storage
const changeStatus = (list, boxIndex) => {
  list.forEach((item, index) => {
    if (index === boxIndex) {
      item.completed = item.completed === true ? false : true;
    }
  });
};

// delete todo from storage
const removeTodo = (list, btnId) => {
  list.forEach((item, index) => {
    if (index === btnId) {
      list.splice(index, 1);
    }
  });
};

const getTodosLeft = (list) => {
  let itemsLeft = 0;

  list.forEach((todo) => {
    if (todo.completed === false) {
      itemsLeft++;
    }
  });

  return itemsLeft;
};

export { Todo, setTodo, changeStatus, removeTodo, getTodosLeft };
