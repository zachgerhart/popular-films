import React, {Component} from 'react';
import axios from 'axios';
import './MovieContainer.css'

class MovieContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      movieList: []
    }
  }

  componentDidMount(){
    // axios.get('/api/test').then(response => console.log(response.data))
    axios.get('/api/movies').then(response => {
      this.setState({movieList: response.data.results})
      console.log(response.data);
    });
  }

render(){
  const imgUrl = 'http://image.tmdb.org/t/p/original'
  const movies = this.state.movieList.map((movie, index) => {
    return (
      <div key={index} className="movie-cards">
       <img style={{height: 250, width: 320}} src={ imgUrl + movie.backdrop_path}/>
       <h2> {movie.original_title} </h2>
       <h2> Rating: {movie.vote_average}/10 </h2>
      </div>
    )
  })

  return (
    <div className="movieContainer">

      { movies }
    </div>
  )
}

}

export default MovieContainer;
