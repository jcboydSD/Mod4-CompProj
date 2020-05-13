// handles
const key = '5c7380e7';
const inputForm = document.querySelector('#inputForm');
const movieContent = document.querySelector('#movieContent');

// async function to retrieve movie information
const getMovieInfo = async (title) => {
    const base = 'http://www.omdbapi.com/';
    const query = `?t=${title}&apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data);
    return data;
  };

// function to update ui
const updateUI = (data) => {
    movieContent.innerHTML = `
        <h2>${data.Title}</h2>
        <h4>Year: ${data.Year}</h4>
        <h3>Movie Plot</h3>
        <p>${data.Plot}</p>
        <h3>Movie Actors</h3>
        <p>${data.Actors}</p>
    `;
};

// get movie title upon submit and call function
inputForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = inputForm.title.value.trim();
    getMovieInfo(title)
      .then(data => updateUI(data))
      .catch(err => console.log(err));
});
