import { Link } from "react-router-dom";
import popcornImage from "/popcorn.png";
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <section className="notfound-content">
        <div className="notfound-text">
          <h1>404 - Page introuvable</h1>
          <p>
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/">
            <button className="back-home-button">Retour à l'accueil</button>
          </Link>
        </div>
        <div className="notfound-image">
          <img src={popcornImage} alt="Popcorn et écran de cinéma" />
        </div>
      </section>
    </div>
  );
}
