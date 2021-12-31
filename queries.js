import { gql } from "@apollo/client";

// Get code posts.
const GET_CODE = gql`
	query Code($num: Int!) {
		posts(first: $num) {
			nodes {
				id
				title
			}
		}
	}
`;

// Get food posts.
const GET_FOOD = gql`
	query Food($num: Int!) {
		foods(first: $num) {
			nodes {
				id
				title
			}
		}
	}
`;

export { GET_CODE, GET_FOOD };
