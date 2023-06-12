import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import About from './components/About';
import Landing from './components/Landing';
import Cocktail from './components/Cocktail';
import NewsLetter from './components/NewsLetter';
import Error from './components/Error';
import { loader as landingLoader } from './components/Landing';
import SinglePageError from './components/SinglePageError';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>our company</h2>,
          },
          {
            path: 'person',
            element: <h2>KLen</h2>,
          },
        ],
      },
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
