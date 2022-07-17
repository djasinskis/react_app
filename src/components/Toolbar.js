import {useContext} from 'react';
import {Link} from "react-router-dom";
import mainContext from "../context/mainContext";
import gameData from "../assets/gameData";

const Toolbar = () => {
    const {gold,setMonster,setModal,monster,setMonsterHP} = useContext(mainContext)

    function gotoArena() {

          let randomNumber = Math.floor(Math.random()*gameData.monsters.length).toFixed(0)
        setMonster(gameData.monsters[randomNumber])
        
        setModal(true)
        console.log(monster)
      
        
    }

    return (
        
        <div className="d-flex space-btw toolbar">
            <Link className='Main' to="/">Main</Link>
            <Link className='Shop' to="/shop">Shop</Link>

            <div>
                Gold: {gold}
            </div>
            <Link className='Arena' onClick={gotoArena} to="/arena">Arena</Link>
            </div>
      
    );
};

export default Toolbar;