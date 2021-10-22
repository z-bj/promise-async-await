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
  try {
    let response = await get("https://jsonplaceholder.typicode.com/users");
    let users = JSON.parse(response);
    response = await get(
      "https://jsonplaceholder.typicode.com/comments?userId=" + users[0].id
    );
    let posts = JSON.parse(response);
  } catch (e) {
    console.log("il y a eu un problem", e);
  }

  return posts;
};

let getFirstPosts = async () => {
  let posts = await getPosts();
  return posts[0];
};

let demo = async () => {
  let arr = await Promise.allSettled([getPosts(), getFirstPosts()]);
  console.log(arr);
};

demo();
