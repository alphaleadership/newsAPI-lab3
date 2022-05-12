// Page Elements

const general = document.getElementById('general');
const business = document.getElementById('business');
const sport = document.getElementById('sport');
const science = document.getElementById('science');
const health = document.getElementById('health');
const entertainment = document.getElementById('entertainment');
const technology = document.getElementById('technology');
const main = document.getElementsByTagName('main')[0];

// News API Data
const API_DOMAIN = "https://newsapi.org/v2/top-headlines"
const API_KEY = "cd45ba31a79643279ed00e0353545c72"
const endpointPath = (category, page) =>
    `${API_DOMAIN}?country=us&category=${category}&apiKey=${API_KEY}&page=${page}`;

// Request News Function
let page = 1

async function getNews(article) {
    currentArticle = article
    page = 1
    let url = endpointPath(article, 1);
    let response = await fetch(url);
    let jsonResponse = await response.json();
    return jsonResponse.articles.slice(0, 5);
}

async function getNewsNext(article) {
    currentArticle = article
    let url = endpointPath(article, ++page);
    let response = await fetch(url);
    let jsonResponse = await response.json();
    return jsonResponse.articles.slice(0, 5);
}

let currentArticle = ""


// Render Function

function renderNews(articles) {
    articles.map((article, index) => {
        let articleRow =
            '<div class="articlerow">' +
            ' <div class="article">' +
            '<img class="storyimage" style="width: 100%; height: auto; max-height: 300px; object-fit: none; border-top-left-radius: 15px; border-top-right-radius: 15px;"  src="' + article.urlToImage + '" />' +
            '   <h2 class="title">' + article.title + '</h2>' +
            '   <h3>By ' + article.author + '</h3>' +
            '   <p> ' + article.description + '</p>' +
            '   <a href="' + article.url + '" target="_blank" class="readmore">Read More</a>' +
            ' </div>' +
            '</div>';

        main.innerHTML += articleRow;
    });
    main.innerHTML += '<button id="load-more' + page + '" onclick="myFunction()" class="load-more__text">Load more</button>'
    return articles;
}

function myFunction() {
    document.getElementById("load-more" + page).style.display = "none";
    getNewsNext(currentArticle).then(articlesArray => renderNews(articlesArray));
}

// Button Event Listeners

general.addEventListener('click', function () {
    main.innerHTML = ' ';
    getNews("general").then(articlesArray => renderNews(articlesArray));
}, false);


business.addEventListener('click', function () {
    main.innerHTML = ' ';
    getNews("business").then(articlesArray => renderNews(articlesArray));
}, false);

sport.addEventListener('click', function () {
    main.innerHTML = ' ';
    getNews("sport").then(articlesArray => renderNews(articlesArray));
}, false);

science.addEventListener('click', function () {
    main.innerHTML = ' ';
    getNews("science").then(articlesArray => renderNews(articlesArray));
}, false);

health.addEventListener('click', function () {
    main.innerHTML = ' ';
    getNews("health").then(articlesArray => renderNews(articlesArray));
}, false);

entertainment.addEventListener('click', function () {
    main.innerHTML = ' ';
    getNews("entertainment").then(articlesArray => renderNews(articlesArray));
}, false);

technology.addEventListener('click', function () {
    main.innerHTML = ' ';
    getNews("technology").then(articlesArray => renderNews(articlesArray));
}, false);
