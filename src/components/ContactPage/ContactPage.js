import React from "react"
import classes from "./ContactPage.module.scss"
import BindingOfSticks from "../../assets/BindingOfSticks.jpg"
import FeastOfShurek from "../../assets/FeastOfShurek.jpg"
import GatheringOfHorns from "../../assets/GatheringOfHorns.jpg"
import OldDruids from "../../assets/OldDruids.jpg"
import Aux from "../hoc/Auxs.js"
import Dove from "../../assets/dove.jpg"
import Bottle from "../../assets/Bottle.jpg"

class CommunityPage extends React.Component {
    state = {
        load: true
    }



    toggleResize = () => {
        if (this.state.load) {
            this.setState({ load: !this.state.load })
            console.log(this.state.load)
        }

    }


    render() {

        let content = this.state.load ?

            <div className={classes.container} onClick={this.toggleResize}>
                <h2 className={classes.clickbox}>Click me</h2>
                <h1>Contact</h1>
                <hr style={{ width: "100%" }} />
                <p>Jolm can be either reached by:</p><br />
                <div className={classes.container_contact}>
                    <img src={Dove} alt="Dove" className={classes.image2} />
                    <p>Pigeon Delivery Service</p><br />
                    <img src={Bottle} alt="Bottle" className={classes.image2} />
                    <p>Message In a Bottle</p>
                </div>

                <div className={classes.subContainer}>
                    <h2>He can also be reached in these following Locations:</h2>
                    <img src={BindingOfSticks} alt="Binding Of Sticks" className={classes.image} />
                    <p>Binding Of Sticks Carneval, Mussershlashz, Hamburg</p>
                    <img src={FeastOfShurek} alt="Feast Of Shurek" className={classes.image} />
                    <p>Feast of Shurek!, Schwarzenwald, Zurenberg</p>
                    <img src={GatheringOfHorns} alt="Gathering Of Horns" className={classes.image} />
                    <p>Gathering of Horns, Kölneg, Schweiz</p>
                    <img src={OldDruids} alt="Old Druids Convention" className={classes.image} />
                    <p>Tomb of Kel'Thuzad, Van Deer Koopmann Family Crypt</p>
                </div>
            </div>
            : //style = {{ overflow: "visible", height: "100%" }}
            <div className={classes.container + " " + classes.containerheight} onClick={this.toggleResize}>
                <h1>Contact</h1>
                <hr style={{ width: "100%" }} />
                <p>Jolm can be either reached by:</p><br />
                <div className={classes.container_contact}>
                    <img src={Dove} alt="Dove" className={classes.image2} />
                    <p>Pigeon Delivery Service</p><br />
                    <p style={{ fontSize: "3em" }}> Or </p>
                    <img src={Bottle} alt="Bottle" className={classes.image2} />
                    <p>Message In a Bottle</p>
                </div>
                <hr style={{ width: "100%" }} />
                <div className={classes.subContainer}>
                    <h2>Jolm can also be reached in the following Locations</h2>
                    <img src={BindingOfSticks} alt="Binding Of Sticks" className={classes.image} />
                    <p>Binding Of Sticks Carneval, Mussershlashz, Hamburg</p>
                    <img src={FeastOfShurek} alt="Feast Of Shurek" className={classes.image} />
                    <p>Feast of Shurek, Schwarzenwald, Zurenberg</p>
                    <img src={GatheringOfHorns} alt="Gathering Of Horns" className={classes.image} />
                    <p>Gathering of Horns, Kölneg, Schweiz</p>
                    <img src={OldDruids} alt="Old Druids Convention" className={classes.image} />
                    <p>Tomb of Kel'Thuzad, Van Deer Koopmann Family Crypt</p>
                </div>
            </div>

        return (



            <Aux>

                <div className={classes.masterContainer}>
                    <div className={classes.header}>
                    </div>

                    {content}
                </div>
            </Aux>
        )
    }

}

export default CommunityPage;