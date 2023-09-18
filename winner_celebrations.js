function toggleDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}
toggleDisplay(rulebox);
