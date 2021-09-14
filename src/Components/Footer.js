import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="footer">
             {/*footer*/}
             <div className="footer w-full h-36 text-center text-white bg-blue-500 pb-10">
                <h1 className="text-lg p-4">© Copyright Julius Hatibu. All Rights Reserved</h1>
                <h1 className="text-lg">Designed by Julius Hatibu</h1>
                <div className="justify-center flex ">
                    <FaGithub className="h-10 w-10 py-2" />
                    <FaInstagram className="h-10 w-10 py-2" />
                    <FaLinkedin className="h-10 w-10 py-2" />
                </div>
            </div>
            
        </div>
    )
}

export default Footer
