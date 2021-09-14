import React, { useState } from 'react';
// Components
import Title from '../components/Title';
import Input from '../components/Input';
// Section List
import listsIterations  from '../../listsIterations';
// Styles 
import '../assets/styles/HomeImports.styl'

const Home = () => {
  const [isOpen, open] = useState(false);
  const [section, setSection] = useState("")

  return (
    <main className="home">
      <Title/>
      <Input 
        list
        isHome 
        isOpen={isOpen} 
        openFn={open} 
        functionList={listsIterations.sectionList} 
        placeholderText="Choose a option"
        setSection={setSection}
      />
    </main>
  )
};

export default Home;