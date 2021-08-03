import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => (
    <footer className='my-10 inline-block'>
        <ul className='flex justify-center font-mono text-lg my-5'>
            <li className='mx-3 text-gray-600 hover:text-gray-900'>
                <a href="https://www.facebook.com/spacenewsx/">
                    <FaFacebook className='h-10 w-10'/>
                </a>
            </li>
            <li className='mx-3 text-gray-600 hover:text-gray-900'>
                <a href="https://www.linkedin.com/company/spacex/">
                    <FaLinkedin className='h-10 w-10'/>
                </a>
            </li>
            <li className='mx-3 text-gray-600 hover:text-gray-900'>
                <a href="https://www.instagram.com/spacex/?hl=es">
                    <FaInstagram className='h-10 w-10'/>
                </a>
            </li>
        </ul>
        <p className='text-black my-5'>© 2021 Copyright. Todos los derechos reservados</p>
    </footer>
)

export default Footer;