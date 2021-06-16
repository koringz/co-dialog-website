import nav from './json/nav.js'
import configuration from './json/configuration.js'
import icon from './images/co-dialog.png'
import correntimg from './images/2714.png'
import {author, name} from './../package.json'
import ajax from '@fdaciuk/ajax'

import 'co-animation/animate.min.css'
import coanimation from './co-animation'

const _coanimation = coanimation;

const AJAX = ajax();


function cacheData () {
	var data = {};
	var allData = [];

	function save (name,options) {
		return allData.push(data[name] = options) && data
	}

	return function (name, returnValue) {
		return save(name,returnValue)
	}
}

/*
推送数据
*/
function push (getCacheData) {
	getCacheData('nav', nav.data)
	getCacheData('configuration', configuration.data)
}

function excuteNav(data) {
	let str = ''

	if (Array.isArray(data)) {
		str += '<nav>'
		str += '<ul>'
		for(var i = 0; i < data.length; i++) {
			str += '<li>'
			str += '<a href="#' + data[i].id + '">'
			str += data[i].name
			str += '</a>'
			str += '</li>'
		}
		str += '<div class="share-the-lovely">'
		str += '<span>'
		str += '分享喜爱'
		str += '<i class="far fa-heart">'
		str += '</i>'
		str += "</span>"
		str += '<div class="other-business-button">'
		str += '<iframe src="https://ghbtns.com/github-btn.html?user=koringz&repo=co-dialog&type=watch&count=true" allowtransparency="true" scrolling="0" frameborder="0" width="100" height="20">'
		str += '</iframe>'
		str += "</div>"
		str += '</ul>'
		str += '</nav>'
	}

	return str
}


function excuteHeader() {
	let str = ''

	str += '<header>'
	str += '<img class="logo" src="'
	str += icon
	str += '" alt="co-dialog">'
	str += '<h1>'
	str += '这是一个简洁，智能，个性化的JAVASCRIPT弹出框'
	str += '</h1>'
	str += '<h2>'
	str += 'zero dependencies and free dialog library'
	str += '</h2>'

	str += '<div class="card-space">'
	str += '</div>'

	// 显示版本
	str += '<div class="show-version lastest-version">'
	str += '<span>'
	str += 'Latest update:'
	str += '<a href="https://github.com/koringz/co-dialog/releases/latest" class="updated_at">'
	str += '</a>'
	str += '</span>'
	str += '&nbsp;&nbsp;'
	str += '<span>'
	str += 'Current version:'
	str += '<a href="https://github.com/koringz/co-dialog/tree/master" class="tag_name">'
	str += '</a>'
	str += '</span>'
	str += '</div>'

	str += '</header>'


	// 对比案例
	str += '<div class="show-case showme case-normal">'

	str += '<h1> 正常alert </h1>'

	str += '<pre class=" CodeMirror" role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">alert</span>(<span class="cm-string">"默认alert功能"</span>)</span>'
	str += '</code>'
	str += '</pre>'

	str += '<button class="button green">'
	str += '显示正常alert'
	str += '</button>'
	str += '</div>'

	str += '<div class="show-case showme case-beautiful">'

	str += '<h1> CoDialog </h1>'

	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".alert"</span>'
	str += ').<span class="cm-property">use</span>(</span>'
	str += '\n'
  	str += '&nbsp;<span class="cm-string">"标题"</span>,'
	str += '\n'
	str += '&nbsp;<span class="cm-string">"这是一个CoDialog组件"</span>,'
	str += '\n'
	str += '&nbsp;<span class="cm-string">"success"</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'

	str += '<button class="button green with-title-1">'
	str += '显示co-dialog alert'
	str += '</button>'
	str += '</div>'


	return str
}

function center_container() {
	var str = ''

	str += '<div class="center-container">'
	str += '<p>'
	str += '因为工作中用到dialog, 发现UI设计的弹出框的风格一直在变化，于是每次都要重新写一个弹出框，无意中增加了无用的工作量，所以果断就封装成一个弹出框组件，目前的锥形仅支持PC，然后又加入了CSS3动画效果，如果要引入动画效果就需要高版本的browser才能使用，期望你能一起加入参与改进！+1'
	str += '<p>'
	str += '<div>'

	return str
}

