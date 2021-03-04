import React from "react";
import classes from "./App.module.scss";
import SideBar from "./components/SideBar/SideBar.js";
import JolmPicture from "./assets/Jolm.jpg";
import { BrowserRouter, Route } from "react-router-dom"
import AboutPage from "./components/AboutPage/AboutPage.js"
import ContactPage from "./components/ContactPage/ContactPage.js"
import SongsPage from "./components/SongsPage/SongsPage.js"
import JolmAudio from "./assets/Jolm.m4a"
import Progress from "./components/scroll/scroll"

class App extends React.Component {

  state = {
    medievalFont: true,
    scrollPostion: 0
  }

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    this.setState({
      scrollPostion,
    });
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  changeFont = () => {
    this.setState({ medievalFont: !this.state.medievalFont })
    // console.log(this.state.medievalFont)
  }

  componentDidMount() {
    this.listenToScrollEvent();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={classes.background}>
        <Progress scroll={this.state.scrollPostion + '%'} />
          <Route path="/" exact render={() => {
            return (
              <div className={classes.content}>
                <a href="/about" style={{textDecoration:"none"}}>
                <img
                  src={JolmPicture}
                  alt="dannes pic"
                  className={classes.jolmPicture}
                /></a>
                <audio autoPlay>
                  <source src={JolmAudio}></source>
                </audio>
                <h2 style={{ fontFamily: "MedievalFont", fontSize: "13em", color: "white", position: "relative", left: "-0.2em" }}>Jolm</h2>
              </div>
            )
          }} />
          <SideBar />
          <Route path="/songs" component={SongsPage} />
          <Route path="/about" render={props => (<AboutPage changeF={this.changeFont} scroll={this.state.scrollPostion} font={this.state.medievalFont} />)} />
          <Route path="/contact" component={ContactPage} />

        </div>
      </BrowserRouter>
    );

  }
}

export default App;
