import {gql, useQuery,} from "@apollo/client";

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!){
        character(id: $id){
            name
            id
            image
            episode{
                name
                episode
            }
        }
        }
`

const UseCharacter = (id:string) => {
    const {data, error, loading} = useQuery(GET_CHARACTER,{
        variables:{
          id,
        },
    })

    console.log({data, error, loading});

    return {
        data,
        error,
        loading
}
};

export default UseCharacter;