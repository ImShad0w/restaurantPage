import Icon from "./restaurant.jpg";

export function loadContent() {
  const content = document.getElementById("content")
  //Erase all HTML inside content
  content.innerHTML = "";
  const myIcon = new Image();
  myIcon.src = Icon;
  const description = document.createElement("p")
  description.innerHTML = "Why our restaurant? Because we are the best at our craft!"
  content.appendChild(myIcon);
  content.appendChild(description);
}

