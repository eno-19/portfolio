// Récupérer les éléments
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
 
        // Ouvrir le menu
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        });
 
        // Fermer le menu
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
 
        // Fermer le menu quand on clique sur un lien
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
 
        // Fermer le menu si on redimensionne vers desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });



        // Image qui devient vidéo en desktop

        const video = document.querySelector('.work-video');

if (video && window.matchMedia('(min-width: 768px)').matches) {
    const source = document.createElement('source');
    source.src = video.dataset.src;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.load();
}