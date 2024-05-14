// Add your JavaScript here
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function openRegistrationModal() {
    var modal = document.getElementById("registration-modal");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 50);
}

function closeRegistrationModal() {
    var modal = document.getElementById("registration-modal");
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

function openConfirmationModal() {
    var modal = document.getElementById("confirmation-modal");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 50);
    setTimeout(() => {
        closeConfirmationModal();
    }, 3000); // Закрити через 3 секунди
}

function closeConfirmationModal() {
    var modal = document.getElementById("confirmation-modal");
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

// Example event data
var eventsData = [
    { name: "Event 1", description: "Description of Event 1", date: "2024-05-15", organizer: "Organizer A" },
    { name: "Event 2", description: "Description of Event 2", date: "2024-05-20", organizer: "Organizer B" },
    { name: "Event 3", description: "Description of Event 3", date: "2024-05-25", organizer: "Organizer C" }
];

// Populate event squares
var eventContainer = document.querySelector(".event-container");
for (var i = 0; i < 30; i++) {
    var eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    eventCard.innerHTML = `
        <h2>${eventsData[i % 3].name}</h2>
        <p>Date: ${eventsData[i % 3].date}</p>
        <p>Organizer: ${eventsData[i % 3].organizer}</p>
        <button class="register-button" onclick="openRegistrationModal()">Register</button>
    `;
    eventContainer.appendChild(eventCard);
}
