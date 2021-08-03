import React from 'react';

const Categories = ( {children, title} ) => (
    <div className='md:container mx-auto my-10'>
        <h3 className='text-center font-bold font-mono text-xl md:text-4xl'>{title}</h3>
        {children}
    </div>
);

export default Categories;