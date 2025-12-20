const menuTemplate = `
    <div class="v-menu">
        <a href="/" class="current">bio</a>
        <a href="/works">works</a>
        <a href="mailto:hello@cassandradowns.com">contact</a>
    </div>
`;

const footerTemplate = `
<div class="footer">
    <div class="socials">
        <div id="insta">
            <a href="https://instagram.com/cassandradowns" target="_blank"></a>
        </div>
        <div id="copyright">
            &copy; Cassandra Downs <span id="year"></span>
        </div>
    </div>
</div>
`;

function insertTemplateHTML(placeholderId, html) {
  const placeholder = document.getElementById(placeholderId);
  if (placeholder) placeholder.innerHTML = html;
}

insertTemplateHTML('menu-placeholder', menuTemplate);
insertTemplateHTML('footer-placeholder', footerTemplate);

const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
