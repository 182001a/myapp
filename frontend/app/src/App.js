import React, { useContext } from "react";

import { ApiContext } from "./ApiProvider";

function App() {

  const data = useContext(ApiContext);
  const dict = Object.values(data).forEach(function (value) { value.main_text });
  
  return (
    <div className="tmp">
      <h1>Hello !!</h1>

    </div>
  );

};

export default App;
