// Get all the links in the navigation
const navLinks = document.querySelectorAll('.nav-item a');

// Loop through the links and add event listeners
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => {
      link.classList.remove('activeLink');
    });
    link.classList.add('activeLink');
  });
});




const contentContainer = document.getElementById("contentContainer");


function showDestination(destinationIndex) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const destinations = data.destinations;
      const destination = destinations[destinationIndex];
      console.log(destination);
      contentContainer.innerHTML = `
        <div class="">
          <img src="${destination.images.png}" class="img-fluid" alt="${destination.name}">
        </div>
        <div class="content-one">
          <h2>${destination.name}</h2>
          <p class="desc">${destination.description}</p>
          <div class="line"></div>
          <div class="distance-travel">
            <div>
              <p class="fs-6">AVG. DISTANCE</p>
              <p class="fs-4">${destination.distance}</p>
            </div>
            <div>
              <p class="fs-6">EST. TRAVEL TIME</p>
              <p class="fs-4">${destination.travel}</p>
            </div>
          </div>
        </div>
      `;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}



document.getElementById("moonLink").addEventListener("click", () => {
  showDestination(0);
});

document.getElementById("marsLink").addEventListener("click", () => {
  showDestination(1);
});

document.getElementById("europaLink").addEventListener("click", () => {
    showDestination(2);
  });

document.getElementById("titanLink").addEventListener("click", () => {
showDestination(3);
});


