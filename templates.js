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
        medium: 'Foraged clay, sand, red ochre and acacia resin',
        description: 'This Wimburr (Wallaby) vessel is a product of the 6th Melbourne lockdown, the clay used was dug out of the artist\'s backyard, where she also fired it in a pit - "Not Dead, Only Sleeping" conveys a yearning to end the stasis experienced during COVID.',
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
        medium: 'Foraged clay, pit fired',
        description: '',
        images: [
            '/img/koala-front.jpg'
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
            '/img/dilly-shell-together.jpg'
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

    const column = document.createElement('div');
    column.id = 'column';

    const heading = document.createElement('h1');
    heading.textContent = 'Gallery';
    column.appendChild(heading);

    const folio = document.createElement('div');
    folio.id = 'folio';

    works.forEach(work => {
        folio.innerHTML += `
            <div class="card">
                <a href="${work.url}">
                    <div class="cover"><img src="${work.images[0]}" alt="${work.title}, ${work.year}"></div>
                    <div class="title">
                        <h2><i>${work.title}</i>, ${work.year}</h2>
                        <h4>${work.medium}</h4>
                    </div>
                </a>
            </div>
        `;
    });

    column.appendChild(folio);
    content.appendChild(column);
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
        'description': work.description || '',
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

    // First image
    content.innerHTML += `
        <div class="worksImg">
            <img src="${work.images[0]}" alt="${work.title}, ${work.year}">
        </div>
    `;

    // Title block
    const column = document.createElement('div');
    column.id = 'column';
    column.innerHTML = `
        <h1><i>${work.title}</i>, ${work.year}</h1>
        <h5>${work.medium}</h5>
        ${work.description ? `<p>${work.description}</p>` : ''}
    `;
    content.appendChild(column);

    // Remaining images
    work.images.slice(1).forEach(image => {
        content.innerHTML += `
            <div class="worksImg">
                <img src="${image}" alt="${work.title}">
            </div>
        `;
    });

    // Breadcrumb
    buildBreadcrumb(work.title);
}