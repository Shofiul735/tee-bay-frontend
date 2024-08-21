"use client";

import { CreateUser } from "@/app/(auth)/signup/types/create-user.type";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const CREATE_USER = gql`
    mutation CreateUser($userdto: CreateUserDto!) {
        createUser(user: $userdto) {
            firstName
            lastName
        }
    }
`;

export const useCreateUser = () => {
    const route = useRouter();
    const [createUserMutation, { error, data, loading }] =
        useMutation(CREATE_USER);

    const createUser = async (user: any, notificationCallBack: () => void) => {
        const payload = {
            variables: {
                userdto: user,
            },
        };
        console.log(payload);
        await createUserMutation({
            variables: payload,
            onCompleted: () => {
                route.push("/login");
            },
            onError: (error) => {
                console.error("Error occurred during user creation:", error);
                notificationCallBack();
            },
            onQueryUpdated: () => {
                console.log("Query update");
            },
        });
    };

    return {
        createUser,
        error,
        data,
        loading,
    };
};
