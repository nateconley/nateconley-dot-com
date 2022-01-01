import { gql } from "@apollo/client";

// Get code posts.
const GET_CODE = gql`
	query Code($num: Int!) {
		posts(first: $num) {
			nodes {
				id
				title
				slug
				excerpt
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
	query Food($num: Int!) {
		foods(first: $num) {
			nodes {
				id
				title
				slug
				excerpt
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

export { GET_CODE, GET_FOOD, GET_SINGLE_CODE, GET_SINGLE_FOOD };
