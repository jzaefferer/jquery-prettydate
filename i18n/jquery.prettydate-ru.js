$.prettyDate.messages = (function() {

	var FuncSource = function(single, few, many) {
		this.single = single;
		this.few = few;
		this.many = many;
	};

	FuncSource.prototype = {
		replace: function(regexp, amt) {
			return amt % 10 === 1 && amt % 100 !== 11 ? this.single.replace(regexp, amt) : (amt % 10 >= 2 && amt % 10 <= 4 && (amt % 100 < 10 || amt % 100 >= 20)? this.few.replace(regexp, amt): this.many.replace(regexp, amt));
		}
	};

	return {
		now: 'Только что',
		minute: 'Минуту назад',
		minutes: $.prettyDate.template(new FuncSource('{0} минуту назад', '{0} минуты назад', '{0} минут назад')),
		hour: 'Час назад',
		hours: $.prettyDate.template(new FuncSource('{0} час назад', '{0} часа назад', '{0} часов назад')),
		yesterday: 'Вчера',
		dayBeforeYesterday: 'Позавчера',
		days: $.prettyDate.template(new FuncSource('{0} день назад', '{0} дня назад', '{0} дней назад')),
		week: 'Неделю назад',
		weeks: $.prettyDate.template(new FuncSource('{0} неделю назад', '{0} недели назад', '{0} недель назад')),
		month: 'Месяц назад',
		months: $.prettyDate.template(new FuncSource('{0} месяц назад', '{0} месяца назад', '{0} месяцев назад')),
		year: 'Год назад',
		years: $.prettyDate.template(new FuncSource('{0} год назад', '{0} года назад', '{0} лет назад'))
	};
})();