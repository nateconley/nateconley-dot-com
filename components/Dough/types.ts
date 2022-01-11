interface Ingredient {
	label     : string,
	percentage: number,
	weight    : number,
}

interface Calculator {
	flour      : Ingredient,
	ingredients: Ingredient[],
	total      : number,
}

export { type Ingredient, type Calculator };
