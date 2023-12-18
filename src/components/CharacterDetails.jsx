import React, { useState, useEffect } from 'react';

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch character details
    const fetchCharacter = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/1/'); // Replace 1 with the character ID you want to fetch
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    const fetchMovies = async () => {
      if (character && character.films) {
        try {
          const movieResponses = await Promise.all(
            character.films.map((film) => fetch(film).then((response) => response.json()))
          );
          setMovies(movieResponses);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
    };

    fetchCharacter();
  }, [character]); 

    console.log("data", character);
    console.log("data", movies)

  return (
    <div>
      {character && (
        <div>
          <h4>{character.name}</h4>
          <p>Year: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
          <p>Eye: {character.eye_color}</p>

        </div>
      )}

      {movies.length > 0 && (
        <div>
          <h2>Movies Appeared In:</h2>
          <ul>
            {movies.map((movie) => (
              <li key={movie.title}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
