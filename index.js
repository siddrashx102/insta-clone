const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postsContainer = document.getElementById("posts-container");

posts.forEach((post, index) => {
  const postEl = document.createElement("div");
  postEl.className = "post";
  postEl.innerHTML = `
            <div class="profile">
                <img class="profile-avatar" src="${post.avatar}" alt="">
                <div class="profile-details">
                    <p class="name">${post.name}</p>
                    <p class="location">${post.location}</p>
                </div>
            </div>

            <div class="post-img">
                <img src="${post.post}" alt="">
            </div>

            <div class="icons">
                <img class="icon icon-like" src="assets/like.png" alt="">
                <img class="icon icon-comment" src="assets/comment.png" alt="">
                <img class="icon icon-share" src="assets/share.png" alt="">
            </div>

            <div class="likes-count">
                <p class="likes-text">${post.likes} likes</p>
            </div>

            <div class="caption">
                <p><span class="user-id">${post.username} </span>${post.comment}</p>
            </div>
    `;
  postsContainer.append(postEl);

  // select elements inside this postEl only
  const iconLike = postEl.querySelector(".icon-like");
  const likesText = postEl.querySelector(".likes-text");
  const postImg = postEl.querySelector(".post-img")
  let liked = false;

  postImg.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    // console.log(e.innerHTML)
    // console.log(post.innerHTML)
    if (!liked) {
      post.likes += 1;
      iconLike.setAttribute("src", "assets/like-red.png");
      //   iconLike.setAttribute("width", "25px")
    } else {
      post.likes -= 1;
      iconLike.setAttribute("src", "assets/like.png");
    }
    liked = !liked;
    likesText.textContent = `${post.likes} likes`;
  })

  iconLike.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log(e.innerHTML)
    // console.log(post.innerHTML)
    if (!liked) {
      post.likes += 1;
      iconLike.setAttribute("src", "assets/like-red.png");
      //   iconLike.setAttribute("width", "25px")
    } else {
      post.likes -= 1;
      iconLike.setAttribute("src", "assets/like.png");
    }
    liked = !liked;
    likesText.textContent = `${post.likes} likes`;
  });
});
