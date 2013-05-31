/** 
* Ukrainian localization
* Author: Menelion Elensúle
* https://github.com/Oire/
*/

$.prettyDate.messages = (function() {

	var FuncSource = function(few, many) {
		this.few = few;
		this.many = many;
	};

	FuncSource.prototype = {
		replace: function(regexp, amt) {
			return amt % 10 === 1 && amt % 100 !== 11 ? amt: (amt % 10 >= 2 && amt % 10 <= 4 && (amt % 100 < 10 || amt % 100 >= 20)? this.few.replace(regexp, amt): this.many.replace(regexp, amt));
		}
	};

	return {
		now: 'Щойно',
		minute: '1 хвилину тому',
		minutes: $.prettyDate.template(new FuncSource('{0} хвилини тому', '{0} хвилин тому')),
		hour: '1 годину тому',
		hours: $.prettyDate.template(new FuncSource('{0} години тому', '{0} годин тому')),
		yesterday: 'Вчора',
		dayBeforeYesterday: 'Позавчора',
		days: $.prettyDate.template(new FuncSource('{0} дні тому', '{0} днів тому')),
		week: '1 тиждень тому',
		weeks: $.prettyDate.template(new FuncSource('{0} тижні тому', '{0} тижнів тому')),
		month: '1 місяць тому',
		months: $.prettyDate.template(new FuncSource('{0} місяці тому', '{0} місяців тому')),
		year: '1 рік тому',
		years: $.prettyDate.template(new FuncSource('{0} роки тому', '{0} років тому'))
	};
})();