/* Simplified Chinese */
$.extend($.prettyDate.messages, {
	now: '刚刚',
	minute: '1分钟前',
	minutes: $.prettyDate.template('{0}分钟前'),
	hour: $.prettyDate.template('1小时前'),
	hours: $.prettyDate.template('{0}小时前'),
	yesterday: '昨天',
	dayBeforeYesterday: '前天',
	days: '{0}天前',
	week: '1周前',
	weeks: '{0}周前',
	month: '1个月前',
	months: '{0}个月前',
	year: '1年前',
	years: $.prettyDate.template('{0}年前')
});
