window.addEventListener('load', init, false);

options = {
	done: function(json) {
		console.log(json);
	},
	fail: function(err) {
		console.log(err);
	}
};

function init() {
	UTILS.ajax('data/config.json',options);
	console.log('ok')
}
