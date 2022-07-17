import { useContext } from "react"

import mainContext from "../context/mainContext"
import SingleItem from "./SingleItem"

function ItemModal(){
    const {inventory,setModal} = useContext(mainContext)

    function closeModal(){
        setModal(false)
    }

    return(
        <div className="modal">

            <div className="innerModalItems">
                <h2>Choose weapon</h2>
            {inventory.map((x, i) => <SingleItem key={i} index={i} item={x} location="arena"/>)}

            <button onClick={closeModal}>Close</button>
            </div>
            

        </div>
    )
}

export default ItemModal;