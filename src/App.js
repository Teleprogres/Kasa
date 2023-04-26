
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Location, About, PageNotFound, Header, Footer } from './config/PathPages'

const App = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <Header />
        {/* définition de routes */}
        <Routes>
          {/* route par défaut */}
          <Route index element={<Home />} />
          
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/location/:id' element={<Location />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes >

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
