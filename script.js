// Sélection de l'image par sa classe
let image = document.querySelector(".presentation-image img");

// Ajout d'une bordure au survol
image.addEventListener("mouseover", function () {
    image.style.border = "10px solid #c83f3f";
});

// Suppression de la bordure quand la souris quitte l'image
image.addEventListener("mouseout", function () {
    image.style.border = "none";
});

// Fonction de validation du formulaire
function validerFormulaire(e) {
    const form = document.forms["contactForm"];

    if (form.prenom.value.trim() === "") {
        alert("Veuillez entrer votre prénom");
        form.prenom.focus();
        return false;
    }

    if (form.nom.value.trim() === "") {
        alert("Veuillez entrer votre nom");
        form.nom.focus();
        return false;
    }

    if (form.projet.value.trim() === "") {
        alert("Veuillez décrire votre projet");
        form.projet.focus();
        return false;
    }

    if (form.message.value.trim() === "") {
        alert("Veuillez écrire un message");
        form.message.focus();
        return false;
    }

    alert("Formulaire validé avec succès !");
    return true;
}

// Lier la fonction au formulaire lors de la soumission
document.forms["contactForm"].onsubmit = function (e) {
    if (!validerFormulaire(e)) {
        e.preventDefault(); // empêche l'envoi du formulaire si invalide
    }
};

