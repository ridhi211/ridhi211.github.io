const ApiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"    // storing the API url in a variable
const imgPath = "https://image.tmdb.org/t/p/w1280"
const SearchApi = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


async function getMovies(url) { //creating a function and getting the passed value as parameter
    //fetch the movieAPI
    const dataa = await fetch(url)

    const fetchedData = await dataa.json() //resolving the promise and converting JSON to JSobject
    // console.log(fetchedData)

    //looping through the array data
    fetchedData.results.map(function (ele, index) {

        const newElement = document.createElement("div")


        const truncate = (input) => input.length > 5 ? `${input.substring(0, 109)}...` : input;
        const a = truncate(ele.overview)

        const contents = `<div> 
            <img class = "backdrop_image" src=" ${imgPath + ele.backdrop_path}">
            <h2> Title: ${ele.title} </h2>
            <p>Overview: ${a}</p>
            <button class="view_description"> View ${index} </button> 
            </div>
        `
        newElement.innerHTML = contents


        document.getElementById("movie").append(newElement) //appending those created new elements inside <div id="movie"> this element                          

        const b = document.querySelectorAll(".view_description") //array of button

        // console.log(b, "query")
        b[index].addEventListener("click", function () {
            // console.log("click")

        })

    })
    //end of map method

    document.getElementById("searchForm").addEventListener("submit", function (e){
        e.preventDefault()
        const inputValue = document.getElementById("search").value

        // to fetch with its movie name
        async function a(){
            const searchh =await fetch(SearchApi + inputValue)
    
            const JSobject =await searchh.json()
            console.log(JSobject.results)

            document.getElementById("movie").innerHTML = "" //empty string is being assigned inside movie elemnt

            JSobject.results.map(function (ele, index) { //map loop starts
                

                const newElement = document.createElement("div") //div is being created       
        
                const truncate = (input) => input.length > 5 ? `${input.substring(0, 109)}...` : input;
                const a = truncate(ele.overview)
        
                const contents = `<div> 
                    <img class = "backdrop_image" src=" ${imgPath + ele.backdrop_path}">
                    <h2> Title: ${ele.title} </h2>
                    <p>Overview: ${a}</p>
                    <button class="view_description"> View ${index} </button> 
                    </div> 
                `
                newElement.innerHTML = contents
        
                document.getElementById("movie").append(newElement) //appending those created new elements inside <div id="movie"> this element                          
        
                const b = document.querySelectorAll(".view_description") //array of button
        
                // console.log(b, "query")
                // b[index].addEventListener("click", function () {
                //     // console.log("click")
        
                // })
        
            }) //end of map method 


        }//end of function block
        a()
    })

}// end of function

getMovies(ApiUrl) //calling the function and passing the API url as argument
//-----------------



//----------------------------











