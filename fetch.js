// fetch('https://jsonplaceholder.typicode.com/users')
// .then(
//     (response) => {
//         return response.json().then((data)=>{
//             console.log(data)
//         })
//     }
// )

// with ES6

// const getUsers= async ()=>{
// let response= await fetch('https://jsonplaceholder.typicode.com')
// let data = await response.json()
// .then(response => response.json())
// console.log(data)
// }

// getUsers()

// const getUsers= async ()=>{
//     let response= await fetch('https://jsonplaceholder.typicode.com')
//     if(response.ok){
//         let data= await response.json()
//         console.log(data)
//     } else {
//         console.error('Retour du serveur : ', response.status);
//     }
// }
    
//     getUsers()


// const getUsers= async ()=>{
//     try{
//         let response= await fetch('https://127.0.0.1:4747') //typeError : "NetworkError when attempting to fetch resource" CORS
//     if(response.ok){
//         let data= await response.json()
//         console.log(data)
//     } else {
//         console.error('Retour du serveur : ', response.status);
//     } 
//     }catch(e){
//         console.log(e
//             )
//     }
    
// }
    
//     getUsers()


// const getUsers= async ()=>{
//     try{
//         let response= await fetch('https://127.0.0.1:') //SyntaxError: 'JSON.parse: unexpected character at line 1 column 1  of the Json data'
//     if(response.ok){
//         let data= await response.json()
//         console.log(data)
//     } else {
//         console.error('Retour du serveur : ', response.status);
//     } 
//     }catch(e){
//         console.log(e
//             )
//     }
    
// }
    
//     getUsers()


// const getUsers= async ()=>{
//     try{
//         let response= await fetch('') //SyntaxError: 'JSON.parse: unexpected character at line 1 column 1  of the Json data'
//     if(response.ok){
//         let data= await response.json()
//         console.log(data)
//     } else {
//         console.error('Retour du serveur : ', response.status);
//     } 
//     }catch(e){
//         console.log(e
//             )
//     }
    
// }
    
//     getUsers()


//     const insertPost = async (data)=>{
//         let request = new Request('https://jsonplaceholder.typicode.com/posts',{
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         let response=await fetch (request)
//         let responseData=await response.json();
//     }

//     insertPost({
//         name:'jean',
//         age:29
//     })



let form = document.querySelector('#contact')
let button = form.querySelector('button[type=submit]')
let buttonText = button.textContent
form.addEventListener('submit', async function (e) {
  button.disabled = true
  button.textContent = 'Chargement...'
  let errorElements = form.querySelectorAll('.has-error')
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].classList.remove('has-error')
    let span = errorElements[i].querySelector('.help-block')
    if (span) {
      span.parentNode.removeChild(span)
    }
  }
  e.preventDefault()
  let data = new FormData(form)
  try {
    let response = await fetch(form.getAttribute('action'), {
      method: 'POST',
      headers: {
        'X-Requested-With': 'xmlhttprequest'
      },
      body: data
    })
    let responseData = await response.json()
    // La réponse n'est pas bonne (pas 200), on affiche les erreurs
    if (response.ok === false) {
      let errors = responseData
      let errorsKey = Object.keys(errors)
      for (let i = 0; i < errorsKey.length; i++) {
        let key = errorsKey[i]
        let error = errors[key]
        let input = document.querySelector('[name=' + key + ']')
        let span = document.createElement('span')
        span.className = 'help-block'
        span.innerHTML = error
        input.parentNode.classList.add('has-error')
        input.parentNode.appendChild(span)
      }
    // La réponse est ok, on vide le formulaire
    } else {
      let inputs = form.querySelectorAll('input, textarea')
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
      }
      alert('Merci pour votre message')
    }
  } catch (e) {
    alert(e)
  }
  // Dans tous les cas on permet la soumission du formulaire à nouveau
  button.disabled = false
  button.textContent = buttonText
})