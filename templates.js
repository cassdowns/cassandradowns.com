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
        <a href="/index.html">about</a>
        <a href="/works">works</a>
        <a href="/cv/CDowns-Resume_Art-2024.pdf" target="_blank" rel="noopener noreferrer">resume</a>
        <a href="mailto:hello@cassandradowns.com" target="_blank" rel="noopener noreferrer">email</a>
    </nav>
`;

const footerTemplate = `
    <footer id="footer">
        <div id="socials">
            <div id="insta">
                <a href="https://instagram.com/cassandradowns" target="_blank" rel="noopener noreferrer"></a>
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
