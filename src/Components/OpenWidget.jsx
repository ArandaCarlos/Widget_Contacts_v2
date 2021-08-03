import {useState, useEffect} from "react";
import { useZohoContext } from "../Context/ZohoContext";
import EditarContactoBrand from "./EditarContactoBrand";
import EditarContactoRazonSocial from "./EditarContactoRazonSocial";
import EditarContactoStore from "./EditarContactoStore";

const OpenWidget= (props) => {

    const{id}=useZohoContext();
    const{stores}=useZohoContext();
    const[editarBrand, setEditarBrand]=useState(false);
    const[editarStore, setEditarStore]=useState(false);
    const[editarRazonSocial, setEditarRazonSocial]=useState(false);
    
    useEffect(() => {
        console.log(id)
        
    }, [id])


    const getStores = ()=>{
        //props.setLink("searchStores")
        setEditarBrand(false);
        setEditarRazonSocial(false);
        setEditarStore(true);

    }
    const getBrand = ()=>{
        setEditarStore(false);
        setEditarRazonSocial(false);
        setEditarBrand(true);
    }

    const getRazonSocial = () =>{
        setEditarBrand(false);
        setEditarStore(false);
        setEditarRazonSocial(true);
    }

    return ( 
        <div className="text-center">
            
            <div class="container mt-2">
                <div class="row gap-3">
                <button onClick={getBrand} className="btn btn-primary col ">
                    Brands
                </button>
                <button onClick={getStores} className="btn btn-primary col">
                    Stores
                </button>
                <button onClick={getRazonSocial} className="btn btn-primary col">
                    Razón Social
                </button>
                </div>
            </div>
            {editarBrand?
                <div className=" container mt-4">
                    <EditarContactoBrand/>
                </div>: ""
                // <div className="mt-5 ">
                //     {"Dependiendo el modulo que seleccione se enlistaran los contactos asociados al mismo"}
                // </div>
                
            }
            {editarStore?
                <div className="text-center container mt-4">
                    <EditarContactoStore/>
                </div>:""
            }
            {editarRazonSocial?
                <div className="text-center container mt-4">
                    <EditarContactoRazonSocial/>
                </div>:""
            }
            
        </div>
        
     );

}
 
export default OpenWidget
;