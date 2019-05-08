document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.host || "localhost";
    url = "Netlify Placeholder"
    document.getElementById("website-name").textContent = url;
    document.title = url + " | damosullivan/netlify-placeholder";
}, false);