async function a(){
    const githubFetchValue = await fetch("https://api.github.com/users/")
    console.log(githubFetchValue)

    const jsObject =await githubFetchValue.json()
    console.log(jsObject)

//     console.log(jsObject.avatar_url)
//     console.log(jsObject.public_repos)
//     console.log(jsObject.created_at)

//     document.getElementById("ele1").innerHTML = jsObject.avatar_url
//     document.getElementById("ele2").innerHTML = jsObject.public_repos
//     document.getElementById("ele3").innerHTML = jsObject.created_at
    document.getElementById("image").setAttribute("src", jsObject.avatar_url)  
}

a()