import { Link } from "react-router-dom";
import popcornImage from "/popcorn.png";
import './NotFound.css';
import { Button } from "@components/atoms/Button";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <section className="notfound-content">
        <div className="notfound-text">
          <h1>404 - Page introuvable</h1>
          <p>
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/MovimovV2/">
            <Button
              width="200px"
              height="50px"
              theme="colored"
              label="Retour à l'accueil"
              disabled={false}
              onClick={() => {}}
            />
          </Link>
        </div>
        <div className="notfound-image">
          <img src={popcornImage} alt="Popcorn et écran de cinéma" />
        </div>
      </section>
    </div>
  );
}
