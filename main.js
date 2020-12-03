chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
		});
	});
});