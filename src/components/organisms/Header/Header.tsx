import { useEffect, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input }  from "@atoms/Input";
import { useUIStore } from "app/store";
import logo from "/logo.png"
import "./Header.css"

export const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [placeHolder, setplaceHolder] = useState<string>("Rechercher un film ou une série...");
  const navigate = useNavigate();

  const { darkMode, mainColor, secondColor, thirdColor, detailsColor, setDarkMode, setLightMode } = useUIStore();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/MovimovV2/movies?search=${encodeURIComponent(searchTerm)}`);
    } else {
      setplaceHolder("Veuillez entrer un titre de film ou de série");
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
      <Link to="/MovimovV2/">
        <div className="logo-container">
          <img src={logo} alt="Movimov Logo" className="logo-image" />
          <h1 className="logo-text">Movimov</h1>
        </div>
      </Link>
      {window.location.pathname !== "/MovimovV2/" && (
        <Input
          width="20vw"
          height="50px"
          placeholder={placeHolder}
          onSearch={handleSearch}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      )}
      <nav className="nav">
        <Link to="/MovimovV2/">Accueil</Link> | <Link to="/MovimovV2/movies">Films</Link> | <Link to="/MovimovV2/favorites">Favoris</Link>
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
