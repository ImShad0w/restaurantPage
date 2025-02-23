export function loadMenu() {

  const content = document.getElementById("content");

  //Erase all previous HTML content
  content.innerHTML = "";


  //Create 4 menu items with paragraphs inside
  for (let i = 0; i < 5; i++) {
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item");
    const description = document.createElement("p")
    description.textContent = `This is item number: ${i + 1}`
    menuItem.appendChild(description)
    content.appendChild(menuItem);
  }
}
