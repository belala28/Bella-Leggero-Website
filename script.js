function showTab(tab) {
    const designTab = document.getElementById("designTab");
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

  // Function to show project details
function showProjectDetails(projectName) {
    const projectDetails = getProjectDetails(projectName);
    const projectDetailsSection = document.getElementById('projectDetails');
    
    projectDetailsSection.innerHTML = projectDetails;
    projectDetailsSection.style.display = "block"; // Show the section
}

// Function to retrieve project details
function getProjectDetails(projectName) {
    if (projectName === 'cactus') {
        return `
            <h2>TAZO Tea Box Redesign</h2>
            <p>This project involved redesigning the packaging for TAZO Tea, incorporating vibrant colors and a modern look.</p>
            <!-- You can add more details, images, etc. here -->
        `;
    }
    
    // Add more cases for other projects if needed

    return '';
}












}
