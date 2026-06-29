/* ==========================================================================
   GalaTrixa Landing Page Logic
   ========================================================================== */

// 1. Bilingual Species Database
const speciesData = {
    gallotia_galloti: {
        commonName: {
            en: "Tenerife Lizard",
            pt: "Lagarto de Tenerife"
        },
        scientificName: "Gallotia galloti",
        range: {
            en: "Tenerife & La Palma (Canaries)",
            pt: "Tenerife & La Palma (Canárias)"
        },
        size: "30 - 45 cm",
        diet: {
            en: "Omnivorous (leaves, fruit, insects)",
            pt: "Omnívoro (folhas, frutos, insetos)"
        },
        status: {
            en: "Least Concern",
            pt: "Pouco Preocupante"
        },
        statusClass: "status-lc",
        badgeClass: "badge-canary",
        accentColor: "#00e5ff", // Teal
        accentGlow: "rgba(0, 229, 255, 0.15)",
        wikiUrl: "https://en.wikipedia.org/wiki/Gallotia_galloti",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_galloti_LC0211.jpg",
        description: {
            en: "Famous for the striking bright blue cheek patches that develop on mature males. They are active, diurnal basking animals, highly abundant across all habitats from volcanic fields to gardens. They serve as major seed dispersers for native flora.",
            pt: "Famoso pelas manchas azuis brilhantes nas faces e flancos dos machos maduros. São animais muito ativos e diurnos, abundantes em todos os habitats, desde campos de lava a jardins. Têm um papel fundamental na dispersão de sementes da flora local."
        }
    },
    gallotia_stehlini: {
        commonName: {
            en: "Gran Canaria Giant Lizard",
            pt: "Lagarto-gigante de Gran Canária"
        },
        scientificName: "Gallotia stehlini",
        range: {
            en: "Gran Canaria (Canaries)",
            pt: "Gran Canária (Canárias)"
        },
        size: "Up to 80 cm",
        diet: {
            en: "Primarily herbivorous (plants & fruit)",
            pt: "Principalmente herbívoro (plantas e frutos)"
        },
        status: {
            en: "Least Concern",
            pt: "Pouco Preocupante"
        },
        statusClass: "status-lc",
        badgeClass: "badge-canary",
        accentColor: "#ff9f1c", // Amber
        accentGlow: "rgba(255, 159, 28, 0.15)",
        wikiUrl: "https://en.wikipedia.org/wiki/Gallotia_stehlini",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/GallotiaStehlini.jpg",
        description: {
            en: "A robust example of island gigantism, this is the largest living species of the Gallotia genus. It features a heavy-set body and massive head with yellowish-orange cheeks. They are resilient and occupy environments from sea shores to dry high pine forests.",
            pt: "Um exemplo robusto de gigantismo insular, sendo a maior espécie viva do género Gallotia. Apresenta um corpo pesado e uma cabeça maciça com bochechas cor de laranja amarelado. São muito resilientes e habitam desde zonas costeiras a pinhais de altitude."
        }
    },
    gallotia_simonyi: {
        commonName: {
            en: "El Hierro Giant Lizard",
            pt: "Lagarto-gigante de El Hierro"
        },
        scientificName: "Gallotia simonyi",
        range: {
            en: "El Hierro (Canaries)",
            pt: "El Hierro (Canárias)"
        },
        size: "60 - 75 cm",
        diet: {
            en: "Omnivorous (mainly plants)",
            pt: "Omnívoro (principalmente plantas)"
        },
        status: {
            en: "Critically Endangered",
            pt: "Criticamente Ameaçado"
        },
        statusClass: "status-en",
        badgeClass: "badge-canary",
        accentColor: "#ef4444", // Red
        accentGlow: "rgba(239, 68, 68, 0.15)",
        wikiUrl: "https://en.wikipedia.org/wiki/Gallotia_simonyi",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_simonyi.jpg",
        description: {
            en: "Once widespread, this giant lizard was pushed to the brink of extinction by human settlement, cats, and dogs. Long feared extinct, a small relict population was rediscovered on Roque Chico de Salmor. Intense captive breeding and reintroduction programs are underway.",
            pt: "Outrora abundante, este lagarto-gigante foi levado à beira da extinção pela colonização humana, gatos e cães. Considerado extinto, uma pequena população relíquia foi redescoberta no Roque Chico de Salmor. Existem programas intensivos de reprodução em cativeiro."
        }
    },
    gallotia_atlantica: {
        commonName: {
            en: "Atlantic Lizard",
            pt: "Lagarto do Atlântico"
        },
        scientificName: "Gallotia atlantica",
        range: {
            en: "Lanzarote & Fuerteventura",
            pt: "Lanzarote & Fuerteventura"
        },
        size: "20 - 28 cm",
        diet: {
            en: "Omnivorous (invertebrates & fruit)",
            pt: "Omnívoro (invertebrados e frutos)"
        },
        status: {
            en: "Least Concern",
            pt: "Pouco Preocupante"
        },
        statusClass: "status-lc",
        badgeClass: "badge-canary",
        accentColor: "#10b981", // Green
        accentGlow: "rgba(16, 185, 129, 0.15)",
        wikiUrl: "https://en.wikipedia.org/wiki/Gallotia_atlantica",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_atlantica_2.jpg",
        description: {
            en: "A smaller, highly colorful lizard native to the eastern, drier Canary Islands. Males are recognizable by two rows of green or turquoise spots along their flanks. They are extremely hardy, adapting well to volcanic ash and sand dunes.",
            pt: "Um lagarto mais pequeno e colorido, nativo do leste árido das Canárias. Os machos são fáceis de identificar pelas duas filas de manchas verdes ou turquesa nos flancos. São muito resistentes, adaptando-se a areia e cinzas vulcânicas."
        }
    },
    teira_dugesii: {
        commonName: {
            en: "Madeiran Wall Lizard",
            pt: "Lagarto-da-madeira"
        },
        scientificName: "Teira dugesii",
        range: {
            en: "Madeira (Native) & Azores (Intro.)",
            pt: "Madeira (Nativo) & Açores (Intro.)"
        },
        size: "10 - 20 cm",
        diet: {
            en: "Generalist Omnivore (insects, nectar, fruit)",
            pt: "Omnívoro Generalista (insetos, néctar, frutos)"
        },
        status: {
            en: "Least Concern",
            pt: "Pouco Preocupante"
        },
        statusClass: "status-lc",
        badgeClass: "badge-madeira",
        accentColor: "#a855f7", // Purple
        accentGlow: "rgba(168, 85, 247, 0.15)",
        wikiUrl: "https://en.wikipedia.org/wiki/Teira_dugesii",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Teira_dugesii_-_Madeira.jpg",
        description: {
            en: "Endemic to Madeira, but accidentally introduced to the Azores where it has naturalized. They have massive population densities, sometimes climbing trees or vine stocks to feed on fruit. In the Azores, their generalist feeding habits threaten nesting seabird populations.",
            pt: "Endémico da Madeira, mas introduzido acidentalmente nos Açores, onde se naturalizou. Atinge densidades populacionais elevadíssimas, escalando por vezes árvores ou videiras para comer fruta. Nos Açores, a sua dieta generalista ameaça as aves marinhas."
        }
    }
};

