let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // Annule le comportement âr défaut (envoie du formulaire)
  event.preventDefault();

  // Conteneur des erreurs
  let errorContainer = document.querySelector(".message-error");
  // Liste des erreurs
  let errorList = document.querySelector(".message-error ul");

  //On vide les erreurs et on cache le conteneur
  errorList.innerHtml = "";
  errorContainer.classList.remove("visible");

  //On récupère le champ email
  let email = document.querySelector("#email");

  // Si l'email est vide
  if (email.value === "") {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement ("li")
    err.innerText = "Le champ email ne peut pas être vide"

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err)
  } else {
    email.classList.add("success");
  }

  // On récupère le champ password
    let password = document. querySelector ("#password");
}
