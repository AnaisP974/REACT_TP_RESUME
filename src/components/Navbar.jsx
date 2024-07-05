export default function Navbar({ nav }) {
    // Création d'un tableau d'objet des liens présents dans la barre de navigation
    const navLinks = [
        {
            name: "Home",
            href: "/",
            icone: "bx bx-home",
        },
        {
            name: "About",
            href: "/about",
            icone: "bx bx-user",
        },
        {
            name: "Resume",
            href: "/resume",
            icone: "bx bx-file-blank",
        },
        {
            name: "Portfolio",
            href: "/portfolio",
            icone: "bx bx-book-content",
        },
        {
            name: "Services",
            href: "/services",
            icone: "bx bx-server",
        },
        {
            name: "Contact",
            href: "/contact",
            icone: "bx bx-envelope",
        },
    ]

    return (

    <>
        <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
        <header id="header" className="d-flex flex-column justify-content-center">

            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    {/* Utilisation de la méthode map pour un affichage dynamique de la barre de navigation */}
                    {navLinks.map((navLink) => (
                        <li key={navLink.name}>
                            <a 
                            href={navLink.href} 
                            // Utilisation d'un ternaire pour ajouter ou non la class "active" selon le props passé
                            className={`nav-link scrollto ${nav === navLink.name ? 'active' : ''}`}
                            >
                                <i className={navLink.icone}></i> <span>{navLink.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    </>
    )
}


