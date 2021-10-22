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

let catchError = (e) => {
  console.error("Erreur ajax", e);
};

let getPosts = (success, error) => {
  return new Promise((resolve, reject) => {
    get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = JSON.parse(response);
        get(
          "https://jsonplaceholder.typicode.com/comments?userId=" + users[0].id
        ).then((response) => {
            let posts= JSON.parse(response);
          resolve(posts);
        });
      })
      .catch(catchError)
      .catch(catchError);
  });
};

// console.log(
//   getPosts(
//     (posts) => {
//       console.log("Le premier article", posts[0]);
//     },
//     (error) => {
//       console.error(error);
//     }
//   )
// );
