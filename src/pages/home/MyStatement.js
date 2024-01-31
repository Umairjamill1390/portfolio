// src/pages/home/MyStatement.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './MyStatement.css';
import graduationImage from './GraduationPicture.jpeg';

const MyStatement = () => {
    useEffect(() => {
        const options = {
            strings: [
                "YouTuber",
                "Front-End Dev",
                "Sketch Artist",
                "Web Designer",
                "Mathematician",
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

        const typed = new Typed('.typing', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="my-statement-container">
            <img src={graduationImage} alt="Graduation" className="my-image" />
            <div className="text-container">
                <div className="name-container">
                    <h1>Umair Jamil</h1>
                    <span className="typing"></span>
                </div>
                <p>
                    I am a Front-End Developer. Currently pursuing my bachelor's degree in Computer Science
                    and thankfully acing at Queens College of City University of New York. I like to make
                    interactive web designs that make the user's experience better. I plan to be a fullstack
                    developer one day.
                </p>
            </div>
        </div>
    );
};

export default MyStatement;
