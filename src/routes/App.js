import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from '../pages/Home';
import GeoShapes from '../pages/GeoShapes';
import Average from '../pages/Average';
import Median from '../pages/Median';
import Mode from '../pages/Mode';
// import SalaryDifference from '../pages/SalaryDifference';
import Layout from '../components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Layout>
          <Route exact path='/geo' component={GeoShapes} />
          <Route exact path='/average' component={Average} />
          <Route exact path='/median' component={Median} />
          <Route exact path='/mode' component={Mode} />
          {/* <Route exact path='/salary' component={SalaryDifference} /> */}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
