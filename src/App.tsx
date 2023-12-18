import React from 'react';
import {Outlet, RouterProvider} from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import {Provider} from 'react-redux';
import store from './app/store';


function App() {

  return (
    <>
      <Provider store={store}>
          <RouterProvider router={routes} />
          <Outlet />
      </Provider>
    </>
  );
}

export default App;
