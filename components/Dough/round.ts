//
// Round a number for the calculator.
// If a number is less than 20 grams,
// round to the tenth. Otherwise,
// round to whole number.
//
function roundWeight(weight: number) : number {

	if ( weight < 20 ) {
		return Math.round(weight * 10) / 10;
	}

	return Math.round(weight);
}

export default roundWeight;
