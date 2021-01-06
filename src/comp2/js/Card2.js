import React,{ useState } from 'react'
import Carditems from '../../comp2/js/Carditems.js'
import '../../comp2/css/Card2.css'
import t4t from '../../imgs/ActualLogo.jpg'
import NIST from '../../imgs/NIST_ICON2.png'
import logo50 from '../../imgs/logo50.png'
import orientation from '../../imgs/orientation.png'
import math_formal from '../../imgs/math_formal.jpg'
import I4H from '../../imgs/I4H_group.jpg'
import ww2_data_china2 from '../../imgs/ww2_data_china2.jpg'
import Modal3 from '../../comp/js/Modal3.js'
import web_profile3 from '../../imgs/web_profile3.png'

function Card2() {
    const [showModal3, setShowModal3] = useState(false);

    const openModal3 = () => {
        setShowModal3(prev => !prev);
    };
    return (
        <div>
            <Modal3 showModal3={showModal3} setShowModal3={setShowModal3} />

            <div className='cards'>
                <h1>Hackathon Projects</h1>
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

                <h1>Personal Projects</h1>
                <div className="cards_container">
                    <div className='cards_wrapper'>
                        <ul className='cards_items'>
                            <Carditems
                                src={ww2_data_china2}
                                title="WW2 Data"
                                text="Visualization of WW2 casualties in Chinese Theater"
                                label='R, Rstudio'
                                path="/History" />

                            <Carditems 
                                src={web_profile3}
                                title="My Websites"
                                text="My first and second website"
                                label='React, HTML, CSS, Javscript'
                                path="/Websites" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2
