import React, { useState } from 'react'

export default function Form(props) {
    const x = props.heading
    const [text,settext]=useState(' ')
    function changetext(Event){
        ( 
            settext(Event.target.value)
        )
    }
    return (
        <div>

            <h1>enter inside the table{x}</h1>
            <textarea  rows="10" cols="50" onChange={changetext} value={text}></textarea>
            <p style={{color:"red"}}>{text}</p>

            
        </div>
    )
}
