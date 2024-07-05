# TP: Intégration React  

Objectif : Le but de ce TP est d’intégrer le template HTML vers React, en adoptant une approche par composant.

## Etapes de réalisation du projet

- Initialisation d'un nouveau projet React Vite, installation des packages, création d'un nouveau Repository GitHub.  
- Insertion des données HTML, CSS et JS dans le projet React, gestion des erreurs et affichage de la page.  
- Création des premiers composants "Footer.jsx", "Hero.jsx", "Navbar.jsx".
- Installation du React Router Dom, car je ne souhaite pas réaliser le portfolio en 'single page'. Je crée donc différentes vues pour chaque page : Home, About, Resume, Services, Portfolio et Contact.
- Affichage dynamique de la barre de navigation et utilisation de props pour marquer la page active.

## Utilisation bootstrap sur un Projet REACT  

1. Installation de bootstrap avec la commande: $pnpm install react-bootstrap bootstrap  
2. Ajout du CDN et Script Bootstrap  

```index.html
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>


<!-- Script Bootstrap -->
  <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

  <script
    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
    crossorigin></script>
  
  <script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script>
  
  <script>var Alert = ReactBootstrap.Alert;</script>
<!-- Fin du script Bootstrap -->
```

3. Ajout des barres de progression de bootstrap

```About.jsx
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function About() {
    return (
        <div className="progress">
            <span className="skill">Photoshop <i className="val">55%</i></span>
            <ProgressBar now={55} />
        </div>
    )
}
```

Doctumentation : [source](https://react-bootstrap.github.io/docs/components/progress/#example)