import Home from '../pages/Home';
import Average from '../pages/Average';
import Median from '../pages/Median';
import Mode from '../pages/Mode';
import GeoShapes from '../pages/GeoShapes';
import SalaryDifference from '../pages/SalaryDifference';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,  
    path: '/average',
    component: Average
  },
  {
    exact: true,
    path: '/median',
    component: Median
  },
  {
    exact: true,
    path: '/mode',
    component: Mode
  },
  {
    exact: true,
    path: '/geo',
    component: GeoShapes
  },
  {
    exact: true,
    path: '/salary',
    component: SalaryDifference
  }
];

export default routes;