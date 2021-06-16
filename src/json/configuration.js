export default {
    "data": [

		{

			"option" : "title",

			"default": " ' ' ",

			"info": "title是一个模块, 作为参数传入, title能解析HTML格式, 当传入字符串的形式, 在use方法使用第一个参数传入"

        },

		{

			"option" : "message",

			"default": " ' ' ",

			"info": "message是一个模块, 原理同上"

        },

		{

			"option" : "layout",

			"default": " 'left' ",

			"info": "弹出框在窗口的位置, 使用字符串的形式传入, 位置分别如下: 上|下|左|右|居中|左上|左下|右上|右下"

        },

		{

			"option" : "onResize",

			"default": " true",

			"info": "自适应窗口布局位置"

        },

		{

			"option" : "type",

			"default": "' '",

			"info": "显示不同类型 icon 弹出框 ['success', 'error', 'warning', 'info', 'question']"

        },

		{

			"option" : "isGesture",

			"default": " true ",

			"info": "是否开启手势效果, 当isDrag拖动开始的时候 才会启用手势效果"

        },

		{

			"option" : "isDrag",

			"default": " true ",

			"info": "在可视窗口里, 拖动弹出框"

        },

		{

			"option" : "isClose",

			"default": " true ",

			"info": "关闭按钮的事件, 默认true开启关闭事件"

        },

		{

			"option" : "showCloseButton",

			"default": " true ",

			"info": "显示关闭按钮ui"

        },

		{

			"option" : "showCancleButton",

			"default": " false ",

			"info": "显示清除按钮的ui"

        },

		{

			"option" : "showConfirmButton",

			"default": " true ",

			"info": "显示确认按钮的ui"

        },

		{

			"option" : "cancleButtonText",

			"default": " '取消' ",

			"info": "填充清除按钮的ui"

        },

		{

			"option" : "confirmButtonText",

			"default": " '确定' ",

			"info": "填充确认按钮的ui"

        },

		{

			"option" : "cancleButtonColor",

			"default": " '#fff' ",

			"info": "填充清除按钮字体颜色的ui"

        },

		{

			"option" : "confirmButtonColor",

			"default": " '#fff' ",

			"info": "填充确认按钮字体颜色的ui"

        },

		{

			"option" : "cancleButtonBackground",

			"default": " '#fff' ",

			"info": "填充清除按钮背景颜色的ui"

        },

		{

			"option" : "confirmButtonBackground",

			"default": " '#fff', ",

			"info": "填充确认按钮背景颜色的ui"

        },

		{

			"option" : "titleColor",

			"default": " '#9A9B9C' ",

			"info": "填充标题字体颜色的ui"

        },

		{

			"option" : "closeColor",

			"default": " '#9A9B9C' ",

			"info": "填充关闭按钮颜色的ui"

        },

		{

			"option" : "messageColor",

			"default": " '#696969' ",

			"info": "填充内容字体颜色的ui"

        },

		{

			"option" : "footerText",

			"default": " ' ' ",

			"info": "填充底部内容的ui"

        },

		{

			"option" : "methods",

			"default": " function () {} ",

			"info": "处理弹出框的方法, 第一个参数是弹出框的节点类, 这个节点就是使用app(节点类), 函数还能调用this指针, 分别指向 this.header 和 this.body 和 this.footer 下面的直接点的style修改"

        },

		{

			"option" : "onDialogBefore",

			"default": " function () {} ",

			"info": "在所有属性之前处理 dialog 节点, 第一个参数是弹出框节点"

        },

		{

			"option" : "onHeaderBefore",

			"default": " function () {} ",

			"info": "在所有属性之前处理 header 节点, 第一个参数是弹出框的 header 节点"

        },

		{

			"option" : "onBodyBefore",

			"default": " function () {} ",

			"info": "在所有属性之前处理 body 节点, 第一个参数是弹出框的 body 节点"

        },

		{

			"option" : "onFooterBefore",

			"default": " function () {} ",

			"info": "在所有属性之前处理 footer 节点, 第一个参数是弹出框的 footer 节点"

        },

		{

			"option" : "onDialogAfter",

			"default": " function () {} ",

			"info": "在所有属性之后处理 dialog 节点, 第一个参数是弹出框节点"

        },

		{

			"option" : "onHeaderAfter",

			"default": " function () {} ",

			"info": "在所有属性之后处理 header 节点, 第一个参数是弹出框的 header 节点"

        },

		{

			"option" : "onBodyAfter",

			"default": " function () {} ",

			"info": "在所有属性之后处理 body 节点, 第一个参数是弹出框的 body 节点"

        },

		{

			"option" : "onFooterAfter",

			"default": " function () {} ",

			"info": "在所有属性之后处理 footer 节点, 第一个参数是弹出框的 footer 节点"

        },

		{

			"option" : "timeout",

			"default": " null ",

			"info": "这个有个超时的数, 以毫秒计算, 时间超过就是自动隐藏弹出框"

        },

		{

			"option" : "animation",

			"default": " false ",

			"info": "默认为true, 使用初始化的动画. 如果为false, 就是禁止默认的动画, 启用animated.css动画效果"

        },

		{

			"option" : "customAnimation",

			"default": " 'bounceIn' ",

			"info": "自定义animated.css动画类, 类必须是一个字符串, 类只能是一个, 比如: customAnimation: 'bounceIn' "

        },

		{

			"option" : "confirmCallback",

			"default": " null ",

			"info": " 确认按钮的回调函数 "

        },

		{

			"option" : "cancleCallback",

			"default": " null ",

			"info": " 取消按钮的回调函数 "

        },
		{

			"option" : "tracker",

			"default": " null ",

			"info": " 对app方法的类进行追踪的作用 "

        },




    ]
}