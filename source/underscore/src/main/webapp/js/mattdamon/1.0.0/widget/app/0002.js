console.log("main init");
/**
 * @author MATTDAMON
 */
(function(window, undefined) {
	define("mattdamon/widget/app/0002", [ "text!./templates/0002.html",
			"i18n!mattdamon/locale/nls/Language" ], function(template, lang) {

		var _self = undefined;

		var Main = function(opts) {
			return new Main.prototype.constructor(opts);
		};

		Main.prototype = {

			// Main dom 节点
			placeholder : "div[name='main-container']",
			// 效果fadeIn，slideDown,show
			animation : 'fadeIn',

			constructor : function(opts) {
				$.extend(this, opts);
				_self = this;

				// 创建数据, 这些数据可能是你从服务器获取的
				var data = {
					list : [ {
						firstName : '<a href="#">Zhang</a>',
						lastName : 'San',
						city : 'Shanghai'
					}, {
						firstName : 'Li',
						lastName : 'Si',
						city : 'Beijing'
					}, {
						firstName : 'Wang',
						lastName : 'Wu',
						city : 'Guangzhou'
					}, {
						firstName : 'Zhao',
						lastName : 'Liu',
						city : 'Shenzhen'
					} ]
				}

				console.log(template);
				// 解析模板, 返回解析后的内容
				var render = _.template(template);
				var html = render(data);
				// 将解析后的内容填充到渲染元素
				$(_self.placeholder).append(html);

			},

			show : function(speed) {
				if (this.animation == 'fadeIn') {
					$("div[name='main-widget']").fadeIn(
							speed == undefined ? 0 : speed);
				} else if (this.animation == 'slideDown') {
					$("div[name='main-widget']").slideDown(
							speed == undefined ? 0 : speed);
				} else {
					$("div[name='main-widget']").show(
							speed == undefined ? 0 : speed);
				}
			}

		};
		Main.prototype.constructor.prototype = Main.prototype;
		return Main;
	});
})(window);
