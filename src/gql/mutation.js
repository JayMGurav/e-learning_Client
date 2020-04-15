import { gql } from '@apollo/client';

const SIGN_IN = gql`
  mutation loginMutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGN_UP = gql`
  mutation signUpMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

export { SIGN_IN, SIGN_UP };
