import { useState, useEffect} from "react";
import { useZohoContext } from "../Context/ZohoContext";

const SearchStores = (props) => {

    const {stores} = useZohoContext();
    const [id, setId] = useState();

    useEffect(() => {
        console.log(stores)
    }, [stores])

    const searchStore = ()=>{
    }
    //let store = stores.filter( store => store.id == id);
    
    const handleInputChage = (e) =>{
        console.log(e);
    }
    return ( 
        
        <div>
            <label htmlFor="stores">Ingrese ID de Store</label>
            <input type="text" onChange={(event)=>{handleInputChage(event)}}/>
            <button onClick={searchStore()}>Search</button>
            
        </div>
     );
}
 
export default SearchStores;