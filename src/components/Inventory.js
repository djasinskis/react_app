import {useContext} from 'react';
import mainContext from "../context/mainContext";
import SingleItem from "./SingleItem";

const Inventory = () => {
    const {inventory} = useContext(mainContext)

    return (
        <div>
            {inventory.map((x, i) => <SingleItem key={i} index={i} item={x} location="inventory"/>)}
        </div>
    );
};

export default Inventory;