import React from 'react'
import {Link} from 'react-router-dom'


 const Header = () => {
    return (
        <div>
            <header className="flex justify-between px-5 py-1 absolute w-full text-white">
                <div className="Logo">
                    
                </div>
                <nav>
                    <ul className="flex text-white">
                        <li className="mr-5">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mr-5">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/hire">Hire</Link>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header