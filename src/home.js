import "./style.css"

export function homepage() {

    const content = document.getElementById("content");
    const container = document.createElement("div");
    container.className = "container";
    
    const headline = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "Alaska Star Restaurant";
    
    const info = document.createElement("p");
    info.textContent = "This is the finest and the most classic restaurant in Kumasi.";
    
    headline.appendChild(title);
    headline.appendChild(info);
    
    container.appendChild(headline);
    content.appendChild(container);
};


