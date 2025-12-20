// templates.js

// Menu template
const menuTemplate = `
    <div class="v-menu">
        <a href="/" class="current">bio</a>
        <a href="/works">works</a>
        <a href="mailto:hello@cassandradowns.com">contact</a>
    </div>
`;

// Footer template
const footerTemplate = `
<div class="footer">
    <div class="socials">
        <div id="insta">
            <a href="https://instagram.com/cassandradowns" target="_blank">
                <img src="instagram-icon.png" alt="Instagram" />
            </a>
        </div>
        <div id="copyright">
            &copy; Cassandra Downs <span id="year"></span>
        </div>
    </div>
</div>
`;

// Function to inject HTML into placeholder
function insertTemplateHTML(placeholderId, html) {
  const placeholder = document.getElementById(placeholderId);
  if (placeholder) placeholder.innerHTML = html;
}

// Insert menu and footer
insertTemplateHTML('menu-placeholder', menuTemplate);
insertTemplateHTML('footer-placeholder', footerTemplate);

// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
