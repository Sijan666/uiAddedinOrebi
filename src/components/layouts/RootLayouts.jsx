import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import SearchBar from "./SearchBar"



const RootLayouts = () => {
    return (
        <>
            <Header/>
            <SearchBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default RootLayouts