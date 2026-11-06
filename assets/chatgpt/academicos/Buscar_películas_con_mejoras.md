## Usuario · 26/5/24, 7:28:51 p. m.

//import { useState } from 'react';
import noPoster from '../../../assets/images/darth-vader.jpg';
function SearchMovies(){
	const movies = [
		{
			"Title": "Parchís",
			"Year": "1983",
			"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
		},
		{
			"Title": "Brigada en acción",
			"Year": "1977",
			"Poster": "N/A"
		},
	];
	const keyword = 'PELÍCULA DEMO';
	// Credenciales de API
	const apiKey = 'd4e35e92'; // Intenta poner cualquier cosa antes para probar
	
	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster ? movie.Poster : noPoster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}
export default SearchMovies;


## Asistente · 26/5/24, 7:29:12 p. m.

The code you have provided is a functional React component that simulates a movie search page. It demonstrates how to conditionally render content based on the presence of an API key, and displays a list of movies with placeholder data. Here are a few improvements and fixes:

1. **Conditional Poster Display**: In the current implementation, the `Poster` field might contain the string `"N/A"`, which should be treated the same as a missing poster. Modify the conditional rendering logic to account for this.
2. **Handling Search Input**: Capture the search input using React's `useState` hook and update the keyword accordingly.
3. **Styling**: Enhance readability and maintainability with a few stylistic improvements.

Here’s the improved code:
```javascript
import React, { useState } from 'react';
import noPoster from '../../../assets/images/darth-vader.jpg';
function SearchMovies() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [keyword, setKeyword] = useState('PELÍCULA DEMO');
  const movies = [
    {
      "Title": "Parchís",
      "Year": "1983",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
    },
    {
      "Title": "Brigada en acción",
      "Year": "1977",
      "Poster": "N/A"
    },
  ];
  // API credentials
  const apiKey = 'd4e35e92'; // Try changing this to test the error message
  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(searchKeyword);
  };
  return (
    <div className="container-fluid">
      {apiKey !== '' ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Search Form */}
              <form method="GET" onSubmit={handleSearchSubmit}>
                <div className="form-group">
                  <label htmlFor="search">Buscar por título:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="search"
                    value={searchKeyword}
                    onChange={handleSearchChange}
                  />
                </div>
                <button type="submit" className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Películas para la palabra: {keyword}</h2>
            </div>
            {/* Movie List */}
            {movies.length > 0 ? (
              movies.map((movie, i) => (
                <div className="col-sm-6 col-md-3 my-4" key={i}>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                          src={movie.Poster !== 'N/A' ? movie.Poster : noPoster}
                          alt={movie.Title}
                          style={{ width: '90%', height: '400px', objectFit: 'cover' }}
                        />
                      </div>
                      <p>{movie.Year}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="alert alert-warning text-center">No se encontraron películas</div>
            )}
          </div>
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
      )}
    </div>
  );
}
export default SearchMovies;
```
### Summary of Changes:
1. Added `useState` hooks to manage the search keyword input and the displayed keyword.
2. Added event handlers (`handleSearchChange` and `handleSearchSubmit`) to update the state based on user input.
3. Enhanced the logic to handle the case where the `Poster` field contains the string `"N/A"`.
4. Improved the code structure and readability.