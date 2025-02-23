import { loadContent } from "./pageLoaded";
import { loadMenu } from "./menu.js";
import "./styles.css";
import "./reset.css";

window.onload = loadContent();

const nav = document.querySelector("nav");
const buttons = nav.querySelectorAll('button');


buttons[0].addEventListener("click", loadContent);
buttons[1].addEventListener("click", loadMenu);
