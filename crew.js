const crewContainer = document.getElementById("crewContainer");
const carouselItems = document.querySelectorAll(".carousel-item");

function showCrew(crewIndex) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const crew = data.crew;
      const crewMember = crew[crewIndex];
      console.log(crewMember);
      crewContainer.innerHTML = `
        <div>
          <img src="${crewMember.images.png}" class="img-fluid" alt="${crewMember.name}">
        </div>
        <div class='crew-cont'>
          <p class='role'>${crewMember.role}</p>
          <h2>${crewMember.name}</h2>
          <p class='desc'>${crewMember.bio}</p>
        </div>
      `;

      // Remove active class from all carousel items
      carouselItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to the selected carousel item
      carouselItems[crewIndex].classList.add("active");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Attach click event listeners to carousel items
carouselItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    showCrew(index);
  });
});
