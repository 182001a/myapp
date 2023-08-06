import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import App from "./App";

export const ApiContext = createContext();

const ApiProvider = () => {

    const [data, setData] = useState({"main_text":"", "sub_text":""});

    useEffect(() => {

        const getData = async () => {
            const res = await axios.get("http://127.0.0.1:8000/sample/");
            setData(res.data[1]);
        }

        getData();

    }, []);

    console.log("ApiProvider = " + data.main_text);

    return (
        <ApiContext.Provider value={data}>
            <App />
        </ApiContext.Provider>
    )
}

export default ApiProvider;