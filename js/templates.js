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

function renderLink(link) {
    if (!link) return '';
    return `<p class="workLink"><a href="${link.href}">${link.text}</a></p>`;
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
        <a href="/works.html">Works</a>
        <a href="/contact.html">Contact</a>
    </nav>
`;

const mobileMenuTemplate = `
    <a href="/index.html">Home</a>
    <a href="/about.html">About</a>
    <a href="/works.html">Works</a>
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

function renderWorkCard(work) {
    return `
        <a href="${work.url}" class="card">
            <div class="cover"><img src="${work.images[0]}" alt="${work.title}, ${work.year}"></div>
            <div class="title">
                <h2><i>${work.title}</i>, ${work.year}</h2>
                <h3>${work.medium}</h3>
                <span class="viewMore" aria-hidden="true">View work →</span>
            </div>
        </a>
    `;
}

/* ─── Journals page ───────────────────────────────────────── */

function renderJournalCard(entry) {
    return `
        <a href="${entry.url}" class="card">
            <div class="cover"><img src="${entry.image}" alt="${entry.title}"></div>
            <div class="title">
                <h2><i>${entry.title}</i></h2>
                <h3>${entry.dateLabel}</h3>
                <p class="excerpt">${entry.excerpt}</p>
                <span class="viewMore" aria-hidden="true">Read more →</span>
            </div>
        </a>
    `;
}

function buildJournalsGallery() {
    const content = document.getElementById('content');
    if (!content) return;

    const heading = document.createElement('h1');
    heading.className = 'col-4';
    heading.textContent = 'Journals';
    content.appendChild(heading);

    const folio = document.createElement('div');
    folio.id = 'folio';
    folio.innerHTML = journals.slice().sort((a, b) => b.date.localeCompare(a.date)).map(renderJournalCard).join('');

    content.appendChild(folio);
}

function buildJournalPage() {
    const slug = window.location.pathname.split('/').pop().replace('.html', '');
    const entry = journals.find(j => j.slug === slug);
    if (!entry) return;

    document.title = `${entry.title} - Cassandra Downs | Ceramic Artist`;

    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content = entry.excerpt;
    document.head.appendChild(metaDesc);

    const og = {
        'og:title': `${entry.title} — Cassandra Downs`,
        'og:description': entry.excerpt,
        'og:image': `https://cassandradowns.com${entry.image}`,
        'og:type': 'article'
    };
    for (const [property, content] of Object.entries(og)) {
        const tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.content = content;
        document.head.appendChild(tag);
    }

    const content = document.getElementById('content');
    if (!content) return;

    const heroImg = document.createElement('div');
    heroImg.className = 'workImg';
    heroImg.innerHTML = `<img src="${entry.image}" alt="${entry.title}">`;
    content.appendChild(heroImg);

    const textBlock = document.createElement('div');
    textBlock.className = 'workText';
    textBlock.innerHTML = `
        <h1><i>${entry.title}</i></h1>
        <h3>${entry.dateLabel}</h3>
        <div id="journalBody"><p class="caption">Loading…</p></div>
    `;
    content.appendChild(textBlock);

    fetch(entry.contentFile)
        .then(res => {
            if (!res.ok) throw new Error(`Could not load ${entry.contentFile}`);
            return res.text();
        })
        .then(md => {
            document.getElementById('journalBody').innerHTML = marked.parse(md);
        })
        .catch(err => {
            document.getElementById('journalBody').innerHTML = '<p class="caption">Sorry, this entry couldn\'t be loaded.</p>';
            console.error(err);
        });

    buildBreadcrumb([
        { label: 'Journals', url: '/journals.html' },
        { label: entry.title }
    ]);
}


/* ─── Works page ───────────────────────────────────────── */

function buildGallery() {
    const content = document.getElementById('content');
    if (!content) return;

    const heading = document.createElement('h1');
    heading.className = 'col-4';
    heading.textContent = 'Works';
    content.appendChild(heading);

    const folio = document.createElement('div');
    folio.id = 'folio';
    folio.innerHTML = works.map(renderWorkCard).join('');

    content.appendChild(folio);
}


/* ─── Breadcrumb ─────────────────────────────────────────── */

function buildBreadcrumb(crumbs) {
    const breadcrumb = document.createElement('nav');
    breadcrumb.id = 'breadcrumb';
    breadcrumb.setAttribute('aria-label', 'breadcrumb');
    breadcrumb.innerHTML = crumbs.map((crumb, i) => {
        const sep = i > 0 ? '<span aria-hidden="true">/</span>' : '';
        const item = crumb.url
            ? `<a href="${crumb.url}">${crumb.label}</a>`
            : `<span>${crumb.label}</span>`;
        return sep + item;
    }).join('');

    const content = document.getElementById('content');
    if (content) content.insertBefore(breadcrumb, content.firstChild);
}


/* ─── Main image crossfade ───────────────────────────────────

   Fades the current image out, swaps its src only once the new
   image has actually finished loading (avoids a flash of a
   half-loaded image), then fades it back in. Falls back to an
   instant swap for anyone with prefers-reduced-motion set.
   ─────────────────────────────────────────────────────────── */

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function swapMainImage(img, newSrc) {
    const fadeMs = prefersReducedMotion() ? 0 : 180;

    const preload = new Image();
    preload.src = newSrc;

    const finishSwap = () => {
        img.src = newSrc;
        requestAnimationFrame(() => img.classList.remove('is-fading'));
    };

    img.classList.add('is-fading');

    setTimeout(() => {
        preload.complete ? finishSwap() : preload.addEventListener('load', finishSwap, { once: true });
    }, fadeMs);
}


/* ─── Work image gallery ─────────────────────────────────── */

function renderGallery(work) {
    const wrapper = document.createElement('div');
    wrapper.className = 'workGallery';

    const main = document.createElement('div');
    main.className = 'galleryMain';
    main.innerHTML = `<img id="galleryMainImg" src="${work.images[0]}" alt="${work.title}, ${work.year}">`;
    wrapper.appendChild(main);

    // Only build a thumbnail strip when there's more than one image
    if (work.images.length > 1) {
        const thumbsWrap = document.createElement('div');
        thumbsWrap.className = 'galleryThumbsWrap';

        const thumbs = document.createElement('div');
        thumbs.className = 'galleryThumbs';
        thumbs.setAttribute('role', 'tablist');
        thumbs.setAttribute('aria-label', `${work.title} — additional images`);

        const mainImg = () => document.getElementById('galleryMainImg');

        work.images.forEach((image, i) => {
            const thumb = document.createElement('button');
            thumb.type = 'button';
            thumb.className = 'galleryThumb' + (i === 0 ? ' active' : '');
            thumb.setAttribute('role', 'tab');
            thumb.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
            thumb.setAttribute('aria-label', `View image ${i + 1} of ${work.images.length}`);
            thumb.innerHTML = `<img src="${image}" alt="" loading="lazy">`;

            // User-triggered only — click/tap or keyboard (Enter/Space via native button).
            // Nothing here auto-advances or auto-scrolls.
            thumb.addEventListener('click', () => {
                if (thumb.classList.contains('active')) return;

                swapMainImage(mainImg(), image);

                thumbs.querySelectorAll('.galleryThumb').forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                thumb.classList.add('active');
                thumb.setAttribute('aria-selected', 'true');

                // Bring the selected thumbnail fully into view if it was
                // cut off at either edge — 'nearest' means already-visible
                // thumbnails (e.g. near the middle) don't cause a jump.
                thumb.scrollIntoView({
                    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                    inline: 'nearest',
                    block: 'nearest'
                });
            });

            thumbs.appendChild(thumb);
        });

        thumbsWrap.appendChild(thumbs);

        // Fade edges — pure visual hint, toggled by scroll position below
        const fadeLeft = document.createElement('div');
        fadeLeft.className = 'galleryFade galleryFade--left';
        fadeLeft.setAttribute('aria-hidden', 'true');

        const fadeRight = document.createElement('div');
        fadeRight.className = 'galleryFade galleryFade--right';
        fadeRight.setAttribute('aria-hidden', 'true');

        thumbsWrap.appendChild(fadeLeft);
        thumbsWrap.appendChild(fadeRight);

        // Chevrons — hidden on touch devices via CSS (hover/pointer:fine media query);
        // on devices where they do show, click scrolls the strip by ~80% of its width.
        // Purely user-triggered, same as everything else here.
        const chevronLeft = document.createElement('button');
        chevronLeft.type = 'button';
        chevronLeft.className = 'galleryChevron galleryChevron--left';
        chevronLeft.setAttribute('aria-label', 'Scroll thumbnails left');
        chevronLeft.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
        chevronLeft.addEventListener('click', () => {
            thumbs.scrollBy({ left: -thumbs.clientWidth * 0.8, behavior: 'smooth' });
        });

        const chevronRight = document.createElement('button');
        chevronRight.type = 'button';
        chevronRight.className = 'galleryChevron galleryChevron--right';
        chevronRight.setAttribute('aria-label', 'Scroll thumbnails right');
        chevronRight.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
        chevronRight.addEventListener('click', () => {
            thumbs.scrollBy({ left: thumbs.clientWidth * 0.8, behavior: 'smooth' });
        });

        thumbsWrap.appendChild(chevronLeft);
        thumbsWrap.appendChild(chevronRight);

        wrapper.appendChild(thumbsWrap);

        initGalleryScrollIndicators(thumbsWrap, thumbs);
    }

    return wrapper;
}


/* ─── Scroll indicator state ─────────────────────────────────

   Toggles .can-scroll-left / .can-scroll-right on the wrapper
   based on actual scroll position, so fades and chevrons only
   appear where there's genuinely more content to reveal.
   ─────────────────────────────────────────────────────────── */

function initGalleryScrollIndicators(wrap, thumbs) {
    const EDGE_THRESHOLD = 4; // px — avoids flicker from sub-pixel rounding

    const update = () => {
        const maxScroll = thumbs.scrollWidth - thumbs.clientWidth;
        wrap.classList.toggle('can-scroll-left', thumbs.scrollLeft > EDGE_THRESHOLD);
        wrap.classList.toggle('can-scroll-right', thumbs.scrollLeft < maxScroll - EDGE_THRESHOLD);
    };

    thumbs.scrollLeft = 0;

    thumbs.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    // Thumbnail images are lazy-loaded, so scrollWidth can change after
    // the initial check — re-run once each has finished loading.
    thumbs.querySelectorAll('img').forEach(img => {
        if (!img.complete) img.addEventListener('load', update, { once: true });
    });

    update();
}


/* ─── Work pages ─────────────────────────────────────────── */

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

    // Image gallery — main viewer + thumbnail strip
    content.appendChild(renderGallery(work));

    // Text block — four sixths
    const textBlock = document.createElement('div');
    textBlock.className = 'workText';
    textBlock.innerHTML = `
        <h1><i>${work.title}</i>, ${work.year}</h1>
        <h3>${work.medium}</h3>
        ${renderDescription(work.description)}
        ${renderLink(work.link)}
    `;
    content.appendChild(textBlock);

    // Breadcrumb
    buildBreadcrumb([
        { label: 'Works', url: '/works.html' },
        { label: work.title }
    ]);
}


