import './App.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import mainContext from "./context/mainContext";
import SelectCharacterPage from "./pages/SelectCharacterPage";
import MainMenuPage from "./pages/MainMenuPage";
import ShopPage from "./pages/ShopPage";
import ArenaPage from './pages/ArenaPage';

function App() {
    const [player, setPlayer] = useState(null)
    const [monster,setMonster] = useState(null)
    const [gold, setGold] = useState(0)
    const [inventory, setInventory] = useState([])
    const [equipWeapon ,setEquipWeapon] = useState(false)
    const [maxDamage, setMaxdamage] = useState(0)
    const [modal,setModal] = useState(true)
    const [playerHP, setPlayerHP] = useState(0)
    const [monsterHP, setMonsterHP] = useState(0)
    const [playerHPbar, setPlayerHPbar ] = useState(100)
    const [monsterHPbar, setMonsterHPbar ] = useState(100)
    const [monMaxDmg, setMonMaxDmg] = useState(0)
    

    const values = {
        player,
        setPlayer,
        gold,
        setGold,
        inventory,
        setInventory,
        monster,
        setMonster,
        maxDamage,
        setMaxdamage,
        equipWeapon,
        setEquipWeapon,
        modal,
        setModal, 
        playerHP, 
        setPlayerHP,
        monsterHP, 
        setMonsterHP,
        playerHPbar, 
        setPlayerHPbar,
        monsterHPbar, 
        setMonsterHPbar,
        monMaxDmg,
        setMonMaxDmg
    }

    return (
        <mainContext.Provider value={values}>

            <div className="App">

                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<SelectCharacterPage/>}/>
                        <Route path="/menu" element={<MainMenuPage/>}/>
                        <Route path="/shop" element={<ShopPage/>}/>
                        <Route path="/arena" element={<ArenaPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>

        </mainContext.Provider>
    );
}

export default App;


