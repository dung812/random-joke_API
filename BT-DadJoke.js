// https://icanhazdadjoke.com/
// https://icanhazdadjoke.com/api
const endpoint = "https://icanhazdadjoke.com/";
const jokeWrapper = document.querySelector(".joke");
const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");

async function getJoke() {
    const response = await fetch(endpoint, {
        headers: {
            Accept: 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
function handleError(error) {
    alert("Something wrong with your api, cause: " + error);
    jokeHeading.textContent = "No data found";
}
async function handleClick() {
    // Show loading screen when the client is requesting data from API
    jokeWrapper.classList.add("is-loading");

    const data = await getJoke().catch(handleError);
    jokeHeading.textContent = data.joke;
    jokeWrapper.classList.remove("is-loading");
}

jokeButton.addEventListener("click", handleClick);