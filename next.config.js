const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

let securityHeaders = [
	{
		key  : 'Content-Security-Policy',
		value: "default-src 'self' backend.nateconley.com; script-src 'self' 'unsafe-inline'; style-src 'self' fonts.googleapis.com 'unsafe-inline'; font-src fonts.gstatic.com; object-src 'none'; img-src 'self' data:;",
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
