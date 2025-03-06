export function loadContact() {
  const content = document.getElementById("content")
  content.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "Contact Us!"
  const email = document.createElement("p");
  email.textContent = "bruh@gmail.com"
  content.appendChild(title)
  content.appendChild(email)
}
