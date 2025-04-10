function enterWebsite() {
    window.location.href = 'about.html'; // Redirect to the About Me page
  }

  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("img01");
  let currentIndex = 0;
  let images = [];
  
  // Collect all the images for the gallery
  const imageElements = document.querySelectorAll(".images-gallery img");
  imageElements.forEach((img, index) => {
      images.push(img.src);
      img.addEventListener("click", () => openModal(img, index));
  });
  
  // Open Modal Function
  function openModal(img, index) {
      modal.style.display = "flex"; // Show the modal
      modalImg.src = img.src; // Set the image in the modal
      currentIndex = index; // Save the current image index
  }
  
  // Close Modal Function
  function closeModal() {
      modal.style.display = "none"; // Hide the modal
  }
  
  // Change image on left/right arrows
  function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
          currentIndex = images.length - 1; // Loop back to the last image
      } else if (currentIndex >= images.length) {
          currentIndex = 0; // Loop back to the first image
      }
      modalImg.src = images[currentIndex]; // Update the modal image
  }
  
  // Prevent modal from opening automatically on page load
  window.onload = () => {
      modal.style.display = "none"; // Ensure modal is hidden on page load
  };