/* ─── Print pages ────────────────────────────────────────── */

function buildPrintPage() {
    const slug = window.location.pathname.split('/').pop().replace('.html', '');
    const print = prints.find(p => p.slug === slug);
    if (!print) return;

    document.title = `${print.title} — Print | Cassandra Downs`;

    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content = `${print.title}. ${print.price}.`;
    document.head.appendChild(metaDesc);

    const content = document.getElementById('content');
    if (!content) return;

    content.innerHTML += `
        <div class="printHeader col-4">
            <h1><i>${print.title}</i></h1>
            <h3>${print.subtitle}</h3>
        </div>

        <div id="printHero">
            <img src="${print.image}" alt="${print.imageAlt}">
        </div>

        <div id="printInfo">
            <p class="price">${print.price}</p>
            <p>${print.edition}</p>
            <p>${print.material}</p>
            <p>${print.size}</p>
        </div>

        <div class="col-4">
            ${renderDescription(print.description)}
            ${renderLink(print.link)}
        </div>

        <div id="printForm">
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="46c0aad7-0069-46a6-952b-19329a7f9103">
                <input type="hidden" name="subject" value="${print.formSubject}">
                <input type="hidden" name="redirect" value="https://cassandradowns.com/thanks.html">

                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="country">Shipping country</label>
                <input type="text" id="country" name="country" required>

                <label for="framing">Framing</label>
                <select id="framing" name="framing" required>
                    ${print.framingOptions.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
                </select>

                <button type="submit">Reserve this print</button>
                <p class="caption">${print.caption}</p>
            </form>
        </div>
    `;

    // Breadcrumb
    buildBreadcrumb([
        { label: 'Works', url: '/works.html' },
        { label: print.parent.label, url: print.parent.url },
        { label: 'Print' }
    ]);
}