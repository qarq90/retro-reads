const articleData = [
    {
        ccl: "hidden ccl",
        href: "./config/barben-heimer.html",
        image: "../assets/img/barbenheimer.jpeg",
        title:
            "🎀<span class='bar1 ar'>Barbie</span>🎀 VS <br />💣<span class='oppen1 ar'>Oppenheimer</span>💣 <br /> Who won?",
        content:
            "The biggest entertainment phenomenon of 2023 saw two films grossed a\n" +
            "        combined $244 million, the most successful opening weekend since\n" +
            '        "Avengers: End Game."' +
            "        <br /><br />",
        author: "- By Jame Gamble - ",
        date: "Aug 15 , 2023",
    },
    {
        href: "./config/spider-verse.html",
        image: "../assets/img/sp1.jpeg",
        title:
            "<span class='sp1 ar'>🕷</span> <span class='sp2 ar'>Spider-Verse</span>\n" +
            "              Trilogy 🕸 Info is here...",
        content:
            "Dive into the Spider-Verse once again as we bring you the latest updates on the release date, cast, and all the essential information you need to stay in the loop.\n" +
            "            <br /><br />",
        author: "- By Christian Harper - ",
        date: "Aug 8 , 2023",
    },
    {
        href: "./config/napoleon-movie.html",
        image: "../assets/img/napoleon.jpg",
        title:
            "Can the 🤡Joker🤡 be <span class='nap1 ar'>Nap</span><span class='nap2 ar'>ole</span><span class='nap3 ar'>on?</span>",
        content:
            "Joaquin Phoenix plays famous leader Napoleon Bonaparte, beginning\n" +
            "            with the French Revolution. The first trailer for the movie\n" +
            "            “Napoleon” is here...\n" +
            "            <br /><br />",
        author: "- By Liza Oliver - ",
        date: "Jul 10 , 2023",
    },
    {
        href: "./config/binge-watch.html",
        image: "../assets/img/TV%20Show_400px.png",
        title: "Wanna <span class='ar binge1'>Binge</span> 🎥 Watch🎬",
        content:
            "Whether you're seeking thrilling plot twists, heartwarming narratives, mind-bending science fiction, or sidesplitting comedy, we have got you covered. \n" +
            "            <br /><br />",
        author: "- By Casey Nicholson - ",
        date: "Aug 2 , 2023",
    },

    {
        ccl: "hidden ccl",
        href: "./config/add-to-playlists.html",
        image: "../assets/img/palylist.jpeg",
        title: "Add to 🎶 your<span class='play1 ar'> playlists</span>🎵",
        content:
            "These tracks have dominated the charts, resonated with millions, and encapsulated the essence of their respective genres, making them perfect for your playlists.\n" +
            "            <br /><br />",
        author: "- By Norris Mccall - ",
        date: "Jul 29 , 2023",
    },
    {
        letter: "h",
        href: "./config/musk-vs-mark.html",
        image: "../assets/img/zm.jpg",
        title:
            "<span class='ar fight1'>Musk</span> 🥊 VS 🥊 <span class='ar fight1'>Zuckerberg</span>",
        content:
            "Tech billionaires Mark Zuckerberg and Elon Musk proposed in June\n" +
            "            2023 that they battle it out in a public mixed martial arts (MMA)\n" +
            "            'cage match'\n" +
            "            <br /><br />",
        author: "- By Raul Bowers - ",
        date: "Aug 13 , 2023",
    },
    {
        ccl: "hidden ccl",
        href: "./config/hector-death.html",
        image: "../assets/img/hector.jpeg",
        title:
            "Goodbye <span class='hec1 ar'>Amigo ''🔔'' Hector ''🔔''</span><br />",
        content:
            'Renowned talented actor Mark Margolis will forever be etched in our memories for his exceptional portrayal of the iconic character Hector Salamanca from the show "Breaking Bad."\n' +
            "            <br /><br />",
        author: "- By Olivia Reeves - ",
        date: "Aug 4 , 2023",
    },
    {
        letter: "g",
        href: "./config/utopia-album.html",
        image: "../assets/img/utopia.png",
        title:
            "🔥<span class='ar melt1'>MELTDOWN</span>🔥 keeps melting <br />\n" +
            "              the competition",
        content:
            "MELTDOWN(feat. Drake) from Travis Scott's fourth studio album UTOPIA\n" +
            "            has de-throned Lil Uzi Vert's Pink Tape's SUICIDE DOORS\n" +
            "            <br /><br /><br />",
        author: "- By The Hip-Hop Boy - ",
        date: "Aug 11 , 2023",
    },
];

