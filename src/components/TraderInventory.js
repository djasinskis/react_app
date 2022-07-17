import {useState} from 'react';
import GameData from "../assets/gameData";
import SingleItem from "./SingleItem";

const TraderInventory = () => {
    const [show, setShow] = useState("weapons")


    console.log(GameData.trader[show])

    return (
        <div>
            <div className="d-flex">
                <div style={{backgroundColor: show === "weapons" ? '#f1f1f1' : "white" }}
                     onClick={() => setShow("weapons")}
                     className="grow1 text-center p-10">Weapons</div>

                <div style={{backgroundColor: show !== "weapons" ? '#f1f1f1' : "white" }}
                     onClick={() => setShow("potions")}
                     className="grow1 text-center p-10">Potions</div>
            </div>

            <div>
                {GameData.trader[show].map((x, i) => <SingleItem item={x} key={i} location="shop"/>)}
            </div>

        </div>
    );
};

export default TraderInventory;