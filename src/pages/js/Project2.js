import React from 'react'
import ReactPlayer from "react-player"

import { VscGithubInverted } from 'react-icons/vsc';





function Project2() {
    return (
        <div>
            <h1>NIST Android</h1>
            <br />
            <br />
            <br />
            <br />

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div className='block2'>
                    <h1>What is NIST?</h1>
                    <br />
                    <body>
                        Data collection often have to be done by the test subject without the supervision of the
                        researchers. These data are being collected using pen and paper which leaves a lot of room for human error.
                        <br />
                        <br />
                        We hope integrate an app with the daily routine of the test subject so it can collect accurate data without
                        intruding on their daily lives.
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>My role in the project</h3>
                        <ul>
                            <li>Designed and transitioned the old Python interface to the current interface</li>
                            <li>Comsetic changes such as moving background and animated splash screen</li>
                            <li><a href = "https://github.com/Daiweiliu112/NIST-Android.git" target="_blank" rel="noopener noreferrer"><VscGithubInverted/> Check out the repository.</a></li>
                        </ul>
                    </body>
                </div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=rnDQLDF7_Tk'
                    width={800}
                    height={600}
                />

                <div className='block'>
                    <body>
                        This app is currently a work in progress from the Innovation for Health hackathon. The app will collect the
                        test subject's wake up time, eating habit and then ask for a saliva sample to test. These data will then be
                        saved as a csv file in the phone.
                        <br />
                        <br />

                         We hope to build mini games in the future to make the data taking more exciting for children.
                    </body>
                </div>
            </div>





        </div>
    )
}

export default Project2