const pageMeta = {
    description: "Cassandra Downs is an Anglo-Australian and Stolen Generations affected woman living on Wurundjeri Country. She is a self-taught ceramic artist whose zoomorphic vessels explore the effects of colonisation on both the environment and identity of so-called Australia.",
    keywords: "cassandra, cass, downs, sculpture, ceramic, pottery, zoomorphic, vessels, australian, native, clay, london"
};


/* ─── Works data ─────────────────────────────────────────── */

const works = [
    {
        slug: 'not-dead-only-sleeping',
        title: 'Not Dead, Only Sleeping',
        year: '2021',
        medium: 'Clay, sand, red ochre; acacia sap glaze; pit-fired',
        description: [
            'This Wimburr (Wallaby) vessel was made on Wurundjeri Woi Wurrung Country during Melbourne\'s sixth and final COVID lockdown, the end of which resulted in more cumulative time under stay-at-home orders than any other city in the world - six lockdowns over eighteen months.',
            'After months of being confined to house and yard, pacing, looking forward to her permitted hour of exercise each day, she was forced to recognise the shape of her own life: that this was how a domestic dog lived. She felt like she was sleeping through her own life rather than living it. When the end of the fifth lockdown was announced, the city finally felt real hope - plans were made to see friends and loved ones, to travel, to ride bikes in the sun - and a future felt close again. But nine days later, when the sixth lockdown was announced, this hope catastrophically collapsed. Not Dead, Only Sleeping was a piece born of that collapse. The artist replaced feelings of isolation and sadness with anger, and a fierce hunger to actually live - and confined once again to her home studio, expressed those feelings through sculpture.',
            'Every material used was foraged within walking distance of the Maribyrnong River, an extremely important body of water to the Wurundjeri people, taking its name from the phrase Mirring-gnay-bir-nong - "I can hear a ringtail possum". It was a river relied upon for transport, materials, food, medicine, and water, long before it provided the materials for this vessel: acacia sap gathered from local trees; sand and red ochre sourced from an old quarry along the river; and raw clay from the artist\'s backyard, where the piece was later pit-fired using wood collected from roadside fellings.',
            '<p class="formNote">Original sculpture in a private collection in Melbourne, AUS. Limited edition prints available as part of the \'Pre-Fire\' series.</p>'
        ],
        link: {
            text: 'View available prints',
            href: '/prints/ndos.html'
        },
        images: [
            '/img/wallaby-face-web.jpg',
            '/img/wallaby-front-web.jpg'
        ],
        url: '/works/not-dead-only-sleeping.html'
    },
    {
        slug: 'homecoming',
        title: 'Homecoming',
        year: '2023',
        medium: 'Clay, sand, manna gum, paperbark; acacia sap glaze; pit-fired',
        description: [
            '<i>Body</i>: Clay from Darebin, sand from the Maribyrnong, sap of Garrong (Black Wattle / Acacia mearnsii). <i>Plug</i>: Wurun branch (Manna Gum / Eucalyptus viminalis) coated in Baggup sap (Grass Tree / Xanthorroea australis) with a small strip of Paperbark (Melaleuca quinquenervia).',
            'For over 100 years my family has been disconnected from Country, Community, and Culture. The impact of colonisation on our identity was so deeply ingrained that I always felt too afraid to reach out - that I was a fraud for not being able to answer "who\'s your mob, where are you from?"',
            'This Gurrborra (Koala) is a reflection of our journey. It matured under intense stress, leaving it scarred from what it went through - but most importantly, unbroken. Once removed from the fire, it was lovingly repaired and coated in the sap of Garrong, the grandparent plant, to protect it for what\'s to come.',
            'Like the Gurrborra, our family is slow to reach our destination, but every day I feel our ancestors pushing me to regain what was kept from us. It doesn\'t matter how long we were lost, as long as we eventually come home.',
            'All components were foraged and crafted on Wurundjeri Country, and fired on Boon Wurrung Country - with gratitude.'
        ],
        images: [
            '/img/koala-front.jpg',
            '/img/koala-face.jpg',
            '/img/koala-top.jpg'
        ],
        url: '/works/homecoming.html'
    },
    {
        slug: 'dingo',
        title: 'Dingo Vessel',
        year: '2021',
        medium: 'Terracotta, pit fired',
        description: '',
        images: [
            '/img/dingo_front-web.jpg',
            '/img/dingo_side-web.jpg',
            '/img/dingo_top-web.jpg'
        ],
        url: '/works/dingo.html'
    },
    {
        slug: 'bilby',
        title: 'Bilby Vessel',
        year: '2020',
        medium: 'Foraged clay, pit fired',
        description: '',
        images: [
            '/img/bilby-front-web.jpg',
            '/img/bilby-side-web.jpg'
        ],
        url: '/works/bilby.html'
    },
    {
        slug: 'thylacine',
        title: 'Thylacine Vessel',
        year: '2020',
        medium: 'Terracotta, gas fired to 1100 deg',
        description: '',
        images: [
            '/img/thylacine-side-web.jpg'
        ],
        url: '/works/thylacine.html'
    },
    {
        slug: 'kalk-kalk',
        title: 'Kalk Kalk',
        year: '2024',
        medium: 'Tea Tree Wood, Ringtail Possum Pelt',
        description: '',
        images: [
            '/img/clapsticks-main.jpg',
            '/img/clapsticks-sticks.jpg',
            '/img/clapsticks-top.jpg'
        ],
        url: '/works/kalk-kalk.html'
    },
    {
        slug: 'dilly',
        title: 'Dillybag and Shell Holder',
        year: '2021',
        medium: 'Twine, Raffia, Paperbark',
        description: '',
        images: [
            '/img/dilly-shell-together.jpg',
            '/img/shell-side-up.jpg',
            '/img/shell-spilled.jpg',
            '/img/weave-close.jpg'
        ],
        url: '/works/dilly.html'
    }
];


