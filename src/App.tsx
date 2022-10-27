import Home from "./pages/Home"
import GifsList from "./components/GifsList"

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Detail from "./pages/Detail";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<GifsList/>}/>
          <Route path="/search/:name" element={<GifsList/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
