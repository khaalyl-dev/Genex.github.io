export const globalConfig = {
  site: {
    name: "GX GENEX",
    author: "GX GENEX",
    description: "Société informatique tunisienne — création de sites web, plateformes applicatives, UI/UX et communication digitale.",
    url: "/",
    logo: "/assets/images/logo-genex.png"
  },
  navigation: {
    aria: "Navigation principale",
    items: [
      { title: "Accueil", href: "/" },
      { title: "Projets", href: "/projects/" },
      { title: "À propos", href: "/about/" },
      { title: "Contact", href: "/contact/" }
    ]
  },
  footer: {
    aria: "Navigation pied de page",
    copyright: "© 2026 GX GENEX. Tous droits réservés.",
    social: {
      twitter: "#",
      github: "#",
      email: "Genex.pro.tn@gmail.com"
    }
  }
} as const;
