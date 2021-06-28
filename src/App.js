import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
   isLoading: true,
   movies : [] // default 값을 state 나 componentDidMount 안에 선언해둔다
  };
  
  getMovies = async () => {
    const { 
      data: {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // this.setState({movies:movies})
    this.setState({movies, isLoading: false})
  }
  componentDidMount(){ // 이 자리가 data를 fetch 하는 자리
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 6000);
    this.getMovies();
     }
  
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
     <div>{isLoading ? "Loading" : movies.map(movie => {
      <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />);
    })} </div>
    </section>
    )}
}

export default App;
