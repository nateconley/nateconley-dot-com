function formatDate( rawDate ) {
	const dateObj = new Date( rawDate );
	return new Intl.DateTimeFormat(
		'en-US',
		{
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}
	).format( dateObj );
}

export { formatDate };
