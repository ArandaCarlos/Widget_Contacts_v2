import React, {Fragment, useState, useEffect} from 'react';
import ValidateNumber from '../Context/ValidateNumber'
import { useZohoContext } from '../Context/ZohoContext';

const EditorGlobal = (props) => {

    const [roles, setRoles] = useState([]);
    const [preRol, setPreRol] = useState([]);
    const {contactoActual, setContactoActual, contactosActualizar, setContactoActualizar}= useZohoContext();
    console.log(contactosActualizar);
    const [emailError, setEmailError]= useState(false);

    useEffect(() => {
        editarContacto(contactoActual)
    }, [contactoActual])


    const editarContacto = (user) =>{
        const firstName = document.getElementById("First_Name");
        const lastName = document.getElementById("Last_Name");
        const email = document.getElementById("Email");
        const mobile = document.getElementById("Mobile");
        firstName.value=user.First_Name;
        lastName.value=user.Last_Name;
        email.value=user.Email;
        mobile.value=user.Mobile;
    }

    const handleInputCheckbox = (e) =>{
        const arraycheck = contactoActual.Rol_Contacto;
        const arrayRol = preRol;
        let index = contactoActual.Rol_Contacto.indexOf(e.target.value);
        if(index > -1){
            arraycheck.splice(index,1);
            arrayRol.splice(index,1);
        }else{
            arraycheck.push(e.target.value);
            arrayRol.push(e.target.value);
        }
        //console.log(arraycheck)
        setContactoActual({
            ...contactoActual,
            Rol_Contacto: arraycheck
        })   
        setPreRol(arrayRol);
        
    }
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setContactoActual({
            ...contactoActual,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        let arrayContactosActualizar = contactosActualizar;
        arrayContactosActualizar.push(contactoActual);
        setContactoActualizar(arrayContactosActualizar)
        console.log(contactoActual)
        props.setMostrarContactosProp()
    } 

    return ( 
        <form className="container mt-3" onSubmit={onSubmit}>
            <h4>Actualizar Contacto</h4>
            <div className="form-group row mt-4">
                <label htmlFor="First_Name1" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                <input 
                    type="First_Name1" 
                    className="form-control" 
                    name="First_Name" 
                    id="First_Name" 
                    placeholder="Ingrese nombre del Contacto" 
                    onChange={handleInputChange} 
                    
                    />
                </div>
            </div>
            <div className="form-group row mt-3">
                <label htmlFor="Last_Name1" className="col-sm-2 col-form-label">Apellido</label>
                <div className="col-sm-10">
                <input 
                    type="Last_Name1" 
                    className="form-control" 
                    name="Last_Name" 
                    id="Last_Name" 
                    placeholder="Ingrese Apellido del Contacto" 
                    onChange={handleInputChange} 
                    required></input>
                </div>
            </div>
            <div className="form-group row mt-3">
                <label htmlFor="Email1" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input 
                    type="Email1" 
                    className="form-control" 
                    name="Email" 
                    id="Email" 
                    placeholder="Email" 
                    onChange={handleInputChange} 
                    required>
                </input>
                <div id="validationServerUsernameFeedback" className="invalid-feedback">
                    {(emailError)? <span>dominio @rappi.com no permitido</span>: <span>Email incorrecto</span>}
                </div>
                </div>
            </div>
            <div className="form-group row mt-3">
                <label htmlFor="cel1" className="col-sm-2 col-form-label">Whatsapp</label>
                <div className="col-sm-10">
                <input 
                    type="cel1" 
                    className="form-control ml-1" 
                    name="Mobile" 
                    id="Mobile" 
                    placeholder="ejemplo: +552131354684" 
                    onChange={handleInputChange} 
                    required>
                </input>
                <div id="validationServerUsernameFeedback" className="invalid-feedback">
                    (cód de país "+52")(cod ciudad "22") XXXXXXX
                </div>
                </div>
            </div>
            
            
            <div className="form-group row mt-3">
                <div className="col-sm-2">Roles a cumplir: </div>
                <div className="col-sm-10" id="checkboxs">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check1" value="Brand Decision Maker" onChange={handleInputCheckbox} id="Brand Decision Maker" ></input>
                    <label className="form-check-label" htmlFor="check1">
                            Brand Decision Maker             
                    </label>
                     
                </div>
                <div className="form-check"> 
                    <input className="form-check-input" type="checkbox" name="check2" value="Marketing Decision Maker" onChange={handleInputCheckbox} id="Marketing Decision Maker" ></input>
                    <label className="form-check-label" htmlFor="check2">
                            Marketing Decision Maker
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check3" value="Ops Decision Maker / COO" onChange={handleInputCheckbox} id="Ops Decision Maker / COO" ></input>
                    <label className="form-check-label" htmlFor="check3">
                            Ops Decision Maker/COO
                    </label>
                    
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check4" value="Finance Decision Maker" onChange={handleInputCheckbox} id="Finance Decision Maker" ></input>
                    <label className="form-check-label" htmlFor="check4">
                            Finance Decision Maker
                    </label>
                    
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check5" value="Legal Representative" onChange={handleInputCheckbox} id="Legal Representative"></input>
                    <label className="form-check-label">Legal Representative</label>
                    
                    
                </div>
                
            </div>
                
            </div>
            <div className="form-group row mt-3">
                <div className="col-sm-10">
                <button type="submit" id="button" className="btn btn-primary" >Actualizar</button>
                </div>
            </div>
        </form>
     );
}
 
export default EditorGlobal;