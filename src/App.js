import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './Layouts/Main';

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz') ,
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
