import { gql } from "@apollo/client";

export const Survivors = gql`
  query {
    survivors{
      id
      name
      attribute
      email
      infectado
    }
  }
`;