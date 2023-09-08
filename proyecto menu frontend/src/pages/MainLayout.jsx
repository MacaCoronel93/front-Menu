import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer.jsx'

export default function MainLayout(){
    return(
        <main>
            <NavBar />
            <Outlet />
            <Footer />
        </main>
        )
}