// 1st May 2025
// JavaScript for interactivity

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website script loaded.");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            // Ensure it's an internal link
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Calculate position considering fixed header height
                    const headerOffset = document.querySelector("header").offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // TODO: Add active navigation link highlighting based on scroll position
    // TODO: Add any other desired interactivity (e.g., simple animations)
});

