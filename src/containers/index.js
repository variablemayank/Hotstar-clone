import React from 'react';
import {connect} from 'react-redux';
import {fetchMoviesList} from './actions'
class Movies extends React.Component {
    componentDidMount() {
        this.props.fetchMoviesList();
    }

    render() {
        const {movies,languages} = this.props;
        return (
            <div className ="root">
                Hii this is mayank
            </div>
        )
    }
}

function mapStateToProps(state) {
    let movies = state && state.movieList && state.movieList.movies;

    console.log("movies -->",movies);

}

export default connect(
    mapStateToProps,
    {
        fetchMoviesList
    }
)(Movies)