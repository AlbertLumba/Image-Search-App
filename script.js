//declaration of accessKey variable
const accessKey = "oFkoV9rtiHLQW5K0GNXoowoxzSX83dqGzpgsHMEC4oE"

//declaration of HTML variables
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const returnE1 = document.getElementById('return-button');
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
//function for Image Search
async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }
    //Mapping the results from Unsplash
    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    })
    //Show more pages
    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}
//function for Submit
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});
//function for the Search button
showMore.addEventListener("click", () => {
    searchImages();
});

returnE1.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (you may handle it differently based on your needs)
    // Reset search input and clear search results
    window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const appTitle = document.getElementById('app-title');

    // Remove the 'hidden' class to trigger the slide-in effect after a short delay
    setTimeout(() => {
        appTitle.classList.remove('hidden');
    }, 100);
});

