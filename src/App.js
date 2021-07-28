import {useState, useEffect} from "react";
import OpenWidget from "./Components/OpenWidget";
import SearchStores from "./Components/SearchStores";
import ZohoProvider, { useZohoContext } from './Context/ZohoContext';


function App() {
  const [link, setLink] = useState("openWidget");

  return (
    <ZohoProvider>
      {link == "openWidget" ? 
          <OpenWidget setLink={setLink}/>
        : link == "searchStores" ? 
          <SearchStores setLink={setLink}/>:""}
    </ZohoProvider>
      
  );
}

export default App;