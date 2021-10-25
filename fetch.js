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


const getUsers= async ()=>{
    try{
        let response= await fetch('') //SyntaxError: 'JSON.parse: unexpected character at line 1 column 1  of the Json data'
    if(response.ok){
        let data= await response.json()
        console.log(data)
    } else {
        console.error('Retour du serveur : ', response.status);
    } 
    }catch(e){
        console.log(e
            )
    }
    
}
    
    getUsers()


    const insertPost = async (data)=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(response.ok){
            let responseData=await response.json();
            console.log(responseData)
        }
    }

    insertPost({
        name:'jean',
        age:29
    })