// https://webpack.js.org/guides/getting-started/
// https://babeljs.io/setup#installation
// https://babeljs.io/docs/en/babel-preset-minify
// https://github.com/neutrinojs/babel-minify-webpack-plugin
// https://babeljs.io/docs/en/babel-preset-env
// https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder

import {
    saludar
} from "./js/componentes.js";
import "./styles.css";

const nombre = "Hector";

saludar(nombre);