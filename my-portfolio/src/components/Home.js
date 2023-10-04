import React from 'react';
import image from '../assets/picture.jpeg';

function Home () {
    return (
        <>
        <h1 className="profile text-center">Paul Sturm's Portfolio</h1>
        
        <img src={image} alt="profilePicture" class="picture rounded-circle w-25 mx-auto d-block"/> 
        
        <h3 className="text-center">About Me</h3>
        <div className="container">
        I'm Paul Sturm, a results-driven Full-Stack Web Developer with experience in front-end technologies like React and Bootstrap, and back-end skills using Node.js and Express. I excel in turning innovative ideas into user-centric digital solutions. With a strong problem-solving mindset, I'm looking for new challenges in various industries. Let's connect to discuss how we can collaborate on transforming ideas into impactful web applications.
        </div>
        </>
    )

}

export default Home;