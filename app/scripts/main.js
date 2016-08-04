'use strict';

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['1', '2', '3', '4'],
		sectionsColor: ['#81d0e1', '#f0f7f9', '#ffbe6a', '#f5f5f0'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['', '', '', '']
	});
});
