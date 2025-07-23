import { Link } from "react-router-dom"
export default function HomePage() {
    return <>
        <h1 className="text-6xl text-(--light-green)">BOOLVERTER</h1>
        <Link className="pagelink text-(--light-green) mb-5" to="/convert" > <strong>INIZIA A CONVERTIRE</strong></Link >
    </>
}