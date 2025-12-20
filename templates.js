// templates.js

// Menu template
const menuTemplate = `
<nav class="site-menu">
  <ul>
    <li><a href="index.html">bio</a></li>
    <li><a href="about.html">works</a></li>
    <li><a href="contact.html">email</a></li>
  </ul>
</nav>
<style>
  .site-menu ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 20px; }
  .site-menu li { display: inline-block; }
  .site-menu a { text-decoration: none; color: #000; font-weight: bold; }
  @media (max-width: 768px) { .site-menu ul { flex-direction: column; gap: 10px; } }
</style>
`;

// Footer template
const footerTemplate = `
<footer class="footer">
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
</footer>
<style>
  .footer { width: 100%; display: table; padding: 10px 0; text-align: left; border-top: 1px solid #ccc; }
  .socials { display: table-row; vertical-align: middle; }
  #insta, #copyright { display: table-cell; vertical-align: middle; }
  #insta { padding-right: 10px; }
  #insta img { width: 24px; height: 24px; display: block; }
  @media (max-width: 768px) {
    .socials { display: flex; align-items: center; gap: 10px; }
    #insta, #copyright { display: inline-block; vertical-align: middle; }
  }
</style>
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
