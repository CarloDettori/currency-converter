import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


export default function ConversionFactorComponent() {

    const { currency } = useContext(GlobalContext);



    return (



        <form className="flex flex-col flex-grow compareafctor p-10 rounded-xl max-w-sm mx-auto">

            <strong className=" mx-auto text-(--dark-green) text-6xl bg-(--light-green) text-center shrink mb-4 pb-2 px-4 rounded-4xl">$</strong>

            <input type="text" className="bg-(--light-green) text-(--dark-green) text-sm rounded-lg block w-full p-2.5" />

            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <select id="countries" className="bg-(--light-green) text-(--dark-green) text-sm rounded-lg  block w-full p-2.5 ">

                {currency && Object.entries(currency).map(([code, name]) => (
                    <option key={code} value={code}>
                        {code} - {name}
                    </option>
                ))}

            </select>
        </form>

    )



}