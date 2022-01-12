import React from 'react';
// Router-DOM
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Components
import Title from '../components/Title';
import Input from '../components/Input';
import ListBox from '../components/ListBox';
// Styles
import '../assets/styles/HomeImports.styl';

const Home = ({ sections }) => {
  const [isOpen, open] = React.useState(false);

  return (
    <main className='home'>
      <Title />
      <Input
        openFn={open}
        isOpen={isOpen}
        placeholderText='Ej. Promedio, moda, mediana...'
        isHome
      >
        <ListBox isOpen={isOpen}>
          {
            sections.map((item) => (
              <Link
                className='home__listBox--listItem'
                key={item.id}
                to={item.link}
              >
                {item.name}
              </Link>
            ))
          }
        </ListBox>
      </Input>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.sections,
  };
};

export default connect(mapStateToProps, null)(Home);
