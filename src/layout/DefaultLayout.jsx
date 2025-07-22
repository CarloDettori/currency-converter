import { Outlet } from "react-router-dom";
import SidebarComponent from "../layout/SidebarComponent.jsx"

export default function DefaultLayout() {


    return (
        <main className="flex p-10">
            <SidebarComponent />
            <section className="  rounded-xl w-full">
                <Outlet />
            </section>
        </main>

    )
}