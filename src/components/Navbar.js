import { Component } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/images/logo.png';
export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    handleShow = (val) => {
        this.setState({ show: val });
    }
    scrollValue = 0;
    setShow = () => {
        if (window.scrollY > 100) {
            this.handleShow(true);
        } else this.handleShow(false);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.setShow)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.setShow);
    }
    render() {
        return (
            <div className={`${styles.navbar} ${this.state.show ? styles.nav__dark__bg : ""}`}>
                <img className={styles.nav__logo} src={logo} alt="Netflix Logo" />
                <img className={styles.nav__avatar} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="account info" />
            </div>
        )
    }
}