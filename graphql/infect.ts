import { gql } from "@apollo/client";

export const Infect = gql`
  mutation Infect($id: ID!){
    Infected(id: $id, input: {
      infectado: true
    }) {
      name
      infectado
    }
  }
`;