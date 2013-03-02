$.prettyDate.messages = (function() {

	var FuncSource = function(few, many) {
		this.few = few;
		this.many = many;
	};

	FuncSource.prototype = {
		replace: function(regexp, amt) {
			return amt % 10 === 1 && amt % 100 !== 11 ? amt : (amt % 10 >= 2 && amt % 10 <= 4 && (amt % 100 < 10 || amt % 100 >= 20)? this.few.replace(regexp, amt): this.many.replace(regexp, amt));
		}
	};

	return {
		now: 'Только что',
		minute: '1 минуту назад',
		minutes: $.prettyDate.template(new FuncSource('{0} минуты назад', '{0} минут назад')),
		hour: '1 час назад',
		hours: $.prettyDate.template(new FuncSource('{0} часа назад', '{0} часов назад')),
		yesterday: 'Вчера',
		dayBeforeYesterday: 'Позавчера',
		days: $.prettyDate.template(new FuncSource('{0} дня назад', '{0} дней назад')),
		week: '1 неделю назад',
		weeks: $.prettyDate.template(new FuncSource('{0} недели назад', '{0} недель назад')),
		month: '1 месяц назад',
		months: $.prettyDate.template(new FuncSource('{0} месяца назад', '{0} месяцев назад')),
		year: '1 год назад',
		years: $.prettyDate.template(new FuncSource('{0} года назад', '{0} лет назад'))
	};
})();