import React from 'react';
import CharactedCard from "../components/CharactedCard";
import gameData from "../assets/gameData";


const SelectCharacterPage = () => {
    return (
        <div className="d-flex flex-wrap">
            {gameData.characters.map(x => <CharactedCard key={x.race} char={x}/>)}
            
        </div>
    );
};

export default SelectCharacterPage;