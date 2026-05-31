const pageMeta = {
  description: "Cassandra Downs is an Anglo-Australian and Stolen Generations affected woman living on Wurundjeri Country. She is a self-taught ceramic artist whose zoomorphic vessels explore the effects of colonisation on both the environment and identity of so-called Australia.",
  keywords: "cassandra, cass, downs, sculpture, ceramic, pottery, zoomorphic, vessels, australian, native, clay, london"
};

function insertMetaTags(metaObj) {
  const head = document.head;
  for (const [name, content] of Object.entries(metaObj)) {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    head.appendChild(meta);
  }
}

const menuTemplate = `
    <nav id="menu">
        <img src="">
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="/gallery.html">Gallery</a>
        <a href="/contact.html">Contact</a>
    </nav>
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
                &copy; cassandra downs <span id="year"></span>
            </div>
        </div>
    </footer>
`;

function insertTemplateHTML(placeholderId, html) {
  const placeholder = document.getElementById(placeholderId);
  if (placeholder) placeholder.innerHTML = html;
}

insertMetaTags(pageMeta);
insertTemplateHTML('menu-placeholder', menuTemplate);
insertTemplateHTML('footer-placeholder', footerTemplate);

const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const currentPage = window.location.pathname;
document.querySelectorAll('#menu a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
