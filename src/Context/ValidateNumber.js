const ValidateContact = (props, codigos) => {
    var cod_ciudades = Object.assign({}, codigos);
    console.log(cod_ciudades)
    let response = false;
        const nro_completo= props;
        
        if(nro_completo.includes("+54"))
        {
            let nro = nro_completo.substr(3);
            if(nro.length == 10)
            {
                const codigos = cod_ciudades.Argentina;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {
                    response = true;
                }
                else
                {
                    response = false;
                }
            }
            else if(nro.length == 11 && nro.startsWith("9"))
            {
                nro = nro.substr(1);
                const codigos = cod_ciudades.Argentina;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {
                    response = true;
                }
                else
                {
                    response = false;
                }
            }
            else
            {
                response = false;
            }
        }
        //BRASIL
        if(nro_completo.includes("+55"))
        {
            const nro = nro_completo.substr(3);
            const x = nro.substr(2,1);
            if(nro.length == 10 && x !== "9")
            {
                const codigos = cod_ciudades.Brasil;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {
                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else if(nro.length == 11 && x == "9")
            {
                const codigos = cod_ciudades.Brasil;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {

                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else
            {
                response=false;
            }
        }
        //CHILE
        if(nro_completo.includes("+56"))
        {
            const nro = nro_completo.substr(3);
            if(nro.length == 9 && !nro.startsWith("9"))
            {
                const codigos = cod_ciudades.Chile;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    } 
                });
                if(found)
                {

                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else if(nro.length == 9 && nro.startsWith("9"))
            {
                response=true;
            }
            else
            {
                response=false;
            }
        }
        //MEXICO
        if(nro_completo.includes("+52"))
        {
            let nro = nro_completo.substr(3);
            if(nro.length == 10)
            {
                const codigos = cod_ciudades.Mexico;
                console.log(codigos);
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {

                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else if(nro.length==11 && nro.startsWith(1)){
                nro = nro.substr(1);
                const codigos = cod_ciudades.Mexico;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {

                    response=true;
                }
                else
                {
                    response=false;
                }
            }else{
                response=false;
            }
        }
        //COLOMBIA
        if(nro_completo.includes("+57"))
        {
            const nro = nro_completo.substr(3);
            if(nro.length == 8 && !nro.startsWith("3"))
            {
                const codigos = cod_ciudades.Colombia;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    } 
                });
                if(found)
                {

                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else if(nro.length == 10 && nro.startsWith("3"))
            {
                response=true;
            }
            else
            {
                response=false;
            }
        }
        //COSTA RICA
        if(nro_completo.includes("+506"))
        {
            const nro= nro_completo.substr(4);
            if(nro.length == 8 && !nro.startsWith("6") && !nro.startsWith("7") && !nro.startsWith("8"))
            {
                const codigos = [22];
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {

                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else if(nro.length == 8 && (nro.startsWith("6") || nro.startsWith("7") || nro.startsWith("8")))
            {
                response=true;
            }
            else
            {
                response=false;
            }
        }
        //ECUADOR
        if(nro_completo.includes("+593"))
        {
            const nro=nro_completo.substr(4);
            if(nro.length == 8 && !nro.startsWith("9"))
            {
                const codigos = cod_ciudades.Ecuador;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {

                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else if(nro.length == 9 && (nro.startsWith("9")))
            {
                response=true;
            }
            else
            {
                response=false;
            }
        }
        //PERU
        if(nro_completo.includes("+51"))
        {
            const nro=nro_completo.substr(3);
            if(nro.length == 8 && !nro.startsWith("9"))
            {
                const codigos = cod_ciudades.Peru;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {
                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else if(nro.length == 9 && nro.startsWith("9"))
            {
                response=true;
            }
            else
            {
                response=false;
            }
        }
        //URUGUAY
        if(nro_completo.includes("+598"))
        {
            const nro = nro_completo.substr(4);
            if(nro.length == 8 && !nro.startsWith("9"))
            {
                const codigos = cod_ciudades.Uruguay;
                let found = false;
                codigos.forEach(cod => {
                    if(nro.startsWith(cod))
                    {
                        found = true;
                    }
                });
                if(found)
                {
                    response=true;
                }
                else
                {
                    response=false;
                }
            }
            else if(nro.length == 8 && nro.startsWith("9"))
            {
                response=true;
            }
            else
            {
                response=false;
            }
        }

    return ( 
        response
     );
}
 
export default ValidateContact;

