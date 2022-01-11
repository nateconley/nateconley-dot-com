import { Ingredient } from './types';
import { useContext } from 'react';
import Context from './Context';

function IngredientRow({ ingredient, index }: { ingredient: Ingredient, index: number }) {

	const labelId                = `ingredient-label-index-${ index }`;
	const percentId              = `ingredient-percent-index-${ index }`;
	const { dispatchCalculator } = useContext(Context);

	return (
		<div>
			<label htmlFor={ labelId }>Ingredient Name</label>
			<input
				id={ labelId }
				type="text"
				value={ ingredient.label }
				onChange={ (event) => {
					dispatchCalculator({
						type           : 'UPDATE_INGREDIENTS_LABEL',
						ingredientIndex: index,
						ingredientLabel: event.target.value,
					});
				} }
			/>

			<p>Ingredient Weight (g): {ingredient.weight}</p>

			<hr/>

		</div>
	);
}

export default IngredientRow;
