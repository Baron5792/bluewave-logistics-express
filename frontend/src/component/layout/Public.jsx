import { Outlet } from "react-router-dom"
import PublicHeader from "../public/Header"
import PublicFooter from "../public/Footer";

const PublicLayout = () => {
    return (
        <>
            <PublicHeader />
            <Outlet />
            <PublicFooter />
        </>
    )
}

export default PublicLayout;