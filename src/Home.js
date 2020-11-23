import React from 'react'
// import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import { Link } from "react-router-dom";
import Search from'./Search.js'
import './Home.css';


function Home() {
    return (
        <div className='home'>
            {/* <h1>This is home page</h1> */}
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home_headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className='home_body'>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Could Not load"/>
                <div className="home_inputContainer">
                    {/* <Search hideButtons/> */}
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
