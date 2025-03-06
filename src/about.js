export function loadAbout() {
  const content = document.getElementById("content");
  //erase previous HTML content
  content.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "Welcome to Delicious Bites!"
  const description = document.createElement("p");
  description.textContent = "At Delicious Bites, we offer a cozy atmosphere and a menu full of flavorful dishes made with fresh ingredients. Perfect for any occasion!"
  const additionPara = document.createElement("p");
  additionPara.textContent = "Join us!"
  content.appendChild(title)
  content.appendChild(description)
  content.appendChild(additionPara)
}
