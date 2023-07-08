import { Component } from 'react';
import styles from './Banner.module.css';
import axios from '../axios';
import requests from '../requests';
export default class Banner extends Component {
    constructor() {
        super();
        this.state ={
            movie : [],
        }
    }
    truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-3) + "..." : str;
    }
    fetchData = async () => {
        const res = await axios.get(requests.fetchTrending);
        let random = Math.floor(Math.random() * 20) + 1;
        this.setState({ movie : res.data.results[random]}, () => this.setState((prev) => ({movie : {...prev.movie , overview : this.truncate(prev.movie.overview, 180)}})));
    }
    componentDidMount() {
        this.fetchData();
    }


    render() {
        return (
            <>
                <header className={styles.banner} 
                style={{
                    backgroundSize : "cover",
                    backgroundImage : `url("https://image.tmdb.org/t/p/original/${this.state.movie?.backdrop_path || this.state.movie?.poster_path}")`,
                    backgroundPosition : "center center"
                }}> 
                    {/* <<<< Background image */}
                    {/* <img 
                    className={styles.banner__image} 
                    src={`https://image.tmdb.org/t/p/original/${this.state.movie?.backdrop_path || this.state.movie?.poster_path}`}
                    alt={this.state.movie.name} /> */}
                    <div className={styles.banner__contents}>
                        <h1 className={styles.banner__title}>{this.state.movie?.title || this.state.movie?.name || this.state.movie?.original_name}</h1>
                        <div className={styles.banner__buttons}>
                            <button className={styles.banner__button}>Play</button>
                            <button className={styles.banner__button}>My List</button>
                            {/* play and mylist buttons inside a div */}
                        </div>
                        <h1 className={styles.banner__description}>{this.state.movie?.overview}</h1>
                        

                    </div>
                    <div className={styles.banner__fadeBottom}></div>
                </header>
            </>
        )
    }
}