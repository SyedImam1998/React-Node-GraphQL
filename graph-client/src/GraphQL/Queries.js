import { gql } from "@apollo/client";

export const loadUsers = gql`
  query {
    getAllUsers {
      first_name
    }
  }
`;
// getAllUsers{
//     first_name,
//     last_name,
//   }