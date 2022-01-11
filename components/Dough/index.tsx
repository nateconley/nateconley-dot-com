import { useReducer } from 'react';

import type { Calculator } from './types';
import reducer from './reducer';
import IngredientRow from './IngredientRow';
import defaultCalculatorObject from './defaults';
import Context from './Context';

function Dough({ defaultCalculator = defaultCalculatorObject } : { defaultCalculator?: Calculator }) {

	const [calculator, dispatchCalculator] = useReducer(reducer, defaultCalculator);
	const flourWeightId = 'flour-weight';

	return (
		<div>
			<Context.Provider value={{ dispatchCalculator }}>
				<label htmlFor={ flourWeightId }>Flour Weight (g)</label>
				<input
					id={ flourWeightId }
					type="number"
					value={ calculator.flour.weight }
					min="0"
					onChange={event => {
						dispatchCalculator({
							type       : 'UPDATE_FLOUR_WEIGHT',
							flourWeight: Number.parseFloat(event.target.value) || 0,
						});
					}}
				/>


				{ calculator.ingredients.map((ingredient, index) => {
					return <IngredientRow key={index} index={index} ingredient={ingredient} />
				}) }

				<p>Total: {calculator.total}</p>

			</Context.Provider>
		</div>
	);

}

export default Dough;
