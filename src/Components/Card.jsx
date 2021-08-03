import React from 'react';
import { useQuery, gql } from '@apollo/client';
import logoSpaceX from '../assets/static/logo_spacex.jpg';
import Pagination from './Pagination';

/* Variable para utilizar los datos desde Apollo Client */
const PAST_LAUNCHES = gql `
query launchesPast {
  launchesPast(offset: 0, limit: 12) {
    mission_name
    links {
      wikipedia
      flickr_images
    }
    launch_date_local
    id
    launch_success
  }
}
`

const Card = () => {
  const { data, loading, error, fetchMore } = useQuery(PAST_LAUNCHES, {  
    variables: {
    limit: 12,
    offset: 12
  },  
  });

  /* Validacion de carga y error */
  if (loading) return <h1 className='font-bold text-center text-xl'>Cargando...</h1>

  if (error) return <h1 className='font-bold text-center text-xl'>Lo siento, hubo un error...</h1>

  /* Resultados obtenidos de la API */
  const results = data.launchesPast;

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-mono'>
        {results.map(item => (
        <div className="w-10/12 mx-auto lg:w-full my-4 bg-gray-100 py-8 rounded-3xl shadow-lg" key={item.id}>
          <div className='md:flex md:flex-col place-items-center'>
          {item.launch_success ? /* Validacion para saber si la mision fue exitosa */
          <h2 className='font-bold text-green-600 text-lg my-4'>{item.mission_name}</h2> 
          : <h2 className='font-bold text-red-600 text-lg my-4'>{item.mission_name}</h2>
          } 
            {!item.links.flickr_images.length == 0 ? /* Validacion para mostrar logo spacex si el array de la api no tiene imgs */
            <img className='h-32 w-full object-cover md:h-56 md:w-56' src={item.links.flickr_images} alt={item.mission_name}/> 
            : <img className='h-32 w-full object-cover md:h-56 md:w-56' src={logoSpaceX} alt={item.mission_name}/>
            }
            <p className="text-md my-5">Fecha y hora de lanzamiento: {item.launch_date_local}</p>
          </div>
          <a className='bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-6' 
          href={item.links.wikipedia} 
          type='button'>Wikipedia</a>
        </div>
        ))}
      </div> 
      <Pagination>
        <button
          onClick={() => {
            fetchMore({
              variables: {
                offset: 12,
              },
            })
          }}
          type='button' 
          className='bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full px-5 py-3'>
              1
          </button>
        <button
          onClick={() => {
          fetchMore({
            variables: {
              offset: 12,
            },
          })
          }}
          type='button'  
          className='bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full px-5 py-3'>
              2
          </button>
        <button
          onClick={() => {
          fetchMore({
            variables: {
              offset: 12,
            },
          })
          }}
          type='button' 
          className='bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full px-5 py-3'>
              3
          </button>
      </Pagination>
    </section>
  );
}
export default Card;