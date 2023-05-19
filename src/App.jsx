import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Createnote from "./Createnote"
import Dispnotes from "./Dispnotes";

const App = () => {
    const [addednotes, Setaddednotes] = useState([]);
    const addnote = (note) => {
        Setaddednotes((preval) => {
            return [...preval, note];
        })
    }
    const deletenote = (id) => {
        Setaddednotes((preval) => {
            return (addednotes.filter((arr, index) => {
                return index != id;
            }))
        })
    }
    return (
        <>
            <Header />
            <Createnote passnote={addnote}/>
            <div className="griddisp">{addednotes.map((val, index) => {
                return (
                    <Dispnotes
                        key={index}
                        id={index}
                        title={val.title}
                        note={val.note}
                        onSelect={deletenote}
                    />
                )
            })}</div>
            <Footer />
        </>
    )
}

export default App;