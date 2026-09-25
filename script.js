// Récupère tous les liens de filtre et toutes les photos
const filtres = document.querySelectorAll('.filtres a');
const photos = document.querySelectorAll('.photo');

// Pour chaque filtre, on écoute le clic
filtres.forEach(function (filtre) {
    filtre.addEventListener('click', function(event) {
        event.preventDefault();
       
        // Retire la classe "actif" de tous les filtres, puis l'ajoute seulement au filtre cliqué
        filtres.forEach(function (f) {
            f.classList.remove('actif');
        });
        filtre.classList.add('actif');

        // Récupère la catégorie du filtre cliqué
        const categorieChoisie = filtre.dataset.filtres;
        
        // Affiche seulement les photos qui correspondent à cette catégorie
        photos.forEach(function (photo) {
            if (categorieChoisie === photos.dataset.categorie) {
                photos.style.display = 'block';
            } else {
                photos.style.display = 'none';
            }
        });
    });
});