import React from "react"
import classes from "./SideBar.module.scss"

const SideBar = () => {
    return (
        <div className={classes.SideBar}>
            <div className={classes.SideBar__Pages}><a href="/">Home</a></div>
            <div className={classes.SideBar__Pages}><a href="/about">About Jolm</a></div>
            <div className={classes.SideBar__Pages}><a href="/songs">Songs</a></div>
            <div className={classes.SideBar__Pages}><a href="/contact">Contact</a></div>
        </div>
    )
}

export default SideBar;