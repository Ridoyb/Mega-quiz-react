import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
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
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz') ,
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {path:'/quiz/:quizId',
        loader: async({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Questions></Questions>}
      ]
    },
    {path:'*', element: <Error></Error>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
