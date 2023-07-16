import setMode from './theme.js';
import { Todo } from './todo.js';
import TodoDom from './todoDom.js';

let todoListAll = [];

setMode();
TodoDom(todoListAll);