const articleDataFull = [
    {
        href: "./config/napoleon-movie.html",
        image: "../assets/img/napoleon.jpg",
        title:
            "Can the 🤡Joker🤡 be <span class='nap1 ar'>Nap</span><span class='nap2 ar'>ole</span><span class='nap3 ar'>on?</span>",
        content:
            "Joaquin Phoenix plays famous leader Napoleon Bonaparte, beginning\n" +
            "            with the French Revolution. The first trailer for the movie\n" +
            "            “Napoleon” is here...\n" +
            "            <br /><br />",
        author: "- By Liza Oliver - ",
        date: "Jul 10 , 2023",
    },
    {
        href: "./config/binge-watch.html",
        image: "../assets/img/TV%20Show_400px.png",
        title: "Wanna <span class='ar binge1'>Binge</span> 🎥 Watch🎬",
        content:
            "Whether you're seeking thrilling plot twists, heartwarming narratives, mind-bending science fiction, or sidesplitting comedy, we have got you covered. \n" +
            "            <br /><br />",
        author: "- By Casey Nicholson - ",
        date: "Aug 2 , 2023",
    },
    {
        ccl: "hidden ccl",
        href: "./config/barben-heimer.html",
        image: "../assets/img/barbenheimer.jpeg",
        title:
            "🎀<span class='bar1 ar'>Barbie</span>🎀 VS <br />💣<span class='oppen1 ar'>Oppenheimer</span>💣 <br /> Who won?",
        content:
            "The biggest entertainment phenomenon of 2023 saw two films grossed a\n" +
            "        combined $244 million, the most successful opening weekend since\n" +
            '        "Avengers: End Game."' +
            "        <br /><br />",
        author: "- By Jame Gamble - ",
        date: "Aug 15 , 2023",
    },
    {
        href: "./config/spider-verse.html",
        image: "../assets/img/sp1.jpeg",
        title:
            "<span class='sp1 ar'>🕷</span> <span class='sp2 ar'>Spider-Verse</span>\n" +
            "              Trilogy 🕸 Info is here...",
        content:
            "Dive into the Spider-Verse once again as we bring you the latest updates on the release date, cast, and all the essential information you need to stay in the loop.\n" +
            "            <br /><br />",
        author: "- By Christian Harper - ",
        date: "Aug 8 , 2023",
    },
    {
        ccl: "hidden ccl",
        href: "./config/hector-death.html",
        image: "../assets/img/hector.jpeg",
        title:
            "Goodbye <span class='hec1 ar'>Amigo ''🔔'' Hector ''🔔''</span><br />",
        content:
            'Renowned talented actor Mark Margolis will forever be etched in our memories for his exceptional portrayal of the iconic character Hector Salamanca from the show "Breaking Bad."\n' +
            "            <br /><br />",
        author: "- By Olivia Reeves - ",
        date: "Aug 4 , 2023",
    },
    {
        letter: "g",
        href: "./config/utopia-album.html",
        image: "../assets/img/utopia.png",
        title:
            "🔥<span class='ar melt1'>MELTDOWN</span>🔥 keeps melting <br />\n" +
            "              the competition",
        content:
            "MELTDOWN(feat. Drake) from Travis Scott's fourth studio album UTOPIA\n" +
            "            has de-throned Lil Uzi Vert's Pink Tape's SUICIDE DOORS\n" +
            "            <br /><br /><br />",
        author: "- By The Hip-Hop Boy - ",
        date: "Aug 11 , 2023",
    },
    {
        ccl: "hidden ccl",
        href: "./config/add-to-playlists.html",
        image: "../assets/img/palylist.jpeg",
        title: "Add to 🎶 your<span class='play1 ar'> playlists</span>🎵",
        content:
            "These tracks have dominated the charts, resonated with millions, and encapsulated the essence of their respective genres, making them perfect for your playlists.\n" +
            "            <br /><br />",
        author: "- By Norris Mccall - ",
        date: "Jul 29 , 2023",
    },
    {
        letter: "h",
        href: "./config/musk-vs-mark.html",
        image: "../assets/img/zm.jpg",
        title:
            "<span class='ar fight1'>Musk</span> 🥊 VS 🥊 <span class='ar fight1'>Zuckerberg</span>",
        content:
            "Tech billionaires Mark Zuckerberg and Elon Musk proposed in June\n" +
            "            2023 that they battle it out in a public mixed martial arts (MMA)\n" +
            "            'cage match'\n" +
            "            <br /><br />",
        author: "- By Raul Bowers - ",
        date: "Aug 13 , 2023",
    },
];

let sortBoolean = true;
const articleContainer = document.getElementById("trending-div-sort");
const articleContainerFull = document.getElementById("popular-div");

function sortArticles() {
    return articleData.sort((a, b) => Math.random() - 0.5);
    console.log(Math.random() - 0.5)
}

function deSortArticles() {
    return articleData.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function generateArticleCard(article) {
    return `
    <div class="card ent-cards">
      <a href="${article.href}">
        <div class="card-top">
          <img src="${article.image}" alt="${article.title}" />
          <h1 class="ccl">${article.title}</h1>
        </div>
        <div class="card-content">
          <p class="article-summary">${article.content}</p>
          <h5 class="article-summ-date">${article.author}${article.date}</h5>
        </div>
      </a>
    </div>
  `;
}

function generateArticleCardFull(article) {
    return `
    <div class="cardF ent-cardsF">
      <a href="${article.href}">
        <div class="card-topF">
          <img src="${article.image}" alt="${article.title}" />
        </div>
        <div class="card-contentF">
          <h1 class="cclF">${article.title}</h1>
          <p class="article-summaryF">${article.content}</p>
          <h5 class="article-summ-dateF">${article.author}${article.date}</h5>
        </div>
      </a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
    renderArticles(articleData);
    renderArticlesFull(articleDataFull);
});

function renderArticles(articles) {
    articleContainer.innerHTML = "";
    articles.forEach((article) => {
        const articleCard = generateArticleCard(article);
        articleContainer.innerHTML += articleCard;
    });
}

function renderArticlesFull(articles) {
    articleDataFull.innerHTML = "";
    articles.forEach((article) => {
        const articleCardFull = generateArticleCardFull(article);
        articleContainerFull.innerHTML += articleCardFull;
    });
}

document.getElementById("article-sort").addEventListener("click", function () {
    sortBoolean = !sortBoolean;
    if (sortBoolean) {
        const sortedArticles = sortArticles();
        renderArticles(sortedArticles);
    } else {
        const deSortedArticle = deSortArticles();
        renderArticles(deSortedArticle);
    }
});
