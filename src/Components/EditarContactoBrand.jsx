import { useState } from "react";
import { useZohoContext } from "../Context/ZohoContext";
import EditorGlobal from "./EditorGlobal";
const EditarContactoBrand = () => {
    const {contactos, setContactoActual} = useZohoContext();
    const [edit, setEdit] = useState(false);
    const [mostrarContactos, setMostrarContactos] = useState(true);
    const contactosBrand = contactos.filter(contacto => (contacto.Rol_Contacto.some(rol => rol.includes("Owner / Brand Decision Maker")|| rol.includes("Marketing Decision Maker"))));
    console.log(contactosBrand)

    const editar = (e) =>{
        let id_contacto_actual = e.target.id;
        let user = contactosBrand.filter(contacto=> contacto.id == id_contacto_actual)[0];
        console.log(user);

        setContactoActual({
            First_Name: user.First_Name,
            Last_Name: user.Last_Name,
            Email: user.Email,
            Mobile: user.Mobile,
            Rol_Contacto: user.Rol_Contacto
        })
        
        setMostrarContactos(false);
        setEdit(true);
    }

    const setMostrarContactosProp= () =>{
        setMostrarContactos(true);
        setEdit(false);
    }

    return ( 
        <div>
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
                        contactosBrand.map(user => (
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
        {edit ? 
            <div>
                <EditorGlobal setMostrarContactosProp={setMostrarContactosProp}/>
            </div>:""
        }
        </div>
        
        
     );
}
 
export default EditarContactoBrand;