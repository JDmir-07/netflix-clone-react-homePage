import { Component } from 'react';
import axios from '../axios';
import styles from './Row.module.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

export default class Row extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
        this.baseURL = "https://image.tmdb.org/t/p/original/"
    }
    fetchData = async (url) => {
        const res = await axios.get(url);
        this.setState({
            movies: [...res.data.results]
        })
    }
    opts = {
        height : "390",
        width : "100%",
        playerVars : {
            autoplay : 1,
        }
    }
    componentDidMount() {
        const { fetchURL } = this.props;
        this.fetchData(fetchURL);
    }
    // componentDidUpdate() {
    //     console.log(this.state.movies[0]);
    // }
    handleClick = (movie) => {
        
        if (this.props.trailerURL) {
            this.props.setURL("", 0);
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name ||  "")
            .then(res => this.props.setURL(res.split("?")[1].split("&")[0].split("=")[1], this.props.id))
            .catch(err => console.log("OPS ERROR => " + err))
        }
    }
    render() {
        const { title } = this.props;
        return (
            <>
                <div className={styles.row}>
                    <h2>{title}</h2>

                    <div className={`${styles.row__posters}`}>
                        {/* several row__poster(s) */}
                        {this.state.movies.map(movie => (
                            <img key={movie.id} onClick={() => this.handleClick(movie) }className={`${styles.row__poster}  ${this.props.isLargeImage && styles.row__posterLarge}`} src={`${this.baseURL}${this.props.isLargeImage ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                        ))}

                    </div>

                    {this.props.trailerURL && this.props.trailerID === this.props.id && <YouTube videoId={this.props.trailerURL} opts={this.opts}/>}

                </div>

            </>
        )
    }
}