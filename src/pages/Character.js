import React from 'react';
import UseCharacter from "../hooks/useCharacter";
import {useParams} from "react-router-dom";

const Character =  () => {
    const {id} = useParams()
    const {error, loading, data} =UseCharacter(id)

    console.log({error, loading, data});


    if(error) return <div>error occur in Character</div>
    return (
        <div className="Character">
            <img src={data.characters.image} width={750} height={750}/>
            <div className="Character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className="Character-episode">
                    {data.characters.episode.map((episode)=>{
                        return(
                        <div>
                            {episode.name}
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Character;