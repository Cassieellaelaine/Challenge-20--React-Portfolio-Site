import React, { useState } from 'react';


const Navbar = () => {
  return (
<div class="header" className="header div hero">
        <h1>Cassie Owens</h1>
        <div>
            <ul>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#projects">My Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
