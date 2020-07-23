// https://webpack.js.org/guides/getting-started/
// https://babeljs.io/setup#installation
// https://babeljs.io/docs/en/babel-preset-minify
// https://github.com/neutrinojs/babel-minify-webpack-plugin
// https://babeljs.io/docs/en/babel-preset-env
// https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder

import "./styles.css";
import {
    Todo,
    TodoList
} from './classes';
import {
    crearTodoHtml
} from "./js/componentes";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);