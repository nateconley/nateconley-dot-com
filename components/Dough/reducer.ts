import type { Calculator, Ingredient } from './types';
import roundWeight from './round';

interface Action {
	type              : string,
	flourWeight?      : number,
	ingredientIndex?  : number,
	ingredientLabel?  : string,
	ingredientPercent?: number,
	total?            : number,
};

function reducer(previousState: Calculator, action: Action) : Calculator {

	switch( action.type ) {
		//
		// Handle flour total.
		// Side effects include updating ingredient weights and total weight.
		//
		case 'UPDATE_FLOUR_WEIGHT': {

			// Save the new flour weight.
			const newFlour : Ingredient = {
				...previousState.flour,
				weight: action.flourWeight,
			};

			// Update ingredient weights.
			const newIngredients : Ingredient[] = previousState.ingredients.map(ingredient => {
				return {
					...ingredient,
					weight: roundWeight(newFlour.weight * (ingredient.percentage / 100)),
				}
			});

			// Update the total, the sum of flour weight and ingredients weight.
			const newTotal: number = newFlour.weight + newIngredients.reduce((previous, next) => {
				return previous + next.weight;
			}, 0);

			return {
				...previousState,
				flour      : newFlour,
				ingredients: newIngredients,
				total      : newTotal,
			};
		}
		//
		// Update the ingredient label only. No side effects.
		//
		case 'UPDATE_INGREDIENTS_LABEL': {

			const newIngredients = [...previousState.ingredients];
			newIngredients[ action.ingredientIndex ].label = action.ingredientLabel;

			return {
				...previousState,
				ingredients: newIngredients,
			};
		}
		default: {
			throw new Error('No registered action type passed.')
		}
	}
}

export default reducer;
