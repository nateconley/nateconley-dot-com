import { gql } from "@apollo/client";

// Get code posts.
const GET_CODE = gql`
	query Code($num: Int!) {
		posts(first: $num, where: {categoryId: 4}) {
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
		posts(first: $num, where: {categoryId: 3}) {
			nodes {
				id
				title
			}
		}
	}
`;

export { GET_CODE, GET_FOOD };
