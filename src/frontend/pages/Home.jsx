import React, { useState } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import Title from '../components/Title';
import Input from '../components/Input';
// Styles
import '../assets/styles/HomeImports.styl';

const Home = ({ sections }) => {
  const [isOpen, open] = useState(false);

  return (
    <main className='home'>
      <Title />
      <Input
        isHome
        isOpen={isOpen}
        openFn={open}
        functionList={sections}
        placeholderText='Choose an option'
      />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.sections,
  };
};

export default connect(mapStateToProps, null)(Home);
