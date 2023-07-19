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
              <p class="fs-4">AVG. DISTANCE</p>
              <p class="fs-5">${destination.distance}</p>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <p class="fs-5">${destination.travel}</p>
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
