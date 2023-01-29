function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(users) {

    const ul = document.getElementById('users-list')
    for (user of users) {
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }
}