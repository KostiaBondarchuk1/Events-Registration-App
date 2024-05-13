// Приклади подій (можуть бути отримані з сервера)
const events = [
    { title: 'Conference', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2024-05-15', organizer: 'Organizer A' },
    { title: 'Workshop', description: 'Nulla vitae elit libero, a pharetra augue.', date: '2024-05-17', organizer: 'Organizer B' },
    { title: 'Seminar', description: 'Vestibulum id ligula porta felis euismod semper.', date: '2024-05-20', organizer: 'Organizer C' }
];

// Функція для додавання подій на сторінку
function renderEvents() {
    const eventBoard = document.getElementById('event-board');
    eventBoard.innerHTML = '';
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <h2>${event.title}</h2>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Organizer:</strong> ${event.organizer}</p>
            <p>${event.description}</p>
            <button>Register</button>
        `;
        eventBoard.appendChild(eventCard);
    });
}

// Викликаємо функцію для додавання подій при завантаженні сторінки
window.onload = renderEvents;