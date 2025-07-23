import { createContext, useState, useEffect } from "react"
import axios from "axios";
const GlobalContext = createContext()


const GlobalProvider = ({ children }) => {

    const [currency, setCurrency] = useState([])
    const [factor1, setFactor1] = useState([])
    const [factor2, setFactor2] = useState([])

    async function getData(url) {
        try {
            const response = await axios.get(url);
            /*console.log(response.data)*/
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData("https://api.frankfurter.app/currencies").then((obj) => { setCurrency(obj) }).finally(console.log(currency))
    }, [])



    return (
        <GlobalContext.Provider value={{ currency, factor1, factor2, setFactor1, setFactor2 }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider }