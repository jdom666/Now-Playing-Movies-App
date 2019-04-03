window.addEventListener('load', ()=>
{
    /*      
    const aapi = `https://api.themoviedb.org/3/movie/latest?api_key=28a5adbca70e26fdd712868dc9930ed3&language=en-US`; 

    fetch(aapi)
    .then(ressponse => ressponse.json())
    .then
    (
        dataa =>
        {
            console.log(dataa);
            const movieID = dataa.imdb_id;
            console.log(movieID);
        }
    );
    */
    const api = `http://www.omdbapi.com/?i=tt0448115&apikey=a7d7024f`; //`http:"//www.omdbapi.com/?i=tt2583620&apikey=a7d7024f"`;    //

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