
// JavaScript pour activer/désactiver le menu burger
const menuIcon = document.querySelector(".menu-icon");
const burgerMenu = document.querySelector(".burger-menu");

menuIcon.addEventListener("click", function() {
    menuIcon.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});






















const form = document.getElementById("signup-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validation des champs (ajoutez d'autres règles au besoin)
  const name = form.elements.name.value.trim();
  const namePattern = /^[A-Za-z]{3,}$/; // Au moins 3 lettres pour le nom
  const phone = form.elements.phone.value.trim();
  const phonePattern = /^(\+212)[0-9]{9}$/;
  const cin = form.elements.cin.value.trim();
  const cinPattern = /^(?=.*[0-9])(?=.*[A-Za-z])[0-9A-Za-z]{6,8}$/;
  const email = form.elements.email.value.trim();
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const password = form.elements.password.value.trim();

  if (name === "" || email === "" || password === "" || cin === "" || phone === "") {
    alert("Veuillez remplir tous les champs correctement.");
  } else if (!namePattern.test(name)) {
    alert("Nom invalide. Le nom doit contenir au moins 3 lettres.");
  } else if (!phonePattern.test(phone)) {
    alert("Numéro de téléphone invalide. Le format correct est +212XXXXXXXXX.");
  } else if (!cinPattern.test(cin)) {
    alert("Numéro de CIN invalide. Le CIN doit comporter 6 à 8 caractères, incluant des chiffres et des lettres.");
  } else if (!emailPattern.test(email)) {
    alert("Adresse e-mail invalide. Veuillez saisir une adresse e-mail valide.");
  } else {
    // Envoyez le formulaire (vous pouvez ajouter la logique pour cela ici)
    alert("Formulaire soumis avec succès !");
    form.reset(); // Réinitialise le formulaire
  }
});

