const selectDiv = document.querySelector(".currentSelector");
const options = document.querySelector(".options");
const individualOptions = document.querySelectorAll(".option");

selectDiv.addEventListener("click", () => {
    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
});

individualOptions.forEach(opcion => {
    opcion.addEventListener("click", () => {
        selectDiv.textContent = opcion.textContent;
        options.style.display = "none";
    });
});

document.addEventListener("click", (event) => {
    if (!selectDiv.contains(event.target)) {
        options.style.display = "none";
    }
});