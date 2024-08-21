import { CreateUser } from "@/app/(auth)/signup/types/create-user.type";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
    mutation CreateUser($userdto: CreateUserDto!) {
        createUser(userdto: $userdto) {
            firstName
            lastName
        }
    }
`;

export const useCreateUser = (user: CreateUser) => {
    const [createUser, { error, data, loading }] = useMutation(CREATE_USER, {
        variables: user,
    });
    return {
        createUser,
        error,
        data,
        loading,
    };
};
