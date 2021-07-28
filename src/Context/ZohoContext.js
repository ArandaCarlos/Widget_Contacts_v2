import { createContext, useContext, useState, useEffect } from "react";
import {ZOHO} from '../assets/Zoho';

const ZohoContext = createContext();

export default function ZohoProvider({children}) {

   const [module, setModule] = useState(null);
   const [entity, setEntity] = useState(null);
   const [id, setID] = useState(null);
   const [record, setRecord] = useState(null);
   const [stores, setStores] = useState(null);

   useEffect(() => {

      const initWidget = () => {
         ZOHO.embeddedApp.on("PageLoad", function (data) {
            console.log(data);
            let id = data.EntityId;
            setID(id);
            console.log(id);
            ZOHO.CRM.API.getRecord({Entity:"Brands",RecordID:id}).then((result)=>{
               setRecord(result.data[0])
            })
            ZOHO.CRM.API.getRelatedRecords({Entity:"Brands",RecordID:id,RelatedList:"Stores"}).then((data)=>{
               setStores(data.data);
               console.log(data.data);
           })
            
         
         });
         

         ZOHO.embeddedApp.init();
      }

      setTimeout(()=> {
         initWidget();
      }, 1000);
      
   }, []);
   
   return (
      <ZohoContext.Provider value={{module: module, entity: entity, id:id, stores:stores}}>
         {children}
      </ZohoContext.Provider>
   );
};

export const useZohoContext = () => {

   const context = useContext(ZohoContext);

   if (!context) throw new Error("UseWidget inside ZohoContext");

   const { entity, module, id, stores} = context;

   return {
      entity, module, id, stores
   }
}