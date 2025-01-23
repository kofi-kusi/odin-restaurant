import { homepage } from "./home";
import { menu } from "./menu";
import { about } from "./about";

homepage();

document
    .querySelectorAll(".btn")
    .forEach((button) => addEventListener("click", handleClick));

    function handleClick(e) {
        const btnName = e.target.innerHTML;
        const content = document.getElementById("content");
        content.innerHTML = "";

        switch (btnName) {
            case "Home":
                homepage();
                break;
            case "Menu":
                menu();
                break;
            case "About":
                about();
                break;
            default:
                homepage();
                break;
        }
    }