import React from "react";
import {useQuery, gql} from "@apollo/client"


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

export default function CharactersList(){
    const {error, loading, data} = useQuery(GET_CHARACTERS);

    console.log({error, loading, data})
 }