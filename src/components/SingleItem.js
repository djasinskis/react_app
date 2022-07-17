import {useContext} from 'react';
import mainContext from "../context/mainContext";

const SingleItem = ({item, location, index}) => {
    
    

    const {inventory, setInventory, gold, setGold,maxDamage,setMaxdamage,equipWeapon,setEquipWeapon,setModal} = useContext(mainContext)

    let template

    {
        if(Object.keys(item).length === 5) {
            template = <div className="grow3 d-flex flex-column j-center">
                <div>Damage: {item.maxDamage}</div>
                <div>Price: {item.price}</div>
            </div>
        }

        if(Object.keys(item).length === 4) {
            template = <div className="grow3 d-flex flex-column j-center">
                <div>{item.title}</div>
                <div>Price: {item.price}</div>
            </div>
        }

    }


    function itemAction() {

        if (location === "shop") {
            if(gold >= item.price) {
                setInventory([...inventory, item])
                setGold(gold-item.price)
            }
        }

        if (location === "inventory") {
            const leftItems = inventory.filter((x, i) => i !== index)

            console.log(leftItems)

            setGold(gold + item.price / 2)
            setInventory([...leftItems])
        }

        if(location === "arena"){
            
            setMaxdamage(maxDamage + item.maxDamage)
            setEquipWeapon(true)
            setModal(false)
            console.log(maxDamage)
            
        }
    }


    return (
        <div style={equipWeapon ? {border: "2px solid red"} : {border: ""}}  className="d-flex singleItem" onClick={itemAction}>

            <div  className="grow1">
                <img  src={item.image} alt=""/>
            </div>

            {template}

        </div>
    );
};

export default SingleItem;