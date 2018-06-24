'use strict';

const repos = require('./repos');

const conf = {
	username: null,
	duration: null,
	defaultDuration: 5
};

const data = {
	repos: [],
	lastUpdate: null
};

exports.setUsername = username => {
	conf.username = username;
};

exports.setDuration = minutes => {
	conf.duration = minutes;
};

exports.isValid = () => {
	const duration = conf.duration || conf.defaultDuration;
	return data.lastUpdate && Math.round((Date.now() - data.lastUpdate) / 60000) < duration;
};

exports.getData = () => {
	return JSON.stringify(data.repos);
};

exports.update = () => {
	return new Promise((resolve, reject) => {
		if (!conf.username) {
			return reject(new Error('username is undefined'));
		}
		repos(conf.username)
			.then((repos) => {
				data.repos = repos;
				data.lastUpdate = Date.now();
				resolve();
			})
			.catch(() => {
				data.repos = [];
				data.lastUpdate = null;
				resolve();
			});
	});
};
