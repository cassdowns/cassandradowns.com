const menuTemplate = `
    <div id="menu">
        <a href="/image.html">about</a>
        <a href="/works">works</a>
        <a href="/cv/CDowns-Resume_Art-2024.pdf" target="_blank" rel="noopener noreferrer">resume</a>
        <a href="mailto:hello@cassandradowns.com" target="_blank" rel="noopener noreferrer">email</a>
    </div>
`;

const footerTemplate = `
<div id="footer">
    <div id="socials">
        <div id="insta">
            <a href="https://instagram.com/cassandradowns" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div id="copyright">
            &copy; cassandra downs <span id="year"></span>
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
