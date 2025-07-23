import ConversionFactorComponent from "../components/ConversionFactorComponent.jsx"

export default function ConversionPage() {

    return <div className="flex items-center">

        <ConversionFactorComponent />

        <i className="text-(--light-green) text-6xl fa-solid fa-arrow-right-arrow-left mx-5"></i>

        <ConversionFactorComponent />
    </div>
}