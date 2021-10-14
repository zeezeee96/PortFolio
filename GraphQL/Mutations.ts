import { gql } from "@apollo/client";

export const CREATE_MESSAGE = gql`
  mutation addMessage(
    $firstName: String!
    $lastName: String!
    $email: String!
    $mobileNumber: String!
    $message: String!
  ) {
    addMessage(
      firstName: $firstName
      lastName: $lastName
      email: $email
      mobileNumber: $mobileNumber
      message: $message
    ) {
      id
    }
  }
`;