// 2. State Management & Event Hooks
document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("species-select");
    const speciesCard = document.getElementById("species-card");
    
    const cardBadge = document.getElementById("species-island-badge");
    const cardCommonName = document.getElementById("species-common-name");
    const cardScientificName = document.getElementById("species-scientific-name");
    const cardStatus = document.getElementById("species-status");
    const cardAvatar = document.getElementById("lizard-avatar");
    const cardSize = document.getElementById("species-size");
    const cardDiet = document.getElementById("species-diet");
    const cardDescription = document.getElementById("species-description");
    const cardWikiLink = document.getElementById("species-wiki-link");

    // Language Toggles
    const btnEn = document.getElementById("lang-btn-en");
    const btnPt = document.getElementById("lang-btn-pt");
    
    // Active Language State (read from localstorage or default to en)
    let currentLang = localStorage.getItem("galatrixa-lang") || "en";

    // Update active visual state for language buttons
    const updateLangBtnStyles = () => {
        if (currentLang === "pt") {
            btnPt.classList.add("active");
            btnEn.classList.remove("active");
            document.body.className = "lang-pt";
        } else {
            btnEn.classList.add("active");
            btnPt.classList.remove("active");
            document.body.className = "lang-en";
        }
    };

    // Update Species profile text depending on selected language
    const updateSpeciesCard = (speciesKey) => {
        const data = speciesData[speciesKey];
        if (!data) return;

        // Apply a visual fade out transition
        speciesCard.style.opacity = "0";
        speciesCard.style.transform = "translateY(10px) scale(0.98)";

        setTimeout(() => {
            // Update Card Content based on active lang
            cardBadge.textContent = data.range[currentLang] || data.range;
            cardBadge.className = `island-badge ${data.badgeClass}`;
            
            cardCommonName.textContent = data.commonName[currentLang] || data.commonName;
            cardScientificName.innerHTML = `<em>${data.scientificName}</em>`;
            
            cardStatus.textContent = data.status[currentLang] || data.status;
            cardStatus.className = `status-value ${data.statusClass}`;
            
            cardAvatar.innerHTML = "";
            cardAvatar.style.backgroundImage = `url('${data.image}')`;
            
            cardSize.textContent = data.size;
            cardDiet.textContent = data.diet[currentLang] || data.diet;
            cardDescription.textContent = data.description[currentLang] || data.description;
            
            cardWikiLink.href = data.wikiUrl;

            // Dynamically change theme CSS accent color variables
            document.documentElement.style.setProperty('--accent-teal', data.accentColor);
            document.documentElement.style.setProperty('--accent-teal-glow', data.accentGlow);

            // Animate card back in
            speciesCard.style.opacity = "1";
            speciesCard.style.transform = "translateY(0) scale(1)";
        }, 200);
    };

    // Set initial language class and update card
    updateLangBtnStyles();
    updateSpeciesCard(selectElement.value);

    // Language Toggle Click Handlers
    btnEn.addEventListener("click", () => {
        if (currentLang !== "en") {
            currentLang = "en";
            localStorage.setItem("galatrixa-lang", currentLang);
            updateLangBtnStyles();
            updateSpeciesCard(selectElement.value);
        }
    });

    btnPt.addEventListener("click", () => {
        if (currentLang !== "pt") {
            currentLang = "pt";
            localStorage.setItem("galatrixa-lang", currentLang);
            updateLangBtnStyles();
            updateSpeciesCard(selectElement.value);
        }
    });

    // Dropdown change listener
    selectElement.addEventListener("change", (e) => {
        updateSpeciesCard(e.target.value);
    });

    speciesCard.style.transition = "opacity 0.25s ease, transform 0.25s ease";

    // 3. Scroll Reveal System using Intersection Observer
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Header scroll background adjust
    const header = document.getElementById("site-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "5px 0";
            header.style.backgroundColor = "rgba(9, 11, 12, 0.9)";
        } else {
            header.style.padding = "0";
            header.style.backgroundColor = "rgba(9, 11, 12, 0.75)";
        }
    });
});
