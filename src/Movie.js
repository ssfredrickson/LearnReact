import React  from 'react';
import PropTypes from 'prop-types';
import{ Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';  //API poster URL//

//Individual Movie Poster Component//
const Movie = ({ movie }) => (
    <div>
        <Link to= { `/${ movie.id }` }>
            <Overdrive id = { movie.id }>
                <Poster src = { `${ POSTER_PATH }${ movie.poster_path }` } alt= '{movie.title}'/>
            </Overdrive>
        </Link>    
    </div>

    )

export default Movie

//propType - Movie//
Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired   
}

export const Poster = styled.img`
    box-shadow: 0 0 35px black; 
`;