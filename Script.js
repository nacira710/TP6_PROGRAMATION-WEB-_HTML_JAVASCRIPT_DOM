const maDiv = document.createElement('div');
const monParagraphe = document.createElement('p');

monParagraphe.textContent = "Ceci est un paragraphe";
monParagraphe.textContent = "Le texte a été modifié";

monParagraphe.style.backgroundColor = "lightblue";
monParagraphe.style.textAlign = "center";

maDiv.appendChild(monParagraphe);
document.body.appendChild(maDiv);

maDiv.addEventListener('click', function() {
    monParagraphe.textContent = "Un clic a été détecté";
});
