// Get references to HTML elements
const customNumberInput = document.getElementById("customNumber"); // Input field for custom number
const customColorButton = document.querySelector(".custColor"); // Button to change background color based on input
const randomColorButton = document.querySelector(".randColor"); // Button to change background color with a random number
const imageSelect = document.getElementById("imageSelect"); // Select list for choosing an image
const images = document.getElementById("images"); // Image element for displaying selected image
const studentId = "200515506"; // Student ID

// Function to change background color based on user input
function changeCustomColor() {
    const inputValue = parseFloat(customNumberInput.value); // Get the input value as a number
    const body = document.body; // Reference to the body element

    // Check if the input is not a valid number or outside the range 0-100
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 100) {
        body.style.backgroundColor = "red"; // Set background color to red
    } else if (inputValue <= 20) {
        body.style.backgroundColor = "green"; // Set background color to green
    } else if (inputValue <= 40) {
        body.style.backgroundColor = "blue"; // Set background color to blue
    } else if (inputValue <= 60) {
        body.style.backgroundColor = "orange"; // Set background color to orange
    } else if (inputValue <= 80) {
        body.style.backgroundColor = "purple"; // Set background color to purple
    } else {
        body.style.backgroundColor = "yellow"; // Set background color to yellow
    }

    // Update the content of an element with the student ID
    document.getElementById("myStudentId").textContent = `Student ID: ${studentId}`;
}

// Function to change background color with a random number
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    customNumberInput.value = randomValue; // Set the input field value to the random number
    changeCustomColor(); // Call the function to change background color with the new random value
}

// Function to generate options for the select list
function addList() {
    // Define image sources in an array
    const imageSources = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

    // Loop through the imageSources and add them as options to the select list
    imageSources.forEach((imageSource) => {
        const option = document.createElement("option"); // Create a new option element
        option.value = imageSource; // Set option value to the image source
        option.textContent = imageSource; // Set option text to the image source
        imageSelect.appendChild(option); // Add the option to the select list
    });
}

// Function to change the image source based on the selected option in the select list
function changeImage() {
    const selectedImage = imageSelect.value; // Get the selected image source from the select list
    images.src = `./img/${selectedImage}`; // Set the src attribute of the image element to display the selected image
}

// Event listeners for button clicks
customColorButton.addEventListener("click", changeCustomColor); // Call changeCustomColor when the customColorButton is clicked
randomColorButton.addEventListener("click", changeRandomColor); // Call changeRandomColor when the randomColorButton is clicked

// Event listener for select list change
imageSelect.addEventListener("change", changeImage); // Call changeImage when the selected option in the imageSelect changes

// Initialize the select list options
addList(); // Call the addList function to populate options in the select list
