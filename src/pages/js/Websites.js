import React from 'react'
import { VscGithubInverted } from 'react-icons/vsc';

import old_web_about from '../../imgs/old_web_about.png'
import old_web_home from '../../imgs/old_web_home.png'
import old_web_exp from '../../imgs/old_web_exp.png'

import Carousel from 'react-bootstrap/Carousel'





function Websites() {
    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div className='block_web'>
                    <h1>My Websites</h1>
                    <br />
                    <body>
                        <ul>
                            <li><a href="https://github.com/Daiweiliu112/Old-Website.git" target="_blank" rel="noopener noreferrer"><VscGithubInverted /> Repository for the first website.</a></li>
                            <li><a href="https://github.com/Daiweiliu112/react_web.git" target="_blank" rel="noopener noreferrer"><VscGithubInverted /> Repository for the current website.</a></li>
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
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={old_web_home}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={old_web_about}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={old_web_exp}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className='block_web'>
                        <h1>Old Website</h1>
                        <br />
                        <body>
                            This website is made with HTML and CSS only.
                        </body>
                    </div>
                </div>


            </div>
        </div>



    )
}

export default Websites