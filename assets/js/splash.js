let splashContainer = document.getElementById("splash");

const text = ["Contient du HTML <br> et du CSS", "Responsive!", "Suprise dans <br> les sources ? 😳"];

const randomInt = Math.round(Math.random() * (text.length - 1));

splashContainer.innerHTML = text[randomInt];
