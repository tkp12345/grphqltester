import UseCharacters from "../hooks/useCharacters";
import {Link} from "react-router-dom";
import Pagination from "../components/Pagination";
import React from "react";


type CharacterType = {
    name : string;
    id : string;
    image : string | undefined;
}

export default function CharactersList(){
    const {error, loading, data} = UseCharacters();


    if(loading) return <div>spinner...</div>;

    if(error) return <div>error occur</div>;

    return (
        <div className="CharacterList">
            <Pagination/>
            {data.characters.results.map((character:CharacterType)=>{
                return(
                    <Link to={`/${character.id}`}>
                        <img src={character.image}/>
                        <h2>{character.name}</h2>
                    </Link>

                )
            })}
        </div>
    )
 }