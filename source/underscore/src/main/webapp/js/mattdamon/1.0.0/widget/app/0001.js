console.log("main init");
/**
 * @author MATTDAMON
 */
(function(window, undefined) {
	define("mattdamon/widget/app/0001", [ "text!./templates/0001.html",
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

				// 定义一个JavaScript内置对象
				var jsData = {
					name : 'data'
				}

				// 通过_()方法将对象创建为一个Underscore对象
				// underscoreData对象的原型中包含了Underscore中定义的所有方法，你可以任意使用
				var underscoreData = _(jsData);

				// 通过value方法获取原生数据, 即jsData
				console.log(underscoreData.value());
				// Underscore对象
				console.dir(_);
				// 将Underscore对象重命名为us, 后面都通过us来访问和创建Underscore对象
				var us = _.noConflict();
				// 输出"自定义变量"
				console.dir(us);

				$(_self.placeholder).append(template);

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
