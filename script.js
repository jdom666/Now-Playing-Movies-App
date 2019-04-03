window.addEventListener('load', ()=>
{
    const api = `http:"//www.omdbapi.com/?i=tt2583620&apikey=a7d7024f"`; 

    fetch(api)
    .then(response => response.json())
    .then
    (data =>
        {
            console.log(data);

            document.getElementById('movie-name').innerHTML = data.Title;
            document.getElementById('movie-score').innerHTML = `IMDB Rating:     ${data.imdbRating} / 10`;
            document.getElementById('movie-overview').innerHTML = data.Plot;
            document.getElementById('movie-poster').innerHTML = `<img src="${data.Poster}">`;  
            document.getElementById('order').innerHTML = `
                                                            <a href="${data.Website}" class="btnWhite">Watch Trailer</a>
                                                            <div class="whiteBG"></div>
                                                        `;
        }
    );
});
