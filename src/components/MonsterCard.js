import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import mainContext from "../context/mainContext";

function MonsterCard({monsters}){

const {monsterHPbar,monsterHP,setMonsterHP,setMonMaxDmg} = useContext(mainContext)


    setMonsterHP(monsters.health)
    setMonMaxDmg(monsters.maxDamage)
    

 
    
    return(
         <div className="monster" >
            <img src={monsters.image} alt=""/>
            <div>Name: {monsters.name}</div>
                <div>Health: {monsterHP} / {monsters.health}</div>
                <div>Damage: {monsters.maxDamage}</div>
            <div className="Monsterhpwrapper"> <div style={{width: monsterHPbar + "%" }} className='Monsterhpbar'></div> </div>
            
        </div>
    )
}

export default MonsterCard;