import React from 'react';
import {gql, useQuery} from "@apollo/client";

const GET_CHARACTERS = gql`
    query{
        characters{
        results{
            id
            name 
            image 
        }
        }
    }
`


const UseCharacters = () => {
    const {error, data, loading} = useQuery(GET_CHARACTERS)
    console.log({error, data, loading})
    return {
        error,
        data,
        loading
    }

};

export default UseCharacters;