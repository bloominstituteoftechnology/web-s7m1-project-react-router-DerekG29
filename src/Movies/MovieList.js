import React from 'react';
import { useNavigate, Link } from 'react-router-dom';



export default function MovieList(props) {
  const navigate = useNavigate();
  const goToMovie = id => () => {
    navigate(`movies/${id}`)
  }

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails
          link={<Link to={`movies/${movie.id}`}>Details</Link>}
          goToMovie={goToMovie}
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const { goToMovie, link } = props;

  return (
    <div className="movie-card" onClick={goToMovie(id)}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {link}
    </div>
  );
}
