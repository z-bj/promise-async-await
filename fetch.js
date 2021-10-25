// fetch('https://jsonplaceholder.typicode.com/users')
// .then(
//     (response) => {
//         return response.json().then((data)=>{
//             console.log(data)
//         })
//     }
// )

const getUsers= async ()=>{
let response= await fetch('https://jsonplaceholder.typicode.com')
let data await response.json()
.then(response => response.json())
console.log(data)
}

getUsers()