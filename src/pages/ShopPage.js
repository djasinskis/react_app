import React from 'react';
import TraderInventory from "../components/TraderInventory";
import Inventory from "../components/Inventory";
import Toolbar from "../components/Toolbar";

const ShopPage = () => {
    return (

        <div>
            <Toolbar/>
            <div className="d-flex">

                <div className="grow1">
                    <TraderInventory/>
                </div>

                <div className="grow1 ml-10" >
                    <Inventory/>
                </div>

            </div>
        </div>


    );
};

export default ShopPage;