/* ─── Meta tags ──────────────────────────────────────────── */

function insertMetaTags(metaObj) {
    const head = document.head;
    for (const [name, content] of Object.entries(metaObj)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        head.appendChild(meta);
    }
}

function setPageTitle() {
    const file = window.location.pathname.split('/').pop().replace('.html', '');
    const page = file && file !== 'index'
        ? `${file.charAt(0).toUpperCase() + file.slice(1)} - Cassandra Downs | Ceramic Artist`
        : 'Cassandra Downs | Ceramic Artist';
    document.title = page;
}

function renderDescription(description) {
    if (!description) return '';
    if (Array.isArray(description)) return description.map(p => `<p>${p}</p>`).join('');
    return `<p>${description}</p>`;
}

function descriptionToText(description) {
    if (!description) return '';
    if (Array.isArray(description)) return description.join(' ');
    return description;
}


/* ─── Templates ──────────────────────────────────────────── */

const menuBarTemplate = `
    <div id="menuBar">
        <button id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
            <svg id="iconHamburger" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            <svg id="iconClose" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <line x1="4" y1="4" x2="20" y2="20"/>
                <line x1="20" y1="4" x2="4" y2="20"/>
            </svg>
        </button>
        <div id="menuTitle">Cassandra Downs</div>
    </div>
`;

const menuTemplate = `
    <nav id="menu">
        <div id="menuTitle">Cassandra Downs</div>
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="/gallery.html">Gallery</a>
        <a href="/contact.html">Contact</a>
    </nav>
`;

const mobileMenuTemplate = `
    <a href="/index.html">Home</a>
    <a href="/about.html">About</a>
    <a href="/gallery.html">Gallery</a>
    <a href="/contact.html">Contact</a>
`;

const footerTemplate = `
    <footer id="footer">
        <div id="socials">
            <div id="insta">
                <a href="https://instagram.com/cassandradowns" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="5"/>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                </a>
            </div>
            <div id="copyright">
                &copy; Cassandra Downs <span id="year"></span>
            </div>
        </div>
    </footer>
`;


/* ─── DOM injection ──────────────────────────────────────── */

function insertTemplateHTML(placeholderId, html) {
    const placeholder = document.getElementById(placeholderId);
    if (placeholder) placeholder.innerHTML = html;
}

function buildChrome() {
    const body = document.body;

    const menuBarEl = document.createElement('div');
    menuBarEl.id = 'menu-placeholder';
    body.insertBefore(menuBarEl, body.firstChild);

    const mobileNavEl = document.createElement('nav');
    mobileNavEl.id = 'menuMobile';
    body.insertBefore(mobileNavEl, menuBarEl.nextSibling);

    const menuPanelEl = document.createElement('div');
    menuPanelEl.className = 'menuPanel';
    menuPanelEl.id = 'menuPanel';
    body.insertBefore(menuPanelEl, mobileNavEl.nextSibling);

    const footerEl = document.createElement('div');
    footerEl.className = 'footerLeft';
    footerEl.innerHTML = '<div id="footer-placeholder"></div>';
    body.appendChild(footerEl);
}

buildChrome();
setPageTitle();
insertMetaTags(pageMeta);
insertTemplateHTML('menu-placeholder', menuBarTemplate);
insertTemplateHTML('menuMobile', mobileMenuTemplate);
insertTemplateHTML('menuPanel', menuTemplate);
insertTemplateHTML('footer-placeholder', footerTemplate);

document.getElementById('year').textContent = new Date().getFullYear();

const currentFile = window.location.pathname.split('/').pop() || 'index';
document.querySelectorAll('#menu a, #menuMobile a').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop().replace('.html', '');
    if (linkFile === currentFile) link.classList.add('active');
});


/* ─── Mobile menu ────────────────────────────────────────── */

const toggle = document.getElementById('menuToggle');
const menuMobile = document.getElementById('menuMobile');
const iconHamburger = document.getElementById('iconHamburger');
const iconClose = document.getElementById('iconClose');

const overlay = document.createElement('div');
overlay.id = 'overlay';
document.body.appendChild(overlay);

