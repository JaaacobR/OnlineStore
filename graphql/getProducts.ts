import { gql } from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
  query {
    products {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`;
