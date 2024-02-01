// src/pages/home/Home.js
import React from "react";
import MainNavbar from "../../components/navbar/MainNavbar";
import MyStatement from "./MyStatement";
import WhoIAm from './WhoIAm';
import MyServices from "./MyServices";
import Education from "./Education";
import ContactForm from "./ContactForm";

const Home = () => {
    return (
        <div>
            <MainNavbar />
            <MyStatement />
            <WhoIAm />
            <MyServices />
            <Education />
            <ContactForm />
        </div>
    );
};

export default Home;
