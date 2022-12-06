import React from "react";
import UseCharacters from "../hooks/useCharacters";
import {Link} from "react-router-dom";


export default function CharactersList(){
    const {error, loading, data} = UseCharacters();


    if(loading) return <div>spinner...</div>;

    if(error) return <div>error occur</div>;

    return (
        <div className="CharacterList">
            {data.characters.results.map((character)=>{
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