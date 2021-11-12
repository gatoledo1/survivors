import { gql } from "@apollo/client";

export const Infect = gql`
  mutation Infect($id: ID!, $attr: Boolean!){
    Infected(id: $id, input: {
      infectado: $attr
    }) {
      name
      infectado
    }
  }
`;