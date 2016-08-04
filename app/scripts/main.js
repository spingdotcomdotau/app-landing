'use strict';

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['1', '2', '3', '4'],
		sectionsColor: ['#FED340', '#f0f7f9', '#8867AB', '#f5f5f0'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['', '', '', ''],
		afterRender: function () {
				//playing the video
				$('video').get(0).play();
		}
	});
});
