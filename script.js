const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function hideAllSections() {
    sections.forEach(function(section) {
        section.classList.remove('active-section');
    });
}

function removeActiveClass() {
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
}

function showSection(sectionId) {
    hideAllSections();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }
}

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        showSection(sectionId);
        removeActiveClass();
        this.classList.add('active');
    });
});

showSection('about');