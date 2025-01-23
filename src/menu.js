import "./style.css";

export function menu() {

    const content = document.getElementById("content");
    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("h1");
    title.className = "header";
    title.textContent = "Menu";

    container.appendChild(title);
    
    const categories = document.createElement("h2");
    categories.className = "category";


    container.appendChild(categories);

    const items = document.createElement("div");
    items.className = "items";

    const item = document.createElement("div");
    item.className = "item";

    const itemName = document.createElement("h2");
    itemName.textContent = "Apolo"

    const itemDescription = document.createElement("p");
    itemDescription.textContent = "this is the description of this item";

    const itemimg = document.createElement("div");
    itemimg.className = "itemImage";

    item.appendChild(itemName);
    item.appendChild(itemDescription);
    item.appendChild(itemimg);

    items.appendChild(item);
    container.appendChild(items);
    content.appendChild(container);
    
}