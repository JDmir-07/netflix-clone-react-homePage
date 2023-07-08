import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
});

/* 
    since instance will be axios object
    we can call - >    instance.get('something')

    what this will do is that it will append that argument into the baseURL that we have mentioned
    above

    something like this ->
    "https://api.themoviedb.org/3/something"
*/

export default instance;