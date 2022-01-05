import { useEffect, useReducer, useCallback } from 'react';
import styles from './Dough.module.scss';

function Dough( props ) {

	// Setup a reducer to handle updates of the app.
	const reducer = function(previousState, action) {

		switch (action.type) {

			//
			// When flour is updated, ingredients weights
			// and total weight must be re-calculated.
			//
			case 'UPDATE_FLOUR': {
				const flour = Number.parseInt(action.value);

				// Recalculate ingredient weights.
				const ingredients = [...previousState.ingredients].map( ingredient => {
					ingredient.weight = Math.round( flour * ( ingredient.percentage / 100 ) );
					return ingredient;
				} );

				// Recalculate the total weight.
				const ingredientsTotal = ingredients.reduce((prev, next) => {
					return prev + Number.parseInt(next.weight);
				}, 0);

				return {
					...previousState,
					flour      : flour,
					ingredients: ingredients,
					total      : ingredientsTotal + flour,
				};
			}

			// Updating ingredient label has no side-effects.
			case 'UPDATE_INGREDIENTS_LABEL': {
				return {
					...previousState,
					ingredients: action.value,
				};
			}

			//
			// When ingredient value is updated,
			// total weight must be re-calculated.
			//
			case 'UPDATE_INGREDIENTS_VALUE': {
				const ingredients = action.value;

				// Recalculate the total weight.
				const ingredientsTotal = ingredients.reduce((prev, next) => {
					return prev + Number.parseInt(next.weight);
				}, 0);

				return {
					...previousState,
					ingredients: ingredients,
					total      : ingredientsTotal + previousState.flour,
				};
			}

			//
			// When total weight is updated, flour and ingredient
			// total weights must be recalculated.
			//
			case 'UPDATE_TOTAL': {
				const total = Number.parseInt(action.value);

				const ingredientTotalPercentage = previousState.ingredients.reduce( ( prev, next ) => {
					return prev + Number.parseFloat( next.percentage );
				}, 0 );
				// Get the percentage of total that will be flour.
				const flourPercentageOfTotal = 100 / ( 100 + Number.parseInt( ingredientTotalPercentage ) );
				const flour = Math.round( flourPercentageOfTotal * total );

				// Recalculate ingredient weights.
				const ingredients = [...previousState.ingredients].map( ingredient => {
					ingredient.weight = Math.round( flour * ( ingredient.percentage / 100 ) );
					return ingredient;
				} );

				return {
					...previousState,
					flour      : flour,
					ingredients: ingredients,
					total      : total,
				};
			}

			// Default.
			default: {
				throw new Error('No action type specified');
			}
		}
	}

	// Initialize components of the calculator.
	const [components, dispatchComponents] = useReducer(reducer, {
		flour: null,
		ingredients: [
			{
				label     : 'Water',
				percentage: 65,
				weight    : null,
			},
			{
				label     : 'Salt',
				percentage: 2,
				weight    : null,
			},
			{
				label     : 'Yeast',
				percentage: 2,
				weight    : null,
			},
		],
		total: null,
	});

	// Assign object keys to variables for ease of use.
	const { flour,ingredients, total } = components;

	// Update values on render.
	useEffect(() => {
		dispatchComponents({type: 'UPDATE_FLOUR', value: 500})
	}, []);

	// Update an individual ingredient's label.
	function updateIngredientLabel( newLabel, index ) {
		const newIngredients = [...ingredients];
		newIngredients[ index ].label = newLabel;
		// Label change should never trigger external changes.
		dispatchComponents({ type: 'UPDATE_INGREDIENTS_LABEL', value: newIngredients });
	}

	// Update an individual ingredient's percentage.
	function updateIngredientPercentage( value, index ) {
		const newIngredients = [...ingredients];
		const newPercentage  = Number.parseFloat( value );
		newIngredients[ index ].percentage = newPercentage;
		newIngredients[ index ].weight = Math.round( flour * ( newPercentage / 100 ) );
		dispatchComponents({ type: 'UPDATE_INGREDIENTS_VALUE', value: newIngredients });
	}

	return (
		<div className={ styles.calculator }>
			<h1>Dough Calculator</h1>
			<p>Use this dough calculator to get precise measurements to scale recipes up or down based on baker's percentages. Want to make 4 100 gram buns? Modify your percentages and put 400 grams in the total field.</p>
			<table>
				<thead>
					<tr>
						<th>Component</th>
						<th>Percent</th>
						<th>Weight (g)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Flour</td>
						<td>100%</td>
						<td>
							<label htmlFor="flour">Flour (g)</label>
							<input
								id="flour"
								type="number"
								value={ Math.round( flour ) }
								min="1"
								onChange={ ( event ) => {
									dispatchComponents({ type: 'UPDATE_FLOUR', value: event.target.value });
								} }
							/>
						</td>
					</tr>
					{ ingredients.map( (ingredient, index) => {
						const labelId   = `ingredient-label-${ index }`;
						const percentId = `ingredient-percent-${ index }`;
						return (
							<tr key={ index }>
								<td>
									<label htmlFor={ labelId }>Ingredient Name</label>
									<input
										id={ labelId }
										type="text"
										value={ ingredient.label }
										onChange={ ( event ) => {
											updateIngredientLabel( event.target.value, index );
										} }
									/>
								</td>
								<td>
									<label htmlFor={ percentId }>Ingredient Percentage</label>
									<input
										id={ percentId }
										type="number"
										step="0.5"
										min="0"
										value={ ingredient.percentage }
										onChange={ ( event ) => {
											updateIngredientPercentage( event.target.value, index );
										} }
									/>
								</td>
								<td>{ Math.round( ingredient.weight ) }</td>
							</tr>
						);
					} ) }
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td></td>
						<td>
							<label htmlFor="total">Total Weight</label>
							<input
								id="total"
								type="number"
								value={ total }
								onChange={ ( event ) => {
									dispatchComponents({type: 'UPDATE_TOTAL', value: event.target.value});
								} }
							/>
						</td>
					</tr>
				</tfoot>
			</table>
			<h2>To do list:</h2>
			<ul>
				<li>Add ability to add and remove ingredients</li>
				<li>Add better focus management for screen readers</li>
				<li>Add ability to easily print</li>
				<li>Add unit tests</li>
				<li>Make this a reusable component for placement in other recipes</li>
			</ul>
		</div>
	)
}

export default Dough;
