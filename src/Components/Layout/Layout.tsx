import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Layout() {
    return (
        <>
            <div className="flex items-start">
                <Sidebar></Sidebar>
                <Navbar></Navbar>

            </div>
        </>
    )
}