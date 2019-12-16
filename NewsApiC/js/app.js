const sportsNewsApi = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=30c2c954fcd24859ba92874fd4d84081
`;
window
  .fetch(sportsNewsApi)
  .then(data => {
    data
      .json()
      .then(sportsnews => {
        console.log(sportsnews);
        let sportsData = sportsnews.articles;
        let output = "";
        for (let sports of sportsData) {
          output += `
          <!--<h1 class="newsh1">Sports News</h1>-->
            <h1 class="h1title"><a href="${sports.url}" target=_blank>${sports.title}</a></h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publishedAt}</p>
            `;
        }
        document.getElementById("left").innerHTML = output;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

//time javascript

setInterval(() => {
  var time = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
}, 1000);

const Url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=30c2c954fcd24859ba92874fd4d84081
`;
window
  .fetch(Url)
  .then(data => {
    data.json().then(ent => {
      let entData = ent.articles;
      let output = "";
      for (let ent of entData) {
        output += `
          <!--<h1 class="newsh1">Sports News</h1>-->
          <h1 class="h1title"><a href="${ent.url}" target=_blank>${ent.title}</a></h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publishedAt}</p>
            `;
      }
      document.getElementById("right").innerHTML = output;
    });
  })
  .catch(err => console.log(err));

//top headlines
const topNewsApi = `https://newsapi.org/v2/top-headlines?country=us&apiKey=30c2c954fcd24859ba92874fd4d84081`;
window
  .fetch(topNewsApi)
  .then(data => {
    data
      .json()
      .then(topNews => {
        console.log(topNews);
        let topNewsData = topNews.articles;
        let output = "";
        for (let news of topNewsData) {
          output += `
          <!--<h1 class="newsh1">Sports News</h1>-->
            <h1 class="h1title"><a href="${news.url}" target=_blank>${news.title}</a></h1>
            <p>${news.description}</p>
            <img src="${news.urlToImage}"/>
            <p>${news.publishedAt}</p>
            `;
        }
        document.getElementById("middle").innerHTML = output;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
