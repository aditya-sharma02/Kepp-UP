import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
const Dispnotes = (props) => {
    return (
        <>
            
            <div className="displaynote">
                <h3>{props.title}</h3>
                <p>{props.note}</p>
                <button 
                className="addbtndel"
                onClick={() => {
                    props.onSelect(props.id)
                }}><DeleteOutlineIcon /></button>
            </div>
            
        </>
    )
}
export default Dispnotes;
