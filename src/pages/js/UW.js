import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import formal from '../../imgs/math_formal.jpg'
import math_dance3 from '../../imgs/math_dance3.jpg'
import math_dance_crowd from '../../imgs/math_dance_crowd1.jpg'

import orientation from '../../imgs/orientation.png'
import orientation3 from '../../imgs/orientation3.png'
import orientation4 from '../../imgs/orientation4.png'
import orientation5_cut from '../../imgs/orientation5_cut.png'

function UW() {
    return (
        <div>
            <h1> My University Experience</h1>
            <br />
            <br />
            <br />
            <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div className='block_UW'>
                    <body>
                        Hello! Welcome to my site. I am a 4th year statistics student in University of Waterloo and specializes in
                        Biostatistics
                        <br />
                        <br />
                        I have been involved in various exrtracurricular activities during my time in Waterloo. Take a look!

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

                            src={formal}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Organizing Team</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={math_dance3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={math_dance_crowd}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className='block_UW2'>
                        <h1>Math Faculty Ball</h1>
                        <br />
                        <body>
                            During the winter semester of my first year, my friends and I were reached out by MathSoc(Math Society) to revive
                            the Math Ball that have been neglected for several years. Our organizing team was able to not only keep the price affordable 
                            at 15 dollars, but also provided snacks, entertainment and decorations for the venue. It took a lot of running around for grants
                            and favors from our talented friends, but in the end we were able to sell over 200 tickets and had one of my most memorable
                            time of my first year experience.
                        </body>
                    </div>
                </div>


            </div>

            <br/>
            <br/>


            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Carousel slide={false} fade={true} >
                    <Carousel.Item >
                        <img

                            src={orientation}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Organizing Team</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={orientation3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={orientation4}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={orientation5_cut}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className='block_UW2'>
                        <h1>UW Orientation</h1>
                        <br />
                        <body>
                            I volunteered for the first year orientation at University of Waterloo for 2 years. The first time was during
                            my second year, where I was part of the event planning team. My team were responsible for organizing the Friday night
                            events. We designed our night to be carnival like, allowing the first years to freely explore the activities we set up for them. 
                
                        </body>
                    </div>
                </div>


            </div>

            

            


        </div>
    )
}

export default UW