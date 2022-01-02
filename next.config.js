const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

let securityHeaders = [
	{
		key  : 'Content-Security-Policy',
		value: [
			"default-src 'self' backend.nateconley.com www.google-analytics.com",
			"script-src 'self' 'unsafe-inline' www.googletagmanager.com",
			"style-src 'self' fonts.googleapis.com 'unsafe-inline'",
			"font-src fonts.gstatic.com; object-src 'none'",
			"img-src 'self' data: www.googletagmanager.com"
		].join(';'),
	},
];

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			images: {
				domains: [ 'backend.nateconley.com' ],
			},
		};
	}

	return {
		images: {
			domains: [ 'backend.nateconley.com' ],
		},
		async headers() {
			return [
				{
					// Apply these headers to all routes in your application.
					source: '/(.*)',
					headers: securityHeaders,
				},
			]
		},
	}
}
