import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar/NavBar.jsx'

function MainLayout() {
    return (
        <>
            <Navbar /> {/* This navbar is the shared ui we want to across pages */}
            <Outlet /> {/* The actual page which which will be rendered along with navbar */}
        </>
    )
}

export default MainLayout;