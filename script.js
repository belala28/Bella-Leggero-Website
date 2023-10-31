// Function to show tab content
function showTab(tab) {
    const tabs = ["design", "actualDesign", "art", "about", "contact"];
    
    tabs.forEach((t) => {
        const tabContent = document.getElementById(`${t}Tab`);
        console.log(tabContent);
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
// function openImagePopup(imageSrc, header, description) {
//     // var popup = document.getElementById('imagePopup');
//     // var popupImage = document.getElementById('popupImage');
//     // popup.style.display = 'block';
//     // popupImage.src = imageSrc;
//     // document.body.style.overflow = 'hidden'; // Disable scrolling while popup is open
//     document.getElementById("popup-header").innerText = header;

//             document.getElementById("popup-description").innerText = description;

//             document.getElementById("popup-image").src = imageSrc;

//             document.getElementById("popup").style.display = "block";
// }

// // Function to close the image popup
// function closeImagePopup() {
//     var popup = document.getElementById('imagePopup');
//     popup.style.display = 'none';
//     document.body.style.overflow = 'auto'; // Enable scrolling again
// }
function openImagePopup(imageSrc, header, description) {

    document.getElementById("popup-header").innerText = header;

    document.getElementById("popup-description").innerText = description;

    document.getElementById("popup-image").src = imageSrc;

    document.getElementById("popup").style.display = "block";

}



function closePopup() {

    document.getElementById("popup").style.display = "none";

}
let currentImageIndex = 0;

function showImage(index) {
    const carouselItems = document.querySelector('.carousel-items');
    const imageWidth = document.querySelector('.carousel-image').offsetWidth;
    const translateX = -index * imageWidth;
    carouselItems.style.transform = `translateX(${translateX}px)`;
}

function nextImage() {
    if (currentImageIndex < document.querySelectorAll('.carousel-image').length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }
}

function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
}

// Add event listeners for the "previous" and "next" buttons
document.getElementById('previous-button').addEventListener('click', () => {
    previousImage();
});

document.getElementById('next-button').addEventListener('click', () => {
    nextImage();
});

// Ensure the initial image is displayed
showImage(currentImageIndex);
