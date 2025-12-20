function insertTemplate(placeholderId, templateId) {
  const placeholder = document.getElementById(placeholderId);
  const template = document.getElementById(templateId);
  if (placeholder && template) {
    placeholder.appendChild(template.content.cloneNode(true));
  }
}

// Insert menu and footer
insertTemplate('menu-placeholder', 'menu-template');
insertTemplate('footer-placeholder', 'footer-template');
