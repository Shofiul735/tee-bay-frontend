import { gql, useQuery } from "@apollo/client";

const GET_QUERY = gql`
    query {
        getAllCategory {
            id
            name
        }
    }
`;

export const useGetAllCategories = () => {
    const {data,error,loading} = useQuery(GET_QUERY);
    return {
        data,
        error,
        loading
    }
}
