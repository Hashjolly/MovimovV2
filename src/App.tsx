import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Movies, MovieDetails, Favorites, NotFound } from '@pages/index'
import { Header } from '@components/organisms/Header/Header';
import { Footer } from '@components/organisms/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
