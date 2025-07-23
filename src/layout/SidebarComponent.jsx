import { NavLink } from "react-router-dom"
export default function Header() {

    const pages = ["/", "/conversioni"]

    return /*(


        <nav className="flex flex-col text-white pe-10">
            {
                pages.map((page, index) => {
                    return <NavLink key={index + 1} className="navlink text-(--light-green) mb-5" to={page} > <strong>{index === 0 ? <>HOME</> : page.slice(1).toUpperCase()}</strong></NavLink>
                })
            }

        </nav >)*/
}