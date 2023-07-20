// const crewContainer = document.getElementById("crewContainer");
const techContainer = document.getElementById('techContainer');
const carouselItems = document.querySelectorAll(".carousel-item");

function showTech(techIndex) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const tech = data.technology;
      const techItems = tech[techIndex];
      console.log(techItems);
      techContainer.innerHTML = `
        <div>
          <img src="${techItems.images.portrait}" class="img-fluid" alt="${techItems.name}">
        </div>
        <div class='crew-cont'>
          <p class='role'>The terminology ..</p>
          <h2>${techItems.name}</h2>
          <p class='desc'>${techItems.description}</p>
        </div>
      `;

      // Remove active class from all carousel items
      carouselItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to the selected carousel item
      carouselItems[techIndex].classList.add("active");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Attach click event listeners to carousel items
carouselItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    showTech(index);
  });
});
