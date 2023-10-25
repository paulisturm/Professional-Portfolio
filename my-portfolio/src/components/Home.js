import React from 'react';
import image from '../assets/picture.jpeg';
import bootstrap from '../assets/bootstrap.png';
import express from '../assets/express.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import jquery from '../assets/jquery.png';
import mongodb from '../assets/mongodb.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import mysql from '../assets/mysql.png';

function Home () {
    return (
        <>
        <h1 className="profile text-center">Paul Sturm's Portfolio</h1>
        
        <img src={image} alt="profilePicture" class="picture rounded-circle w-25 mx-auto d-block"/> 
        
        <h3 className="text-center">About Me</h3>
        <div className="container">
        I'm Paul Sturm, a results-driven Full-Stack Web Developer with experience in front-end technologies like React and Bootstrap, and back-end skills using Node.js and Express. I excel in turning innovative ideas into user-centric digital solutions. With a strong problem-solving mindset, I'm looking for new challenges in various industries. Let's connect to discuss how we can collaborate on transforming ideas into impactful web applications.
        </div>
        <h3 className="text-center">Skills</h3>

        <div className="container">
        <div class="image-container">
            <div class="col-md-2">
                <img src={html} alt="html" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={css} alt="css" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={javascript} alt="javascript" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={jquery} alt="jquery" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={mongodb} alt="mongodb" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={mysql} alt="mysql" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={node} alt="node" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={react} alt="react" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={express} alt="express" class="picture w-25 mx-auto d-block"/>
            </div>
            <div class="col-md-2">
                <img src={bootstrap} alt="bootstrap" class="picture w-100 mx-auto d-block"/>
        </div>
        </div>
        </div>
        </>
    )

}

export default Home;