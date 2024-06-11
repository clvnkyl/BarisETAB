document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".productCategories a");
  const containers = document.querySelectorAll(".productsContainer");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove 'active' class from all links
      links.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked link
      this.classList.add("active");

      // Hide all containers
      containers.forEach((container) => container.classList.remove("active"));

      // Show the container with the same class as the link's id
      const containerClass = this.id;
      document.querySelector(`.${containerClass}`).classList.add("active");
    });
  });
});
