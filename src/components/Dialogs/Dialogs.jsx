import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} className=
                {navData => navData.isActive ?
                    classes.active : classes.dialogItems}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="Andrey" id="1" />
                <DialogItem name="Sasha" id="2" />
                <DialogItem name="Anton" id="3" />
                <DialogItem name="Dima" id="4" />
                <DialogItem name="Lina" id="5" />
            </div>
            <div className={classes.messages}>
                <Message message="Hello" />
                <Message message="How are you?" />
                <Message message="I`m fine" />
            </div>
        </div>
    )
}

export default Dialogs;