import Main from "./components/Main"
import Gifs from "./components/Gifs"
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {BrowserRouter,Routes, Route} from 'react-router-dom';



const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<Gifs/>}/>
            <Route path=":name" element={<Gifs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
