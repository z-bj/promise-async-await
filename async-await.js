let get = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new window.XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr);
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  });
};

let getPosts = async () => {
  let response = await get("https://jsonplaceholder.typicode.com/users");
  let users = JSON.parse(response);
  response = await get(
    "https://jsonplaceholder.typicode.com/comments?userId=" + users[0].id
  );
  let posts = JSON.parse(response);
  return posts;
};

getPosts()
  .then((posts) => {
    console.log(posts[0]);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log("fin des requetes Ajax");
  });
