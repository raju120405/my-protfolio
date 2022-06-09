import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../ContactMe/Contact';
import Projects from '../Projects/Projects';

import HeaderSection from './HeaderSection';

const Home = () => {
    return (
        <div>
          <h3 className='mt-3 '>My Protfolio</h3>
         <HeaderSection></HeaderSection>
         <Projects></Projects>
           <AboutMe></AboutMe>
           <Contact></Contact>
        </div>
    );
};

export default Home;