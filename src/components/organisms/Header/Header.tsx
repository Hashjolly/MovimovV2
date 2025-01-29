import { useEffect, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useUIStore } from "app/store";
import logo from "/logo.png";
import "./Header.css"

export const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const { darkMode, mainColor, secondColor, thirdColor, detailsColor, setDarkMode, setLightMode } = useUIStore();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/movies?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", mainColor);
    document.documentElement.style.setProperty("--second-color", secondColor);
    document.documentElement.style.setProperty("--third-color", thirdColor);
    document.documentElement.style.setProperty("--last-color", detailsColor);
  }, [mainColor, secondColor, thirdColor, detailsColor]);

  return (
    <header className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Movimov Logo" className="logo-image" />
          <h1 className="logo-text">Movimov</h1>
        </div>
      </Link>
      <form className="search-bar" onSubmit={handleSearch}>
        <div className="search-input-container">
          <FaSearch className="search-icon" onClick={handleSearch} />
          <input
            type="text"
            placeholder="Recherchez un film ou une série..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      <nav className="nav">
        <Link to="/">Accueil</Link> | <Link to="/movies">Films</Link> | <Link to="/favorites">Favoris</Link>
        <div id="darkMode">
          <input
            type="checkbox"
            id="darkmode-toggle"
            checked={darkMode}
            onChange={() => {
              darkMode ? setLightMode() : setDarkMode();
            }}
          />
          <label htmlFor="darkmode-toggle"></label>
        </div>
      </nav>
    </header>
  );
};
