import {useContext} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom"

const CharactedCard = ({char,location}) => {

    
    const nav = useNavigate()
    const {setPlayer, setGold,setMaxdamage,maxDamage, equipWeapon,setPlayerHP,playerHPbar,playerHP} = useContext(mainContext)
    let damage 

    function selectChar() {
        setPlayer(char)
        setGold(char.gold)
        setMaxdamage(char.damage)
        setPlayerHP(char.health)
        nav('/menu')
        
    }
    
        if(equipWeapon ? damage = maxDamage : damage = char.damage )
    return (
        <div className="char" onClick={selectChar}>
            <img src={char.image} alt=""/>
            <div>Race: {char.race}</div>
            <div>Health: {char.health} / {playerHP}</div>
            
            <div className="hpwrapper"> <div style={{width: playerHPbar + "%"}} className='hpbar'></div> </div>
           
            <div> Damage: {damage} </div>
            <div>Start Gold: {char.gold}</div>
        </div>
    );
};

export default CharactedCard;