function examples () {
	var str = ''

	str += '<h3 id="more-examples">'
	str += '更多示例'
	str += '</h3>'

	return str
}


function githubInformation() {
	var apiURL = 'https://api.github.com/repos';
	var protoURL = apiURL + '/koringz/co-dialog';

/*		AJAX.get(protoURL).then(function (res,xhr) {
				console.log(res)
			if(res.data) {
				 document.querySelector('.updated_at').textContent = res.data.updated_at
			}
		})
*/
		AJAX.get(protoURL+'/releases/latest').then(function (res,xhr) {
				 document.querySelector('.updated_at').textContent = res.created_at
				 document.querySelector('.tag_name').textContent = res.tag_name || ''

		})

}


function render(_id, getCacheData) {
	const _root = document.querySelector(_id);
	_root.innerHTML += excuteNav(getCacheData().nav);
	_root.innerHTML += excuteHeader();
	githubInformation();
	_root.innerHTML += center_container();
	_root.innerHTML += examples();
	_root.innerHTML += coDialog_examples();
	_root.innerHTML += download();
	_root.innerHTML += usage();
	_root.innerHTML += excuteConfiguration(getCacheData().configuration);
	_root.innerHTML += browserSupport();
	_root.innerHTML += form();


}

/*
初始化 数据 && 模版
*/
function docs_render (_id) {
	var getCacheData = new cacheData();
	push(getCacheData);

	render(_id, getCacheData);

	_coanimation.app('.logo').delay(1000).fadeIn().bounce().stop();

	_coanimation.app.render()
}


function download () {
	var str = ''

	str += '<div class="download-center">'
	str += '<h3 id="download">'
	str += '下载'
	str += '</h3>'

	str += '<div class="download-cmd">'
	str += '<pre class=" CodeMirror" role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '$ npm install co-dialog'
	str += '</code>'
	str += '</pre>'
	str += '</div>'

	str += '<div class="download-cdn">'
	str += '或者下载 CDN: '
	str += '<a target="_blank" href="https://cdn.jsdelivr.net/npm/co-dialog">'
	str += "jsdelivr.com/package/npm/co-dialog/dist/co-dialog.min.js"
	str += '</a>'
	str += '</div>'

	str += '</div>'

	return str
}


function excuteConfiguration (data) {

	var str = ''

	str += '<div class="configuration-center">'
	str += '<h3 id="configuration">'
	str += '选项配置'
	str += '</h3>'

	str += '<p class="configuration-descri">以下是use方法可以使用的配置选项属性</p>'

	str += '<table>'
	str += '<thead>'
	str += '<tr>'
	str += '<th>选项</th>'
	str += '<th>默认</th>'
	str += '<th>信息</th>'
	str += '</tr>'
	str += '</thead>'

	str += '<tbody>'
	for (var i =0, len = data.length; i < len; i++) {
		str += '<tr>'
		str += '<td>'
		str += data[i].option
		str += '</td>'
		str += '<td>'
		str += data[i].default
		str += '</td>'
		str += '<td>'
		str += data[i].info
		str += '</td>'
		str += '</tr>'
	}
	str += '</tbody>'

	str += '</table>'

	str += '</div>'

	return str
}

function browserSupport () {
	var str = ''

	str += '<div class="browser-support-center">'
	str += '<h3 id="browser-support">'
	str += 'Browser Support'
	str += '</h3>'

	str += '<p class="browser-support-descri">目前co-dialog支持ie8以上(动画animation需要ie10*以上)</p>'

	str += '<table>'
	str += '<thead>'
	str += '<tr>'
	str += '<th>IE11*</th>'
	str += '<th>Edge</th>'
	str += '<th>Chrome</th>'
	str += '<th>Firefox</th>'
	str += '<th>Safari</th>'
	str += '<th>Opera</th>'
	str += '</tr>'
	str += '</thead>'

	str += '<tbody>'
	for (var i = 0; i < 6; i++) {
		str +='<td key="' + i + '">'
		str +=`<img class="emoji" height="20" width="20" src="${correntimg}">`
		str +='</td>'
	}
	str += '</tbody>'

	str += '</table>'


	str += '</div>'

	return str
}


