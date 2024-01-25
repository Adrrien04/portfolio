document.addEventListener("alpine:init", () => {
    Alpine.data("portfolio", () => ({
        title: "Portfolio d'Adrrien",
        showNav: false,
        modal: false,
        modalContent: null,
        currentLogo: null,
        currentFormation: null,
        handleNav() {
            this.showNav = !this.showNav;
        },
        setCurrentLogo(logo) {
            this.currentLogo = { ...logo }; // Utilisez une copie pour éviter de modifier l'objet d'origine
        },
        resetCurrentLogo() {
            this.currentLogo = null;
        },
        setCurrentFormation(formation) {
            this.currentFormation = { ...formation }; // Utilisez une copie pour éviter de modifier l'objet d'origine
        },
        resetCurrentFormation() {
            this.currentFormation = null;
        },
        handleContact() {
            window.location.href = "mailto:adrrien.chandrakumar@gmail.com";
        },
        aboutMeContent: `
            Bonjour ! Je m'appelle Adrrien et je suis un développeur web passionné par la création de solutions innovantes et performantes. 
            Je suis actuellement employé CSC (Caisse et Services Clients) chez Boulanger. 
            Je suis également étudiant en deuxième année de Licence Sciences et Ingénierie - Concepteur Développeur Programmation Globale à l'EFREI Paris, 
            où j'ai pu acquérir de nombreuses compétences telles que la maîtrise du HTML, CSS, JavaScript, Java, PHP, SQL, Alpine, Bootstrap et PostgreSQL. 
            Je suis en recherche d'un stage et d'une alternance à compter de juin 2024 dans le secteur du développement informatique, afin de mettre en pratique mes compétences et d'acquérir de l'expérience professionnelle. 
            Je suis motivé, curieux et prêt à relever de nouveaux défis. 
            N'hésitez pas à consulter mon profil GitHub pour découvrir mes projets !
            [GitHub](https://github.com/Adrrien04)
        `,

        openAboutMeModal() {
            this.modalContent = this.aboutMeContent;
            this.modal = true;
        },
        logos: [
            {
                id: 1,
                src: "./assets/logo/dgfip.png",
                alt: "Direction Générale des Finances Publiques",
                details: "Gestion de la correspondance entrante<br>Classification et traitement des moyens de paiement",
            },
            {
                id: 2,
                src: "./assets/logo/boulanger.png",
                alt: "Boulanger",
                details: "Gestion de la clientèle au Service Après Vente<br>Gestion des caisses",
            },
            {
                id: 3,
                src: "./assets/logo/pangee.png",
                alt: "Pangée ONG",
                details: "Assistance à l’équipe de développement :<br>Base de donnée, Wordpress, HTML / CSS, Graphisme, Odoo",
            },
        ],
        formations: [
            {
                id: 1,
                src: "./assets/logo/efreiblanc.png",
                alt: "Efrei Paris Panthéon Assas",
                details: "Licence Science et Ingénierie - Concepteur Développeur Programmation Globale / Bachelor Ingénierie & Numérique",
            },
            {
                id: 2,
                src: "./assets/logo/clemenceau.png",
                alt: "Lycée Georges Clémenceau Villemomble",
                details: "Baccalauréat Mathématiques & Physiques Chimie <br> Physiques Chimie Mention Euro",
            },
        ],

        projects: [
            {
                id: 1,
                img: "./assets/projets/phonexa.png",
                imgAlt: "phonexa",
                title: "Phonexa",
                body: "Développement de Phonexa,un site de web de tchat en ligne. Avec une fonction de connexion / déconnexion et hashage des mots de passes dans la base de donnée <br> Technologies utilisées : JavaScript, PHP MVC, HTML, PostGres, Alpine. <br> Cliquez sur l'icone du projet pour en savoir plus",
                repoUrl:"https://github.com/Adrrien04/phonexa",
            },
            {
                id: 2,
                img: "./assets/projets/carlux.png",
                imgAlt: "carlux",
                title: "Carlux",
                body: "Développement d'un site de vente de voiture, possibilité de prise de commande, avec affichage des prix, et de pouvoir modifier la base de données, en ajoutant ou supprimant des véhicules. <br> Technologies utilisées : PHP MVC, Bootstrap, MySQL. <br> Cliquez sur l'icone du projet pour en savoir plus",
                repoUrl:"https://github.com/Adrrien04/carlux",
            },
            {
                id: 3,
                img: "./assets/projets/efreiflix.png",
                imgAlt: "efreiflix",
                title: "Efreiflix",
                body: "Développement d'un site web nommé Efreiflix, avec des données affichées sur la page HTML a l'aide d'un fichier JSON <br> Utilisation de Javascript, JSON, Html et Css. <br> Cliquez sur l'icone du projet pour en savoir plus",
                repoUrl:"https://efreiflix.vercel.app/",
            },
            {
                id: 4,
                img: "./assets/projets/hangman.png",
                imgAlt: "hangman",
                title: "The Hangman",
                body: "Développement d'un site web en groupe contenant le jeu du Pendu, les règles de celui-ci et son histoire <br> Utilisation de Javascript, Wamp, Html et Css. <br> Cliquez sur l'icone du projet pour en savoir plus",
                repoUrl:"https://lependuload.000webhostapp.com/",
            },
        ],

    }));
});
