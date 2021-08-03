import React from 'react';
import Categories from './Categories';
import Carousel from './Carousel';
import Card from './Card';
import Pagination from './Pagination';
import Footer from './Footer';

const Home = () => (
    <div className="App">
        <Categories title='Past Launches'>
          <Carousel>
            <Card/>
          </Carousel>
        </Categories>
      <Footer/>
    </div>
);

export default Home;