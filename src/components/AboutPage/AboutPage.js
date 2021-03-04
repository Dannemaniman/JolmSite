import React from "react"
import classes from "../AboutPage/AboutPage.module.scss";
import Jolm from "../../assets/DL3P.jpg"
import JolmYoung from "../../assets/DL.jpg"

const AboutPage = (props) => {
    let content;
    let turnOnMedieval = <div className={classes.turnMedieval} onClick={props.changeF}>Turn {props.font ? "Off" : "On"} Medieval Font</div>

    if (props.font) {
        content = <article className={classes.heading}>
            {turnOnMedieval}
            <div className={classes.nameContainer}>
                <img src={Jolm} style={{ width: "10em", height: "15em" }} alt="jolm" />
                <h1><span style={{ fontSize: "4em" }}>Jolm</span> Van Deer Koopman</h1>
            </div>
            <p className={classes.text}>
                By the Age of <span style={{ fontFamily: "MedievalFont", fontSize: "2rem" }}>7</span> Jolm was already <span style={{ fontSize: "1.3em" }}>improvising fugues</span> and had expert knowledge on <span style={{ fontSize: "1.3em" }}>Old Armenian Churches.</span><br />
            By the Age of <span style={{ fontFamily: "MedievalFont", fontSize: "2rem" }}>8</span> Jolm was writing Addendums to <span style={{ fontSize: "1.3em" }}>Johann Sebastian Bach's BMW Preludes.</span><br /><br /> </p>
            <div className={classes.img_container}><img className={classes.jolmYoung} src={JolmYoung} alt="Jolm Young" /></div>
            <p className={classes.text}>
                Though Jolm Started from humble beginnings, his father was an Abusive Cuckoo Clock Maker, who readily struck fear into
                Young   Jolm. It all crescendoed into a hellish battle at the Brandenburg Cuckoo Clock Factory, in which all of
            the Clocks in Brandenburg were angrily smashed over <span style={{ textDecoration: "underline" }}>Young Jolms Back.</span><br /><br />
            Though Jolm is very upset over his upbringing, all the thrashings from the Cuckoo Clocks under the helm, of
            his tyrannical father, shaped the young genius into the <span style={{ fontSize: "1.3em" }}>No-Nonsense Man</span> <br />that he is today.
            <br />
            An expert in the art of <span style={{ fontSize: "1.3em" }}>Shell Gardening</span>, Jolms interests spans an impressive magnitude.
            <br />Nowadays Jolm can be found in his studio in Köln, translating the old Braille version of "The First Roman Romanian Bible", into an
            even older version of Braille.<br /><br />

            Jolm is also a <span style={{ fontFamily: "MedievalFont", fontSize: "2rem" }}>5</span> time winner of the "Brandenburg Whittling and Woodworking Competition" and has the biggest collection of
            Russian Dolls in the Southern Part of the City of Sasszhnitz
            </p>
        </article>
    } else {
        content = <article className={classes.heading} style={{ fontFamily: "Arial" }}>
            {turnOnMedieval}
            <div className={classes.nameContainer}>
                <img src={Jolm} style={{ width: "10em", height: "15em" }} alt="jolm" />
                <h1><span style={{ fontSize: "4em" }}>Jolm</span> Van Deer Koopman</h1>
            </div>
            <p className={classes.text}>
                By the Age of 7 Jolm was already <span style={{ fontSize: "1.3em" }}>improvising fugues</span> and had expert knowledge on <span style={{ fontSize: "1.3em" }}>Old Armenian Churches.</span><br />
            By the Age of 8 Jolm was writing Addendums to <span style={{ fontSize: "1.3em" }}>Johann Sebastian Bach's BMW Preludes.</span><br /><br /> </p>
            <div className={classes.img_container}><img className={classes.jolmYoung} src={JolmYoung} alt="Jolm Young" /></div>
            <p className={classes.text}>
                Though Jolm Started from humble beginnings, his father was an Abusive Cuckoo Clock Maker, who readily struck fear into
                Young Jolm. It all crescendoed into a hellish battle at the Brandenburg Cuckoo Clock Factory, in which all of
            the Clocks in Brandenburg were angrily smashed over <span style={{ textDecoration: "underline" }}>Young Jolms Back.</span><br /><br /><br />
            Though Jolm is very upset over his upbringing, all the thrashings from the Cuckoo Clocks under the helm, of
            his tyrannical father, shaped the young genius into the <span style={{ fontSize: "1.3em", textDecoration: "underline" }}>No-Nonsense Man</span> that he is today.
            <br />
            An expert in the art of <span style={{ fontSize: "1.3em" }}>Shell Gardening</span>, Jolms interests spans an impressive magnitude.
            Nowadays Jolm can be found in his studio in Köln, translating the old Braille version of "The First Roman Romanian Bible", into an
            even older version of Braille.<br /><br />

            Jolm is also a 5 time winner of the "Brandenburg Whittling and Woodworking Competition" and has the biggest collection of
            Russian Dolls in the Southern Part of the City of Sasszhnitz
        </p>
        </article>
    }

    return (
        <div className={classes.masterContainer}>
            <section className={classes.aboutSection}>
                {content}
            </section>
        </div>
    )
}

export default AboutPage;