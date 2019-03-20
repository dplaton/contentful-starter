import React from "react";
import style from "./note.module.css";

const Note = ({ title, description }) => {
    const content = description.content[0].content[0].value;
    return (
        <li>
            <div className={style.noteTitle}>{title}</div>
            <div className={style.noteContent}>{content}</div>
        </li>
    );
};

export default Note;
