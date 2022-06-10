import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../ContactMe/Contact';
import Projects from '../Projects/Projects';
import Skils from '../Skils/Skils';
import Tools from '../Tools/Tools';

import HeaderSection from './HeaderSection';

const Home = () => {
    return (
        <div>
          <h4 className='mt-3 '>My Portfolio</h4>
         <HeaderSection></HeaderSection>
         <Projects></Projects>
           <AboutMe></AboutMe>
           <Skils></Skils>
           <Tools></Tools>
           <Contact></Contact>
        </div>
    );
};

export default Home;