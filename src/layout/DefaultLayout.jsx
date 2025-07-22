import { Outlet } from "react-router-dom";
import Header from "../layout/Header.jsx"
import Footer from "../layout/Footer.jsx"

export default function DefaultLayout() {


    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}