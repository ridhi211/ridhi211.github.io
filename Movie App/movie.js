const ApiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"    // storing the API url in a variable
const imgPath = "https://image.tmdb.org/t/p/w1280"


async function getMovies(url) { //creating a function and getting the passed value as parameter
    //fetch the movieAPI
    const dataa = await fetch(url) 

    const fetchedData = await dataa.json() //resolving the promise and converting JSON to JSobject
    console.log(fetchedData)

    //looping through the array data
    fetchedData.results.map(function (ele) {

        
        const newTitleElement = document.createElement("h2") //creating a new h2 element
        newTitleElement.innerHTML = `Title:${ele.title} ` // keeping the title inside a newly created element 

        const image = document.createElement("img")
        image.setAttribute("src", imgPath + ele.backdrop_path)


        const newOverview = document.createElement("p")
        const Overview = `Overview:${ele.overview}`
        newOverview.innerHTML = Overview

        document.getElementById("movie").append(newTitleElement, newOverview, image) //appending those created new elements inside <div id="movie"> this element                          
        
        document.createElement("div").innerHTML 
        document.createElement("div").innerHTML 

    }) 
    //end of map method

}// end of function

getMovies(ApiUrl) //calling the function and passing the API url as argument











