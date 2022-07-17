
import Toolbar from "../components/Toolbar";
import CharactedCard from "../components/CharactedCard";

import {useContext} from 'react';
import mainContext from "../context/mainContext";

const MainMenuPage = () => {
    const {player} = useContext(mainContext)


    return (
        <div>
            <Toolbar/>
            <div className="d-flex">

                <div className="grow1">
                    <CharactedCard char={player}/>
                </div>

                <div className="grow1">

                </div>

            </div>
        </div>
    );
};

export default MainMenuPage;