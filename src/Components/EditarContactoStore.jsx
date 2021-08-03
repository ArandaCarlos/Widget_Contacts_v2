import { useState, useEffect} from "react";
import { ZOHO } from "../assets/Zoho";
import { useZohoContext } from "../Context/ZohoContext";
import EditorGlobal from "./EditorGlobal";


const EditarContactoStore = (props) => {

    const {stores,contactos, contactoActual,setContactoActual} = useZohoContext();
    const [record, setRecord] = useState();
    const [edit, setEdit] = useState();
    const [id, setId] = useState();
    const [mostrarContactos, setMostrarContactos] = useState(false);
    const contactosStore = contactos.filter(contacto => (contacto.Rol_Contacto.some(rol => rol.includes("Store Decision Maker")|| rol.includes("Fotografía")|| rol.includes("Credenciales"))));



    useEffect(() => {
        console.log(stores)
    }, [stores])

    const searchStore = ()=>{
        let arrayStores = stores.filter( store => store.Rappi_Store_ID == id);
        console.log(arrayStores[0].id);
        let idStore = arrayStores[0].id;
        setMostrarContactos(true)
    }
    
    
    const handleInputChage = (e) =>{
        console.log(e.target.value);
        setId(e.target.value);
    }

    const editar = (e) =>{
        let id_contacto_actual = e.target.id;
        let user = contactosStore.filter(contacto=> contacto.id == id_contacto_actual)[0];
        console.log(user);

        setContactoActual({
            First_Name: user.First_Name,
            Last_Name: user.Last_Name,
            Email: user.Email,
            Mobile: user.Mobile,
            Rol_Contacto: user.Rol_Contacto
        })
        
        setMostrarContactos(false)
        setEdit(true)
    }

    const setMostrarContactosProp= () =>{
        setMostrarContactos(true);
        setEdit(false);
    }
    return ( 
        
        <div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Store ID</span>
                <input type="text" class="form-control" placeholder="Store ID" aria-label="Username" aria-describedby="basic-addon1" onChange={(event)=>{handleInputChage(event)}}/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={()=>searchStore()}>Buscar</button>
            </div>
            {mostrarContactos?
                <table className="me-3 table table-borderless">
                    <thead>
                        <tr>
                            <th>Contacto</th>
                            <th>Roles</th>
                        </tr>
                    </thead>
                    <tbody>
                            { 
                            contactosStore.map(user => (
                                <tr key={user.Email} className="mt-3">
                                    <td>{user.First_Name} {user.Last_Name}</td>
                                    <td>{user.Rol_Contacto.map(rol=>(
                                        <span key={rol}>{rol} - </span> 
                                        ))}</td>
                                    <td>
                                        <button className="btn btn-outline-primary" id={user.id} onClick={(e)=>editar(e)} >Editar</button>
                                    </td>
                                </tr>
                            ))
                        } 
                        
                    </tbody>
                </table>:""
            }
            {edit?
                <div>
                    <EditorGlobal setMostrarContactosProp={setMostrarContactosProp}/>
                </div>:""
            }
        </div>
        
        
     );
}
 
export default EditarContactoStore;