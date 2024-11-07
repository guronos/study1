function getEventsPage() {
    let infoPage = document.getElementById('info');
    infoPage.classList.add('none');
    const eventsPage = document.getElementById('events');
    eventsPage.classList.remove('none');
}

function getHomePage() {
    let infoPage = document.getElementById('info');
    infoPage.classList.remove('none');
    const eventsPage = document.getElementById('events');
    eventsPage.classList.add('none');
}

function addRow () {
    const dateEl = document.getElementById('dateInput');
    const themeEl = document.getElementById('themeInput')
    const budgetEl = document.getElementById('budgetInput');
    console.dir(dateEl.value);
    const row = document.createElement('tr');
    // TODO исправить порядковый номер
    row.innerHTML = `<th scope="row">dateEl.value</th>
                        <td>${dateEl.value}</td>
                        <td>${themeEl.value}</td>
                        <td>${budgetEl.value}</td>`;

    const tableBody  = document.getElementById('table-body');
    tableBody.append(row)
    // const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
}

getEventsPage()