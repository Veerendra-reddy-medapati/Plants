fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById("gallery");

    data.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <img src="${post.image}" onclick="openPost(${post.id})">
        <h3>${post.title}</h3>
      `;

      gallery.appendChild(div);
    });
  });

function openPost(id) {
  window.location.href = `post.html?id=${id}`;
}