function openMenu() {
    menuMobile.classList.add('mobile-open');
    overlay.classList.add('active');
    iconHamburger.style.opacity = '0';
    iconHamburger.style.pointerEvents = 'none';
    iconClose.style.opacity = '1';
    iconClose.style.pointerEvents = 'auto';
    toggle.setAttribute('aria-expanded', 'true');
    menuMobile.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
    menuMobile.classList.remove('mobile-open');
    overlay.classList.remove('active');
    iconHamburger.style.opacity = '1';
    iconHamburger.style.pointerEvents = 'auto';
    iconClose.style.opacity = '0';
    iconClose.style.pointerEvents = 'none';
    toggle.setAttribute('aria-expanded', 'false');
    menuMobile.setAttribute('aria-hidden', 'true');
}

toggle.addEventListener('click', () => {
    menuMobile.classList.contains('mobile-open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);


/* ─── Gallery page ───────────────────────────────────────── */

function buildGallery() {
    const content = document.getElementById('content');
    if (!content) return;

    const heading = document.createElement('h1');
    heading.className = 'col-4';
    heading.textContent = 'Gallery';
    content.appendChild(heading);

    const folio = document.createElement('div');
    folio.id = 'folio';

   works.forEach(work => {
    folio.innerHTML += `
        <a href="${work.url}" class="card">
            <div class="cover"><img src="${work.images[0]}" alt="${work.title}, ${work.year}"></div>
            <div class="title">
                <h2><i>${work.title}</i>, ${work.year}</h2>
                <h3>${work.medium}</h3>
                <span class="viewMore" aria-hidden="true">View work →</span>
            </div>
        </a>
    `;
});

    content.appendChild(folio);
}

/* ─── Inventory page ───────────────────────────────────────── */

function buildInventory() {
    const content = document.getElementById('content');
    if (!content) return;

    const heading = document.createElement('h1');
    heading.className = 'col-4';
    heading.textContent = 'Inventory';
    content.appendChild(heading);

    const display = document.createElement('div');
    display.id = 'display';

   works.forEach(work => {
    display.innerHTML += `
        <a href="${work.url}" class="card">
            <div class="cover"><img src="${work.images[0]}" alt="${work.title}, ${work.year}"></div>
            <div class="title">
                <h2><i>${work.title}</i>, ${work.year}</h2>
                <h3>${work.medium}</h3>
                <span class="viewMore" aria-hidden="true">View work →</span>
            </div>
        </a>
    `;
});

    content.appendChild(folio);
}

/* ─── Work pages ─────────────────────────────────────────── */

function buildBreadcrumb(label) {
    const formatted = label.charAt(0).toUpperCase() + label.slice(1);
    const breadcrumb = document.createElement('nav');
    breadcrumb.id = 'breadcrumb';
    breadcrumb.setAttribute('aria-label', 'breadcrumb');
    breadcrumb.innerHTML = `
        <a href="/gallery.html">Gallery</a>
        <span aria-hidden="true">/</span>
        <span>${formatted}</span>
    `;
    const content = document.getElementById('content');
    if (content) content.insertBefore(breadcrumb, content.firstChild);
}

function buildWorkPage() {
    const slug = window.location.pathname.split('/').pop().replace('.html', '');
    const work = works.find(w => w.slug === slug);
    if (!work) return;

    // Page title
    document.title = `${work.title} - Cassandra Downs | Ceramic Artist`;

    // Meta description
    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content = `${work.title}, ${work.year}. ${work.medium}.`;
    document.head.appendChild(metaDesc);

    // Open graph tags
    const og = {
        'og:title': `${work.title} — Cassandra Downs`,
        'og:description': `${work.title}, ${work.year}. ${work.medium}.`,
        'og:image': `https://cassandradowns.com${work.images[0]}`,
        'og:type': 'website'
    };
    for (const [property, content] of Object.entries(og)) {
        const tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.content = content;
        document.head.appendChild(tag);
    }

    // Structured data
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'VisualArtwork',
        'name': work.title,
        'dateCreated': work.year,
        'artMedium': work.medium,
        'description': descriptionToText(work.description),
        'image': `https://cassandradowns.com${work.images[0]}`,
        'artist': {
            '@type': 'Person',
            'name': 'Cassandra Downs',
            'url': 'https://cassandradowns.com'
        }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Build page content
    const content = document.getElementById('content');
    if (!content) return;

    // First image — full width
    const firstImg = document.createElement('div');
    firstImg.className = 'workImg';
    firstImg.innerHTML = `<img src="${work.images[0]}" alt="${work.title}, ${work.year}">`;
    content.appendChild(firstImg);

    // Text block — four sixths
    const textBlock = document.createElement('div');
    textBlock.className = 'workText';
    textBlock.innerHTML = `
        <h1><i>${work.title}</i>, ${work.year}</h1>
        <h3>${work.medium}</h3>
        ${renderDescription(work.description)}
    `;
    content.appendChild(textBlock);

    // Remaining images — full width
    work.images.slice(1).forEach(image => {
        const img = document.createElement('div');
        img.className = 'workImg';
        img.innerHTML = `<img src="${image}" alt="${work.title}">`;
        content.appendChild(img);
    });

    // Breadcrumb
    buildBreadcrumb(work.title);
}