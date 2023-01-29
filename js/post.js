function loadPosts() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayPost(data))

}

function displayPost(posts) {

    console.log(posts)
    const postContainer = document.getElementById('posts-container')

    for (post of posts) {

        const div = document.createElement('div')
        div.innerHTML = `
        <h4>user ${post.name}</h4>
        <h5>Post:${post.email}</h5>
        <p>Post Description:${post.website}</p>

        `
        postContainer.appendChild(div)
    }


}

loadPosts();