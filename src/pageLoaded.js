import Icon from "./restaurant.jpg";

export function loadContent() {
  const content = document.getElementById("content")
  //Erase all HTML inside content
  content.innerHTML = "";
  const title = document.createElement("h1");
  title.innerHTML = "Kirill's restaurant";
  const myIcon = new Image();
  myIcon.src = Icon;
  const description = document.createElement("p")
  description.innerHTML = "Why our restaurant? Because we are the best at our craft!"
  content.appendChild(title);
  content.appendChild(myIcon);
  content.appendChild(description);
}

