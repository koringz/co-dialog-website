import nav from './json/nav.js'
import Coog from "co-dialog"

function docs () {
	baseExamples();
	moreExamples()
	codepen();

}

function baseExamples() {

	document.querySelector('.showme.case-normal button').onclick = function  (ev) {
		window.alert("默认alert功能")
	}

	document.querySelector('.showme.case-beautiful button').onclick = function  (ev) {
		Coog.app(".alert").use(
		 "标题",
		 "这是一个CoDialog组件",
		 "success"
		).show()
	}

}

function moreExamples () {

	document.querySelector('.show-more-examples .base-class').onclick = function  (ev) {
		Coog.app(".base").use("这是一个基础的弹出框").show()
	}

	document.querySelector('.show-more-examples .theme-purple-class').onclick = function  (ev) {
		Coog.app(".theme-purple").use({
		    title: "紫色主题-purple-theme",
		    message: "Your have seen the purple theme",
		    layout: "right top",
		    isGesture: true,
		    isDrag: true,
		    titleColor: "#4E5198",
		    closeColor: "#4E5198",
		    showCancleButton: true,
		    confirmButtonBackground: "#4E5198",
		    cancleButtonText: "Cancle",
		    confirmButtonText: "Confirm",
		}).show()
	}

	document.querySelector('.show-more-examples .with-title-class').onclick = function  (ev) {
		Coog.app(".with-title").use(
		 "默认",
		 "这是一个带标题的弹出框",
		 "success"
		).show()
	}

	document.querySelector('.show-more-examples .try-drag-class').onclick = function  (ev) {
		Coog.app(".try-drag").use({
		    title: "拖动-isDrag",
		    message: "请尝试拖动窗口",
		    isDrag: true,
		    type: 'success'
		}).show()
	}

	document.querySelector('.show-more-examples .layout-right-bottom-class').onclick = function  (ev) {
		Coog.app(".layout-right-bottom").use({
		    title: "布局-layout",
		    message: "这是一个layout布局，靠右下角显示的弹出框",
		    layout: "right bottom",
		}).show()
	}

	document.querySelector('.show-more-examples .timeout-class').onclick = function  (ev) {
		Coog.app(".timeout").use({
		    title: "超时-timeout",
		    message: "超时自动关闭",
		    timeout: 2000,
		    type: 'info'
		}).show()
	}

	document.querySelector('.show-more-examples .cancle-class').onclick = function  (ev) {
		Coog.app(".show-cancle").use({
		    title: "取消-cancle",
		    message: "显示取消按钮和功能",
		    isGesture: true,
		    isDrag: true,
		    showCancleButton: true,
		}).show()
	}

	document.querySelector('.show-more-examples .custom-class').onclick = function  (ev) {
		Coog.app(".custom").use({
		    isGesture: true,
		    isDrag: true,
		    onHeaderBefore: function  () {
		     this.innerHTML = "<span ref='top'>顶部</span>"
		   },
		    onBodyBefore: function  () {
		     this.innerHTML = "<span ref='middle'>中间</span>"
		   },
		    onFooterBefore: function  () {
		     this.innerHTML = "<span ref='bottom'>底部</span>"
		   },
		    methods: function  () {
		     this.header.$refs.top.style.color =  "#4E5198"
		     this.body.$refs.middle.style.color =  "#4E5198"
		     this.footer.$refs.bottom.style.color =  "#4E5198"
		   }
		}).show()
	}

	document.querySelector('.show-more-examples .customAnimation-class').onclick = function  (ev) {
		Coog.app(".customAnimation").use({
		    title: "自定义动画-customAnimation",
		    message: "基于animated.css类实现自定义动画",
		    isClose: true,
		    layout: "center",
		    isDrag: true,
		    animation: false,
		    customAnimation: "tada",
		}).show()

	}

	document.querySelector('.show-more-examples .confirmCallback-class').onclick = function  (ev) {
		Coog.app(".confirmCallback").use({
		    title: "确认回调-confirmCallback",
		    message: "你想清除确认回调函数吗？",
		    showCancleButton: true,
		    type: 'question',
		    confirmCallback: function  () {
		     Coog.app(".confirm-clear-callback").use("你已确定清除").show()
		   },
		}).show()
	}


	document.querySelector('.show-more-examples .theme-blue-class').onclick = function  (ev) {
		Coog.app(".theme-blue").use({
		    title: 'JUST CHECKING.',
				message: 'Delete your account?' + "<p style='font-size:12px;'>This action is final and you will be unable to recover any data</p>",
				isDrag: true,
				layout: 'center',
				titleColor: '#865FDF',
				closeColor: '#865FDF',
				showCancleButton: true,
				confirmButtonText: 'YES',
				cancleButtonText: 'NO',
				footerText: "",
				confirmButtonBackground: '#865FDF',
				cancleButtonBackground: '#865FDF',
				confirmButtonColor: '#fff',
				onHeaderBefore: function (node) {
				  this.style.backgroundColor = "#fff"
				  this.style.borderBottom = "1px solid #ddd"
				},
				onFooterBefore: function (node) {
				  this.style.backgroundColor = "#865FDF"
				  this.style.marginBottom = '0'
				  this.style.padding = '6px 0'
				},
				confirmCallback: function () {
				  Coog.app(".test3").use({
				     titleColor: '#45B680',
				     title: 'Return Results',
				     message: 'Success Delete',
				     confirmButtonText: 'YES',
				     type: 'success',
				     confirmCallback: function () {
				        Coog.app('.theme-blue').show()
				     }
				  })
				  .show()
				}
		}).show()
	}


	document.querySelector('.show-more-examples .theme-read-class').onclick = function  (ev) {
		Coog.app(".theme-read").use({
		    title: 'This is a title',
				message: 'We’re also releasing our first step towards showcasing what’s possible when using GitHub Desktop. In 1.4, we’ve added our release notes to the app to highlight what’s changed since the last release, and to recognize—and thank—our amazing contributors',
				isClose: true,
				isDrag: true,
				layout: 'center',
				animation: false,
				customAnimation: 'slideInDown',
				titleColor: '#333',
				closeColor: '#333',
				confirmButtonText: "Read More",
				confirmButtonColor: '#333',
				animation: false,
				customAnimation: 'swing',
				onDialogBefore: function () {
				   this.style.background = "#F1F1F1";
				   this.style.border = "3px solid #333";
				},
				onHeaderBefore: function () {
				   this.style.background = "#F1F1F1";
				   this.style.borderBottom = "2px solid #333";
				   this.style.margin = "0 30px";
				   this.style.paddingLeft = "0";
				   this.style.paddingRight = "0";
				},
				onBodyBefore: function () {
				   this.style.fontSize = "14px";
				   this.style.textAlign = "left";
				},
				onFooterBefore: function () {
				   this.style.float = 'left'
				   this.style.marginLeft = '30px'
				},
				methods: function () {
				   this.footer.$refs.button.firstChild.style.background = "transparent";
				   this.footer.$refs.button.firstChild.style.border = "2px solid #333"
				}
		}).show()
	}

}

function codepen() {
	Array.from(document.querySelectorAll("pre.CodeMirror")).forEach(function(pretag) {
        pretag.addEventListener("click", function(n) {
        	if(n.offsetY < 0) {
	            var v = {
	                js_external: "https://cdn.jsdelivr.net/npm/co-dialog"
	            };
	            v.js = "",
	            v.js += pretag.innerText,
	            document.getElementById("codepen-value").value = JSON.stringify(v),
	            document.getElementById("codepen-node").submit()
        	}
        })
    })
}


export default docs