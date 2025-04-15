import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body';
import store from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchVideoContainer from './components/SearchVideoContainer';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "results",
      element: <SearchVideoContainer />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className=''>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
