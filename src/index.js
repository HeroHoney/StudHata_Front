import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Houses from './pages/Houses';
import HataGuide from './pages/HataGuide';
import HouseItem from './pages/HouseItem';
import Roommates from './pages/Roommates';
import ErrorHanding from './components/ErrorHanding/ErrorHanding';
import Account from './pages/Account';
import CreateHouseItem from './pages/CreateHouseItem';
import CreateRoommate from './pages/CreateRoommate';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { register } from './serviceWorkerRegistration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorHanding/>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorHanding/>
  },
  {
    path: '/houses',
    element: <Houses />,
    errorElement: <ErrorHanding/>
  },
  {
    path: '/Hataguide',
    element: <HataGuide />,
    errorElement: <ErrorHanding/>
  },
  {
    path:'houses/:type/:id',
    element:<HouseItem/>,
    errorElement: <ErrorHanding/>
  },
  {
    path:'/roommates',
    element:<Roommates/>,
    errorElement: <ErrorHanding/>
  },
  {
    path:'/profile',
    element:<Account/>,
    errorElement: <ErrorHanding/>
  },
  {
    path:'/createhouseads',
    element:<CreateHouseItem/>,
    errorElement: <ErrorHanding/>
  },
  {
    path:'/createroommate',
    element:<CreateRoommate/>,
    errorElement: <ErrorHanding/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
register();