import React from 'react'
import './Navbar.css';
// import './App.css';


export default function Navbar(props) {
    // props.name=
    const x = props.name;
    const y = props.name;
    // y="garg"
    return (
        <div className='main'>
            <ul className='navbar'>
                <li className='navbar1'>{x}</li>
                <li className='navbar1'>{y}</li>
                <li className='navbar1'>LINKS</li>
                <li className='navbar1'>CONTACT</li>
            </ul>
            
        </div>
    )
}