function usage () {

	var str = ''

	str += '<div class="usage-center">'
	str += '<h3 id="usage">'
	str += '使用'
	str += '</h3>'

	str += '<div class="usage-script">'
	str += '<br>'
	str += '<div class="tl">初始化你需要加载以下文件：</div>'
	str += '<br>'
	str += '<pre class=" CodeMirror" role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-operator">&lt;</span><span class="cm-variable emmet-open-tag">script</span> '
	str += '<span class="cm-variable">src</span><span class="cm-operator">=</span>'
	str += '<span class="cm-string">"co-dialog.js"</span><span class="cm-operator">&gt;&lt;</span>'
	str += '<span class="cm-string-2">/</span><span class="cm-variable emmet-close-tag">script</span>'
	str += '<span class="cm-string-2">&gt;</span>'
	str += '</span>'
	str += '</code>'
	str += '</pre>'


	str += '<br>'
	str += '<div class="tl">如果你需要引入animation.css样式：</div>'
	str += '<br>'

	str += '<pre class=" CodeMirror" role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-operator">&lt;</span><span class="cm-variable emmet-open-tag">script</span> '
	str += '<span class="cm-variable">src</span><span class="cm-operator">=</span>'
	str += '<span class="cm-string">"co-dialog.js"</span><span class="cm-operator">&gt;&lt;</span>'
	str += '<span class="cm-string-2">/</span><span class="cm-variable emmet-close-tag">script</span>'
	str += '<span class="cm-string-2">&gt;</span>'
	str += '</span>'
	str += '<br>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-operator">&lt;</span><span class="cm-variable emmet-open-tag">link</span> '
	str += '<span class="cm-variable">href</span><span class="cm-operator">=</span>'
	str += '<span class="cm-string">"animation.css"</span><span class="cm-operator">&gt;&lt;</span>'
	str += '<span class="cm-string-2">/</span><span class="cm-variable emmet-close-tag">link</span>'
	str += '<span class="cm-string-2">&gt;</span>'
	str += '</span>'
	str += '</code>'
	str += '</pre>'

	str += '</div>'

	str += '<br>'
	str += '<div class="tl">or</div>'
	str += '<br>'

	str += '<div class="usage-code">'
	str += '<pre class=" CodeMirror" role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-keyword">import</span> '
	str += '<span class="cm-def">Coog</span> '
	str += '<span class="cm-keyword">from</span> '
	str += '<span class="cm-string">"co-dialog"</span>'
	str += '</span>'

	str += '<br>'
	str += '<div class="tl">or</div>'

	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-keyword">const</span> <span class="cm-def">Coog</span> '
	str += '<span class="cm-operator">=</span> <span class="cm-variable">require</span>'
	str += '<span class=" CodeMirror-">(</span><span class="cm-string">"co-dialog"</span>'
	str += '<span class=" CodeMirror-">)</span>'
	str += '</span>'
	str += '</code>'
	str += '</pre>'
	str += '</div>'

	str += '</div>'

	return str
}

function form () {
	var str = ''

	str += '<form id="codepen-node" action="https://codepen.io/pen/define" method="POST" target="_blank" aria-label="false" aria-hidden="true">'
	str += '<input type="hidden" name="data" id="codepen-value" value="">'
	str += '</form>'

	return str
}

