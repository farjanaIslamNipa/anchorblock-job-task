import {Outlet, RouterProvider} from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import {Provider} from 'react-redux';
import store from './redux/store';


function App() {

  return (
    <div>
    <Provider store={store}>
        <RouterProvider router={routes} />
        <Outlet />
    </Provider>
  </div>
  );
}

export default App;
