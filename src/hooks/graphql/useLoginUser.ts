"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        loginUser(loginUser: { email: $email, password: $password }) {
            jwtToken
        }
    }
`;

export const useLoginUser = () => {
    const router = useRouter();
    const [login, { error, data, loading }] = useMutation(LOGIN_USER);

    const handleLogin = async (email: string, password: string) => {
        try {
            const { data } = await login({ variables: { email, password } });
            if (data && data.loginUser && data.loginUser.jwtToken) {
                localStorage.setItem("jwtToken", data.loginUser.jwtToken);

                router.push("/products");
            }
        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    return {
        handleLogin,
        loading,
        error,
        data,
    };
};
