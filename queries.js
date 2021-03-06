import { gql } from "@apollo/client";

// Get code posts.
const GET_CODE = gql`
	query Code($num: Int!, $after: String!) {
		posts(first: $num, after: $after) {
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
			}
			edges {
				cursor
			}
			nodes {
				id
				title
				slug
				excerpt
				date
				featuredImage {
					node {
					altText
					uri
					}
				}
			}
		}
	}
`;

const GET_CODE_BACKWARD = gql`
	query Code($num: Int!, $before: String!) {
		posts(last: $num, before: $before) {
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
			}
			edges {
				cursor
			}
			nodes {
				id
				title
				slug
				excerpt
				date
				featuredImage {
					node {
					altText
					uri
					}
				}
			}
		}
	}
`;

// Get food posts.
const GET_FOOD = gql`
	query Food($num: Int!, $after: String!) {
		foods(first: $num, after: $after) {
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
			}
			edges {
				cursor
			}
			nodes {
				id
				title
				slug
				excerpt
				date
				featuredImage {
					node {
					altText
					uri
					}
				}
			}
		}
	}
`;

const GET_FOOD_BACKWARD = gql`
	query Food($num: Int!, $before: String!) {
		foods(last: $num, before: $before) {
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
			}
			edges {
				cursor
			}
			nodes {
				id
				title
				slug
				excerpt
				date
				featuredImage {
					node {
					altText
					uri
					}
				}
			}
		}
	}
`;

// Get a code post.
const GET_SINGLE_CODE = gql`
	query SingleCode($slug: String!) {
		postBy(slug: $slug) {
			title
			date
			content
			excerpt
			featuredImage {
				node {
				altText
				uri
				}
			}
		}
	}
`;

// Get a food post.
const GET_SINGLE_FOOD = gql`
	query SingleFood($slug: String!) {
		foodBy(uri: $slug) {
			title
			date
			content
			excerpt
			featuredImage {
				node {
				altText
				uri
				}
			}
		}
	}
`;

export { GET_CODE, GET_CODE_BACKWARD, GET_FOOD, GET_FOOD_BACKWARD, GET_SINGLE_CODE, GET_SINGLE_FOOD };
