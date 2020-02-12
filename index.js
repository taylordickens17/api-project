//----------------------Ghibli API----------------------------------------

const baseURL = "https://ghibliapi.herokuapp.com";
let url;

const section = document.querySelector("section");
const submit = document.querySelector("#submit");
const searchForm = document.querySelector("form");
const movieTitle = document.querySelector(".movieTitle");
const character = document.querySelector(".character");


searchForm.addEventListener("submit", fetchResults);

function fetchResults(e) {
    e.preventDefault()

    url = `${baseURL}/films`

    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function (json) {
            console.log(json)
            displayResults(json);
        });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let sections = json;

    if (sections.length === 0) {
        let para = document.createElement('p');
        para.textContent = "Are you even a real fan?";
        sections.appendChild(para);
    } else {
        for (let i = 0; i < sections.length; i++) {
            let card = document.createElement('div');
            let heading = document.createElement('h1');
            let para = document.createElement('p');

            let current = sections[i];
            let description = current.description
            let title = current.title

            heading.textContent = title;
            para.textContent = description;

            card.setAttribute('class', 'card');
            heading.setAttribute('class', 'heading');
            para.setAttribute('class', 'para');
            card.appendChild(heading);
            card.appendChild(para);
            section.appendChild(card);
        }


    }
};