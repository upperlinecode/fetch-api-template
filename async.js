// Console log any message to prove that this file is linked correctly.
console.log("script running")

// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked
const myButton = document.querySelector("#mainButton")

myButton.addEventListener('click', e => {
  console.log("Button pressed!")
  const searchBar = document.querySelector("input")
  const userQuery = searchBar.value
  sendApiRequest(userQuery)
})


const YOUR_API_KEY_HERE = ''

// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
async function sendApiRequest(userQuery) {
  let promise = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${YOUR_API_KEY_HERE}&q=${userQuery}&limit=25&offset=0&rating=G&lang=en`)
  console.log(promise)
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${YOUR_API_KEY_HERE}&q=${userQuery}&limit=25&offset=0&rating=G&lang=en`)
  console.log(response)
  let image_data = await response.json()
  console.log(image_data)
  getImageURLfrom(image_data)
};

function getImageURLfrom(myJSON) {
  // Maybe leave this code here as a breadcrumb.
  const randomNumber = Math.floor(Math.random() * 26)
  // Code this out on the whiteboard one level at a time.
  console.log(myJSON.data[randomNumber].images.original.url)
  // Save this in a variable, then pass it to the next function.
  const imageURL = myJSON.data[randomNumber].images.original.url
  console.log(imageURL)
  addImageToScreen(imageURL)
}


// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {
  const wrapper = document.querySelector("#wrapper")
  wrapper.innerHTML += `<img src='${myURL}' alt="">`
};

// Playtime challenges:
// Find something / someone else (rewrite the endpoint so that we aren't searching for Ryan Gosling)
// Instead of getting the first image, get a random image from the JSON results
// REPLACE the contents of the wrapper instead of adding onto them
// Make all your images the same height so that they line up nicely
