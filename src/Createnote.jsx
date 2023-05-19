import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
const Createnote = (props) => {
    const [fullnote, Setfullnote] = useState({
        title: "",
        note: ""
    })
    const Inputevent = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        Setfullnote((preval) => {
            return { ...preval, [name]: value, }
        })
    }
    const addEvent = () => {
        props.passnote(fullnote);
        Setfullnote({
            title: "",
            note: ""
        })
    } 
    const formfunc = (event) =>
    {
        event.preventDefault();
    }
    
    return (
        <>
                <div className="notebody">
                <form onSubmit={formfunc}>
                    <br />
                    <input
                    className="notetitle"
                        type="text"
                        placeholder="title"
                        autoComplete="off"
                        onChange={Inputevent}
                        name="title"
                        value={fullnote.title}
                    ></input><br />
                    <textarea
                        placeholder="Add a note" 
                        onChange={Inputevent}
                        name="note"
                        value={fullnote.note}
                    ></textarea>
                    <div>
                    <button className="addbtn" onClick={addEvent}><AddIcon /></button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Createnote;