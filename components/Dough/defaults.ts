import { Calculator } from './types';

const defaults : Calculator = {
	flour: {
		label     : 'flour',
		percentage: 100,
		weight    : 500,
	},
	ingredients: [
		{
			label     : 'water',
			percentage: 65,
			weight    : 325,
		},
		{
			label     : 'salt',
			percentage: 2,
			weight    : 10,
		},
		{
			label     : 'yeast',
			percentage: 2,
			weight    : 10,
		},
	],
	total: 845,
}

export default defaults;
