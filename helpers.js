export const darkLightBtn = document.createElement("button");
darkLightBtn.textContent = "Toggle Mode";
darkLightBtn.classList.add("darkLight-btn");

document.body.appendChild(darkLightBtn);


export function screenMode(e) {
    e.preventDefault();
    
    // toggle a dark mode class to the body
    document.body.classList.toggle("dark-mode");
    
    // change the button text based on the mode
    if (document.body.classList.contains("dark-mode")) {
        darkLightBtn.textContent = "Light Mode";
    } else {
        darkLightBtn.textContent = "Dark Mode";
    }
    
}
darkLightBtn.addEventListener("click", screenMode)