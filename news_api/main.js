


let newsContainer = document.getElementById('news-container');

if (news.status === "ok") {
    for (let i = 0; i < news.articles.length; i++) {

        let article = news.articles[i];


        let newsArticles = 
            `
            <article class="article-container">
                <header class="article-header">
                    <h2 class="article-title">${article.title}</h2>
                </header>

                <section class="description">
                    <p>${article.description}</p>
                </section>

                <img src="${article.urlToImage}" />

                <address class="article-citation">
                    <div class="author">${article.author}</div>

                    <a href="${article.url}" class="source">Read more</a>

                    <time pubdate class="published">${article.publishedAt}</time>
                </address>
            </article>

            <hr>
            `;

            newsContainer.insertAdjacentHTML('beforeend', newsArticles);
    }
}