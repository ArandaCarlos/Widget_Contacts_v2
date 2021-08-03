import {useState, useEffect} from "react";
import OpenWidget from "./Components/OpenWidget";
import EditarContactoStore from "./Components/EditarContactoStore";
import ZohoProvider, { useZohoContext } from './Context/ZohoContext';


function App() {
  const [link, setLink] = useState("openWidget");

  return (
    <ZohoProvider>
        <OpenWidget setLink={setLink}/>
    </ZohoProvider>
      
  );
}

export default App;