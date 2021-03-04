import React from "react"
import classes from "./SongsPage.module.scss"
import Beret_Soliluquy from "../../assets/Beret_Soliluquy.wav"
import Einstein_On_The_Beach from "../../assets/EinsteinOnTheBeach.wav"
import Ode_To_Bon_Voyage from "../../assets/Ode_to_Bon_Voyage.wav"
import Aux from "../hoc/Auxs.js"

const SongsPage = () => {
    return (
        <Aux>
            <div className={classes.masterContainer}>

                <div className={classes.container}>
                    <div className={classes.faderdown2}></div>
                    <a href="#" className={classes.arrow + " " + classes.up}>Up</a>
                    <a href="#" className={classes.arrow + " " + classes.down}>Down</a>
                </div>

                <div className={classes.SongsContainer}>

                    <div className={classes.SongsContainer_audio}>
                        <h3>High Fidelity in Access</h3>
                        <figure>
                            <audio
                                controls
                                src={Beret_Soliluquy}>
                                Your browser does not support the
                  <code>audio</code> element.
                </audio>
                            <figcaption>"The Beret Soliluquy"</figcaption>
                        </figure>
                        <figure>

                            <audio
                                controls
                                src={Einstein_On_The_Beach}>
                                Your browser does not support the
                  <code>audio</code> element.
                </audio>
                            <figcaption>"Einstein On The Beach"</figcaption>
                        </figure>
                        <figure>

                            <audio
                                controls
                                src={Ode_To_Bon_Voyage}>
                                Your browser does not support the
                  <code>audio</code> element.
                </audio>
                            <figcaption>"The Ode To Bon Voyage"</figcaption>
                        </figure>

                    </div>
                </div>

            </div>
        </Aux>

    )
}

export default SongsPage;