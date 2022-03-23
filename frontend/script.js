const postWrapper = document.getElementById("postWrapper")

fetch("http://localhost:3000/api/getposts")
.then(response => response.json())
.then(posts => {
    const postsArray = posts.allPosts
    postsArray.forEach(post => {
        const postTitle = post.Title;
        const postOverview = post.Overview
        const postCreator = post.Creator;
        wrapPostUnderPostsWrapper(postTitle, postOverview, postCreator)
    })
})


function wrapPostUnderPostsWrapper(title, overview, creator) {
    const postDiv = document.createElement("div")
    postDiv.classList.add("postDiv")    
    const postTitle = document.createElement("h1")
    postTitle.innerText = title

    const postOverview = document.createElement("h2")
    postOverview.innerText = overview

    const postCreator = document.createElement("h3")
    postCreator.innerText = creator

    postDiv.appendChild(postTitle)
    postDiv.appendChild(postOverview)
    postDiv.appendChild(postCreator)

    postWrapper.appendChild(postDiv)
}