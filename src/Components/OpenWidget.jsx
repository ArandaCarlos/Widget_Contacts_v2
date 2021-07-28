import {useState, useEffect} from "react";
import { useZohoContext } from "../Context/ZohoContext";
import SearchStores from "./SearchStores";

const OpenWidget= (props) => {

    const{id}=useZohoContext();
    const{stores}=useZohoContext();
    
    useEffect(() => {
        console.log(id)
        
    }, [id])


    const getStores = ()=>{
        console.log(stores)
        props.setLink("searchStores")

    }
    const getBrand = ()=>{
        console.log(id)
    }

    return ( 
        <div>
            <button onClick={getStores}>
                Stores
            </button>
            <button onClick={getBrand}>
                Brands
            </button>
        </div>
     );

}
 
export default OpenWidget
;