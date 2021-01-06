import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import Kivy_home from '../../imgs/NIST_kivy_home.png'
import Kivy_research from '../../imgs/NIST_kivy_researcher.png'
import Kivy_research2 from '../../imgs/NIST_kivy_researcher2.png'
import Kivy_question from '../../imgs/NIST_kivy_question.png'

import assembly from '../../imgs/assembly.jpg'
import box_front from '../../imgs/box_front.jpg'
import box_side from '../../imgs/box_side.jpg'
import box_trans from '../../imgs/box_transparent.jpg'

import { VscGithubInverted } from 'react-icons/vsc';



function Project3() {
    return (
        <div>
            <h1>NIST Raspberry Pi</h1>
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
                        <h3>My role in the project</h3>
                        <ul>
                            <li>Built the researcher interface to allow customization without the need to code.</li>
                            <li>Set up MySQL databse to allow question creation and customization.</li>
                            <li>Built the user interface for data collection into the MySQL database.</li>
                            <li><a href="https://github.com/Daiweiliu112/NIST.git" target="_blank" rel="noopener noreferrer">
                                <VscGithubInverted /> Check out the repository here.
                             </a></li>

                        </ul>
                    </body>
                </div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Carousel slide={false} fade={true} >
                    <Carousel.Item >
                        <img

                            src={Kivy_home}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Homepage</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Kivy_research}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p>Researcher interface</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Kivy_question}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p>Creating a multiple choice question.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Kivy_research2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p>This window shows the current types of question saved and created.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className='block'>
                        <h1>Researcher Interface</h1>
                        <br />
                        <body>
                            The researcher will be authenticated through the MySQL database. Once logged in, the researcher
                            will be able to modify the questions given to the test subject without the need to access the source code.
                        </body>
                    </div>
                </div>


            </div>

            <br />
            <br />
            <br />


            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Carousel slide={false} fade={true} >
                    <Carousel.Item >
                        <img

                            src={box_front}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Front of the box</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={box_side}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p>Side of the box</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={box_trans}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p>Transparent Look </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={assembly}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p>Assembly details</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className='block'>
                        <h1>Hardware</h1>
                        <br />
                        <body>
                            The Raspberry Pi version comes with it's own hardware. It is a box 3D printed to house the Raspberry Pi
                            and a touch screen. The top of the box are tube holders for sample collection. Each tube will have a RFID sticker
                            which will trigger a RFID scanner whenever the test subject carries out a test. This way, the device can record
                            the time stamp and the tube ID for data collection.
                        </body>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default Project3