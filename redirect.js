document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor tags
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        // Check if the href ends with .html (but does not already have the .html in it)
        if (link.href.endsWith('.html') && !link.href.includes('.html#')) {
            // Remove the .html extension from the link's href
            link.href = link.href.slice(0, -5);
        }
  
        // Attach event listener to handle redirects
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // Ensure .html extension is added to the link's href before redirection
            if (!link.href.endsWith('.html')) {
                link.href += '.html';
            }
            // Redirect to the modified href
            window.location.href = link.href;
        });
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("code").forEach(codeBlock => {
        let html = codeBlock.innerHTML;
        // Regex to match everything after # on the same line
        html = html.replace(/#(.*?)(<br>|$)/g, '<span class="comment">#$1</span>$2');
        codeBlock.innerHTML = html;
    });
});