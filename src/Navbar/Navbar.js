import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth';
import {Avatar} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HighlightIcon from "@material-ui/icons/Highlight";

import './Navbar.css'


function Navbar() {

    const dispatch = useDispatch();

    const [showOptions,setShowoptions] = useState(false);
    
    let user = useSelector(state => state.authReducer.user);

    return (
        <div className="navbar">
            <h1>
            <HighlightIcon />
            Keeper
            </h1>
            <div id='profile-menu' onClick={()=>setShowoptions(!showOptions)}>
                <Avatar className="avatar-icon">{user.firstName[0]}</Avatar>
                <p>{user.firstName}</p>
                <ArrowDropDownIcon className='dropdown-icon'/>
                {
                    showOptions &&
                    <div id='profile-options'>
                        <p onClick={()=>dispatch(logout())}>Logout</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar;
