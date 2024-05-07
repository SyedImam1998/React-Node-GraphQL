import { gql } from "@apollo/client";

export const CreateUser = gql`
mutation createUser($first_name:String! $last_name:String! $email:String! $password:String! $gender:String!){
    createUser(first_name:$first_name last_name:$last_name email:$email password:$password gender:$gender){
        id
    }
}
`;
