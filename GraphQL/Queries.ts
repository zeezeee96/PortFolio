import { gql } from "@apollo/client";

export const LOAD_MESSAGES = gql`
  query {
    AllMessages {
      id
      firstName
    }
  }
`;
