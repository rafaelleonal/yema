import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Logo from '../assets/static/logo_spacex.jpg';
import { FaTwitter, FaFlickr } from 'react-icons/fa';

/* Variable para utilizar los datos desde Apollo Client */
const  COMPANY = gql `
query company {
    company {
      links {
        twitter
        website
        flickr
      }
      name
      summary
    }
  }
`

const AboutUs = () => {
    const { data, loading, error } = useQuery(COMPANY);

    /* Validacion de carga y error */
    if (loading) return <h1 className='font-bold text-center text-xl'>Cargando...</h1>

    if (error) return <h1 className='font-bold text-center text-xl'>Lo siento, hubo un error...</h1>

    /* Resultados obtenidos de la API */
    const results = data.company;

    return (
        <div className='container mx-auto flex flex-col place-items-center font-mono'>
            <h1 className='font-bold text-center my-8 text-4xl md:text-5xl'>{results.name}</h1>
            <img className='h-32 w-full object-cover md:h-56 md:w-56' src={Logo} alt={results.name}/>
            <p className='mt-10 px-8 md:mt-16 justify-center text-star font-bold text-xl'>
                {results.summary}
            </p>
                <ul className='my-16 md:mt-28 gap-5 flex md:flex-row place-items-center'>
                    <li className='md:mx-5'>
                        <a href={results.links.twitter}><FaTwitter className='h-10 w-10 text-gray-900 hover:text-gray-600'/></a>
                    </li>
                    <li className='md:mx-5'>
                        <a className='font-bold text-gray-900 hover:text-gray-600' href={results.links.website}>Sitio Oficial</a>
                </li>
                <li className='md:mx-5'>
                        <a href={results.links.flickr}><FaFlickr className='h-10 w-10 text-gray-900 hover:text-gray-600'/></a>
                </li>
            </ul>
        </div>
    );
}

export default AboutUs;