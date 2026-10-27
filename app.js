// Immediate Theme Initialization (prevents dark flash on load)
if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light-theme");
}

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
    },
    tarentola_bischoffi: {
        commonName: {
            en: "Savage Islands Gecko",
            pt: "Osga-das-Selvagens"
        },
        scientificName: "Tarentola bischoffi",
        range: {
            en: "Selvagens Islands (Madeira, Portugal)",
            pt: "Ilhas Selvagens (Madeira, Portugal)"
        },
        size: "7 - 9 cm",
        diet: {
            en: "Insectivorous (beetles, ants, moths)",
            pt: "Insetívoro (escaravelhos, formigas, traças)"
        },
        status: {
            en: "Least Concern",
            pt: "Pouco Preocupante"
        },
        statusClass: "status-lc",
        badgeClass: "badge-madeira",
        accentColor: "#4f46e5", // Deep Indigo
        accentGlow: "rgba(79, 70, 229, 0.15)",
        wikiUrl: "https://en.wikipedia.org/wiki/Tarentola_bischoffi",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tarentola_bischoffi.JPG",
        description: {
            en: "Endemic to the tiny, hyper-arid Selvagens archipelago. It is a highly resilient gecko that shelters in rocky crevices and stone walls built by lighthouse keepers. They thrive by feeding on small insects attracted to nesting seabird colonies.",
            pt: "Endémica do pequeno e hiperárido arquipélago das Selvagens. É uma osga muito resiliente que se abriga em fendas rochosas e muros de pedra. Prosperam alimentando-se de pequenos insetos atraídos pelas colónias de aves."
        }
    },
    tarentola_gigas: {
        commonName: {
            en: "Cape Verde Giant Gecko",
            pt: "Osga-gigante-de-Cabo-Verde"
        },
        scientificName: "Tarentola gigas",
        range: {
            en: "Branco & Raso Islets (Cape Verde)",
            pt: "Ilhéus Branco & Raso (Cabo Verde)"
        },
        size: "Up to 28 cm",
        diet: {
            en: "Omnivorous (seabird eggs, insects, carrion)",
            pt: "Omnívoro (ovos de aves marinhas, insetos, carcaças)"
        },
        status: {
            en: "Vulnerable",
            pt: "Vulnerável"
        },
        statusClass: "status-vu",
        badgeClass: "badge-cape-verde",
        accentColor: "#eab308", // Gold
        accentGlow: "rgba(234, 179, 8, 0.15)",
        wikiUrl: "https://en.wikipedia.org/wiki/Tarentola_gigas",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tarentola_gigas_brancoensis_10797347.jpg",
        description: {
            en: "An impressive, heavy-bodied gecko that lives exclusively on the dry, uninhabited islets of Branco and Raso. Highly nocturnal, it has adapted to feed on the abundant insect life and eggs inside marine bird nesting colonies.",
            pt: "Uma osga impressionante e encorpada que vive exclusivamente nos ilhéus áridos e desabitados Branco e Raso. Altamente noturna, adaptou-se para se alimentar de insetos e ovos nas colónias de aves marinhas."
        }
    },
    chioninia_coctei: {
        commonName: {
            en: "Cape Verde Giant Skink",
            pt: "Sardão-gigante-de-Cabo-Verde"
        },
        scientificName: "Chioninia coctei",
        range: {
            en: "Branco & Raso Islets (Extinct)",
            pt: "Ilhéus Branco & Raso (Extinto)"
        },
        size: "Up to 32 cm",
        diet: {
            en: "Herbivorous (seeds and dry vegetation)",
            pt: "Herbívoro (sementes e vegetação seca)"
        },
        status: {
            en: "Extinct",
            pt: "Extinto"
        },
        statusClass: "status-ex",
        badgeClass: "badge-cape-verde",
        accentColor: "#64748b", // Slate Grey
        accentGlow: "rgba(100, 116, 139, 0.15)",
        wikiUrl: "https://en.wikipedia.org/wiki/Macroscincus",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chioninia_coctei.jpg",
        description: {
            en: "This large, herbivorous skink was endemic to the desert islets of Cape Verde. It went extinct in the early 20th century due to human introduction of cats, dogs, and rats, combined with severe island droughts. It remains a symbolic warning for island biogeography conservation.",
            pt: "Este grande sardão herbívoro era endémico dos ilhéus desérticos de Cabo Verde. Extinguiu-se no início do século XX devido à introdução de cães, gatos e ratos, combinada com secas severas. Permanece como um símbolo de alerta para a conservação insular."
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
            document.body.classList.add("lang-pt");
            document.body.classList.remove("lang-en");
        } else {
            btnEn.classList.add("active");
            btnPt.classList.remove("active");
            document.body.classList.add("lang-en");
            document.body.classList.remove("lang-pt");
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
            
            cardAvatar.src = data.image;
            cardAvatar.alt = data.commonName[currentLang] || data.commonName;
            
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

    // 4. Citizen-Science Field Sightings Gallery (iNaturalist API + Curated CC Fallback)
    const galleryGrid = document.getElementById("gallery-grid");
    const filterBtns = document.querySelectorAll(".gallery-filter-btn");
    const loadMoreBtn = document.getElementById("gallery-load-more");
    const syncIndicator = document.getElementById("gallery-sync-indicator");
    const syncText = document.getElementById("gallery-sync-text");
    const syncResetBtn = document.getElementById("gallery-sync-reset");
    const lightbox = document.getElementById("gallery-lightbox");

    // Fallback for browsers without <dialog closedby="any"> support
    if (lightbox && !("closedBy" in HTMLDialogElement.prototype)) {
        const outside = (e, dlg) => {
            const r = dlg.getBoundingClientRect();
            return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
        };
        let pressedOutside = false;
        lightbox.addEventListener("pointerdown", (e) => {
            pressedOutside = outside(e, lightbox);
        });
        lightbox.addEventListener("pointerup", (e) => {
            if (pressedOutside && outside(e, lightbox)) {
                lightbox.close();
            }
        });
    }

    // Curated Creative Commons fallback sightings in case offline or API rate-limited
    const fallbackSightings = [
        {
            id: "fallback-1",
            speciesKey: "teira_dugesii",
            scientificName: "Teira dugesii",
            commonName: { en: "Madeiran Wall Lizard", pt: "Lagartixa-da-madeira" },
            badgeClass: "badge-madeira",
            location: "Funchal, Ilha da Madeira, Portugal",
            date: "2025-08-14",
            observer: " Wikimedia Commons / B. Dupont",
            license: "CC BY-SA",
            thumbUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Teira_dugesii_-_Madeira.jpg",
            largeUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Teira_dugesii_-_Madeira.jpg",
            obsUrl: "https://www.inaturalist.org/taxa/36023-Teira-dugesii"
        },
        {
            id: "fallback-2",
            speciesKey: "gallotia_galloti",
            scientificName: "Gallotia galloti",
            commonName: { en: "Tenerife Lizard", pt: "Lagarto de Tenerife" },
            badgeClass: "badge-canary",
            location: "Parque Nacional del Teide, Tenerife",
            date: "2025-07-22",
            observer: "Quartl",
            license: "CC BY-SA",
            thumbUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_galloti_LC0211.jpg",
            largeUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_galloti_LC0211.jpg",
            obsUrl: "https://www.inaturalist.org/taxa/35906-Gallotia-galloti"
        },
        {
            id: "fallback-3",
            speciesKey: "gallotia_stehlini",
            scientificName: "Gallotia stehlini",
            commonName: { en: "Gran Canaria Giant Lizard", pt: "Lagarto-gigante de Gran Canária" },
            badgeClass: "badge-canary",
            location: "Maspalomas, Gran Canaria",
            date: "2025-06-11",
            observer: "ulli1105",
            license: "CC BY",
            thumbUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/GallotiaStehlini.jpg",
            largeUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/GallotiaStehlini.jpg",
            obsUrl: "https://www.inaturalist.org/taxa/35901-Gallotia-stehlini"
        },
        {
            id: "fallback-4",
            speciesKey: "gallotia_atlantica",
            scientificName: "Gallotia atlantica",
            commonName: { en: "Atlantic Lizard", pt: "Lagarto do Atlântico" },
            badgeClass: "badge-canary",
            location: "Timanfaya, Lanzarote",
            date: "2025-05-19",
            observer: "H. Zell",
            license: "CC BY-SA",
            thumbUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_atlantica_2.jpg",
            largeUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_atlantica_2.jpg",
            obsUrl: "https://www.inaturalist.org/taxa/35908-Gallotia-atlantica"
        },
        {
            id: "fallback-5",
            speciesKey: "tarentola_bischoffi",
            scientificName: "Tarentola bischoffi",
            commonName: { en: "Savage Islands Gecko", pt: "Osga-das-Selvagens" },
            badgeClass: "badge-madeira",
            location: "Selvagem Grande, Madeira",
            date: "2025-04-03",
            observer: "Frank Vassen",
            license: "CC BY",
            thumbUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tarentola_bischoffi.JPG",
            largeUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tarentola_bischoffi.JPG",
            obsUrl: "https://www.inaturalist.org/taxa/33997-Tarentola-bischoffi"
        },
        {
            id: "fallback-6",
            speciesKey: "gallotia_simonyi",
            scientificName: "Gallotia simonyi",
            commonName: { en: "El Hierro Giant Lizard", pt: "Lagarto-gigante de El Hierro" },
            badgeClass: "badge-canary",
            location: "Frontera, El Hierro",
            date: "2025-03-28",
            observer: "Luis Miguel Bugallo Sánchez",
            license: "CC BY-SA",
            thumbUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_simonyi.jpg",
            largeUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gallotia_simonyi.jpg",
            obsUrl: "https://www.inaturalist.org/taxa/35902-Gallotia-simonyi"
        }
    ];

    // Map filter keys or species keys to iNaturalist taxon names
    const filterToTaxaMap = {
        all: ["Teira dugesii", "Gallotia galloti", "Gallotia stehlini", "Gallotia atlantica", "Gallotia simonyi", "Tarentola bischoffi", "Tarentola gigas"],
        teira_dugesii: ["Teira dugesii"],
        gallotia: ["Gallotia galloti", "Gallotia stehlini", "Gallotia atlantica", "Gallotia simonyi"],
        tarentola: ["Tarentola bischoffi", "Tarentola gigas"],
        gallotia_galloti: ["Gallotia galloti"],
        gallotia_stehlini: ["Gallotia stehlini"],
        gallotia_simonyi: ["Gallotia simonyi"],
        gallotia_atlantica: ["Gallotia atlantica"],
        tarentola_bischoffi: ["Tarentola bischoffi"],
        tarentola_gigas: ["Tarentola gigas"],
        chioninia_coctei: ["Teira dugesii", "Tarentola gigas"] // Chioninia coctei is extinct in the wild, show Macaronesian relatives
    };

    const resolveSpeciesMeta = (scientificName = "") => {
        const lower = scientificName.toLowerCase();
        if (lower.includes("teira dugesii")) {
            return {
                commonName: speciesData.teira_dugesii.commonName,
                badgeClass: "badge-madeira"
            };
        }
        if (lower.includes("gallotia stehlini")) {
            return {
                commonName: speciesData.gallotia_stehlini.commonName,
                badgeClass: "badge-canary"
            };
        }
        if (lower.includes("gallotia simonyi")) {
            return {
                commonName: speciesData.gallotia_simonyi.commonName,
                badgeClass: "badge-canary"
            };
        }
        if (lower.includes("gallotia atlantica")) {
            return {
                commonName: speciesData.gallotia_atlantica.commonName,
                badgeClass: "badge-canary"
            };
        }
        if (lower.includes("gallotia")) {
            return {
                commonName: speciesData.gallotia_galloti.commonName,
                badgeClass: "badge-canary"
            };
        }
        if (lower.includes("tarentola gigas")) {
            return {
                commonName: speciesData.tarentola_gigas.commonName,
                badgeClass: "badge-cape-verde"
            };
        }
        if (lower.includes("tarentola")) {
            return {
                commonName: speciesData.tarentola_bischoffi.commonName,
                badgeClass: "badge-madeira"
            };
        }
        return {
            commonName: { en: scientificName || "Macaronesian Lizard", pt: scientificName || "Lagarto da Macaronésia" },
            badgeClass: "badge-canary"
        };
    };

    let activeGalleryFilter = "all";
    let currentGalleryPage = 1;
    let currentGalleryItems = [];
    const galleryCache = new Map();

    const renderSkeletons = (count = 6) => {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = "";
        for (let i = 0; i < count; i++) {
            const skel = document.createElement("div");
            skel.className = "gallery-skeleton";
            galleryGrid.appendChild(skel);
        }
    };

    const openLightbox = (item) => {
        if (!lightbox) return;
        const badgeEl = document.getElementById("lightbox-badge");
        const titleEl = document.getElementById("lightbox-title");
        const sciEl = document.getElementById("lightbox-scientific");
        const imgEl = document.getElementById("lightbox-img");
        const obsEl = document.getElementById("lightbox-observer");
        const locEl = document.getElementById("lightbox-location");
        const dateEl = document.getElementById("lightbox-date");
        const licEl = document.getElementById("lightbox-license");
        const linkEl = document.getElementById("lightbox-inat-link");

        const displayTitle = item.commonName[currentLang] || item.commonName.en || item.scientificName;
        badgeEl.className = `island-badge ${item.badgeClass}`;
        badgeEl.textContent = item.location.split(",").slice(-1)[0].trim() || "Macaronesia";
        titleEl.textContent = displayTitle;
        sciEl.innerHTML = `<em>${item.scientificName}</em>`;
        imgEl.src = item.largeUrl || item.thumbUrl;
        imgEl.alt = `${displayTitle} (${item.scientificName}) — © ${item.observer}`;
        obsEl.textContent = `© ${item.observer}`;
        locEl.textContent = item.location;
        dateEl.textContent = item.date;
        licEl.textContent = item.license;
        linkEl.href = item.obsUrl;

        lightbox.showModal();
    };

    const renderGalleryCards = (items, append = false) => {
        if (!galleryGrid) return;
        if (!append) {
            galleryGrid.innerHTML = "";
        }
        items.forEach((item) => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "gallery-card";
            const titleText = item.commonName[currentLang] || item.commonName.en || item.scientificName;
            card.setAttribute("aria-label", `${titleText} (${item.scientificName}) - ${item.location}`);

            card.innerHTML = `
                <div class="gallery-card-media">
                    <img class="gallery-card-img" src="${item.thumbUrl}" alt="${titleText} (${item.scientificName})" loading="lazy">
                    <span class="gallery-license-pill">${item.license}</span>
                    <span class="gallery-species-pill"><em>${item.scientificName}</em></span>
                </div>
                <div class="gallery-card-body">
                    <div class="gallery-card-title">${titleText}</div>
                    <div class="gallery-card-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${item.location}</span>
                    </div>
                    <div class="gallery-card-meta">
                        <span class="gallery-card-observer">&copy; ${item.observer}</span>
                        <span>${item.date}</span>
                    </div>
                </div>
            `;

            card.addEventListener("click", () => openLightbox(item));
            galleryGrid.appendChild(card);
        });
    };

    const fetchSightings = async (filterKey = "all", page = 1, append = false) => {
        const cacheKey = `${filterKey}_p${page}`;
        if (galleryCache.has(cacheKey)) {
            const cached = galleryCache.get(cacheKey);
            currentGalleryItems = append ? [...currentGalleryItems, ...cached] : cached;
            renderGalleryCards(cached, append);
            return;
        }

        if (!append) {
            renderSkeletons(6);
        } else if (loadMoreBtn) {
            loadMoreBtn.disabled = true;
        }

        try {
            const taxaList = filterToTaxaMap[filterKey] || filterToTaxaMap.all;
            const taxonNameParam = encodeURIComponent(taxaList[0]);
            // If "all" or multi-species group, query multiple or primary genus/species
            let queryUrl = `https://api.inaturalist.org/v1/observations?quality_grade=research&photos=true&photo_license=cc0,cc-by,cc-by-nc,cc-by-sa,cc-by-nc-sa&per_page=6&page=${page}&order_by=observed_on&order=desc`;

            if (filterKey === "all") {
                // Mix verified observations across Teira dugesii and Gallotia
                queryUrl += `&taxon_name=${encodeURIComponent(page % 2 === 1 ? "Teira dugesii" : "Gallotia")}`;
            } else if (filterKey === "gallotia") {
                queryUrl += `&taxon_name=Gallotia`;
            } else if (filterKey === "tarentola") {
                queryUrl += `&taxon_name=${encodeURIComponent("Tarentola bischoffi")}`;
            } else {
                queryUrl += `&taxon_name=${taxonNameParam}`;
            }

            const response = await fetch(queryUrl);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const json = await response.json();

            const results = (json.results || []).filter(obs => obs.photos && obs.photos.length > 0);
            if (results.length === 0) throw new Error("No observations returned");

            const normalized = results.slice(0, 6).map((obs) => {
                const photo = obs.photos[0];
                const rawUrl = photo.url || "";
                const mediumUrl = rawUrl.replace("square", "medium");
                const largeUrl = rawUrl.replace("square", "large");
                const sciName = (obs.taxon && obs.taxon.name) ? obs.taxon.name : taxaList[0];
                const meta = resolveSpeciesMeta(sciName);
                const observerName = (obs.user && (obs.user.name || obs.user.login)) ? (obs.user.name || `@${obs.user.login}`) : "iNaturalist Observer";
                const rawLicense = (photo.license_code || obs.license_code || "CC BY-NC").toUpperCase().replace(/-/g, " ");
                const place = obs.place_guess || (currentLang === "pt" ? "Macaronésia" : "Macaronesia");
                const obsDate = obs.observed_on || (obs.created_at ? obs.created_at.slice(0, 10) : "2025");

                return {
                    id: obs.id,
                    scientificName: sciName,
                    commonName: meta.commonName,
                    badgeClass: meta.badgeClass,
                    location: place,
                    date: obsDate,
                    observer: observerName,
                    license: rawLicense,
                    thumbUrl: mediumUrl,
                    largeUrl: largeUrl,
                    obsUrl: obs.uri || `https://www.inaturalist.org/observations/${obs.id}`
                };
            });

            galleryCache.set(cacheKey, normalized);
            currentGalleryItems = append ? [...currentGalleryItems, ...normalized] : normalized;
            renderGalleryCards(normalized, append);
        } catch (err) {
            // Graceful fallback to curated Creative Commons dataset
            const filteredFallback = fallbackSightings.filter((item) => {
                if (filterKey === "all") return true;
                if (filterKey === "gallotia") return item.scientificName.toLowerCase().includes("gallotia");
                if (filterKey === "tarentola") return item.scientificName.toLowerCase().includes("tarentola");
                return item.speciesKey === filterKey || item.scientificName.toLowerCase().includes(filterKey.split("_")[0]);
            });
            const finalFallback = filteredFallback.length > 0 ? filteredFallback : fallbackSightings;
            currentGalleryItems = append ? [...currentGalleryItems, ...finalFallback] : finalFallback;
            renderGalleryCards(finalFallback, append);
        } finally {
            if (loadMoreBtn) {
                loadMoreBtn.disabled = false;
            }
        }
    };

    const setGalleryFilter = (filterKey, fromExplorer = false) => {
        activeGalleryFilter = filterKey;
        currentGalleryPage = 1;

        // Highlight matching filter pill
        filterBtns.forEach((btn) => {
            const btnFilter = btn.getAttribute("data-filter");
            const isMatch =
                btnFilter === filterKey ||
                (fromExplorer && filterKey.startsWith("gallotia_") && btnFilter === "gallotia") ||
                (fromExplorer && filterKey.startsWith("tarentola_") && btnFilter === "tarentola");
            btn.classList.toggle("active", isMatch);
        });

        // Show or hide the Explorer sync indicator pill
        if (syncIndicator && syncText) {
            if (fromExplorer && speciesData[filterKey]) {
                const sp = speciesData[filterKey];
                const spName = sp.commonName[currentLang] || sp.commonName.en;
                syncText.innerHTML = currentLang === "pt"
                    ? `Sincronizado com o Explorador: <strong>${spName}</strong> (<em>${sp.scientificName}</em>)`
                    : `Synced with Species Explorer: <strong>${spName}</strong> (<em>${sp.scientificName}</em>)`;
                syncIndicator.hidden = false;
            } else {
                syncIndicator.hidden = true;
            }
        }

        fetchSightings(filterKey, 1, false);
    };

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filterKey = btn.getAttribute("data-filter");
            setGalleryFilter(filterKey, false);
        });
    });

    if (syncResetBtn) {
        syncResetBtn.addEventListener("click", () => {
            setGalleryFilter("all", false);
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            currentGalleryPage += 1;
            fetchSightings(activeGalleryFilter, currentGalleryPage, true);
        });
    }

    // Initial load of the gallery
    fetchSightings("all", 1, false);

    // Language Toggle Click Handlers
    btnEn.addEventListener("click", () => {
        if (currentLang !== "en") {
            currentLang = "en";
            localStorage.setItem("galatrixa-lang", currentLang);
            updateLangBtnStyles();
            updateSpeciesCard(selectElement.value);
            renderGalleryCards(currentGalleryItems, false);
        }
    });

    btnPt.addEventListener("click", () => {
        if (currentLang !== "pt") {
            currentLang = "pt";
            localStorage.setItem("galatrixa-lang", currentLang);
            updateLangBtnStyles();
            updateSpeciesCard(selectElement.value);
            renderGalleryCards(currentGalleryItems, false);
        }
    });

    // Dropdown change listener (updates Explorer Card AND syncs Sightings Gallery)
    selectElement.addEventListener("change", (e) => {
        const selectedSpecies = e.target.value;
        updateSpeciesCard(selectedSpecies);
        setGalleryFilter(selectedSpecies, true);
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
            header.style.backgroundColor = "var(--bg-header-scroll)";
        } else {
            header.style.padding = "0";
            header.style.backgroundColor = "var(--bg-header)";
        }
    });

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById("theme-toggle");
    const sunIcon = themeToggleBtn.querySelector(".sun-icon");
    const moonIcon = themeToggleBtn.querySelector(".moon-icon");
    
    // Set initial toggle button states based on root class list
    if (document.documentElement.classList.contains("light-theme")) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    }
    
    themeToggleBtn.addEventListener("click", () => {
        const isLight = document.documentElement.classList.toggle("light-theme");
        if (isLight) {
            localStorage.setItem("theme", "light");
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
        } else {
            localStorage.setItem("theme", "dark");
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
        }
    });

    // Hero Background Slideshow
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlideIndex = 0;
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlideIndex].classList.remove("active");
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            slides[currentSlideIndex].classList.add("active");
        }, 6000); // Transition every 6 seconds
    }
});
