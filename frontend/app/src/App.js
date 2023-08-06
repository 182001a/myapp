import React, { useContext } from "react";

import { ApiContext } from "./ApiProvider";

function App() {

  const data = useContext(ApiContext);
  console.log("App = " + data.main_text);

  return (
  <div className="input-container">
    <h1>メインテキスト</h1>
    <p>サブテキスト</p>
    <input type="text" placeholder="メインテキストを入力してください" />
    <input type="text" placeholder={data.sub_text} />
    <input type="submit" value="送信"></input>
  </div>
  );

};

export default App;
