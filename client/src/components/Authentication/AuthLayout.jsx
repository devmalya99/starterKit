
import { useState } from 'react'
import Footer from './Footer';
import { Outlet } from 'react-router';
import Navigation from './Navigation';



const AuthLayout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>

        <Navigation
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        />    

        <Outlet/>

        <Footer />



    </div>
  )
}

export default AuthLayout