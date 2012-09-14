(function ($, QUnit) {

	QUnit.module('prettyDate', {
		setup: function () {
			this.orgNow = $.prettyDate.now;
			this.orgMessages = $.prettyDate.messages;
			$.prettyDate.messages = $.extend(true, {}, this.orgMessages);
		},
		teardown: function () {
			// Restore
			$.prettyDate.now = this.orgNow;
			$.prettyDate.messages = this.orgMessages;
		}
	});

	// Fixed "now" to make unit testing easier
	$.prettyDate.now = function () {
		// 2008-01-28 22:25:00.000 UTC
		return new Date(1201559100000);
	};
	var $main = $('#main a'),
		$alt = $('#alternate a');
		

	QUnit.test('Plain', 2, function (assert) {
		var expected = [
			'fallback',
			'just now',
			'1 minute ago',
			'4 minutes ago',
			'2 hours ago',
			'Yesterday',
			'2 days ago',
			'1 week ago',
			'2 weeks ago',
			'1 month ago',
			'2 months ago',
			'1 year ago',
			'2 years ago'
		];
		assert.deepEqual(
			$.map($main.toArray(), function (el) {
				return $.prettyDate.format(el.title) || 'fallback';
			}),
			expected,
			'jQuery.prettyDate'
		);
		assert.deepEqual(
			$.map($main.prettyDate().toArray(), function (el) {
				return $(el).text();
			}),
			expected,
			'.prettyDate()'
		);
	});

	QUnit.test('Local timezone has influence as expected', function (assert) {
		$.prettyDate.now = function () {
			var fixed = new Date(1201559100000),
				local = new Date();
			// Corrupt "now" with local computer timezone
			fixed.setTime(fixed.getTime() - (local.getTimezoneOffset() * 60 * 1000));
			return fixed;
		};
		var hourOffset = Math.floor(new Date().getTimezoneOffset() / 60);
		assert.deepEqual(
			$.map($main.eq(4).prettyDate().toArray(), function (el) {
				return $(el).text();
			}),
			[(2 - hourOffset) + ' hours ago']
		);
	});

	QUnit.test('messages', function (assert) {
		$.prettyDate.messages.hours = $.prettyDate.template('text {0} text');
		$main.eq(4).prettyDate();
		assert.equal($main.eq(4).text(), 'text 2 text');
	});

	QUnit.test('option "attribute"', function (assert) {
		assert.deepEqual(
			$.map($alt.prettyDate({ attribute: 'data-mytimestamp' }).toArray(), function (el) {
				return $(el).text();
			}),
			['2 hours ago']
		);
	});

}(jQuery, QUnit));
