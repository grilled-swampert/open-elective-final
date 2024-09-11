import React from 'react';
import './template.css'; 
// import { Link } from 'react-router-dom';

const TemplatePage = ()=>{
    return(
    <div className="template">
        DOWNLOAD TEMPLATE:
        <button id="coursera"><a href="https://docs.google.com/spreadsheets/d/1o_BabKrTUoPsEUOvbT4g06cfsN5T1_syPjBOPKNnE0A/edit?usp=sharing" target="_blank" rel="noopener noreferrer">COURSERA</a></button>
        <button id="nptel"><a href="https://docs.google.com/spreadsheets/d/1MyisViOXOjJJFF8icHgY8FV7rfN82bu12L_Q37OQhMc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">NPTEL</a></button>
        <button id="clg-offered"><a href="https://docs.google.com/spreadsheets/d/1ACbYdoG4b57B-6d7LBRQzqoV1EGDzfhXqwmk8vwI8ts/edit?usp=sharing" target="_blank" rel="noopener noreferrer">COLLEGE OFFERED</a></button>
    </div>
    );
}
export default TemplatePage;