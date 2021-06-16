import '@fortawesome/fontawesome-free/css/all.css'
import '@babel/polyfill'

import './assets/style.css';
import docs from './docs.js';
import docs_render from './docs.render.js';



function app (id) {
	new docs_render(id);
	new docs();

	return this
}

var APP = new app('#root');

export default APP;