const url = "https://api.github.com/users/"

const search = document.getElementById("Search")
const forms = document.getElementById("form") 
const main = document.getElementById("main") 


async function getDetails(username){

    const data =await fetch(url + username)
    console.log(data)

    const jsObjectt =await data.json()
    console.log(jsObjectt)

    
    const dataInHtml = `<h1> ${jsObjectt.avatar_url} </h1>
        <h2>Public repos: ${jsObjectt.public_repos} </h2>
        <h3>id: ${jsObjectt.id} </h3>
        <p>Login: ${jsObjectt.login} </p>
        <img src ${jsObjectt.avatar_url}>
    `
    main.innerHTML = dataInHtml
}

getDetails("ridhi211")

forms.addEventListener("submit", function e(){
    e.preventDefault()

    const usernameEntered = search.value
    if(usernameEntered){
        getDetails(usernameEntered)
    }
})
