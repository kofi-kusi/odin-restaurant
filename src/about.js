import "./style.css";

export function about() {

    const content = document.getElementById("content");
    const container = document.createElement("container");
    container.className = "container";
    
    const title = document.createElement("h1");
    title.className = "header";
    title.textContent = "Contact Us";

    container.appendChild(title);

    content.appendChild(container);
  };