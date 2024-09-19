function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        setTimeout(() => {
            selectedSection.classList.add('active');
        }, 50);

        var navItems = document.querySelectorAll('nav ul li a');
        navItems.forEach(function(item) {
            item.classList.remove('active');
        });
        var activeNavItem = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('about');
});

function openIG(smansa) {
    window.open(`https://www.instagram.com/smansakarawang?igsh=ZXJyZmlidjZrdDVv/${smansa}`, '_blank');
}

function openInstagram(achievest) {
    window.open(`https://www.instagram.com/smansakarawang?igsh=ZXJyZmlidjZrdDVv/${achievest}`, '_blank');
}