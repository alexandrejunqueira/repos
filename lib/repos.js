'use strict';

const https = require('https');

module.exports = username => {
	return new Promise((resolve, reject) => {
		const conf = {
			host: 'api.github.com',
			path: `/users/${username}/repos`,
			headers: {
				'User-Agent': 'node'
			}
		};
		const request = https.get(conf, response => {
			if (response.statusCode !== 200) {
				return reject();
			}
			const body = [];
			response.on('data', chunk => body.push(chunk));
			response.on('end', () => {
				const repos = JSON.parse(body.join('')).map(repo => {
					return {
						name: repo.name,
						url: repo.html_url,
						description: repo.description
					}
				});
				return resolve(repos);
			});
		});
		request.on('error', () => reject());
	});
};
