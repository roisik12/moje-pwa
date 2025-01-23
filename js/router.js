document.querySelector('#home-link').addEventListener('click', () => {
    history.pushState({ page: 'home' }, 'Strona Główna', '/');
    renderHome();
});

document.querySelector('#courses-link').addEventListener('click', () => {
    history.pushState({ page: 'courses' }, 'Kursy', '/courses');
    renderCourses();
});

document.querySelector('#contact-link').addEventListener('click', () => {
    history.pushState({ page: 'contact' }, 'Kontakt', '/contact');
    renderContact();
});

function renderHome() {
    document.querySelector('#content').innerHTML = `
        <h2>Witaj w Kursach PIAC!</h2>
        <p>Rozwijaj swoje umiejętności z najlepszymi kursami online. Kliknij "Kursy", aby zobaczyć ofertę.</p>
    `;
}

function renderCourses() {
    const coursesHTML = courses.map(course => `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${course.title}</h5>
            <p class="card-text">${course.description}</p>
            <p class="card-text"><strong>Cena: ${course.price}</strong></p>
          </div>
        </div>
    `).join('');
    
    document.querySelector('#content').innerHTML = `
        <h2>Dostępne Kursy</h2>
        <div class="row">
            ${coursesHTML}
        </div>
    `;
}

function renderContact() {
    document.querySelector('#content').innerHTML = `
        <h2>Kontakt</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Imię</label>
            <input type="text" class="form-control" id="name" placeholder="Wpisz swoje imię">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Wpisz swój email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Wiadomość</label>
            <textarea class="form-control" id="message" rows="3" placeholder="Wpisz swoją wiadomość"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Wyślij</button>
        </form>
    `;
}

window.onpopstate = () => {
    if (history.state.page === 'home') renderHome();
    if (history.state.page === 'courses') renderCourses();
    if (history.state.page === 'contact') renderContact();
};
