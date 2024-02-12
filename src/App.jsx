import './App.css'
import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";

import { AppContext } from './context/contextApi'
import VideoDetails from './components/VideoDetails';
import SearchResult from './components/SearchResult';
import Feed from './components/Feed';
import Layout from './components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
        <Route path="" element={<Feed/>} />
        <Route path="searchResult/:searchQuery"
              element = {<SearchResult />}/>
        <Route path="video/:id" element={<VideoDetails/>}/>
    </Route>
)
)

const App = () => {

  return (
    <AppContext>
      <RouterProvider router = {router} />
  </AppContext>
  )
}

export default App
