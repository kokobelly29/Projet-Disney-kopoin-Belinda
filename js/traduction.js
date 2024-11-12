// Dictionnaire de traductions
const translations = {
    fr: {
        title1: "Nouvelles productions originales, grands films, séries cultes et encore + en streaming",
        subtitle1: "Sans coût additionnel. Sans engagement.*",
        email_label: "Entrez votre adresse e-mail pour commencer ou réactiver votre abonnement.",
        button_inscrire: "S'INSCRIRE",
        promotion: "Profitez de 12 mois au prix de 10 avec un abonnement Premium ou Standard annuel.",
        exclusive: "Seulement sur Disney+",
        exclusive_text: "Des séries et productions originales exclusives que vous ne trouverez sur aucun autre service de streaming.",
        terms: "Conditions générales d'abonnement",
        privacy: "Règles de Respect de la Vie Privée",
        rights: "Droits Données dans l'UE et au R-U",
        cookies: "Politique de cookies",
        ads: "Publicités ciblées par centres d'intérêt",
        devices: "Appareils compatibles",
        help: "Aide",
        offer: "Offrez Disney+",
        about: "À propos de Disney+",
        manage: "Gérer les préférences de confidentialité",
        footer_notice: "Le contenu et les plateformes disponibles peuvent varier selon la région."
    },
    en: {
        title1: "New Original Productions, Blockbuster Movies, Iconic Series, and More Streaming",
        subtitle1: "No additional cost. No commitment.*",
        email_label: "Enter your email address to start or reactivate your subscription.",
        button_inscrire: "SUBSCRIBE",
        promotion: "Enjoy 12 months for the price of 10 with an annual Premium or Standard plan.",
        exclusive: "Only on Disney+",
        exclusive_text: "Exclusive series and original productions you won't find on any other streaming service.",
        terms: "Terms and Conditions of Subscription",
        privacy: "Privacy Policy",
        rights: "Rights in the EU and UK",
        cookies: "Cookie Policy",
        ads: "Interest-based Ads",
        devices: "Compatible Devices",
        help: "Help",
        offer: "Offer Disney+",
        about: "About Disney+",
        manage: "Manage privacy preferences",
        footer_notice: "The content and platforms available may vary by geographic area."
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    const elements = Object.keys(translations[lang]);
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = translations[lang][id];
    });
}

// Gérer le changement de langue via le sélecteur
document.getElementById('lang').addEventListener('change', function() {
    changeLanguage(this.value);
});

// Initialisation de la langue par défaut (français)
changeLanguage('fr');
