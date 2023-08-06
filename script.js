function showTab(tab) {
    const homeTab = document.getElementById("homeTab");
    const artTab = document.getElementById("artTab");
    const aboutTab = document.getElementById("aboutTab");
    const contactTab = document.getElementById("contactTab");

    if (tab === "design") {
        designTab.style.display = "block";
        artTab.style.display = "none";
        aboutTab.style.display = "none";
        contactTab.style.display = "none";
    } else if (tab === "art") {
        designTab.style.display = "none";
        artTab.style.display = "block";
        aboutTab.style.display = "none";
        contactTab.style.display = "none";
    } else if (tab === "about") {
        designTab.style.display = "none";
        artTab.style.display = "none";
        aboutTab.style.display = "block";
        contactTab.style.display = "none";
    } else if (tab === "contact") {
        designTab.style.display = "none";
        artTab.style.display = "none";
        aboutTab.style.display = "none";
        contactTab.style.display = "block";
    }
}
