const loadUsers = () => {

    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results))

}

const displayUser = users => {
    const userContainer = document.getElementById('users-container')
    for (user of users) {
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h3>User Name</h3>
        <p>Email:${user.email} </p>
        <p>User Location: ${user.location.country}</p>
        `
        userContainer.appendChild(userDiv)
    }
}

loadUsers()