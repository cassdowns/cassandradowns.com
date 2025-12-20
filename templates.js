const menuTemplate = `
<nav class="v-menu">
    <a href="/image.html">about</a>
    <a href="/works">works</a>
    <a href="cv/CDowns-Resume_Art-2024.pdf" target="_blank" rel="noopener noreferrer">resume</a>
    <a href="mailto:hello@cassandradowns.com" target="_blank" rel="noopener noreferrer">email</a>
</nav>
`;

const footerTemplate = `
<footer class="footer">
    <div class="socials">
        <div id="insta">
            <a href="https://instagram.com/cassandradowns" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div id="copyright">
            &copy; cassandra downs <span id="year"></span>
        </div>
    </div>
</footer>
`;

function insertHTMLAt(selector, position, html) {
    const target = document.querySelector(selector);
    if (!target) return;

    const template = document.createElement('template');
    template.innerHTML = html.trim();
    const node = template.content.firstChild;

    if (position === 'before') {
        target.parentNode.insertBefore(node, target);
    } else if (position === 'after') {
        target.parentNode.insertBefore(node, target.nextSibling);
    }
}

// Insert menu before content
insertHTMLAt('#content', 'before', menuTemplate);

// Insert footer after bg image
insertHTMLAt('#bgimg', 'after', footerTemplate);

// Set year
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
