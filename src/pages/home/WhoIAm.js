// src/pages/home/WhoIAm.js
import React from 'react';
import './WhoIAm.css';
import Story from './WhoIAm/Story';
import Background from './WhoIAm/Background';
import Motivations from './WhoIAm/Motivations';
import Inspirations from './WhoIAm/Inspirations';
import Quote from './WhoIAm/Quote';
import Future from './WhoIAm/Future';
import Vision from './WhoIAm/Vision';
import BeyondTech from './WhoIAm/BeyondTech';
import FavoriteShows from './WhoIAm/FavoriteShows';

const WhoIAm = () => {
    return (
        <div>
            <Story />
            <Background />
            <Motivations />
            <Inspirations />
            <Quote />
            <Future />
            <Vision />
            <BeyondTech />
            <FavoriteShows />
        </div>
    );
};

export default WhoIAm;
