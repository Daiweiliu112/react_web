import React from 'react'
import Carditems from '../../comp2/js/Carditems.js'
import '../../comp2/css/Card2.css'
import t4t from '../../imgs/ActualLogo.jpg'
import NIST from '../../imgs/NIST_ICON2.png'
import logo50 from '../../imgs/logo50.png'
import orientation from '../../imgs/orientation.png'
import math_formal from '../../imgs/math_formal.jpg'
import I4H from '../../imgs/I4H_group.jpg'

function Card2() {
    return (
        <div className='cards'>
            <h1>Here are my projects!</h1>
            <div className="cards_container">
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <Carditems
                            src={t4t}
                            title="Tech for Teletherapy"
                            text="Speech Therapy Web Application"
                            label='Python Django, Javascript'
                            path="/Project1" />

                        <Carditems
                            src={NIST}
                            title="NIST Android"
                            text="Non-Invasive Sampling Technology"
                            label='Android Studio, Java'
                            path="/Project2" />

                        <Carditems
                            src={logo50}
                            title="NIST Raspberry Pi"
                            text="Non-Invasive Sampling Technology"
                            label='Python Kivy, MySQL'
                            path="/Project3" />
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1>Some of my other fun experiences!</h1>
            <div className="cards_container">
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <Carditems
                            src={orientation}
                            title="UW Orientation"
                            text="University of Waterloo"
                            label='Event Planner, Team Leader'
                            path="#" />

                        <Carditems
                            src={math_formal}
                            title="Neuro Nexus"
                            text="Calgary Hackathon"
                            label='Partcipant, Software Lead'
                            path="#" />

                        <Carditems
                            src={I4H}
                            title="Innovation for Health"
                            text="Calgary Hackathon"
                            label='Participant, Software Team'
                            path="#" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card2
