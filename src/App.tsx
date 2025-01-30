import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Skeleton, StyledButton, StyledInput } from '@components/atoms/index'
import { Home, Movies, MovieDetails, Favorites, NotFound } from '@pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <Skeleton width="200px" height="50px" borderRadius="10px" />
        <StyledInput width="200px" height="50px" theme="colored" placeholder="Type here..." />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          </button>
          <StyledButton width="100px" height="50px" theme="colored" label="Click !" onClick={() => setCount((count) => count + 1)} />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
