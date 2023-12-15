import {Outlet, RouterProvider} from 'react-router-dom';
import './App.css';
import routes from './routes/routes';


function App() {

  return (
    <div>
    <div>
        <RouterProvider router={routes} />
        <Outlet />
    </div>
  </div>
  );
}

export default App;
