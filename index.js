'use strict';

const cache = require('./lib/cache');
const repos = require('./package.json').repos;

module.exports = (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');

	cache.setUsername(repos.username);

	if (repos.duration) {
		cache.setDuration(repos.duration);
	}

	if (cache.isValid()) {
		res.end(cache.getData());
	} else {
		console.log('atualizando cache');
		cache.update()
			.then(() => res.end(cache.getData()))
			.catch(err => {
				console.log(err.message);
				res.end(cache.getData());
			});
	}
};
