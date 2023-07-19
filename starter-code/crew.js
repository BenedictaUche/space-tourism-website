const crewContainer = document.getElementById("crewContainer");

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
        })
        .catch((error) => {
        console.error("Error:", error);
        });
}

document.getElementById("crewMemberOne").addEventListener("click", () => {
    showCrew(0);
});

document.getElementById("crewMemberTwo").addEventListener("click", () => {
    showCrew(1);
});

document.getElementById("crewMemberThree").addEventListener("click", () => {
    showCrew(2);
});

document.getElementById("crewMemberFour").addEventListener("click", () => {
    showCrew(3);
});

// fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const crew = data.crew;
//     const crewMember = crew[0];
//     console.log(crewMember);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
