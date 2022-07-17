import { useContext } from "react";
import CharactedCard from "../components/CharactedCard";
import MonsterCard from "../components/MonsterCard";
import Toolbar from "../components/Toolbar";
import mainContext from "../context/mainContext";
import gameData from "../assets/gameData";
import Inventory from "../components/Inventory";
import SingleItem from "../components/SingleItem";
import ItemModal from "../components/ItemModal";


function ArenaPage(){
const {player,monster,modal,playerHP,setMonsterHP, monsterHP,maxDamage,setPlayerHPbar,setMonsterHPbar,playerHPbar,monsterHPbar,setMonster,monMaxDmg, setMonMaxDmg} = useContext(mainContext)

function Attack(){

    function setnewMonster(){

           let randomNumber = Math.floor(Math.random()*gameData.monsters.length).toFixed(0)
        setMonster(gameData.monsters[randomNumber])
    }
  
    if(monsterHPbar > 0 ) {
         setMonsterHPbar(monsterHPbar - (maxDamage * 100 / monsterHP).toFixed(0) );
        setPlayerHPbar(playerHPbar - (monMaxDmg *100 / playerHP).toFixed(0))
        setMonsterHP(monsterHP - maxDamage)
        console.log(maxDamage)
        console.log(monsterHP)
        
         
    } else
    { 
        
        setnewMonster()
        setMonsterHPbar(100)
        setMonsterHP(monsterHP - maxDamage)
    }
   
    
}
 

    return(
        
        <div className="arena">
            <div>
            <Toolbar/>
            <div className="d-flex ">
                 <div className="grow1">
                     <CharactedCard char={player}  location ="arena"/>
                     
                </div>
                <div className="grow1 attackBtn">

                    <button onClick={Attack}>Attack</button>

                    </div>
                <div className="grow1">
                   
                   <MonsterCard  monsters={monster}/>

                </div>
            </div>
       
            </div>
            {modal && <ItemModal />}
        </div>
    )
}

export default ArenaPage;