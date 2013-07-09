/** 
* Ukrainian localization
* Author: Menelion Elensúle
* https://github.com/Oire/
*/

$.prettyDate.messages = (function() {

	var FuncSource = function(single, few, many) {
		this.single = single;
		this.few = few;
		this.many = many;
	};

	FuncSource.prototype = {
		replace: function(regexp, amt) {
			return amt % 10 === 1 && amt % 100 !== 11 ? this.single.replace(regexp, amt): (amt % 10 >= 2 && amt % 10 <= 4 && (amt % 100 < 10 || amt % 100 >= 20)? this.few.replace(regexp, amt): this.many.replace(regexp, amt));
		}
	};

	return {
		now: 'Щойно',
		minute: 'Хвилину тому',
		minutes: $.prettyDate.template(new FuncSource('{0} хвилину тому', '{0} хвилини тому', '{0} хвилин тому')),
		hour: 'Годину тому',
		hours: $.prettyDate.template(new FuncSource('{0} годину тому', '{0} години тому', '{0} годин тому')),
		yesterday: 'Вчора',
		dayBeforeYesterday: 'Позавчора',
		days: $.prettyDate.template(new FuncSource('{0} день тому', '{0} дні тому', '{0} днів тому')),
		week: 'Тиждень тому',
		weeks: $.prettyDate.template(new FuncSource('{0} тиждень тому', '{0} тижні тому', '{0} тижнів тому')),
		month: 'Місяць тому',
		months: $.prettyDate.template(new FuncSource('{0} місяць тому', '{0} місяці тому', '{0} місяців тому')),
		year: 'Рік тому',
		years: $.prettyDate.template(new FuncSource('{0} рік тому', '{0} роки тому', '{0} років тому'))
	};
})();