function coDialog_examples (argument) {
	var str = ''

	str += '<ul id="show-more-examples" class="show-more-examples">'
	// ---------------------------- *************** -----------------------------------

	// split ----------- 这是一个基础的弹出框 base-class
	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '这是一个基础的弹出框'
	str += '</p>'
	str += '<button class="button green base-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".base"</span>'
	str += ').<span class="cm-property">use</span>(</span>'
	str += '<span class="cm-string">"这是一个基础的弹出框"</span>'
	str += '<span role="presentation" style="padding-right: 0.1px;">).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'

	
	// split ----------- 蓝色主题  theme-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '蓝色主题'
	str += '</p>'
	str += '<button class="button green theme-blue-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".theme-blue"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"This is a title"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">' + '\n"Delete your account? &lt;p style=font-size:12px;&gt; you will be unable to recover any data&lt;/p>"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">type</span>: <span class="cm-string">"success"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">layout</span>: <span class="cm-string">"center"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isGesture</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isDrag</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'

	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">titleColor</span>: <span class="cm-string">"#865FDF"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">closeColor</span>: <span class="cm-string">"#865FDF"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">showCancleButton</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">confirmButtonBackground</span>: <span class="cm-string">"#865FDF"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">cancleButtonBackground</span>: <span class="cm-string">"#865FDF"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">cancleButtonText</span>: <span class="cm-string">"NO"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">confirmButtonText</span>: <span class="cm-string">"YES"</span>,'
	str += '</span>'
	str += '\n'

	// ----- function begin  onHeaderBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	// start methods
	str += '&nbsp; &nbsp;<span class="cm-property">onHeaderBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	// content row start
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">backgroundColor</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"#fff"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">borderBottom</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"1px solid #ddd"</span>'
	// content row end
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	// end methods
	str += '</span>,'
	str += '\n'
	// ----- function end

	// ----- function begin  onHeaderBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	// start methods
	str += '&nbsp; &nbsp;<span class="cm-property">onFooterBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	// content row start
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">backgroundColor</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"#865FDF"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">marginBottom</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"0"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">padding</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"6px 0"</span>'
	// content row end
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	// end methods
	str += '</span>,'
	str += '\n'
	// ----- function end

	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'



	// split ----------- 这是一个带标题的弹出框 with-title-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '这是一个带标题的弹出框'
	str += '</p>'
	str += '<button class="button green with-title-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".with-title"</span>'
	str += ').<span class="cm-property">use</span>(</span>'
	str += '\n'
	str += '&nbsp;<span class="cm-string">"默认"</span>,'
	str += '\n'
	str += '&nbsp;<span class="cm-string">"这是一个带标题的弹出框"</span>'
	str += '\n'
	str += '&nbsp;<span class="cm-string">"success"</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'

	// split ----------- 这是一个drag可拖动弹出框 try-drag-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '你可以拖动我一下'
	str += '</p>'
	str += '<button class="button green try-drag-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".try-drag"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"拖动-isDrag"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">"请尝试拖动窗口"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isDrag</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">type</span>: <span class="cm-atom">"success"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'

	// split -----------这是一个layout布局，靠右下角显示的弹出框 layout-right-bottom-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '这是一个layout布局，靠右下角显示的弹出框'
	str += '</p>'
	str += '<button class="button green layout-right-bottom-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".layout-right-bottom"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"布局-layout"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">"这是一个layout布局，靠右下角显示的弹出框"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">layout</span>: <span class="cm-string">"right bottom"</span>,'
	str += '</span>'
	str += '\n'

	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'

	// split ----------- 超时自动关闭  timeout-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '超时自动关闭'
	str += '</p>'
	str += '<button class="button green timeout-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".timeout"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"超时-timeout"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">"超时自动关闭"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">timeout</span>: <span class="cm-number">2000</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">type</span>: <span class="cm-atom">"info"</span>,'
	str += '</span>'
	str += '\n'

	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'

	// split ----------- 显示取消按钮和功能  cancle-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '显示取消按钮和功能'
	str += '</p>'
	str += '<button class="button green cancle-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".show-cancle"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"取消-show-cancle"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">"显示取消按钮和功能"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">showCancleButton</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isGesture</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isDrag</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'

	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'


	// split ----------- 弹出框内容自定义  custom-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '弹出框内容自定义'
	str += '</p>'
	str += '<button class="button green custom-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".custom"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isGesture</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isDrag</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'

	// ----- function begin  onHeaderBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">onHeaderBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">innerHTML</span>'
	str += '&nbsp;<span class="cm-operator">=</span>&nbsp;'
	str += '<span class="cm-string">"'+ "&lt;span ref='" + "top'&gt;顶部&lt;/span&gt;" + '"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	str += '</span>,'
	str += '\n'
	// ----- function end

	// ----- function begin  onBodyBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">onBodyBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">innerHTML</span>'
	str += '&nbsp;<span class="cm-operator">=</span>&nbsp;'
	str += '<span class="cm-string">"'+ "&lt;span ref='" + "middle'&gt;中间&lt;/span&gt;" + '"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	str += '</span>,'
	str += '\n'
	// ----- function end

	// ----- function begin  onFooterBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">onFooterBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">innerHTML</span>'
	str += '&nbsp;<span class="cm-operator">=</span>&nbsp;'
	str += '<span class="cm-string">"'+ "&lt;span ref='" + "bottom'&gt;底部&lt;/span&gt;" + '"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	str += '</span>,'
	str += '\n'
	// ----- function end

	// ----- function begin  methods
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">methods</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">header</span>.<span class="cm-property">$refs</span>'
	str += '.<span class="cm-property">top</span>.<span class="cm-property">style</span>.<span class="cm-property">color</span>'
	str += '&nbsp;<span class="cm-operator">=</span>&nbsp; <span class="cm-string">"#4E5198"</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">body</span>.<span class="cm-property">$refs</span>'
	str += '.<span class="cm-property">middle</span>.<span class="cm-property">style</span>.<span class="cm-property">color</span>'
	str += '&nbsp;<span class="cm-operator">=</span>&nbsp; <span class="cm-string">"#4E5198"</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">footer</span>.<span class="cm-property">$refs</span>'
	str += '.<span class="cm-property">bottom</span>.<span class="cm-property">style</span>.<span class="cm-property">color</span>'
	str += '&nbsp;<span class="cm-operator">=</span>&nbsp; <span class="cm-string">"#4E5198"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	str += '</span>'
	str += '\n'
	// ----- function end

	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'


	// split ----------- 自定义动画  cancle-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '自定义动画'
	str += '</p>'
	str += '<button class="button green customAnimation-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".customAnimation"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"自定义动画-customAnimation"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">"基于animated.css类实现自定义动画"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isClose</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">layout</span>: <span class="cm-string">"center"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isDrag</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">animation</span>: <span class="cm-atom">false</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">customAnimation</span>: <span class="cm-string">"tada"</span>,'
	str += '</span>'
	str += '\n'

	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'


	// split ----------- 确认按钮回调函数  theme-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '确认回调函数'
	str += '</p>'
	str += '<button class="button green confirmCallback-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".confirmCallback"</span>'
	str += ').<span class="cm-property">use</span>({</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"确认回调-confirmCallback"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">"你想清除确认回调函数吗？"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">type</span>: <span class="cm-atom">"question"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">showCancleButton</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	// ----- function begin  onBodyBefore
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">confirmCallback</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".confirm-clear-callback"</span>'
	str += ').<span class="cm-property">use</span>(</span>'
	str += '<span class="cm-string">"你已确定清除"</span>'
	str += '<span role="presentation" style="padding-right: 0.1px;">).<span class="cm-property">show</span>()</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	str += '</span>,'
	str += '\n'
	// ----- function end
	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'


	// split ----------- 紫色主题  theme-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '紫色主题'
	str += '</p>'
	str += '<button class="button green theme-purple-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".theme-purple"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"紫色主题-purple-theme"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">"Your have seen the purple theme"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">layout</span>: <span class="cm-string">"right top"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isGesture</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isDrag</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'

	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">titleColor</span>: <span class="cm-string">"#4E5198"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">closeColor</span>: <span class="cm-string">"#4E5198"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">showCancleButton</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">confirmButtonBackground</span>: <span class="cm-string">"#4E5198"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">cancleButtonText</span>: <span class="cm-string">"Confirm"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">confirmButtonText</span>: <span class="cm-string">"Cancle"</span>,'
	str += '</span>'
	str += '\n'

	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'




	// split ----------- 阅读主题  theme-class

	str += '<li>'
	str += '<div class="sme-triggle">'
	str += '<p>'
	str += '阅读主题'
	str += '</p>'
	str += '<button class="button green theme-read-class">'
	str += '试试我'
	str += '</button>'
	str += '</div>'

	str += '<div class="sme-code">'
	str += '<pre class=" CodeMirror " role="presentation">'
	str += '<code>'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	str += '<span class="cm-variable">Coog</span>.<span class="cm-property">app</span>'
	str += '(<span class="cm-string">".theme-read"</span>'
	str += ').<span class="cm-property">use</span>({</span>'

	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">title</span>: <span class="cm-string">"This is a title"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">message</span>: <span class="cm-string">"We’re also releasing our first step towards showcasing what’s possible ' 
	str += '\n when using GitHub Desktop."</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">layout</span>: <span class="cm-string">"center"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isClose</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">isDrag</span>: <span class="cm-atom">true</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">animation</span>: <span class="cm-atom">false</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">customAnimation</span>: <span class="cm-atom">"swing"</span>,'
	str += '</span>'
	str += '\n'

	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">titleColor</span>: <span class="cm-string">"#333"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">closeColor</span>: <span class="cm-string">"#333"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">confirmButtonText</span>: <span class="cm-string">"Read More"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">confirmButtonColor</span>: <span class="cm-string">"#333"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">confirmButtonBackground</span>: <span class="cm-string">"transparent"</span>,'
	str += '</span>'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	str += '&nbsp; &nbsp;<span class="cm-property">showCancleButton</span>: <span class="cm-string">false</span>,'
	str += '</span>'
	str += '\n'


	// ----- function begin  onDialogBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	// start methods
	str += '&nbsp; &nbsp;<span class="cm-property">onDialogBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	// content row start
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">background</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"#F1F1F1"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">border</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"2px solid #333"</span>'
	// content row end
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	// end methods
	str += '</span>,'
	str += '\n'
	// ----- function end


	// ----- function begin  onHeaderBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	// start methods
	str += '&nbsp; &nbsp;<span class="cm-property">onHeaderBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	// content row start
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">backgroundColor</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"#F1F1F1"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">borderBottom</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"2px solid #333"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">margin</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"0 30px"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">paddingLeft</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"0"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">paddingRight</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"0"</span>'
	// content row end
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	// end methods
	str += '</span>,'
	str += '\n'
	// ----- function end

	// ----- function begin  onBodyBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	// start methods
	str += '&nbsp; &nbsp;<span class="cm-property">onBodyBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	// content row start
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">fontSize</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"14px"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">textAlign</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"left"</span>'
	// content row end
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	// end methods
	str += '</span>,'
	str += '\n'
	// ----- function end

	// ----- function begin  onFooterBefore
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	// start methods
	str += '&nbsp; &nbsp;<span class="cm-property">onFooterBefore</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	// content row start
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">float</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"left"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">style</span>.<span class="cm-property">marginLeft</span>&nbsp;<span class="cm-operator">=</span>&nbsp;<span class="cm-string">"30px"</span>'
	// content row end
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	// end methods
	str += '</span>,'
	str += '\n'
	// ----- function end

	// ----- function begin  methods
	str += '<span role="presentation" style="padding-right: 0.1px;"> '
	// start methods
	str += '&nbsp; &nbsp;<span class="cm-property">methods</span>: <span class="cm-keyword">function</span>  () {'
	str += '\n'
	str += '<span role="presentation" style="padding-right: 0.1px;">'
	// content row start
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">footer</span>.<span class="cm-property">$refs</span><span class="cm-operator">.<span class="cm-property">button</span>.<span class="cm-property">firstChild</span>.<span class="cm-property">style</span>.<span class="cm-property">border</span>&nbsp;=&nbsp;</span><span class="cm-string">"2px solid #333"</span>'
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm-keyword">this</span>.<span class="cm-property">footer</span>.<span class="cm-property">$refs</span><span class="cm-operator">.<span class="cm-property">button</span>.<span class="cm-property">firstChild</span>.<span class="cm-property">style</span>.<span class="cm-property">border</span>&nbsp;=&nbsp;</span><span class="cm-string">"2px solid #333"</span>'
	// content row end
	str += '\n'
	str += '&nbsp;&nbsp;&nbsp;</span>}'
	// end methods
	str += '</span>,'
	str += '\n'
	// ----- function end

	// ----- function end
	str += '<span role="presentation" style="padding-right: 0.1px;">}).<span class="cm-property">show</span>()</span>'
	str += '</pre>'
	str += '</code>'
	str += '</div>'
	str += '</li>'




	// ---------------------------- *************** -----------------------------------
	str += '</ul>'


	return str
}

export default docs_render