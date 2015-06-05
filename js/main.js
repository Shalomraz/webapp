window.addEventListener('load', init, false);

options = {
	done: function(json) {
		console.log(json);
		if(json.hasOwnProperty('notification')) {
			var notifications = document.querySelector('.messages');
			var json
		}
	},
	fail: function(err) {
		console.log(err);
	}
};

function init() {
    UTILS.ajax('data/config.json', options);

}

