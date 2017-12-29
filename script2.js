const myButton = document.querySelector("#mainButton")

myButton.addEventListener('click', e => {
  console.log("Button pressed!")
  const searchBar = document.querySelector("input")
  const userQuery = searchBar.value
  sendApiRequest(userQuery)
})

// include specific signup instructions so that all students can get an API key
function sendApiRequest(userQuery) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=JH4pXj01oKHBnReFNlbzCYHF8M60fmjb&q=${userQuery}&limit=25&offset=0&rating=G&lang=en`)
    .then(function(data) {
      return data.json()
    })
    .then(function(json) {
      console.log(json)
      // Pass the JSON on to the next function.
      getImageURLfrom(json)
    })
}


function getImageURLfrom(myJSON) {
  // Maybe leave this code here as a breadcrumb.
  const randomNumber = Math.floor(Math.random() * 26)
  // Code this out on the whiteboard one level at a time.
  console.log(myJSON.data[0].images.original.url)
  // Save this in a variable, then pass it to the next function.
  const imageURL = myJSON.data[randomNumber].images.original.url
  console.log(imageURL)
  addImageToScreen(imageURL)
}


function addImageToScreen(myURL) {
  const wrapper = document.querySelector("#wrapper")
  wrapper.innerHTML += `<img src='${myURL}' alt="">`
}

// Playtime 1
// Find something / someone else (rewrite the endpoint)
// Random images
// Add to the contents of the wrapper (don't just replace)
// Fixed image size

// Lecture 2
// Interpolate the search query from the input bar
// Add a total number of Ryans counter