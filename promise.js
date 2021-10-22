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

get("https://jsonplaceholder.typicode.com/users").then((response) => {
  console.log(response);
});

let getPosts = (success, error) => {
  //   get(
  //     "https://jsonplaceholder.typicode.com/users",
  //     (response) => {
  //       let users = JSON.parse(response);
  //       get(
  //         "https://jsonplaceholder.typicode.com/comments?userId=" + users[0].id,
  //         (response) => {
  //           let posts = JSON.parse(response);
  //           success(posts);
  //         },
  //         (e) => {
  //           error("Erreur ajax", e);
  //         }
  //       );
  //     },
  //     (error) => {
  //       error("Erreur ajax", e);
  //     }
  //   );
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
