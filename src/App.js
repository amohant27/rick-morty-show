import React, { useEffect, useState } from "react";
import { getHeroDetails } from "./service/service";
import DisplayHeroes from "./components/DisplayHeroes/DisplayHeroes";
import "./App.css";

const App = () => {
  const [heroDetails, setHeroDetails] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getHeroDetails();
      setHeroDetails(result.data);
    })();
  }, []);

  return (
    <div className="container-class">

      {/* <div className="col-md-12 col-xs-12 col-sm-12 header">Headers</div> */}
    
  
      <DisplayHeroes hereos={heroDetails.results} />
    </div>
  );
};

export default App;
