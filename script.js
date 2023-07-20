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

// function openNav() {
//   document.querySelector(".sidebar").style.width = "32vw";
// }

// function closeNav() {
//   document.querySelector(".sidebar").style.width = "0";
//   document.querySelector(".main-content").style.marginRight = "0";
// }


const contentContainer = document.getElementById("contentContainer");
// const destinationHeader = document.getElementById("destinationHeader").addEventListener("click", destinationHeaders);

// function destinationHeaders() {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const destinationHead = data.destinations[0];
//       const destinationHeadFirst = destinationHead;
//       console.log(destinationHeadFirst);
//       contentContainer.innerHTML = `
//         <div class="">
//           <img src="${destinationHeadFirst.images.png}" class="img-fluid" alt="${destinationHeadFirst.name}">
//         </div>
//         <div class="content-one">
//           <h2>${destinationHeadFirst.name}</h2>
//           <p class="desc">${destinationHeadFirst.description}</p>
//           <div class="line"></div>
//           <div class="distance-travel">
//             <div>
//               <p class="fs-6">AVG. DISTANCE</p>
//               <p class="fs-4">${destinationHeadFirst.distance}</p>
//             </div>
//             <div>
//               <p class="fs-6">EST. TRAVEL TIME</p>
//               <p class="fs-4">${destinationHeadFirst.travel}</p>
//             </div>
//           </div>
//         </div>
//       `;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }





function showDestination(destinationIndex) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const destinations = data.destinations;
      const destination = destinations[destinationIndex];
      console.log(destination);
      contentContainer.innerHTML = `
        <div class="destination-image">
          <img src="${destination.images.png}" class="img-fluid" alt="${destination.name}">
        </div>
        <div class="content-one">
          <h2>${destination.name}</h2>
          <p class="desc">${destination.description}</p>
          <div class="line"></div>
          <div class="distance-travel">
            <div>
              <p class="fs-6">AVG. DISTANCE</p>
              <h2 class="fs-4">${destination.distance}</h2>
            </div>
            <div>
              <p class="fs-6">EST. TRAVEL TIME</p>
              <h2 class="fs-4">${destination.travel}</h2>
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


