// Function to show tab content
function showTab(tab) {
    const tabs = ["design", "art", "about", "contact"];
    
    tabs.forEach((t) => {
        const tabContent = document.getElementById(`${t}Tab`);
        if (t === tab) {
            tabContent.style.display = "block";
        } else {
            tabContent.style.display = "none";
        }
    });
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
            <h2>Cactus Project</h2>
            <p>Project description goes here.</p>
            <!-- You can add more details, images, etc. here -->
        `;
    }
    
    // Add more cases for other projects if needed

    return '';
}

// Function to open the image popup
function openImagePopup(imageSrc) {
    var popup = document.getElementById('imagePopup');
    var popupImage = document.getElementById('popupImage');
    popup.style.display = 'block';
    popupImage.src = imageSrc;
    document.body.style.overflow = 'hidden'; // Disable scrolling while popup is open
}

// Function to close the image popup
function closeImagePopup() {
    var popup = document.getElementById('imagePopup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling again
}
